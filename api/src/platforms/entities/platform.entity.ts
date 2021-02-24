import { ApiProperty } from '@nestjs/swagger';

export class Platform {
  @ApiProperty()
  platform_id: number;

  @ApiProperty()
  last_shared: string; // iso string

  @ApiProperty()
  display_order: number;

  @ApiProperty()
  name: string;
}

export class PlatformSummary {
  @ApiProperty()
  user_count: number;
  @ApiProperty()
  noisy_field: string;
  @ApiProperty()
  stuff_we_dont_need: string;
  @ApiProperty()
  times_this_annoyed_me: number;
  @ApiProperty({ type: Platform })
  platforms: Platform[];
}
