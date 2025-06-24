import { Test, TestingModule } from '@nestjs/testing';
import { ProveedoresIngredientesService } from './proveedores_ingredientes.service';

describe('ProveedoresIngredientesService', () => {
  let service: ProveedoresIngredientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProveedoresIngredientesService],
    }).compile();

    service = module.get<ProveedoresIngredientesService>(
      ProveedoresIngredientesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
