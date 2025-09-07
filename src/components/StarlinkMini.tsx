import StarlinkKitCard from "@/ui/StarlinkKitCard";
import Container from "@/ui/Container";
import lightningIcon from "../../public/advantage-icons/lightning-icon.svg";
import sunriseIcon from "../../public/advantage-icons/sunrise-icon.svg";
import bullseyeArrowIcon from "../../public/advantage-icons/bullseye-arrow-icon.svg";
import Advantage from "@/ui/Advantage";

const advantages = [
    {icon: lightningIcon, title: "Энергопотребление: 20–40 Вт, до 20 Вт в простое."},
    {icon: sunriseIcon, title: "Питается от пауэрбанка и автоинвертора"},
    {icon: bullseyeArrowIcon, title: "Легко переносится."},
];

export default function StarlinkMini() {
    return (
        <section className="bg-[#FFF] w-full">
            <Container className="py-[120px]">
                <div className="w-full flex justify-between">
                    <StarlinkKitCard
                        title="Комплект Starlink Mini"
                        description="Компактная версия для экспедиций, выездных бригад и мобильных объектов."
                        price="320 000 ₸"
                    />

                    <div className="flex flex-col gap-20">
                        {advantages.map((item, idx) => (
                            <Advantage key={idx} icon={item.icon} title={item.title} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}