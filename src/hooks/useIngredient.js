import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import ingredientsData from '@/data/apple-pie-ingredients.json'

export function useIngredient() {
  const [ingredients, setIngredients] = useLocalStorage(
    'ingredients',
    ingredientsData
  )
  const [serving, setServing] = useLocalStorage('servings', 1)

  const changeServing = (multiplier) => {
    const newIngredients = ingredientsData.map((ingredient) => {
      return {
        ...ingredient,
        amount: ingredient.amount * multiplier,
      }
    })
    setServing(multiplier)
    setIngredients(newIngredients)
  }

  const getIngredient = (ingredientName) => {
    let ingredient = ingredients.find(
      (ingredient) => ingredient.name === ingredientName
    )

    if (ingredient.amount > 1) {
      return `${ingredient.amount} ${ingredient.unit}s ${ingredient.name}`
    }
    return `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
  }

  return [ingredients, serving, changeServing, getIngredient]
}
