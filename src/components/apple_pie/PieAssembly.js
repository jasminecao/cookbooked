import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { ClockIcon } from '@primer/octicons-react'

const PieAssembly = ({ timer }) => {
  const [DoughTimer, startTimer, hasStarted] = timer

  return (
    <>
      <div className="flex justify-between mb-4">
        <Heading>Assembly</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
          Edit
        </button>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-3/4">
          <div className="mb-4">
            <span className="font-medium pr-2">Duration:</span>
            <span>1 hr 10 min</span>
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
                    Cut the dough in half. Roll each half of dough into a disc
                    about 11 to 12 inches wide. Layer the dough between pieces
                    of wax paper on a baking sheet, and refrigerate for 10
                    minutes.
                  </span>
                </div>
              </Checkbox>
              <Checkbox step>
                <div className="flex flex-row">
                  <span>2.&nbsp;</span>
                  <span>Preheat the oven to 375 degrees F.</span>
                </div>
              </Checkbox>
              <Checkbox step>
                <div className="flex flex-row">
                  <span>3.&nbsp;</span>
                  <span>
                    Line the bottom of a 9-inch pie pan with one of the discs of
                    dough so it lays about 1/2 inch beyond the edge of the pan.
                    Put the apple filling in the center of the pan.
                  </span>
                </div>
              </Checkbox>
              <Checkbox step>
                <div className="flex flex-row">
                  <span>4.&nbsp;</span>
                  <span>
                    Place the second disc of dough over the top. Fold the top
                    layer of dough under the edge of the bottom layer and press
                    the edges together to form a seal. Pierce the top of the
                    dough in several places. Refrigerate for 15 minutes.
                  </span>
                </div>
              </Checkbox>
              <Checkbox step>
                <div className="flex flex-row">
                  <span>5.&nbsp;</span>
                  <span>
                    Bake the pie on a baking sheet until the crust is golden,
                    about 50 minutes. Cool on a rack before serving.
                  </span>
                </div>
              </Checkbox>
              <div className="m-4" />
              {!hasStarted ? (
                <button
                  className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-8 my-4 flex items-center"
                  style={{ width: 'fit-content' }}
                  onClick={() => startTimer(3000, 'Baking')}
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
              src="/pie-assembly.jpg"
              alt="Pie dough"
              width="350"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-2 mb-10">
          <SubHeading>Notes</SubHeading>
          <span>
            The pie keeps well at room temperature (covered) for 24 hours, or
            refrigerated for up to 4 days.
          </span>
        </div>
      </div>
    </>
  )
}

export default PieAssembly
