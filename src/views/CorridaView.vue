<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';
import $ from 'jquery';

const Cores = 3;
const PosicoesCorrida = 7;
// 0 => policia , 1 => bombeiro , 2 => ambulancia
const PlayerColor = ref("");

const ActualState = ref("Start");

function StartGame(e){
    PlayerColor.value = $(e.currentTarget).attr("id");
    ActualState.value = "Jogando";
}
function EndGame(){
    
}

const Blacks = ref(0);
const Reds = ref(0);
const Whites = ref(0);
function GenerateColor(){
    let MaxNotInclusive = 3;
    let ChosenColor = Math.floor(Math.random() * MaxNotInclusive);
    switch(ChosenColor){
        case 0:
            if (Blacks.value == 6){
                return GenerateColor();
            }else{
                Blacks.value += 1;
                return "black";
            }
        case 1:
            if (Reds.value == 6){
                return GenerateColor();
            }else{
                Reds.value += 1;
                return "red";
            }
        case 2:
            if (Whites.value == 6){
                return GenerateColor();
            }else{
                Whites.value += 1;
                return "white";
            }
    }
}


var Columns = 3;
var Rows = 6;
var DashboardArray = [];

for (let i=0;i<Columns;i++){
    let RowFilled = [];
    for (let j=0;j<Rows;j++){
        RowFilled.push(GenerateColor());
    }
    DashboardArray.push(RowFilled);
}

console.log(DashboardArray);


const CounterN = ref(0);
</script>    

<template>
    <BotaoRetornar/>

    <!-- Game Container -->
    <div class="flex-1 w-full flex flex-col justify-center items-center">
        <div v-if="ActualState == `Start`" class="h-[600px] w-[70%] flex flex-col justify-center items-center border-2 border-black">
            <div class="text-3xl">Escolha um para apostar</div>
            <div class="h-[90%] w-full flex flex-row justify-center items-center">
                <!-- Policia Box -->
                <div class="h-[60%] w-[25%] flex flex-col border-4 border-black rounded-3xl cursor-pointer" id="policia" @click="StartGame">
                    <div class="flex items-center justify-center text-[2vw] font-bold h-[20%] w-full">Policia</div>
                    <div class="h-[80%] w-full">
                        <img class="h-full w-full object-fill rounded-b-3xl" src="../assets/Corrida/policia.png">
                    </div>
                </div>
                <!-- Bombeiro Box -->
                <div class="h-[60%] w-[25%] flex flex-col border-4 border-black rounded-3xl ml-12 cursor-pointer" id="bombeiro" @click="StartGame">
                    <div class="flex items-center justify-center text-[2vw] font-bold h-[20%] w-full">Bombeiro</div>
                    <div class="h-[80%] w-full">
                        <img class="h-full w-full object-fill rounded-b-3xl" src="../assets/Corrida/bombeiro.png">
                    </div>
                </div>
                <!-- Ambulancia Box -->
                <div class="h-[60%] w-[25%] flex flex-col border-4 border-black rounded-3xl ml-12 cursor-pointer" id="ambulancia" @click="StartGame">
                    <div class="flex items-center justify-center text-[2vw] font-bold h-[20%] w-full">Ambulancia</div>
                    <div class="h-[80%] w-full">
                        <img class="h-full w-full object-fill rounded-b-3xl" src="../assets/Corrida/ambulancia.png">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="ActualState == `Jogando`" class="h-full w-full">
            <!-- Dashboard Div -->
            <div class="h-[75%] w-full">
                <div v-for="x in DashboardArray" class="h-1/3 w-full flex flex-row">
                    <div v-for="(y,key) in x" class="h-full w-1/6 flex justify-center items-center border-2 border-black">
                        <div class="h-[60%] w-1/2 rounded-[50%] bg-[#b8b6b6] flex justify-center items-center">
                            <div class="h-[75%] w-[75%] rounded-[50%] bg-[#999797] flex justify-center items-center">
                                <span v-if="y == `black`">{{key}}</span>
                                <span v-else-if="y == `red`">{{key}}</span>
                                <span v-else-if="y == `white`">{{key}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Corrida Div -->
            <div class="h-[25%] w-full flex flex-col justify-center items-center">
                <div v-for="Carro in Cores" class="h-[60px] w-[70%] flex flex-row border-2 border-black">
                    <div v-for="Posicao in PosicoesCorrida" class="h-full w-[15%] border-2 border-[red]">
                        <span v-if="Posicao == 1">Início</span>
                        <span v-else-if="Posicao == 7">Chegada</span>
                        <span v-else="">{{Posicao}}</span>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>