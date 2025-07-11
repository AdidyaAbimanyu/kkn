import { notFound } from 'next/navigation';

export default function GlorifikasiDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const glorifikasiProker = [
    { slug: 'pendataan', title: 'Pendataan Perpustakaan', desc: 'Menyiapkan daftar aspek, mengamati kondisi, mendata koleksi & sarana.' },
    { slug: 'pengelolaan', title: 'Pengelolaan Perpustakaan', desc: 'Menganalisis pendataan, menata ruang & koleksi, menyiapkan program literasi.' },
    { slug: 'layanan', title: 'Layanan Perpustakaan', desc: 'Mahasiswa terlibat langsung membantu layanan pinjam & kunjungan.' },
    { slug: 'bacakan', title: 'Bacakan Saya Buku', desc: 'Membacakan buku cerita dengan ekspresi, berdiskusi dengan anak-anak.' },
    { slug: 'nyaring', title: 'Membaca Nyaring', desc: 'Membaca buku cerita bersama anak-anak di perpustakaan.' },
    { slug: 'cerdas', title: 'Cerdas Mengulas Buku', desc: 'Anak membaca di rumah, lalu menceritakan kembali isi buku.' },
    { slug: 'proyek', title: 'Proyek Isi Buku', desc: 'Membuat karya kreatif berdasarkan analisis buku bacaan.' },
    { slug: 'menulis', title: 'Menulis Cerita', desc: 'Anak menulis cerita dari buku bacaan dengan gaya orisinal.' },
    { slug: 'kunjungan', title: 'Kunjungan Literasi', desc: 'Kelas inspirasi ke sekolah: Membaca, diskusi & apresiasi.' },
    { slug: 'apresiasi', title: 'Apresiasi Literasi', desc: 'Menampilkan karya & memberi penghargaan peserta literasi.' },
    { slug: 'publikasi', title: 'Glorifikasi Kegiatan', desc: 'Mahasiswa membuat konten & publikasi KKN di media sosial.' },
  ];

  const data = glorifikasiProker.find(item => item.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">{data.title}</h1>
      <p>{data.desc}</p>
      {/* Bisa render gambar detail, dll */}
    </div>
  );
}
