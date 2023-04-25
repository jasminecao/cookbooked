import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { Tag } from '@/components/styles/Tag'
import { useIngredient } from '@/hooks/useIngredient'
import { motion } from 'framer-motion'

const RecipeIntro = () => {
  const [ingredients, servingSelected, changeServing, getIngredient] =
    useIngredient()
  const servingOptions = [
    { multiplier: 0.5, display: '1/2' },
    { multiplier: 1, display: 'Original' },
    { multiplier: 2, display: 'x2' },
    { multiplier: 3, display: 'x3' },
  ]

  return (
    <>
      <div className="flex justify-between">
        <Heading>Apple Pie</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="mt-4 mb-4">
        <Tag background={'bg-purple'}>dessert</Tag>
        <Tag background={'bg-light_pink'}>baking</Tag>
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="mr-6">
            <span className="font-medium pr-2">Duration:</span>
            <span>2 hr 10 min</span>
          </div>
          <div className="mt-4">
            <span className="font-medium pr-2">Servings:</span>
            {servingOptions.map((serving) => (
              <button
                key={serving.display}
                className={`${
                  serving.multiplier === servingSelected
                    ? ''
                    : 'hover:text-gray'
                } relative rounded-md px-2.5 py-1 transition`}
                style={{
                  WebkitTapHighlightColor: 'transparent',
                }}
                onClick={() => changeServing(serving.multiplier)}
              >
                {serving.multiplier === servingSelected && (
                  <motion.span
                    layoutId="bubble"
                    className="rounded-md absolute z-10 inset-0 bg-light_purple mix-blend-multiply"
                    transition={{
                      type: 'spring',
                      bounce: 0.1,
                      duration: 0.5,
                    }}
                  />
                )}
                {serving.display}
              </button>
            ))}
          </div>
          <div className="mt-4">
            Homemade apple pie recipe from my grandma. Also tastes good with
            blueberry or peach filling. Perfect for a brisk fall day :)
          </div>
        </div>
        <img className="rounded-md" src="/apple-pie.png" alt="Apple pie" />
      </div>
      <div className="mt-4">
        <SubHeading>All Ingredients</SubHeading>
        <div className="w-3/4 gap-2 grid grid-cols-2 grid-rows-4">
          {ingredients.map((ingredient) => (
            <Checkbox key={ingredient.name}>
              {getIngredient(ingredient.name)}
            </Checkbox>
          ))}
          {/* <Checkbox>8-10 medium apples (thinly sliced)</Checkbox>
          <Checkbox>1 teaspoon salt</Checkbox>
          <Checkbox>4 tablespoons sugar</Checkbox>
          <Checkbox>2 sticks of butter, cut into small pieces</Checkbox>
          <Checkbox>3 cups all-purpose flour</Checkbox>
          <Checkbox>1/2 cup ice water</Checkbox>
          <Checkbox>1-2 teaspoons cinnamon</Checkbox>
          <Checkbox>1 egg white</Checkbox> */}
        </div>
      </div>
      <div className="mt-10">
        <SubHeading>Notes</SubHeading>
        <span>
          Use cold butter and ice water. Need to bring pie plate and fruit
          peeler.
        </span>
      </div>
    </>
  )
}

export default RecipeIntro