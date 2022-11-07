<script setup>
import { BIconGithub, BIconLinkedin } from 'bootstrap-icons-vue';

</script>

<template>
    <!-- Wrapper -->
    <div class="w-full h-auto flex flex-col items-center">
        <!-- Apresentacao -->
        <div class="w-[80%] h-[350px] border-2 flex justify-center items-center">
            <span class="h-full w-full flex justify-center mt-[160px] text-[42px] font-[500] italic tracking-tighter text-center">
                A plataforma foi desenvolvida por Gabriel Bittencourt de Souza Pinto para seu Trabalho de Conclusão de Curso 
                em Sistemas de Computação - Universidade Federal Fluminense
            </span>
        </div>
        <!-- Bio -->
        <div class="w-[80%] h-[500px] border-2 mt-[40px] flex flex-row justify-center items-center">
            <!-- Foto Left Side Container -->
            <div class="h-full w-1/2 flex justify-center items-center">
                <div class="h-[70%] w-[70%] rounded-3xl border-2 border-black overflow-hidden">
                    <img class="w-full h-full" src="/Home/4911367.jpg">
                </div>
            </div>
            <!-- Links Right Side Container -->
            <div class="h-full w-1/2 flex justify-center items-center">
                <a href="https://github.com/sodalita2/CogniCenter"><BIconGithub class="text-[7vw]"/></a>
                <a href="https://www.linkedin.com/in/gabriel-bittencourt-sp/"><BIconLinkedin class="text-[7vw] ml-[8vw]"/></a>
            </div>
        </div>


        <!-- Projeto Futuro Title -->
        <div class="w-[80%] h-[90px] flex flex-row mt-[80px]">
            <div class="h-full w-[5%] flex justify-center items-center">
                <span class="h-[2px] w-full bg-black"></span>
            </div>
            <div class="h-full w-[18%] text-[36px] font-[600] tracking-tighter flex justify-center items-center">Projeto Futuro</div>
            <div class="h-full flex flex-1 justify-center items-center">
                <span class="h-[2px] w-full bg-black"></span>
            </div>
        </div>
        <!-- Projeto Texto -->
        <div class="w-[80%] h-[400px] flex justify-center items-center">
            <span class="h-full w-full flex justify-center items-center mt-[160px] text-[42px] font-[500] italic tracking-tighter text-center">
                Meu projeto para a plataforma é expandi-la, abrigando variadas
                áreas de intervenção cognitiva, que possa futuramente ser usada
                tanto com auxílio de profissionais de saúde assim como o usuário,
                por conta própria, disfrutar da plataforma.
                O código da plataforma é aberto em meu repositório no Github,
                toda recomendação e conselho é bem vindo, caso você tenha uma
                ideia de jogo para ser implementado na plataforma, sugiro que
                envie para meu email na aba de Contato.
            </span>
        </div>
        <!-- Placeholder espaco -->
        <div class="w-full h-[400px]">
            
        </div>
    </div>
</template>