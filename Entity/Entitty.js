/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Entitty extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Entitty/costumes/costume1.svg", {
        x: 21.74999999999997,
        y: 21.321429999999992,
      }),
      new Costume("costume2", "./Entitty/costumes/costume2.svg", {
        x: 21.75,
        y: 21.321429999999992,
      }),
    ];

    this.sounds = [new Sound("pop", "./Entitty/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Change: Scene" },
        this.whenIReceiveChangeScene
      ),
    ];

    this.vars.touching = 1;
    this.vars.falling = 112530;
    this.vars.lastValue = 7;
    this.vars.speedX = -1;
    this.vars.speedY = 0;
  }

  *whenIReceiveChangeScene() {
    this.size = 100;
    this.visible = false;
    if (
      this.toNumber(this.stage.vars.scene) === -99 &&
      this.toNumber(this.stage.vars.paused) === 0
    ) {
      this.visible = true;
      while (true) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Player"].y - this.y,
            this.sprites["Player"].x - this.x
          )
        );
        if (this.compare(this.direction, 175) > 0) {
          null;
        } else {
          yield* this.moveInSteps(1);
          if (this.compare(this.direction, 0) > 0) {
            this.vars.speedX = 1;
            this.costume = "costume2";
          } else {
            this.vars.speedX = -1;
            this.costume = "costume1";
          }
        }
        yield* this.checkKilled();
        yield;
      }
    } else {
      null;
    }
  }

  *checkTouchingSolid() {
    if (this.touching(this.sprites["Level"].andClones())) {
      this.vars.touching = 1;
    } else {
      this.vars.touching = 0;
    }
  }

  *moveInSteps(steps) {
    this.vars.falling++;
    for (let i = 0; i < this.toNumber(steps); i++) {
      this.vars.lastValue = this.x;
      this.x += this.toNumber(this.vars.speedX) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.x += 0 - this.toNumber(this.vars.speedX) / this.toNumber(steps);
      }
      this.vars.lastValue = this.y;
      this.y += this.toNumber(this.vars.speedY) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
    }
  }

  *checkKilled() {
    if (
      this.mouse.down &&
      this.toNumber(this.sprites["PlayerHand"].vars.hassword) === 1 &&
      this.touching("mouse") &&
      this.compare(
        Math.hypot(
          this.sprites["Player"].x - this.x,
          this.sprites["Player"].y - this.y
        ),
        50
      ) < 0
    ) {
      this.visible = false;
    }
  }
}
