//export class CreateDetalleVentaDto {}
import { IsInt, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDetalleVentaDto {
  @ApiProperty()
  @IsInt({ message: 'El idProducto debe ser un número entero' })
  idProducto: number;

  @ApiProperty()
  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @Min(1, { message: 'La cantidad debe ser mayor a cero' })
  cantidad: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El precio unitario debe ser un número' })
  precioUnitario: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El subtotal debe ser un número' })
  subtotal: number;
}
