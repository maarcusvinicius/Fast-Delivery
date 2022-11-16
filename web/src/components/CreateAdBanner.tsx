import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'


export function CreateAdBanner() {
    return (
        <div className='pt-1 mt-8 bg-word-gradient self-stretch rounded-lg overflow-hidden'>
          <div className='bg-[#d23304] px-8 py-6 flex justify-between items-center'>

            <div>
              <strong className='text-2xl text-white font-black block drop-shadow-lg'>Publique seu pedido aqui!</strong>
            </div>

            <Dialog.Trigger className='py-3 px-4 bg-[#f5a00b] hover:bg-[#cb860e] text-white rounded flex items-center gap-3 drop-shadow-lg'>
              <MagnifyingGlassPlus size={24} />
              Publicar pedido
            </Dialog.Trigger>
          </div>
      </div>
    )
}