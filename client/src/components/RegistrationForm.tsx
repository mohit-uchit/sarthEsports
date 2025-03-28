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

  return (
    <section id="registration" className="py-16 relative cyber-grid">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-game-accent opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-game-blue opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h6 className="font-orbitron text-game-accent text-sm mb-2 uppercase tracking-widest">Join The Battle</h6>
            <h2 className="font-audiowide text-3xl md:text-4xl mb-2">REGISTER NOW</h2>
            <p className="text-game-text-dim">Enter your details below to secure your spot in the tournament</p>
          </div>
          
          <div className="bg-game-dark-alt p-6 md:p-8 rounded-md relative">
            {/* Form container with decorative elements */}
            <div className="absolute top-0 left-0 w-16 h-1 bg-game-accent"></div>
            <div className="absolute top-0 right-0 w-16 h-1 bg-game-blue"></div>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-game-blue"></div>
            <div className="absolute bottom-0 right-0 w-16 h-1 bg-game-accent"></div>
            
            {/* Registration Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Player Name */}
                <FormField
                  control={form.control}
                  name="playerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-orbitron text-sm mb-2">PLAYER NAME</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your real name"
                          className="w-full bg-game-dark border border-game-blue-dim text-white px-4 py-3 rounded-sm focus:outline-none input-glow"
                        />
                      </FormControl>
                      <FormMessage className="text-game-error text-sm mt-1" />
                    </FormItem>
                  )}
                />
                
                {/* In-Game Name */}
                <FormField
                  control={form.control}
                  name="inGameName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-orbitron text-sm mb-2">IN-GAME NAME (IGN)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your Free Fire username"
                          className="w-full bg-game-dark border border-game-blue-dim text-white px-4 py-3 rounded-sm focus:outline-none input-glow"
                        />
                      </FormControl>
                      <FormMessage className="text-game-error text-sm mt-1" />
                    </FormItem>
                  )}
                />
                
                {/* Free Fire UID */}
                <FormField
                  control={form.control}
                  name="uid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-orbitron text-sm mb-2">FREE FIRE UID</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your 9-12 digit player ID"
                          className="w-full bg-game-dark border border-game-blue-dim text-white px-4 py-3 rounded-sm focus:outline-none input-glow"
                        />
                      </FormControl>
                      <FormMessage className="text-game-error text-sm mt-1" />
                      <div className="text-game-text-dim text-xs mt-1">Your UID can be found in your Free Fire profile</div>
                    </FormItem>
                  )}
                />
                
                {/* Tournament Rules Agreement */}
                <FormField
                  control={form.control}
                  name="rulesAgreement"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I agree to follow all tournament rules and regulations. I understand that any form of cheating will result in immediate disqualification.
                        </FormLabel>
                        <FormMessage className="text-game-error text-sm mt-1" />
                      </div>
                    </FormItem>
                  )}
                />
                
                {/* Submit Button */}
                <div className="mt-8">
                  <button 
                    type="submit" 
                    className="w-full bg-game-accent hover:bg-game-accent-hover text-black font-orbitron text-lg py-4 rounded-sm transition-all transform hover:scale-[1.01] uppercase tracking-wider disabled:opacity-70"
                    disabled={isPending}
                  >
                    {isPending ? "PROCESSING..." : "REGISTER FOR TOURNAMENT"}
                  </button>
                </div>
                
                {/* Success Message */}
                {isSuccess && (
                  <div className="bg-game-success bg-opacity-20 border border-game-success text-white p-4 rounded-sm mt-4">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>Registration successful! Check your email for confirmation details.</span>
                    </div>
                  </div>
                )}
                
                {/* Error Message */}
                {isError && (
                  <div className="bg-game-error bg-opacity-20 border border-game-error text-white p-4 rounded-sm mt-4">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      <span>Registration failed. Please try again or contact support.</span>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
          
          {/* Additional information */}
          <div className="mt-8 text-center text-game-text-dim text-sm">
            <p>By registering, you'll receive updates about the tournament via email.</p>
            <p className="mt-2">For assistance, contact: <a href="mailto:deadsec.darky@gmail.com" className="text-game-blue">deadsec.darky@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
