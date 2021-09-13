import React from 'react'
import { useFetch } from '../Util/useFetch'

const Stories = ({ url }) => {
    const { products } = useFetch(url)
    console.log(products)

    const removeArticle = () => {
        console.log('removed article')
    }

    return (
        <>
            {products.map((product, index) => {
                return (
                    <div key={index} className="card">
                        <h2 className="card-title">{product.title ? product.title : "No Title"}</h2>
                        <p className="card-content">{product.points} points by {product.author ? product.author : "No Author"} | {product.num_comments ? product.num_comments : '0'} comments</p>
                        <div className="links">
                            {product.url && <a href={product.url}>Read More</a>}
                            <button onClick={removeArticle}>Remove</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Stories
