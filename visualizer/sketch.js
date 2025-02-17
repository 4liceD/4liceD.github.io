let song;
let fft;
let glitchText = "AliceD";
let raindrops = [];
let glitchOffset = 0;
let glitchChance = 0.3; // How often drops glitch
let glitchColors = [
  [0, 255, 70],    // Matrix green
  [255, 0, 255],   // Hot pink
  [0, 255, 255],   // Cyan
  [255, 0, 0]      // Red
];
let gridSize = 30;
let scannerPos = 0;
let beatDetector;
let bpm = 0;
let beatConfidence = 0;
let peakDetect;
let lastBeatTime = 0;
let glitchLines = [];
let distortionAmount = 0;
let smoothedGain = 1.0;
let targetGain = 1.0;
const GAIN_SMOOTH = 0.99;
const TARGET_LEVEL = 120;
const MIN_GAIN = 0.5;
const MAX_GAIN = 2.5;

function preload() {
  // We'll upload your MP3 here!
  song = loadSound('creative.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  background(0);
  beatDetector = new p5.PeakDetect(20, 20000, 0.35);
  peakDetect = new p5.PeakDetect(40, 120, 0.7);
  // Initialize glitch lines
  for(let i = 0; i < 20; i++) {
  glitchLines.push({
  y: random(height),
  length: random(50, 200),
  speed: random(0.5, 2)
  });
  }
  
  // Adding a play button because browsers are picky about autoplay
 // let playButton = createButton('▶️');
    // playButton.mousePressed(togglePlay);
    
  //BPM Display
  textSize(16);
  textAlign(RIGHT);
}
function keyPressed(){
    if (keyCode === 32) {
        togglePlay()
    }
}

function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}


function draw() {
  background(0, 0, 0, 25);
  let spectrum = fft.analyze();
  let avgLevel = 0;
  for(let i = 0; i < spectrum.length; i++) {
      avgLevel += spectrum[i];
  }
  avgLevel /= spectrum.length;
  if(avgLevel > 0) { // Prevent division by zero
      targetGain = TARGET_LEVEL / avgLevel;
      targetGain = constrain(targetGain, MIN_GAIN, MAX_GAIN);
  }
  smoothedGain = GAIN_SMOOTH * smoothedGain + (1.0 - GAIN_SMOOTH) * targetGain;
  let bassValue = fft.getEnergy("bass") *smoothedGain;
  let midValue = fft.getEnergy("mid") * smoothedGain;
  let highValue = fft.getEnergy("treble") * smoothedGain;
  let barWidth = width / 64;
  // Update beat detection
  beatDetector.update(fft);
  peakDetect.update(fft)
  distortionAmount = map(bassValue, 0, 255, 0, 15);
  if (highValue > 250) {
// Invert everything!
filter(INVERT);
}

  // Multiple color variations based on frequencies
  let cyberpunkPalette = [
    color(bassValue, 50, 255),      // Neon blue
    color(255, midValue, 255),      // Hot pink
    color(highValue, 255, 150)      // Acid green
  ];
let currentColorIndex = 0;
  
  // Digital Rain
 if (random(1) < 0.1) {
raindrops.push({
x: random(width),
y: 0,
speed: random(5, 15),
char: String.fromCharCode(0x30A0 + random(96)),
glitching: false,
color: glitchColors[0],
size: 15
});
}


// Updated rain drawing
for (let i = raindrops.length - 1; i >= 0; i--) {
let raindrop = raindrops[i]; // Changed 'drop' to 'raindrop'

// Chance to glitch based on bass
if (random(1) < glitchChance && fft.getEnergy("bass") > 200) {
raindrop.glitching = true;
raindrop.char = String.fromCharCode(0x30A0 + random(96));
raindrop.color = random(glitchColors);
raindrop.x += random(-5, 5);
raindrop.size = random(10, 25);
}

// Draw the raindrop
textSize(raindrop.size);
if (raindrop.glitching) {
fill(...raindrop.color, 200);
text(raindrop.char, raindrop.x + random(-2, 2), raindrop.y + random(-2, 2));
if (random(1) < 0.5) {
fill(255, 255, 255, 100);
text(raindrop.char, raindrop.x + random(-4, 4), raindrop.y);
}
} else {
fill(0, 255, 70, 200);
text(raindrop.char, raindrop.x, raindrop.y);
}

raindrop.glitching = false;
raindrop.y += raindrop.speed;
if (raindrop.y > height) raindrops.splice(i, 1);
}

  // Glitch Text Effect
 /* if (bassValue > 200) {
    glitchOffset = random(-10, 10);
  }
  
  push();
  textSize(50);
  textAlign(CENTER);
  // Glitch layers
  fill(255, 0, 0, 100);
  text(glitchText, width/2 + glitchOffset, height/2);
  fill(0, 255, 255, 100);
  text(glitchText, width/2 - glitchOffset, height/2);
  fill(255);
  text(glitchText, width/2, height/2);
  pop();
*/
 
  // Move scanner
if (peakDetect.isDetected) {
lastBeatPos = scannerPos;
scannerPos = (scannerPos + height/8) % height; // Jump on beat
} else {
// Smooth movement between beats
scannerPos = (scannerPos + 2) % height;
}

    // Use palette colors for scanner
    let currentColor = cyberpunkPalette[currentColorIndex];
    
    // Main scanner with current palette color
    stroke(currentColor, 30);
    strokeWeight(1);
    line(0, scannerPos, width, scannerPos);

    // Change color based on high treble hits
    if (midValue > 150) {
        let glowIntensity = map(midValue, 150, 255, 20, 40);
        // Cycle through colors on high treble
        currentColorIndex = (currentColorIndex + 1) % cyberpunkPalette.length;
        stroke(currentColor, glowIntensity);
        strokeWeight(2);
        line(0, scannerPos + 2, width, scannerPos + 2);
    }

// Vertical data corruption effect on high frequencies
if (midValue > 400) {
for(let i = 0; i < 5; i++) {
let x = random(width);
stroke(cyberpunkPalette[currentColorIndex], random(20, 40));
line(x, 0, x + random(-50, 50), height);
}
}
}