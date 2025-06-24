import { Injectable } from '@nestjs/common';
import { CreateProductosIngredienteDto } from './dto/create-productos_ingrediente.dto';
import { UpdateProductosIngredienteDto } from './dto/update-productos_ingrediente.dto';

@Injectable()
export class ProductosIngredientesService {
  create(createProductosIngredienteDto: CreateProductosIngredienteDto) {
    return 'This action adds a new productosIngrediente';
  }

  findAll() {
    return `This action returns all productosIngredientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productosIngrediente`;
  }

  update(
    id: number,
    updateProductosIngredienteDto: UpdateProductosIngredienteDto,
  ) {
    return `This action updates a #${id} productosIngrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} productosIngrediente`;
  }
}
