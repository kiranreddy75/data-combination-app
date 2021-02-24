import { Controller, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Platforms')
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Get()
  getSummary() {
    return this.platformsService.getSummary();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platformsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlatformDto: UpdatePlatformDto) {
    return this.platformsService.update(+id, updatePlatformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.platformsService.remove(+id);
  }
}
