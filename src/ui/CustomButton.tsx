import React from "react";

export interface CustomButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "submit" | "disabled";
    type?: "button" | "submit";
}

export const CustomButton: React.FC<CustomButtonProps> = ({
                                                              type = "button",
                                                              onClick,
                                                              disabled = false,
                                                              className,
                                                              children,
                                                              variant = "default",
                                                          }) => {
    const buttonClass = () => {
        if (disabled) {
            return `max-h-[72px] w-full bg-[#113CB9] cursor-not-allowed rounded-2xl text-lg text-white font-medium py-5 opacity-60`;
        }

        switch (variant) {
            case "submit":
                return `max-h-[72px] w-full bg-[#113CB9] cursor-pointer rounded-2xl text-lg text-white font-medium py-5 shadow-[-4px_-4px_8px_-2px_#051E66_inset,4px_4px_8px_-2px_rgba(255,255,255,0.25)_inset,0_8px_16px_-4px_rgba(17,60,185,0.5)]`;
            default:
                return `max-h-[72px] w-full bg-[#113CB9] cursor-pointer rounded-2xl text-lg text-white font-medium px-[63px] py-5 shadow-[0_8px_16px_-4px_rgba(17,60,185,0.5),-4px_-4px_8px_-2px_#051E66_inset,4px_4px_8px_-2px_rgba(255,255,255,0.25)_inset]`;
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${buttonClass()} ${className}`}
        >
            {children}
        </button>
    );
}
