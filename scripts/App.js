'use strict';

import Rect from './Rect';
import Ball from './Ball';

// Constants
const CANVAS = document.getElementById('pong');
const CONTEXT = CANVAS.getContext('2d');
const BALL = new Ball();
console.log(BALL);

CONTEXT.fillStyle = '#000';
CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);