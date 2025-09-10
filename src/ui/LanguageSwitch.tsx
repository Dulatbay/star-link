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
            className={`w-[100px] sm:w-[120px] md:w-[159px] h-8 sm:h-9 md:h-11 rounded-full border border-[#D5DAE1] bg-white p-[1px] flex items-center ${className}`}
            role="tablist"
            aria-label="Выбор языка"
        >
            <button
                type="button"
                role="tab"
                aria-selected={isKZ}
                onClick={() => onChange("kz")}
                className={`flex h-7 sm:h-8 md:h-10 flex-1 items-center justify-center gap-1 sm:gap-1.5 md:gap-2 rounded-full transition-colors
          ${isKZ ? "bg-[#DFE3E9]" : "bg-transparent hover:bg-[#F3F4F6]"}`}
            >
                <Image src="/flags/kz.svg" alt="" width={14} height={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full" />
                <span className="text-[#131313] text-center text-xs sm:text-sm md:text-base font-medium leading-4 sm:leading-5 md:leading-6">KZ</span>
            </button>

            <button
                type="button"
                role="tab"
                aria-selected={isRU}
                onClick={() => onChange("ru")}
                className={`flex h-7 sm:h-8 md:h-10 flex-1 items-center justify-center gap-1 sm:gap-1.5 md:gap-2 rounded-full transition-colors
          ${isRU ? "bg-[#DFE3E9]" : "bg-transparent hover:bg-[#F3F4F6]"}`}
            >
                <Image src="/flags/ru.svg" alt="" width={14} height={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full" />
                <span className="text-[#131313] text-center text-xs sm:text-sm md:text-base font-medium leading-4 sm:leading-5 md:leading-6">RU</span>
            </button>
        </div>
    );
}
