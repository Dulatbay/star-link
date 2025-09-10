"use client";

import SpeedIndicator from "@/ui/SpeedIndicator";
import Container from "@/ui/Container";

export default function StarlinkSpeed() {
    return (
        <section className="bg-[#082475] w-full overflow-hidden">
            <Container className="py-10 md:py-20 lg:py-30 relative">
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
