import { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)

  const handleSubmit = (event) => {
    event.preventDefault() // <-- must be here
    updateRecipe({ ...recipe, title, description })
    onClose() // optional: close the edit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default EditRecipeForm