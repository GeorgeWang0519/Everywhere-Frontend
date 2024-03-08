import React, { useEffect } from 'react';
import './BubbleCanvas.css';
const BubbleCanvas: React.FC = () => {
  useEffect(() => {
    const $canvas = document.getElementById('canvas') as HTMLDivElement | null;

    if (!$canvas) {
      return;
    }

    let angle = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const offsetX = event.pageX - window.innerWidth / 2;
      const offsetY = event.pageY - window.innerHeight / 2;
      angle = Math.atan2(offsetY, offsetX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const bubble = (startX: number, startY: number, startSize: number, duration: number) => {
      let animating = true;
      let finalSize = 10;

      const startTime = new Date();
      const bubbleElement = document.createElement("div");
      bubbleElement.classList.add("bubble");
      bubbleElement.style.width = `${startSize}px`;
      $canvas.appendChild(bubbleElement);

      setTimeout(() => {
        animating = false;
      }, duration);

      const loop = () => {
        const endTime = new Date();
        const timeDiff = endTime.getTime() - startTime.getTime();
        let progress = Math.min(timeDiff / duration, 1);
        let currentX = startX * (1 - progress);
        let currentY = startY * (1 - progress);
        let finalScale = finalSize / startSize;

        let scale = finalScale + (1 - progress) * (1 - finalScale);
        bubbleElement.style.transform = `translate3d(${currentX}px,${currentY}px,0) scale(${scale})`;
        bubbleElement.style.opacity = `${1.0 - 0.5 * (progress - 0.5)}`;

        if (animating) {
          requestAnimationFrame(loop);
        } else {
          bubbleElement.remove();
        }
      };

      requestAnimationFrame(loop);
    };

    const randomSpawn = () => {
      const angleVariance = Math.random() * 60 - 30;
      const newAngle = (angle * 180 / Math.PI + angleVariance) * Math.PI / 180;
      const distance = 400;
      const startX = Math.cos(newAngle) * distance;
      const startY = Math.sin(newAngle) * distance;
      const duration = Math.floor(Math.random() * 5) * 200;
      const size = Math.floor(Math.random() * 4) * 10 + 20;
      bubble(startX, startY, size, duration);
    };

    const intervalId = setInterval(randomSpawn, 30);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return <div id="canvas"></div>;
};

export default BubbleCanvas;
