import Container from "@/ui/Container";
import React from "react";

export default function Footer () {
    return (
        <footer className="bg-[#F3F3F5]">
            <Container className="pt-8 pb-[120px]">
                <div className="flex flex-col gap-8">
                    <hr className={`w-full border-[#D5DAE1]`}/>

                    <div className="flex justify-center">
                        <p>© 2025 Starlink Kazakhstan. Все права защищены.</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}