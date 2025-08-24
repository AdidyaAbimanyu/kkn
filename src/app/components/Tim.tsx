"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";

const dpl = {
    jabatan: "Dosen Pembimbing Lapangan",
    orang: [
        {
            nama: "Prof. Ir. Ari Handono Ramelan., M.Sc. (Hons)., Ph.D.",
            prodi: "Dosen Pembimbing Lapangan",
            foto: "/anggota/dpl.png",
            foto2: "/anggota/dpl.png",
        },
    ],
};

const anggotaTim = [
    {
        jabatan: "Ketua",
        orang: [
            {
                nama: "Adidya Abimanyu",
                prodi: "Informatika",
                foto: "/anggota/adid1.png",
                foto2: "/anggota/adid2.png",
            },
        ],
    },
    {
        jabatan: "Sekretaris",
        orang: [
            {
                nama: "Adinda Puspita Ningrum",
                prodi: "Pendidikan Ilmu Pengetahuan Alam",
                foto: "/anggota/adinda1.png",
                foto2: "/anggota/adinda2.png",
            },
        ],
    },
    {
        jabatan: "Bendahara",
        orang: [
            {
                nama: "Nurul Mufidah",
                prodi: "Sastra Daerah untuk Sastra Jawa",
                foto: "/anggota/ruru1.png",
                foto2: "/anggota/ruru2.png",
            },
            {
                nama: "Zulvida Laela Ardhini",
                prodi: "Pendidikan Seni Rupa",
                foto: "/anggota/zulvida1.png",
                foto2: "/anggota/zulvida2.png",
            },
        ],
    },
    {
        jabatan: "Humas",
        orang: [
            {
                nama: "Khalifahtur Alfi",
                prodi: "Teknik Industri",
                foto: "/anggota/alfi1.png",
                foto2: "/anggota/alfi2.png",
            },
            {
                nama: "Fajri Khoirunnisa Cahya",
                prodi: "Pendidikan Guru Sekolah Dasar",
                foto: "/anggota/fajri1.png",
                foto2: "/anggota/fajri2.png",
            },
        ],
    },
    {
        jabatan: "PDD",
        orang: [
            {
                nama: "Maylavaza Lilia Sugiarto",
                prodi: "Desain Interior",
                foto: "/anggota/lilia1.png",
                foto2: "/anggota/lilia2.png",
            },
            {
                nama: "Devi Nur Aeni",
                prodi: "Pendidikan Guru Sekolah Dasar Kebumen",
                foto: "/anggota/devi1.png",
                foto2: "/anggota/devi2.png",
            },
        ],
    },
    {
        jabatan: "Logistik",
        orang: [
            {
                nama: "Muhammad Akbar Fauzi",
                prodi: "Pendidikan Jasmani, Kesehatan dan Rekreasi",
                foto: "/anggota/akbar1.png",
                foto2: "/anggota/akbar2.png",
            },
        ],
    },
];

export default function Tim() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

    return (
        <div id="tim" className="container my-5 py-5">
            <h1 className="mb-2 text-center fw-bold">Dosen Pembimbing Lapangan</h1>

            {/* DPL */}
            <div className="row align-items-center justify-content-center mb-5">
                {dpl.orang.map((orang, index) => {
                    const globalIndex = orang.nama;
                    const isHovered = hoveredPhoto === globalIndex;

                    return (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="p-4 rounded text-center glorifikasi-card">
                                <div
                                    className={`flip-image-container ${isHovered ? "flipped" : ""}`}
                                    onMouseEnter={() => setHoveredPhoto(globalIndex)}
                                    onMouseLeave={() => setHoveredPhoto(null)}
                                >
                                    <Image
                                        src={orang.foto}
                                        alt={orang.nama}
                                        className="flip-image front mb-3"
                                        width={500}
                                        height={300}
                                    />
                                    <Image
                                        src={orang.foto2}
                                        alt={`${orang.nama} - foto 2`}
                                        className="flip-image back mb-3"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <h2 className="fw-bold mb-2">{dpl.jabatan}</h2>
                                <h3 className="fw-semibold">{orang.nama}</h3>
                                <p className="text-muted">{orang.prodi}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div
                className="container text-center"
                data-aos="fade-up"
                id="meetourteam"
            >
                <Image
                    src="/anggota/tim.png"
                    alt="Tim"
                    className="img-fluid mb-3"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    width={1000}
                    height={500}
                />
            </div>

            <h1 className="mb-2 pt-5 text-center fw-bold">Anggota</h1>

            {/* Swiper Tim */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                allowTouchMove={true}
            >
                {anggotaTim.map((bagian, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="row align-items-center justify-content-center">
                            {bagian.orang.map((orang, index) => {
                                const globalIndex = orang.nama;
                                const isHovered = hoveredPhoto === globalIndex;

                                return (
                                    <div
                                        key={`${globalIndex}-${index}`}
                                        className={`col-md-${bagian.orang.length > 1 ? "6" : "7"} mb-4`}
                                    >
                                        <div className="p-4 rounded text-center glorifikasi-card">
                                            <div
                                                className={`flip-image-container ${isHovered ? "flipped" : ""}`}
                                                onMouseEnter={() => setHoveredPhoto(globalIndex)}
                                                onMouseLeave={() => setHoveredPhoto(null)}
                                            >
                                                <Image
                                                    src={orang.foto}
                                                    alt={orang.nama}
                                                    className="flip-image front mb-3"
                                                    width={500}
                                                    height={300}
                                                />
                                                <Image
                                                    src={orang.foto2}
                                                    alt={`${orang.nama} - foto 2`}
                                                    className="flip-image back mb-3"
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>

                                            <h2 className="fw-bold mb-2">
                                                {activeIndex === idx ? (
                                                    <Typewriter
                                                        words={[bagian.jabatan]}
                                                        loop={1}
                                                        cursor
                                                        typeSpeed={120}
                                                        deleteSpeed={80}
                                                        delaySpeed={800}
                                                    />
                                                ) : (
                                                    <>{bagian.jabatan}</>
                                                )}
                                            </h2>
                                            <h3 className="fw-semibold">
                                                {activeIndex === idx ? (
                                                    <Typewriter
                                                        words={[orang.nama]}
                                                        loop={1}
                                                        cursor
                                                        typeSpeed={100}
                                                        deleteSpeed={80}
                                                        delaySpeed={1000}
                                                    />
                                                ) : (
                                                    <>{orang.nama}</>
                                                )}
                                            </h3>
                                            <p className="text-muted">
                                                {activeIndex === idx ? (
                                                    <Typewriter
                                                        words={[orang.prodi]}
                                                        loop={1}
                                                        cursor
                                                        typeSpeed={90}
                                                        deleteSpeed={70}
                                                        delaySpeed={1200}
                                                    />
                                                ) : (
                                                    <>{orang.prodi}</>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
