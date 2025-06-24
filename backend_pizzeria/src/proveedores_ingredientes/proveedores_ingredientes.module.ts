import { Module } from '@nestjs/common';
import { ProveedoresIngredientesService } from './proveedores_ingredientes.service';
import { ProveedoresIngredientesController } from './proveedores_ingredientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedoresIngrediente } from './entities/proveedores_ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProveedoresIngrediente])],
  controllers: [ProveedoresIngredientesController],
  providers: [ProveedoresIngredientesService],
})
export class ProveedoresIngredientesModule {}
