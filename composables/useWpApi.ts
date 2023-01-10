import { Product } from "~/types/Product"
import axios from 'axios'

export default () => {
    const config = useRuntimeConfig();
    const WP_URL: string = config.wpUri;
    const WP_URL_HTTPS: string = config.wpUriHttps;
    const WP_CONSUMER_PUBLIC: string = config.wpCP;
    const WP_CONSUMER_SECRET: string = config.wpCS;

    // get
    const get = async <T>(endpoint: string) => {
        const res = axios.get(`${WP_URL}/wp-json/wc/store/v1/${endpoint}`, {
            withCredentials: false,
        });
        return res;
    };

    // post 
    const post = async <T>(endpoint: string, data: object) => {
        const res = axios.post(`${WP_URL_HTTPS}/wp-json/${endpoint}`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            auth: {
                username: WP_CONSUMER_PUBLIC,
                password: WP_CONSUMER_SECRET,
            },
        });
        return res;
    };

    // Get All Products
    const getProducts = async (
        category?: number,
        page: number = 1,
        perPage: number = 9
    ) => {
        let query: string = `products?page=${page}&per_page=${perPage}&_embed=1`;
        if (category) {
           query += `&categories=${category}`;
        }
        return get<Product[]>(query);
    };

    // Get a Single Product
    const getProduct = async (id: string) => get<Product[]>(`products/${id}`);
    const postOrder = async (data: object) => post<any>(`wc/v3/orders`, data);

    return {
        get,
        getProducts,
        getProduct,
        postOrder,
    };
};