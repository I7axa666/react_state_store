export default function CardsView ({cards}) {
  
  return (
    <ul className="list-card">
      {cards.map((prodact, index) => (
        <li className="shop-card" key={index}>
          <h2 className="title">{prodact.name}</h2>
          <p className="desc">{prodact.color}</p>
          <figure>
            <img src={prodact.img}></img>
          </figure>

          <div className="cta">
            <p className="price">$ {prodact.price}</p>
            <button className="btn">Add to cart</button>
          </div>
        </li>
      ))}
    </ul>
  )
}