export default function CardsView ({items}) {
  
  return (
    <ul className="list-item">
      {items.map((product, index) => (
        <li className="shop-item" key={index}>
          <figure className="thumb">
            <img src={product.img}></img>
          </figure>
          <h2 className="title">{product.name}</h2>
          <p className="desc">{product.color}</p>
          <p className="price">$ {product.price}</p>
          <button className="btn">Add to cart</button>
        </li>
      ))}
    </ul>
  )
}