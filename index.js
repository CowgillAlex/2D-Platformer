import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import GuiMenu from "./GuiMenu/GuiMenu.js";
import GuiSettings from "./GuiSettings/GuiSettings.js";
import GuiPaused from "./GuiPaused/GuiPaused.js";
import GuiLoading from "./GuiLoading/GuiLoading.js";
import GuiFadeToBlack from "./GuiFadeToBlack/GuiFadeToBlack.js";
import GuiLoadBar from "./GuiLoadBar/GuiLoadBar.js";
import Level from "./Level/Level.js";
import Player from "./Player/Player.js";
import Music from "./Music/Music.js";
import Placeholders from "./Placeholders/Placeholders.js";
import Entitty from "./Entitty/Entitty.js";
import PlayerHand from "./PlayerHand/PlayerHand.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  GuiMenu: new GuiMenu({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 99.99999999999997,
    visible: false,
    layerOrder: 1,
  }),
  GuiSettings: new GuiSettings({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  GuiPaused: new GuiPaused({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12,
  }),
  GuiLoading: new GuiLoading({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  GuiFadeToBlack: new GuiFadeToBlack({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  GuiLoadBar: new GuiLoadBar({
    x: 118.8,
    y: -90,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 250,
    visible: false,
    layerOrder: 7,
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Player: new Player({
    x: 128.52669118869485,
    y: -68.42240442536746,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 28,
    size: 50,
    visible: true,
    layerOrder: 10,
  }),
  Music: new Music({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Placeholders: new Placeholders({
    x: 100,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 180,
    visible: false,
    layerOrder: 5,
  }),
  Entitty: new Entitty({
    x: 60.000000000000824,
    y: 7,
    direction: -89.80837603382571,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  PlayerHand: new PlayerHand({
    x: 138.52669118869485,
    y: -68.42240442536746,
    direction: 45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 11,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
