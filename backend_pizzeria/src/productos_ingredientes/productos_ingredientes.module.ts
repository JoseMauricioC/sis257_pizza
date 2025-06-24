import { Module } from '@nestjs/common';
import { ProductosIngredientesService } from './productos_ingredientes.service';
import { ProductosIngredientesController } from './productos_ingredientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosIngrediente } from './entities/productos_ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosIngrediente])],
  controllers: [ProductosIngredientesController],
  providers: [ProductosIngredientesService],
})
export class ProductosIngredientesModule {}
