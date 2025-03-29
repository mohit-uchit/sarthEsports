import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPlayerSchema } from "../../../shared/schema";
import { useToast } from "../hooks/use-toast";
import { CardWithNeon } from "./ui/card-with-neon";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { validateEmail, validateUID, validatePhone } from "../lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { generateRegistrationId } from "../lib/utils";
import { PlayerWithRegistrationId, RegistrationResponse, TournamentStatus } from "../lib/types";

type FormData = {
  fullName: string;
  inGameName: string;
  uid: string;
  email: string;
  phone: string;
  agreement: boolean;
};

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registeredPlayer, setRegisteredPlayer] = useState<PlayerWithRegistrationId | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  // Get tournament registration status
  const { data: tournamentStatus, isLoading: isTournamentStatusLoading } = useQuery<TournamentStatus>({
    queryKey: ['/api/tournament/status'],
    refetchInterval: 60000, // Refetch every minute
  });

  const form = useForm<FormData>({
    resolver: zodResolver(insertPlayerSchema),
    defaultValues: {
      fullName: "",
      inGameName: "",
      uid: "",
      email: "",
      phone: "",
      agreement: false,
    },
  });

  const { mutate, isPending } = useMutation<RegistrationResponse, Error, FormData>({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest(
        'POST',
        '/api/players/register',
        data
      );
      return response.json();
    },
    onSuccess: (data) => {
      // Create a player with registration ID
      const playerWithId = generateRegistrationId(data.player);
      setRegisteredPlayer(playerWithId);
      
      // Set email status
      setEmailSent(data.emailSent || false);
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      form.reset();
      
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      console.error("Registration error:", error);
      
      let errorMessage = "An error occurred during registration. Please try again.";
      if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
      
      setIsSubmitting(false);
    },
  });

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    
    // Validate email and UID formats
    if (!validateEmail(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!validateUID(data.uid)) {
      toast({
        title: "Invalid UID",
        description: "Free Fire UID must be 9-12 digits",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(data.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Submit data
    mutate(data);
  }

  return (
    <section
      id="registration"
      className="relative py-20 px-4 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tournament Registration
          </h2>
          <p className="text-cyan-400 mt-2 text-lg">Sign up for the Free Fire Bermuda Solo Tournament</p>
          <Separator className="mt-4 bg-cyan-800/50 mx-auto w-24" />
        </div>

        <div className="max-w-xl mx-auto">
          {/* Tournament Status */}
          <div className="mb-8">
            <CardWithNeon>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-4">Registration Status</h3>
                
                {isTournamentStatusLoading ? (
                  <div className="flex items-center justify-center py-2">
                    <Loader2 className="h-6 w-6 text-cyan-400 animate-spin" />
                    <span className="ml-2 text-gray-300">Loading status...</span>
                  </div>
                ) : (
                  <>
                    {tournamentStatus?.isFull ? (
                      <div className="bg-red-900/20 border border-red-800/30 rounded-md p-4 mb-4">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                          <p className="text-red-400 font-medium">Registration is currently full</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">
                          All slots have been filled. Please check back later for any openings.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-green-900/20 border border-green-800/30 rounded-md p-4 mb-4">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <p className="text-green-400 font-medium">Registration is open</p>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                          <div className="bg-black/30 rounded p-2">
                            <p className="text-lg font-bold text-white">{tournamentStatus?.registeredCount || 0}</p>
                            <p className="text-xs text-gray-400">Registered</p>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <p className="text-lg font-bold text-white">{tournamentStatus?.maxPlayers || 48}</p>
                            <p className="text-xs text-gray-400">Total Slots</p>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <p className="text-lg font-bold text-cyan-400">{tournamentStatus?.availableSlots || 0}</p>
                            <p className="text-xs text-gray-400">Available</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </CardWithNeon>
          </div>

          {/* Registration Form */}
          <CardWithNeon>
            <div className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="bg-gray-800/50 border-gray-700"
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
                              placeholder="Your Free Fire username" 
                              {...field} 
                              className="bg-gray-800/50 border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="uid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Free Fire UID</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your 9-12 digit Free Fire UID" 
                            {...field} 
                            className="bg-gray-800/50 border-gray-700"
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          This is your unique player ID visible in your Free Fire profile
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your-email@example.com" 
                              {...field} 
                              className="bg-gray-800/50 border-gray-700"
                            />
                          </FormControl>
                          <FormDescription className="text-gray-400">
                            For registration confirmation
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="+91 9XXXXXXXX" 
                              {...field} 
                              className="bg-gray-800/50 border-gray-700"
                            />
                          </FormControl>
                          <FormDescription className="text-gray-400">
                            For WhatsApp group updates
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="agreement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-700 p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-white">
                            I agree to the tournament rules and guidelines
                          </FormLabel>
                          <FormDescription className="text-gray-400">
                            By checking this box, you confirm that you have read and agree to follow all tournament rules.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600"
                    disabled={isSubmitting || tournamentStatus?.isFull}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      <>
                        Register Now 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </CardWithNeon>
        </div>

        {/* Registration Guidance */}
        <div className="mt-8 max-w-xl mx-auto">
          <CardWithNeon>
            <div className="p-6">
              <h3 className="text-white font-medium mb-2">Registration Guidelines</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Registration confirms your slot in the tournament</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>You'll receive tournament details via email and WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Be ready 15 minutes before your match time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Custom room passwords will be shared in the WhatsApp group</span>
                </li>
              </ul>
            </div>
          </CardWithNeon>
        </div>
      </motion.div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-gray-900 border border-cyan-900/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-cyan-400">Registration Successful!</DialogTitle>
            <DialogDescription className="text-gray-300">
              You've successfully registered for the Free Fire Bermuda Solo Tournament.
            </DialogDescription>
          </DialogHeader>
          
          {registeredPlayer && (
            <div className="bg-black/50 p-4 rounded-md border border-cyan-900/30 mt-4">
              <h4 className="text-white font-medium mb-2">Registration Details</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Name:</p>
                  <p className="text-white">{registeredPlayer.fullName}</p>
                </div>
                <div>
                  <p className="text-gray-400">In-Game Name:</p>
                  <p className="text-white">{registeredPlayer.inGameName}</p>
                </div>
                <div>
                  <p className="text-gray-400">Registration ID:</p>
                  <p className="text-cyan-400 font-mono">{registeredPlayer.registrationId}</p>
                </div>
                <div>
                  <p className="text-gray-400">UID:</p>
                  <p className="text-white">{registeredPlayer.uid}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-cyan-900/20 p-4 rounded-md text-sm text-gray-300 mt-2">
            <p>
              <span className="text-cyan-400 font-bold">Important:</span> Please save your 
              registration ID for reference. 
              {emailSent ? (
                <span className="text-green-400 block mt-2">
                  ✓ Confirmation email sent to your registered email address.
                </span>
              ) : (
                <span className="text-yellow-400 block mt-2">
                  ⚠️ Confirmation email could not be sent. You'll still receive WhatsApp updates.
                </span>
              )}
            </p>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600"
            >
              Got it!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}