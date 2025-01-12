"use client";

import React from "react";
import { motion } from "framer-motion";
import BasketBall from "@/assets/basketball.svg";
import { PrismicNextLink } from "@prismicio/next";

const NotFound: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center">
			<motion.div
				animate={{
					y: [0, -10, 0],
				}}
				transition={{
					duration: 3.5,
					repeat: Infinity,
					repeatType: "loop",
					ease: "easeInOut",
				}}
			>
				<BasketBall width="200" height="200" />
			</motion.div>
			<div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center"
				>
					<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
					<p className="mt-4 text-lg">
						Sorry, the page you are looking for does not exist.
					</p>
					<PrismicNextLink
						href="/"
						className="mt-6 text-blue-500 underline"
					>
						Go back to Home
					</PrismicNextLink>
				</motion.div>
			</div>
		</div>
	);
};

export default NotFound;
