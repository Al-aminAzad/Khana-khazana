import { recipeModel } from "@/models/recipe"
import { userModel } from "@/models/user";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util"

export const getAllRecipes = async () => {
    const recipes = await recipeModel.find().lean();
    return replaceMongoIdInArray(recipes)
}

export const getRecipeById = async (id) => {
    const recipe = await recipeModel.findById(id).lean()
    return replaceMongoIdInObject(recipe)
}

export const createUser = async (user) => {
    return await userModel.create(user)
}

export const findUserByCredential = async (credential) => {
    const user = await userModel.findOne(credential).lean()
    if (user) {
        return replaceMongoIdInObject(user)
    }
    return null
}