import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { Proveedor } from './entities/proveedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
  generosRepository: any;
  constructor(
    @InjectRepository(Proveedor)
    private proveedoresRepository: Repository<Proveedor>,
  ) {}

  async create(CreateProveedorDto: CreateProveedorDto): Promise<Proveedor> {
    const existe = await this.proveedoresRepository.findOneBy({
      nombre: CreateProveedorDto.nombre.trim(),
      telefono: CreateProveedorDto.telefono.trim(),
      correo: CreateProveedorDto.correo.trim(),
      direccion: CreateProveedorDto.direccion.trim(),
    });
    if (existe) throw new ConflictException('El proveedor ya existe');

    const proveedor = new Proveedor();
    proveedor.nombre = CreateProveedorDto.nombre.trim();
    proveedor.telefono = CreateProveedorDto.telefono.trim();
    proveedor.correo = CreateProveedorDto.correo.trim();
    proveedor.direccion = CreateProveedorDto.direccion.trim();

    return this.proveedoresRepository.save(proveedor);
  }

  async findAll(): Promise<Proveedor[]> {
    return this.proveedoresRepository.find();
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedoresRepository.findOneBy({ id });
    if (!proveedor) throw new NotFoundException('El proveedor no existe');
    return proveedor;
  }

  async update(
    id: number,
    updateProveedoreDto: UpdateProveedorDto,
  ): Promise<Proveedor> {
    const proveedor = await this.findOne(id);
    const proveedorUpdate = Object.assign(proveedor, updateProveedoreDto);
    return this.proveedoresRepository.save(proveedorUpdate);
  }
  async remove(id: number) {
    const genero = await this.findOne(id);
    return this.proveedoresRepository.softRemove(genero);
  }
}
