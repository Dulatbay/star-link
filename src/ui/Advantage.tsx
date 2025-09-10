import React from "react";
import Image from "next/image";

interface AdvantageProps {
    icon: string;
    title: string;
}

export default function Advantage({ icon, title }: AdvantageProps) {
    return (
        <div className="flex w-full max-w-[416px] items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className="flex w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2.5 sm:p-3 md:p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]">
                <Image src={icon} alt={'advantage icon'} width={18} height={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0" />
            </div>

            <p className="text-[#131313] font-roboto text-base sm:text-lg md:text-xl lg:text-2xl">
                {title}
            </p>
        </div>
    );
}