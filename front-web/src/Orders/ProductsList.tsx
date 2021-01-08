import { checkIsSelected } from "./helpers";
import ProductCards from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectProducts: Product[];
    onselectProduct: (product: Product) => void;
}

function ProductsList({products, selectProducts, onselectProduct } : Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCards 
                        key={product.id} 
                        product={product}
                        onselectProduct={onselectProduct}
                        isSelected={checkIsSelected(selectProducts, product)}
                     />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;