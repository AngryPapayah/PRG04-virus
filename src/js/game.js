import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { BadVirus } from './badvirus.js';
import { GoodVirus } from './goodvirus.js';

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        console.log("start de game!");

        for (let i = 0; i < 30; i++) {
        const badVirus = new BadVirus();
        // badVirus.graphics.use(Resources.BadVirus.toSprite());
        // badVirus.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        // badVirus.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);
        // badVirus.events.on("exitviewport", (e) => this.badVirusLeft(e));
        this.add(badVirus);
        }

        for (let i = 0; i < 30; i++) {
        // const goodVirus = new GoodVirus();
        const goodVirus = new GoodVirus();
        this.add(goodVirus);
        }

    }

    // badVirusLeft(e) {
    //     e.target.pos = new Vector(1350, 300);
    // }

}

new Game()
