import Container from "@/ui/Container";
import settingsIcon from "../../public/advantage-icons/settings-icon.svg";
import shieldZapIcon from "../../public/advantage-icons/shield-zap-icon.svg";
import lightningIcon from "../../public/advantage-icons/lightning-icon.svg";
import sunIcon from "../../public/advantage-icons/sun-icon.svg";
import sunriseIcon from "../../public/advantage-icons/sunrise-icon.svg";
import starlinkIcon from "../../public/advantage-icons/starlink-icon.svg";
import React from "react";
import Advantage from "@/ui/Advantage";
import StarlinkKitCard from "@/ui/StarlinkKitCard";

const advantages = [
    {icon: settingsIcon, title: "Установка занимает до 1 часа."},
    {icon: shieldZapIcon, title: "Класс защиты IP67."},
    {icon: lightningIcon, title: "Энергопотребление: 50–75 Вт в работе."},
    {icon: sunIcon, title: "Работает при −30 °C…+50 °C"},
    {icon: sunriseIcon, title: "Можно использовать от генератора и солнечных панелей."},
    {icon: starlinkIcon, title: "Технология SpaceX используется по всему миру."},
];

export default function StarlinkStandard() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="pt-20 pb-[120px]">
                <div className="flex flex-col items-start gap-40">
                    <div className="w-full flex justify-between">
                        <StarlinkKitCard
                            title="Комплект Starlink Standart"
                            price="320 000 ₸"
                        />

                        <div className="max-w-[420px] min-h-[144px] text-[#667085] text-xl space-y-6">
                            <p>Фазированная антенная решётка автоматически находит спутники и поддерживает стабильный
                                сигнал.</p>
                            <p>Комплект включает спутниковую тарелку Starlink, Wi‑Fi роутер, кабели и крепления.</p>
                        </div>
                    </div>

                    <div className="flex w-[1312px] flex-col items-start gap-[72px]">
                        <div className="grid grid-cols-3 gap-x-8">
                            {advantages.slice(0, 3).map((a, i) => (
                                <Advantage key={i} icon={a.icon} title={a.title}/>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-x-8">
                            {advantages.slice(3, 6).map((a, i) => (
                                <Advantage key={i} icon={a.icon} title={a.title}/>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}