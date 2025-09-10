import Container from "@/ui/Container";
import React from "react";
import PricingCard from "@/ui/PricingCard";
import treeIcon from "../../public/pricing-card-icons/tree-icon.svg";
import tractorIcon from "../../public/pricing-card-icons/tractor-icon.svg";
import briefcaseIcon from "../../public/pricing-card-icons/briefcase-icon.svg";

export default function StarlinkTariffs() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="pt-16 md:pt-20 lg:pt-[120px] pb-10 md:pb-16 lg:pb-20">
                <div className="w-full flex flex-col gap-12 md:gap-16 lg:gap-20">
                    <div className="w-full flex flex-col items-center gap-4 md:gap-6">
                        <h2 className="font-inter text-[#131313] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-10 lg:leading-11 tracking-[-0.48px] text-center">
                            Тарифы
                        </h2>
                        <p className="max-w-[350px] text-center text-[#667085] text-lg md:text-xl leading-6">
                            Все тарифы включают безлимитный трафик и круглосуточный доступ.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-8 lg:gap-6 xl:gap-8">
                        <PricingCard
                            variant="light"
                            icon={treeIcon}
                            title="Для аулов"
                            description="Безлимитный интернет до 150 Мбит/с. Подходит для семьи, онлайн-обучения и мессенджеров."
                            price={39000}
                            className="w-full lg:w-auto lg:flex-1 lg:max-w-[400px] xl:max-w-[415px]"
                        />

                        <PricingCard
                            variant="primary"
                            icon={tractorIcon}
                            title="Для фермеров"
                            description="Приоритетная поддержка, помощь с видеонаблюдением и датчиками. Для учёта, сенсоров и камер в полях."
                            price={45000}
                            className="w-full lg:w-auto lg:flex-1 lg:max-w-[400px] xl:max-w-[415px]"
                        />

                        <PricingCard
                            variant="dark"
                            icon={briefcaseIcon}
                            title="Для бизнеса"
                            description="Высокая нагрузка, QoS, несколько точек доступа. Для турбаз, гостиниц, экспедиций и строек."
                            price={"от 55 000"}
                            badge="Лучшее"
                            className="w-full lg:w-auto lg:flex-1 lg:max-w-[400px] xl:max-w-[415px]"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}