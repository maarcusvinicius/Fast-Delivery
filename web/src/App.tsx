import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import { LunchBanner } from './components/LunchBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { CreateAdBanner } from './components/CreateAdBanner';

import Pizza_Steve from './assets/Pizza_Steve.png';
import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])


  return (
    <div className='max-w-[1080px] flex flex-col mx-auto mt-20'>

      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        <img src={Pizza_Steve} className='mt-20 w-70 h-70 animate-bounce row-span-3' />

        <h1 className='text-6xl font-black ml-5'>
          <span className='bg-word-gradient text-transparent bg-clip-text drop-shadow-lg'>Seu prato está aqui</span>
        </h1>
        <div className='row-span-2 col-span-2'>
          <div className='grid grid-cols-6 gap-6 mt-20'>

            <LunchBanner item="🌭" />

            <LunchBanner item="🍗" />

            <LunchBanner item="🍕" />

            <LunchBanner item="🍔" />

            <LunchBanner item="🍟" />

            <LunchBanner item="🌯" />
          </div>
        </div>
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App;