"use client";

import Image from "next/image";
import React from "react";

type Lang = "kz" | "ru";

interface LanguageSwitchProps {
    value: Lang;
    onChange: (next: Lang) => void;
    className?: string;
}

export default function LanguageSwitch({ value, onChange, className = "" }: LanguageSwitchProps) {
    const isKZ = value === "kz";
    const isRU = value === "ru";

    return (
        <div
            className={`w-[159px] h-11 rounded-full border border-[#D5DAE1] bg-white p-[1px] flex items-center ${className}`}
            role="tablist"
            aria-label="Выбор языка"
        >
            <button
                type="button"
                role="tab"
                aria-selected={isKZ}
                onClick={() => onChange("kz")}
                className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-full transition-colors
          ${isKZ ? "bg-[#DFE3E9]" : "bg-transparent hover:bg-[#F3F4F6]"}`}
            >
                <Image src="/flags/kz.svg" alt="" width={20} height={20} className="rounded-full" />
                <span className="text-[#131313] text-center text-base font-medium leading-6">KZ</span>
            </button>

            <button
                type="button"
                role="tab"
                aria-selected={isRU}
                onClick={() => onChange("ru")}
                className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-full transition-colors
          ${isRU ? "bg-[#DFE3E9]" : "bg-transparent hover:bg-[#F3F4F6]"}`}
            >
                <Image src="/flags/ru.svg" alt="" width={20} height={20} className="rounded-full" />
                <span className="text-[#131313] text-center text-base font-medium leading-6">RU</span>
            </button>
        </div>
    );
}
