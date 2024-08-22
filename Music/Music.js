/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Music extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Music/costumes/costume1.svg", { x: 0, y: 0 }),
    ];
/*
    this.sounds = [
      new Sound("Do You Believe", "./Music/sounds/Do You Believe.mp3"),
      new Sound(
        "Her Name Was Eva Smith",
        "./Music/sounds/Her Name Was Eva Smith.mp3"
      ),
      new Sound(
        "She Changed Her Name to Daisy Renton",
        "./Music/sounds/She Changed Her Name to Daisy Renton.mp3"
      ),
      new Sound(
        "The Birling Factory",
        "./Music/sounds/The Birling Factory.mp3"
      ),
      new Sound("All fake", "./Music/sounds/All fake.mp3"),
      new Sound("The Ring", "./Music/sounds/The Ring.mp3"),
      new Sound("A Place by the Sea", "./Music/sounds/A Place by the Sea.mp3"),
      new Sound("menu", "./Music/sounds/menu.mp3"),
      new Sound("Dismissed", "./Music/sounds/Dismissed.mp3"),
      new Sound(
        "You've Heard Our Decision",
        "./Music/sounds/You've Heard Our Decision.mp3"
      ),
    ];
*/

this.sounds = []
    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.playSoundUntilDone("menu");
    while (true) {
      yield* this.playSoundUntilDone(this.random(1, 10));
      yield;
    }
  }
}
