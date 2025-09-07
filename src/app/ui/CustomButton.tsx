interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function CustomButton({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="px-[63px] py-5 min-h-[72px] max-w-[305px] rounded-lg bg-[#113CB9]"
            style={{
                boxShadow:
                    "0 8px 16px -4px rgba(17, 60, 185, 0.50), -4px -4px 8px -2px #051E66 inset, 4px 4px 8px -2px rgba(255, 255, 255, 0.25) inset",
            }}
        >
            <span className="text-lg text-white font-medium">{children}</span>
        </button>
    );
}
