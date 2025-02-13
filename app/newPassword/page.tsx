'use client';
import { notFound, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { firaSans } from '../util/fonts';
import Form from './components/Form';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { companyLogo2 } from '../util/images';

export default function page() {
    const params = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    const checkToken = async (token: string) => {
        setLoading(true);
        setError(null);
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}checkvalidity`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error response:', error.response?.data || error.message);
                setError(error.response?.data?.message || 'An error occurred');
            } else {
                console.error('Unexpected error:', error);
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = params.get("token")
        if (!token)
            notFound();
        checkToken(token);
    }, [params])

    if (loading)
        return <div className='h-screen w-screen flex justify-center items-center bg-black'>
            <svg className="animate-spin h-5 w-5 text-white mx-auto my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>

    if (error)
        return <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="md:text-4xl text-2xl font-bold mb-4">401 Error</h2>
            <p className="md:text-base text-sm mb-6">{error}</p>
            <Link href="/" className="text-blue-500 hover:underline md:text-base text-sm">
                Go back to Home
            </Link>
        </div>

    return (
        <div className="flex flex-1 h-screen justify-center items-center ">
            <div className="w-fit max-w-full p-5">
                <Image src={companyLogo2} alt="Maxx hair" />
                <h2
                    className={`${firaSans.className} mt-5 md:text-4xl text-3xl font-extrabold text-yellow-700`}
                >
                    Reset Password
                </h2>
                <Form token={params.get("token")} />
            </div>
        </div>
    )
}
