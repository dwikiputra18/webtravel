export default function Footer() {
  return (
    <footer className="bg-[#918d8d] text-white px-6 py-10 mt-16">
      {/* Footer Info */}
      <div className="grid md:grid-cols-3 gap-6 text-sm max-w-6xl mx-auto">
        {/* Kiri - Deskripsi */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
            <h3 className="text-lg font-bold text-purple-300">
              Trip Kuy Indonesia
            </h3>
          </div>
          <p className="mb-2">
            🌴 Selamat Datang di PT. Trip Kuy Indonesia – Pintu Gerbang Menuju Liburan Impian Anda! 🌴
          </p>
          <p>
            ✨ Ayo mulai petualangan Anda di Bali bersama kami – karena setiap perjalanan adalah cerita yang tak terlupakan! 🌟
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            <a href="https://wa.me/6281353079529">📱</a>
            <a href="https://instagram.com">📸</a>
            <a href="https://youtube.com">▶️</a>
          </div>
        </div>

        {/* Tengah - Kontak */}
        <div>
          <h4 className="font-semibold text-base mb-2">Kontak Kami</h4>
          <p className="mb-1">
            Jl. Padang Galak No.88, Kesiman, Kec. Denpasar Tim., Kota Denpasar, Bali 80237
          </p>
          <p className="mb-1">📞 081 353 079 529</p>
          <p>📧 hello@tripkuy.co.id</p>
        </div>

        {/* Kanan - Galeri */}
        <div>
          <h4 className="font-semibold text-base mb-2">Galeri</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`/images/galeri${num}.jpg`}
                alt={`Galeri ${num}`}
                className="rounded-md h-16 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
