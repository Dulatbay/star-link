import React from "react";
import Image from "next/image";
import {CustomButton} from "@/ui/CustomButton";

type Variant = "light" | "primary" | "dark" | "cornflower-blue" | "periwinkle";

interface PricingCardProps {
    title: string;
    description: string;
    price: number | string;
    per?: string;
    icon: string;
    variant?: Variant;
    badge?: string;
    onCtaClick?: () => void;
    ctaText?: string;
    className?: string;
}

export default function PricingCard({
                                        title,
                                        description,
                                        price,
                                        per = "₸/мес",
                                        icon,
                                        variant = "light",
                                        badge,
                                        onCtaClick,
                                        ctaText = "Оставить заявку",
                                        className,
                                    }: PricingCardProps) {
    const isNumber = typeof price === "number";
    const priceText = isNumber ? price.toLocaleString("ru-RU") : price;

    const palette = {
        light: {
            card: "bg-[#FFF]",
            sub: "text-[#131313]/56",
            hr: "border-[#D5DAE1]",
            btnWrap: "bg-[#113CB9]",
        },
        primary: {
            card: "bg-[#082475]",
            sub: "text-[#FFF]/56",
            hr: "border-white/24",
            btnWrap: "bg-[#113CB9]",
        },
        dark: {
            card: "bg-[#131313]",
            sub: "text-[#FFF]/56",
            hr: "border-white/24",
            btnWrap: "bg-[#113CB9]",
        },
        "cornflower-blue": {
            card: "bg-[#8FACE7]",
            sub: "text-[#131313]/56",
            hr: "border-[#D5DAE1]",
            btnWrap: "bg-[#113CB9]",
        },
        periwinkle: {
            card: "bg-[#5984FF]",
            sub: "text-[#131313]/56",
            hr: "border-[#D5DAE1]",
            btnWrap: "bg-[#113CB9]",
        },
    }[variant];

    return (
        <div
            className={`w-full max-w-[415px] rounded-2xl shrink-0 p-10 shadow-[0_26px_40px_0_rgba(188,202,255,0.13)] ${palette.card} ${className || ''}`}>
            <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-5">
                        <div
                            className={`flex bg-[#FFF] h-14 w-14 p-4 justify-center items-center shrink-0 rounded-[100px] `}>
                            <Image src={icon} alt="" width={22} height={22}/>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3.5">
                                <div className="flex gap-3 items-center">
                                    <h3 className={`font-inter text-[32px] font-semibold tracking-[-1px] ${variant !== "light" ? "text-[#FFF]" : "text-[#131313]"}`}>
                                        {title}
                                    </h3>

                                    {badge && (
                                        <div
                                            className="flex px-2.5 py-[5px] items-center justify-center bg-[rgba(255,255,255,0.08)] rounded-lg border border-[#FFF]">
                                            <span className={`text-sm leading-[16.8px] ${variant !== "light" ? "text-[#FFF]" : "text-[#131313]"}`}>
                                                {badge}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <p className={`text-lg leading-8 ${palette.sub}`}>{description}</p>
                            </div>

                            <div className="flex items-end gap-3">
                                <span className={`text-6xl font-medium tracking-[-1px] ${variant !== "light" ? "text-[#FFF]" : "text-[#131313]"}`}>
                                    {priceText}
                                </span>
                                <span className={`pb-1 text-2xl ${variant !== "light" ? "text-[#FFF]" : "text-[#131313]"}`}>
                                    {per}
                                </span>
                            </div>
                        </div>
                    </div>

                    <hr className={`w-full ${palette.hr}`}/>
                </div>

                <CustomButton onClick={onCtaClick} className="rounded-2xl">{ctaText}</CustomButton>
            </div>
        </div>
    );
}
