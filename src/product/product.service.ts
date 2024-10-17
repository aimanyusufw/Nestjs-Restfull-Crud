import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma.service';
import { ProductResponse } from 'src/models/product.model';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProduct(): Promise<ProductResponse[]> {
    // Get all data from databse
    const products: ProductResponse[] = await this.prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        wight: true,
        stock: true,
        created_at: true,
      },
    });

    // Retun not found if product length is less than 1
    if (products.length < 1)
      throw new HttpException('Products is temporary not found', 404);

    // Return products data
    return products;
  }
}
