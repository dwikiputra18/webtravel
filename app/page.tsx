import Header from "./components/header";
import Footer from "./components/footer";
export default function HomePage() {
  const paketWisata = [
    {
      id: 1,
      nama: "Paket Bali Hemat",
      durasi: "3 Hari 2 Malam",
      harga: "Rp.150.000",
      gambar: "/images/paket1.jpg",
    },
    {
      id: 2,
      nama: "Paket Yogyakarta",
      durasi: "4 Hari 3 Malam",
      harga: "Rp.200.000",
      gambar: "/images/paket2.jpg",
    },
    {
      id: 3,
      nama: "Paket Lombok Eksotis",
      durasi: "5 Hari 4 Malam",
      harga: "Rp.250.000",
      gambar: "/images/paket3.jpg",
    },
  ];

  return (
    <main className="px-6 py-12 font-sans">
    <Header />

      {/* Hero Section */}
      <section className="relative mb-16">
        <img
          src="/images/paket1.jpg"
          alt="Hero Travel"
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-2">Temukan Liburan Impianmu</h2>
          <p className="mb-4">Paket wisata terbaik, harga terjangkau</p>
          <a
            href="#paket"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
          >
            Lihat Paket
          </a>
        </div>
      </section>

      {/* Paket Section */}
      <section id="paket" className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Paket Wisata</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {paketWisata.map((paket) => (
            <div
              key={paket.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
            >
              <img
                src={paket.gambar}
                alt={paket.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-1">{paket.nama}</h4>
                <p className="text-sm text-gray-600 mb-1">{paket.durasi}</p>
                <p className="font-semibold text-sm">Start from {paket.harga}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
