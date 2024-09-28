import { recipeModel } from "@/models/recipe"
import { userModel } from "@/models/user";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util"
import mongoose from "mongoose";

export const getAllRecipes = async () => {
    const recipes = await recipeModel.find().lean();
    return replaceMongoIdInArray(recipes)
}

export const getRecipeById = async (id) => {
    const recipe = await recipeModel.findById(id).lean()
    return replaceMongoIdInObject(recipe)
}

export const createUser = async (user) => {
    const newUser = {
        ...user,
        favourites: [] // Explicitly set favourites to an empty array
    };
    return await userModel.create(newUser)
}

export const findUserByCredential = async (credential) => {
    const user = await userModel.findOne(credential).lean()
    if (user) {
        return replaceMongoIdInObject(user)
    }
    return null
}

export const updateFavourites = async (userId, recipeId) => {
    const user = await userModel.findById(userId)
    if (user) {
        const recipe = user?.favourites?.find(id => id === recipeId)
        if (recipe) {
            user.favourites.pull(new mongoose.Types.ObjectId(recipeId))
        } else {
            user.favourites.push(new mongoose.Types.ObjectId(recipeId))
        }
        user.save()
    }
}