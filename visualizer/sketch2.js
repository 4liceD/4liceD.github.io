let song;
let scannerPos = 0;
let raindrops = [];
let distortionAmount = 0;
let backgroundShader;
let cyberpunkPalette;
let currentColorIndex = 0;
let fft;
let buffer;

const vertShader = `
attribute vec3 aPosition;

void main() {
vec4 positionVec4 = vec4(aPosition, 1.0);
gl_Position = positionVec4;
}`;

const fragShader = `
#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;
uniform float bass;

// Improved random
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Hex grid function
vec4 hexGrid(vec2 uv) {
    vec2 hex = vec2(1.0, 1.732);
    vec2 s = floor(uv * hex);
    vec2 f = fract(uv * hex);
    float d = random(s) * 0.8; // Random brightness
    return vec4(d * vec3(0.1, 0.5, 1.0), 1.0) * step(0.98, d); // Bright spots
}

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    
    // Dynamic warping
    float warpIntensity = 0.1 * (bass + 0.3);
    float distortion = sin(uv.y * 4.0 + time) * warpIntensity;
    vec2 warpedUv = uv + vec2(distortion, 0.0);
    
    // Base color with gradient
    vec3 color = mix(vec3(0.02, 0.05, 0.15), vec3(0.05, 0.1, 0.2), warpedUv.y);
    
    // Hex grid overlay
    vec2 hexUv = warpedUv * 20.0 + vec2(time * 0.2, 0.0);
    color += hexGrid(hexUv).rgb * 0.5;
    
    // Glitch lines
    float glitchLine = step(0.98, random(vec2(floor(warpedUv.y * 50.0), time)));
    float glitchOffset = (random(vec2(floor(warpedUv.y * 50.0), time)) - 0.5) * 0.1;
    color += vec3(1.0, 0.2, 0.5) * glitchLine * bass;
    warpedUv.x += glitchOffset * glitchLine;
    
    // Scanner with ghost effect
    float scannerSpeed = time * 0.5;
    for(float i = 0.0; i < 3.0; i++) {
        float scanPos = fract(scannerSpeed - i * 0.1);
        float scan = smoothstep(0.05, 0.0, abs(warpedUv.y - scanPos));
        color += vec3(0.2, 0.5, 1.0) * scan * (1.0 - i * 0.3);
    }
    
    // Edge highlights
    float edge = abs(sin(warpedUv.y * 50.0 + time));
    color += vec3(0.1, 0.3, 0.7) * edge * 0.2;
    
    // Pulse effect
    float pulse = sin(time * 2.0) * 0.5 + 0.5;
    color *= 0.8 + pulse * 0.2;
    
    // Bass reactive glow
    color += vec3(0.1, 0.2, 0.4) * bass * pulse;
    
    // Hot spots
    float hotSpot = step(0.98, random(floor(warpedUv * 10.0)));
    color += vec3(1.0, 0.2, 0.5) * hotSpot * pulse;

    gl_FragColor = vec4(color, 1.0);
}`;

// Rest of the code stays the same

function preload() {
  backgroundShader = createShader(vertShader, fragShader);
  song = loadSound('creative.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fft = new p5.FFT();

  cyberpunkPalette = [
    color(0, 50, 255),    // Neon blue
    color(255, 0, 255),   // Hot pink
    color(0, 255, 150)    // Acid green
  ];
  // Adding a play button because browsers are picky about autoplay
  let playButton = createButton('▶️');
  playButton.mousePressed(togglePlay);
}
 
function togglePlay() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  let spectrum = fft.analyze();
  let trebleValue = fft.getEnergy("treble");
  let highValue = fft.getEnergy("highMid");
  let bassValue = fft.getEnergy("bass");
  
  shader(backgroundShader);
  backgroundShader.setUniform('time', frameCount * 0.01);
backgroundShader.setUniform('resolution', [width, height]);
backgroundShader.setUniform('bass', map(bassValue, 0, 255, 0.0, 1.0));
quad(-1, -1, 1, -1, 1, 1, -1, 1);


  scannerPos = (scannerPos + 2) % height;
  
  // Color cycling on high treble

}