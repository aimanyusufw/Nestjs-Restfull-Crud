import { Controller, Get, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { ProductResponse } from 'src/models/product.model';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  async getAllProduct(@Res() res: Response): Promise<ProductResponse[] | any> {
    // Waiting ther service response
    const data: ProductResponse[] = await this.productService.getAllProduct();

    // return service response
    return res
      .status(200)
      .json({ messages: 'Get all products successfully', data });
  }
}
