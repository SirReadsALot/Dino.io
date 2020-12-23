import Phaser from 'phaser'

new Phaser.Game()

const { Scene } = require("phaser");

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 500,
    backgroundColor: 0xffff77,
    scene: {
        preload:preload,
        create:create,
        update:update
    }
  }
  
  const game = new Phaser.Game(config)

function preload() {
    this.load.BaseURL("https://haaaatch.phaser.io");
    this.load.image('testplayer', "Beelzebufo_frog.png");
    this.load.image('map', 'BackgroundTile.png');
    this.load.audio('bgmusic', '')
}

var music;
function create() {
    this.add.sprite('testplayer');
    this.add.image(400, 500, 'map');
    music = add.audio('bgmusic')
    music.play();
    this.add.Scene
}

function update() {

}