'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function Navbar() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleHover = (e: React.MouseEvent) => {
    const link = e.currentTarget as HTMLElement;
    const indicator = indicatorRef.current;

    if (indicator) {
      const linkRect = link.getBoundingClientRect();
      const parentRect = link.parentElement?.parentElement?.getBoundingClientRect();

      if (parentRect) {
        const left = linkRect.left - parentRect.left;
        const width = linkRect.width;

        indicator.style.transform = `translateX(${left}px)`;
        indicator.style.width = `${width}px`;
        indicator.style.opacity = '1';
      }
    }
  };

  const handleLeave = () => {
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.opacity = '0';
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: '#003366' }}
    >
      <div className="container d-flex align-items-center justify-content-between position-relative">
        {/* Kiri: Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image
            src="/static/logo-perpusnas.svg"
            alt="Logo Perpusnas"
            width={40}
            height={40}
            className="me-2"
          />
          <Image
            src="/static/logo-uns-biru.png"
            alt="Logo UNS"
            width={40}
            height={40}
            className="me-2"
          />
          <Image
            src="/static/logo-dikti.png"
            alt="Logo Dikti"
            width={150}
            height={40}
            className="me-2"
          />
          <Image
            src="/static/logo-kkn.png"
            alt="Logo KKN"
            width={40}
            height={40}
            className="me-2"
          />
        </Link>

        {/* Kanan: Nav */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end position-relative" id="navbarNav">
          <ul className="navbar-nav position-relative">
            <li className="nav-item">
              <Link
                href="/berita"
                className="nav-link text-white"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                Luaran Press Release
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#glorifikasi"
                className="nav-link text-white"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                Glorifikasi Kegiatan
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/#tim"
                className="nav-link text-white"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                Anggota Tim
              </Link>
            </li>

            {/* Bubble Indicator */}
            <div ref={indicatorRef} className="nav-indicator"></div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
