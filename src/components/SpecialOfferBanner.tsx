"use client";
import React, {useEffect, useMemo, useState} from "react";
import Container from "@/ui/Container";

const pad2 = (n: number) => n.toString().padStart(2, "0");
const diffDHMS = (until: Date) => {
    const now = Date.now(), end = until.getTime();
    const ms = Math.max(0, end - now);
    const days = Math.floor(ms / 86_400_000);
    const hours = Math.floor((ms % 86_400_000) / 3_600_000);
    const mins = Math.floor((ms % 3_600_000) / 60_000);
    const secs = Math.floor((ms % 60_000) / 1_000);
    return {days, hours, mins, secs, ms};
};

function RollingDigit({
                          digit,
                          height = 64,
                          duration = 350,
                      }: {
    digit: number;       // 0..9
    height?: number;     // px
    duration?: number;   // ms
}) {
    const [prev, setPrev] = useState(digit);
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        if (digit === prev) return;
        setAnim(true);
        const t = setTimeout(() => {
            setAnim(false);
            setPrev(digit);
        }, duration);
        return () => clearTimeout(t);
    }, [digit, prev, duration]);

    const width = Math.floor(height * 0.62);

    if (!anim) {
        return (
            <div className="relative overflow-hidden" style={{height, width}}>
                <span
                    className="flex items-center justify-center font-semibold text-white select-none"
                    style={{height, fontSize: height, lineHeight: `${height}px`}}
                >
                  {prev}
                </span>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden" style={{height, width}}>
            <div
                className="absolute inset-0 flex flex-col items-center transition-transform ease-out"
                style={{
                    height: height * 2,
                    transform: "translateY(-100%)",
                    animation: `rd-slide ${duration}ms forwards`,
                }}
            >
        <span
            className="flex items-center justify-center font-semibold text-white select-none"
            style={{height, fontSize: height, lineHeight: `${height}px`}}
        >
          {digit}
        </span>
                <span
                    className="flex items-center justify-center font-semibold text-white/80 select-none"
                    style={{height, fontSize: height, lineHeight: `${height}px`}}
                >
          {prev}
        </span>
            </div>

            <style jsx>{`
                @keyframes rd-slide {
                    to {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

function RollingPair({value, label, height = 120}: { value: number; label: string; height?: number }) {
    const cur = pad2(value);
    return (
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-[30px]">
            <div className="flex items-start gap-0.5 sm:gap-1 md:gap-2">
                <RollingDigit digit={Number(cur[0])} height={height}/>
                <RollingDigit digit={Number(cur[1])} height={height}/>
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg leading-3 sm:leading-4 md:leading-5 lg:leading-6 text-white/56">{label}</span>
        </div>
    );
}

export default function SpecialOfferBanner({
                                               endsAt = "2025-09-30T23:59:59+05:00",
                                               // backgroundSrc = "/images/space-earth.jpg",
                                           }: {
    endsAt?: string | Date;
    backgroundSrc?: string;
}) {
    const endDate = useMemo(() => (typeof endsAt === "string" ? new Date(endsAt) : endsAt), [endsAt]);
    const [t, setT] = useState(() => diffDHMS(endDate));

    useEffect(() => {
        let id: number;
        const tick = () => {
            setT(diffDHMS(endDate));
            const delay = 1000 - (Date.now() % 1000);
            id = window.setTimeout(tick, delay);
        };
        id = window.setTimeout(tick, 0);
        return () => clearTimeout(id);
    }, [endDate]);

    return (
        <section className="bg-[#082475] relative w-full overflow-hidden">
            <Container className="py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20">
                <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between gap-6 sm:gap-8 lg:gap-0">
                    <div className="max-w-full lg:max-w-[345px] text-white flex flex-col gap-3 sm:gap-4 md:gap-6 text-center lg:text-left">
                        <p className="text-base sm:text-lg md:text-[20px] text-[#667085] leading-5 sm:leading-6">Спецпредложение</p>
                        <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-semibold font-inter tracking-[-1px] leading-tight">
                            Бесплатная доставка и монтаж при заказе комплекта Starlink
                        </h3>
                    </div>

                    <div className="block">
                        <div className="rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-16 lg:py-[108px]">
                            <div className="flex flex-wrap sm:flex-nowrap items-end justify-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
                                <RollingPair value={t.days} label="дней"/>
                                <RollingPair value={t.hours} label="часов"/>
                                <RollingPair value={t.mins} label="минут"/>
                                <RollingPair value={t.secs} label="секунд"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
