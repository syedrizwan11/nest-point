import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // addUser(@Body() UserDto: CreateUserDto) { 
  //   return this.usersService.create(UserDto);
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/signup')
  //@Render('signUp')
  root(@Res() res:Response) {
    res.render("signUp", {result:""});
  }

  @Post('/signup')
  async getdata(@Body() userDto: CreateUserDto, @Res() res:Response){
    console.log(userDto);
    //const result:string=
    let result:string =  await this.usersService.create(userDto);
    let returnobj ={result:"",check:""}
    if(result==="success"){
      returnobj.check = "added"
      returnobj.result = "Sign Up Successful"
    }
    else if(result==="ConflictException"){
      returnobj.check = "conflict"
      returnobj.result = "This email is already in use"
    }
    else{
      returnobj.check = "error"
      returnobj.result = "Internal-Server-Error: Please try Again"
    }
    res.render('signUp', returnobj);
    
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
