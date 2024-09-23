'use client'
import { useAuth } from "@/app/hooks/useAuth"
import Link from "next/link"
import { useRouter } from "next/navigation"

const LoginOut = () => {
    const { auth, setAuth } = useAuth()
    const router = useRouter()
    const handleLogout = () => {
        setAuth(null)
        router.push('/login')
    }
    return (
        <>
            {auth ? (<li className="py-2">
                <span className="mx-1" >Hello, {auth.firstName}</span>
                <span className="mx-1">|</span>
                <a className="cursor-pointer" onClick={handleLogout} >Logout</a>
            </li>)
                :
                (
                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <Link href='/login'>Login</Link></li>)}
        </>
    )
}

export default LoginOut