import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading, IngredientSubtext } from '@/components/styles/Text'
import { IngredientInfo } from '@/components/styles/IngredientInfo'
import Ingredients from '@/components/Accordion'
import { ClockIcon } from '@primer/octicons-react'

const PieDough = ({ timer }) => {
  const [DoughTimer, startTimer, hasStarted] = timer

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Pie Dough</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-3/4">
          <div className="mb-4">
            <span className="font-medium pr-2">Duration:</span>
            <span>40 min</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <SubHeading>Steps</SubHeading>
            <div style={{ overflow: 'visible' }}>
              <Checkbox step>
                1. Sift flour, sugar, and salt togther into a large bowl.
              </Checkbox>
              <IngredientSubtext
                ingredientsList={[
                  '3 cups all-purpose flour',
                  '4 tbsp sugar',
                  '1 tsp salt',
                ]}
              />{' '}
              <Checkbox step>
                2. Add cold butter to flour until clumps form.
              </Checkbox>
              <IngredientSubtext ingredientsList={['2 sticks butter']} />
              <Checkbox step>
                3. Sprinkle ice water in dough if necessary.
              </Checkbox>
              <IngredientSubtext ingredientsList={['1/2 cup ice water']} />
              <Checkbox step>4. Chill dough for 30 minutes.</Checkbox>
              {!hasStarted ? (
                <button
                  className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                  style={{ width: 'fit-content' }}
                  onClick={() => startTimer(1800)}
                >
                  <ClockIcon size={16} className="mr-2" />
                  Start Timer
                </button>
              ) : (
                DoughTimer
              )}
              <Checkbox step>
                5. Roll out the dough until it covers the pie plate.
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
            Use cold butter and ice water. Need to bring pie plate and fruit
            peeler.
          </span>
        </div>
      </div>
    </>
  )
}

export default PieDough