import { Entity, Column, Index } from 'typeorm';
import { Base } from '../common/base.entity';

@Entity('users')
export class Users extends Base {
  @Column()
  email: string;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column('text')
  password: string;

  @Column({default: true})
  isActive: boolean;
}