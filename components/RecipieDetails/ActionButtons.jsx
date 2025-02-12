'use client'

import { performFavorites } from "@/app/actions"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/navigation"

import { useState, useTransition } from "react"

const ActionButtons = ({ recipeId }) => {
    const { auth, setAuth } = useAuth()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const isFavourite = auth?.favourites?.includes(recipeId)
    const handleFavourites = async () => {
        if (auth) {
            await performFavorites(auth.id, recipeId)
            const updateAuth = {
                ...auth,
                favourites: isFavourite ? auth.favourites.filter(item=>item !== recipeId):[...auth.favourites, recipeId]
            }
            setAuth(updateAuth)
            
        } else {
            router.push('/login')
        }
    }
    return (
        <div className="flex gap-4 justify-end">
            <div onClick={() => startTransition(() => {
                handleFavourites()
            })} className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={`${isFavourite ? '#eb4a36' : 'none'}`}
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span>Favourite</span>
            </div>

            <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                </svg>
                <span>Share</span>
            </div>
        </div>
    )
}

export default ActionButtons