"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
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
              <div className="page-name">Gracias</div>
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
      <section className="gracias">
        <div className="container">
          <h2>GRACIAS</h2>
          <p>Nos pondremos en contacto en aproximadamente 24 horas.</p>
        </div>
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <Link href="/" className="link">
            <button>Regresar</button>
          </Link>
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
    </main>
  );
}
