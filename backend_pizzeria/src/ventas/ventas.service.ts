import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventasRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const venta = new Venta();
    venta.fecha = createVentaDto.fecha;
    venta.total = createVentaDto.total;
    venta.idUsuario = createVentaDto.idUsuario;
    venta.idCliente = createVentaDto.idCliente;

    // Asignar detalles
    venta.detalleVenta = createVentaDto.detalleVenta.map((d) => {
      const detalle = new DetalleVenta();
      detalle.cantidad = d.cantidad;
      detalle.precioUnitario = d.precioUnitario;
      detalle.subtotal = d.subtotal;
      detalle.producto = { id: d.idProducto } as any;
      detalle.venta = venta;
      return detalle;
    });

    return this.ventasRepository.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({
      relations: {
        usuario: true,
        cliente: true,
        detalleVenta: {
          producto: true,
        },
      },
      order: {
        fecha: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: {
        usuario: true,
        cliente: true,
        detalleVenta: {
          producto: true,
        },
      },
    });

    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada`);
    }

    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    Object.assign(venta, updateVentaDto);
    return this.ventasRepository.save(venta);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    return this.ventasRepository.softRemove(venta);
  }
}

// import { Injectable } from '@nestjs/common';
// import { CreateVentaDto } from './dto/create-venta.dto';
// import { UpdateVentaDto } from './dto/update-venta.dto';

// @Injectable()
// export class VentasService {

//   async create(createVentaDto: CreateVentaDto): Promise<Venta> {
//     const venta = new Venta();
//     venta.fecha = createVentaDto.fecha;
//     venta.total = createVentaDto.total;
//     venta.idUsuario = createVentaDto.idUsuario;
//     venta.idCliente = createVentaDto.idCliente;

//     // Asignar detalles
//     venta.detalleVenta = createVentaDto.detalleVenta.map((d) => {
//       const detalle = new DetalleVenta();
//       detalle.cantidad = d.cantidad;
//       detalle.precioUnitario = d.precioUnitario;
//       detalle.subtotal = d.subtotal;
//       detalle.producto = { id: d.idProducto } as any;
//       detalle.venta = venta; // muy importante
//       return detalle;
//     });

//     return this.ventasRepository.save(venta);
//   }

//   findAll() {
//     return `This action returns all ventas`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} venta`;
//   }

//   async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
//     const venta = await this.findOne(id);
//     Object.assign(venta, updateVentaDto);
//     return this.ventasRepository.save(venta);
//   }

//   async remove(id: number) {
//     const venta = await this.findOne(id);
//     return this.ventasRepository.softRemove(venta);
//   }
// }
