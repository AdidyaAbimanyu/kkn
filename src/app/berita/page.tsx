'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BeritaKKN() {
    const [showToast, setShowToast] = useState(false);

    // Fungsi salin link
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    // URL berita (pakai window.location.href biar dinamis)
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    return (
        <div className="container my-5 py-3">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                        {/* Header Image */}
                        <div className="ratio ratio-21x9">
                            <img
                                src="hasil/4.JPG"
                                alt="KKN Tematik Literasi Kelompok 321"
                                className="card-img-top object-fit-cover"
                            />
                        </div>

                        <div className="card-body p-4 p-md-5">
                            {/* Title */}
                            <h2 className="fw-bold text-dark mb-3">
                                KKN Tematik Literasi Kelompok 321 Hidupkan Semangat Membaca di Desa Bentakan
                            </h2>

                            {/* Meta Info + Share Buttons */}
                            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                                <p className="text-muted mb-0">
                                    <i className="bi bi-calendar-event me-2"></i>7 Juli – 21 Agustus 2025 · Desa Bentakan
                                </p>
                                <div className="d-flex gap-3">
                                    <a
                                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`}
                                        target="_blank"
                                        className="text-success fs-4"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
                                        target="_blank"
                                        className="text-info fs-4"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-twitter-x"></i>
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                        target="_blank"
                                        className="text-primary fs-4"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <button
                                        onClick={handleCopyLink}
                                        className="btn btn-link p-0 text-dark fs-4"
                                    >
                                        <i className="bi bi-link-45deg"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="card-text fs-6 text-justify" style={{ lineHeight: '1.8' }}>
                                <p>
                                    <strong>Bentakan</strong> – Kelompok Kuliah Kerja Nyata (KKN) 321 melaksanakan
                                    KKN Tematik Literasi sejak 7 Juli hingga 21 Agustus 2025 di Wasis Library & Cafe
                                    serta lingkungan Pemerintah Desa Bentakan. Program ini digelar untuk meningkatkan
                                    minat baca dan menulis masyarakat melalui berbagai kegiatan edukatif yang kreatif
                                    dan menyenangkan.
                                </p>

                                <p>
                                    Selama lebih dari satu bulan, mahasiswa KKN 321 menghadirkan beragam kegiatan
                                    literasi yang melibatkan anak-anak hingga orang dewasa. Kegiatan tersebut meliputi
                                    membaca nyaring bersama anak-anak, mengulas buku koleksi perpustakaan, hingga
                                    menulis cerita berdasarkan buku yang telah dibaca. Selain itu, mahasiswa juga
                                    menyelenggarakan lomba literasi dengan antusiasme tinggi dari peserta, di mana
                                    pemenang mendapatkan hadiah sebagai bentuk apresiasi.
                                </p>

                                <div className="d-flex flex-column justify-content-center align-items-center my-4">
                                    <Image
                                        src="/membaca/3.JPG"
                                        alt="Kegiatan Membaca Bersama Anak-Anak di Wasis Library & Cafe"
                                        width={800}
                                        height={400}
                                        className="rounded"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <p className="text-muted small mt-2">
                                        Kegiatan Membaca Nyaring Bersama Anak-Anak di Wasis Library & Cafe
                                    </p>
                                </div>

                                <blockquote className="blockquote px-3 py-2 border-start border-4 border-primary bg-light rounded mb-4">
                                    <p className="mb-0 fst-italic">
                                        “Melalui program ini, kami berharap masyarakat desa Bentakan dapat semakin
                                        mencintai membaca dan menulis. Literasi bukan sekadar kegiatan di perpustakaan,
                                        tetapi juga jalan untuk membuka wawasan dan membangun masa depan yang lebih baik
                                        dan berbagai kegiatan yang dilakukan oleh mahasiswa KKN semoga dapat terus
                                        dilanjutkan,”
                                    </p>
                                    <footer className="blockquote-footer mt-2">
                                        Carik Desa Bentakan
                                    </footer>
                                </blockquote>

                                <p>
                                    Kegiatan ini digagas karena rendahnya budaya literasi masih menjadi tantangan di
                                    masyarakat. Dengan menghadirkan aktivitas literasi yang menyenangkan, mahasiswa
                                    ingin menciptakan suasana baru agar membaca dan menulis dapat menjadi bagian dari
                                    kebiasaan sehari-hari.
                                </p>

                                <div className="d-flex flex-column justify-content-center align-items-center my-4">
                                    <Image
                                        src="/kunjungan/4.JPG"
                                        alt="Pelatihan Microsoft Word"
                                        width={800}
                                        height={400}
                                        className="rounded"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <p className="text-muted small mt-2">
                                        Pelatihan Microsoft Word untuk Anak-anak untuk Meningkatkan Kemampuan Menulis
                                    </p>
                                </div>

                                <p>
                                    Pemerintah Desa Bentakan menyambut baik program KKN Tematik Literasi ini. Menurut
                                    perangkat desa, kegiatan tersebut tidak hanya memberi dampak positif bagi
                                    anak-anak, tetapi juga mempererat interaksi sosial antara mahasiswa, masyarakat,
                                    dan pengelola perpustakaan desa.
                                </p>

                                <p>
                                    Dengan berakhirnya kegiatan pada 21 Agustus 2025, masyarakat diharapkan terus
                                    menjaga semangat literasi yang telah dibangun. Program ini diharapkan dapat menjadi
                                    awal berkembangnya gerakan literasi desa yang berkelanjutan.
                                </p>
                            </div>

                            {/* Footer Link */}
                            <div className="mt-4">
                                <Link
                                    href="https://uns.ac.id/"
                                    target="_blank"
                                    className="btn btn-primary rounded-pill px-4"
                                >
                                    <i className="bi bi-box-arrow-up-right me-2"></i>
                                    Baca di laman UNS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <div
                className={`toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3 ${showToast ? "show" : "hide"}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="d-flex">
                    <div className="toast-body">
                        ✅ Link berhasil disalin!
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        onClick={() => setShowToast(false)}
                    ></button>
                </div>
            </div>
        </div>
    );
}
