import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading, IngredientSubtext } from '@/components/styles/Text'
import { IngredientInfo } from '@/components/styles/IngredientInfo'
import Ingredients from '@/components/Accordion'
import { ClockIcon } from '@primer/octicons-react'

const Batter = ({ timer, timer2 }) => {
  const [GelatinTimer, startTimer, hasStarted] = timer
  const [BatterTimer, startTimer2, hasStarted2] = timer2

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Batter</Heading>
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
                1. Soak gelatin in water for 15 min.
              </Checkbox>
              <IngredientSubtext
                ingredientsList={[
                  '5g gelatin',
                  '25 ml water',
                ]}
              />{' '}
              {!hasStarted ? (
                <button
                  className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                  style={{ width: 'fit-content' }}
                  onClick={() => startTimer(900, 'Gelatin')}
                >
                  <ClockIcon size={16} className="mr-2" />
                  Start Timer
                </button>
              ) : (
                GelatinTimer
              )}
              <Checkbox step>
                2. Put cream cheese in a bowl and start mashing it. Once soft, add yogurt and sugar.
              </Checkbox>
              <IngredientSubtext
                ingredientsList={[
                  '200g cream cheese',
                  '100g yogurt',
                  '65g white sugar',
                ]}
              />{' '}              
              <Checkbox step>
                3. Fill a bowl with hot water and place the bowl of gelatin into the bowl of hot water. Mix the gelatin until dissolved. Mix the melted gelatin into the cream cheese mixture.
              </Checkbox>
              <Checkbox step>4. Pour heavy cream into a bowl and whisk until state shown in picture. Fold whipped cream into cream cheese mixture carefully.</Checkbox>
              <IngredientSubtext
                ingredientsList={[
                  '200g heavy cream',
                ]}
              />{' '}
              <Checkbox step>
                5. Divide the batter in half, pouring one half into the cake pan over the crust. Place the cake pan in the fridge to set for 20 minutes.
              </Checkbox>
              {!hasStarted2 ? (
                <button
                  className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                  style={{ width: 'fit-content' }}
                  onClick={() => startTimer2(900, 'Set Batter')}
                >
                  <ClockIcon size={16} className="mr-2" />
                  Start Timer
                </button>
              ) : (
                BatterTimer
              )}
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

export default Batter