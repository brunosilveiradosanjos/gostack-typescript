import express from 'express';
import './routes'
import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld)

app.listen(3334);