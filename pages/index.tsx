import { Navbar } from '../components/navbar'
import { useGlobalContext } from '../context/context'

export default function Home() {
  const { name } = useGlobalContext()
  console.log(name)
  return (
    <div>
      <Navbar />
    </div>
  )
}
