// ============================
// A Small Surprise ❤️
// Premium Animations
// ============================

const loading = document.getElementById("loading");
const welcome = document.getElementById("welcome");
const photos = document.getElementById("photos");
const question = document.getElementById("question");
const success = document.getElementById("success");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finishBtn = document.getElementById("finish");

const music = document.getElementById("music");
const typewriter = document.getElementById("typewriter");


// Loading Screen
setTimeout(() => {
    loading.classList.add("hide");
    welcome.classList.remove("hide");
}, 2500);


// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["❤️","💖","💕","🌸"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,400);


// Start Button
startBtn.onclick=()=>{

    welcome.classList.add("hide");
    photos.classList.remove("hide");

    music.play().catch(()=>{});

}


// Continue Button
nextBtn.onclick=()=>{

    photos.classList.add("hide");
    question.classList.remove("hide");

}


// Maybe Button Dodge
let dodge=0;

function moveButton(){

    if(dodge>=3){

        noBtn.innerHTML="Tell me more 😊";
        noBtn.style.position="static";
        return;

    }

    dodge++;

    const x=Math.random()*250-120;

    const y=Math.random()*180-90;

    noBtn.style.transform=`translate(${x}px,${y}px)`;

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("click",moveButton);

noBtn.addEventListener("touchstart",moveButton);


// YES Click
yesBtn.onclick=()=>{

    question.classList.add("hide");

    success.classList.remove("hide");

    confetti({

        particleCount:180,

        spread:100,

        origin:{y:0.6}

    });

    launchConfetti();

    startTyping();

}


// Fireworks
function launchConfetti(){

    let duration=3500;

    let end=Date.now()+duration;

    (function frame(){

        confetti({

            particleCount:3,

            angle:60,

            spread:60,

            origin:{x:0}

        });

        confetti({

            particleCount:3,

            angle:120,

            spread:60,

            origin:{x:1}

        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}


// Typewriter
const message=`

Dear Gowri,

You just made my day ❤️

Thank you for opening this little surprise.

I don't know what tomorrow brings...

But I'd genuinely love to spend

one beautiful day with you.

Coffee ☕

Long Walk 🌸

Lots of Smiles 😊

And memories we'll remember.

See you in Bangalore ❤️

— Dinesh

`;

let i=0;

function startTyping(){

    typewriter.innerHTML="";

    typing();

}

function typing(){

    if(i<message.length){

        typewriter.innerHTML+=message.charAt(i);

        i++;

        setTimeout(typing,35);

    }

}


// Final Page
finishBtn.onclick=()=>{

    success.classList.add("hide");

    finalPage.classList.remove("hide");

}


// Background Sparkles
setInterval(()=>{

    document.body.animate(

        [

            {filter:"brightness(1)"},

            {filter:"brightness(1.04)"},

            {filter:"brightness(1)"}

        ],

        {

            duration:2500

        }

    );

},3000);


// Keyboard Secret ❤️
document.addEventListener("keydown",(e)=>{

    if(e.key==="g"){

        alert("❤️ Always keep smiling, Gowri ❤️");

    }

});