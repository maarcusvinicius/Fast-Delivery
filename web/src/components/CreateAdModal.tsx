import { useEffect, useState, FormEvent } from 'react';
import { Package, Check } from 'phosphor-react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from './Form/Input';

interface Pedido {
    id: string;
    title: string;
}

export function CreateAdModal() {

    const [pedidos, setPedidos] = useState<Pedido[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)

    useEffect(() => {
        axios('http://localhost:3333/pedidos')
            .then(response => {
                setPedidos(response.data)
            })
    }, [])

    async function handleCreateAd(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if (!data.name) {
            return;
        }

        try {
            await axios.post(`http://localhost:3333/pedidos/${data.pedido}/ads`, {
                name: data.name,
                local: data.local,
                usern: data.usern,
                useVoiceChannel: useVoiceChannel
            })

            alert('Pedido criado com sucesso!')
        } catch (err) {
            console.log(err)
            alert('Erro ao criar o pedido!')
        }
    }


    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#6f1a03] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Peça já o seu pedido!</Dialog.Title>

                <form autoComplete='off' onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="pedido" className="font-semibold">O que queres?</label>
                        <select
                            id="pedido"
                            name='pedido'
                            className="bg-orange-500 py-3 px-4 rounded text-sm placeholder:text-orange-400 appearance-none"
                            defaultValue=""
                        >
                            <option disabled value="">Selecione o pedido que deseja</option>

                            {pedidos.map(pedido => {
                                return <option key={pedido.id} value={pedido.id}>{pedido.title}</option>
                            })}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome(ou nickname)</label>
                        <Input name='name' id="name" placeholder="Como se chama dentro do pedido?" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="local">Seu endereço?</label>
                        <Input name='local' id="local" placeholder="Sua localização atual é..." />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="usern">Qual seu Username?</label>
                        <Input name='usern' id="usern" type="text" placeholder="Usuario#0000" />
                    </div>

                    <label className="mt-1 flex items-center gap-2 text-sm">
                        <Checkbox.Root
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if (checked == true) {
                                    setUseVoiceChannel(true)
                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                            className="w-6 h-6 p-1 rounded bg-orange-500"
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo dar gorjeta!
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            type="button"
                            className="bg-[#f5a00b] hover:bg-[#cb860e] px-5 h-12 rounded-md font-semibold"
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="bg-[#f5a00b] hover:bg-[#cb860e] px-5 h-12 rounded-md font-semibold flex items-center gap-3"
                        >
                            <Package className="w-6 h-6" />
                            Fazer pedido!
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}