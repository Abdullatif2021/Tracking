
export const loadImage = (url) => new Promise((imageLoaded) => {
  const image = new Image();
  image.onload = () => imageLoaded(image);
  image.src = url;
});

const canvasTintImage = (image, color) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width * devicePixelRatio;
  canvas.height = image.height * devicePixelRatio;
  canvas.style.width = `${image.width}px`;
  canvas.style.height = `${image.height}px`;

  const context = canvas.getContext('2d');

  context.save();
  context.fillStyle = color;
  context.globalAlpha = 1;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = 'destination-atop';
  context.globalAlpha = 1;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.restore();

  return canvas;
};

export const prepareIcon = (background, icon, color) => {
  const canvas = document.createElement('canvas');
  canvas.width = background.width * devicePixelRatio;
  canvas.height = background.height * devicePixelRatio;
  canvas.style.width = `${background.width}px`;
  canvas.style.height = `${background.height}px`;

  const context = canvas.getContext('2d');
  context.drawImage(background, 0, 0, canvas.width, canvas.height);

  if (icon) {
    const iconRatio = 0.5;
    const imageWidth = canvas.width * iconRatio;
    const imageHeight = canvas.height * iconRatio;
    context.drawImage(canvasTintImage(icon, color), (canvas.width - imageWidth) / 2, (canvas.height - imageHeight) / 2, imageWidth, imageHeight);
  }

  return context.getImageData(0, 0, canvas.width, canvas.height);
};

import directionSvg from '../images/direction.svg';
import backgroundSvg from '../images/background.svg';
import animalSvg from '../images/icon/animal.svg';
import bicycleSvg from '../images/icon/bicycle.svg';
import boatSvg from '../images/icon/boat.svg';
import busSvg from '../images/icon/bus.svg';
import carSvg from '../images/icon/car.svg';
import craneSvg from '../images/icon/crane.svg';
import defaultSvg from '../images/icon/default.svg';
import helicopterSvg from '../images/icon/helicopter.svg';
import motorcycleSvg from '../images/icon/motorcycle.svg';
import offroadSvg from '../images/icon/offroad.svg';
import personSvg from '../images/icon/person.svg';
import pickupSvg from '../images/icon/pickup.svg';
import planeSvg from '../images/icon/plane.svg';
import scooterSvg from '../images/icon/scooter.svg';
import shipSvg from '../images/icon/ship.svg';
import tractorSvg from '../images/icon/tractor.svg';
import trainSvg from '../images/icon/train.svg';
import tramSvg from '../images/icon/tram.svg';
import trolleybusSvg from '../images/icon/trolleybus.svg';
import truckSvg from '../images/icon/truck.svg';
import vanSvg from '../images/icon/van.svg';
import palette from '../../../../../_metronic/helpers/common/theme/palette';

export const mapIcons = {
  animal: animalSvg,
  bicycle: bicycleSvg,
  boat: boatSvg,
  bus: busSvg,
  car: carSvg,
  crane: craneSvg,
  default: defaultSvg,
  helicopter: helicopterSvg,
  motorcycle: motorcycleSvg,
  offroad: offroadSvg,
  person: personSvg,
  pickup: pickupSvg,
  plane: planeSvg,
  scooter: scooterSvg,
  ship: shipSvg,
  tractor: tractorSvg,
  train: trainSvg,
  tram: tramSvg,
  trolleybus: trolleybusSvg,
  truck: truckSvg,
  van: vanSvg,
};

export const mapIconKey = (category) => (mapIcons.hasOwnProperty(category) ? category : 'default');
export const mapImages = {};

export default async function prepareMapImages() {
  const background  = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(Object.keys(mapIcons).map(async (category) => {
    const results = [];
    ['primary', 'positive', 'negative', 'neutral'].forEach((color) => {
      results.push(loadImage(mapIcons[category]).then((icon) => {
        mapImages[`${category}-${color}`] = prepareIcon(background, icon, palette.colors[color]);
      }));
    });
    await Promise.all(results);
  }));
};