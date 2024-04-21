const HomePageProducts = ({ product }) => {

    return (
        <div className='homepage-product-details'>
            {product.productImage && <img src={product.productImage} alt={product.productName} height={200} width={200}/>}
            <h4>{product.productName}</h4>
            <p><strong>Type : </strong>{product.productType}</p>
            <p><strong>Cost : </strong>{product.cost}</p>
        </div>
    )

}

export default HomePageProducts