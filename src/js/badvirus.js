import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class BadVirus extends Actor {
    constructor() {
        super({
            width: Resources.BadVirus.width,
            height: Resources.BadVirus.height,

        });

        this.events.on("exitviewport", (e) => this.badVirusToRandomPosition(e));
    }

    onInitialize(engine) {
        this.badVirusToRandomPosition();
        this.on("pointerdown", () => this.remove())
        this.graphics.use(Resources.BadVirus.toSprite());
        
        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight
        );

    }

    remove() {
        this.kill();
    }

    badVirusToRandomPosition() {

        // this.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        this.vel = new Vector(Math.random() * 200 - 50, Math.random() * 100 - 50);

    }
}