import React from 'react'
import { CircleNumber } from '@/components/styles/Text'

const RecipeOutline = ({ section, setSection, allSections, timer }) => {
  const [DoughTimer, startTimer, hasStarted] = timer

  return (
    <div
      className="w-1/5 pt-7 border-r-2 border-light_gray"
      style={{ position: 'relative' }}
    >
      {Object.entries(allSections).map(
        ([sectionKey, sectionName], sectionIdx) => {
          return (
            <div
              key={sectionName}
              className={`text-2xl cursor-pointer py-3 ${
                section === sectionName && 'bg-light_purple'
              }`}
              onClick={() => setSection(sectionName)}
            >
              <div
                className={`flex items-center ml-9 ${
                  section === sectionName && 'font-medium'
                }`}
              >
                {sectionName !== allSections.INTRO && (
                  <CircleNumber number={sectionIdx} />
                )}
                <span>{sectionName}</span>
              </div>
            </div>
          )
        }
      )}
      <div className="w-full" style={{ position: 'absolute', bottom: '0' }}>
        {hasStarted && DoughTimer}
        <div className="border-t-2 border-light_gray w-full">
          <div className="py-4 px-8">
            <span
              className="border-b-2 border-light_gray text-gray"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                localStorage.clear()
                location.reload()
              }}
            >
              Restart Progress
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeOutline
