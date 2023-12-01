import 'phaser';
import Phaser from 'phaser';
import GameScene from './scene/GameScene';
import InputClass from './scene/InputClass';

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
        // GameScene,
        InputClass
    ]
}
let game = new Phaser.Game(config);