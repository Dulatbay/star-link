import SpeedIndicator from "@/ui/SpeedIndicator";
import Container from "@/ui/Container";

export default function StarlinkSpeed() {
    return (
        <section className="bg-[#082475] relative w-full overflow-hidden">
            <Container className="py-30">
                <SpeedIndicator
                    targetSpeed={280}
                    max={400}
                    uploadSpeed="10–30"
                    latency="20–40"
                />
            </Container>
        </section>
    );
}
