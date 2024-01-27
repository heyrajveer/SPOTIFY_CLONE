console.log('welcome to spotify');
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myrPogressBar=document.getElementById('myProgressBar');
let grif= document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName : "Warriyo - Mortals ",filepath:"1.mp3" ,    coverPath: "1.jpg"},
    {songName : "Cielo - Huma-Huma",filepath:"2.mp3" ,coverPath: "2.jpg"},
    {songName : "DEAF KEV - Invincible [NCS Release]-320k",filepath:"3.mp3" ,coverPath: "3.jpg"},
    {songName : "Different Heaven- My Heart",filepath:"4.mp3" ,coverPath: "4.jpg"},
    {songName : "Janji-Heroes-Tonight",filepath:"5.mp3" ,coverPath: "5.jpg"},
    {songName : "Rabba-Salam-e-Ishq",filepath:"6.mp3" ,coverPath: "6.jpg"}, 
]
songItem.forEach((element,i)=>{
    console.log(element,i)
   element.getElementByTagName("img")[0].src=songs[i].coverpath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterplay.addEventListener('click',()=>{ 
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        grif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        grif.style.opacity=0;
    }
    
   })
   //listen to event
 audioElement.addEventListener('timeupdate',()=>{
  //update seekbar
  progress=perseInt((audioElement.currentTime/audioElement.duration)*100)
 })
 myrPogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myrPogressBar.value *audioElement.duration/100;
 })
 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})