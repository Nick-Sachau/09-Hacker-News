import React from 'react'

const Buttons = ({ nextPage, page }) => {
    const nextPageHandler = () => {
        nextPage(page + 1)
    }

    const prevPageHandler = () => {
        nextPage(page - 1)
    }

    return (
        <div>
            <button onClick={prevPageHandler}>Previous Page</button>
            <button onClick={nextPageHandler}>Next Page</button>
            <p>Page: {page}</p>
        </div>
    )
}

export default Buttons
