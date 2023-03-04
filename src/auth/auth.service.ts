import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { userAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRespository : Repository<User>
  ){}
  // create(createAuthDto: userAuthDto) {
  //   return 'This action adds a new auth';
  // }

//   findAll() {
//     return `This action returns all auth`;
//   }

  async findOne(authdto : userAuthDto) {
    const {email,password} =authdto;
    let id = 5;
    let user : User = await this.userRespository.findOneBy({email:email});
    if(!user){
      console.log("incorrect email");
      return "Incorrect Email";
    }
    else{
      if(password===user.password){
        console.log("login successful")
        return "Login Successful"
      }
      else{
        console.log("Incorrect Password")
        return "Incorrect Passowrd"
      }
    }

    //return `This action returns a # auth`;
  }

//   update(id: number, updateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
}
