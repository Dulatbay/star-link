'use client';

import Image from "next/image";
import Container from "./Container";
import {CustomButton} from "@/ui/CustomButton";

export default function Hero() {
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
                            {/* Левый блок */}
                            <div className="flex gap-3 leading-5">
                                <Image src="/logo.svg" alt=".." width={100} height={100}/>
                                <div className="flex flex-col justify-center font-medium">
                                    <div>STARLINK официально</div>
                                    <div>в Казахстане с 13 августа 2025</div>
                                </div>
                            </div>

                            {/* Центр */}
                            <h1 className="absolute left-1/2 -translate-x-1/2 font-medium text-xl uppercase">
                                Starlink Kazakhstan
                            </h1>

                            {/* Правый блок */}
                            <div className="ml-auto">RU/KAZ</div>
                        </div>
                    </Container>
                </div>
                <div
                    className="relative h-[800px] bg-cover bg-center bg-no-repeat text-white"
                    style={{backgroundImage: "url('/BG.png')"}}
                >
                    {/* затемнение */}
                    <div className="absolute inset-0 bg-black/20"/>

                    <div className="relative z-10 flex flex-col justify-between h-full px-16 py-16">
                        {/* Верхняя часть */}
                        <div className="max-w-xl flex flex-col gap-10">
                            <h2 className="text-[56px] font-bold leading-tight font-inter">
                                Интернет в степях, горах и аулах Казахстана.
                            </h2>
                            <p className="text-xl font-normal max-w-[360px] opacity-80">
                                Starlink — надёжный спутниковый интернет для фермеров, хозяйств и удалённых
                                объектов.
                            </p>
                            <CustomButton className="max-w-[250px]">Оставить заявку</CustomButton>
                        </div>

                        {/* Нижняя часть */}
                        <div
                            className="flex items-center justify-between rounded-2xl bg-[#13131312]/35 backdrop-blur-md px-5 md:px-8 py-4">
                            {/* ЛЕВАЯ ЧАСТЬ — услуги */}
                            <ul className="flex flex-wrap items-center gap-10 text-white/90 text-sm md:text-base">
                                <li className="flex items-center gap-6 pr-6 text-xl font-[400]">
                                    <Image src={'./hero/accepted.svg'} alt={''} width={'40'} height={"40"}/>
                                    <span>Подключение за 1 день</span>
                                </li>

                                <li className="flex items-center gap-6 pr-6 text-xl ">
                                    <Image src={'./hero/internet.svg'} alt={''} width={'40'} height={"40"}/>
                                    <span>Работает в любой точке</span>
                                </li>

                                <li className="flex items-center gap-6 pr-6 text-xl ">
                                    <Image src={'./hero/wifi.svg'} alt={''} width={'40'} height={"40"}/>
                                    <span>Безлимитный интернет</span>
                                </li>
                            </ul>

                            {/* ПРАВАЯ ЧАСТЬ — контакты */}
                            <div className="flex items-center gap-3 md:gap-4 shrink-0">
                                <a
                                    href="tel:+77000000000"
                                    aria-label="Позвонить"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#113CB9]
        shadow-[inset_4px_4px_8px_-2px_#FFFFFF40,inset_-4px_-4px_8px_-2px_#051E66,0px_8px_16px_-4px_#113CB980]"
                                >
                                    {/* icon */}
                                </a>

                                <a
                                    href="https://wa.me/77000000000"
                                    aria-label="Написать в WhatsApp"
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]
        shadow-[inset_4px_4px_8px_-2px_#FFFFFF40,inset_-4px_-4px_8px_-2px_#051E66,0px_8px_16px_-4px_#113CB980]"
                                >
                                    {/* icon */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
