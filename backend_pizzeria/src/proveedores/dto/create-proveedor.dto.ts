import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateProveedorDto {
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe ser mayor a 50 caracteres',
  })
  readonly nombre: string;
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe ser mayor a 50 caracteres',
  })
  readonly telefono: string;
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo correo es obligatorio' })
  @IsString({ message: 'El campo correo debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo correo no debe ser mayor a 50 caracteres',
  })
  readonly correo: string;
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion es obligatorio' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo direccion no debe ser mayor a 50 caracteres',
  })
  readonly direccion: string;
}
