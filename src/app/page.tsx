import StarlinkStandard from "@/components/StarlinkStandard";
import StarlinkMini from "@/components/StarlinkMini";
import StarlinkTariffs from "@/components/StarlinkTariffs";
import StarlinkSubmit from "@/components/StarlinkSubmit";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";

export default function Home() {
    return (
        <>
            <StarlinkStandard/>
            <StarlinkMini/>
            <StarlinkTariffs/>
            <SpecialOfferBanner/>
            <StarlinkSubmit/>
        </>
    );
}
