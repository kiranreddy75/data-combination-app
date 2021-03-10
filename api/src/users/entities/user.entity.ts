import { ApiProperty } from '@nestjs/swagger';

export class ProfileShared {
  @ApiProperty()
  shared_on_platform_1: boolean;

  @ApiProperty()
  shared_on_platform_2: boolean;

  @ApiProperty()
  shared_on_platform_3: boolean;
}

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  ip_address: string;

  @ApiProperty()
  username: string;

  @ApiProperty({ type: ProfileShared})
  profile_shared: ProfileShared;
}
