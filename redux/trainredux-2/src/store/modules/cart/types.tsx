export interface IProduct {
    id:number;
    title:string;
    price: number;
}

export interface ICartItem{
    product: object;
    quntity:number;
}

export interface ICartState {
    items: ICartItem[];
}