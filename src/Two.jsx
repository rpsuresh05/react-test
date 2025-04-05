import { useState } from 'react'

function Two() {
    const [count, setCount] = useState(false)

    const [ip, setIp] = useState('');
    const [svalue, setSvalue] = useState('');
    const handleClick = () => {
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify({
                required: count,
                value: ip,
                title: 'I am in love with someone.',
                userId: 5,
            })
        })
    }
    console.log("count", { count, svalue });
    return (
        <>
            <input type='checkbox' id="isRequired" name='required' checked={count} onChange={(e) => setCount(e.target.checked)} />
            <label htmlFor='isRequired'>Is Required</label>
            <input type='text' id="textVal" value={ip} name='text' onChange={(e) => setIp(e.target.value)} />
            <label htmlFor='textVal'></label>
            <select value={svalue} onChange={e => setSvalue(e.target.value)}>
                <option>One</option>
                <option>Two</option>
                <option>There</option>
            </select>
            <button draggable={true} onDragStart={() => console.log('Started Dragging...')} onDragEnd={() => console.log('drag ended....')} type='button' onClick={handleClick}>Submit</button>

            <div style={{ width: 1000, height: 200, border: '1px solid' }}
            //  onDragEnter={(e) => {
            //     e.preventDefault();
            //     console.log('onDragEnter ✖️');

            // }}
             onDragOver={(e) => { e.preventDefault(); console.log('onDragOver ✖️') }} 
             onDrop={() => console.log('OnDROPED...')}>
            </div>
        </>
    )
}

export default Two
