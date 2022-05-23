import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

const Catalog: React.FC = () => {
    // const catalog = useSelector(state => state);
    // console.log(catalog);
    
    const dispatch = useDispatch();

    const [catalog, setCatalog] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('products').then(response =>{
            setCatalog(response.data);
        })
    }, [dispatch]);
    
    const handleAddProductToCart = useCallback((product: IProduct) => {
            dispatch(addProductToCart(product))
    }, [])
    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map(product =>(
                <article key={product.id}>
                    <strong>{product.title}</strong> {" - "}
                    <span>{product.price}</span> {"  "}
                    <button type="button" onClick={()=> handleAddProductToCart(product)}>Comprar</button>
                </article>
            ))}
        </main>
    );
}
export default Catalog;