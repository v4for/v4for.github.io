
            //spanish stars

            // Obtener el canvas y el contexto de dibujo
            const canvas = document.getElementById("miCanvas");
            const ctx = canvas.getContext("2d");
            
            // Ajustar el tamaño del canvas para ocupar toda la ventana
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Número de estrellas
            const numStars = 500;
            const stars = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Crear estrellas con posiciones aleatorias y velocidades
            for (let i = 0; i < numStars; i++) {
              stars.push({
                x: Math.random() * canvas.width - centerX,
                y: Math.random() * canvas.height - centerY,
                z: Math.random() * canvas.width
              });
            }
            
            function draw() {
              // Limpiar el canvas
              ctx.clearRect(0, 0, canvas.width, canvas.height);
            
              // Dibujar cada estrella
              ctx.fillStyle = "white";
              for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                const x = centerX + (star.x / star.z) * canvas.width;
                const y = centerY + (star.y / star.z) * canvas.height;
            
                const size = 1.5 * (1 - star.z / canvas.width);
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2, false);
                ctx.fill();
            
                // Actualizar la posición de la estrella
                star.z -= 2;
            
                // Reposicionar la estrella al fondo
                if (star.z <= 0) {
                  star.z = canvas.width;
                  star.x = Math.random() * canvas.width - centerX;
                  star.y = Math.random() * canvas.height - centerY;
                }
              }
            
              // Llamar a la función de dibujo en el próximo frame
              requestAnimationFrame(draw);
            }
            
            // Iniciar la animación
            draw();
            
            // Ajustar el tamaño del canvas cuando cambie el tamaño de la ventana
            window.addEventListener("resize", () => {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            });
            