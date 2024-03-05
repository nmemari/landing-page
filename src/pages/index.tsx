import Image from "next/image";

import styles from "@/styles/Home.module.css";

import NavBar from "@/components/NavBar";
import IntroSection from "@/components/IntroSection";
import StatSection from "@/components/StatSection";
import PlanSection from "@/components/PlanSection";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <IntroSection />
      <StatSection />
      <PlanSection />
      <NewsLetter />
      <Footer />
    </main>
  );
}