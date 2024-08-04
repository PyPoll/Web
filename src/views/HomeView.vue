<template>
    <div class="flex flex-col grow min-h-full h-fit min-w-0 max-w-full w-full bg-indigo-500">
        <div class="flex w-full h-fit justify-evenly items-center pt-40 ">
            <div class="show-right relatives">
                <div class="absolute w-fit h-fit -translate-x-1/2 -translate-y-1/3">
                    <PhoneView width="14" screen="/screens/register.jpg" :rotation="{x: 20, y: 20, z: -5}" />
                </div>
            </div>
            <div class="flex flex-col justify-start items-center">
                <div class="show-up flex w-fit h-fit justify-center items-center space-x-12">
                    <PypollIcon class="w-40 drop-shadow-lg" />
                    <div class="flex">
                        <h1 v-for="(letter, index) in name" :key="letter"
                            class="show-up text-8xl font-extrabold drop-shadow-lg"
                            :style="'animation-delay: '+index*50+'ms;'">
                            {{ letter }}
                        </h1>
                    </div>
                </div>
                <p class="show-down text-xl drop-shadow-lg">
                    <GetText :context="Lang.CreateTranslationContext('main', 'Slogan')" />
                </p>
            </div>
        </div>
        <svg viewBox="0 0 1440 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="#334155"
                d="M0,128L26.7,122.7C53.3,117,107,107,160,104C213.3,101,267,107,320,106.7C373.3,107,427,101,480,88C533.3,75,587,53,640,45.3C693.3,37,747,43,800,58.7C853.3,75,907,101,960,114.7C1013.3,128,1067,128,1120,125.3C1173.3,123,1227,117,1280,98.7C1333.3,80,1387,48,1440,37.3C1493.3,27,1547,37,1600,48C1653.3,59,1707,69,1760,66.7C1813.3,64,1867,48,1920,37.3C1973.3,27,2027,21,2080,21.3C2133.3,21,2187,27,2240,42.7C2293.3,59,2347,85,2400,90.7C2453.3,96,2507,80,2560,64C2613.3,48,2667,32,2720,37.3C2773.3,43,2827,69,2880,66.7C2933.3,64,2987,32,3040,26.7C3093.3,21,3147,43,3200,45.3C3253.3,48,3307,32,3360,29.3C3413.3,27,3467,37,3520,48C3573.3,59,3627,69,3680,82.7C3733.3,96,3787,112,3813,120L3840,128L3840,160L3813.3,160C3786.7,160,3733,160,3680,160C3626.7,160,3573,160,3520,160C3466.7,160,3413,160,3360,160C3306.7,160,3253,160,3200,160C3146.7,160,3093,160,3040,160C2986.7,160,2933,160,2880,160C2826.7,160,2773,160,2720,160C2666.7,160,2613,160,2560,160C2506.7,160,2453,160,2400,160C2346.7,160,2293,160,2240,160C2186.7,160,2133,160,2080,160C2026.7,160,1973,160,1920,160C1866.7,160,1813,160,1760,160C1706.7,160,1653,160,1600,160C1546.7,160,1493,160,1440,160C1386.7,160,1333,160,1280,160C1226.7,160,1173,160,1120,160C1066.7,160,1013,160,960,160C906.7,160,853,160,800,160C746.7,160,693,160,640,160C586.7,160,533,160,480,160C426.7,160,373,160,320,160C266.7,160,213,160,160,160C106.7,160,53,160,27,160L0,160Z">
            </path>
        </svg>
        <div class="flex grow min-h-fit bg-slate-700">
            
        </div>
        <div class="flex flex-col bg-slate-800 p-4">
            <div class="flex w-full h-fit justify-center items-center">
                Copyright © 2024 Pypoll. All rights reserved.
                <p class="px-4">|</p>
                <a href="/privacy" class="hover:text-white hover:underline">Privacy Policy</a>
                <p class="px-4">|</p>
                <a href="/terms" class="hover:text-white hover:underline">Terms of Use</a>
            </div>
        </div>
    </div>
</template>

<script lant="ts">
import { defineComponent } from "vue";
import GetText from '@/components/GetText.vue';
import PypollIcon from "@/components/PypollIcon.vue";
import Lang from "@/scripts/Lang";
import PhoneView from "@/components/PhoneView.vue";

export default defineComponent({
    components: {
        PypollIcon,
        GetText,
        PhoneView
    },
    data() {
        return {
            Lang,
            name: "Pypoll"
        };
    },
    mounted() { },
    methods: {}
});
</script>
