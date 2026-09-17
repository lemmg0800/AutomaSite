// WebGL Image Reveal Setup
(function () {
  const vsSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fsSource = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform float uProgress;

    void main() {
      // 4 Column logic
      float cols = 4.0;
      float colIndex = floor(vUv.x * cols);

      // Stagger animation timing per column
      float stagger = 0.15;
      float delay = colIndex * stagger;

      // Map global progress (0 -> 1) to localized column progress
      float localProgress = clamp((uProgress * (1.0 + 3.0 * stagger) - delay), 0.0, 1.0);

      // Cubic Out Easing
      float f = localProgress - 1.0;
      float ease = f * f * f + 1.0;

      // Reveal Mask: WebGL loads image textures flipped vertically by default
      // So vUv.y = 1.0 is the top visual edge of the image.
      // We animate the bottom edge of our visible area downwards.
      if (vUv.y < 1.0 - ease) {
        discard;
      }

      gl_FragColor = texture2D(uImage, vUv);
    }
  `;

  function initWebGLImage(originalImg) {
    if (originalImg.dataset.webglInit) return;
    originalImg.dataset.webglInit = "true";

    // Preload image via JS to handle CORS cleanly before binding to WebGL
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Setting internal resolution to match image bounds
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Inherit all Tailwind classes and inline styles (e.g. object-fit, mix-blend, mask)
      canvas.className = originalImg.className;
      canvas.style.cssText = originalImg.style.cssText;

      originalImg.parentNode.insertBefore(canvas, originalImg);
      originalImg.style.display = 'none'; // Visually hide the original DOM element

      const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
      if (!gl) return;

      // Shader Compilation
      const compileShader = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };

      const program = gl.createProgram();
      gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
      gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
      gl.linkProgram(program);
      gl.useProgram(program);

      // Setup Full-Screen Quad Buffer
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,  1, -1, -1,  1,
        -1,  1,  1, -1,  1,  1
      ]), gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Setup Texture Layer
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      const uProgressLoc = gl.getUniformLocation(program, "uProgress");

      let startTime = null;
      const duration = 1200; // Animation duration in ms
      let animating = false;

      const render = (time) => {
        if (!startTime) startTime = time;
        let progress = (time - startTime) / duration;
        if (progress > 1.0) progress = 1.0;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(uProgressLoc, progress);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        if (progress < 1.0) {
          requestAnimationFrame(render);
        } else {
          animating = false;
        }
      };

      // Render initial empty state
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Intersection Observer to trigger when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!animating) {
              animating = true;
              startTime = null; // Reset timer
              requestAnimationFrame(render);
            }
            observer.unobserve(canvas);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(canvas);
    };

    img.src = originalImg.src;
  }

  const images = document.querySelectorAll('img');
  images.forEach(initWebGLImage);
})();
