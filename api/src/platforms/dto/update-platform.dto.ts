import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePlatformDto {
  @ApiPropertyOptional()
  last_shared: string; // iso string

  @ApiPropertyOptional()
  display_order: number;

  @ApiPropertyOptional()
  name: string;
}
