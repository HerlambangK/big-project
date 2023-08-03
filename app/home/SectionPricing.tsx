"use client"
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export const CardPricingLandingPage = (onClick) => {
  return <div className='flex min-h-[40px] w-full flex-col justify-between rounded-2xl border p-8'>
    <div className='flex w-full flex-row justify-between'>
      <span className='text-xl font-bold'>Landing Page</span>
      <div><span className='rounded-full bg-blue-50 p-2 text-xs font-bold text-blue-600'>LANDING PAGE</span></div>
    </div>
    <p className='mt-5 text-sm opacity-75'>Jasa landing page dengan desain profesional cocok untuk bisnis pemula yang ingin memulai berjualan secara online menggunakan website dengan biaya terjangkau. !</p>
    <p className='mt-5'><span className='text-2xl font-bold'>Rp. Rp 1.500.000</span></p>
    <div className='mt-5 flex flex-col gap-4'>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Gratis Hosting dan Domain*</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" /> 30 Pilihan Tema</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Free Maintenance di Bulan Pertama</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />SEO Friendly</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Desain Responsif</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Pengerjaan 7 Hari Kerja</span>
    </div>
    {/* <Link href={"/generate"} className="w-full"><Button className='mt-8 w-full bg-blue-500 font-bold hover:bg-blue-600' size="sm">Pesan Website</Button></Link> */}
    <Button className='mt-8 bg-blue-500 font-bold hover:bg-blue-600' onClick={onClick} size="sm">Pesan Website</Button>

  </div>
}


export const CardPricingCompanyProfile = ({ onClick }) => {
  return <div className='flex min-h-[40px] w-full flex-col rounded-2xl border p-8'>
    <div className='flex w-full flex-row justify-between'>
      <span className='text-xl font-bold'>Company Profile</span>
      <div><span className='rounded-full bg-blue-50 p-2 text-xs font-bold text-blue-600'>COMPANY PROFILE</span></div>
    </div>
    <p className='mt-5 text-sm opacity-75'>Jasa buat website company profile murah berkualitas yang sesuai untuk perusahaan yang menawarkan barang atau jasa secara B2B seperti konsultan, kontraktor, distributor, dan manufaktur.</p>
    <p className='mt-5 flex flex-col'>
      <span className='text-xs line-through'>Rp. 2.000.000</span>
      <span className='text-2xl font-bold'>Rp. 1.900.000 <span className='text-xs font-light underline'>Diskon 20%</span></span>
    </p>
    <div className='mt-5 flex flex-col gap-4'>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Cocok Untuk Branding Perusahaan anda</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Hosting Dan Free Domain !</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Gratis Setup 5 Konten/Artikel</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />1 Halaman Awal</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />1x Revisi Desain</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />500+ Tema Pilihan</span>
    </div>
    <Button className='mt-8 bg-blue-500 font-bold hover:bg-blue-600' onClick={onClick} size="sm">Pesan Website</Button>
  </div>
}

export const CardPricingOnlineShop = ({ onClick }) => {


  return <div className='flex min-h-[40px] w-full flex-col justify-between rounded-2xl border p-8'>
    <div className='flex w-full flex-row justify-between'>
      <span className='text-xl font-bold'>Online Shop</span>
      <div><span className='rounded-full bg-blue-50 p-2 text-xs font-bold text-blue-600'>ONLINE SHOP</span></div>
    </div>
    <p className='mt-5 text-sm opacity-75'>Jasa pembuatan website profesional (toko online) yang direkomendasikan untuk bisnis atau UKM yang menjual barang atau jasa kepada konsumen secara langsung seperti bisnis kuliner, properti, konveksi, travel, dll.</p>
    <p className='mt-5 flex flex-col'>
      <span className='text-2xl font-bold'>Rp. 2.900.000</span>
    </p>
    <div className='mt-5 flex flex-col gap-4'>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Gratis Setup 5 Produk Unggulan</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Integrasi Marketplace / Instagram Shop</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />Fitur Payment & Shipping</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />5 Halaman Awal</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />1x Revisi Desain</span>
      <span className='inline-flex items-center text-sm'><Check className="mr-2 h-4 w-4 text-blue-500" />500+ Tema Pilihan</span>
    </div>
    <Button className='mt-8 bg-blue-500 font-bold hover:bg-blue-600' onClick={onClick}>Pesan Website</Button>
  </div>
}

const SectionPricing = ({ title = "Daftar Harga", description = "Jelajahi paket berlangganan sesuai kebutuhan anda" }) => {
  const [isLoading, setIsloading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const router = useRouter()

  const handleOnClick = async (code) => {
    setIsloading(true)
    await fetch("/api/payment/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code: code
      })
    }).then(res => res.json()).then(res => {
      if (res.redirect_url) {
        //open new tab
        window.open(res.redirect_url, '_blank')
        setOrderId(res.order_id)
      } else {
        toast.error("Terjadi kesalahan")
      }
    }).catch(() => {
      toast.error("Terjadi kesalahan")
    }).finally(() => {
      setIsloading(false)
    })
  }

  if (isLoading) {
    return <div className='container'>Loading...</div>
  }

  if (orderId) {
    return <div className='container mt-20 flex min-h-screen flex-col items-center'>
      <Button onClick={() => { router.replace("/generate") }}>Saya sudah membayar</Button>
    </div>
  }

  return (
    <div className='mt-40 flex flex-col items-center justify-center'>
      <h1 className='text-center text-3xl font-bold'>{title}</h1>
      <h2 className='mt-4 text-lg'>{description}</h2>
      <div className='mt-8 grid w-full grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6'>
        <CardPricingLandingPage />
        <CardPricingCompanyProfile onClick={() => handleOnClick('monthly')} />
        <CardPricingOnlineShop onClick={() => handleOnClick('weekly')} />
      </div>
    </div>
  )
}

export default SectionPricing