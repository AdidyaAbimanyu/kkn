'use client'

import { useRef } from 'react'
import Image from 'next/image'

export default function LatarBelakang() {
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
    <div className="container my-5 py-5" data-aos="fade-up" id="latarbelakang">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-3 fw-bold">Latar Belakang</h1>
          <p className="fw-semibold fs-5">
            Budaya baca masyarakat Indonesia masih rendah, dibuktikan dengan penurunan skor PISA
            dari 371 (2018) menjadi 359 (2022). Melalui KKN Tematik Literasi, diharapkan dapat
            membangun masyarakat berpengetahuan, kreatif, dan inovatif menuju Indonesia Emas 2045.
            Program ini bertujuan mengoptimalkan bahan bacaan berkualitas dan memperkuat literasi
            di desa.
          </p>
        </div>
        <div
          className="col-md-6 text-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <Image
            ref={imgRef}
            src="static/latar.png"
            alt="Latar Belakang"
            className="img-fluid rounded"
            style={{ transition: 'transform 0.2s ease' }}
          />
        </div>
      </div>
    </div>
  )
}
