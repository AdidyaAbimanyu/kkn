import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import glorifikasiData from '../../glorifikasiProker.json';
import DocumentationGallery from '../../components/DocumentationGallery';

export async function generateStaticParams() {
  return glorifikasiData.map(item => ({
    slug: item.slug
  }));
}

// PERBAIKAN: Ubah function menjadi async dan params menjadi Promise
export default async function GlorifikasiDetail({ params }: { params: Promise<{ slug: string }> }) {
  // PERBAIKAN: Await params terlebih dahulu
  const { slug } = await params;

  const data = glorifikasiData.find(item => item.slug === slug);

  if (!data) return notFound();

  const documentationImages = data.documentation || [];

  const relatedActivities = glorifikasiData
    .filter(item => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5" style={{ marginTop: '-40px', paddingTop: '100px' }}>
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb bg-white bg-opacity-10 rounded-pill px-3 py-2">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white text-decoration-none opacity-75">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/#glorifikasi" className="text-white text-decoration-none opacity-75">Glorifikasi</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {data.title}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">{data.title}</h1>
              <p className="lead mb-0 opacity-90">Kegiatan KKN Tematik Literasi - Kelompok 321 UNS</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="bg-white bg-opacity-10 rounded-3 p-3 d-inline-block">
                <i className="bi bi-calendar3 fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg mb-4">
              <div className="card-body p-0">
                <Image
                  src={`/${data.img}`}
                  alt={data.title}
                  className="img-fluid rounded-top w-100"
                  style={{ height: '400px', objectFit: 'cover' }}
                  width={800}
                  height={400}
                />
                <div className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-success rounded-pill px-3 py-2 me-2">
                      <i className="bi bi-bookmark-check me-1"></i>
                      Kegiatan Selesai
                    </span>
                    <small className="text-muted">
                      <i className="bi bi-geo-alt me-1"></i>
                      Desa Bentakan, Baki, Sukoharjo
                    </small>
                  </div>

                  <h2 className="h4 fw-bold text-dark mb-3">Deskripsi Kegiatan</h2>
                  <p className="text-muted lh-lg fs-6">{data.desc}</p>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="bg-light rounded-3 p-3 h-100">
                        <h6 className="fw-bold text-primary mb-2">
                          <i className="bi bi-people me-2"></i>Tim Pelaksana
                        </h6>
                        <p className="mb-0 small text-muted">KKN Kelompok 321 UNS</p>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <div className="bg-light rounded-3 p-3 h-100">
                        <h6 className="fw-bold text-success mb-2">
                          <i className="bi bi-award me-2"></i>Penanggung Jawab
                        </h6>
                        <p className="mb-0 small text-muted">{data.penanggung_jawab}</p>
                      </div>
                    </div>
                  </div>

                  {/* Documentation Gallery */}
                  <DocumentationGallery images={documentationImages} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">
                  <i className="bi bi-info-circle me-2"></i>Informasi Kegiatan
                </h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <i className="bi bi-building text-primary"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Universitas</small>
                    <strong>Sebelas Maret (UNS)</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <i className="bi bi-people text-success"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Kelompok</small>
                    <strong>321</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <i className="bi bi-geo-alt text-warning"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Lokasi</small>
                    <strong>Desa Bentakan</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded-circle p-2 me-3">
                    <i className="bi bi-award text-info"></i>
                  </div>
                  <div>
                    <small className="text-muted d-block">Penanggung Jawab</small>
                    <strong>{data.penanggung_jawab}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/#glorifikasi" className="btn btn-outline-primary w-100 mb-2">
                <i className="bi bi-arrow-left me-2"></i>Kembali ke Glorifikasi
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedActivities.length > 0 && (
        <div className="bg-white py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Kegiatan Lainnya</h2>
              <p className="text-muted">Lihat kegiatan KKN lainnya yang telah kami lakukan</p>
            </div>
            <div className="row">
              {relatedActivities.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <Image
                      src={`/${item.img}`}
                      className="card-img-top"
                      alt={item.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                      width={400}
                      height={200}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{item.title}</h5>
                      <p className="card-text text-muted mb-2">
                        <small><i className="bi bi-person-badge me-1"></i>{item.penanggung_jawab}</small>
                      </p>
                      <p className="card-text text-muted flex-grow-1">
                        {item.desc.length > 100 ? `${item.desc.substring(0, 100)}...` : item.desc}
                      </p>
                      <Link href={`/glorifikasi/${item.slug}`} className="btn btn-outline-success">
                        Lihat Detail <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}