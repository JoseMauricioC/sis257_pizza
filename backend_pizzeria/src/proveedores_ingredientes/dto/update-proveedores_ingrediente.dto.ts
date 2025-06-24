import { PartialType } from '@nestjs/swagger';
import { CreateProveedoresIngredienteDto } from './create-proveedores_ingrediente.dto';

export class UpdateProveedoresIngredienteDto extends PartialType(
  CreateProveedoresIngredienteDto,
) {}
