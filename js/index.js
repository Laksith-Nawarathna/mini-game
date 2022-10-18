const player = document.querySelector('#player');
const ground = document.querySelector('#ground');


let dx = 0;
let dy = 0;
let acceleration = 0.2;
let index = 1;

// setInterval(() => {
//     // player.style.backgroundImage = `url('../img/Idle (${index++}).png')`;
//     // if(index > 10) index = 1;
//     if ((player.offsetLeft + player.offsetWidth) > innerWidth) {
//         dx = 0;
//         player.style.left = `${innerWidth - player.offsetWidth}px`;
//     }
//     else if (player.offsetLeft < 0) {
//         dx = 0;
//         player.style.left = '0';
//     }
    
//     dy += acceleration;
//     if ((player.offsetTop + player.offsetHeight) > ground.offsetTop) {
//         dy = 0;
//         player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
//         acceleration = 0;
//     }
//     else if(player.offsetTop < 0){
//         dy = 0;
//         player.style.top = '0';
//     }
    
//     player.style.left = `${player.offsetLeft + dx}px`;
//     player.style.top = `${player.offsetTop + dy}px`;
// }, 20);



// setInterval(()=>{
//     if(dx!==0){

//         player.style.backgroundImage = `url(../img/Idle (${index++}).png)`;

//     }else if(speedy!==0){

//         player.style.backgroundImage = `url(../img/Jump (${index++}).png)`;

//     }else{
//         // index = 1;
//         player.style.backgroundImage = `url(../img/Run (${index++}).png)`;
//     }
//     if(index>9) index =1;
// },75);


const animate = () => {
    // player.style.backgroundImage = `url('../img/Idle (${index++}).png')`;
    // if(index > 10) index = 1;
    if ((player.offsetLeft + player.offsetWidth) > innerWidth) {
        dx = 0;
        player.style.left = `${innerWidth - player.offsetWidth}px`;
    }
    else if (player.offsetLeft < 0) {
        dx = 0;
        player.style.left = '0';
    }
    
    dy += acceleration;
    if ((player.offsetTop + player.offsetHeight) > ground.offsetTop) {
        dy = 0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
        acceleration = 0;
    }
    else if(player.offsetTop < 0){
        dy = 0;
        player.style.top = '0';
    }
    
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop + dy}px`;

    requestAnimationFrame(animate);
};

const draw = ()=>{
    if(dx!==0){

        player.style.backgroundImage = `url('img/Run (${index++}).png')`;

    }else if(dy!==0){

        player.style.backgroundImage = `url('img/Jump (${index++}).png')`;

    }else{
        // index = 1;
        player.style.backgroundImage = `url('img/Idle (${index++}).png')`;
    }
    if(index>10) index =1;

    requestAnimationFrame(draw);
};





addEventListener('keydown', (eventData) => {
    if (eventData.keyCode === 39) {
        index = 1;
        dx = 5;
        player.classList.remove('turn');
    }
    else if (eventData.keyCode === 37) {
        index = 1;
        dx = -5;
        player.classList.add('turn');
    }
    else if(eventData.keyCode === 40){
        // console.log('hi');
        dy = 10;
    }
    else if(eventData.keyCode === 38){
        // console.log('hi');
        dy = -10;
    }

    // console.log(eventData.keyCode);
    
  
});

// addEventListener('keypress', (key)=>{
//     if(key === ''){
//         dy = -20;
//         acceleration = 0.1;
//     }
//     console.log(key);
    
// });

addEventListener('keyup', (key) => {
    console.log(key);
    if (key == 'ArrowRight' || key == 'ArrowLeft') {
        dx = 0;
    }
    else if (key == 'ArrowUp' || key == 'ArrowDown') {
        dy = 0;
    }
});

requestAnimationFrame(draw);
requestAnimationFrame(animate);


/* theory */

// controlling refreshrate
// let j = 0;
// let t1 = 0;
// const interval = 1;

// function repaint(timestamp){
//     if(!t1) t1 = timestamp;
//     const diff = timestamp - t1;
//     if(diff >= (interval * 1000)){
//         t1 = timestamp;
//         console.log('Painted : ' + j++, timestamp);
//     }
//     requestAnimationFrame(repaint);
// }

// requestAnimationFrame(repaint);