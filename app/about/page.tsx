"use client"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { SectionButton } from './SectionButton'
import { Button } from '@/components/ui/button'
import { fetcher } from '@/lib/fetcher'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'


const page = async () => {
    // const session = await getServerSession(authOptions);

    // if (session?.user) {
    //     redirect('/generate');
    // }


    // <div className='mt-24 flex flex-col items-center justify-center sm:mt-32 xl:mt-60"'>

    //     <div className='flex flex-col items-center justify-center rounded-lg border p-4'>
    //         <Image
    //             src="/Niagaweb-Logo-Utama.webp"
    //             alt="illustration"
    //             width={300}
    //             height={300}
    //             className="w-36 object-contain sm:w-24"
    //             quality={100}
    //         />

    //         <h1 className='mb-4 text-xl font-bold'>Niagaweb Software House</h1>
    //         <p>
    //             Niagaweb adalah sebuah perusahaan software house yang berfokus pada
    //             pengembangan aplikasi web dan solusi perangkat lunak untuk berbagai
    //             kebutuhan bisnis.
    //         </p>
    //         <p>
    //             Dengan tim yang berpengalaman dan komitmen untuk memberikan solusi
    //             terbaik kepada pelanggan, Niagaweb siap membantu Anda menghadapi
    //             tantangan teknologi informasi dan membantu bisnis Anda berkembang.
    //         </p>

    //     </div>
    // </div>

    const secondVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    return (
        <div className="mt-24 flex flex-col items-center justify-center sm:mt-32 xl:mt-60">
            <Image
                src="/Niagaweb-Logo-Utama.webp"
                alt="illustration"
                width={100}
                height={100}
                className="w-16 object-contain sm:w-24"
                quality={100}
            />
            <motion.h1 className='mt-8 w-full text-center text-[28px] font-bold leading-snug text-[#1B1A1E] md:w-4/6 md:text-[32px] lg:text-[42px]'>

                Tentang Kami

            </motion.h1>

            <motion.div
                variants={secondVariants}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                initial="initial"
                animate="animate"
                className='mt-5 flex w-full flex-col items-center text'
            >
                <div className='container mx-auto px-4 max-w-screen-xl'>
                    <h1 className='mb-4 text-xl font-bold text-center'>Niagaweb Software House</h1>
                    <p className='text-center'>
                        Niagaweb adalah sebuah perusahaan software house yang berfokus pada
                        pengembangan aplikasi web dan solusi perangkat lunak untuk berbagai
                        kebutuhan bisnis.
                    </p>
                    <p className='text-center'>
                        Dengan tim yang berpengalaman dan komitmen untuk memberikan solusi
                        terbaik kepada pelanggan, Niagaweb siap membantu Anda menghadapi
                        tantangan teknologi informasi dan membantu bisnis Anda berkembang.
                    </p>
                </div>
            </motion.div>


        </div>
    );
};

export default page