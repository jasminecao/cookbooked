import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import RecipeIntro from '@/components/RecipeIntro'
import PieDough from '@/components/PieDough'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect, useState } from 'react'

const SECTION = {
  INTRO: 'Apple Pie',
  PIE_DOUGH: 'Pie Dough',
  APPLE_FILLING: 'Apple Filling',
  BAKING: 'Baking',
}

export default function ApplePiePage() {
  // which section of the recipe to show
  const [section, setSection] = useLocalStorage('section', SECTION.INTRO)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

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
      {hasMounted && (
        <div className="flex h-[calc(100vh-64px)]">
          <RecipeOutline
            section={section}
            setSection={setSection}
            allSections={SECTION}
          />
          {displaySection(section)}
        </div>
      )}
    </>
  )
}
