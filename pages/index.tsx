import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/1017100?
ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_KEY}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}
