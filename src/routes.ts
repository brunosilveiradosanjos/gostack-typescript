import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'bruanjo@gmail.com',
        password: 'JoNeiOh*ˆB@08s',
        techs: ['Node.js',
            'React.js',
            'React Native',
            { title: 'JS', experience: 10 },
        ]
    });
    return res.json({ message: 'Hello World' })
}