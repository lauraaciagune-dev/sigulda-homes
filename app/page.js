"use client";

import { useState } from "react";
import Image from "next/image";

export default function SiguldaHomesLandingPage() {
  const features = [
  "145 m²",
  "2 stāvi",
  "3 guļamistabas",
  "3 vannasistabas",
  "Pilnībā aprīkota virtuve",
  "Gaisa kondicionieri",
  "Gaisa rekuperācijas sistēma",
  "Signalizācijas sistēma",
  "Ofisa telpa",
  "Veļas istaba",
  "Saimniecības telpa",
  "Terase ar nojumi",
  "2 automašīnu nojume",
];


  const gallery = [
  { title: "Skats", file: "/1skats.jpeg" },
  { title: "Skats", file: "/2skats.jpeg" },
  { title: "Skats", file: "/3skats.jpeg" },
  { title: "Skats", file: "/4skats.jpg" },

  { title: "Fasāde", file: "/5fasāde.jpg" },
  { title: "Fasāde", file: "/6fasāde.jpg" },

  { title: "Durvis", file: "/7durvis.jpg" },
  { title: "Ieeja", file: "/8ieeja.jpg" },

  { title: "Virtuve", file: "/9virtuve.jpg" },
  { title: "Virtuve", file: "/10virtuve.jpg" },
  { title: "Virtuve", file: "/11virtuve.jpg" },

  { title: "Dzīvojamā istaba", file: "/12dzivistaba.jpg" },
  { title: "Dzīvojamā istaba", file: "/13dzivistaba.jpg" },

  { title: "Tualete", file: "/14tualete.jpg" },

  { title: "Ofiss", file: "/15ofis.jpg" },
  { title: "Ofiss", file: "/15ofiss.jpg" },
  { title: "Kāpnes", file: "/15trepes.jpg" },

  { title: "Otrais stāvs", file: "/16otrstavs.jpg" },

  { title: "Veļas istaba", file: "/17velasistaba.jpg" },
  { title: "Veļas istaba", file: "/18veļasistaba.jpg" },

  { title: "Guļamistaba", file: "/19guļamistaba.jpg" },
  { title: "Guļamistaba", file: "/20guļistaba.jpg" },

  { title: "Skapis", file: "/21skapis.jpg" },
  { title: "Kondicionieris", file: "/22kondicionieris.jpg" },
  { title: "Temperatūras pults", file: "/23temppults.jpg" },

  { title: "Vannas istaba", file: "/24vannasist.jpg" },
  { title: "Vannas istaba", file: "/25vannasist.jpg" },
  { title: "Duša", file: "/26duša.jpg" },

  { title: "Guļamistaba", file: "/27aguļist.jpg" },
  { title: "Guļamistaba", file: "/27bguļist.jpg" },
  { title: "Guļamistaba", file: "/27guļist.jpg" },
  { title: "Guļamistaba", file: "/28guļist.jpg" },

  { title: "Guļamistaba", file: "/29guļist.jpg" },

  { title: "Signalizācija", file: "/31signalizacija.jpg" },
  { title: "Apkures telpa", file: "/32apkure.jpg" }
];
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero-fullscreen">
        <Image
          src="/hero.jpeg"
          alt="Modernas mājas Siguldā"
          fill
          priority
          className="hero-fullscreen-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-text-box">
            <div className="pill pill-dark">Sigulda · Krišjāņa Barona iela 39</div>
            <h1>Labākās mājas, labākajā vietā.</h1>
            <p className="lead hero-lead">
              Modernas mājas ģimenēm Siguldā — kvalitatīva ilgtermiņa dzīvesvieta.
            </p>

            <div className="stats hero-stats">
              <div className="card stat-card">
                <div className="label">Platība</div>
                <div className="value">145 m²</div>
              </div>
              <div className="card stat-card">
                <div className="label">Cena</div>
                <div className="value">2000 € / mēn.</div>
              </div>
              <div className="card stat-card">
                <div className="label">Guļamistabas</div>
                <div className="value">3</div>
              </div>
              <div className="card stat-card">
                <div className="label">Vannasistabas</div>
                <div className="value">3</div>
              </div>
            </div>

            <div className="button-row">
              <a href="#kontakti" className="button button-dark">
                Pieteikt apskati
              </a>
              <a href="#galerija" className="button button-light">
                Skatīt galeriju
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* ABOUT */}
<section className="section section-warm">
  <div className="container two-col about-grid">
    <div className="about-copy">
      <div className="section-tag">Ģimenēm piemērota dzīvesvieta</div>
      <h2>Par māju</h2>

      <p className="text">
        Īrei pieejamas 6 mājas (3 dvīņu mājas) Siguldā, Krišjāņa Barona ielā 39.
        Mājas paredzētas ilgtermiņa dzīvošanai ģimenēm, kurām svarīga kvalitatīva
        vide, moderna apdare un ērta atrašanās vieta.
      </p>

      <p className="text">
        Katra māja ir daļēji aprīkota: pilnībā aprīkota virtuve, iebūvēti skapji,
        veļas istaba, terase ar nojumi, gaisa kondicionieri, gaisa rekuperācijas
        sistēma, signalizācijas sistēma un citi noderīgi papildinājumi.
      </p>
    <div className="card info-card warm-card info-card-strong">
      <h3>Galvenā informācija</h3>
      <div className="info-list">
        <div className="info-row">
          <span>Adrese</span>
          <strong>Krišjāņa Barona iela 39, Sigulda</strong>
        </div>
        <div className="info-row">
          <span>Īres maksa</span>
          <strong>2000 € mēnesī</strong>
        </div>
        <div className="info-row">
          <span>Platība</span>
          <strong>145 m²</strong>
        </div>
        <div className="info-row">
          <span>Māju skaits projektā</span>
          <strong>6 mājas / 3 dvīņu mājas</strong>
        </div>
        <div className="info-row no-border">
          <span>Kontakts</span>
          <strong>Ingus · +371 29384845</strong>
        </div>
      </div>
    </div>
  </div>
</section>
  
      {/* FEATURES */}
      <section className="section section-soft">
        <div className="container">
          <h2>Plānojums un aprīkojums</h2>
          <p className="section-intro">
            Svarīgākā informācija par telpām un iekļauto aprīkojumu.
          </p>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature} className="card feature-card warm-card">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="section section-warm">
        <div className="container">
          <h2>Foto galerija</h2>
          <p className="section-intro">
          
          </p>

          <div className="gallery-grid large-gallery-grid">
            {gallery.map((item, index) => (
              <button
                key={item.file}
                className="gallery-card gallery-card-button"
                onClick={() => openLightbox(index)}
                type="button"
              >
                <div className="gallery-image-wrap large-gallery-image-wrap">
                  <Image
                    src={item.file}
                    alt={item.title}
                    fill
                    className="gallery-image"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

    {/* FLOOR PLAN */}
<section className="section section-soft">
  <div className="container">
    <h2>Mājas plānojums</h2>
    <p className="section-intro">
      
    </p>

    <a
      href="/floor-plan.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="button button-dark"
    >
      Atvērt plānojumu
    </a>

  </div>
</section>

{/* LOCATION */}
<section className="section section-soft">
  <div className="container location-layout">
    <div className="location-copy">
      <h2>Lokācija</h2>

      <p className="text">
        Mājas atrodas Siguldas pilsētas centrālajā daļā - skaistā, mierīgā un drošā vidē,
        kas ir īpaši piemērota ģimenēm.
      </p>

      <p className="text">
        Viss nepieciešamai komfortablai ikdienai ir pāris minūšu gājiena attālumā - 
       skola, bērnudārzs, sporta centrs, stadions, pilsētas trase, pārtikas veikals, 
       mežs un viss kas cits. 
      </p>

      <div className="location-address-box">
        <div className="location-address-label">Adrese</div>
        <div className="location-address-value">
          Krišjāņa Barona iela 39, Sigulda
        </div>
      </div>

      <div className="map-shell">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps?q=Krišjāņa+Barona+iela+39+Sigulda&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Krišjāņa Barona iela 39, Sigulda"
          />
        </div>

        <div className="button-row">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Krišjāņa+Barona+iela+39,+Sigulda"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            Atvērt Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT */}
<section id="kontakti" className="section section-soft">
  <div className="container">
    <div className="contact-box warm-contact-box">
      <div>
        <h2>Piesakiet apskati</h2>
        <p className="contact-text">
          Lai saņemtu papildu informāciju vai vienotos par apskates laiku,
          sazinieties pa tālruni.
        </p>
      </div>

      <div className="contact-card">
        <div>
          <div className="contact-label">Kontakts</div>
          <div className="contact-value">Ingus</div>
        </div>
        <div>
          <div className="contact-label">Tālrunis</div>
          <a href="tel:+37129384845" className="contact-link">
            +371 29384845
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-image-wrap">
              <Image
                src={gallery[activeIndex].file}
                alt={gallery[activeIndex].title}
                fill
                className="lightbox-image"
              />
            </div>
            <div className="lightbox-caption">{gallery[activeIndex].title}</div>
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
