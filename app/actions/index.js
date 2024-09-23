'use server'

import { createUser, findUserByCredential } from "@/db/qureies"
import { redirect } from "next/navigation"

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData)
    await createUser(user)
    redirect('/login')
}

export const performLogin = async (formData) => {
    try {
        let credential = {}
        credential.email = formData.get('email')
        credential.password = formData.get('password')
        const foundUser = await findUserByCredential(credential)
        return foundUser
    } catch (error) {
        throw error
    }


}