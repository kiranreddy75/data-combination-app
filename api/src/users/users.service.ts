import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { MOCK_ENDPOINT_1 } from 'src/data/endpoint-1';

@Injectable()
export class UsersService {
  private _usersRepo = [...MOCK_ENDPOINT_1];

  findAll() {
    return [...this._usersRepo];
  }

  findOne(id: number) {
    const targetedUser = this._usersRepo.find(user => user.id === id);
    return !targetedUser ? new NotFoundException() : targetedUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const targetedUser = this._usersRepo.find(user => user.id === id);
    if (!targetedUser) {
      return new NotFoundException();
    }

    const nextUser = { ...targetedUser, ...updateUserDto };
    this._usersRepo = this._usersRepo.map(user => {
      if (user.id === id) {
        return nextUser
      }

      return user;
    });

    return [...this._usersRepo];
  }

  remove(id: number) {
    const targetedUser = this._usersRepo.find(user => user.id === id);
    if (!targetedUser) {
      return new NotFoundException();
    }

    this._usersRepo = this._usersRepo.filter(user => user.id !== id);

    return this._usersRepo;
  }
}
