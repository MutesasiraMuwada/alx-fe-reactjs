import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId))

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${recipe.id}`}>
          <button>Edit</button>
        </Link>
        <Link to="/">
          <button style={{ marginLeft: 8 }}>Back to list</button>
        </Link>
      </div>
    </div>
  )
}

export default RecipeDetails
