import { 
    IsEmail, 
    IsNotEmpty, 
    IsNumber, 
    IsString, 
    MinLength, 
    MaxLength 
} from 'class-validator';


export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(72)
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  no_telp: string;
}
