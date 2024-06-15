import { recipeModel } from "@/models/recipe"
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util"

export const getAllRecipes = async () => {
    const recipes = await recipeModel.find().lean();
    return replaceMongoIdInArray(recipes)
}

export const getRecipeById = async (id) => {
    debugger
    const recipe = await recipeModel.findById(id).lean()
    return replaceMongoIdInObject(recipe)
}