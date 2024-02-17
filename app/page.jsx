"use client";
import { About } from "@/components/About/About";
import { HeroCard } from "@/components/HeroCard/HeroCard";
import { NavBar } from "@/components/NavBar/NavBar";
import styles from "./page.module.css";
import { Skills } from "@/components/Skills/Skills";

export default function Home() {
    return (
        <div className={styles.app}>
            <NavBar className={styles.navBar}></NavBar>
            <div className={styles.parent}>
                <div className={styles.content}>
                    <HeroCard></HeroCard>
                    <About></About>
                    <Skills />
                </div>
            </div>
        </div>
    );
}
