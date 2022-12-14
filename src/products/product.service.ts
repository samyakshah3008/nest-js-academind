import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
@Injectable()
export class ProductService{
    products: Product[] = []

    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString()
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct)
        return prodId
    }

    getProducts(){
        return [...this.products]
    }

    getSingleProduct(productId: string){
       const product = this.findProduct(productId)
        return {...product}
    }

    updateProduct(productId: string, title: string, description: string, price: number){
       const product = this.findProduct(productId)

    }

    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex((prod)=> prod.id === id)
        const product = this.products[productIndex]
        if(!product){
            throw new NotFoundException()
        }
        return [product, productIndex]
    }
}