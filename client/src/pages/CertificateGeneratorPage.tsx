import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";
import bcrypt from "bcryptjs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "wouter";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getQueryFn } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import logoPath from "../assets/logo.jpeg";
import { PlayerWithRegistrationId } from "@/lib/types";

// Hash for the password: sarthSwami99@#9499934
const HASHED_PASSWORD = "$2b$10$Rnk7NGWywEiL1cKkuA.jduy1R3Bzc75QnREePiCnOX/t3za8EHweC";

// Form schema
const formSchema = z.object({
  password: z.string().min(1, "Password is required"),
  fullName: z.string().min(2, "Full name is required"),
  inGameName: z.string().min(2, "In-game name is required"),
  position: z.string().optional(),
  kills: z.string().optional(),
  points: z.string().optional(),
  remarks: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CertificateGeneratorPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [players, setPlayers] = useState<PlayerWithRegistrationId[]>([]);
  const certificateRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Set up form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      fullName: "",
      inGameName: "",
      position: "",
      kills: "",
      points: "",
      remarks: "",
      email: "",
    },
  });

  // Fetch registered players
  useEffect(() => {
    if (authenticated) {
      fetch('/api/players')
        .then(res => res.json())
        .then((data: PlayerWithRegistrationId[]) => {
          setPlayers(data);
        })
        .catch(err => {
          console.error("Error fetching players:", err);
        });
    }
  }, [authenticated]);

  // Handle player selection
  const handlePlayerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEmail = e.target.value;
    if (!selectedEmail) return;
    
    const player = players.find(p => p.email === selectedEmail);
    if (player) {
      form.setValue("fullName", player.fullName);
      form.setValue("inGameName", player.inGameName);
      form.setValue("email", player.email);
    }
  };

  // Email certificate mutation
  const sendEmailMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/certificate/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send certificate');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Certificate sent to participant's email!",
      });
      setIsSending(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send certificate: ${error.message}`,
        variant: "destructive",
      });
      setIsSending(false);
    }
  });

  // Handle login form submission
  const handleLogin = (data: Pick<FormValues, "password">) => {
    const { password } = data;

    // Verify the password
    const isCorrect = bcrypt.compareSync(password, HASHED_PASSWORD);
    
    if (isCorrect) {
      setAuthenticated(true);
      form.reset({
        password: "",
        fullName: "",
        inGameName: "",
        position: "",
        kills: "",
        points: "",
        remarks: "",
        email: "",
      });
    } else {
      toast({
        title: "Authentication Error",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle certificate generation form submission
  const handleGenerateCertificate = (data: FormValues) => {
    setShowCertificate(true);
    // Remove focus from all inputs
    document.querySelectorAll("input, textarea").forEach((el) => {
      (el as HTMLElement).blur();
    });
  };

  const downloadPDF = async () => {
    if (!certificateRef.current) return;

    setLoading(true);
    try {
      const dataUrl = await htmlToImage.toPng(certificateRef.current, {
        quality: 1.0,
        pixelRatio: 3,
        backgroundColor: '#000',
      });

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });
      
      // Dimensions for A4 landscape
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Add image to PDF
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Get form values
      const { fullName, inGameName } = form.getValues();
      const fileName = `${fullName}_${inGameName}_Certificate.pdf`;
      
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const sendEmailWithCertificate = async () => {
    if (!certificateRef.current) return;

    setIsSending(true);
    try {
      const dataUrl = await htmlToImage.toPng(certificateRef.current, {
        quality: 1.0,
        pixelRatio: 3,
        backgroundColor: '#000',
      });

      const { fullName, inGameName, email } = form.getValues();
      
      if (!email) {
        toast({
          title: "Email Required",
          description: "Please provide an email address to send the certificate.",
          variant: "destructive",
        });
        setIsSending(false);
        return;
      }

      sendEmailMutation.mutate({
        email,
        fullName,
        inGameName,
        certificateImage: dataUrl
      });
    } catch (error) {
      console.error('Error sending certificate:', error);
      toast({
        title: "Email Sending Failed",
        description: "There was an error preparing the certificate. Please try again.",
        variant: "destructive",
      });
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black bg-opacity-90 text-white font-rajdhani relative"
    >
      <Header />

      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="font-audiowide text-4xl md:text-5xl text-[#00E5FF] mb-6 relative inline-block">
            Certificate Generator
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></span>
          </h1>
        </motion.div>

        {!authenticated ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="font-orbitron text-2xl text-[#FF5722] mb-6">Admin Authentication</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter admin password"
                            className="bg-gray-800/70 border-gray-700 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#FF5722] hover:bg-[#FF5722]/80 text-white"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>This area is restricted to tournament administrators only.</p>
              <Link href="/" className="text-[#00E5FF] hover:underline mt-2 inline-block">
                Return to Homepage
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
                <h2 className="font-orbitron text-2xl text-[#FF5722] mb-6">Generate Certificate</h2>
                
                <div className="mb-6">
                  <label className="block text-white mb-2 font-orbitron">Select Registered Player</label>
                  <select 
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-md p-3 text-white focus:border-[#00E5FF]" 
                    onChange={handlePlayerSelect}
                  >
                    <option value="">Choose a player</option>
                    {players.map((player) => (
                      <option key={player.id} value={player.email}>
                        {player.fullName} ({player.inGameName})
                      </option>
                    ))}
                  </select>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleGenerateCertificate)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter participant's full name"
                                className="bg-gray-800/70 border-gray-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inGameName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">In-Game Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter in-game name"
                                className="bg-gray-800/70 border-gray-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Position</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 1st, 2nd"
                                className="bg-gray-800/70 border-gray-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="kills"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Total Kills</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Number of kills"
                                className="bg-gray-800/70 border-gray-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="points"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Total Points</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Total points"
                                className="bg-gray-800/70 border-gray-700 text-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="remarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Remarks</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Additional remarks or achievements"
                              className="bg-gray-800/70 border-gray-700 text-white resize-none h-24"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email (for sending certificate)</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter participant's email"
                              className="bg-gray-800/70 border-gray-700 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <Button
                        type="submit"
                        className="bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black font-bold"
                      >
                        Generate Certificate
                      </Button>
                      
                      <Button
                        type="button"
                        onClick={() => setAuthenticated(false)}
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-gray-800"
                      >
                        Logout
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {showCertificate && (
                <div className="space-y-4">
                  <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 backdrop-blur-sm overflow-hidden">
                    <h2 className="font-orbitron text-2xl text-[#FF5722] mb-6">Certificate Preview</h2>
                    
                    <div className="certificate-container overflow-hidden rounded-lg border-2 border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.5)] mb-6">
                      <div 
                        ref={certificateRef}
                        className="certificate relative bg-black w-full aspect-[1.414/1] p-8 text-white flex flex-col items-center justify-center"
                      >
                        {/* Background patterns */}
                        <div className="absolute inset-0 cyber-grid opacity-20"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#00E5FF] to-transparent"></div>
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00E5FF] to-transparent"></div>
                        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-t from-[#00E5FF] to-transparent"></div>
                        
                        {/* Corner decorations */}
                        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#FF5722]"></div>
                        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-[#FF5722]"></div>
                        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#FF5722]"></div>
                        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#FF5722]"></div>
                        
                        {/* Certificate content */}
                        <div className="relative z-10 text-center flex flex-col items-center max-w-2xl mx-auto">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-20 relative">
                              <div className="absolute inset-0 border-2 border-[#FF5722] rounded-full animate-pulse"></div>
                              <img 
                                src={logoPath} 
                                alt="Sarth Esports Logo" 
                                className="w-full h-full object-cover rounded-full p-1"
                              />
                            </div>
                            <h1 className="font-audiowide text-2xl md:text-3xl">
                              <span className="text-[#00E5FF]">SARTH</span>{" "}
                              <span className="text-[#FF5722]">ESPORTS</span>
                            </h1>
                          </div>
                          
                          <h2 className="font-orbitron text-xl text-white mb-1">CERTIFICATE OF PARTICIPATION</h2>
                          <div className="w-60 h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent mb-6"></div>
                          
                          <p className="text-gray-400 mb-4">This certifies that</p>
                          
                          <h3 className="font-audiowide text-3xl text-[#00E5FF] mb-1">
                            {form.watch("fullName")}
                          </h3>
                          <p className="font-orbitron text-lg text-white mb-4">
                            "{form.watch("inGameName")}"
                          </p>
                          
                          <p className="text-gray-300 mb-6 max-w-md">
                            has participated in the Free Fire Bermuda Solo Tournament organized by Sarth Esports
                            on <span className="text-[#FF5722]">6 April 2025</span>.
                          </p>
                          
                          {/* Stats section */}
                          {(form.watch("position") || form.watch("kills") || form.watch("points")) && (
                            <div className="bg-black/50 border border-[#00E5FF]/30 rounded-lg p-4 mb-6 backdrop-blur-sm w-full max-w-sm">
                              <h4 className="font-orbitron text-sm text-[#FF5722] mb-2">TOURNAMENT PERFORMANCE</h4>
                              
                              <div className="grid grid-cols-3 gap-4 text-center">
                                {form.watch("position") && (
                                  <div>
                                    <p className="text-xs text-gray-400">POSITION</p>
                                    <p className="font-orbitron text-lg text-white">{form.watch("position")}</p>
                                  </div>
                                )}
                                
                                {form.watch("kills") && (
                                  <div>
                                    <p className="text-xs text-gray-400">KILLS</p>
                                    <p className="font-orbitron text-lg text-white">{form.watch("kills")}</p>
                                  </div>
                                )}
                                
                                {form.watch("points") && (
                                  <div>
                                    <p className="text-xs text-gray-400">POINTS</p>
                                    <p className="font-orbitron text-lg text-white">{form.watch("points")}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Remarks */}
                          {form.watch("remarks") && (
                            <p className="text-gray-300 italic mb-6 max-w-md text-center">
                              "{form.watch("remarks")}"
                            </p>
                          )}
                          
                          {/* Dates and signatures */}
                          <div className="w-full flex justify-between mt-4 text-sm">
                            <div className="text-center">
                              <p className="text-[#00E5FF]">QUALIFIERS</p>
                              <p className="text-gray-400">5 April 2025</p>
                            </div>
                            
                            <div className="text-center border-b border-[#FF5722] pb-1">
                              <p className="text-gray-400 mt-6">Tournament Director</p>
                            </div>
                            
                            <div className="text-center">
                              <p className="text-[#00E5FF]">FINALS</p>
                              <p className="text-gray-400">6 April 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={downloadPDF}
                        className="bg-[#FF5722] hover:bg-[#FF5722]/80 text-white font-bold relative overflow-hidden group"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Download Certificate (PDF)"}
                        <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/10 rounded-lg"></div>
                      </Button>
                      
                      <Button
                        onClick={sendEmailWithCertificate}
                        className="bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black font-bold relative overflow-hidden group"
                        disabled={isSending || !form.watch("email")}
                      >
                        {isSending ? "Sending..." : "Send to Email"}
                        <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-black/10 rounded-lg"></div>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </motion.div>
  );
}