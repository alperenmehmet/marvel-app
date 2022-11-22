import { Navbar } from '../components/navbar'
import { useGlobalContext } from '../context/context'
import { Sidebar } from '../components/sidebar'

export default function Home() {
  const { name } = useGlobalContext()
  console.log(name)
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}
