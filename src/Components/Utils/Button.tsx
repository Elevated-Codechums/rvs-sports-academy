"use client"

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { motion, AnimatePresence } from "framer-motion";

const buttonVariants = cva("px-4 py-2 font-semibold rounded", {
    variants: {
        color: {
            primary: "bg-black text-white hover:bg-white hover:text-black",
            secondary: "bg-white text-black hover:bg-black hover:text-white",
            outline_primary: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
            outline_secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
        },
        size: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
        },
    },
    defaultVariants: {
        color: "primary",
        size: "medium",
    },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, color, size, onClick, className }) => {
    return (
        <button
            className={cn(buttonVariants({ color, size }), className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export const AnimatedButton: React.FC<ButtonProps> = ({ children, color, size, onClick, className }) => {
    return (
        <AnimatePresence>
            <motion.button
                className={cn(buttonVariants({ color, size }), className)}
                onClick={onClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.button>
        </AnimatePresence>
    );
};