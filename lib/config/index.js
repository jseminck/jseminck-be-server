import configureExpress from './express';
import configureCors from './cors';

export default function configure(app) {
    configureExpress(app);
    configureCors(app);
}