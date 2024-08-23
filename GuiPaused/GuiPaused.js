/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "../cd.js";
export default class GuiPaused extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BG", "./GuiPaused/costumes/BG.svg", {
        x: 141.80902382209905,
        y: 177.74657340376555,
      }),
      new Costume("BTN BACK", "./GuiPaused/costumes/BTN BACK.png", {
        x: 77,
        y: 35,
      }),
      new Costume("BTN MENU", "./GuiPaused/costumes/BTN MENU.png", {
        x: 110,
        y: 35,
      }),
      new Costume("BTN SETTINGS", "./GuiPaused/costumes/BTN SETTINGS.png", {
        x: 110,
        y: 35,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiPaused/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clear clones" },
        this.whenIReceiveClearClones
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "p" }, this.whenKeyPPressed),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CLOSE UI" },
        this.whenIReceiveCloseUi
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CLOSE UI" },
        this.whenIReceiveCloseUi2
      ),
    ];

    this.vars.cloneIndex = 3;
  }

  *createPausedMenu() {
    this.vars.cloneIndex = 0;
    this.moveAhead();
    this.goto(0, 100);
    this.costume = "BG";
    this.goto(-80, -130);
    this.costumeNumber++;
    this.vars.cloneIndex++;
    this.createClone();
    this.costumeNumber++;
    this.goto(45, -130);
    this.vars.cloneIndex++;
    this.createClone();
    this.costumeNumber++;
    this.goto(-65, -65);
    this.vars.cloneIndex++;
    this.createClone();
    this.goto(0, 0);
    this.costume = "BG";
    this.moveBehind(3);
  }

  *whenIReceiveClearClones() {
    this.deleteThisClone();
  }

  *whenKeyPPressed() {
    if (this.toNumber(this.stage.vars.paused) === 0) {
      while (!!this.keyPressed("p")) {
        yield;
      }
      this.stage.vars.paused = 1 - this.toNumber(this.stage.vars.paused);
      this.visible = true;
      yield* this.createPausedMenu();
    } else {
      this.visible = false;
      yield* this.broadcastAndWait("Clear clones");
      while (!!this.keyPressed("p")) {
        yield;
      }
      this.stage.vars.paused = 1 - this.toNumber(this.stage.vars.paused);
    }
  }

  *startAsClone() {
    this.size = 125;
    while (true) {
      if (this.touching("mouse")) {
        this.size += (105 - this.size) * 0.2;
        if (this.mouse.down) {
          if (this.toNumber(this.vars.cloneIndex) === 3) {
            yield* this.broadcastAndWait("settings");
          }
          if (this.toNumber(this.vars.cloneIndex) === 1) {
            yield* this.broadcastAndWait("CLOSE UI");
          }
        }
      } else {
        this.size += (100 - this.size) * 0.2;
      }
      yield;
    }
  }

  *whenIReceiveCloseUi() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveCloseUi2() {
    this.stage.vars.paused = 0;
    this.visible = false;
    this.deleteThisClone();
  }
}
