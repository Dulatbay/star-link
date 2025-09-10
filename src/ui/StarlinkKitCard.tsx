import React from "react";
import {CustomButton} from "@/ui/CustomButton";

interface StarlinkKitCardProps {
    title: string;
    price: string | number;
    description?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    maxWidthClass?: string;
    minHeightClass?: string;
    className?: string;
}

export default function StarlinkKitCard({
                                            title,
                                            price,
                                            description,
                                            ctaText = "Оставить заявку",
                                            onCtaClick,
                                            maxWidthClass = "max-w-full lg:max-w-[400px]",
                                            minHeightClass = "min-h-[170px]",
                                            className = "",
                                        }: StarlinkKitCardProps) {
    const PriceBlock = (
        <div className="max-w-fit flex flex-col items-start gap-1.5 font-medium">
            <p className="text-[#333F51] text-sm">Цена</p>
            <p className="text-[#131313] text-xl md:text-2xl">
                {typeof price === "number" ? `${price.toLocaleString("ru-RU")} ₸` : price}
            </p>
        </div>
    );

    return (
        <>
            <div className={`${maxWidthClass} ${minHeightClass} flex flex-col gap-6 md:gap-8 ${className}`}>
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="font-inter text-[#131313] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-10 lg:leading-11 tracking-[-0.48px]">
                        {title}
                    </h2>

                    {description ? (
                        <>
                            <p className="max-w-full lg:max-w-[350px] text-[#667085] text-lg md:text-xl">{description}</p>
                        </>
                    ) : (
                        PriceBlock
                    )}
                </div>

                {description && PriceBlock}

                <CustomButton onClick={onCtaClick} className="w-full md:max-w-[305px] rounded-lg">{ctaText}</CustomButton>
            </div>
        </>
    );
}
