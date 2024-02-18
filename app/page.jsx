"use client";
import { About } from "@/components/About/About";
import { HeroCard } from "@/components/HeroCard/HeroCard";
import { NavBar } from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import { Skills } from "@/components/Skills/Skills";
import { Certifications } from "@/components/Certifications/Certifications";

export default function Home() {
  return (
    <div className={styles.app}>
      <NavBar className={styles.navBar}></NavBar>
      <div className={styles.parent}>
        <div className={styles.content}>
          <HeroCard/>
          <About/>
          <Skills />
          <Certifications/>
        </div>
      </div>
    </div>
  );
}
