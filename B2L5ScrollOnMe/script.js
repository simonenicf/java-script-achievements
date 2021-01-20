const scrollme = document.getElementById("scroll");
const resetme = document.getElementById("reset");

let scale = 1;

resetme.addEventListener('click', () => {
    scrollme.style.transform = 'none';
})

scrollme.addEventListener('wheel', () => {
    event.preventDefault();
    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    scrollme.style.transform = `scale(${scale})`;
});
