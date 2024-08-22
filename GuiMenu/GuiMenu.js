/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GuiMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Background", "./GuiMenu/costumes/Background.svg", {
        x: 244.3259438748518,
        y: 186.34320883457343,
      }),
      new Costume("Play", "./GuiMenu/costumes/Play.svg", { x: 100, y: 24 }),
      new Costume("Settings", "./GuiMenu/costumes/Settings.svg", {
        x: 100,
        y: 23.5,
      }),
    ];

    this.sounds = [new Sound("pop", "./GuiMenu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Clear clones" },
        this.whenIReceiveClearClones
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
    ];

    this.vars.cloneIndex = 2;
  }

  *makeGuiMenu() {
    this.visible = true;
    this.goto(0, 60);
    this.costume = "Background";
    this.vars.cloneIndex = 0;
    for (let i = 0; i < 2; i++) {
      yield* this.makeAButton();
      yield;
    }
    this.moveBehind();
    this.goto(0, 0);
    this.costume = "Background";
  }

  *startAsClone() {
    this.size = 125;
    while (true) {
      if (this.touching("mouse")) {
        this.size += (105 - this.size) * 0.2;
        if (this.mouse.down) {
          if (this.toNumber(this.vars.cloneIndex) === 1) {
            this.broadcast("start");
          }
          if (this.toNumber(this.vars.cloneIndex) === 2) {
            this.broadcast("settings");
          }
        }
      } else {
        this.size += (100 - this.size) * 0.2;
      }
      yield;
    }
  }

  *whenIReceiveClearClones() {
    this.visible = false;
    this.deleteThisClone();
  }

  *makeAButton() {
    this.vars.cloneIndex++;
    this.y -= 60;
    this.costumeNumber++;
    this.createClone();
  }

  *whenIReceiveMainMenu() {
    yield* this.broadcastAndWait("Clear clones");
    yield* this.wait(0);
    yield* this.makeGuiMenu();
  }
}
