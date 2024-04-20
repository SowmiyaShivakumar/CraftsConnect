const HomePageProducts = ({ product }) => {

    return (
        <div className='product-details'>
            <h4>{product.productName}</h4>
            <p><strong>Type : </strong>{product.productType}</p>
            <p><strong>Description : </strong>{product.description}</p>
            <p><strong>Cost : </strong>{product.cost}</p>
            <p><strong>Quantity : </strong>{product.quantity}</p>
            <p><strong>Tags : </strong>{product.tags}</p>
            {product.productImage && <img src={product.productImage} alt={product.productName} height={200} width={200}/>}
            <hr/>
        </div>
    )

}

export default HomePageProducts