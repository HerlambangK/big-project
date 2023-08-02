"use client"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useState } from "react"
import { mataPelajaran } from "@/lib/mapel"
import { paketwebsite } from "@/lib/paketweb"
import { motion } from "framer-motion"

interface Props {
    onChange?: (value: string) => void
    value?: string
    disabled?: boolean
}

export function SubjectChoice({ onChange, value, disabled }: Props) {
    const [showSuggestion, setShowSuggestion] = useState(false)

    const hideSuggestionWithDelay = () => {
        setTimeout(() => {
            setShowSuggestion(false)
        }, 150)
    }

    return (
        <Command className="rounded-md border">
            <CommandInput disabled={disabled} value={value} onValueChange={(e) => onChange?.(e)} placeholder="Pilih Paket anda Misal : Landing Page, Company Profile, dll." onFocus={(e) => setShowSuggestion(true)} onBlur={hideSuggestionWithDelay} />
            <motion.div initial={{ height: 0 }} animate={{ height: showSuggestion ? 'auto' : 0 }}>
                <CommandList className="max-h-40">
                    <CommandEmpty>Belum ada paket untuk <span className="font-bold">{value}</span>, <button type="button">Tetap Cari</button></CommandEmpty>
                    <CommandGroup heading="Pilih Paket" onSelect={(s) => { }}>
                        {paketwebsite.map((item) => (
                            <CommandItem key={item.nama} onSelect={(currentValue) => { onChange?.(item.nama); setShowSuggestion(false) }}>
                                <span>{item.nama}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </motion.div>
        </Command>
    )
}