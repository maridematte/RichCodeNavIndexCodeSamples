import GameObject from './GameObject'

export default class Block extends GameObject {
    constructor(x: number, y: number) {
        console.log('ayyy Im constructing!');
        super(x, y);
    }

    interact(): void {
        console.log('You get a coin!');
        console.log('And you get a coin!');
        console.log('And YOU get a coin!');
        console.log('Everybody gets a coin!!');
    }
}