import { Controller, Get, Body, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

@Get('/index')
  index(@Res() res:Response) {
    res.render("index");
  }
  @Get('/about')
  about(@Res() res:Response) {
    res.render("about");
  }
  @Get('/contactus')
  contact(@Res() res:Response) {
    res.render("contactUs");
  }

}
