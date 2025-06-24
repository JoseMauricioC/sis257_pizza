// import { Injectable } from '@nestjs/common';
// import { CreateProductoDto } from './dto/create-producto.dto';
// import { UpdateProductoDto } from './dto/update-producto.dto';

// @Injectable()
// export class ProductosService {
//   create(createProductoDto: CreateProductoDto) {
//     return 'This action adds a new producto';
//   }

//   findAll() {
//     return `This action returns all productos`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} producto`;
//   }

//   update(id: number, updateProductoDto: UpdateProductoDto) {
//     return `This action updates a #${id} producto`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} producto`;
//   }
// }

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productoRepository.findOneBy({
      nombre: createProductoDto.nombre.trim(),
    });
    if (existe) throw new ConflictException('El producto ya existe');

    const producto = new Producto();
    producto.imagen = createProductoDto.imagen.trim();
    producto.nombre = createProductoDto.nombre.trim();
    producto.descripcion = createProductoDto.descripcion.trim();
    producto.precio = createProductoDto.precio;
    producto.stock = createProductoDto.stock;
    return this.productoRepository.save(producto);
  }

  async findAll() {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) throw new NotFoundException('El Producto no existe');
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    const productoUpdate = Object.assign(producto, updateProductoDto);
    return this.productoRepository.save(productoUpdate);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productoRepository.softRemove(producto);
  }
}
