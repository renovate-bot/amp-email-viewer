import {Viewer} from '@ampproject/email-viewer/dist/viewer.mjs';

const viewer = new Viewer(document.querySelector('#hello'));
viewer.render();
