import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import RecipeIntro from '@/components/RecipeIntro'
import PieDough from '@/components/apple_pie/PieDough'
import PieFilling from '@/components/apple_pie/PieFilling'
import PieAssembly from '@/components/apple_pie/PieAssembly'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import { useTimer } from '@/hooks/useTimer'

const SECTION = {
  INTRO: 'Apple Pie',
  PIE_DOUGH: 'Pie Dough',
  APPLE_FILLING: 'Apple Filling',
  ASSEMBLY: 'Assembly',
}

const TIMES = {
  PIE_DOUGH: '40 minutes',
  APPLE_FILLING: '20 minutes',
  ASSEMBLY: '1 hour 10 minutes',
}

export default function ApplePiePage() {
  // which section of the recipe to show
  const [section, setSection] = useLocalStorage('section', SECTION.INTRO)
  const [hasMounted, setHasMounted] = useState(false)
  const timerDough = useTimer()
  const timerFilling = useTimer()
  const timerBaking = useTimer()

  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

  const displaySection = (section) => {
    switch (section) {
      case SECTION.INTRO:
        return <RecipeIntro />
      case SECTION.PIE_DOUGH:
        return <PieDough timer={timerDough} />
      case SECTION.APPLE_FILLING:
        return <PieFilling timer={timerFilling} />
      case SECTION.ASSEMBLY:
        return <PieAssembly timer={timerBaking} />
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
            timer={[timerDough, timerFilling, timerBaking]}
          />
          <div className="w-4/5 mt-10 px-16" style={{ marginLeft: '20%' }}>
            {displaySection(section)}
          </div>
        </div>
      )}
    </>
  )
}
