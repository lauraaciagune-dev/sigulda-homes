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
    { title: "Mājas ārpuse", file: "/73_5X8A6434 (1).jpg" },
    { title: "Mājas ārpuse", file: "/77_5X8A6446.jpg" },
    { title: "Vannas istaba", file: "/10_5X8A6239.jpg" },
    { title: "Saimniecības telpa", file: "/12_5X8A6245.jpg" },
    { title: "Dušas zona", file: "/14_5X8A6251.jpg" },
    { title: "Sanmezgls", file: "/15_5X8A6254 (1).jpg" },
    { title: "Guļamistaba", file: "/17_5X8A6260.jpg" },
    { title: "Guļamistaba", file: "/19_5X8A6266.jpg" },
    { title: "Skapis", file: "/20_5X8A6269 (1).jpg" },
    { title: "Telpa", file: "/21_5X8A6272.jpg" },
    { title: "Kāpņu zona", file: "/22_5X8A6275.jpg" },
    { title: "Kāpņu zona", file: "/23_5X8A6278.jpg" },
    { title: "Telpa", file: "/25_5X8A6284.jpg" },
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
          src="/73_5X8A6434 (1).jpg"
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
        Katra māja ir daļēji aprīkota — pilnībā aprīkota virtuve, iebūvēti skapji,
        veļas istaba, terase ar nojumi, gaisa kondicionieri, gaisa rekuperācijas
        sistēma, signalizācijas sistēma un citi noderīgi papildinājumi.
      </p>

      <div className="about-highlight-row">
        <div className="about-highlight-card">
          <div className="about-highlight-value">145 m²</div>
          <div className="about-highlight-label">Plaša dzīvojamā platība</div>
        </div>

        <div className="about-highlight-card">
          <div className="about-highlight-value">3 guļamistabas</div>
          <div className="about-highlight-label">Piemērota ģimenes ikdienai</div>
        </div>
      </div>
    </div>

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
      <div className="section-tag">Ikdienā viss sasniedzams ātri</div>
      <h2>Lokācija</h2>

      <p className="text">
        Mājas atrodas Siguldas pilsētas centrālajā daļā, mierīgā un drošā vidē,
        kas ir īpaši piemērota ģimenēm.
      </p>

      <p className="text">
        Dažu minūšu gājiena attālumā pieejamas skolas, bērnudārzs, sporta centrs,
        stadions, pilsētas trase, pārtikas veikals un bērnu laukumiņš.
      </p>

      <div className="location-address-box">
        <div className="location-address-label">Adrese</div>
        <div className="location-address-value">
          Krišjāņa Barona iela 39, Sigulda
        </div>
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

    <div className="map-shell">
      <div className="map-combo">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps?q=Krišjāņa+Barona+iela+39+Sigulda&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Krišjāņa Barona iela 39, Sigulda"
          ></iframe>
        </div>

        <div className="street-view-box">
          <iframe
            src="https://www.google.com/maps?q=&layer=c&cbll=57.1530,24.8590&cbp=11,0,0,0,0"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Street View"
          ></iframe>
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
