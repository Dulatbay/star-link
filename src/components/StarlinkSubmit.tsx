import Container from "@/ui/Container";
import SubmitForm from "@/ui/SubmitForm";
import React from "react";
import Image from "next/image";

export default function StarlinkSubmit() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="p-8 md:p-12 lg:p-16">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
                    <div className="w-full max-w-full lg:max-w-[640px] flex flex-col justify-between">
                        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-full lg:max-w-[350px]">
                            <h2 className="font-inter text-[#131313] text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-7 md:leading-8 tracking-[-1px]">
                                Хотите подключить Starlink или оформить подписку на тариф?
                            </h2>

                            <p className="text-[#667085] text-lg md:text-xl leading-6">
                                Заполните форму и мы свяжемся с вами, уточним детали и поможем оформить заказ.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pb-6 md:pb-8 mt-8 lg:mt-0">
                            <div className="flex flex-col items-start gap-4 md:gap-5">
                                <span className="flex w-12 h-12 md:w-14 md:h-14 p-3 md:p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]" aria-hidden="true">
                                  <Image src={"/submit-request/phone-icon.svg"} alt={"phone"} width={20} height={20} className="md:w-6 md:h-6 shrink-0" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base md:text-lg leading-6 md:leading-8 text-[#667085]">Телефон/WhatsApp</span>
                                    <a
                                        href="tel:+77055530909"
                                        className="text-[#131313] text-xl md:text-2xl font-medium leading-6 md:leading-8"
                                    >
                                        +7 705 553 0909
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4 md:gap-4">
                                <span className="flex w-12 h-12 md:w-14 md:h-14 p-3 md:p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]" aria-hidden="true">
                                    <Image src={"/submit-request/mail-icon.svg"} alt={'mail'} width={20} height={20} className="md:w-6 md:h-6 shrink-0" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base md:text-lg leading-6 md:leading-8 text-[#667085]">Email</span>
                                    <a
                                        href="mailto:info@geekpartners.kz"
                                        className="text-[#131313] text-xl md:text-2xl font-medium leading-6 md:leading-8 break-all"
                                    >
                                        info@geekpartners.kz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SubmitForm/>
                </div>
            </Container>
        </section>
    )
}
