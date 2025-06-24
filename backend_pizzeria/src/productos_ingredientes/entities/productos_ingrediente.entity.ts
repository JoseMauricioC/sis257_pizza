import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('productos_ingredientes')
export class ProductosIngrediente {
  @PrimaryColumn({ name: 'id_producto' })
  idProducto: number;

  @ManyToOne(() => Producto, (producto) => producto.productoIngredientes)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;

  @PrimaryColumn({ name: 'id_ingrediente' })
  idIngrediente: number;

  @ManyToOne(
    () => Ingrediente,
    (ingrediente) => ingrediente.productoIngredientes,
  )
  @JoinColumn({ name: 'id_ingrediente', referencedColumnName: 'id' })
  ingrediente: Ingrediente;

  @Column({ name: 'cantidad_usada' })
  cantidadUsada: number;
}
