"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nosotros() {
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
              <div className="page-name">Nosotros</div>
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
      <section className="info-1">
        <div className="left" />
        <div className="right">
          <h2>PROYECTOS UNICOS</h2>
          <h3>
            Vim es una empresa dedicada al suministro e instalacion de vidrio,
            aluminio y PVC para el sector residencial en Mexico.
          </h3>
        </div>
      </section>
      <section className="info-2">
        <div className="container">
          <div className="flex">
            <h2>QUIENES SOMOS</h2>
            <p>
              Como parte de Grupo Vimar, Vim nace con la finalidad de atender
              los proyectos arquitectonicos mas exigentes y especializados del
              pais.
            </p>
            <p>
              Con el apoyo de Vitrocanceles y de la mano de los mejores
              proveedores en el mercado, logramos ofrecer a nuestros clientes un
              servicio integral de principio a fin.
            </p>
          </div>
        </div>
      </section>
      <section className="info-3">
        <div className="left">
          <h2>PRODUCTOS</h2>
          <p>Cancelería en Aluminio</p>
          <p>Domos</p>
          <p>Canceles de Baño</p>
          <p>Barandales</p>
          <p>Espejos</p>
        </div>
        <div className="right">
          <h2>PROCESOS</h2>
          <p>Esmerilado</p>
          <p>Insulado</p>
          <p>Laminado</p>
          <p>Entradas y Barrenos</p>
          <p>Templado</p>
          <p>Serigrafia</p>
          <p>Cantos Pulidos</p>
        </div>
      </section>
      <section className="vim-img">
        <Image
          src="/img/vimnos.png"
          width={3840}
          height={1326}
          alt="VIM"
          className="vimImg"
        />
      </section>
      <section className="logos">
        <div className="container">
          <div className="logosImg">
            <Image src="/logos/logs.png" width={2620} height={216} alt="VIM" />
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
    </main>
  );
}
