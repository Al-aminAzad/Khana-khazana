import Image from "next/image"
import Link from "next/link"
import LoginOut from "./Auth/LoginOut"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image height={100} width={100} src="/assets/images/logo.png" alt="" className="object-cover h-8.5" />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500">

                    <li className="py-2 active">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="py-2">
                        <Link href="./index.html">Recipe</Link>
                    </li>

                    <li className="py-2">
                        <Link href="./index.html">About us</Link>
                    </li>
                    <LoginOut />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar