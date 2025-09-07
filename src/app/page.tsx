import Hero from './ui/Hero';
import StarlinkStandard from "@/app/components/StarlinkStandard";
import StarlinkMini from "@/app/components/StarlinkMini";

export default function Home() {
    return (
        <>
            <Hero/>
            <StarlinkStandard/>
            <StarlinkMini/>
        </>
    );
}
