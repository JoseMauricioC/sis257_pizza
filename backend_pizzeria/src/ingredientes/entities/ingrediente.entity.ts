import { ProductosIngrediente } from 'src/productos_ingredientes/entities/productos_ingrediente.entity';
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

@Entity('ingredientes')
export class Ingrediente {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 50 })
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2, name: 'cantidad_disponible' })
  cantidadDisponible: number;

  @Column({ length: 20, name: 'unidad_medida' })
  unidadMedida: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;

  @OneToMany(
    () => ProveedoresIngrediente,
    (proveedoresingredientes) => proveedoresingredientes.ingrediente,
  )
  proveedoresIngredientes: ProveedoresIngrediente[];

  @OneToMany(
    () => ProductosIngrediente,
    (productoingrediente) => productoingrediente.ingrediente,
  )
  productoIngredientes: ProductosIngrediente[];
}
