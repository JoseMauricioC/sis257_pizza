//export class CreateVentaDto {}
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDetalleVentaDto } from 'src/detalle_venta/dto/create-detalle_venta.dto';

export class CreateVentaDto {
  @ApiProperty()
  @IsDateString({}, { message: 'La fecha debe tener formato válido' })
  fecha: Date;

  @ApiProperty()
  @IsNumber({}, { message: 'El total debe ser un número' })
  @Min(0.01, { message: 'El total debe ser mayor que cero' })
  total: number;

  @ApiProperty()
  @IsInt({ message: 'El idUsuario debe ser numérico' })
  idUsuario: number;

  @ApiProperty()
  @IsInt({ message: 'El idCliente debe ser numérico' })
  idCliente: number;

  @ApiProperty({ type: [CreateDetalleVentaDto] })
  @ValidateNested({ each: true })
  @Type(() => CreateDetalleVentaDto)
  detalleVenta: CreateDetalleVentaDto[];
}
