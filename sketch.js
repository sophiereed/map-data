const key = 'pk.eyJ1Ijoic29waGllcmVlZDEzIiwiYSI6ImNrbTBzdzhqNDBhamYyd210eWlpdnA4eWIifQ.Zu6EotyMSKiQXohpacpszg';

const options = {
  lat: 39.329239,
  lng: -82.101257,
  zoom: 1,
  style: 'mapbox://styles/sophiereed13/ckmammim58prn17lfwoup2gro',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  meteorites = loadTable('Meteorite_Landings.csv', 'csv', 'header');
  img = createImg('https://www.usnews.com/dims4/USNEWS/bb996bf/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F8d%2F8f3c53319d560b2f4139af68c9a77c%2Fcollege-photo_28775.jpg');
  img.hide();
  
  
}


function draw() {

  
  clear();
  //noFill();
  stroke(0);
  strokeWeight(5);
  
 const zoom = myMap.zoom();
 
  //START ATHENS
  const athens = myMap.latLngToPixel(37.9838, 23.7275);
  ellipse(athens.x, athens.y, 20 * zoom, 20 * zoom);
  if (dist(athens.x, athens.y, mouseX, mouseY) < (zoom * 20) / 2) {

    textSize(32);

    text("Athens, Greece", athens.x, athens.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   //END ATHENS

    //START REYKJAVIK
  const reykjavik = myMap.latLngToPixel(64.1466, 21.9426);
  ellipse(reykjavik.x, reykjavik.y, 20 * zoom, 20 * zoom);
  if (dist(reykjavik.x, reykjavik.y, mouseX, mouseY) < (zoom * 20) / 2) {

    textSize(32);
 

    text("Reykjavik, Iceland", reykjavik.x, reykjavik.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   //END REYKJAVIK
  
   //START ROME
  const rome = myMap.latLngToPixel(41.9028, 12.4964);
  ellipse(rome.x, rome.y, 20 * zoom, 20 * zoom);
  if (dist(rome.x, rome.y, mouseX, mouseY) < (zoom * 20) / 2) {

    textSize(32);

    text("Rome, Italy", rome.x, rome.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   //END ROME
  
   //START ANCHORAGE
  const anchorage = myMap.latLngToPixel(61.2181, -149.9003);
  ellipse(anchorage.x, anchorage.y, 20 * zoom, 20 * zoom);
  if (dist(anchorage.x, anchorage.y, mouseX, mouseY) < (zoom * 20) / 2) {

    textSize(32);

    text("Anchorage, Alaska", anchorage.x, anchorage.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   //END ANCHORAGE
  
    //START TOKYO
  const tokyo = myMap.latLngToPixel(35.6762, 139.6503);
  ellipse(tokyo.x, tokyo.y, 20 * zoom, 20 * zoom);
  if (dist(tokyo.x, tokyo.y, mouseX, mouseY) < (zoom * 20) / 2) {

    textSize(32);

    text("Tokyo, Japan", tokyo.x, tokyo.y);

    fill(0, 100);
  } else {
    fill(255, 100);
  }
   //END TOKYO
  

  //for (let i = 0; i < meteorites.getRowCount(); i++) {
  // Get the lat/lng of each meteorite 
  //const latitude = Number(meteorites.getString(i, 'reclat'));
  //   const longitude = Number(meteorites.getString(i, 'reclong'));



  // const pos = myMap.latLngToPixel(latitude, longitude);

  // const place = meteorites.getString(i, 'name');

  //   let size = meteorites.getString(i, 'mass (g)');
  //  size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
  //  stroke(0);
  //   ellipse(pos.x, pos.y, size, size);

  // if (dist(pos.x, pos.y, mouseX, mouseY) < size) {
  //   textSize(32);
  //  text(place, pos.x, pos.y);
  //  }

  // }



}

$(window).bind('resize', function(e) {
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function() {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});