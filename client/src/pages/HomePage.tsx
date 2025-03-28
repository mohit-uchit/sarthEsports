import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TournamentDetails from "@/components/TournamentDetails";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TournamentDetails />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
