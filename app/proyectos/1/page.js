"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Proyecto1() {
  const [menuActive, setMenuActive] = useState(false);
  const [openLightbox1, setOpenLightbox1] = useState(false);
  const [openLightbox2, setOpenLightbox2] = useState(false);
  const [openLightbox3, setOpenLightbox3] = useState(false);

  return (
    <main>
      {/* MENU */}
      <nav className="nav">
        <div className="container">
          <div className="flex">
            <div className="left">
              <Link href="/">
                <Image
                  src="/img/logo-1.svg"
                  width={100}
                  height={50}
                  alt="logo"
                  className="logoImg"
                />
              </Link>
            </div>
            <div className="right">
              <div className="page-name">Privee, CDMX</div>
              {menuActive ? (
                <div className="close" onClick={() => setMenuActive(false)}>
                  x
                </div>
              ) : (
                <div className="burger" onClick={() => setMenuActive(true)}>
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {menuActive && (
        <div className="menu-hidden">
          <div className="container">
            <div className="links">
              <Link
                href="/"
                className="link"
                onClick={() => setMenuActive(false)}
              >
                Home
              </Link>
              <Link
                href="/nosotros"
                className="link"
                onClick={() => setMenuActive(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/proyectos"
                className="link"
                onClick={() => setMenuActive(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/contacto"
                className="link"
                onClick={() => setMenuActive(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* CONTENIDO GENERAL */}
      <section className="proyecto-content">
        <div className="container">
          <div className="main-image">
            <Image
              src="/img/img-2.png"
              width={3176}
              height={1503}
              alt="Main image"
              className="mainImg"
            />
            <div className="main-name">Privee, CDMX</div>
            <div className="main-text">Proyecto: Migdal Arquitectos </div>
            <div className="main-text">Ubicacion: CDMX</div>
            <div className="main-text">Año: 2017</div>
          </div>
          <div className="gallery">
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/gallery-1-2.png)" }}
            />
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/gallery-1-3.png)" }}
            />
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/gallery-1-1.png)" }}
            />
          </div>
          <div className="gallery-large">
            <Image
              src="/img/gallery-1-4.png"
              width={3176}
              height={1000}
              alt="Main image"
              className="galleryLargeImg"
            />
          </div>
        </div>
      </section>
      <section className="series">
        <div className="container">
          <h2>SERIES </h2>
          <p>
            Entendiendo el mercado y el tipo de proyectos que VIM busca atacar,
            proponemos líneas base de Cortizo y Cuprum, sin embargo tenemos la
            capacidad de trabajar con cualquier extrusor nacional e
            internacional.
          </p>
          <div className="carousel">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showIndicators={false}
              showStatus={false}
              showArrows={true}
              stopOnHover={false}
            >
              <div className="carousel-box">
                <div className="main-image">
                  <Image
                    src="/img/carousel-1.png"
                    width={972}
                    height={972}
                    alt="carousel"
                    className="carousel-image"
                  />
                </div>
                <div className="info">
                  <div className="images">
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/cv1.png)" }}
                      onClick={() => setOpenLightbox1(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/img-1.png)" }}
                      onClick={() => setOpenLightbox1(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/cv3.png)" }}
                      onClick={() => setOpenLightbox1(true)}
                    />
                  </div>
                  <div className="text">
                    <h4>Cor Vision Plus</h4>
                    <p>
                      Acristalamiento maximo 54 mm.<br></br>
                      Dimensiones maximas 4.00 x 4.00 m.<br></br>
                      Peso maximo 700 kg<br></br>
                      Ensambles a 90o<br></br>
                      Apertura manual o motorizada
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-box">
                <div className="main-image">
                  <Image
                    src="/img/carousel-2.png"
                    width={972}
                    height={972}
                    alt="carousel"
                    className="carousel-image"
                  />
                </div>
                <div className="info">
                  <div className="images">
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/c70-1.png)" }}
                      onClick={() => setOpenLightbox2(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/c70-2.png)" }}
                      onClick={() => setOpenLightbox2(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/c70-3.png)" }}
                      onClick={() => setOpenLightbox2(true)}
                    />
                  </div>
                  <div className="text">
                    <h4>Core 70 Industrial</h4>
                    <p>
                      Acristalamiento maximo 55 mm.<br></br>
                      Dimensiones maximas 1.50 x 2.60 m.<br></br>
                      Peso maximo 160 kg<br></br>
                      Ensambles a 90o<br></br>
                      Apertura manual o motorizada
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-box">
                <div className="main-image">
                  <Image
                    src="/img/carousel-3.png"
                    width={972}
                    height={972}
                    alt="carousel"
                    className="carousel-image"
                  />
                </div>
                <div className="info">
                  <div className="images">
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/cov1.png)" }}
                      onClick={() => setOpenLightbox3(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/cov2.png)" }}
                      onClick={() => setOpenLightbox3(true)}
                    />
                    <div
                      className="image"
                      style={{ backgroundImage: "url(/img/cov3.png)" }}
                      onClick={() => setOpenLightbox3(true)}
                    />
                  </div>
                  <div className="text">
                    <h4>Cor Vision</h4>
                    <p>
                      Acristalamiento maximo 54 mm.<br></br>Dimensiones maximas
                      4.00 x 4.00 m.<br></br>Peso maximo 700 kg Ensambles a 90o
                      <br></br>Apertura manual o motorizada
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="menu">
            <h3>Menu</h3>
            <Link href="/contacto" className="link">
              Contacto
            </Link>
            <Link href="/proyectos" className="link">
              Proyectos
            </Link>
            <Link href="/nosotros" className="link">
              Nosotros
            </Link>
            <h3>Contactanos</h3>
            <Link href="mailto:contacto@proyectosvim.com" className="link">
              contacto@proyectosvim.com
            </Link>
          </div>
        </div>
      </footer>
      {/* GALERIAS - EDITAR CADA UNA CON FOTOS CORRECTAS */}
      <Lightbox
        open={openLightbox1}
        close={() => setOpenLightbox1(false)}
        slides={[
          { src: "/img/cv1.png" },
          { src: "/img/img-2.png" },
          { src: "/img/cv3.png" },
        ]}
      />
      <Lightbox
        open={openLightbox2}
        close={() => setOpenLightbox2(false)}
        slides={[
          { src: "/img/c70-1.png" },
          { src: "/img/c70-2.png" },
          { src: "/img/c70-3.png" },
        ]}
      />
      <Lightbox
        open={openLightbox3}
        close={() => setOpenLightbox3(false)}
        slides={[
          { src: "/img/cov1.png" },
          { src: "/img/cov2.png" },
          { src: "/img/cov3.png" },
        ]}
      />
    </main>
  );
}
