'use server'

import { createUser, findUserByCredential, updateFavourites } from "@/db/qureies"
import { revalidatePath } from "next/cache"
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

export const performFavorites = async (userId,recipeId)=>{
    try {
        await updateFavourites(userId, recipeId)
        revalidatePath(`/details/${recipeId}`)
    } catch (error) {
        throw error
    }
}