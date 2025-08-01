'use client'

import { useRef } from 'react'

export default function Tujuan() {
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current
    if (!img) return

    const rect = img.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = ((x - centerX) / centerX) * 10
    const moveY = ((y - centerY) / centerY) * 10

    img.style.transform = `rotateY(${moveX * 1.2}deg) rotateX(${-moveY * 1.2}deg) scale(1.05)`
  }

  const handleMouseLeave = () => {
    const img = imgRef.current
    if (img) {
      img.style.transform = 'rotateY(0) rotateX(0) scale(1)'
    }
  }

  return (
    <div className="container my-5 py-5" data-aos="fade-up" id="tujuan">
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold">Tujuan Program</h1>
          <ul className="fw-semibold fs-5">
            <li>Mengoptimalkan pemanfaatan koleksi buku bermutu.</li>
            <li>Meningkatkan kapasitas Perpustakaan Desa & Taman Bacaan Masyarakat.</li>
            <li>Memperkuat kemitraan berkelanjutan.</li>
            <li>Mengatasi kendala geografis dan aksesibilitas.</li>
            <li>Meningkatkan literasi masyarakat, khususnya anak-anak di desa.</li>
          </ul>
        </div>
        <div
          className="col-md-6 text-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <img
            ref={imgRef}
            src="static/tujuan.png"
            alt="Tujuan Program"
            className="img-fluid rounded"
            style={{ transition: 'transform 0.2s ease' }}
          />
        </div>
      </div>
    </div>
  )
}
