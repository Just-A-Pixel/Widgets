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
// eslint-disable-next-lin
export default () => {
    return (
        <div>
            <Accordion items = {items}/>
        </div>
    )
}