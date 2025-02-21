import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ProductResponse {
  id: string;
  name: string;
  price: number;
  stock: number;
  weight: number;
  created_at: Date;
}

export class CreateProduct {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNumber()
  @MinLength(3)
  @MaxLength(50)
  price: number;

  @IsNumber()
  @MinLength(3)
  @MaxLength(50)
  stock: number;

  @IsNumber()
  @MinLength(3)
  @MaxLength(50)
  weight: number;
}

export class UpdateProduct {
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNumber()
  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  price: number;

  @IsNumber()
  @MinLength(3)
  @IsOptional()
  @MaxLength(50)
  stock: number;

  @IsNumber()
  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  weight: number;
}
