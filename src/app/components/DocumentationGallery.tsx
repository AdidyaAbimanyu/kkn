'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DocumentationImage {
  img: string;
  caption: string;
}

interface DocumentationGalleryProps {
  images: DocumentationImage[];
}

export default function DocumentationGallery({ images }: DocumentationGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageChange = (newIndex: number) => {
    if (newIndex === currentImageIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  if (!images || images.length === 0) {
    return (
      <div className="mt-4">
        <h5 className="fw-bold text-dark mb-3">Dokumentasi Kegiatan</h5>
        <div className="text-center py-5 text-muted">
          <i className="bi bi-images fs-1 mb-3 d-block"></i>
          <p>Belum ada dokumentasi tersedia</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageChange(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageChange(newIndex);
  };

  return (
    <div className="mt-4">
      <h5 className="fw-bold text-dark mb-3">Dokumentasi Kegiatan</h5>
      <div className="position-relative">
        {/* Main Image Display */}
        <div className="card border-0 shadow-sm mb-3 overflow-hidden">
          <div 
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          >
            <Image
              src={`/${images[currentImageIndex].img}`}
              alt={images[currentImageIndex].caption}
              className="card-img-top transition-transform duration-500 ease-out hover:scale-105"
              style={{ height: '400px', objectFit: 'cover' }}
              width={800}
              height={400}
            />
          </div>
          <div className="card-body">
            <small className="text-muted">
              {currentImageIndex + 1} dari {images.length} foto
            </small>
          </div>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-110"
                style={{ width: '40px', height: '40px', zIndex: 2 }}
                onClick={prevImage}
                disabled={isTransitioning}
                aria-label="Foto sebelumnya"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle opacity-75 hover:opacity-100 transition-all duration-200 hover:scale-110"
                style={{ width: '40px', height: '40px', zIndex: 2 }}
                onClick={nextImage}
                disabled={isTransitioning}
                aria-label="Foto selanjutnya"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </>
          )}
        </div>
        
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="d-flex gap-2 overflow-auto pb-2">
            {images.map((doc, index) => (
              <div
                key={index}
                className={`flex-shrink-0 cursor-pointer border rounded transition-all duration-300 hover:shadow-md ${
                  index === currentImageIndex 
                    ? 'border-primary border-3 shadow-sm scale-105' 
                    : 'border-light opacity-75 hover:opacity-100 hover:scale-105'
                }`}
                style={{ 
                  width: '80px', 
                  height: '60px',
                  cursor: 'pointer'
                }}
                onClick={() => handleImageChange(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleImageChange(index);
                  }
                }}
                aria-label={`Lihat foto ${index + 1}: ${doc.caption}`}
              >
                <Image
                  src={`/${doc.img}`}
                  alt={doc.caption}
                  width={80}
                  height={60}
                  className="rounded transition-transform duration-300 hover:scale-110"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Dots indicator for mobile */}
        {images.length > 1 && (
          <div className="d-flex justify-content-center gap-2 mt-3 d-md-none">
            {images.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle p-0 transition-all duration-300 hover:scale-125 ${
                  index === currentImageIndex ? 'btn-primary' : 'btn-outline-secondary hover:btn-secondary'
                }`}
                style={{ width: '12px', height: '12px' }}
                onClick={() => handleImageChange(index)}
                aria-label={`Pergi ke foto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
