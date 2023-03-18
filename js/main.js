const typed = new Typed('.typed', 
{
    stringsElement: "#string",
    typeSpeed: 75,
    startDeley: 300,
    backSpeed: 75,
    smartBackspace: true,
    backDelay: 1500,
    showCursor: true,
});

const button = document.querySelector(".theme");

button.addEventListener('click', () => 
{
    document.body.classList.toggle('dark');
    button.classList.toggle('active');
});