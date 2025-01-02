import { FormEvent, useEffect, useState } from "react"
import ReactPasswordChecklist from "react-password-checklist";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Form({ token }: { token: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!isValid) return;

        const loadingToast = toast.loading('Updating Password...');
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}newpassword`,
                { password },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            toast.dismiss(loadingToast);
            toast.success(data.message);
            router.replace('/');
        } catch (e) {
            const errorMessage = e.response?.data?.message || e.message || 'Error updating password';
            toast.dismiss(loadingToast);
            toast.error(errorMessage);
            console.error('Error updating password:', e);
        }
        finally {
            setIsSubmitting(false);
            setPassword('');
            setConfirmPassword('');
            setIsValid(false);
        }
    }

    useEffect(() => console.log(password), [password])

    return (
        <>
            <p className="mt-2 md:text-sm text-xs font-light w-fit text-gray-500 flex gap-4">
                Enter your new password
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    className="bg-gray-50 border lg:text-sm border-[#A47252] text-xs w-full p-3 md:mt-7 mt-5"
                    placeholder="New Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                    onCopy={(e) => e.preventDefault()}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    className="bg-gray-50 border lg:text-sm border-[#A47252] text-xs w-full p-3 my-5"
                    placeholder="Re-enter Password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isSubmitting}
                    onPaste={(e) => { e.preventDefault(); toast.error('Pasting is not allowed') }}
                />
                <ReactPasswordChecklist
                    rules={["minLength", "match"]}
                    minLength={9}
                    value={password}
                    valueAgain={confirmPassword}
                    onChange={(isValid) => setIsValid(isValid)}
                    className="focus:border-none"
                />
                <input
                    type="submit"
                    value={!isValid ? "Enter valid password" : "Reset password"}
                    className="cursor-pointer disabled:cursor-auto mt-5 w-full disabled:bg-gray-500 text-white font-medium lg:text-sm text-xs lg:px-5 px-1 py-3.5 text-center bg-black focus:ring-4"
                    disabled={isSubmitting || !isValid}
                />
            </form>
        </>
    )
}
