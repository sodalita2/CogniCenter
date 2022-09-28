<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';
import $ from 'jquery';

const GameStates = ['Setup','Jogando','Fim'];

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


console.log(CardsArray);

var ClickedOnce = false;
var ClickedList = [];
function ShowCard(e){
    console.log($(e.currentTarget.nodeName).children());
    if (!ClickedOnce && $(e.currentTarget.nodeName) !== "img"){
        $(e.currentTarget).css("display","none");
        ClickedList.push($(e.currentTarget).siblings()[0]);
        ClickedOnce = !ClickedOnce;
    }else if (ClickedOnce){
        console.log($(e.currentTarget).siblings()[0].id);
        $(e.currentTarget).css("display","none");
        if ($(e.currentTarget).siblings()[0].id == ClickedList[0].id){
            console.log("peidei");
        }else{

        }
        ClickedList = [];
        ClickedOnce = !ClickedOnce;
    }
}

</script>

<template>
    <BotaoRetornar/>
    <!-- Game Stats -->
    <div class="h-[8%] w-full bg-[purple]">
      
    </div>
    <div class="flex-1 w-full flex flex-col justify-center items-center">
        <!-- Jogo Container -->
        <div class="h-[97%] w-[80%] border-2 border-black flex flex-col justify-center items-center">
            <div v-for="item in CardsArray" class="h-1/4 w-full flex flex-row justify-center items-center">
                <div v-for="y in item" class="h-[180px] w-[260px] m-4 border-2 border-black cursor-pointer">
                    <img :id="y" class="h-full w-full object-fill" :src="`../src/assets/Memoria/${BichosPath[y]}`">
                    <div @click="ShowCard" class="h-full w-full absolute top-0 left-0 bg-black"></div>
                </div>
            </div>
        </div>
    </div>
</template>