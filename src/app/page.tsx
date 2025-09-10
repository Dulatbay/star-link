import StarlinkStandard from "@/components/StarlinkStandard";
import StarlinkMini from "@/components/StarlinkMini";
import StarlinkTariffs from "@/components/StarlinkTariffs";
import StarlinkSubmit from "@/components/StarlinkSubmit";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import StarlinkSpeed from "@/components/StarlinkSpeed";

export default function Home() {
    return (
        <>
            <StarlinkStandard/>
            <StarlinkSpeed/>
            <StarlinkMini/>
            <StarlinkTariffs/>
            <SpecialOfferBanner/>
            <StarlinkSubmit/>
        </>
    );
}
