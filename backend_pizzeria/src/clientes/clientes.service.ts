// import { Injectable } from '@nestjs/common';
// import { CreateClienteDto } from './dto/create-cliente.dto';
// import { UpdateClienteDto } from './dto/update-cliente.dto';

// @Injectable()
// export class ClientesService {
//   create(createClienteDto: CreateClienteDto) {
//     return 'This action adds a new cliente';
//   }

//   findAll() {
//     return `This action returns all clientes`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} cliente`;
//   }

//   update(id: number, updateClienteDto: UpdateClienteDto) {
//     return `This action updates a #${id} cliente`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} cliente`;
//   }
// }

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm/repository/Repository';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const existe = await this.clientesRepository.findOneBy({
      nombre: createClienteDto.nombre.trim(),
      apellido: createClienteDto.nombre.trim(),
      telefono: createClienteDto.nombre.trim(),
      direccion: createClienteDto.nombre.trim(),
    });

    if (existe) throw new ConflictException('El cliente ya existe');

    const cliente = new Cliente();
    cliente.nombre = createClienteDto.nombre.trim();
    cliente.apellido = createClienteDto.apellido.trim();
    cliente.telefono = createClienteDto.telefono.trim();
    cliente.direccion = createClienteDto.direccion.trim();
    return this.clientesRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clientesRepository.findOneBy({ id });
    if (!cliente) throw new NotFoundException('El cliente no existe');
    return cliente;
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.findOne(id);
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    return this.clientesRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clientesRepository.softRemove(cliente);
  }
}
