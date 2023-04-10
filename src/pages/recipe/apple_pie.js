import NavBar from '@/components/NavBar'
import RecipeOutline from '@/components/RecipeOutline'
import RecipeIntro from '@/components/RecipeIntro'
import PieDough from '@/components/PieDough'
import Crust from '@/components/Crust'
import Batter from '@/components/Batter'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import { useTimer } from '@/hooks/useTimer'

const SECTION = {
  INTRO: 'Matcha Cheesecake',
  CRUST: 'Crust',
  BATTER: 'Batter',
  MATCHA: 'Matcha Flavoring',
}

const TIMES = {
  CRUST: '10 minutes',
  BATTER: '10 minutes',
  MATCHA: '40 minutes',
}

export default function ApplePiePage() {
  // which section of the recipe to show
  const [section, setSection] = useLocalStorage('section', SECTION.INTRO)
  const [hasMounted, setHasMounted] = useState(false)
  const timer = useTimer()
  const timer2 = useTimer()


  useEffect(() => {
    // prevent hydration error
    setHasMounted(true)
  }, [])

  const displaySection = (section) => {
    switch (section) {
      case SECTION.INTRO:
        return <RecipeIntro />
      case SECTION.CRUST:
        return <Crust />
      case SECTION.BATTER:
        return <Batter timer={timer} timer2={timer2}/>
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
            timer2={timer2}
          />
          <div className="w-4/5 mt-10 px-16" style={{ marginLeft: '20%' }}>
            {displaySection(section)}
          </div>
        </div>
      )}
    </>
  )
}
