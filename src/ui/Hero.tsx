'use client';

import Image from "next/image";
import Container from "./Container";
import {CustomButton} from "@/ui/CustomButton";
import LanguageSwitch from "@/ui/LanguageSwitch";
import {useState} from "react";

export default function Hero() {
    const [lang, setLang] = useState<"kz" | "ru">("kz");

    return (
        <>
            <div className={'flex flex-col'}>
                <div className={'min-h-10 bg-black flex flex-col justify-center'}>
                    <Container>
                        <div className={'flex items-center justify-center text-white gap-3 text-[16px] font-medium'}>
                            <a href="" className={'link'}>Спецпредложение</a>
                            <span>Бесплатная доставка и монтаж при заказе комплекта STARLINK:</span>
                            <span className={'text-lg font-bold'}>21:08:21:01</span>
                        </div>
                    </Container>
                </div>
                <div className={'min-h-[72px] w-full flex items-center'}>
                    <Container>
                        <div className="flex items-center relative">
                            <div className="flex gap-3 leading-5">
                                <Image src="/logo.svg" alt=".." width={100} height={100}/>
                                <div className="flex flex-col justify-center font-medium">
                                    <div>STARLINK официально</div>
                                    <div>в Казахстане с 13 августа 2025</div>
                                </div>
                            </div>

                            <h1 className="absolute left-1/2 -translate-x-1/2 font-medium text-xl uppercase">
                                Starlink Kazakhstan
                            </h1>

                            <div className="ml-auto">
                                <LanguageSwitch value={lang} onChange={(next) => {
                                    setLang(next);
                                    // router.push(`/${next}${pathname}`) или i18n.changeLanguage(next)
                                }} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div
                    className="relative h-[800px] bg-cover bg-center bg-no-repeat text-white"
                    style={{backgroundImage: "url('/BG.png')"}}
                >
                    <div className="absolute inset-0 bg-black/20"/>

                    <Container className="relative z-10 flex flex-col justify-between h-full py-16">
                        <div className="max-w-xl flex flex-col gap-10">
                            <h2 className="text-[56px] font-bold leading-tight font-inter">
                                Интернет в степях, горах и аулах Казахстана.
                            </h2>
                            <p className="text-xl font-normal max-w-[360px] opacity-80">
                                Starlink — надёжный спутниковый интернет для фермеров, хозяйств и удалённых
                                объектов.
                            </p>
                            <CustomButton className="max-w-[250px] rounded-lg">Оставить заявку</CustomButton>
                        </div>

        {/*                <div*/}
        {/*                    className="flex items-center justify-between rounded-lg bg-[#13131312]/35 backdrop-blur-md px-5 md:px-8 py-4">*/}
        {/*                    <ul className="flex flex-wrap items-center gap-10 text-white/90 text-sm md:text-base">*/}
        {/*                        <li className="flex items-center gap-6 pr-6 text-xl font-[400]">*/}
        {/*                            <Image src={'./hero/accepted.svg'} alt={''} width={'40'} height={"40"}/>*/}
        {/*                            <span>Подключение за 1 день</span>*/}
        {/*                        </li>*/}

        {/*                        <li className="flex items-center gap-6 pr-6 text-xl ">*/}
        {/*                            <Image src={'./hero/wifi.svg'} alt={''} width={'40'} height={"40"}/>*/}
        {/*                            <span>Работает в любой точке</span>*/}
        {/*                        </li>*/}

        {/*                        <li className="flex items-center gap-6 pr-6 text-xl ">*/}
        {/*                            <Image src={'./hero/internet.svg'} alt={''} width={'40'} height={"40"}/>*/}
        {/*                            <span>Безлимитный интернет</span>*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}

        {/*                    <div className="flex items-center gap-3 md:gap-4 shrink-0">*/}
        {/*                        <a*/}
        {/*                            href="tel:+77000000000"*/}
        {/*                            aria-label="Позвонить"*/}
        {/*                            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#113CB9]*/}
        {/*shadow-[inset_4px_4px_8px_-2px_#FFFFFF40,inset_-4px_-4px_8px_-2px_#051E66,0px_8px_16px_-4px_#113CB980]"*/}
        {/*                        >*/}
        {/*                            /!* icon *!/*/}
        {/*                        </a>*/}

        {/*                        <a*/}
        {/*                            href="https://wa.me/77000000000"*/}
        {/*                            aria-label="Написать в WhatsApp"*/}
        {/*                            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]*/}
        {/*shadow-[inset_4px_4px_8px_-2px_#FFFFFF40,inset_-4px_-4px_8px_-2px_#051E66,0px_8px_16px_-4px_#113CB980]"*/}
        {/*                        >*/}
        {/*                            /!* icon *!/*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

                        <div className="relative flex items-center justify-between rounded-lg bg-[#13131312]/35 backdrop-blur-md px-5 md:px-8 py-4">
                            <ul className="flex flex-wrap items-center gap-10 text-white/90 text-sm md:text-base">
                                <li className="flex items-center gap-6 pr-6 text-xl font-[400]">
                                    <Image src="./hero/accepted.svg" alt="" width={40} height={40} />
                                    <span>Подключение за 1 день</span>
                                </li>
                                <li className="flex items-center gap-6 pr-6 text-xl">
                                    <Image src="./hero/wifi.svg" alt="" width={40} height={40} />
                                    <span>Работает в любой точке</span>
                                </li>
                                <li className="flex items-center gap-6 pr-6 text-xl">
                                    <Image src="./hero/internet.svg" alt="" width={40} height={40} />
                                    <span>Безлимитный интернет</span>
                                </li>
                            </ul>

                            <div className="absolute flex flex-col items-center gap-3 md:gap-4 shrink-0  right-0">
                                <a
                                    href="tel:+77000000000"
                                    aria-label="Позвонить"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#113CB9]"
                                >
                                    <Image src="./hero/phone-icon.svg" alt="" width={24} height={24} />
                                </a>

                                <a
                                    href="https://wa.me/77000000000"
                                    aria-label="Написать в WhatsApp"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]"
                                >
                                    <Image src="./hero/whatsapp-icon.svg" alt="" width={24} height={24} />
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
