import React from "react";
import Image from "next/image";

interface AdvantageProps {
    icon: string;
    title: string;
}

export default function Advantage({ icon, title }: AdvantageProps) {
    return (
        <div className="flex w-[416px] items-center gap-8">
            <div className="flex w-14 h-14 p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]">
                <Image src={icon} alt={'as'} width={24} height={24} className="shrink-0" />
            </div>

            <p className="text-[#131313] font-roboto text-2xl">
                {title}
            </p>
        </div>
    );
}