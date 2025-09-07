import Container from "@/ui/Container";
import React from "react";
import PricingCard from "@/ui/PricingCard";
import treeIcon from "../../public/pricing-card-icons/tree-icon.svg";
import tractorIcon from "../../public/pricing-card-icons/tractor-icon.svg";
import briefcaseIcon from "../../public/pricing-card-icons/briefcase-icon.svg";

export default function StarlinkTariffs() {
    return (
        <section className="bg-[#F3F3F5] w-full">
            <Container className="pt-[120px] pb-20">
                <div className="w-full flex flex-col gap-20">
                    <div className="w-full flex flex-col items-center gap-6">
                        <h2 className="font-inter text-[#131313] text-5xl font-semibold leading-11 tracking-[-0.48px]">
                            Тарифы
                        </h2>
                        <p className="max-w-[350px] text-center text-[#667085] text-xl leading-6">
                            Все тарифы включают безлимитный трафик и круглосуточный доступ.
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <PricingCard
                            variant="light"
                            icon={treeIcon}
                            title="Для аулов"
                            description="Безлимитный интернет до 150 Мбит/с. Подходит для семьи, онлайн-обучения и мессенджеров."
                            price={39000}
                        />

                        <PricingCard
                            variant="primary"
                            icon={tractorIcon}
                            title="Для фермеров"
                            description="Приоритетная поддержка, помощь с видеонаблюдением и датчиками. Для учёта, сенсоров и камер в полях."
                            price={45000}
                        />

                        <PricingCard
                            variant="dark"
                            icon={briefcaseIcon}
                            title="Для бизнеса"
                            description="Высокая нагрузка, QoS, несколько точек доступа. Для турбаз, гостиниц, экспедиций и строек."
                            price={"от 55 000"}
                            badge="Лучшее"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}