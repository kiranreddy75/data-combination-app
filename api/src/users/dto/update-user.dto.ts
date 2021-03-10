import { ProfileShared } from "../entities/user.entity";
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional()
  first_name: string;

  @ApiPropertyOptional()
  last_name: string;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  gender: string;

  @ApiPropertyOptional()
  ip_address: string;

  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional({ required: false, type: ProfileShared })
  profile_shared: ProfileShared;
}
