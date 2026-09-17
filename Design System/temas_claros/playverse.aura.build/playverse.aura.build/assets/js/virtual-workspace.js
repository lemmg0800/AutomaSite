(function initVirtualWorkspace() {
            // WebGL Canvas logic
            const canvas = document.getElementById('glcanvas-workspace');
            if (canvas) {
                const gl = canvas.getContext('webgl');
                if (gl) {
                    const resize = () => {
                        const parent = canvas.parentElement;
                        canvas.width = parent.clientWidth;
                        canvas.height = parent.clientHeight;
                        gl.viewport(0, 0, canvas.width, canvas.height);
                    };
                    window.addEventListener('resize', resize);
                    resize();

                    const vsSource = `
                        attribute vec2 position;
                        void main() {
                            gl_Position = vec4(position, 0.0, 1.0);
                        }
                    `;

                    const fsSource = `
                        precision mediump float;
                        uniform vec2 u_resolution;
                        uniform float u_time;

                        float aura(vec2 uv, vec2 pos, float size, float pulsePhase) {
                            float d = length(uv - pos);
                            float glow = exp(-d * (5.0 / size));
                            float rings = sin(d * 40.0 - u_time * 0.5) * 0.5 + 0.5;
                            glow *= mix(0.8, 1.0, rings * 0.2);
                            float pulse = sin(u_time * 0.8 + pulsePhase) * 0.1 + 0.9;
                            return glow * pulse;
                        }

                        void main() {
                            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                            float aspect = u_resolution.x / u_resolution.y;
                            uv.x *= aspect;

                            vec4 color = vec4(0.0);
                            vec3 auraColor = vec3(0.91, 0.30, 0.53); 

                            vec2 p1 = vec2(0.2 * aspect, 0.6);
                            vec2 p2 = vec2(0.25 * aspect, 0.4);
                            vec2 p3 = vec2(0.85 * aspect, 0.65);
                            vec2 p4 = vec2(0.8 * aspect, 0.3);

                            float intensity = 0.0;
                            intensity += aura(uv, p1, 0.3, 0.0);
                            intensity += aura(uv, p2, 0.25, 2.0);
                            intensity += aura(uv, p3, 0.35, 1.0);
                            intensity += aura(uv, p4, 0.2, 3.0);

                            float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
                            intensity -= dither * 0.03;

                            color = vec4(auraColor, intensity * 0.35);
                            gl_FragColor = color;
                        }
                    `;

                    const compileShader = (type, source) => {
                        const shader = gl.createShader(type);
                        gl.shaderSource(shader, source);
                        gl.compileShader(shader);
                        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
                        return shader;
                    };

                    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
                    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

                    if (vertexShader && fragmentShader) {
                        const program = gl.createProgram();
                        gl.attachShader(program, vertexShader);
                        gl.attachShader(program, fragmentShader);
                        gl.linkProgram(program);
                        gl.useProgram(program);

                        const buffer = gl.createBuffer();
                        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                            -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                            -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
                        ]), gl.STATIC_DRAW);

                        const positionLocation = gl.getAttribLocation(program, "position");
                        gl.enableVertexAttribArray(positionLocation);
                        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                        const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
                        const timeLocation = gl.getUniformLocation(program, "u_time");

                        const render = (time) => {
                            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                            gl.uniform1f(timeLocation, time * 0.001);
                            
                            gl.enable(gl.BLEND);
                            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                            gl.clearColor(0.0, 0.0, 0.0, 0.0);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                            
                            gl.drawArrays(gl.TRIANGLES, 0, 6);
                            requestAnimationFrame(render);
                        };
                        requestAnimationFrame(render);
                    }
                }
            }

            // GSAP Logic
            const initGsap = () => {
                if (typeof gsap === 'undefined') {
                    setTimeout(initGsap, 50);
                    return;
                }
                
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                
                tl.to("#structural-grid-workspace", { opacity: 1, duration: 1 })
                  .to("#glcanvas-workspace", { opacity: 1, duration: 2 }, "-=0.5")
                  .fromTo("#hero-text-workspace .text-reveal", 
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
                    "-=1.5"
                  )
                  .fromTo("#main-card-workspace",
                    { scale: 0.95, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 1, ease.to("#arch-walls-workspace", { opacity: 1, duration: 1 }, "-=0.5")
                  .fromTo("#arch-walls-workspace div",
                    { scaleX: 0, transformOrigin: "left center" },
                    { scaleX: 1, duration: 1.5, stagger: 0.1, ease: "power2.inOut" },
                    "-=1"
                  )
                  .to("#room-labels-workspace .room-node", 
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" },
                    "-=0.8"
                  )
                  .fromTo("#bottom-content-workspace",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.4"
                  );
            };
            
            initGsap();
        })();
