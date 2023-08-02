"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CompanyProfileForm = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    // Inisialisasi state dengan nilai awal yang sesuai
    domainName: '',
    hasPreviousWebsite: '',
    isDomainRegistered: '',
    isHostingRegistered: '',
    domainHostingLoginUrl: '',
    domainHostingUsername: '',
    domainHostingPassword: '',
    infoEmail: '',
    supportEmail: '',
    serviceOffered: '',
    serviceBenefit: '',
    serviceKeywords: '',
    logoFile: null,
    primaryColor: '',
    secondaryColor: '',
    websiteFont: '',
    mainWebReference: '',
    additionalWebReference: '',
    navigationMenu: '',
    homeDesign: '',
    aboutUsDesign: '',
    serviceDesign: '',
    galleryDesign: '',
    contactUsDesign: '',
    additionalPages: '',
    additionalPagesDesign: '',
    additionalNotes: '',
    hasWhatsappChatFeature: false,
  });

  // Fungsi untuk mengubah data form saat ada perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Jika input adalah checkbox, gunakan checked sebagai nilainya
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  // Fungsi untuk menangani pengiriman data form saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aksi yang akan dilakukan saat form disubmit
    console.log(formData);
    // Contoh: mengirim data form ke server
    // fetch('/api/submit-company-profile', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Domain & Hosting */}
        <div>
          <h2 className="font-bold">Domain & Hosting</h2>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="domainName">Nama domain yang diinginkan:</label>
              <input
                type="text"
                id="domainName"
                name="domainName"
                value={formData.domainName}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 rounded-lg w-96"
              />
            </div>
            {/* ... (lanjutkan dengan input untuk pertanyaan lainnya) */}
          </div>
        </div>

        {/* Email Profesional */}
        <div>
          <h2 className="font-bold">Email Profesional</h2>
          {/* ... (lanjutkan dengan input untuk pertanyaan lainnya) */}
        </div>

        {/* Layanan */}
        <div>
          <h2 className="font-bold">Layanan</h2>
          {/* ... (lanjutkan dengan input untuk pertanyaan lainnya) */}
        </div>

        {/* Desain Website */}
        <div>
          <h2 className="font-bold">Desain Website</h2>
          {/* ... (lanjutkan dengan input untuk pertanyaan lainnya) */}
        </div>

        {/* Navigasi Menu */}
        <div>
          <h2 className="font-bold">Navigasi Menu</h2>
          {/* ... (lanjutkan dengan input untuk pertanyaan lainnya) */}
        </div>

        {/* ... Bagian dan input form lainnya */}

        {/* Tombol Submit */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyProfileForm;
