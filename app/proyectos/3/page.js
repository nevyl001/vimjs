"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export default function Proyecto1() {
  const [menuActive, setMenuActive] = useState(false);
  const [openLightbox1, setOpenLightbox1] = useState(false);
  const [openLightbox2, setOpenLightbox2] = useState(false);
  const [openLightbox3, setOpenLightbox3] = useState(false);
  const [openLightbox4, setOpenLightbox4] = useState(false);

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
              <div className="page-name">Montage, Los Cabos</div>
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
              <div className="containerBox">
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
        </div>
      )}
      {/* CONTENIDO GENERAL */}
      <section className="proyecto-content">
        <div className="container">
          <div className="main-image">
            <Image
              src="/img/mont.png"
              width={2688}
              height={1256}
              alt="Main image"
              className="mainImg"
            />
            <div className="main-name">Montage, Los Cabos</div>
            <div className="main-text">Proyecto: </div>
            <div className="main-text">Ubicacion: Los Cabos</div>
            <div className="main-text">Año: 2016</div>
          </div>
          <div className="gallery">
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/m1.png)" }}
              onClick={() => setOpenLightbox4(true)}
            />
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/m2.png)" }}
              onClick={() => setOpenLightbox4(true)}
            />
            <div
              className="gallery-item"
              style={{ backgroundImage: "url(/img/m3.png)" }}
              onClick={() => setOpenLightbox4(true)}
            />
          </div>
          <div className="gallery-large">
            <Image
              src="/img/m4.png"
              width={1588}
              height={500}
              alt="Main image"
              className="galleryLargeImg"
              onClick={() => setOpenLightbox4(true)}
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Carousel
                // autoPlay
                // interval={3000}
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showArrows={true}
                stopOnHover={false}
                axis="horizontal"
                className="relative"
                renderArrowPrev={(clickHandler) => (
                  <div className="prev-arrow" onClick={clickHandler}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="36px"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </div>
                )}
                renderArrowNext={(clickHandler) => (
                  <div className="next-arrow" onClick={clickHandler}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      height="36px"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                )}
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
                      width={928}
                      height={1060}
                      alt="carousel"
                      className="carousel-image"
                    />
                  </div>
                  <div className="info">
                    <div className="images">
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/c70-1.jpg)" }}
                        onClick={() => setOpenLightbox2(true)}
                      />
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/c70-2.jpg)" }}
                        onClick={() => setOpenLightbox2(true)}
                      />
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/c70-3.jpg)" }}
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
                      width={1018}
                      height={1164}
                      alt="carousel"
                      className="carousel-image"
                    />
                  </div>
                  <div className="info">
                    <div className="images">
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/cor1.jpg)" }}
                        onClick={() => setOpenLightbox3(true)}
                      />
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/cor2.jpg)" }}
                        onClick={() => setOpenLightbox3(true)}
                      />
                      <div
                        className="image"
                        style={{ backgroundImage: "url(/img/cor3.jpg)" }}
                        onClick={() => setOpenLightbox3(true)}
                      />
                    </div>
                    <div className="text">
                      <h4>Cor Vision</h4>
                      <p>
                        Acristalamiento maximo 54 mm.<br></br>Dimensiones
                        maximas 4.00 x 4.00 m.<br></br>Peso maximo 700 kg
                        Ensambles a 90o<br></br>Apertura manual o motorizada
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="menu">
            <div className="menu-box">
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
        </div>
      </footer>
      {/* GALERIAS - EDITAR CADA UNA CON FOTOS CORRECTAS */}
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox1}
        close={() => setOpenLightbox1(false)}
        slides={[
          { src: "/img/cv1.png" },
          { src: "/img/img-2.png" },
          { src: "/img/cv3.png" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox2}
        close={() => setOpenLightbox2(false)}
        slides={[
          { src: "/img/c70-1.jpg" },
          { src: "/img/c70-2.jpg" },
          { src: "/img/c70-3.jpg" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox3}
        close={() => setOpenLightbox3(false)}
        slides={[
          { src: "/img/cor1.jpg" },
          { src: "/img/cor2.jpg" },
          { src: "/img/cor3.jpg" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox4}
        close={() => setOpenLightbox4(false)}
        slides={[
          { src: "/img/m1.png" },
          { src: "/img/m2.png" },
          { src: "/img/m3.png" },
          { src: "/img/m4.png" },
        ]}
      />
    </main>
  );
}
