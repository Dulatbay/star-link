'use client';

import Image from "next/image";
import Container from "./Container";

export default function Hero() {
    return (
        <>
            <div className={'h-screen flex flex-col'}>
                <div className={'min-h-10 bg-black flex flex-col justify-center'}>
                    <Container>
                        <div className={'flex items-center justify-center text-white gap-3 text-[16px] font-medium'}>
                            <a href="" className={'link'}>Спецпредложение</a>
                            <span>Бесплатная доставка и монтаж при заказе комплекта STARLINK:</span>
                            <span className={'text-lg font-bold'}>21:08:21:01</span>
                        </div>
                    </Container>
                </div>
                <div className={'min-h-[72px]'}>
                    <Container>
                        <div className={'bg-gray-600'}>
                            <Image src={'/logo.svg'} alt={'..'} width={"100"} height={"100"} />
                        </div>
                    </Container>
                </div>
                <div className={'flex-1 bg-gray-600'}></div>
            </div>
        </>
    );
}
