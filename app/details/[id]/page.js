import Deatils from '@/components/RecipieDetails/Deatils'
import ImageSection from '@/components/RecipieDetails/ImageSection'
import Step from '@/components/RecipieDetails/Step'
import { getRecipeById } from '@/db/qureies'
const RecipeDetailsPage = async ({ params: { id } }) => {
    const recipe = await getRecipeById(id)
    return (
        <>
            <section>
                <div class="grid grid-cols-12 container gap-8 justify-items-center">
                    <ImageSection imageUrl={recipe?.image} />
                    <Deatils recipe={recipe} />
                </div>
            </section>
            <Step steps={recipe?.steps} />
        </>
    )
}

export default RecipeDetailsPage