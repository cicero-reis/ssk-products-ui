import api from "./api";

export default class ProductApi {

    private static API_URL: string = import.meta.env.VITE_API_URL;
    private static RESOURCE: string = `${ProductApi.API_URL}/api/catalog/product`;;

    static async getProducts() {
        return await api.get(`${ProductApi.RESOURCE}/search`);
    }
}