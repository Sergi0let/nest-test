import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UseInterceptors,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import { UserService } from './user.service';

@Controller('users') // /users/ - це початок роуту
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/') // /users/
  async getAllUsers(@Req() req: Request, @Res() res: Response) {}

  @Get('/:id') // /users/:id
  async getUser(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const userData = await this.userService.getUserData(id);
    const { email, nameFirst, nameLast, birthDate, gender } = userData;
    return res.send({
      status: 'ok',
      data: { email, nameFirst, nameLast, birthDate, gender },
    });
  }

  @Post('/') // /users/
  @UseInterceptors(FileInterceptor(''))
  async addUser(@Req() req: Request, @Res() res: Response) {
    await this.userService.addUser(req.body);
    return res.send({ status: 'ok' });
  }

  @Put('/:id') // /users/:id
  async updateUser(@Req() req: Request, @Res() res: Response) {}

  @Patch('/:id') // /users/:id
  async updateUserField(@Req() req: Request, @Res() res: Response) {}

  @Delete('/:id') // /users/:id
  async deleteUser(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    await this.userService.deleteUser(id);
    return res.send({ status: 'ok' });
  }
}
