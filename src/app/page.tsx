import StarlinkStandard from "@/components/StarlinkStandard";
import StarlinkMini from "@/components/StarlinkMini";
import StarlinkTariffs from "@/components/StarlinkTariffs";
import StarlinkSubmit from "@/components/StarlinkSubmit";

export default function Home() {
    return (
        <>
            <StarlinkStandard/>
            <StarlinkMini/>
            <StarlinkTariffs/>
            <StarlinkSubmit/>
        </>
    );
}
