import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: 8 }}>
            <Link to={`/edit/${recipe.id}`}><button>Edit</button></Link>
            <span style={{ marginLeft: 8 }}><DeleteRecipeButton id={recipe.id} /></span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
