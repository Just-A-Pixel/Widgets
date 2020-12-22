import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//     {
//         title: 'A',
//         content: 'aaaa'
//     },
//     {
//         title: 'B',
//         content: 'bbbb'
//     },
//     {
//         title: 'C',
//         content: 'cccc'
//     }
// ]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },

    {
        label: 'The Color Green',
        value: 'green'
    },

    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ?
            <Dropdown 
                selected = {selected}
                onSelectedChange={setSelected}
                options = {options}
            /> : null
            }
            <br/>
            <div><br/><br /><br />
                <h1 style = {{color: selected.value}}>The text is {selected.value}</h1>
            </div>
        </div>
    )
}

export default App;