import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import RecipeIntro from '@/components/RecipeIntro'
import PieDough from '@/components/PieDough'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import { useTimer } from '@/hooks/useTimer'

const SECTION = {
  INTRO: 'Apple Pie',
  PIE_DOUGH: 'Pie Dough',
  APPLE_FILLING: 'Apple Filling',
  BAKING: 'Baking',
}

const TIMES = {
  PIE_DOUGH: '40 minutes',
  APPLE_FILLING: '10 minutes',
  BAKING: '40 minutes',
}

export default function ApplePiePage() {
  // which section of the recipe to show
  const [section, setSection] = useLocalStorage('section', SECTION.INTRO)
  const [hasMounted, setHasMounted] = useState(false)
  const timer = useTimer()

  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

  const displaySection = (section) => {
    switch (section) {
      case SECTION.INTRO:
        return <RecipeIntro />
      case SECTION.PIE_DOUGH:
        return <PieDough timer={timer} />
      default:
        return <div>Coming Soon</div>
    }
  }

  return (
    <>
      <NavBar />
      {hasMounted && (
        <div className="flex min-h-[calc(100vh-64px)]">
          <RecipeOutline
            section={section}
            setSection={setSection}
            allSections={SECTION}
            sectionTimes={TIMES}
            timer={timer}
          />
          {displaySection(section)}
        </div>
      )}
    </>
  )
}
