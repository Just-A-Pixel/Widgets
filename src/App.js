import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
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

    return (
        <div>
            <Dropdown 
                selected = {selected}
                onSelectedChange={setSelected}
                options = {options}
            />
        </div>
    )
}

export default App;