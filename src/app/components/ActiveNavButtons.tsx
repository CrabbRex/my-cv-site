"use client"

import Link from "next/link";
import { useActiveTab } from "./ActiveTabContext";

export default function ActiveNavButtons() {
    const { setActiveTab } = useActiveTab();

    return (
        <div className="mt-6 flex flex-wrap gap-4 justify-start">
            <Link
                href="/projects"
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                onClick={() => setActiveTab('/projects')}
            >
                Projects
            </Link>
            <Link
                href="/cv"
                className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition"
                onClick={() => setActiveTab('/cv')}
            >
                CV
            </Link>
        </div>
    )
}