import { Test, TestingModule } from '@nestjs/testing';
import { ProveedoresIngredientesController } from './proveedores_ingredientes.controller';
import { ProveedoresIngredientesService } from './proveedores_ingredientes.service';

describe('ProveedoresIngredientesController', () => {
  let controller: ProveedoresIngredientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProveedoresIngredientesController],
      providers: [ProveedoresIngredientesService],
    }).compile();

    controller = module.get<ProveedoresIngredientesController>(
      ProveedoresIngredientesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
