"use client";

import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { motion, AnimatePresence } from "framer-motion";

const buttonVariants = cva("px-4 py-2 font-semibold rounded", {
	variants: {
		color: {
			basketballOrange:
				"bg-basketballOrange text-white hover:bg-white border border-basketballOrange hover:text-basketballOrange hover:border hover:border-basketballOrange",
			basketballOrangeDark:
				"bg-basketballOrange text-black hover:bg-black border border-basketballOrange hover:text-basketballOrange hover:border hover:border-basketballOrange",
			deepBlue:
				"bg-deepBlue text-white hover:bg-white border-deepBlue hover:text-deepBlue hover:border hover:border-deepBlue",
			deepBlueDark:
				"bg-deepBlue text-black hover:bg-black border-deepBlue hover:text-deepBlue hover:border hover:border-deepBlue",
			grassGreen:
				"bg-grassGreen text-white hover:bg-white border-grassGreen hover:text-grassGreen hover:border hover:border-grassGreen",
			grassGreenDark:
				"bg-grassGreen text-black hover:bg-black border-grassGreen hover:text-grassGreen hover:border hover:border-grassGreen",
			cricketWhite:
				"bg-cricketWhite text-black hover:bg-black border-cricketWhite hover:text-cricketWhite hover:border hover:border-cricketWhite",
			cricketWhiteDark:
				"bg-cricketWhite text-black hover:bg-black border-cricketWhite hover:text-cricketWhite hover:border hover:border-cricketWhite",
			vibrantRed:
				"bg-vibrantRed text-white hover:bg-white border-vibrantRed hover:text-vibrantRed hover:border hover:border-vibrantRed",
			vibrantRedDark:
				"bg-vibrantRed text-black hover:bg-black border-vibrantRed hover:text-vibrantRed hover:border hover:border-vibrantRed",
			neutralGray:
				"bg-neutralGray text-black hover:bg-black border-neutralGray hover:text-neutralGray hover:border hover:border-neutralGray",
			neutralGrayDark:
				"bg-neutralGray text-black hover:bg-black border-neutralGray hover:text-neutralGray hover:border hover:border-neutralGray",
			black: "bg-black text-white hover:bg-white hover:text-black border-black hover:border hover:border-black",
			blackDark:
				"bg-black text-black hover:bg-black hover:text-black border-black hover:border hover:border-black",
			white: "bg-white text-black hover:bg-black hover:text-white border-white hover:border hover:border-white",
			whiteDark:
				"bg-white text-black hover:bg-black hover:text-white border-white hover:border hover:border-white",
			red: "bg-red text-white hover:bg-white hover:text-red border-red hover:border hover:border-red",
			redDark:
				"bg-red text-black hover:bg-black hover:text-red border-red hover:border hover:border-red",
			green: "bg-green text-black hover:bg-black border-green hover:text-green hover:border hover:border-green",
			greenDark:
				"bg-green text-black hover:bg-black border-green hover:text-green hover:border hover:border-green",
			blue: "bg-blue text-white hover:bg-white border-blue hover:text-blue hover:border hover:border-blue",
			blueDark:
				"bg-blue text-black hover:bg-black border-blue hover:text-blue hover:border hover:border-blue",
			yellow: "bg-yellow text-black hover:bg-black hover:text-yellow hover:border hover:border-yellow",
			yellowDark:
				"bg-yellow text-black hover:bg-black hover:text-yellow hover:border hover:border-yellow",
			error: "bg-error text-white hover:bg-white hover:text-error hover:border hover:border-error",
			errorDark:
				"bg-error text-black hover:bg-black hover:text-error hover:border hover:border-error",
			success:
				"bg-success text-white hover:bg-white hover:text-success hover:border hover:border-success",
			successDark:
				"bg-success text-black hover:bg-black hover:text-success hover:border hover:border-success",
			warning:
				"bg-warning text-black hover:bg-black hover:text-warning hover:border hover:border-warning",
			warningDark:
				"bg-warning text-black hover:bg-black hover:text-warning hover:border hover:border-warning",
			info: "bg-info text-white hover:bg-white hover:text-info hover:border hover:border-info",
			infoDark:
				"bg-info text-black hover:bg-black hover:text-info hover:border hover:border-info",
			background:
				"bg-background text-black hover:bg-black hover:text-background hover:border hover:border-background",
			backgroundDark:
				"bg-background text-black hover:bg-black hover:text-background hover:border hover:border-background",
			textPrimary:
				"bg-textPrimary text-white hover:bg-white hover:text-textPrimary hover:border hover:border-textPrimary",
			textPrimaryDark:
				"bg-textPrimary text-black hover:bg-black hover:text-textPrimary hover:border hover:border-textPrimary",
			textSecondary:
				"bg-textSecondary text-white hover:bg-white hover:text-textSecondary hover:border hover:border-textSecondary",
			textSecondaryDark:
				"bg-textSecondary text-black hover:bg-black hover:text-textSecondary hover:border hover:border-textSecondary",
		},
		size: {
			small: "text-sm",
			medium: "text-base",
			large: "text-lg",
		},
	},
	defaultVariants: {
		color: "basketballOrange",
		size: "medium",
	},
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	color,
	size,
	onClick,
	className,
}) => {
	return (
		<button
			className={cn(buttonVariants({ color, size }), className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export const AnimatedButton: React.FC<ButtonProps> = ({
	children,
	color,
	size,
	onClick,
	className,
}) => {
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

export const LinkButtonWithUnderline: React.FC<ButtonProps> = ({
	children,
	color,
	size,
	onClick,
	className,
}) => {
	return (
		<AnimatePresence>
			<motion.button
				className={cn(
					buttonVariants({ color, size }),
					className,
					"relative"
				)}
				onClick={onClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{children}
				<motion.span
					className="absolute bottom-0 left-0 w-full h-0.5 bg-current origin-left"
					initial={{ scaleX: 0 }}
					whileHover={{ scaleX: 1 }}
					transition={{ duration: 0.3 }}
				/>
			</motion.button>
		</AnimatePresence>
	);
};

const linkButtonVariants = cva("font-semibold", {
	variants: {
		color: {
			basketballOrange:
				"text-basketballOrange hover:text-basketballOrangeDark",
			basketballOrangeDark:
				"text-basketballOrangeDark hover:text-basketballOrange",
			deepBlue: "text-deepBlue hover:text-deepBlueDark",
			deepBlueDark: "text-deepBlueDark hover:text-deepBlue",
			grassGreen: "text-grassGreen hover:text-grassGreenDark",
			grassGreenDark: "text-grassGreenDark hover:text-grassGreen",
			cricketWhite: "text-cricketWhite hover:text-cricketWhiteDark",
			cricketWhiteDark: "text-cricketWhiteDark hover:text-cricketWhite",
			vibrantRed: "text-vibrantRed hover:text-vibrantRedDark",
			vibrantRedDark: "text-vibrantRedDark hover:text-vibrantRed",
			neutralGray: "text-neutralGray hover:text-neutralGrayDark",
			neutralGrayDark: "text-neutralGrayDark hover:text-neutralGray",
			black: "text-black hover:text-blackDark",
			blackDark: "text-blackDark hover:text-black",
			white: "text-white hover:text-whiteDark",
			whiteDark: "text-whiteDark hover:text-white",
			red: "text-red hover:text-redDark",
			redDark: "text-redDark hover:text-red",
			green: "text-green hover:text-greenDark",
			greenDark: "text-greenDark hover:text-green",
			blue: "text-blue hover:text-blueDark",
			blueDark: "text-blueDark hover:text-blue",
			yellow: "text-yellow hover:text-yellowDark",
			yellowDark: "text-yellowDark hover:text-yellow",
			error: "text-error hover:text-errorDark",
			errorDark: "text-errorDark hover:text-error",
			success: "text-success hover:text-successDark",
			successDark: "text-successDark hover:text-success",
			warning: "text-warning hover:text-warningDark",
			warningDark: "text-warningDark hover:text-warning",
			info: "text-info hover:text-infoDark",
			infoDark: "text-infoDark hover:text-info",
			background: "text-background hover:text-backgroundDark",
			backgroundDark: "text-backgroundDark hover:text-background",
			textPrimary: "text-textPrimary hover:text-textPrimaryDark",
			textPrimaryDark: "text-textPrimaryDark hover:text-textPrimary",
			textSecondary: "text-textSecondary hover:text-textSecondaryDark",
			textSecondaryDark:
				"text-textSecondaryDark hover:text-textSecondary",
		},
		size: {
			small: "text-sm",
			medium: "text-base",
			large: "text-lg",
		},
	},
	defaultVariants: {
		color: "basketballOrange",
		size: "medium",
	},
});

export const LinkButton: React.FC<ButtonProps> = ({
	children,
	color,
	size,
	onClick,
	className,
}) => {
	return (
		<AnimatePresence>
			<motion.button
				className={cn(
					linkButtonVariants({ color, size }),
					className,
					"relative"
				)}
				onClick={onClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				{children}
				<motion.span
					className="absolute bottom-0 left-0 w-full h-0.5 bg-current origin-left"
					initial={{ scaleX: 0 }}
					whileHover={{ scaleX: 1 }}
					transition={{ duration: 0.3 }}
				/>
			</motion.button>
		</AnimatePresence>
	);
};
