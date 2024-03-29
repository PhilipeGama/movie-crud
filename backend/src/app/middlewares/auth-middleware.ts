import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const Auth = (request: Request, response: Response, next: NextFunction) => {
	try {
		const { authorization } = request.headers;
		if (typeof authorization === 'undefined') {
			return response.status(401).json({
				status: 'fail',
				data: {
					title: 'Você não está autorizado a acessar essa página.',
				},
			});
		}
		jwt.verify(authorization, 'secret_key');

		return next();
	} catch (error) {
		return response.status(401).json({
			status: 'fail',
			data: {
				title: 'Você não está autorizado a acessar essa página.',
			},
		});
	}
};

export default Auth;
