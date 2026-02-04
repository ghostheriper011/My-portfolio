 const carousel = document.getElementById("carousel");
  const skills = carousel.querySelectorAll("span");
  const total = skills.length;
  const radius = 90;
  let angle = 0;

  // place skills in circle (X axis)
  skills.forEach((skill, i) => {
    const rotate = (360 / total) * i;
    skill.dataset.rotate = rotate;
  });

  function animate() {
    angle += 1.1; // speed

    skills.forEach((skill) => {
      const r = skill.dataset.rotate - angle;

      const z = Math.cos((r * Math.PI) / 180);
      const opacity = Math.max(0.2, z);
      const scale = 0.6 + z * 0.5;

      skill.style.transform =
        `translate(-50%, -50%) rotateX(${r}deg) translateZ(${radius}px) scale(${scale})`;

      skill.style.opacity = opacity;
      skill.style.filter = `blur(${(1 - z) * 2}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();