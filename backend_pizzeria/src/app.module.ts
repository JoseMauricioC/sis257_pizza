import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ProductosIngredientesModule } from './productos_ingredientes/productos_ingredientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProveedoresIngredientesModule } from './proveedores_ingredientes/proveedores_ingredientes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/**/entities/*.{ts|js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductosModule,
    ClientesModule,
    UsuariosModule,
    VentasModule,
    DetalleVentaModule,
    IngredientesModule,
    ProductosIngredientesModule,
    ProveedoresModule,
    ProveedoresIngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
