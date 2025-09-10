import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    addRecipe({ id: Date.now(), title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
        type="text"
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
