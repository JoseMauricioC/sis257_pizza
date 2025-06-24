import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredienteDto {
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  readonly cantidadDisponible: number;
  @ApiProperty()
  readonly unidadMedida: string;
}
