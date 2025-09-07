import Container from "@/ui/Container";
import SubmitForm from "@/ui/SubmitForm";
import React from "react";

export default function StarlinkSubmit() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="p-16">
                <div className="w-full flex justify-between gap-8">
                    <div className="w-full max-w-[640px]">
                        <div className="flex flex-col gap-6 w-full max-w-[350px]">
                            <h2 className="font-inter text-[#131313] text-[32px] font-semibold leading-8 tracking-[-1px]">
                                Хотите подключить Starlink или оформить подписку на тариф?
                            </h2>

                            <p className="text-[#667085] text-xl leading-6">
                                Заполните форму  и мы свяжемся с вами, уточним детали и поможем оформить заказ.
                            </p>
                        </div>

                        <div>

                        </div>
                    </div>

                    <SubmitForm/>
                </div>
            </Container>
        </section>
    )
}
