// app/page.tsx
"use client";
import { Hero } from "@/components/sections/Hero";
import { EventDetails } from "@/components/sections/EventDetails";

import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Leaderboard } from "@/components/sections/LeaderBoard";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <Hero setIsModalOpen={setIsModalOpen} />
      <EventDetails />
      <Leaderboard />
      <RegistrationForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <FAQ />
      <Footer />
    </main>
  );
}
