'use client'

import { performLogin } from "@/app/actions"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
    const [error, setError] = useState('')
    const { setAuth } = useAuth()
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formdata = new FormData(event.currentTarget)
            const user = await performLogin(formdata)
            if (user) {
                setAuth(user)
                router.push('/')
            } else {
                throw new Error('Bad credential')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <div className="mt-2 text-red-500" >
                {error}
            </div>
            <form className="login-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">Login</button>
            </form>
        </>
    )
}

export default LoginForm