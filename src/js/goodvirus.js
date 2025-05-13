import { Actor, Vector } from "excalibur";
import { Resources } from './resources.js';

export class GoodVirus extends Actor {
    constructor() {
        super({
            width: Resources.BadVirus.width,
            height: Resources.BadVirus.height,

        });

        this.events.on("exitviewport", (e) => this.goodVirusToRandomPosition(e));
    }

    onInitialize(engine) {
        this.goodVirusToRandomPosition();
        this.graphics.use(Resources.GoodVirus.toSprite());

        this.pos = new Vector(
            Math.random() * engine.drawWidth,
            Math.random() * engine.drawHeight
        );

    }

    goodVirusToRandomPosition() {

        // this.pos = new Vector(Math.random() * 1280, Math.random() * 720);
        this.vel = new Vector(Math.random() * 100 - 50, Math.random() * 100 - 50);

    }
}