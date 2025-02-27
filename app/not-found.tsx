
import Link from "next/link";
import React from "react";
export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-300">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-black bg-blue-300 p-4">Page Not Found</h1>
                <p className="mt-3 font-serif">Sorry! This page is not found</p>
                <br />
                <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to Main Page</Link>
            </div>
        </div>

    );
}
