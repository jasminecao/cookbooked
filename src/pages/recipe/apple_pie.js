import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import RecipeIntro from '@/components/RecipeIntro'
import PieDough from '@/components/PieDough'
import { Checkbox } from '@/components/Checkbox'
import { Heading, SubHeading } from '@/components/styles/Text'
import { Tag } from '@/components/styles/Tag'
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

  const displaySection = (section) => {
    switch (section) {
      case SECTION.INTRO:
        return <RecipeIntro />
      case SECTION.PIE_DOUGH:
        return <PieDough />
      default:
        return <div>Coming Soon</div>
    }
  }

  return (
    <>
      <NavBar />
      <div className="flex h-[calc(100vh-64px)]">
        <RecipeOutline
          section={section}
          setSection={setSection}
          allSections={SECTION}
        />
        {displaySection(section)}
      </div>
    </>
  )
}
