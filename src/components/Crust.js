import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading, IngredientSubtext } from '@/components/styles/Text'
import { IngredientInfo } from '@/components/styles/IngredientInfo'
import Ingredients from '@/components/Accordion'
import { ClockIcon } from '@primer/octicons-react'

const Crust = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Crust</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-3/4">
          <div className="mb-4">
            <span className="font-medium pr-2">Duration:</span>
            <span>10 min</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <SubHeading>Steps</SubHeading>
            <div style={{ overflow: 'visible' }}>
              <Checkbox step>
                1. Finely crush biscuits.
              </Checkbox>
              <IngredientSubtext
                ingredientsList={[
                  '100g digestive biscuits',
                ]}
              />{' '}
              <Checkbox step>
                2. Add melted butter to the crushed biscuits. Mix well. 
              </Checkbox>
              <IngredientSubtext ingredientsList={['40g melted butter']} />
              <Checkbox step>
                3. Gently press mixture into your cake pan and then place into refrigerator. 
              </Checkbox>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-md float-right"
              src="/pie-dough.png"
              alt="Pie dough"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-2">
          <SubHeading>Notes</SubHeading>
          <span>
            Press biscuits down firmly to prevent leaking.
          </span>
        </div>
      </div>
    </>
  )
}

export default Crust