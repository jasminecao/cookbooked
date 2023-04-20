import { Checkbox } from '@/components/Checkbox'
import {
  Heading,
  SubHeading,
  IngredientSubtext,
} from '@/components/styles/Text'
import { IngredientInfo } from '@/components/styles/IngredientInfo'
import Ingredients from '@/components/Accordion'
import { ClockIcon } from '@primer/octicons-react'

const PieFilling = ({ timer }) => {
  const [DoughTimer, startTimer, hasStarted] = timer

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Apple Filling</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-3/4">
          <div className="mb-4">
            <span className="font-medium pr-2">Duration:</span>
            <span>20 min</span>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <SubHeading>Steps</SubHeading>
            <div style={{ overflow: 'visible' }}>
              <Checkbox step>
                <div className="flex flex-row">
                  <span>1.&nbsp;</span>
                  <span>
                    Strain the apples in a colander over a medium bowl to catch
                    all the juice.
                  </span>
                </div>
              </Checkbox>
              <IngredientSubtext ingredientsList={['apples']} />
              <Checkbox step>
                <div className="flex flex-row">
                  <span>2.&nbsp;</span>
                  <span>
                    Return the juices to the skillet, and simmer over medium
                    heat until thickened and lightly caramelized, about 10
                    minutes. Toss with cinnamon. Set aside to cool completely.
                  </span>
                </div>
              </Checkbox>
              <IngredientSubtext ingredientsList={['cinnamon']} />
              <div className="m-4" />
              {!hasStarted ? (
                <button
                  className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                  style={{ width: 'fit-content' }}
                  onClick={() => startTimer(600, 'Chill Filling')}
                >
                  <ClockIcon size={16} className="mr-2" />
                  Start Timer
                </button>
              ) : (
                DoughTimer
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
            Filling can be made up to 2 days ahead and refrigerated or frozen
            for up to 6 months.
          </span>
        </div>
      </div>
    </>
  )
}

export default PieFilling
