import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
dotenv.config();

const config: ConnectionOptions = {
	type: 'mysql',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT,
	synchronize: true,
	logging: false,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: ['src/app/entity/*.ts'],
	migrationsTableName: 'migration',
	migrations: ['src/app/database/migration/*.ts'],
	cli: {
		migrationsDir: './src/app/database/migration',
	},
	ssl: false,
};

export default config;