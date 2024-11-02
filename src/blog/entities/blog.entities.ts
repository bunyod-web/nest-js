import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Bu entity deb belgilash uchun
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  excerpt: string;

  @Column()
  description: string;
}
