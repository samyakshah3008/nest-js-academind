import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController{

    constructor(private readonly productService: ProductService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ):any{
        const generatedId = this.productService.insertProduct(prodTitle,prodDesc,prodPrice)
        return {id: generatedId}
    }
    @Get()
    getAllProducts(){
        return this.productService.getProducts()
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productService.getSingleProduct(prodId)
    }
    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string, @Body('title') prodTitle: string, @Body('description') prodDescription: string, @Body('price') prodPrice: number
    ){}

}