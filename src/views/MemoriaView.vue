<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';
import $ from 'jquery';

function Reset(){
    LastTime.value = "";
    TimerRef.value = "00:00";
    Seconds.value = 0;
    Minutes.value = 0;
    Acertos.value = 0;
}


var LastTime = ref("");
var ActualState = ref("Start");
function StartGame(){
    Reset();
    ActualState.value = "Jogando";
    Timer();
}
function StopGame(){
    ActualState.value = "Fim";
    LastTime.value = TimerRef.value;
}
function RestartGame(){
    ActualState.value = "Start";
}



var numero = ref(1);

const Bichos = ['burro','cachorro','cervo','elefante','esquilo','girafa','guaxinim','leao','macaco','zebra'];

const BichosPath = {
    "burro":"burro.jpg",
    "cachorro":"cachorro.jpg",
    "cervo":"cervo.png",
    "elefante":"elefante.png",
    "esquilo":"esquilo.png",
    "girafa":"girafa.png",
    "guaxinim":"guaxinim.jpg",
    "leao":"leao.png",
    "macaco":"macaco.png",
    "zebra":"zebra.jpg"
};

var Width = 5;
var Height = 4;
var CardsArray = [];

for (let i=0;i<Height;i++){
    CardsArray.push(['x','x','x','x','x'])
}


function GeneratePosition(){
    let xpos = Math.floor(Math.random()*5);
    let ypos = Math.floor(Math.random()*4);
    if (CardsArray[ypos][xpos] == 'x'){
        return [ypos,xpos];
    }else{
        return GeneratePosition();
    }
}

function PlaceCard(BixoNome){

}

for (let i=0;i<Bichos.length;i++){
    let Position = GeneratePosition();
    CardsArray[Position[0]][Position[1]] = Bichos[i];
}
for (let i=0;i<Bichos.length;i++){
    let PositionMirror = GeneratePosition();
    CardsArray[PositionMirror[0]][PositionMirror[1]] = Bichos[i];
}


const IsTimerRunning = ref(false);
const TimerRef = ref("00:00");
const Seconds = ref(0);
const Minutes = ref(0);
function Timer(){
    setInterval(() => {
        Seconds.value += 1;
        if (Seconds.value == 60){
            Minutes.value += 1;
            Seconds.value = 0;
        }

        if (Minutes.value < 10 && Seconds.value < 10){
            TimerRef.value = `0${Minutes.value}:0${Seconds.value}`;
        }else if (Minutes.value < 10){
            TimerRef.value = `0${Minutes.value}:${Seconds.value}`;
        }else if (Seconds.value < 10){
            TimerRef.value = `${Minutes.value}:0${Seconds.value}`;
        }
    }, 1000);
    
}




console.log(CardsArray);

var Acertos = ref(0);
var ClickedOnce = false;
var ClickedList = [];
function ShowCard(e){
    console.log($(e.currentTarget).siblings()[0]);
    console.log(ClickedList);
    if (!ClickedOnce && $(e.currentTarget.nodeName) !== "img"){
        $(e.currentTarget).css("display","none");
        ClickedList.push($(e.currentTarget).siblings()[0]);
        ClickedOnce = !ClickedOnce;
    }else if (ClickedOnce){
        console.log($(e.currentTarget).siblings()[0].id);
        console.log(e.currentTarget.nodeName);
        $(e.currentTarget).css("display","none");
        let SecondDiv = $(e.currentTarget);
        let FirstDiv = ClickedList[0];
        if ($(e.currentTarget).siblings()[0].id == ClickedList[0].id){
            Acertos.value += 1;
        }else{
            setTimeout(function() {
                SecondDiv.css("display","block");
                $(FirstDiv).siblings().eq(0).css("display","block");
            },600);
        }
        ClickedList = [];
        ClickedOnce = !ClickedOnce;
    }
}

</script>

<template>
    <BotaoRetornar/>
    <!-- Game Stats -->
    <div class="h-[8%] w-full bg-[#91f58c] flex flex-row justify-center items-center">
        <button v-if="ActualState == `Start`" @click="StartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Iniciar Jogo</button>
        <button v-else-if="ActualState == `Jogando`" @click="StopGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Parar Jogo</button>
        <button v-else-if="ActualState == `Fim`" @click="RestartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Recomeçar Jogo</button>
        <div class="h-[70px] flex flex-row w-[400px] items-center ml-12 border-4">
            <!-- Timer Container -->
            <div class="text-3xl">
                <span v-if="ActualState == `Start`">00:00</span>
                <span v-else-if="ActualState == `Jogando`">{{TimerRef}}</span>
                <span v-else-if="ActualState == `Fim`">{{LastTime}}</span>
            </div>
            <!-- Score Container -->
            <div class="text-2xl ml-24">
                <span v-if="ActualState == `Start`">Acertos: 0 de 10</span>
                <span v-else-if="ActualState == `Jogando` || ActualState == `Fim`">Acertos: {{Acertos}} de 10</span>
            </div>
        </div>
    </div>
    <div class="flex-1 w-full flex flex-col justify-center items-center">
        <!-- Jogo Container -->

        <!-- Jogando -->
        <div v-if="ActualState == `Jogando`" class="h-[97%] w-[80%] border-2 border-black flex flex-col justify-center items-center">
            <div v-for="item in CardsArray" class="h-1/4 w-full flex flex-row justify-center items-center">
                <div v-for="y in item" class="h-[180px] w-[260px] m-4 border-2 border-black cursor-pointer">
                    <img :id="y" class="h-full w-full object-fill" :src="`../src/assets/Memoria/${BichosPath[y]}`">
                    <div @click="ShowCard" class="h-full w-full absolute top-0 left-0 bg-black"></div>
                </div>
            </div>
        </div>


    </div>
</template>