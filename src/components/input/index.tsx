"use client"
import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export function Input(){

    const [input, setInput] = useState('')
    const router = useRouter()


    function handleSearch(e: FormEvent){
        e.preventDefault();

        if(input === "") return;

        router.push(`/game/search/${input}`)
        
    }

    return(
        <form onSubmit={handleSearch} className='w-full bg-slate-200 gap-2 my-5 flex justify-between items-center p-2 rounded-lg'>
            <input
            className='bg-slate-200 outline-none w-11/12'
             type="text" 
             placeholder="Procurando algum jogo?..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
            />

            <button type='submit' className='cursor-pointer'>
                <BsSearch size={20} color='#ea580c'/>
            </button>
        </form>
    )
}