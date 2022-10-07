<script setup>
import { ref } from 'vue';
import BotaoRetornar from '../components/BotaoRetornar.vue';

function StartGame(){

}
function EndGame(){
    
}




</script>    

<template>
    <BotaoRetornar/>
    <!-- Game Stats -->
    <div class="h-[70px] w-full bg-[#91f58c] flex flex-row justify-center items-center">
        <button v-if="ActualState == `Start`" @click="StartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Iniciar Jogo</button>
        <button v-else-if="ActualState == `Jogando`" @click="StopGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Parar Jogo</button>
        <button v-else-if="ActualState == `Fim`" @click="RestartGame" class="h-[45px] w-[150px] ml-12 bg-[#F9F9F9] font-bold border-2">Recomeçar</button>
    </div>

    <!-- Game Container -->
    <div class="flex-1 w-full flex flex-col justify-center items-center">
        
    </div>
</template>