export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    created_at: string;
}

export interface NewProduct {
    name: string;
    description: string;
    price: number;
}
