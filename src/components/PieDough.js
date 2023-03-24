import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { IngredientInfo } from '@/components/styles/IngredientInfo'
import Ingredients from '@/components/Accordion'
import { Tag } from '@/components/styles/Tag'

const PieDough = () => {
    return (
      <>
        <div className="w-4/5 mt-10 px-16">
        <div className="flex justify-between mb-4">
            <Heading>Pie Dough</Heading>
            <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
                Edit
            </button>
        </div>
        <div className="flex flex-col">
            <div className="w-3/4">
                <div className="mb-4">
                    <span className="font-medium pr-2">Duration:</span>
                    <span>1 hr 30 min</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <SubHeading>Steps</SubHeading>
                    <div style={{overflow: 'visible'}}>
                        <Checkbox>
                            1. Combine <IngredientInfo amount={"3 cups"}>flour</IngredientInfo> with <IngredientInfo amount={"4 tablespoons"}>sugar</IngredientInfo> and <IngredientInfo amount={"1 teaspoon"}>salt</IngredientInfo>.
                        </Checkbox>
                        <Checkbox>2. Add cold <IngredientInfo amount={"2 sticks"}>butter</IngredientInfo> to <IngredientInfo amount={"3 cups"}>flour</IngredientInfo> until clumps form.</Checkbox>
                        <Checkbox>3. Sprinkle <IngredientInfo amount={"1/2 cup"}>ice water</IngredientInfo> in dough if necessary.</Checkbox>
                        <Checkbox noMargin={true}>4. Chill dough for 30 minutes.</Checkbox>
                        
                        <button className="bg-white hover:bg-green hover:text-white border-2 border-green text-green text-sm py-2 px-6 rounded-full ml-10 mb-2 mt-2 flex items-center" style={{width: "fit-content"}}>
                            <img className="w-3.5" src="/filter-icon.svg" alt="Filter icon" /> Start Timer
                        </button>
                       <Checkbox>5. Roll out the dough until it covers the pie plate.</Checkbox>
                    </div>
                </div>
                <img className="rounded-md" src="/pie-dough.png" alt="Pie dough" />
            </div>
        </div>
        <div className="flex">
            <Ingredients />
            <div className="mt-2">
                <SubHeading>Notes</SubHeading>
                <span>
                Use cold butter and ice water. Need to bring pie plate and fruit peeler.
                </span>
            </div>
        </div>
        </div>
</>
  )
}

export default PieDough