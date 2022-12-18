import { instance } from "./base.api"

export const products = {
    // getProducts: ({page}:{page:number}) => {
    //     return instance.get(`/products?page=${page}`)
    // }
    getProducts: () => {
        return instance.get(`/products`)
    }
}