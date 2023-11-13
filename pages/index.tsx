import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import WelcomeMessage from '@/components/WelcomeMessage'

const inter = Poppins({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 ${inter.className}`}
    >
      <Navbar />
      <section className='flex mt-5 gap-8'>
        <Sidebar />
        <WelcomeMessage />
      </section>
    </main>
  )
}
