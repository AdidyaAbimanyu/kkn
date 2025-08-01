import Link from 'next/link';
import LatarBelakang from './components/LatarBelakang';
import Tujuan from './components/Tujuan';
import Tim from './components/Tim';
import glorifikasiData from './glorifikasiProker.json';

export default function Home() {
  return (
    <div style={{ paddingTop: '40px' }}>
      {/* HERO */}
      <div
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: '91vh',
          backgroundImage: 'url(static/tower.png)',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        ></div>

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

      {/* LATAR BELAKANG */}
      <div className='container bg-light-subtle rounded'>
        <LatarBelakang />
      </div>

      {/* TUJUAN */}
      <div className='container bg-light-subtle rounded'>
        <Tujuan />
      </div>

      {/* TIM KAMI */}
      <div className='container' data-aos="fade-up" id="tim">
        <Tim />
      </div>

      {/* GLORIFIKASI */}
      <div id="glorifikasi" className="container" data-aos="fade-up">
        <h1 className="mb-4 text-center fw-bold mb-5">Glorifikasi Kegiatan</h1>
        <div className="row">
          {glorifikasiData.map((item, index) => (
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