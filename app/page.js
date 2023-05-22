"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [openLightbox1, setOpenLightbox1] = useState(false);
  const [openLightbox1_1, setOpenLightbox1_1] = useState(false);
  const [openLightbox1_2, setOpenLightbox1_2] = useState(false);
  const [openLightbox2, setOpenLightbox2] = useState(false);
  const [openLightbox2_1, setOpenLightbox2_1] = useState(false);
  const [openLightbox2_2, setOpenLightbox2_2] = useState(false);
  const [openLightbox3, setOpenLightbox3] = useState(false);
  const [openLightbox3_1, setOpenLightbox3_1] = useState(false);
  const [openLightbox3_2, setOpenLightbox3_2] = useState(false);

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
      {/* HEADER ESTATICO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <section className="header">
          <div className="flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              <div className="title">
                <Image
                  src="/img/logo-2.png"
                  width={100}
                  height={70}
                  alt="VIM"
                />
                <h3>PROYECTOS UNICOS</h3>
              </div>
            </motion.div>
            <div className="space" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.8 }}
            >
              <div className="scroll scroll-desktop">
                <p>Scroll down para ver proyectos</p>
                <div className="down">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="scroll scroll-mobile">
                <div className="circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* CONTENIDO GENERAL */}
      <div className="content-master">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <section className="info-1">
            <div className="left" />
            <div className="right">
              <h3>
                Vim es una empresa dedicada al suministro e instalacion de
                vidrio, aluminio y PVC para el sector residencial en Mexico.
              </h3>
            </div>
          </section>
        </motion.div>
        <section className="proyectos">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="proyecto">
                <Link href="/proyectos/1">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/img/priv.png)" }}
                  />
                </Link>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <div className="info">
                    <div className="name">Privee, CDMX</div>

                    <div className="link">
                      <Link href="/proyectos/1" className="link-content">
                        <p>Ver Proyecto </p>
                        <svg
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="proyecto">
                <Link href="/proyectos/2">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/img/riosc.png)" }}
                  />
                </Link>

                <div className="info">
                  <div className="name">Río Escondido, CDMX</div>
                  <div className="link">
                    <Link href="/proyectos/2" className="link-content">
                      <p>Ver Proyecto</p>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="proyecto">
                <Link href="/proyectos/3">
                  <div
                    className="image"
                    style={{ backgroundImage: "url(/img/mont.png)" }}
                  />
                </Link>
                <div className="info">
                  <div className="name">Montage, Los Cabos</div>
                  <div className="link">
                    <Link href="/proyectos/3" className="link-content">
                      <p>Ver Proyecto </p>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="series">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2>SERIES </h2>
              <p className="series-p">
                Entendiendo el mercado y el tipo de proyectos que VIM busca
                atacar, proponemos líneas base de Cortizo y Cuprum, sin embargo
                tenemos la capacidad de trabajar con cualquier extrusor nacional
                e internacional. ASD
              </p>
            </motion.div>
            <div className="carousel">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Carousel
                  // autoPlay
                  infiniteLoop
                  // interval={3000}
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
                          onClick={() => setOpenLightbox1_1(true)}
                        />
                        <div
                          className="image"
                          style={{ backgroundImage: "url(/img/cv3.png)" }}
                          onClick={() => setOpenLightbox1_2(true)}
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
                          onClick={() => setOpenLightbox2_1(true)}
                        />
                        <div
                          className="image"
                          style={{ backgroundImage: "url(/img/c70-3.jpg)" }}
                          onClick={() => setOpenLightbox2_2(true)}
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
                          onClick={() => setOpenLightbox3_1(true)}
                        />
                        <div
                          className="image"
                          style={{ backgroundImage: "url(/img/cor3.jpg)" }}
                          onClick={() => setOpenLightbox3_2(true)}
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
      </div>
      {/* GALERIAS - EDITAR CADA UNA CON FOTOS CORRECTAS */}
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox1}
        close={() => setOpenLightbox1(false)}
        slides={[
          { src: "/img/cv1.png" },
          { src: "/img/img-1.png" },
          { src: "/img/cv3.png" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox1_1}
        close={() => setOpenLightbox1_1(false)}
        slides={[
          { src: "/img/img-1.png" },
          { src: "/img/cv3.png" },
          { src: "/img/cv1.png" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox1_2}
        close={() => setOpenLightbox1_2(false)}
        slides={[
          { src: "/img/cv3.png" },
          { src: "/img/cv1.png" },
          { src: "/img/img-1.png" },
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
        open={openLightbox2_1}
        close={() => setOpenLightbox2_1(false)}
        slides={[
          { src: "/img/c70-2.jpg" },
          { src: "/img/c70-3.jpg" },
          { src: "/img/c70-1.jpg" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox2_2}
        close={() => setOpenLightbox2_2(false)}
        slides={[
          { src: "/img/c70-3.jpg" },
          { src: "/img/c70-1.jpg" },
          { src: "/img/c70-2.jpg" },
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
        open={openLightbox3_1}
        close={() => setOpenLightbox3_1(false)}
        slides={[
          { src: "/img/cor2.jpg" },
          { src: "/img/cor3.jpg" },
          { src: "/img/cor1.jpg" },
        ]}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(255,255,255, .8)" } }}
        open={openLightbox3_2}
        close={() => setOpenLightbox3_2(false)}
        slides={[
          { src: "/img/cor3.jpg" },
          { src: "/img/cor1.jpg" },
          { src: "/img/cor2.jpg" },
        ]}
      />
    </main>
  );
}
