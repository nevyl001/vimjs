"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Proyectos() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <main>
      {/* MENU */}
      <nav className="nav">
        <div className="container">
          <div className="flex">
            <div className="left">
              <Link href="/">
                <Image
                  src="img/logo-1.svg"
                  width={100}
                  height={50}
                  alt="logo"
                  className="logoImg"
                />
              </Link>
            </div>
            <div className="right">
              <div className="page-name">Proyectos</div>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <section className="proyectos">
          <div className="container">
            <div className="proyecto">
              <Link href="/proyectos/1">
                <div
                  className="image"
                  style={{ backgroundImage: "url(/img/img-2.png)" }}
                />
              </Link>
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
                      class="svelte-5c3h7t"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 1 }}
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
                      <p>Ver Proyecto </p>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        class="svelte-5c3h7t"
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
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
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
                        class="svelte-5c3h7t"
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
      </motion.div>

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
    </main>
  );
}
