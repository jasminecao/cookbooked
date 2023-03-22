import NavBar from '@/components/NavBar'
import { Heading } from '@/components/styles/Text'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="h-screen w-2/3 mx-auto mt-12">
        <Heading>My CookBook</Heading>
        TODO: Recipe cards
      </div>
    </>
  )
}
