import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { Heading } from '@/components/styles/Text'
import { Tag } from '@/components/styles/Tag'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-2/3 mx-auto mt-8">
        <div className="flex justify-between">
          <Heading>My CookBook</Heading>
          <button className="bg-green hover:bg-white hover:text-green border-2 border-green text-white text-sm py-2 px-4 rounded-full float-right">
            Create New Recipe
          </button>
        </div>
        <div className="flex my-2">
          <div className="flex mr-4 border-b-2 border-green">
            <img className="w-3.5" src="/filter-icon.svg" alt="Filter icon" />
            <span className="text pl-1 text-green">Filter</span>
          </div>
          <div className="flex border-b-2 border-green">
            <img className="w-3.5" src="/sort-icon.svg" alt="Sort icon" />
            <span className="text pl-1 text-green">Sort</span>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-screen">
          <div
            className="rounded overflow-hidden shadow-lg mt-6"
            style={{ width: '423px', height: '323px' }}
          >
            <Link href="/recipe/apple_pie">
              <img
                className="w-full"
                src="/apple-pie.png"
                alt="Apple pie example"
              />
              <div className="px-6 py-4">
                <span className="font-bold text-xl mb-2">Apple Pie</span>
                <span className="text-gray-700 text-base float-right">
                  1 hr 30 min
                </span>
              </div>
              <div className="px-6 pb-2">
                <Tag background={'bg-light_purple'}>dessert</Tag>
                <Tag background={'bg-light_pink'}>baking</Tag>
              </div>
            </Link>
          </div>
          <div
            className="rounded overflow-hidden shadow-lg mt-6"
            style={{ width: '423px', height: '323px' }}
          >
            <img
              className="w-full"
              src="/blueberry-muffins.png"
              alt="Blueberry Muffins"
            />
            <div className="px-6 py-4">
              <span className="font-bold text-xl mb-2">Blueberry Muffins</span>
              <span className="text-gray-700 text-base float-right">
                20 min
              </span>
            </div>
            <div className="px-6 pb-2">
              <Tag background={'bg-light_purple'}>dessert</Tag>
              <Tag background={'bg-light_pink'}>baking</Tag>
            </div>
          </div>
          <div
            className="rounded overflow-hidden shadow-lg"
            style={{ width: '423px', height: '323px' }}
          >
            <img
              className="w-full"
              src="/cookies.png"
              alt="Chocolate Chip Cookies"
            />
            <div className="px-6 py-4">
              <span className="font-bold text-xl mb-2">
                Chocolate Chip Cookies
              </span>
              <span className="text-gray-700 text-base float-right">
                50 min
              </span>
            </div>
            <div className="px-6 pb-2">
              <Tag background={'bg-light_purple'}>dessert</Tag>
              <Tag background={'bg-light_pink'}>baking</Tag>
            </div>
          </div>
          <div
            className="rounded overflow-hidden shadow-lg"
            style={{ width: '423px', height: '323px' }}
          >
            <img className="w-full" src="/chili.png" alt="Chili" />
            <div className="px-6 py-4">
              <span className="font-bold text-xl mb-2">Chili</span>
              <span className="text-gray-700 text-base float-right">
                1 hr 30 min
              </span>
            </div>
            <div className="px-6 pb-2">
              <Tag background={'bg-light_purple'}>dinner</Tag>
              <Tag background={'bg-light_pink'}>stove-top</Tag>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
