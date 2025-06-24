import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe ser mayor a 50 caracteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido es obligatorio' })
  @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo apellido no debe ser mayor a 50 caracteres',
  })
  readonly apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono es obligatorio' })
  @IsString({ message: 'El campo telefono debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo telefono no debe ser mayor a 10 caracteres',
  })
  readonly telefono: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion es obligatorio' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo direccion no debe ser mayor a 100 caracteres',
  })
  readonly direccion: string;
}
