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
        <div className="flex flex-col items-center gap-[30px]">
            <div className="flex items-start gap-2">
                <RollingDigit digit={Number(cur[0])} height={height}/>
                <RollingDigit digit={Number(cur[1])} height={height}/>
            </div>
            <span className="text-lg leading-6 text-white/56">{label}</span>
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
        // <section className="relative w-full overflow-hidden rounded-xl">
        //     <div className="relative h-[360px] w-full">
        //         <Image src={backgroundSrc} alt="" fill priority className="object-cover"/>
        //         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"/>
        //     </div>
        //
        //     <div className="pointer-events-none absolute inset-0 flex items-center">
        //         <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        //             <div className="max-w-[420px] text-white">
        //                 <p className="text-sm text-white/70">Спецпредложение</p>
        //                 <h3 className="mt-3 text-2xl md:text-[28px] leading-8 md:leading-9 font-semibold">
        //                     Бесплатная доставка и монтаж при заказе комплекта Starlink
        //                 </h3>
        //             </div>
        //
        //             <div className="hidden md:block pointer-events-auto">
        //                 <div className="rounded-2xl bg-black/30 backdrop-blur-md ring-1 ring-white/10 px-10 py-8">
        //                     <div className="flex items-end gap-10">
        //                         <RollingPair value={t.days} label="дней"/>
        //                         <RollingPair value={t.hours} label="часов"/>
        //                         <RollingPair value={t.mins} label="минут"/>
        //                         <RollingPair value={t.secs} label="секунд"/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="bg-[#082475] relative w-full overflow-hidden">
            <Container className="py-20">
                <div className="flex w-full items-center justify-between">
                    <div className="max-w-[345px] text-white flex flex-col gap-6">
                        <p className="text-[20px] text-[#667085] leading-6">Спецпредложение</p>
                        <h3 className="text-[32px] font-semibold font-inter tracking-[-1px]">
                            Бесплатная доставка и монтаж при заказе комплекта Starlink
                        </h3>
                    </div>

                    <div className="hidden md:block">
                        {/*bg-black/30 backdrop-blur-md ring-1 ring-white/10*/}
                        <div className="rounded-2xl px-8 py-[108px]">
                            <div className="flex items-end gap-8">
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
