import React, {FC} from 'react';
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export type IProductTypeProps = IProductProps & { children?: React.ReactNode};
const Product: FC<IProductTypeProps>= ({id,
                                           title,
                                           description,
                                           price,
                                           discountPercentage,
                                           rating,
                                           stock,
                                           brand,
                                           category,
                                           thumbnail,
                                           images}) => {
    return (
        <div>
            <h2>{id}. {title}</h2>
            <h3>{description}</h3>
            <p>{price}. {discountPercentage}. {rating}. {stock}. {brand}. {category}</p>
            <img src={thumbnail} alt={title} />
            {images.slice(0, 10).map((image, index) => (
                <img key={index} src={image} alt={title} />
            ))}
        </div>
    );
};

export default Product;