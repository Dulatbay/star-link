import Container from "@/ui/Container";
import SubmitForm from "@/ui/SubmitForm";
import React from "react";
import Image from "next/image";

export default function StarlinkSubmit() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="p-16">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-12">
                    <div className="w-full max-w-[640px] flex flex-col justify-between">
                        <div className="flex flex-col gap-6 w-full max-w-[350px]">
                            <h2 className="font-inter text-[#131313] text-[32px] font-semibold leading-8 tracking-[-1px]">
                                Хотите подключить Starlink или оформить подписку на тариф?
                            </h2>

                            <p className="text-[#667085] text-xl leading-6">
                                Заполните форму и мы свяжемся с вами, уточним детали и поможем оформить заказ.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
                            <div className="flex flex-col items-start gap-5">
                                <span className="flex w-14 h-14 p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]" aria-hidden="true">
                                  <Image src={"/submit-request/phone-icon.svg"} alt={"phone"} width={24} height={24} className="shrink-0" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-lg leading-8 text-[#667085]">Телефон/WhatsApp</span>
                                    <a
                                        href="tel:+77055530909"
                                        className="text-[#131313] text-2xl font-medium leading-8"
                                    >
                                        +7 705 553 0909
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <span className="flex w-14 h-14 p-4 justify-center items-center shrink-0 rounded-full bg-[#082475]" aria-hidden="true">
                                    <Image src={"/submit-request/mail-icon.svg"} alt={'mail'} width={24} height={24} className="shrink-0" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-lg leading-8 text-[#667085]">Email</span>
                                    <a
                                        href="mailto:info@geekpartners.kz"
                                        className="text-[#131313] text-2xl font-medium leading-8 break-all"
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
