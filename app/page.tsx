import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { MyWorksSection } from "@/components/sections/MyWorksSection";
import { OurClientsSection } from "@/components/sections/OurClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <BeforeAfterSection />
      <MyWorksSection />
      <OurClientsSection />
      <ContactSection />
    </>
  );
}
