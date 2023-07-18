import { HiCursorClick } from 'react-icons/hi'
import Button from "../Button/Button"
import { useEffect, useState } from 'react'
import './hooksSection.scss'

const HooksSection = () => {
    const [count, setCount] = useState(0)
    const [emoji, setEmoji] = useState('🌸')

    const countClick = () => {
        setCount(count + 1)
    }

    const randomEmoji = () => {
        const emojis = ['✨', '🌷', '🌼', '🌺', '🐉', '🦐', '🐤', '🐢', '🎑', '⛩', '🪑']
        const random = Math.floor((Math.random() * emojis.length));
        setEmoji(emojis[random])
    }

    useEffect(() => {
        randomEmoji()
    }, [count])

    return(
        <div className='hooksSectionContainer'>
            <div>(ღゝ◡╹)ノ♡ Has hecho <b>{count}</b> clicks</div>
            <br></br>
            <div onClick={countClick}>
                <Button nombre='Contador de clicks' icono={<HiCursorClick/>}/>
            </div>
            <br></br>
            - Procesador random de emojis: {emoji} -
        </div>
    )
}

export default HooksSection