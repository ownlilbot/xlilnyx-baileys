"use strict";

const chalk = require("chalk");
const gradient = require("gradient-string");
const ascii = `
 __  ___     ___ _     _   ___   ____  __
 \\ \\/ / |   |_ _| |   | \\ | \\ \\ / /\\ \\/ /
  \\  /| |    | || |   |  \\| |\\ V /  \\  / 
  /  \\| |___ | || |___| |\\  | | |   /  \\ 
 /_/\\_\\_____|___|_____|_| \\_| |_|  /_/\\_\\
`;

const infoLines = [
  "DEVELOPER : XLILNYX",
  "THANKS TO : ALL PARTNER",
  "ALL INFO  : @allaboutmeyaw"
];

console.clear();
console.log(chalk.cyanBright("INITIALIZING PROJECT XLILNYX...\n"));

function draw(brightness) {
  const logo = ascii
    .split("\n")
    .map(line =>
      line
        .split("")
        .map(ch => {
          const [r, g, b] =
            gradient.rainbow.colors[
              Math.floor(Math.random() * gradient.rainbow.colors.length)
            ].rgb;
          return chalk.rgb(
            Math.floor(r * brightness),
            Math.floor(g * brightness),
            Math.floor(b * brightness)
          )(ch);
        })
        .join("")
    )
    .join("\n");

  console.log(logo);

  const coloredInfo = infoLines
    .map(text =>
      chalk.rgb(
        Math.floor(255 * brightness),
        Math.floor(200 * brightness),
        Math.floor(255 * brightness)
      )(text)
    )
    .join("\n");

  console.log("\n" + coloredInfo);
}

let brightness = 0;
const fadeIn = setInterval(() => {
  draw(brightness);
  brightness += 0.05;
  if (brightness >= 1) {
    clearInterval(fadeIn);
    startBreathing();
  }
}, 100);

function startBreathing() {
  let dir = -0.03;
  let bright = 1;
  setInterval(() => {
    draw(bright);
    bright += dir;
    if (bright <= 0.3 || bright >= 1) dir *= -1;
  }, 80);
}

var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("./WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
