"use client"
import { motion } from 'framer-motion'
import { Activity, Boxes, ChevronUp, ClipboardList, Cpu, Timer } from 'lucide-react'
import React from 'react'

interface FeatureItemProps {
  icon: React.ReactNode
  title?: string
  description?: string
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className='flex flex-col'>
      <div className='inline-flex items-center'>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200 text-blue-500'>{icon}</div>
        <span className='ml-6 text-lg font-bold'>{title}</span>
      </div>
      <p className='mt-7'>
        {description}
      </p>
    </div>
  )
}

const SectionFeature = () => {
  return (
    <motion.div className='mt-20 flex w-full flex-col'>
      {/* <h1 className='text-2xl font-bold text-blue-500'>Fitur</h1> */}
      <h1 className='text-2xl font-bold text-blue-500'>Fitur</h1>
      <h2 className='mt-3 text-xl font-bold leading-snug md:text-2xl lg:text-4xl xl:text-5xl'>Keunggulan Kami <br />Antara Lain:</h2>
      <div className='mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
        <FeatureItem title={"Hemat Waktu"} description={"Buat website impian Anda dalam hitungan menit, tanpa repot menghabiskan waktu berjam-jam. Lebih cepat, lebih efisien!."} icon={<Timer className="text-2xl " />} />
        <FeatureItem title={"Variasi Tema yang Banyak"} description={"Pilih dari koleksi tema menakjubkan kami. Beragam pilihan untuk menghadirkan tampilan unik dan sesuai dengan selera Anda."} icon={<Boxes className="text-2xl " />} />
        <FeatureItem title={"Editing Yang mudah"} description={"Cocok untuk pemula atau ahli. Atur tingkat kesulitan sesuai kebutuhan Anda. Mudah disesuaikan!."} icon={<ChevronUp className="text-2xl " />} />
        <FeatureItem title={"Layanan Konsultasi"} description={"Sajikan konten kaya dan bermanfaat bagi pengunjung. Artikel, gambar, video, dan konten menarik lainnya."} icon={<ClipboardList className="text-2xl " />} />
        <FeatureItem title={"Integrasi Dengan Fitur "} description={"Terhubung dengan alat bisnis dan platform lainnya untuk keberhasilan bisnis Anda."} icon={<Activity className="text-2xl " />} />
        <FeatureItem title={"Integrasi dengan AI"} description={"Teknologi AI canggih membantu meningkatkan performa dan efisiensi website Anda."} icon={<Cpu className="text-2xl " />} />
      </div>
    </motion.div>
  )
}

export default SectionFeature