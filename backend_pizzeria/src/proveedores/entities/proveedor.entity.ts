import { ProveedoresIngrediente } from 'src/proveedores_ingredientes/entities/proveedores_ingrediente.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 10 })
  telefono: string;

  @Column('varchar', { length: 100 })
  correo: string;

  @Column('varchar', { length: 100 })
  direccion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;

  @OneToMany(
    () => ProveedoresIngrediente,
    (proveedoresingredientes) => proveedoresingredientes.proveedor,
  )
  proveedoresIngredientes: ProveedoresIngrediente[];
}
