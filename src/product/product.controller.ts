import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProduct,
  ProductResponse,
  UpdateProduct,
} from 'src/models/product.model';
import { WebResponse } from 'src/models/web.model';

@Controller('/products')
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
    // Waiting ther service response
    const result = await this.productService.createProduct(request);

    // return service response
    return { message: 'Product created', data: result };
  }

  @Put(':id/update')
  async updateProduct(
    @Param('id') id: string,
    @Body() data: UpdateProduct,
  ): Promise<WebResponse<ProductResponse>> {
    // Waiting ther service response
    const result = await this.productService.updateProduct(id, data);

    // return service response
    return { message: 'Product updated', data: result };
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id') id: string,
  ): Promise<WebResponse<ProductResponse>> {
    // Waiting ther service response
    const result = await this.productService.deleteProduct(id);

    // return service response
    return { message: 'Product deleted', data: result };
  }
}
