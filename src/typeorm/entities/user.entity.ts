import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique:true })
  email: string;

  @Column()
  password: string;

  @Column()
  Createdat: Date;

//   @Column({ default: true })
//   istrue: boolean;
// 
}