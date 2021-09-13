import { useState, useCallback, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.hits);
        setLoading(false);
    }, [url])

    useEffect(() => {
        getProducts();
    }, [url, getProducts]);

    // states returned
    return{ loading, products };
}