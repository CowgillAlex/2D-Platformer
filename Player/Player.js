/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "../cd.js";
import isKeyDown from "../keyboard.js";
import State from "../state.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("run-01", "./Player/costumes/tile024.png", {
        x: 34.838462762860075,
        y: 60.39999999999999,
      }),
      new Costume("run-02", "./Player/costumes/tile025.png", {
        x: 34.95855939065541,
        y: 59.8,
      }),
      new Costume("run-03", "./Player/costumes/tile026.png", {
        x: 34.68023764314236,
        y: 58.499999999999986,
      }),
      new Costume("run-04", "./Player/costumes/tile027.png", {
        x: 35.80426822129397,
        y: 58.09999999999998,
      }),
      new Costume("run-05", "./Player/costumes/tile028.png", {
        x: 36.16960170432537,
        y: 56.89999999999999,
      }),
      new Costume("run-06", "./Player/costumes/tile029.png", {
        x: 36.3744179241063,
        y: 57.39999999999999,
      }),
      new Costume("run-07", "./Player/costumes/tile030.png", {
        x: 36.12853442979474,
        y: 58.39999999999999,
      }),
      new Costume("run-08", "./Player/costumes/tile031", {
        x: 35.215224449751986,
        y: 59.39999999999999,
      }),
      new Costume("run-09", "./Player/costumes/run-09.svg", {
        x: 34.838462762860075,
        y: 60.39999999999999,
      }),
      new Costume("run-10", "./Player/costumes/run-10.svg", {
        x: 34.95855939065541,
        y: 59.8,
      }),
      new Costume("run-11", "./Player/costumes/run-11.svg", {
        x: 34.68023764314236,
        y: 58.499999999999986,
      }),
      new Costume("run-12", "./Player/costumes/run-12.svg", {
        x: 35.80426822129397,
        y: 58.09999999999998,
      }),
      new Costume("run-13", "./Player/costumes/run-13.svg", {
        x: 36.16960170432537,
        y: 56.89999999999999,
      }),
      new Costume("run-14", "./Player/costumes/run-14.svg", {
        x: 36.3744179241063,
        y: 57.39999999999999,
      }),
      new Costume("run-15", "./Player/costumes/run-15.svg", {
        x: 36.12853442979474,
        y: 58.39999999999999,
      }),
      new Costume("run-16", "./Player/costumes/run-16.svg", {
        x: 35.215224449751986,
        y: 59.39999999999999,
      }),
      new Costume("Jump01", "./Player/costumes/tile010.png", {
        x: 42.18599999999998,
        y: 61.210170000000005,
      }),
      new Costume("run_j2", "./Player/costumes/tile007.png", {
        x: 35.03539821959376,
        y: 58.7,
      }),
      new Costume("HangOn01", "./Player/costumes/HangOn01.svg", {
        x: 40.67400094604491,
        y: 58.784275054931626,
      }),
      new Costume("hitbox", "./Player/costumes/hitbox.svg", {
        x: 12.196195000000017,
        y: 33.72688609065156,
      }),
      new Costume("hitbox v2", "./Player/costumes/hitbox v2.svg", {
        x: 15.618991081080907,
        y: 31.18195459459463,
      }),
      new Costume(
        "hitbox wallslide",
        "./Player/costumes/hitbox wallslide.svg",
        { x: -0.07047000000000025, y: 4.713430000000017 }
      ),
      new Costume("hit angle 0", "./Player/costumes/hit angle 0.svg", {
        x: 18.641248969153196,
        y: -21.757611863393123,
      }),
      new Costume("hit angle 1", "./Player/costumes/hit angle 1.svg", {
        x: 10.951410000000038,
        y: -14.468719999999962,
      }),
      new Costume("hit angle 4", "./Player/costumes/hit angle 4.svg", {
        x: 12.396164999999996,
        y: -19.88656999999995,
      }),
      new Costume("hit angle 2", "./Player/costumes/hit angle 2.svg", {
        x: 7.096165000000042,
        y: -24.13656999999995,
      }),
      new Costume("hit angle 3", "./Player/costumes/hit angle 3.svg", {
        x: 21.096205000000026,
        y: -24.136570000000006,
      }),
      new Costume("Player-Blue-Stand", "./Player/costumes/Player-Blue-Stand.png", {
        x: 40,
        y: 50,
      }),
      new Costume("stand2", "./Player/costumes/stand2.svg", {
        x: 41.998999999999995,
        y: 58,
      }),
      new Costume("stand3", "./Player/costumes/stand3.svg", {
        x: 41.998999999999995,
        y: 58.00000000000003,
      }),
      new Costume("stand4", "./Player/costumes/stand4.svg", {
        x: 41.998999999999995,
        y: 58.00000000000006,
      }),
      new Costume("stand5", "./Player/costumes/stand5.svg", {
        x: 41.998999999999995,
        y: 58.000000000000014,
      }),
      new Costume("Guy", "./Player/costumes/Guy.svg", {
        x: 18.65632926288879,
        y: 18.656329262888676,
      }),
      
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "TICK - Player" },
        this.whenIReceiveTickPlayer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "GAME LOOP" },
        this.whenIReceiveGameLoop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "TICK: Last" },
        this.whenIReceiveTickLast
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "TICK: first" },
        this.whenIReceiveTickFirst
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "begin game" },
        this.whenIReceiveBeginGame
      ),
    ];

    this.vars.speedY = -1.5737695567690295;
    this.vars.speedX = 0;
    this.vars.lastValue = -68.42240442536746;
    this.vars.falling = 0;
    this.vars.touching = 1;
    this.vars.temp = 0;
    this.vars.distance = 106;
    this.vars.frame = 0;
    this.vars.jumping = 0;
    this.vars.wallSlide = 0;
    this.vars.longJump = 0;
  }

  *moveInSteps(steps) {
    this.vars.falling++;
    for (let i = 0; i < this.toNumber(steps); i++) {
      this.vars.lastValue = this.x;
      this.x += this.toNumber(this.vars.speedX) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.warp(this.collideXSlopeWall)();
      }
      this.vars.lastValue = this.y;
      this.y += this.toNumber(this.vars.speedY) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.warp(this.collideYCeilingFloor)();
      }
    }
  }

  *checkTouchingSolid() {
    this.size = 5
    if (this.touching(this.sprites["Level"].andClones())) {
      this.vars.touching = 1;
    } else {
      this.vars.touching = 0;
    }
    this.size = 250
  }

  *whenIReceiveTickPlayer() {
    yield* this.controlsUpDown();
    yield* this.controlsLeftRight();
    yield* this.moveInSteps(
      Math.abs(this.toNumber(this.vars.speedX)) +
        Math.abs(this.toNumber(this.vars.speedY))
    );
    yield* this.setCostume();
  }

  *controlsUpDown() {
    if (this.keyPressed("up arrow")) {
      if (
        this.compare(this.vars.wallSlide, 0) > 0 &&
        this.toNumber(this.vars.jumping) === 0
      ) {
        this.vars.jumping = 1;
        this.vars.falling = 3;
        this.vars.wallSlide = 0;
        this.direction += 180;
        this.vars.speedX = (this.direction / 90) * 7;
        this.vars.longJump = 12;
      }
      if (
        this.toNumber(this.vars.jumping) === 0 &&
        this.compare(this.vars.falling, 3) < 0
      ) {
        this.vars.jumping = 1;
        this.vars.falling = 3;
      }
      if (
        this.compare(this.vars.jumping, this.stage.vars.jumpDuration) < 0 &&
        this.compare(this.vars.jumping, 0) > 0
      ) {
        this.vars.jumping++;
        this.vars.speedY = this.stage.vars.jumpForce;
      }
    } else {
      this.vars.jumping = 0;
    }
    this.vars.speedY += this.toNumber(this.stage.vars.gravity);
    if (this.compare(this.vars.wallSlide, 0) > 0) {
      this.warp(this.checkCanWallSlide)();
      if (this.compare(this.vars.speedY, 0) < 0) {
        this.vars.speedY = this.toNumber(this.vars.speedY) * 0.6;
      }
    }
  }

  *controlsLeftRight() {
    if (this.compare(this.vars.longJump, 0) > 0) {
      this.vars.longJump--;
      return;
    }
    this.stage.vars.keyX =
      this.toNumber(this.keyPressed("right arrow")) -
      this.toNumber(this.keyPressed("left arrow"));
    if (this.toNumber(this.stage.vars.keyX) === 0) {
      if (
        this.compare(this.vars.falling, 2) > 0 &&
        this.compare(this.vars.wallSlide, 1) < 0
      ) {
        this.vars.speedX = this.toNumber(this.vars.speedX) * 0.98;
      }
      if (this.compare(Math.abs(this.toNumber(this.vars.speedX)), 1) < 0) {
        this.vars.frame = 0;
        this.vars.speedX = 0;
      } else {
        this.vars.frame += 0.5;
      }
    } else {
      this.vars.speedX +=
        this.toNumber(this.stage.vars.keyX) *
        this.toNumber(this.stage.vars.acceleration);
      this.direction = this.toNumber(this.stage.vars.keyX) * 90;
      this.vars.frame++;
    }
    this.vars.speedX =
      this.toNumber(this.vars.speedX) *
      this.toNumber(this.stage.vars.resistance);
  }

  *resetAndBegin() {
    this.stage.vars.scene = 0;
    this.vars.speedX = 0;
    this.vars.speedY = 0;
    this.vars.falling = 99;
    this.vars.wallSlide = 0;
    this.vars.jumping = 0;
    this.vars.longJump = 0;
    this.goto(-125, 55);
    this.broadcast("Change: Scene");
    this.broadcast("GAME LOOP");
  }

  *whenIReceiveGameLoop() {
    yield* this.fixCollisionInDir(0);
    while (true) {
      if (this.toNumber(this.stage.vars.paused) === 0) {
        if (isKeyDown("KeyC")){
          State.crash()
          throw new Error("Manual Crash")
        }
        if (!State.getState()){
        this.broadcast("TICK: first");
        this.broadcast("TICK - Player");
        this.broadcast("TICK: Last");
      }
      yield;
    }
    }
  }

  *whenIReceiveTickLast() {
    if (this.compare(this.x, 235) > 0) {
      yield* this.beginSceneGoto(
        this.toNumber(this.stage.vars.scene) + 1,
        -235,
        0
      );
    }
    if (this.compare(-235, this.x) > 0) {
      yield* this.beginSceneGoto(
        this.toNumber(this.stage.vars.scene) + -1,
        235,
        0
      );
    }
    if (this.compare(this.y, 180) > 0) {
      yield* this.beginSceneGoto(
        this.toNumber(this.stage.vars.scene) + 100,
        0,
        -165
      );
    }
    if (this.compare(-180, this.y) > 0) {
      yield* this.beginSceneGoto(
        this.toNumber(this.stage.vars.scene) + -100,
        0,
        165
      );
    }
  }

  *beginSceneGoto(_, x, y) {
    this.stage.vars.scene = _;
    if (this.compare(x, "") > 0) {
      this.x = this.toNumber(x);
    }
    if (this.compare(y, "") > 0) {
      this.y = this.toNumber(y);
    }
    this.broadcast("Change: Scene");
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0);
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    if (this.compare(x, "") > 0) {
      this.warp(this.fixCollisionInDir)(0);
    } else {
      this.warp(this.fixCollisionInDir)(90);
    }
    this.broadcast("GAME LOOP");
  }

  *fixCollisionInDir(dir) {
    this.vars.temp = this.direction;
    this.vars.distance = 1;
    this.direction = this.toNumber(dir);
    
    for (let i = 0; i < 128; i++) {
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 1) < 0) {
        this.direction = this.toNumber(this.vars.temp);
        return;
      }
      this.move(this.toNumber(this.vars.distance));
      this.direction += 180;
      this.vars.distance++;
    }
  }

  *whenIReceiveTickFirst() {
    
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *setCostume() {
    this.size = 250
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    if (this.compare(this.vars.wallSlide, 0) > 0) {
      this.costume = "run-04";
      return;
    }
    if (this.compare(this.vars.falling, 1) > 0) {
      if (this.compare(this.vars.speedY, 0) > 0) {
        this.costume = "Jump01";
      } else {
        this.costume = "run_j2";
      }
      return;
    }
    if (this.compare(this.vars.frame, 0) > 0) {
      this.costume = 1 + Math.floor(this.toNumber(this.vars.frame) % 7);
    } else {
      this.costume = "hit angle 0";
      for (let i = 0; i < 5; i++) {
        this.warp(this.checkTouchingSolid)();
        if (this.compare(this.vars.touching, 1) < 0) {
          this.costume = 20 + (this.costumeNumber + 5);
        }
      }
      this.costume = "Player-Blue-Stand";
    }
  }

  *collideXSlopeWall() {
    this.warp(this.checkCanWallSlide)();
    this.y += 1;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(this.vars.touching, 0) > 0) {
      this.y += 1;
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.y -= 2;
        this.x = this.toNumber(this.vars.lastValue);
        this.vars.speedX = 0;
        return;
      }
      this.vars.speedX = this.toNumber(this.vars.speedX) * 0.8;
    }
    this.vars.speedX = this.toNumber(this.vars.speedX) * 0.95;
    this.warp(this.slip)();
  }

  *collideYCeilingFloor() {
    this.y = this.toNumber(this.vars.lastValue);
    if (this.compare(this.vars.speedY, 0) > 0) {
      this.vars.speedY = 0;
      return;
    }
    if (this.compare(this.vars.falling, 0) > 0) {
      this.vars.falling = 0;
      this.warp(this.slip)();
    }
    this.vars.speedY = this.toNumber(this.vars.speedY) * 0.8;
  }

  *slip() {
    this.y -= 2;
    this.x += 1;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(1, this.vars.touching) > 0) {
      this.vars.falling = 9;
      this.vars.speedX++;
      return;
    }
    this.x -= 2;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(1, this.vars.touching) > 0) {
      this.vars.falling = 9;
      this.vars.speedX--;
      return;
    }
    this.y += 2;
    this.x += 1;
  }

  *checkCanWallSlide() {
    if (this.compare(this.vars.falling, 2) < 0) {
      this.vars.wallSlide = 0;
      return;
    }
    this.costume = "hitbox wallslide";
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.warp(this.checkTouchingSolid)();
    this.vars.wallSlide = this.vars.touching;
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *whenIReceiveBeginGame() {
    this.stage.vars.gravity = -1.5;
    this.stage.vars.jumpForce = 14;
    this.stage.vars.acceleration = 2;
    this.stage.vars.resistance = 0.8;
    this.stage.vars.jumpDuration = 3;
    yield* this.resetAndBegin();
  }
}
