'use client';

import Image from "next/image";
import Container from "./Container";
import {CustomButton} from "@/ui/CustomButton";
import LanguageSwitch from "@/ui/LanguageSwitch";
import {useState} from "react";

export default function Hero() {
    const [lang, setLang] = useState<"kz" | "ru">("kz");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={'flex flex-col'}>
                <div className={'min-h-8 sm:min-h-9 md:min-h-10 bg-black flex flex-col justify-center overflow-hidden'}>
                    <Container>
                        {/* До tablet экранов - автоматический скролл */}
                        <div className="block lg:hidden overflow-hidden">
                            <div className="flex whitespace-nowrap animate-scroll">
                                <span className="text-white text-xs sm:text-sm font-medium flex-shrink-0">
                                  <span className="link">Спецпредложение</span>
                                  <span className="mx-2">•</span>
                                  <span>Бесплатная доставка и монтаж при заказе комплекта STARLINK</span>
                                  <span className="mx-2">•</span>
                                  <span className="font-bold">21:08:21:01</span>
                                  <span className="mx-8"></span>
                                </span>

                                <span className="text-white text-xs sm:text-sm font-medium flex-shrink-0">
                                  <span className="link">Спецпредложение</span>
                                  <span className="mx-2">•</span>
                                  <span>Бесплатная доставка и монтаж при заказе комплекта STARLINK</span>
                                  <span className="mx-2">•</span>
                                  <span className="font-bold">21:08:21:01</span>
                                  <span className="mx-8"></span>
                                </span>
                            </div>
                        </div>

                        <div
                            className={'hidden lg:flex items-center justify-center text-white gap-3 text-[16px] font-medium'}>
                            <a href="" className={'link'}>Спецпредложение</a>
                            <span
                                className="text-center">Бесплатная доставка и монтаж при заказе комплекта STARLINK:</span>
                            <span className={'text-lg font-bold'}>21:08:21:01</span>
                        </div>
                    </Container>
                </div>

                <div className={'min-h-[60px] sm:min-h-[66px] md:min-h-[72px] w-full flex items-center relative'}>
                    <Container>
                        <div className="hidden lg:flex items-center relative w-full">
                            <div className="flex gap-2 sm:gap-2.5 md:gap-3 leading-4 md:leading-5">
                                <Image src="/logo.svg" alt=".." width={50} height={50}
                                       className="sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"/>
                                <div
                                    className="flex flex-col justify-center font-medium text-xs lg:text-sm">
                                    <div>STARLINK официально</div>
                                    <div>в Казахстане с 13 августа 2025</div>
                                </div>
                            </div>

                            <h1 className="hidden lg:block absolute left-1/2 -translate-x-1/2 font-medium text-lg lg:text-xl uppercase">
                                Starlink Kazakhstan
                            </h1>

                            <div className="ml-auto">
                                <LanguageSwitch value={lang} onChange={(next) => {
                                    setLang(next);
                                }}/>
                            </div>
                        </div>

                        <div className="flex lg:hidden items-center justify-between w-full">
                            <div className="flex gap-2 leading-4">
                                <Image src="/logo.svg" alt=".." width={40} height={40}
                                       className="w-10 h-10"/>
                                <div className="flex flex-col justify-center font-medium text-xs uppercase">
                                    <div>STARLINK</div>
                                    <div>Kazakhstan</div>
                                </div>
                            </div>

                            <button
                                onClick={toggleMenu}
                                className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
                                aria-label="Toggle menu"
                            >
                                <span
                                    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                                        isMenuOpen ? 'opacity-0' : ''
                                    }`}
                                />
                                <span
                                    className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                                />
                            </button>
                        </div>
                    </Container>

                    {isMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
                            <Container>
                                <div className="flex flex-col space-y-4 py-4">
                                    <div className="text-center">
                                        <div className="font-medium text-base">STARLINK официально</div>
                                        <div className="text-gray-600 text-sm">в Казахстане с 13 августа 2025</div>
                                    </div>

                                    <div className="flex justify-center">
                                        <LanguageSwitch value={lang} onChange={(next) => {
                                            setLang(next);
                                        }}/>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    )}
                </div>

                <div
                    className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-cover bg-center bg-no-repeat text-white"
                    style={{backgroundImage: "url('/BG.png')"}}
                >
                    <div className="absolute inset-0 bg-black/20"/>

                    <Container
                        className="relative z-10 flex flex-col justify-between h-full py-6 sm:py-8 md:py-12 lg:py-16">
                        <div
                            className="max-w-full lg:max-w-xl flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight font-inter">
                                Интернет в степях, горах и аулах Казахстана.
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl font-normal max-w-full lg:max-w-[360px] opacity-80">
                                Starlink — надёжный спутниковый интернет для фермеров, хозяйств и удалённых
                                объектов.
                            </p>
                            <CustomButton className="w-full sm:w-auto sm:max-w-[200px] md:max-w-[250px] rounded-lg">Оставить
                                заявку</CustomButton>
                        </div>

                        <div
                            className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-lg bg-[#13131312]/35 backdrop-blur-md px-3 sm:px-4 md:px-5 lg:px-8 py-3 sm:py-4 gap-4 lg:gap-0">
                            <ul className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-white/90 text-xs sm:text-sm md:text-base w-full lg:w-auto">
                                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl font-[400]">
                                    <Image src="./hero/accepted.svg" alt="" width={24} height={24}
                                           className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-10 lg:h-10"/>
                                    <span>Подключение за 1 день</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl">
                                    <Image src="./hero/wifi.svg" alt="" width={24} height={24}
                                           className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-10 lg:h-10"/>
                                    <span>Работает в любой точке</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-sm sm:text-base md:text-lg lg:text-xl">
                                    <Image src="./hero/internet.svg" alt="" width={24} height={24}
                                           className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-10 lg:h-10"/>
                                    <span>Безлимитный интернет</span>
                                </li>
                            </ul>

                            <div
                                className="flex absolute flex-col items-center gap-2 sm:gap-3 md:gap-4 shrink-0 right-2 md:top-1 lg:top-5 xl:-top-5 xl:right-0">
                                <a
                                    href="tel:+77000000000"
                                    aria-label="Позвонить"
                                    className="inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#113CB9]"
                                >
                                    <Image src="./hero/phone-icon.svg" alt="" width={16} height={16}
                                           className="sm:w-5 sm:h-5 md:w-6 md:h-6"/>
                                </a>

                                <a
                                    href="https://wa.me/77000000000"
                                    aria-label="Написать в WhatsApp"
                                    className="inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#22C55E]"
                                >
                                    <Image src="./hero/whatsapp-icon.svg" alt="" width={16} height={16}
                                           className="sm:w-5 sm:h-5 md:w-6 md:h-6"/>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
