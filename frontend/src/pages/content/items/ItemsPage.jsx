import ItemsList from "../../../components/main/items_list/ItemsList.jsx"
import DataAPI from "../../../api/DataAPI.js";
import "./items.css"

export default function ItemsPage({ language }) {
  let items_ = new DataAPI().get_items()

  let items = new Array(0)
  for (let id = 0; id<items_.length; id++) {
    items.push({
      "img": items_[id].img,
      "title": items_[id].title_map[language].title,
      "description": items_[id].title_map[language].description
    })
  }
  let base_url = (
      import.meta.env.VITE_BACKEND_PROTOCOL +
      import.meta.env.VITE_BACKEND_HOST + ":" +
      import.meta.env.VITE_BACKEND_PORT
  )
  return (
    <main id={ "items" }>
      <div className="items">
        <ItemsList items_list={items} base_url={base_url}/>
      </div>
    </main>
  )
}