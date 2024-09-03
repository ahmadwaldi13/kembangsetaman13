import React from 'react'

const AboutUs = () => {
  return (
    // <div className="container my-10">
    //   <h1 className="text-xl font-semibold">KKN UMRI Mencerahkan Semesta</h1>
    //   <p>
    //     Selamat datang di halaman &quot;About Us&quot; KKN Kelompok 5 dari
    //     Universitas Muhammadiyah Riau. Kami adalah sekelompok mahasiswa yang
    //     bersemangat dan berdedikasi menjalankan KKN (Kuliah Kerja Nyata) di
    //     Kelurahan Tirta Siak, Kecamatan Payung Sekaki. Dengan mengusung tema
    //     &quot;KKN UMRI Mencerahkan Semesta,&quot; kami berkomitmen untuk
    //     memberikan dampak positif bagi masyarakat di sekitar kami.
    //   </p>

    //   <br />
    //   <h1>Lokasi KKN - Kelurahan Tirta Siak</h1>
    //   <p>
    //     Kelurahan Tirta Siak menjadi tempat kami berinteraksi, belajar, dan
    //     mengabdi kepada masyarakat. Di sini, kami melihat potensi besar yang
    //     dimiliki oleh para pelaku usaha kecil dan menengah (IMKM) yang dikelola
    //     oleh ibu-ibu rumah tangga. Salah satu mitra utama kami adalah IMKM
    //     Kembang Setaman.
    //   </p>

    //   <br />
    //   <h1>Mitra Kami - IMKM Kembang Setaman</h1>
    //   <p>
    //     IMKM Kembang Setaman adalah sebuah inisiatif lokal yang berfokus pada
    //     produksi dan penjualan kerajinan tangan, seperti batik dan anyaman.
    //     Produk-produk ini dibuat dengan penuh keterampilan dan cinta oleh para
    //     ibu rumah tangga yang menjadi anggota IMKM. Mereka memanfaatkan waktu
    //     dan keahlian mereka untuk menghasilkan karya yang tidak hanya indah,
    //     tetapi juga bernilai ekonomi.
    //   </p>

    //   <br />
    //   <h1>Proyek Utama - Web E-commerce untuk IMKM Kembang Setaman</h1>
    //   <p>
    //     Sebagai bagian dari kontribusi kami dalam KKN ini, kami mengambil
    //     inisiatif untuk membantu IMKM Kembang Setaman dalam memperluas jangkauan
    //     pasar mereka melalui pembuatan sebuah web e-commerce. Web ini dirancang
    //     untuk memudahkan penjualan produk kerajinan tangan kepada pelanggan yang
    //     lebih luas, baik secara lokal maupun nasional. Kami berharap dengan
    //     adanya platform ini, IMKM Kembang Setaman dapat lebih dikenal dan
    //     mendukung kesejahteraan anggota komunitasnya.
    //   </p>
    //   <br />
    //   <h1>Komitmen Kami</h1>
    //   <p>
    //     Kami percaya bahwa pengabdian kepada masyarakat adalah bagian penting
    //     dari pembelajaran. Melalui KKN ini, kami tidak hanya berusaha untuk
    //     mencerahkan semesta dengan ilmu dan keterampilan yang kami miliki,
    //     tetapi juga belajar banyak dari kebijaksanaan dan kerja keras masyarakat
    //     di Kelurahan Tirta Siak.
    //   </p>
    // </div>

    <div className="container flex flex-col min-h-screen">
      {/* Content */}
      <div className="flex-grow">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          {/* About Us Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                About Us
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">
                KKN Kelompok 5 dari Universitas Muhammadiyah Riau. Kami adalah
                sekelompok mahasiswa yang bersemangat dan berdedikasi
                menjalankan KKN (Kuliah Kerja Nyata) di Kelurahan Tirta Siak,
                Kecamatan Payung Sekaki. Dengan mengusung tema &quot;KKN UMRI
                Mencerahkan Semesta,&quot; kami berkomitmen untuk memberikan
                dampak positif bagi masyarakat di sekitar kami.
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <img
                className="w-full h-full"
                src="/test.png"
                alt="A group of People"
              />
            </div>
          </div>

          {/* Our Story Section */}
          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Proyek Utama - Web E-commerce untuk IMKM Kembang Setaman
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">
                Sebagai bagian dari kontribusi kami dalam KKN ini, kami
                mengambil inisiatif untuk membantu IMKM Kembang Setaman dalam
                memperluas jangkauan pasar mereka melalui pembuatan sebuah web
                e-commerce. Web ini dirancang untuk memudahkan penjualan produk
                kerajinan tangan kepada pelanggan yang lebih luas, baik secara
                lokal maupun nasional. Kami berharap dengan adanya platform ini,
                IMKM Kembang Setaman dapat lebih dikenal dan mendukung
                kesejahteraan anggota komunitasnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
