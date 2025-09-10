import React from "react";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
    maxWClass?: string;
    pxClass?: string;
    fullWidth?: boolean;
}

export default function Container({
                                      className = "",
                                      children,
                                      maxWClass = "max-w-[1440px]",
                                      pxClass = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
                                      fullWidth = false,
                                  }: ContainerProps) {
    if (fullWidth) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div className={`w-full mx-auto ${maxWClass} ${pxClass} ${className}`}>
            {children}
        </div>
    );
}
