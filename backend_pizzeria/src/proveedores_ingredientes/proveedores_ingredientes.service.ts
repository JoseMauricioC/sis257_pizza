import { Injectable } from '@nestjs/common';
import { CreateProveedoresIngredienteDto } from './dto/create-proveedores_ingrediente.dto';
import { UpdateProveedoresIngredienteDto } from './dto/update-proveedores_ingrediente.dto';

@Injectable()
export class ProveedoresIngredientesService {
  create(createProveedoresIngredienteDto: CreateProveedoresIngredienteDto) {
    return 'This action adds a new proveedoresIngrediente';
  }

  findAll() {
    return `This action returns all proveedoresIngredientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedoresIngrediente`;
  }

  update(
    id: number,
    updateProveedoresIngredienteDto: UpdateProveedoresIngredienteDto,
  ) {
    return `This action updates a #${id} proveedoresIngrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedoresIngrediente`;
  }
}
