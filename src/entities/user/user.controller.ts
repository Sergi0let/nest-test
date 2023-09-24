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
} from '@nestjs/common';
import { Response, Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers(@Req() req: Request, @Res() res: Response) {}

  @Get('/:id')
  async getUser(@Req() req: Request, @Res() res: Response) {}

  @Post('/')
  @UseInterceptors(FileInterceptor(''))
  async addUser(@Req() req: Request, @Res() res: Response) {
    await this.userService.addUser(req.body);
    return res.send({ status: 'ok' });
  }

  @Put('/:id')
  async updateUser(@Req() req: Request, @Res() res: Response) {}

  @Patch('/:id')
  async updateUserField(@Req() req: Request, @Res() res: Response) {}

  @Delete('/:id')
  async deleteUser(@Req() req: Request, @Res() res: Response) {}
}
