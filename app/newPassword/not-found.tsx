import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="md:text-4xl text-2xl font-bold mb-4">401 Unauthorized access</h2>
            <p className="md:text-base text-sm mb-6">Sorry, You cannot directly access this page</p>
            <Link href="/" className="text-blue-500 hover:underline md:text-base text-sm">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;