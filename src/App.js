import React from 'react'
import Accordion from './components/Accordion'


const items = [
    {
        title: 'A',
        content: 'aaaa'
    },
    {
        title: 'B',
        content: 'bbbb'
    },
    {
        title: 'C',
        content: 'cccc'
    }
]

export default () => {
    return (
        <div>
            <Accordion items = {items}/>
        </div>
    )
}