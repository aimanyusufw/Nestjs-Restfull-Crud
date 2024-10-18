import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { CreateProduct, ProductResponse } from 'src/models/product.model';
import { WebResponse } from 'src/models/web.model';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  async getAllProduct(): Promise<WebResponse<ProductResponse[]>> {
    // Waiting ther service response
    const result: ProductResponse[] = await this.productService.getAllProduct();

    // return service response
    return { message: 'Success get all product', data: result };
  }

  @Get(':id')
  async getProductById(
    @Param('id') id: string,
  ): Promise<WebResponse<ProductResponse>> {
    // Waiting ther service response
    const result: ProductResponse =
      await this.productService.getProductById(id);

    // return service response
    return { message: 'Success get all product', data: result };
  }

  @Post('/create')
  async createProduct(
    @Body() request: CreateProduct,
  ): Promise<WebResponse<ProductResponse>> {
    const result = await this.productService.createProduct(request);

    return { message: 'Product created', data: result };
  }
}
