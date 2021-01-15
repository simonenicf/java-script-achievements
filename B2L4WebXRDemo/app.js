// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-3.44428, 1.56763, -2.87316);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, 33.89962090671028, 0);

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf')
cuberoom.setPosition (-3.703, 0.049, -3,000)
cuberoom.setScale (0.33668, 0.567, 0.440)
cuberoom.setRotation(0, -36.95, 0)

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3.12798, 0.09486, 0.40257);

// create some text
const testText = new Text('Welcome');
testText.setRotation(39.579, 0, 0)
testText.setPosition(-4.169, 6.603, -5);
testText.setFontsize(12);
testText.setColor("purple")

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-3.61366, 1.96751, -5);

const image2 = new XRImage('assets/images/lisse-049.jpg')
image2.setPosition(-3.72659, 0.57581, -5);

// create a 360 image
const image360 = new Sky('assets/360_night.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));