window.addEventListener("load", ()=>{
    const musics = document.querySelectorAll(".music");
    const drums = document.querySelectorAll(".drums div");
    const visuals = document.querySelector(".visuals");
    const colors = ["#D620DC", "#FF06A6", "#FF5775", "#FF9652", "#FFCB4C", "#F9F871"];

    drums.forEach((pad, index)=>{
        pad.addEventListener("click", ()=>{
            musics[index].currentTime = 0;
            musics[index].play();
            createBalls(index);
        });
    });

    const createBalls = index => {
        const ball = document.createElement("div");
        visuals.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = `jump 1s ease`;
        ball.addEventListener("animationend", ()=>{
            visuals.removeChild(this);
        });
    };
});