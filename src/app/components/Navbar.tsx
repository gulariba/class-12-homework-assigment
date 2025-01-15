"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-[#043873] py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[92px]">
				<div>
					<Image src="/logo.png" alt="logo" width={191} height={34} />
				</div>
				<div className="hidden lg:flex justify-between items-center">
					<ul className="text-[18px] font-semibold leading-[23px] flex space-x-8 text-white">
						<li className="px-4">Products</li>
						<li className="px-4">Services</li>
						<li className="px-4">Resources</li>
						<li className="px-4">Contact</li>
					</ul>
					<button className="ml-8 py-2 px-6 rounded-lg bg-[#FFE492]">
						Login
					</button>
				</div>
				{/* Mobile Menu Button */}
				<div className="lg:hidden flex items-center">
					<Image
						src="/Btn.png"
						alt="menu"
						width={42}
						height={24}
						className="cursor-pointer"
						onClick={toggleMenu}
					/>
				</div>
			</div>
			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="lg:hidden flex flex-col space-y-4 px-4">
					<ul className="text-[18px] font-semibold leading-[23px] flex flex-col space-y-4 text-white">
						<li className="px-4">Products</li>
						<li className="px-4">Services</li>
						<li className="px-4">Resources</li>
						<li className="px-4">Contact</li>
					</ul>
					<button className="py-2 px-6 rounded-lg bg-[#FFE492]">
						Login
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
