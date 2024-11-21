import Link from "next/link";
import { FaHome, FaUser, FaBrain } from "react-icons/fa";

export const NavigationBar = () => (
    <div className="fixed flex w-full justify-center z-10 mt-10">
        <div className="flex flex-row justify-center gap-2 p-2 rounded-lg bg-gray-900 text-xl w-fit">
            <Link href="#home"><FaHome className="hover:text-yellow-200" /></Link>
            <Link href="#about-me"><FaUser className="hover:text-yellow-200" /></Link>
            <Link href="#skills"><FaBrain className="hover:text-yellow-200" /></Link>
        </div>
    </div>
);
