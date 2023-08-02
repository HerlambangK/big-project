"use client"
import { Grade } from '@/components/grade'
import { Options } from '@/components/options'
import { YesNo } from '@/components/yesno'
import { SubjectChoice } from '@/components/subject'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
// import { mataPelajaran } from '@/lib/mapel'
import { paketwebsite } from '@/lib/paketweb'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Session } from 'next-auth'
import toast from 'react-hot-toast'
import LoadingItemQuestion from '@/components/loading/loading-item-question'
import ItemQuestion from '@/components/question/item-question'
import { Progress } from '@/components/ui/progress'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/id'
import { Input } from '@/components/ui/input'
import { log } from 'console'

dayjs.extend(relativeTime)
dayjs.locale('id')

interface Props {
    session: Session | null
    limit: any
}

const MainPage = ({ session, limit: initialLimit }: Props) => {
    const router = useRouter()
    const [subject, setSubject] = useState<string>("");
    const [grade, setGrade] = useState<string>("umum");
    const [haveOptions, setHaveOptions] = useState(false);
    const [haveQuetions, setHaveQuotions] = useState(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [topic, setTopic] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(0)
    const [isInitial, setIsInitial] = useState(true)
    const [limit, setLimit] = useState<{ limit_left: number, is_limit_reached: boolean, limit_max: number, have_subscription: boolean, expired_at: string }>(initialLimit)



    console.log("1", haveQuetions)
    console.log(setHaveQuotions)

    // console.log("2", haveOptions)
    // console.log(setHaveOptions)

    const getLimitFromApi = async () => {
        const res = await fetch('/api/payment/limit').finally(() => { setIsLoading(false) })
        if (!res.ok) {
            router.push('/404')
        }

        const json = await res.json()
        setLimit(json)
    }


    const soalRef = useRef<null | HTMLDivElement>(null);

    const scrollToBios = () => {
        if (soalRef.current !== null) {
            soalRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const onSubmit = async () => {
        if (limit?.is_limit_reached && limit?.have_subscription === false) {
            router.replace('/generate/limit')
        }

        if (!session?.user) {
            router.push("/api/auth/signin")
            return;
        }

        if (total === 0) {
            return;
        }

        if (subject === "") {
            toast("Pilih mata pelajaran terlebih dahulu", { position: 'bottom-center' })
            return;
        }

        setIsInitial(false)

        await generate();
    }

    const reset = () => {
        setQuestions([])
    }

    const generate = async () => {
        setIsLoading(true)
        reset()

        const response = await fetch("/api/request-question-trial", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: subject,
                grade: grade,
                have_options: haveOptions,
                topic: topic,
                total: total,
            }),
        });

        if (!response.ok) {
            console.log(response);

            setIsLoading(false)
            toast.error("Terjadi kesalahan, silahkan coba lagi", { position: 'bottom-center' })
            return;
        }

        // This data is a ReadableStream
        const data = response.body;

        if (!data) {
            return;
        }

        const decoder = new TextDecoder();
        const reader = data.getReader();
        let buffer = ""
        let done = false;

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);

            buffer += chunkValue;
        }

        try {
            const questions = JSON.parse(buffer);
            setQuestions(questions);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false)
        scrollToBios();
        addQuestionTotal(total)
    };

    const addQuestionTotal = async (total = 5) => {
        const addCount = await fetch("/api/counter?total=" + total)
        const getLimit = await getLimitFromApi()
        Promise.all([addCount, getLimit])
    }


    return (


        <div className='container mt-10 flex w-full flex-col gap-8 lg:flex-row lg:gap-4' >
            <div className='flex h-auto w-full flex-col lg:w-11/12'>
                <form className="flex w-full flex-col gap-2 rounded-lg">
                    <h1 className='mb-4 inline-flex w-full items-center justify-between border-b border-zinc-50 text-lg font-bold'><span>Dockument Persiapan Website</span></h1>

                    {limit.have_subscription ?
                        <div className='mb-4 flex flex-col'>
                            <Label className='text-sm'>Progress Kamu: </Label>
                            <span className='text-sm font-bold'>Aktif {dayjs(limit.expired_at).fromNow()}</span>
                        </div>
                        :
                        // <div className='mb-4 flex flex-col'>
                        //     <Label className='text-sm'>Informasi Terisi</Label>
                        //     {isLoading && <span>Loading....</span>}
                        //     {limit && <span className='inline-flex items-center gap-2'> <Progress value={((limit?.limit_max - limit?.limit_left) / limit?.limit_max) * 100} />{limit?.limit_max - limit.limit_left}/{limit?.limit_max}</span>}
                        // </div>
                        <div className='mb-4 flex flex-col'>
                            <Label className='text-sm'>Progress kelengkapan</Label>
                            {isLoading && <span>Loading....</span>}
                            {limit && <span className='inline-flex items-center gap-2'> <Progress value={((100 - 80) / 100) * 100} />{100 - 80}/{100}</span>}
                        </div>
                    }
                    <motion.div
                        className='flex flex-col gap-2 text-sm mb-4 text-zinc-500'>
                        <p>Dokumen ini akan digunakan untuk membantu Anda dalam mempersiapkan konten yang akan ditampilkan di website Anda. Silahkan Anda menuliskan dokumen ini selengkap-lengkapnya agar website Anda bisa segera diproses oleh Tim Produksi Niagaweb.
                            Silahkan kirim material Anda bersamaan dengan Dokumen Persiapan Konten Website ini ke email produksi@niagaweb.co.id atau bisa menghubungi nomor layanan Niagaweb yang menghubungi Anda.</p>
                    </motion.div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="message-2">Jenis Paket</Label>
                        <SubjectChoice disabled={isLoading} onChange={(value) => setSubject(value)} value={subject} />
                    </div>

                    {/* Hosting */}
                    <motion.div
                        className='flex mt-4 flex-col gap-2'>
                        <h2 className='font-bold'>1. Hosting Dan Domain</h2>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-2'>
                        <Label className='mt-4'>Nama Hosting yang diinginkan </Label>
                        <p className='text-xs text-zinc-500'>Anda dapat menggunakan nama website dengan ekstensi domain seperti .com, .net, .org, .info, .sch.id, .or.id, .ac.id, .web.id, .xyz, .website, .space, .site, .online dan .ponpes.id secara gratis. Jika Anda menginkan website dengan ekstensi selain yang disebutkan di atas, maka akan dikenakan biaya tambahan sesuai harga domain yang berlaku. Cek ketersediaan domain di sini.</p>
                        <Input onChange={(e) => setTopic(e.target.value)} value={topic} disabled={isLoading} placeholder={`Seperti : ${!subject ? "Nama Hosting" : paketwebsite.find((v) => v.nama === subject)?.hostingdomain}`} />
                        <span className='text-xs text-zinc-500'>Pastikan Hosting mu sudah di order.</span>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-2'>
                        <Label className='mt-4'>Nama Domain yang diinginkan  </Label>
                        <Input onChange={(e) => setTopic(e.target.value)} value={topic} disabled={isLoading} placeholder={`Seperti : ${!subject ? "Nama Domain" : paketwebsite.find((v) => v.nama === subject)?.hostingdomain}`} />
                        <span className='text-xs text-zinc-500'>Pastikan Domain mu sudah ada.</span>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-2'>
                        <Label className='mt-4'>Apa sudah memiliki website sebelumnya ?  </Label>
                        <div className='flex w-full flex-col gap-2 sm:w-1/2'>
                            <YesNo disabled={isLoading} onChange={setHaveQuotions} haveQuestions={haveQuetions} />
                            {/* const [haveQuetions, setHaveQuotions] = useState(false); */}

                        </div>
                        <span className='text-xs text-zinc-500'>Pastikan Domain mu sudah ada.</span>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-2'>
                        <Label className='mt-4'> Penjelasan Pembuatan Website  </Label>
                        <Textarea onChange={(e) => setTopic(e.target.value)} value={topic} disabled={isLoading} placeholder={`Seperti : ${!subject ? "Keunggulan, About, company profile, dll." : paketwebsite.find((v) => v.nama === subject)?.layananAnda}`} />
                        <span className='text-xs text-zinc-500'>Kamu bisa memasukkan lebih dari satu topik.</span>
                    </motion.div>
                    <motion.div
                        className='flex flex-col gap-2'>
                        <Label className='mt-4'>Penjelasan Layanan keuntungan Bisnis anda </Label>
                        <Textarea onChange={(e) => setTopic(e.target.value)} value={topic} disabled={isLoading} placeholder={`Seperti : ${!subject ? "Fitur, kelebihan, dll." : paketwebsite.find((v) => v.nama === subject)?.penjelasanWeb}`} />
                        <span className='text-xs text-zinc-500'>Kamu bisa memasukkan lebih dari satu topik.</span>
                    </motion.div>
                    <motion.div
                        className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-2'>
                        {/* <div className='mt-4 flex w-full flex-col gap-2 sm:w-1/2'>
                            <Label>Tingkatan / Kelas</Label>
                            <Grade disabled={isLoading} onChange={setGrade} value={grade} />
                        </div> */}
                        {/* <div className='mt-4 flex w-full flex-col gap-2 sm:w-1/2'>
                            <Label>Pilihan Jawaban</Label>
                            <Options disabled={isLoading} onChange={setHaveOptions} haveOptions={haveOptions} />
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: subject ? 1 : 0, height: subject ? "auto" : 0, display: subject ? "flex" : "none" }}
                        className='flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-2'>

                        <div className='mt-4 flex w-full flex-col gap-2'>
                            <Label>Jumlah Halaman <span className='text-lg font-bold'>--{total}--</span></Label>
                            <Slider disabled={isLoading} defaultValue={[0]} max={limit.have_subscription ? 20 : limit?.limit_left} step={5} onValueChange={(e) => setTotal(e[0])} value={[total]} />
                        </div>
                    </motion.div>
                    <Button
                        className='mt-4 h-14 bg-blue-500 text-lg hover:bg-blue-400'
                        size={"lg"}
                        disabled={isLoading}
                        onClick={onSubmit}
                        type="button">
                        {isLoading ? "Sedang Memproses..." : "Buat Website"}
                    </Button>
                </form>
            </div>
            <div className='flex min-h-screen w-full flex-col gap-4 border-l border-zinc-100 lg:w-3/12 lg:pl-8'>
                {/* Recommendation */}
                {isInitial && <div> Generate Website apapun seperti : </div>}
                {isInitial &&
                    <div className='flex flex-col gap-4'>
                        <span className='cursor-pointer rounded-md border p-4 text-sm hover:bg-zinc-50' onClick={() => { setSubject('Landing Page'); setTopic('Iklan'); setTotal(5) }}><span className='font-bold'>Landing Page</span>: Temukan Store Susu Protein Evoline  </span>
                        <span className='cursor-pointer rounded-md border p-4 text-sm hover:bg-zinc-50' onClick={() => { setSubject('Company Profile'); setTopic('Bukit Emas Tbk - Pabrik besi nomor 1'); setTotal(5) }}><span className='font-bold'>Company Profile</span>: Bukit Emas Tbk - Pabrik besi nomor 1 </span>
                        <span className='cursor-pointer rounded-md border p-4 text-sm hover:bg-zinc-50' onClick={() => { setSubject('Online Shop'); setTopic('Baju Anak anak');; setTotal(5) }}><span className='font-bold'>Online Shop</span>: Oldera Shop - Baju anak anak terlengkap</span>
                        {/* <span className='cursor-pointer rounded-md border p-4 text-sm hover:bg-zinc-50' onClick={() => { setSubject('Matematika'); setTopic('Pecahan'); setGrade('5 SD'); setTotal(5) }}><span className='font-bold'>Online Shop</span>: Oldera Shop - Baju anak anak terlengkap</span> */}
                    </div>
                }
                {isLoading && <span className='text-xl'>Tunggu Sebentar...</span>}
                {isLoading && [0, 1, 2, 3].map((item) => (<LoadingItemQuestion key={item} />))}
                {questions.map((question, index) => {
                    return (
                        <ItemQuestion
                            subject={subject}
                            key={index}
                            index={index + 1}
                            question={question}
                        />
                    )
                })}
            </div>
        </div >
    )
}

export default MainPage