import 'phaser';
import Phaser from 'phaser';
import GameScene from './Scene/GameScene';

const config = {
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    width: 1280,
    height: 720,
    parent: 'content',
    backgroundColor: '#000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene
    ]
}
let game = new Phaser.Game(config);