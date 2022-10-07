<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';
import $ from 'jquery';

// 0 = yellow , 1 = red , 2 = blue , 3 = green
function ColorGenerator(){
    let MaxNotInclusive = 4;
    let ChosenColor = Math.floor(Math.random() * MaxNotInclusive);
    switch(ChosenColor){
        case 0:
            return "yellow";
        case 1:
            return "red";
        case 2:
            return "blue";
        case 3:
            return "green";
    }
}


const ActualState = ref("Start");
const Acertos = ref(0);

const PlayerMovesArray = ref([]);
const PlayerMoves = ref(0);

var MovesArray = [];
const TotalMoves = ref(0);

function StartGame(){
    ActualState.value = "Jogando";

    Acertos.value = 0;
    MovesArray.value = [];
    TotalMoves.value = 0;
    PlayerMovesArray.value = [];
    PlayerMoves.value = 0;

    // default false
    const PlayerLost = ref(true);
    // default true
    const PlayerTurn = ref(false);

    while (!PlayerLost.value){

        PlayerMovesArray.value = [];
        PlayerMoves.value = 0;

        let NextColor = ColorGenerator();

        TotalMoves.value += 1;
        MovesArray.push(NextColor);

        console.log(MovesArray);

        // CPU MOVES
        for (let i in MovesArray){
            setTimeout(() => {
                setTimeout(() => {
                    $(`#${NextColor}`).css("opacity","100%");
                    $(`#${NextColor}`).css("background-color",`${NextColor}`);
                    setTimeout(() => {
                        $(`#${NextColor}`).css("opacity","65%");
                        $(`#${NextColor}`).css("background-color","");
                    }, 1500);   
                }, 700);
            }, 1000);
        }

        PlayerTurn.value = true;

        while (PlayerTurn.value){
            for (let x in PlayerMovesArray.value){
                if (PlayerMovesArray.value[x] !== MovesArray[x]){
                    PlayerTurn.value = false;
                    PlayerLost.value = true;
                    StopGame();
                }
            }
            if (PlayerMoves.value == TotalMoves.value){
                Acertos.value += 1;
                PlayerTurn.value = false;
            }
        }

    }



    
    
}
function StopGame(){
    ActualState.value = "Fim";
}
function RestartGame(){
    ActualState.value = "Start";
}



function Clicked(e){
    let ClickedColor = $(e.currentTarget).attr("id");
    PlayerMovesArray.push(ClickedColor);
}


</script>    

<template>
    <BotaoRetornar/>
    <!-- Game Stats -->
    <div class="h-[70px] w-full bg-[#91f58c] flex flex-row justify-center items-center">
        <button v-if="ActualState == `Start`" @click="StartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Iniciar Jogo</button>
        <button v-else-if="ActualState == `Jogando`" @click="StopGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Parar Jogo</button>
        <button v-else-if="ActualState == `Fim`" @click="RestartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Recomeçar</button>
        <!-- Score Container -->
        <div class="h-[70px] w-[300px] flex flex-row items-center ml-12 border-4">
            Acertos: {{Acertos}}
        </div>
    </div>

    <!-- Game Container -->
    <div class="flex-1 w-full flex flex-col justify-center items-center">
        <!-- Simon Container -->
        <div v-show="ActualState == `Jogando`" class="h-[700px] w-[730px] border-2 border-black rounded-[50%] flex flex-col items-center justify-center overflow-hidden">
            <!-- First Row -->
            <div class="h-1/2 w-full flex flex-row items-center justify-between">
                <div id="yellow" ref="yellow" @click="Clicked" class="h-[80%] w-[38%] bg-[#fac739] opacity-[65%] rounded-tl-full ml-[65px] cursor-pointer"></div>
                <div id="red" ref="red" @click="Clicked" class="h-[80%] w-[38%] bg-[#fa3939] opacity-[65%] rounded-tr-full mr-[65px] cursor-pointer"></div>
            </div>
            <!-- Second Row -->
            <div class="h-1/2 w-full flex flex-row items-center justify-between">
                <div id="blue" ref="blue" @click="Clicked" class="h-[80%] w-[38%] bg-[#393ffa] opacity-[65%] rounded-bl-full ml-[65px] cursor-pointer"></div>
                <div id="green" ref="green" @click="Clicked" class="h-[80%] w-[38%] bg-[#43fa39] opacity-[65%] rounded-br-full mr-[65px] cursor-pointer"></div>
            </div>
        </div>
    </div>
</template>