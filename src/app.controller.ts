import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  getHello(@Req() req: Request, @Res() res: Response) {
    console.log(req.query);
    return res.status(200).send({
      status: 'ok',
      ...req.query,
    });
  }
}
