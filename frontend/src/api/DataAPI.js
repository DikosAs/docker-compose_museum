import API from "./API.js";

export default class DataAPI extends API {
  constructor() {
    super();
    this.url = this.url + "data/"
  }

  get_contacts() {
    let req = this.request("contacts/")

    if (typeof req === "object") return req.contacts
    if (typeof req === "string") {
      console.error(req)
      return []
    }
  }

  get_items() {
    let req = this.request("items/")

    if (typeof req === "object") return req.items
    if (typeof req === "string") {
      console.error(req)
      return []
    }
  }
}