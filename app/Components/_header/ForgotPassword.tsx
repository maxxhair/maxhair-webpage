import React, { Dispatch, SetStateAction } from 'react'
import { firaSans } from '../../util/fonts'
import Form from './_forgotPassword/Form'

export default function ForgotPassword({ setAuthDrawerState }: { setAuthDrawerState: Dispatch<SetStateAction<string>> }) {
    return (
        <>
            <div className="w-full">
                <button className='mt-10'
                    onClick={() => setAuthDrawerState("signin")}
                >
                    <svg className=" w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>
                </button>
                <h2
                    className={`${firaSans.className} mt-3 md:text-4xl text-3xl font-extrabold text-[#A47252]`}
                >
                    Forgot password
                </h2>
                <p className="mt-3 text-sm font-light  text-gray-500">
                    Don’t worry! It happens. Please enter the email associated with your account.
                </p>
                <Form setAuthDrawerState={setAuthDrawerState} />
                <p className="mt-5 text-sm font-light text-gray-500">
                    Don’t have an account yet? {" "}
                    <button
                        onClick={() => setAuthDrawerState("signup")}
                        className="text-[#242424] hover:underline font-semibold"
                    >
                        SIGN UP
                    </button>
                </p>
            </div>
        </>
    )
}
