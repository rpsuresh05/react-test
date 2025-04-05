import { useState } from 'react'

function RGB() {
    const[red, setRed] = useState('0')
    const[green, setGreen] = useState('0')
    const[blue, setBlue] = useState('0')

        return (
        <>
        <input value={red} onChange={e=> setRed(e.target.value)}></input>
        <input value={green} onChange={e=> setGreen(e.target.value)}></input>
        <input  value={blue} onChange={e=> setBlue(e.target.value)}></input>

        <div style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            width: 100,
            height:100
        }}>

        </div>
        </>
    )
}

export default RGB
