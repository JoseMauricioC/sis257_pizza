import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('proveedores_ingredientes')
export class ProveedoresIngrediente {
  @PrimaryColumn({ name: 'id_proveedor' })
  idProveedor: number;

  @PrimaryColumn({ name: 'id_ingrediente' })
  idIngrediente: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'precio_unitario' })
  precioUnitario: number;

  @Column('date', { name: 'fecha_ultimo_suministro' })
  fechaUltimoSuministro: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;

  @ManyToOne(
    () => Ingrediente,
    (ingrediente) => ingrediente.proveedoresIngredientes,
  )
  @JoinColumn({ name: 'id_ingrediente', referencedColumnName: 'id' })
  ingrediente: Ingrediente;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.proveedoresIngredientes)
  @JoinColumn({ name: 'id_proveedor', referencedColumnName: 'id' })
  proveedor: Proveedor;
}
