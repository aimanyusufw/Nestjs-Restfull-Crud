import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma.service';
import { CreateProduct, ProductResponse } from 'src/models/product.model';

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
        weight: true,
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

  async getProductById(id: string): Promise<ProductResponse> {
    // Get product by id data from databse
    const product: ProductResponse = await this.prisma.product.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        price: true,
        weight: true,
        stock: true,
        created_at: true,
      },
    });

    // Retun not found if product in not exsits
    if (!product)
      throw new HttpException('Products is temporary not found', 404);

    // Return product data
    return product;
  }

  async createProduct(data: CreateProduct): Promise<ProductResponse> {
    // Create the product
    const product = await this.prisma.product.create({
      data,
      select: {
        id: true,
        name: true,
        price: true,
        weight: true,
        stock: true,
        created_at: true,
      },
    });

    // retunrn the product
    return product;
  }
}
