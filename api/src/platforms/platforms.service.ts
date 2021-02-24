import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { MOCK_ENDPOINT_2 } from 'src/data/endpoint-2'


@Injectable()
export class PlatformsService {
  private _platformsRepo = Object.assign({}, MOCK_ENDPOINT_2);

  getSummary() {
    return this._platformsRepo;
  }

  findOne(id: number) {
    const targetedPlatform = this._platformsRepo.platforms.find(platform => platform.platform_id === id);
    return !targetedPlatform ? new NotFoundException() : targetedPlatform;
  }

  update(id: number, updatePlatformDto: UpdatePlatformDto) {
    const targetedPlatform = this._platformsRepo.platforms.find(platform => platform.platform_id === id);
    if (!targetedPlatform) {
      return new NotFoundException();
    }

    const nextPlatform = { ...targetedPlatform, ...updatePlatformDto };

    const nextPlatforms = this._platformsRepo.platforms.map(platform => {
      if (platform.platform_id === id) {
        return nextPlatform;
      }

      return platform;
    })

    this._platformsRepo.platforms = [...nextPlatforms];

    return this._platformsRepo;
  }

  remove(id: number) {
    const targetedPlatform = this._platformsRepo.platforms.find(platform => platform.platform_id === id);
    if (!targetedPlatform) {
      return new NotFoundException();
    }

    this._platformsRepo.platforms = this._platformsRepo.platforms.filter(platform => platform.platform_id !== id);

    return this._platformsRepo;
  }
}
