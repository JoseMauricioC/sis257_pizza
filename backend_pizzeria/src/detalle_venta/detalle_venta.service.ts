import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDetalleVentaDto } from './dto/create-detalle_venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle_venta.dto';
import { DetalleVenta } from './entities/detalle_venta.entity';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private detalleVentaRepository: Repository<DetalleVenta>,
  ) {}

  async create(
    createDetalleVentaDto: CreateDetalleVentaDto,
  ): Promise<DetalleVenta> {
    const detalle = this.detalleVentaRepository.create({
      cantidad: createDetalleVentaDto.cantidad,
      precioUnitario: createDetalleVentaDto.precioUnitario,
      subtotal: createDetalleVentaDto.subtotal,
      producto: { id: createDetalleVentaDto.idProducto } as any,
      venta: { id: createDetalleVentaDto.idVenta } as any,
    });

    return this.detalleVentaRepository.save(detalle);
  }

  async findAll(): Promise<DetalleVenta[]> {
    return this.detalleVentaRepository.find({
      relations: ['venta', 'producto'],
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number): Promise<DetalleVenta> {
    const detalle = await this.detalleVentaRepository.findOne({
      where: { id },
      relations: ['venta', 'producto'],
    });

    if (!detalle) {
      throw new NotFoundException(
        `Detalle de venta con ID ${id} no encontrado`,
      );
    }

    return detalle;
  }

  async update(
    id: number,
    updateDto: UpdateDetalleVentaDto,
  ): Promise<DetalleVenta> {
    const detalle = await this.findOne(id);
    Object.assign(detalle, updateDto);
    return this.detalleVentaRepository.save(detalle);
  }

  async remove(id: number) {
    const detalle = await this.findOne(id);
    return this.detalleVentaRepository.remove(detalle);
  }
}
