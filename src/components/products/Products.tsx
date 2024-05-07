import React, {FC, useEffect, useState} from 'react';
import Product from "../product/Product";
import {getAllProducts} from "../../services/products.api.service";
import {IProductProps} from "../../models/Product";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        getAllProducts().then(({data:{products}}) => setProducts(products))
    }, []);
    return (
        <div>
            {products
                .map
                ((value: IProductProps) => (<Product
                key={value.id}
                id={value.id}
                title={value.title}
                description={value.description}
                price={value.price}
                discountPercentage={value.discountPercentage}
                rating={value.rating}
                stock={value.stock}
                brand={value.brand}
                category={value.category}
                thumbnail={value.thumbnail}
                images={value.images}
            />))}
        </div>
    );
};

export default Products;