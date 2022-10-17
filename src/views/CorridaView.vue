<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';
import $ from 'jquery';

const Cores = ["policia","bombeiro","ambulancia"];
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

const PoliciaPosition = ref(1);
const BombeiroPosition = ref(1);
const AmbulanciaPosition = ref(1);



function MoveCar(e){
    $(e.currentTarget).css("background-color","#5e5c5c");
    $(e.currentTarget).children().eq(0).children().eq(0).css("display","none");
    $(e.currentTarget).children().eq(0).children().eq(1).css("display","block");
}




var ArrCounter = 0;

var Columns = 3;
var Rows = 6;
var DashboardArray = [];

for (let i=0;i<Columns;i++){
    let RowFilled = [];
    for (let j=0;j<Rows;j++){
        ArrCounter += 1;
        RowFilled.push([GenerateColor(),ArrCounter]);
    }
    DashboardArray.push(RowFilled);
}

console.log(DashboardArray);


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
                        <img class="h-full w-full object-fill rounded-b-3xl" src="/Corrida/policia.png">
                    </div>
                </div>
                <!-- Bombeiro Box -->
                <div class="h-[60%] w-[25%] flex flex-col border-4 border-black rounded-3xl ml-12 cursor-pointer" id="bombeiro" @click="StartGame">
                    <div class="flex items-center justify-center text-[2vw] font-bold h-[20%] w-full">Bombeiro</div>
                    <div class="h-[80%] w-full">
                        <img class="h-full w-full object-fill rounded-b-3xl" src="/Corrida/bombeiro.png">
                    </div>
                </div>
                <!-- Ambulancia Box -->
                <div class="h-[60%] w-[25%] flex flex-col border-4 border-black rounded-3xl ml-12 cursor-pointer" id="ambulancia" @click="StartGame">
                    <div class="flex items-center justify-center text-[2vw] font-bold h-[20%] w-full">Ambulancia</div>
                    <div class="h-[80%] w-full">
                        <img class="h-full w-full object-fill rounded-b-3xl" src="/Corrida/ambulancia.png">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="ActualState == `Jogando`" class="h-full w-full">
            <!-- Dashboard Div -->
            <div class="h-[75%] w-full">
                <div v-for="x in DashboardArray" class="h-1/3 w-full flex flex-row">
                    <div v-for="y in x" class="h-full w-1/6 flex justify-center items-center border-2 border-black">
                        <div @click="MoveCar" :id="y[0]" class="h-[60%] w-1/2 rounded-[50%] bg-[#b8b6b6] flex justify-center items-center cursor-pointer">
                            <div class="h-[75%] w-[75%] rounded-[50%] bg-[#999797] flex justify-center items-center">
                                <span class="font-[900] text-3xl text-[#3739b8]">{{y[1]}}</span>
                                <span v-if="y[0] == `black`" class="h-[50%] w-[50%] rounded-[50%] bg-black hidden"></span>
                                <span v-else-if="y[0] == `red`" class="h-[50%] w-[50%] rounded-[50%] bg-[red] hidden"></span>
                                <span v-else-if="y[0] == `white`" class="h-[50%] w-[50%] rounded-[50%] bg-white hidden"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-[5%] w-full flex justify-center items-center">
                <span v-if="PlayerColor == `policia`" class="h-full w-[20%] bg-black text-white text-4xl font-[700] flex justify-center items-center">Policia</span>
                <span v-else-if="PlayerColor == `bombeiro`" class="h-full w-[20%] bg-[red] text-white text-4xl font-[700] flex justify-center items-center">Bombeiro</span>
                <span v-else-if="PlayerColor == `ambulancia`" class="h-full w-[20%] bg-[white] text-black text-4xl font-[700] flex justify-center items-center">Ambulancia</span>
            </div>
            <!-- Corrida Div -->
            <div class="h-[20%] w-full flex flex-col justify-center items-center">
                <div v-for="Carro in Cores" class="h-[60px] w-[70%] flex flex-row border-2 border-black" :id="Carro">
                    <div v-for="Posicao in PosicoesCorrida" class="h-full w-[15%] flex justify-center items-center border-2 border-[red]" :id="Posicao">
                        <span v-if="Posicao == 1" class="h-[80%] w-[70%] flex justify-center items-center">
                            <div v-if="Carro == `policia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="PoliciaPosition !== Posicao">Início</span>
                                <img v-if="PoliciaPosition == Posicao" src="/Corrida/policia.png">
                            </div>
                            <div v-if="Carro == `bombeiro`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="BombeiroPosition !== Posicao">Início</span>
                                <img v-if="BombeiroPosition == Posicao" src="/Corrida/bombeiro.png">
                            </div>
                            <div v-if="Carro == `ambulancia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="AmbulanciaPosition !== Posicao">Início</span>
                                <img v-if="AmbulanciaPosition == Posicao" src="/Corrida/ambulancia.png">
                            </div>
                        </span>
                        <span v-else-if="Posicao == 7" class="h-[80%] w-[70%] flex justify-center items-center">
                            <div v-if="Carro == `policia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="PoliciaPosition !== Posicao">Chegada</span>
                                <img v-if="PoliciaPosition == Posicao" src="/Corrida/policia.png">
                            </div>
                            <div v-if="Carro == `bombeiro`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="BombeiroPosition !== Posicao">Chegada</span>
                                <img v-if="BombeiroPosition == Posicao" src="/Corrida/bombeiro.png">
                            </div>
                            <div v-if="Carro == `ambulancia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="AmbulanciaPosition !== Posicao">Chegada</span>
                                <img v-if="AmbulanciaPosition == Posicao" src="/Corrida/ambulancia.png">
                            </div>
                        </span>
                        <span v-else="" class="h-[80%] w-[70%] flex justify-center items-center">
                            <div v-if="Carro == `policia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="PoliciaPosition !== Posicao">{{Posicao}}</span>
                                <img v-if="PoliciaPosition == Posicao" src="/Corrida/policia.png">
                            </div>
                            <div v-if="Carro == `bombeiro`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="BombeiroPosition !== Posicao">{{Posicao}}</span>
                                <img v-if="BombeiroPosition == Posicao" src="/Corrida/bombeiro.png">
                            </div>
                            <div v-if="Carro == `ambulancia`" class="h-full w-full absolute flex justify-center items-center">
                                <span v-if="AmbulanciaPosition !== Posicao">{{Posicao}}</span>
                                <img v-if="AmbulanciaPosition == Posicao" src="/Corrida/ambulancia.png">
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>