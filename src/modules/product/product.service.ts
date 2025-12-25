import { prisma } from '../../config/prisma';
import { CreateProductDTO, UpdateProductDTO } from './product.dto';

export class ProductService {
  static create(data: CreateProductDTO) {
    return prisma.product.create({ data });
  }

  static findAll() {
    return prisma.product.findMany();
  }

  static findById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  }

  static update(id: number, data: UpdateProductDTO) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  static delete(id: number) {
    return prisma.product.delete({ where: { id } });
  }
}
