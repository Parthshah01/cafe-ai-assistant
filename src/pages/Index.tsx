import { Header } from "@/components/cafe/Header";
import { Hero } from "@/components/cafe/Hero";
import { MenuSection } from "@/components/cafe/MenuSection";
import { Story } from "@/components/cafe/Story";
import { Visit } from "@/components/cafe/Visit";
import { Footer } from "@/components/cafe/Footer";
import { Chatbot } from "@/components/cafe/Chatbot";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <MenuSection />
      <Story />
      <Visit />
    </main>
    <Footer />
    <Chatbot />
  </div>
);

export default Index;
