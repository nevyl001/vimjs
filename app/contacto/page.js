"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [menuActive, setMenuActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fk2ahes",
        "template_lgbhw6f",
        form.current,
        "rj3HWwqCpdN_uOC8F"
      )
      .then(
        (result) => {
          window.location.replace("/gracias");
        },
        (error) => {
          alert("error");
        }
      );
  };

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
              <div className="page-name">Contacto</div>
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
      <section className="contacto">
        <div className="container">
          <h2>CONTACTO</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="email" placeholder="Correo" name="user_email" />
            <input type="text" placeholder="Mensaje" name="message" />
            <div className="arrow">
              <button>Enviar</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </form>
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
