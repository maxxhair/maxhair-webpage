import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

export default function Form({ setAuthDrawerState }: { setAuthDrawerState: Dispatch<SetStateAction<string>> }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const loadingToast = toast.loading('Sending reset link...');
        setIsSubmitting(true);

        try {
            const form = e.currentTarget;
            const email = form.email.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                throw new Error('Please enter a valid email address');
            }

            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}forgotpassword`,
                { email }
            );
            toast.dismiss(loadingToast);
            toast.success(data.message);
            if (form) form.reset();
            setAuthDrawerState("signin");
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || 'Error submitting form';
            toast.dismiss(loadingToast);
            toast.error(errorMessage);
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-[#A47252] lg:text-sm text-xs w-full p-3 mt-5"
                placeholder="Email"
                required
                disabled={isSubmitting}
            />
            <input
                type="submit"
                value="Get Reset Link"
                className="cursor-pointer uppercase mt-5 w-full text-white font-medium lg:text-sm text-xs lg:px-5 px-1 py-3.5 text-center bg-black focus:ring-4"
                disabled={isSubmitting}
            />
        </form>
    )
}