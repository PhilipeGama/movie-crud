import { IsNotEmpty } from 'class-validator';
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Gender {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ nullable: false, unique: true })
	@IsNotEmpty()
	public name: string;

	@CreateDateColumn({ name: 'created_at' })
	public createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	public updatedAt: Date;
}
