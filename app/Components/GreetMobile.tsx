import React from 'react'
import { firaSans, firaSansLight } from '../util/fonts'
import Link from 'next/link'

export default function GreetMobile() {
    return (
        <div
            className={` w-full relative flex md:hidden h-[320px] justify-center items-end text-center bg-[#FAFAFA] text-white`}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover absolute top-0"
            >
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="p-[20px] flex flex-col gap-[20px] items-center mb-5 z-[1]">
                <span
                    className={`${firaSans.className} flex flex-col w-full lg:display-medium md:headline-large headline-medium font-[700]`}
                >
                    <span >
                        Quality is our Priority!
                    </span>
                </span>

                <p
                    className={`${firaSansLight.className} md:label-medium label-small md:w-[570px] w-full`}
                >
                    One stop shop for all your premium hair extension needs. Allow us to
                    make your dream hair come true!
                </p>
                <Link
                    href="shop"
                    className="uppercase  bg-[#F9F6F3] text-[#242424] px-[20px] py-[10px] font-[600] lg:body-large md:body-medium body-small"
                >
                    shop now
                </Link>
            </div>
        </div>
    )
}
