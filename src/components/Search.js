import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('potato')

    const [results, setResults] = useState([])

    useEffect(() => {               // Dont mark it as async
        
        const search = async () => {        // Recommended React method
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            console.log(data)
            setResults(data.query.search)
        };
        
        if(term && !results.length) {
            search()
        } else {

            const timeoutId = setTimeout(() => {
                if(term){search();}
            }, 1000)
    
            return () => {
                clearTimeout(timeoutId)
            }
            
        }

        
        // eslint-disable-next-line
    }, [term])   

    const renderedItems = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className = "right floated content">
                    <a className = "ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{__html: result.snippet}}></span>
                    
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className = "field">
                    <label> Enter Search Term</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)} className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedItems}
            </div>
        </div>
    )
}

export default Search