import Link from 'next/link';
import LatarBelakang from './components/LatarBelakang';
import Tujuan from './components/Tujuan';

const glorifikasiProker = [
  {
    title: "Pendataan Perpustakaan",
    desc: "Menyiapkan daftar aspek, mengamati kondisi, mendata koleksi & sarana.",
    slug: "pendataan",
    img: "latar.png",
  },
  {
    title: "Pengelolaan Perpustakaan",
    desc: "Menganalisis pendataan, menata ruang & koleksi, menyiapkan program literasi.",
    slug: "pengelolaan",
    img: "latar.png",
  },
  {
    title: "Layanan Perpustakaan",
    desc: "Mahasiswa terlibat langsung membantu layanan pinjam & kunjungan.",
    slug: "layanan",
    img: "latar.png",
  },
  {
    title: "Bacakan Saya Buku",
    desc: "Membacakan buku cerita dengan ekspresi, berdiskusi dengan anak-anak.",
    slug: "bacakan",
    img: "latar.png",
  },
  {
    title: "Membaca Nyaring",
    desc: "Membaca buku cerita bersama anak-anak di perpustakaan.",
    slug: "nyaring",
    img: "latar.png",
  },
  {
    title: "Cerdas Mengulas Buku",
    desc: "Anak membaca di rumah, lalu menceritakan kembali isi buku.",
    slug: "cerdas",
    img: "latar.png",
  },
  {
    title: "Proyek Isi Buku",
    desc: "Membuat karya kreatif berdasarkan analisis buku bacaan.",
    slug: "proyek",
    img: "latar.png",
  },
  {
    title: "Menulis Cerita",
    desc: "Anak menulis cerita dari buku bacaan dengan gaya orisinal.",
    slug: "menulis",
    img: "latar.png",
  },
  {
    title: "Kunjungan Literasi",
    desc: "Kelas inspirasi ke sekolah: Membaca, diskusi & apresiasi.",
    slug: "kunjungan",
    img: "latar.png",
  },
  {
    title: "Apresiasi Literasi",
    desc: "Menampilkan karya & memberi penghargaan peserta literasi.",
    slug: "apresiasi",
    img: "latar.png",
  },
  {
    title: "Glorifikasi Kegiatan",
    desc: "Mahasiswa membuat konten & publikasi KKN di media sosial.",
    slug: "publikasi",
    img: "latar.png",
  },
];

export default function Home() {
  return (
    <div style={{ paddingTop: '40px' }}>
      {/* HERO */}
      <div
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: '91vh',
          backgroundImage: 'url(hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay transparan */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>

        {/* Konten Hero */}
        <div className="position-relative text-white px-3">
          <h1 className="display-4 fw-bold mb-3">
            KKN Tematik Literasi <br /> Penguatan budaya literasi untuk peningkatan kesejahteraan masyarakat Kelompok 321
            universitas sebelas maret (UNS)
          </h1>
          <p className="lead mb-4">
            Desa Bentakan, Kecamatan Baki, Kabupaten Sukoharjo
          </p>
        </div>
      </div>

      {/* Video YouTube */}
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <iframe
            width="840"
            height="472"
            className="rounded"
            src="https://www.youtube.com/embed/t5dhaF1LFSU?si=mMdZqQC4R727TUi9"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* LATAR BELAKANG */}
      <div className='container bg-light-subtle rounded'>
        <LatarBelakang />
      </div>

      {/* TUJUAN */}
      <div className='container bg-light-subtle rounded'>
        <Tujuan />
      </div>

      <div id="glorifikasi" className="container bg-light-subtle my-5 py-5 rounded" data-aos="fade-up">
        <h1 className="mb-4 text-center fw-bold mb-5">Glorifikasi Kegiatan</h1>
        <div className="row">
          {glorifikasiProker.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card border-0 shadow-sm h-100 glorifikasi-card">
                <div className="overflow-hidden">
                  <img
                    src={`/${item.img}`}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted">{item.desc}</p>
                  <Link href={`/glorifikasi/${item.slug}`} className="btn btn-success">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
