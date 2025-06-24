import { PartialType } from '@nestjs/swagger';
import { CreateDetalleVentaDto } from './create-detalle_venta.dto';

export class UpdateDetalleVentaDto extends PartialType(CreateDetalleVentaDto) {}
