import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';

@Controller('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Get('/login')
  login(@Res() res:Response) {
    res.render("login",{result:"", check:""});
  }
  
  @Post('/login')
  async getdata(@Body() userauthDto: userAuthDto, @Res() res:Response){
    console.log(userauthDto);
    
    const result:string =  await this.authService.findOne(userauthDto);
    if(result==="Login Successful"){
      res.redirect('../index');
    }
    else if(result==="Incorrect Email"){
      res.render("login", {result:result, check:"IE"});
    }
    else{
      res.render("login", {result:result, check:"IP"});
    }
    
  }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();

  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
