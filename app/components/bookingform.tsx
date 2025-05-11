"use client";
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    packageName: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.redirect_url) {
      window.location.href = data.redirect_url; // arahkan ke Midtrans Snap
    } else {
      alert("Terjadi kesalahan saat memproses pemesanan.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold">Form Pemesanan</h2>

      <input
        type="text"
        name="name"
        required
        placeholder="Nama Lengkap"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        required
        placeholder="Nomor WhatsApp"
        className="w-full p-2 border rounded"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        name="packageName"
        required
        className="w-full p-2 border rounded"
        value={form.packageName}
        onChange={handleChange}
      >
        <option value="">Pilih Paket</option>
        <option value="Paket A">Paket A - Bali 3 Hari</option>
        <option value="Paket B">Paket B - Lombok 4 Hari</option>
        <option value="Paket C">Paket C - Labuan Bajo 5 Hari</option>
      </select>

      <input
        type="date"
        name="travelDate"
        required
        className="w-full p-2 border rounded"
        value={form.travelDate}
        onChange={handleChange}
      />

      <textarea
        name="note"
        placeholder="Catatan tambahan (opsional)"
        className="w-full p-2 border rounded"
        value={form.note}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Bayar Sekarang
      </button>
    </form>
  );
}
