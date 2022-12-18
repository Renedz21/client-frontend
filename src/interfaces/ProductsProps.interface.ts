export interface ProductsProps {
    _id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    brand: string;
    model: string;
    category: string[];
    countInStock: number;
    color: string;
    isAvailable: boolean;
}