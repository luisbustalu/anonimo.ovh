import Link from "next/link";
import { FaGitAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => (
    <div className="border-t-[#ededed] border-t-2 w-full pt-5 flex sm:flex-row flex-col sm:text-xl text-lg gap-2">
        <div className="sm:w-1/2 sm:text-start text-center w-full mx-2">© 2024 | Luis Bustamante</div>
        <div className="flex flex-row sm:w-1/2 w-full sm:justify-end justify-center gap-3 mx-2">
            <Link href="https://github.com/luisbustalu/anonimo.ovh" target="_blank">
                <FaGitAlt className="hover:text-yellow-200" />
            </Link>
            <Link href="mailto:luis@anonimo.ovh" target="_blank">
                <FaEnvelope className="hover:text-yellow-200" />
            </Link>
        </div>
    </div>
);
