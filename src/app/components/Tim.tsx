"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const anggotaTim = [
    {
        jabatan: "Ketua",
        orang: [
            {
                nama: "Nama Ketua",
                prodi: "Prodi Ketua",
                foto: "ketua.png",
            },
        ],
    },
    {
        jabatan: "Sekretaris",
        orang: [
            {
                nama: "Nama Sekretaris",
                prodi: "Prodi Sekretaris",
                foto: "sekretaris.png",
            },
        ],
    },
    {
        jabatan: "Bendahara",
        orang: [
            {
                nama: "Nama Bendahara 1",
                prodi: "Prodi Bendahara 1",
                foto: "bendahara1.png",
            },
            {
                nama: "Nama Bendahara 2",
                prodi: "Prodi Bendahara 2",
                foto: "bendahara2.png",
            },
        ],
    },
    {
        jabatan: "Humas",
        orang: [
            {
                nama: "Nama Humas 1",
                prodi: "Prodi Humas 1",
                foto: "humas1.png",
            },
            {
                nama: "Nama Humas 2",
                prodi: "Prodi Humas 2",
                foto: "humas2.png",
            },
        ],
    },
    {
        jabatan: "PDD",
        orang: [
            {
                nama: "Nama PDD 1",
                prodi: "Prodi PDD 1",
                foto: "pdd1.png",
            },
            {
                nama: "Nama PDD 2",
                prodi: "Prodi PDD 2",
                foto: "pdd2.png",
            },
        ],
    },
    {
        jabatan: "Logistik",
        orang: [
            {
                nama: "Nama Logistik",
                prodi: "Prodi Logistik",
                foto: "logistik.png",
            },
        ],
    },
];

export default function Tim() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id="tim" className="container my-5 py-5">
            <h1 className="mb-5 text-center fw-bold">Tim KKN 321</h1>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {anggotaTim.map((bagian, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="row align-items-center justify-content-center">
                            {bagian.orang.map((orang, index) => (
                                <div
                                    key={index}
                                    className={`col-md-${bagian.orang.length > 1 ? "6" : "7"} mb-4`}
                                >
                                    <Tilt
                                        scale={1.05}
                                        tiltMaxAngleX={10}
                                        tiltMaxAngleY={10}
                                        transitionSpeed={500}
                                        className="p-4 rounded text-center"
                                    >
                                        <img
                                            src={`${orang.foto}`}
                                            alt={orang.nama}
                                            className="img-fluid mb-3"
                                            style={{
                                                maxWidth: "250px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                            }}
                                        />
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
                                    </Tilt>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
