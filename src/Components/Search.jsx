import React from 'react'
import { useGlobalContext } from '../Util/context'

const Search = () => {

    return (
        <form onSubmit={e => e.preventDefault()} className="form-search">
            <h2>Search Hacker News</h2>
            <input type="text" className="form-input"/>
        </form>
    )
}

export default Search
