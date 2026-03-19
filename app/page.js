import Image from "next/image";

export default function SiguldaHomesLandingPage() {
  const features = [
    "145 m²",
    "2 stāvi",
    "3 guļamistabas",
    "3 vannasistabas",
    "Pilnībā aprīkota virtuve",
    "Gaisa kondicionieris",
    "Signalizācijas sistēma",
    "Ofisa telpa",
    "Saimniecības telpa",
    "2 automašīnu nojume",
  ];

  const locationItems = [
    "Skolas",
    "Bērnudārzs",
    "Sporta centrs",
    "Stadions",
    "Pilsētas trase",
    "Pārtikas veikals",
    "Bērnu laukumiņš",
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
    { title: "Telpa", file: "/22_5X8A6275.jpg" },
    { title: "Telpa", file: "/23_5X8A6278.jpg" },
    { title: "Telpa", file: "/25_5X8A6284.jpg" },
  ];

  return (
    <main className="page">

      {/* HERO */}
      <section className="section hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Sigulda</div>
            <h1>Modernas mājas ģimenēm</h1>
            <p className="lead">
              Ilgtermiņa dzīvošanai Siguldā.
            </p>

            <div className="button-row">
              <a href="#kontakti" className="button button-dark">
                Pieteikt apskati
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <Image
              src="/73_5X8A6434 (1).jpg"
              alt="Mājas ārpuse"
              fill
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Par īpašumu</h2>
            <p className="text">
              Jaunas, modernas mājas Siguldā ar pārdomātu plānojumu ģimenēm.
            </p>
          </div>

          <div className="card info-card">
            <div className="info-list">
              {features.map((item, i) => (
                <div key={i} className="info-row">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-alt">
        <div className="container">
          <h2>Galerija</h2>
          <p className="section-intro">Interjera un eksterjera attēli.</p>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div key={item.file} className="card gallery-card">
                <div className="gallery-image-wrap">
                  <Image
                    src={item.file}
                    alt={item.title}
                    fill
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-text">
                  <div className="gallery-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section">
        <div className="container">
          <h2>Lokācija</h2>
          <p className="text">
            Mājas atrodas Siguldas pilsētas daļā ar ērtu piekļuvi ikdienas vietām.
          </p>

          <div className="location-grid">
            {locationItems.map((item, i) => (
              <div key={i} className="card location-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakti" className="section">
        <div className="container">
          <div className="contact-box">
            <div>
              <h2>Piesakiet apskati</h2>
              <p className="contact-text">
                Sazinieties pa tālruni, lai vienotos par apskates laiku.
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

    </main>
  );
}
