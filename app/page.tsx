"use client";
import { useRouter } from "next/navigation";
import Starfield from "./components/Starfield";

export default function Home() {
  const router = useRouter();

  return (
    <main className="birthday-page">
      <Starfield />

      <section className="hero-content">
        <p className="warning">Nee kosam specialga ✨</p>

        <h1 className="hero-title">
          Hey, Birthday Girl<span className="name-gradent">Sree</span>
        </h1>

        <p className="hero-subtitle">
          Ee roju special ga cheyalani anukunna. Ready aa?
        </p>

        <div className="button-wrapper">
          <button className="surprise-button" onClick={() => router.push("/sree")}>
            🎁 Chudalane undha!!!
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}