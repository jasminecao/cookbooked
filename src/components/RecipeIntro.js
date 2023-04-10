import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { Tag } from '@/components/styles/Tag'

const RecipeIntro = () => {
    return (
      <>
        <div className="flex justify-between">
          <Heading>Matcha Cheesecake</Heading>
          <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-6 rounded-full float-right">
            Edit
          </button>
        </div>
        <div className="mt-4 mb-4">
          <Tag background={'bg-light_purple'}>dessert</Tag>
        </div>
        <div className="flex">
          <div className="w-3/4">
            <div className="flex mb-4">
              <div className="mr-6">
                <span className="font-medium pr-2">Duration:</span>
                <span>6 hrs</span>
              </div>
              <div>
                <span className="font-medium pr-2">Servings:</span>
                <span>6</span>
              </div>
            </div>
            <span>
              No-bake matcha cheesecake. Test recipe
            </span>
          </div>
          <img className="rounded-md w-5/12" src="/matcha-cheesecake.png" alt="Matcha cheesecake final product" />
        </div>
        <div className="mt-4">
          <SubHeading>All Ingredients</SubHeading>
          <div className="w-3/4 gap-2 grid grid-cols-2 grid-rows-4">
            <Checkbox>100g digestive biscuits</Checkbox>
            <Checkbox>40g melted butter</Checkbox>
            <Checkbox>5g gelatin</Checkbox>
            <Checkbox>25 ml water</Checkbox>
            <Checkbox>200g cream cheese</Checkbox>
            <Checkbox>100g plain yogurt</Checkbox>
            <Checkbox>65g white sugar</Checkbox>
            <Checkbox>200g heavy cream</Checkbox>
            <Checkbox>20 ml whole milk</Checkbox>
            <Checkbox>7g matcha powder</Checkbox>
          </div>
        </div>
        <div className="mt-10">
          <SubHeading>Notes</SubHeading>
          <span className="pb-10">
            Proportions used for a slightly bigger than 6 inch cake pan. Can use 6g of gelatin for a more stable texture.
            Equipment needed: spatula, immersion blender, cake pan.
          </span>
        </div>
      </>
    )
}

export default RecipeIntro