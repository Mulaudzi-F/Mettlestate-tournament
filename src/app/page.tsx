// app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { EventDetails } from "@/components/sections/EventDetails";

import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Leaderboard } from "@/components/sections/LeaderBoard";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <Leaderboard />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
