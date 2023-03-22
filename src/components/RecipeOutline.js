import React from 'react'
import { CircleNumber } from '@/components/styles/Text'

const RecipeOutline = ({ section, setSection, allSections }) => {
  return (
    <div className="w-1/5 pt-7 border-r-2">
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
    </div>
  )
}

export default RecipeOutline
