document.addEventListener('mousemove', (event) => {
    createFlower(event.clientX, event.clientY);
  });
  
  function createFlower(x, y) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
  
    // Randomly determine flower size, shape, and color
    const size = Math.random() * 30 + 10; // Between 10px and 40px
    const petalCount = Math.floor(Math.random() * 5) + 4; // Between 4 and 8
    const colors = ['#ff6f61', '#ffcc33', '#a8e6cf', '#dcedc1', '#ff8c94', '#88d8b0'];
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.left = `${x}px`;
    flower.style.top = `${y}px`;
    flower.style.background = `radial-gradient(circle, ${color}, transparent)`;
    flower.style.borderRadius = '50%';
  
    // Add petals
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.style.width = `${size / 2}px`;
      petal.style.height = `${size}px`;
      petal.style.background = color;
      petal.style.position = 'absolute';
      petal.style.top = '50%';
      petal.style.left = '50%';
      petal.style.transformOrigin = '0% 50%';
      petal.style.borderRadius = '50%';
      petal.style.transform = `rotate(${(360 / petalCount) * i}deg) translateX(${size / 2}px)`;
      flower.appendChild(petal);
    }
  
    document.body.appendChild(flower);
  
    // Remove flower after animation
    setTimeout(() => flower.remove(), 3000);
  }
  


  // document.addEventListener('mousemove', () => {
  //   const { innerWidth, innerHeight } = window;
  
  //   // Generate random x and y coordinates within the viewport
  //   const x = Math.random() * innerWidth;
  //   const y = Math.random() * innerHeight;
  
  //   createFlower(x, y);
  // });
  
  // function createFlower(x, y) {
  //   const flower = document.createElement('div');
  //   flower.classList.add('flower');
  
  //   // Randomly determine flower size, shape, and color
  //   const size = Math.random() * 30 + 10; // Between 10px and 40px
  //   const petalCount = Math.floor(Math.random() * 5) + 4; // Between 4 and 8
  //   const colors = ['#ff6f61', '#ffcc33', '#a8e6cf', '#dcedc1', '#ff8c94', '#88d8b0'];
  //   const color = colors[Math.floor(Math.random() * colors.length)];
  
  //   flower.style.width = `${size}px`;
  //   flower.style.height = `${size}px`;
  //   flower.style.left = `${x}px`;
  //   flower.style.top = `${y}px`;
  //   flower.style.background = `radial-gradient(circle, ${color}, transparent)`;
  //   flower.style.borderRadius = '50%';
  
  //   // Add petals
  //   for (let i = 0; i < petalCount; i++) {
  //     const petal = document.createElement('div');
  //     petal.style.width = `${size / 2}px`;
  //     petal.style.height = `${size}px`;
  //     petal.style.background = color;
  //     petal.style.position = 'absolute';
  //     petal.style.top = '50%';
  //     petal.style.left = '50%';
  //     petal.style.transformOrigin = '0% 50%';
  //     petal.style.borderRadius = '50%';
  //     petal.style.transform = `rotate(${(360 / petalCount) * i}deg) translateX(${size / 2}px)`;
  //     flower.appendChild(petal);
  //   }
  
  //   document.body.appendChild(flower);
  
  //   // Remove flower after animation
  //   setTimeout(() => flower.remove(), 3000);
  // }
  