import React from 'react'

const RecipeOutline = ({ section, setSection, allSections }) => {
  return (
    <div className="w-1/5 mt-7">
      {Object.entries(allSections).map(
        ([sectionKey, sectionName], sectionIdx) => {
          return (
            <div
              key={sectionName}
              className="text-2xl cursor-pointer ml-9"
              onClick={() => setSection(sectionName)}
            >
              {sectionName}
            </div>
          )
        }
      )}
    </div>
  )
}

export default RecipeOutline
