"use client";
import { About } from "@/components/About/About";
import { HeroCard } from "@/components/HeroCard/HeroCard";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroCard></HeroCard>
      <About></About>
    </div>
  );
}
