import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { insertPlayerSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";

type FormData = {
  playerName: string;
  inGameName: string;
  uid: string;
  rulesAgreement: boolean;
};

export default function RegistrationForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(insertPlayerSchema),
    defaultValues: {
      playerName: "",
      inGameName: "",
      uid: "",
      rulesAgreement: false
    },
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await apiRequest('POST', '/api/players/register', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/players'] });
      toast({
        title: "Registration Successful!",
        description: "Check your email for confirmation details.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again or contact support.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(data: FormData) {
    mutate(data);
  }

  // Animation variants
  const formAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="registration" className="py-24 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid absolute inset-0 opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-game-accent via-transparent to-game-accent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue via-transparent to-game-blue opacity-30"></div>
      </div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-game-accent opacity-5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-game-blue opacity-5 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Decorative circuit lines */}
      <div className="absolute left-0 top-1/4 w-1/3 h-px bg-gradient-to-r from-transparent via-game-blue to-transparent opacity-30"></div>
      <div className="absolute right-0 bottom-1/3 w-1/3 h-px bg-gradient-to-l from-transparent via-game-accent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={formAnimation}
        >
          <motion.div 
            className="text-center mb-12"
            variants={itemAnimation}
          >
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-game-accent/20 to-transparent border-r border-b border-game-accent mb-3">
              <h6 className="font-orbitron text-game-accent text-sm uppercase tracking-wider">Join The Battle</h6>
            </div>
            <h2 className="font-audiowide text-4xl md:text-5xl mb-4 text-white">
              REGISTER <span className="text-game-blue">NOW</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enter your details below to secure your spot in the tournament and compete for glory
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-black/70 backdrop-blur-sm p-8 md:p-10 rounded-lg border border-gray-800 relative overflow-hidden"
            variants={itemAnimation}
          >
            {/* Form container with decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-game-blue via-transparent to-game-accent"></div>
            <div className="absolute -top-12 -right-12 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#FF5722" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="#FF5722" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="20" stroke="#FF5722" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div className="absolute -bottom-12 -left-12 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#00E5FF" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="#00E5FF" strokeWidth="1" fill="none" />
                <circle cx="50" cy="50" r="20" stroke="#00E5FF" strokeWidth="1" fill="none" />
              </svg>
            </div>
            
            {/* Registration Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Player Name */}
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="playerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-orbitron text-base mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          PLAYER NAME
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your real name"
                            className="w-full bg-gray-900/60 border border-gray-700 focus:border-game-blue text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-game-blue/50 transition-all"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                {/* In-Game Name */}
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="inGameName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-orbitron text-base mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </svg>
                          IN-GAME NAME (IGN)
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your Free Fire username"
                            className="w-full bg-gray-900/60 border border-gray-700 focus:border-game-blue text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-game-blue/50 transition-all"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                {/* Free Fire UID */}
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="uid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-orbitron text-base mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-game-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          FREE FIRE UID
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your 9-12 digit player ID"
                            className="w-full bg-gray-900/60 border border-gray-700 focus:border-game-blue text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-game-blue/50 transition-all"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                        <div className="text-gray-400 text-xs mt-1 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1 text-game-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                          </svg>
                          Your UID can be found in your Free Fire profile
                        </div>
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                {/* Tournament Rules Agreement */}
                <motion.div variants={itemAnimation}>
                  <FormField
                    control={form.control}
                    name="rulesAgreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-game-accent/5 p-4 rounded border border-game-accent/20">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 data-[state=checked]:bg-game-accent data-[state=checked]:text-black"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-300">
                            I agree to follow all tournament rules and regulations. I understand that any form of cheating will result in immediate disqualification.
                          </FormLabel>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </div>
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                {/* Submit Button */}
                <motion.div 
                  className="mt-8"
                  variants={itemAnimation}
                >
                  <motion.button 
                    type="submit" 
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-game-accent to-red-700 text-white font-orbitron text-lg py-4 rounded transition-all disabled:opacity-70"
                    disabled={isPending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-game-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center uppercase tracking-wider">
                      {isPending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          PROCESSING...
                        </>
                      ) : (
                        <>
                          REGISTER FOR TOURNAMENT
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
                
                {/* Status Messages */}
                <div className="space-y-4">
                  {/* Success Message */}
                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-900/30 border border-green-500/30 text-green-300 p-4 rounded flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>Registration successful! Check your email for confirmation details.</span>
                    </motion.div>
                  )}
                  
                  {/* Error Message */}
                  {isError && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-900/30 border border-red-500/30 text-red-300 p-4 rounded flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                      <span>Registration failed. Please try again or contact support.</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </Form>
          </motion.div>
          
          {/* Additional information */}
          <motion.div 
            className="mt-8 text-center text-gray-400 text-sm"
            variants={itemAnimation}
          >
            <p>By registering, you'll receive updates about the tournament via email.</p>
            <p className="mt-2">
              For assistance, contact: 
              <a 
                href="mailto:deadsec.darky@gmail.com" 
                className="text-game-blue ml-1 hover:text-game-accent transition-colors border-b border-dashed border-game-blue/30"
              >
                deadsec.darky@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
