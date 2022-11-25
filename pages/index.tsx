import { Navbar } from '../components/navbar'
import { useGlobalContext } from '../context/context'
import { Sidebar } from '../components/sidebar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}
