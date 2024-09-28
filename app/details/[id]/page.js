import Deatils from '@/components/RecipieDetails/Deatils'
import ImageSection from '@/components/RecipieDetails/ImageSection'
import Step from '@/components/RecipieDetails/Step'
import { getRecipeById } from '@/db/qureies'
export const generateMetadata = async ({ params: { id } })=>{
    const recipe = await getRecipeById(id)
    return{
        title: `Khana-khazana ${recipe.name}`,
        description: recipe.description,
        openGraph:{
            images:[recipe.image]
        }
    }
}
const RecipeDetailsPage = async ({ params: { id } }) => {
    const recipe = await getRecipeById(id)
    return (
        <>
            <section>
                <div className="grid grid-cols-12 container gap-8 justify-items-center">
                    <ImageSection imageUrl={recipe?.image} />
                    <Deatils recipe={recipe} />
                </div>
            </section>
            <Step steps={recipe?.steps} />
        </>
    )
}

export default RecipeDetailsPage