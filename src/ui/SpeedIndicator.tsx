"use client";
import React, {useEffect, useMemo, useState} from "react";

type Props = {
    targetSpeed?: number;        // конечное значение, Mbps
    max?: number;                // максимум шкалы
    uploadSpeed?: string;        // "10-30"
    latency?: string;            // "20-40"
    ticks?: number;              // количество рисок
    radius?: number;             // радиус дуги
};

export default function SpeedIndicator({
                                           targetSpeed = 280,
                                           max = 300,
                                           uploadSpeed = "10-30",
                                           latency = "20-40",
                                           ticks = 56,
                                           radius = 220,
                                       }: Props) {
    const [current, setCurrent] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    // Анимация основного числа
    useEffect(() => {
        const duration = 2000;
        const steps = 80;
        const dt = duration / steps;
        let i = 0;
        const id = setInterval(() => {
            i++;
            const t = i / steps;
            const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setCurrent(Math.floor(targetSpeed * ease));
            if (i >= steps) {
                clearInterval(id);
                setCurrent(targetSpeed);
                setTimeout(() => setShowDetails(true), 200);
            }
        }, dt);
        return () => clearInterval(id);
    }, [targetSpeed]);

    // Полудуга с рисками (SVG)
    const active = Math.round((Math.min(Math.max(current, 0), max) / max) * ticks);

    const tickLines = useMemo(() => {
        const lines: React.ReactElement[] = [];
        const cx = 0, cy = 0;
        // Чуть «шире» чем 180°, как в макете
        const startDeg = -180; // или 180 — эквивалентно
        const endDeg = 0;
        const total = endDeg - startDeg;
        for (let i = 0; i < ticks; i++) {
            const t = i / (ticks - 1);
            const a = ((startDeg + t * total) * Math.PI) / 180;

            const inner = radius - 18; // длина риски внутрь
            const outer = radius + 18; // длина риски наружу
            const x1 = cx + inner * Math.cos(a);
            const y1 = cy + inner * Math.sin(a);
            const x2 = cx + outer * Math.cos(a);
            const y2 = cy + outer * Math.sin(a);

            // Изменяем логику: активными считаются риски с конца (справа налево)
            const isActive = i >= (ticks - active);

            lines.push(
                <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth={6}
                    strokeLinecap="round"
                    className={isActive ? "stroke-white" : "stroke-[rgba(255,255,255,0.36)]"}
                />
            );
        }
        return lines;
    }, [ticks, radius, active]);

    return (
        <div className="w-full h-[320px] overflow-hidden bg-[#0A2475]">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-6">
                        <span className="text-white font-medium text-right text-[180px] leading-[160px]">
                          {current}
                        </span>

                    <div className="flex flex-col gap-4 text-white">
                        <div className="text-[40px] leading-[44px] font-medium">Mbps</div>

                        <div className={`flex flex-col leading-6 text-xl gap-1 transition-all duration-500
                               ${showDetails ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                            <span>Отдача: {uploadSpeed} мбит/с</span>
                            <span>Средняя задержка: {latency} мс</span>
                            <span className="text-[#667085]">данные лета 2025 года.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[-450px] left-1/2 transform -translate-x-1/2">
                <svg
                    width="1050px"
                    height="700px"
                    viewBox={`${-radius - 70} ${-radius - 10} ${radius * 2 + 140} ${radius + 90}`}
                >
                    <g filter="url(#tickShadow)">{tickLines}</g>
                    <defs>
                        <filter id="tickShadow" x="-200%" y="-200%" width="400%" height="400%">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
