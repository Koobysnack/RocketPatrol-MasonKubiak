class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio("sfx_select", "./assets/blip_select12.wav");
        this.load.audio("sfx_explosion", "./assets/explosion38.wav");
        this.load.audio("sfx_rocket", "./assets/rocket_shot.wav");
    }

    create() {
        // menu text config
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#F3B141",
            color: "#843605",
            align: "right",
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        };

        // menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding,
                      "Rocket Patrol", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, "Use ←→ arrows to move and (F) to fire", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#00FF00";
        menuConfig.color = "#000";
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding,
                      "Press ← for Novice and → for Expert", menuConfig).setOrigin(0.5);
        
        // set keycodes
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        // novice
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            };
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }

        // expert
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            game.settings = { 
                spaceshipSpeed: 4,
                gameTimer: 45000
            };
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
    }
}