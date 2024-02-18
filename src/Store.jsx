import { useState } from 'react'
import IconSwitch from "./IconSwitch"
import CardsView from "./CardsView"
import ListView from "./ListView"

function Store ({products}) {

  const [page, setPage] = useState({
    icon: "view_list",
    products: products,
    view: CardsView
  })

  const onSwitch = (icon) => {
    if (icon === "view_list") {
      setPage(page => {
        return {
          ...page,
          icon: "view_module"
        }
      })
    } else {
      setPage(page => {
        return {
          ...page,
          icon: "view_list"
        }
      })
    }

    
  }

  return(
    <>
      <IconSwitch icon={page.icon} onSwitch={() => onSwitch(page.icon)}/>
      {page.icon === "view_list" ? <CardsView cards={products} /> : <ListView items={products} />}
    </>
  )
}

export default Store