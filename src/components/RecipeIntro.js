import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { Tag } from '@/components/styles/Tag'

const RecipeIntro = () => {
    return (
      <>
        <div className="w-4/5 mt-10 px-16">
        <div className="flex justify-between">
        <Heading>Apple Pie</Heading>
        <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
            Edit
        </button>
        </div>
        <div className="mt-4 mb-4">
        <Tag background={'bg-light_purple'}>dessert</Tag>
        <Tag background={'bg-light_pink'}>baking</Tag>
        </div>
        <div className="flex">
            <div className="w-3/4">
                <div className="flex mb-4">
                    <div className="mr-6">
                        <span className="font-medium pr-2">Duration:</span>
                        <span>1 hr 30 min</span>
                    </div>
                    <div>
                        <span className="font-medium pr-2">Servings:</span>
                        <span>1</span>
                    </div>
                </div>
                <span>
                    Homemade apple pie recipe from my grandma. Also tastes good with blueberry or peach filling. Perfect for a brisk fall day :)
                </span>
            </div>
            <img className="rounded-md" src="/apple-pie.png" alt="Apple pie" />
        </div>
        <div className="mt-4">
            <SubHeading>All Ingredients</SubHeading>
            <div className="w-3/4 gap-2 grid grid-cols-2 grid-rows-4">
              <Checkbox>8-10 medium apples (thinly sliced)</Checkbox>
              <Checkbox>1 teaspoon salt</Checkbox>
              <Checkbox>4 tablespoons sugar</Checkbox>
              <Checkbox>2 sticks of butter, cut into small pieces</Checkbox>
              <Checkbox>3 cups all-purpose flour</Checkbox>
              <Checkbox>1/2 cup ice water</Checkbox>
              <Checkbox>1-2 teaspoons cinnamon</Checkbox>
              <Checkbox>1 egg white</Checkbox>
            </div>
        </div>
        <div className="mt-10">
            <SubHeading>Notes</SubHeading>
            <span>
              Use cold butter and ice water. Need to bring pie plate and fruit peeler.
            </span>
        </div>
        </div>
</>
  )
}

export default RecipeIntro