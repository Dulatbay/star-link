import Hero from './ui/Hero';
import StarlinkStandard from "@/app/components/StarlinkStandard";
import StarlinkMini from "@/app/components/StarlinkMini";
import Tariffs from "@/app/components/Tariffs";

export default function Home() {
    return (
        <>
            <Hero/>
            <StarlinkStandard/>
            <StarlinkMini/>
            <Tariffs/>
        </>
    );
}
