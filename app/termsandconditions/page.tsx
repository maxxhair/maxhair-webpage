import React from 'react'
import { firaSans, firaSansLight } from '../util/fonts'

export default function page() {
    return (
        <div className="w-screen min-h-screen p-10 flex flex-col gap-2">
            <h1 className={`text-[#B1845E] md:headline-large headline-medium ${firaSans.className}`}>Terms and Conditions</h1>
            <h2 className={`md:title-medium title-small ${firaSans.className} mt-3`}> Sample Heading Text </h2>
            <p className={`md:label-medium label-small ${firaSansLight.className}`}> Sample body Text </p>
        </div>
    )
}
