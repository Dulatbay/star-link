import Container from "@/ui/Container";
import React from "react";

export default function Footer () {
    return (
        <footer className="bg-[#F3F3F5]">
            <Container className="pt-6 md:pt-8 pb-8 md:pb-16 lg:pb-[120px]">
                <div className="flex flex-col gap-6 md:gap-8">
                    <hr className={`w-full border-[#D5DAE1]`}/>

                    <div className="flex justify-center">
                        <p className="text-sm md:text-base text-center">© 2025 Starlink Kazakhstan. Все права защищены.</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}