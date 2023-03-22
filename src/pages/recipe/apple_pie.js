import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import { Heading } from '@/components/styles/Text'
import { useState } from 'react'

const SECTION = {
  INTRO: 'Apple Pie',
  PIE_DOUGH: 'Pie Dough',
  APPLE_FILLING: 'Apple Filling',
  BAKING: 'Baking',
}

export default function ApplePiePage() {
  // which section of the recipe to show
  const [section, setSection] = useState(SECTION.INTRO)

  return (
    <>
      <NavBar />
      <div className="flex">
        <RecipeOutline
          section={section}
          setSection={setSection}
          allSections={SECTION}
        />
        <div className="h-screen w-4/5 mt-12 px-16">
          <Heading>{section}</Heading>
          TODO: Recipe page
        </div>
      </div>
    </>
  )
}
