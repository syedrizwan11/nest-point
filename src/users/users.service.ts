import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../typeorm/entities/user.entity';
import { usertype } from 'src/utils/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private userRepository:Repository<User>,
  ){}

 async create(createUserDto: usertype) {
    const newUser = this.userRepository.create({...createUserDto,Createdat:new Date()});
    //returns a promise
    
    try{
       await this.userRepository.save(newUser);
    } catch(error){
      console.log(error.code);
      if(!error){
        console.log("successfull");
      }
      if(error.errno === 1062){
        //throw new ConflictException("Email already exists")
        //return "";
       // return "<script>alert('emailalready exists');</script>";
       return "ConflictException";
        
      }
      else{
       // throw new InternalServerErrorException();
         return "InternalServerErrorException";

      }
      
    }
    return "success"

    // user.then((res)=>{
    //   console.log(res);
    //   return res;
    // }).catch((error)=>{
    //   console.log(error.cod);
    //   return error;
    // })
  }

  findAll() {
    //returns a promise
    return this.userRepository.find();
  }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
 }
