import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProveedoresIngredientesService } from './proveedores_ingredientes.service';
import { CreateProveedoresIngredienteDto } from './dto/create-proveedores_ingrediente.dto';
import { UpdateProveedoresIngredienteDto } from './dto/update-proveedores_ingrediente.dto';

@Controller('proveedores-ingredientes')
export class ProveedoresIngredientesController {
  constructor(
    private readonly proveedoresIngredientesService: ProveedoresIngredientesService,
  ) {}

  @Post()
  create(
    @Body() createProveedoresIngredienteDto: CreateProveedoresIngredienteDto,
  ) {
    return this.proveedoresIngredientesService.create(
      createProveedoresIngredienteDto,
    );
  }

  @Get()
  findAll() {
    return this.proveedoresIngredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedoresIngredientesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProveedoresIngredienteDto: UpdateProveedoresIngredienteDto,
  ) {
    return this.proveedoresIngredientesService.update(
      +id,
      updateProveedoresIngredienteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proveedoresIngredientesService.remove(+id);
  }
}
