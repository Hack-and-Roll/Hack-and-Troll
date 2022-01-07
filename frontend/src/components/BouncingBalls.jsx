import React, { useRef, useEffect } from 'react';
import "../style/BouncingBalls.css";

function BouncingBalls(props) {
    const canvasRef = useRef(null)

    const draw = (canvas, c) => {
        // global variables
        const minDefaultR = 1;
        const maxDefaultR = 5;
        const maxEnlargedR = 32;
        const minSpeed = 0.5;
        const maxSpeed = 3;
        const colours = ['#191919', '#2D4263', '#C84B31', '#ECDBBA'];
        const disks = [];
        function Mouse() {
            this.x = undefined;
            this.y = undefined;

            this.distance = function(coorX, coorY) {
                return Math.sqrt(Math.pow(this.x - coorX, 2) + Math.pow(this.y - coorY, 2));
            }
        }
        var mouse = new Mouse();

        // disk object
        function Disk(x, y, dx, dy, r, colour) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.r = r;
            this.minR = r;
            this.colour = colour;

            this.draw = function() {
                c.beginPath();
                c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                c.fillStyle = this.colour;
                c.fill();
            }

            this.update = function() {
                if (this.x > canvas.width - this.r || this.x < this.r) {
                    this.dx = -this.dx; 
                } 

                if (this.y > canvas.height - this.r || this.y < this.r) {
                    this.dy = -this.dy; 
                } 

                this.x += this.dx;
                this.y += this.dy;

                // interactivity
                if (mouse.distance(this.x, this.y) < 80) {
                    this.r = Math.min(maxEnlargedR, this.r + 2);
                } else {
                    this.r = Math.max(this.minR, this.r - 1);
                }

                this.draw();
            }
        }

        // functions
        function rand(low, high) {
            return Math.random() * (high - low) + low;
        }

        function sign() {
            return Math.random() > 0.5 ? 1 : -1;
        }

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight; // weird value in chrome
            const numDisk = Math.floor((canvas.width + canvas.height) / 2);

            disks = [];
            for (var i = 0; i < numDisk; i++) {
                const r = rand(minDefaultR, maxDefaultR);
                const x = rand(r, canvas.width - r);
                const y = rand(r, canvas.height - r);
                const dx = rand(minSpeed, maxSpeed) * sign();
                const dy = rand(minSpeed, maxSpeed) * sign();
                const colour = colours[Math.floor(rand(0, colours.length))];

                disks[i] = new Disk(x, y, dx, dy, r, colour);
            }
        }

        function animate() {

            c.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < disks.length; i ++) {
                disks[i].update();
            }

            window.requestAnimationFrame(animate);
        }

        // main process
        window.addEventListener('mousemove',
            function(event) {
                mouse.x = event.x;
                mouse.y = event.y;
            });

        window.addEventListener('resize',
            function() {
                init();
            });
            
        init();
        animate();
    }

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    draw(canvas, c);
  }, [draw]);

  return <canvas ref={canvasRef} {...props}></canvas>;
}

export default BouncingBalls;