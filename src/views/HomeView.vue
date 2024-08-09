<template>
    <div class="flex flex-col grow min-h-full h-fit min-w-0 max-w-full w-full bg-indigo-500">
        <div class="flex w-full h-fit justify-evenly items-center pt-40 ">
            <div class="flex flex-col justify-start items-center text-slate-200">
                <div class="show-up flex w-fit h-fit justify-center items-center space-x-4 md:space-x-8 lg:space-x-12">
                    <PypollIcon class="w-24 md:w-32 lg:w-40 drop-shadow-lg" />
                    <div class="flex">
                        <h1 v-for="(letter, index) in name" :key="letter"
                            class="show-up text-5xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg"
                            :style="'animation-delay: ' + index * 50 + 'ms;'">
                            {{ letter }}
                        </h1>
                    </div>
                </div>
                <p class="show-down drop-shadow-lg px-4 text-center">
                    <GetText :context="Lang.CreateTranslationContext('main', 'Slogan')" />
                </p>
            </div>
        </div>
        <svg viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg" class="text-slate-200 dark:text-slate-700">
            <path fill="currentColor"
                d="M0,128L26.7,122.7C53.3,117,107,107,160,104C213.3,101,267,107,320,106.7C373.3,107,427,101,480,88C533.3,75,587,53,640,45.3C693.3,37,747,43,800,58.7C853.3,75,907,101,960,114.7C1013.3,128,1067,128,1120,125.3C1173.3,123,1227,117,1280,98.7C1333.3,80,1387,48,1440,37.3C1493.3,27,1547,37,1600,48C1653.3,59,1707,69,1760,66.7C1813.3,64,1867,48,1920,37.3C1973.3,27,2027,21,2080,21.3C2133.3,21,2187,27,2240,42.7C2293.3,59,2347,85,2400,90.7C2453.3,96,2507,80,2560,64C2613.3,48,2667,32,2720,37.3C2773.3,43,2827,69,2880,66.7C2933.3,64,2987,32,3040,26.7C3093.3,21,3147,43,3200,45.3C3253.3,48,3307,32,3360,29.3C3413.3,27,3467,37,3520,48C3573.3,59,3627,69,3680,82.7C3733.3,96,3787,112,3813,120L3840,128L3840,160L3813.3,160C3786.7,160,3733,160,3680,160C3626.7,160,3573,160,3520,160C3466.7,160,3413,160,3360,160C3306.7,160,3253,160,3200,160C3146.7,160,3093,160,3040,160C2986.7,160,2933,160,2880,160C2826.7,160,2773,160,2720,160C2666.7,160,2613,160,2560,160C2506.7,160,2453,160,2400,160C2346.7,160,2293,160,2240,160C2186.7,160,2133,160,2080,160C2026.7,160,1973,160,1920,160C1866.7,160,1813,160,1760,160C1706.7,160,1653,160,1600,160C1546.7,160,1493,160,1440,160C1386.7,160,1333,160,1280,160C1226.7,160,1173,160,1120,160C1066.7,160,1013,160,960,160C906.7,160,853,160,800,160C746.7,160,693,160,640,160C586.7,160,533,160,480,160C426.7,160,373,160,320,160C266.7,160,213,160,160,160C106.7,160,53,160,27,160L0,160Z">
            </path>
        </svg>
        <div class="flex flex-col grow min-h-fit bg-slate-200 dark:bg-slate-700">
            <span class="h-32 w-full" />
            <div class="flex justify-center item-center px-8 py-20">
                <div class="show-right flex grow w-full  justify-center items-center">
                    <div class="flex flex-col md:max-w-[70vw] lg:max-w-[30vw] space-y-8">
                        <h2>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc1TitleA')" />
                            <span class="highlight">
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc1TitleB')" />
                            </span>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc1TitleC')" />
                        </h2>
                        <div class="space-y-2">
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc1Text1')" />
                            </p>
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc1Text2')" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="show-left hidden md:flex w-full h-full justify-center items-center">
                    <PhoneView width="14" :screen="`/screens/register${darkMode?'':'-light'}.jpg`" :rotation="{ x: 20, y: -20, z: 5 }" />
                </div>
            </div>
            <svg viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg" class="text-indigo-500">
                <path fill="currentColor"
                    d="M0,0L30,7.3C60,15,120,29,180,44C240,59,300,73,360,84.3C420,95,480,103,540,91.7C600,81,660,51,720,62.3C780,73,840,125,900,124.7C960,125,1020,73,1080,62.3C1140,51,1200,81,1260,88C1320,95,1380,81,1440,77C1500,73,1560,81,1620,99C1680,117,1740,147,1800,165C1860,183,1920,191,1980,165C2040,139,2100,81,2160,73.3C2220,66,2280,110,2340,128.3C2400,147,2460,139,2520,113.7C2580,88,2640,44,2700,29.3C2760,15,2820,29,2880,40.3C2940,51,3000,59,3060,66C3120,73,3180,81,3240,84.3C3300,88,3360,88,3420,88C3480,88,3540,88,3600,88C3660,88,3720,88,3780,80.7C3840,73,3900,59,3960,51.3C4020,44,4080,44,4140,69.7C4200,95,4260,147,4290,172.3L4320,198L4320,220L4290,220C4260,220,4200,220,4140,220C4080,220,4020,220,3960,220C3900,220,3840,220,3780,220C3720,220,3660,220,3600,220C3540,220,3480,220,3420,220C3360,220,3300,220,3240,220C3180,220,3120,220,3060,220C3000,220,2940,220,2880,220C2820,220,2760,220,2700,220C2640,220,2580,220,2520,220C2460,220,2400,220,2340,220C2280,220,2220,220,2160,220C2100,220,2040,220,1980,220C1920,220,1860,220,1800,220C1740,220,1680,220,1620,220C1560,220,1500,220,1440,220C1380,220,1320,220,1260,220C1200,220,1140,220,1080,220C1020,220,960,220,900,220C840,220,780,220,720,220C660,220,600,220,540,220C480,220,420,220,360,220C300,220,240,220,180,220C120,220,60,220,30,220L0,220Z">
                </path>
            </svg>
            <div class="flex justify-center item-center px-8 pb-20 bg-indigo-500">
                <div class="show-right hidden md:flex w-full h-full justify-center items-center">
                    <PhoneView width="14" :screen="`/screens/createPoll${darkMode?'':'-light'}.jpg`" :rotation="{ x: 20, y: 20, z: -5 }" />
                </div>
                <div class="show-left flex grow w-full  justify-center items-center">
                    <div class="flex flex-col max-w-[540px] md:max-w-[70vw] lg:max-w-[30vw] space-y-8 text-slate-200">
                        <h2>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc2TitleA')" />
                            <span class="highlight-dark">
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc2TitleB')" />
                            </span>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc2TitleC')" />
                        </h2>
                        <div class="space-y-2">
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc2Text1')" />
                            </p>
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc2Text2')" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg" class="text-indigo-500" style="transform: scale(1, -1);">
                <path fill="currentColor"
                d="M0,198L30,187C60,176,120,154,180,128.3C240,103,300,73,360,77C420,81,480,117,540,113.7C600,110,660,66,720,44C780,22,840,22,900,47.7C960,73,1020,125,1080,154C1140,183,1200,191,1260,165C1320,139,1380,81,1440,58.7C1500,37,1560,51,1620,69.7C1680,88,1740,110,1800,117.3C1860,125,1920,117,1980,106.3C2040,95,2100,81,2160,80.7C2220,81,2280,95,2340,106.3C2400,117,2460,125,2520,139.3C2580,154,2640,176,2700,187C2760,198,2820,198,2880,165C2940,132,3000,66,3060,51.3C3120,37,3180,73,3240,88C3300,103,3360,95,3420,110C3480,125,3540,161,3600,154C3660,147,3720,95,3780,91.7C3840,88,3900,132,3960,146.7C4020,161,4080,147,4140,139.3C4200,132,4260,132,4290,132L4320,132L4320,220L4290,220C4260,220,4200,220,4140,220C4080,220,4020,220,3960,220C3900,220,3840,220,3780,220C3720,220,3660,220,3600,220C3540,220,3480,220,3420,220C3360,220,3300,220,3240,220C3180,220,3120,220,3060,220C3000,220,2940,220,2880,220C2820,220,2760,220,2700,220C2640,220,2580,220,2520,220C2460,220,2400,220,2340,220C2280,220,2220,220,2160,220C2100,220,2040,220,1980,220C1920,220,1860,220,1800,220C1740,220,1680,220,1620,220C1560,220,1500,220,1440,220C1380,220,1320,220,1260,220C1200,220,1140,220,1080,220C1020,220,960,220,900,220C840,220,780,220,720,220C660,220,600,220,540,220C480,220,420,220,360,220C300,220,240,220,180,220C120,220,60,220,30,220L0,220Z">
                </path>
            </svg>
            <div class="flex justify-center item-center px-8 py-20">
                <div class="flex grow w-full  justify-center items-center">
                    <div class="show-right flex flex-col max-w-[540px] md:max-w-[70vw] lg:max-w-[30vw] space-y-8">
                        <h2>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc3TitleA')" />
                            <span class="highlight">
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc3TitleB')" />
                            </span>
                            <GetText :context="Lang.CreateTranslationContext('main', 'Bloc3TitleC')" />
                        </h2>
                        <div class="space-y-2">
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc3Text1')" />
                            </p>
                            <p>
                                <GetText :context="Lang.CreateTranslationContext('main', 'Bloc3Text2')" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="show-left hidden md:flex w-full h-full justify-center items-center">
                    <PhoneView width="14" :screen="`/screens/feed${darkMode?'':'-light'}.jpg`" :rotation="{ x: 20, y: -20, z: 5 }" />
                </div>
            </div>
            <span class="h-32 w-full" />
            <div class="flex flex-col justify-center item-center px-2 md:px-8 py-20">
                <div class="show-up flex grow w-full pb-10 justify-center items-center">
                    <div class="flex flex-col max-w-[540px] md:max-w-[70vw] lg:max-w-[50vw] space-y-8">
                        <h2 class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'ReadyA')" />
                            <span class="highlight">
                                <GetText :context="Lang.CreateTranslationContext('main', 'ReadyB')" />
                            </span>
                            <GetText :context="Lang.CreateTranslationContext('main', 'ReadyC')" />
                        </h2>
                        <p class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'ReadyDesc')" />
                        </p>
                    </div>
                </div>
                <div ref="beta-zone" class="flex justify-center item-center px-2 md:px-8 overflow-hidden transition-all" style="max-height: 0px;">
                    <div class="flex flex-col w-fit h-fit max-w-full p-4 border-2 rounded-xl border-slate-400 dark:border-slate-600 space-y-4">
                        <p class="text-slate-600 dark:text-slate-400 italic">
                            <GetText :context="Lang.CreateTranslationContext('main', 'IndicateEmail')" />
                        </p>
                        <div class="flex grow justify-center items-center space-x-4">
                            <p class="whitespace-nowrap"><GetText :context="Lang.CreateTranslationContext('main', 'Email')" /></p>
                            <input type="email" name="email" class="flex w-fit min-w-0 max-w-full bg-slate-50 dark:bg-slate-600 rounded-lg p-2 focus:outline focus:outline-indigo-500">
                        </div>
                    </div>
                </div>
                <div ref="done-zone" class="flex justify-center item-center px-2 md:px-8 overflow-hidden transition-all" style="max-height: 0px;">
                    <div class="flex flex-col w-fit h-fit p-4 space-y-4 border-2 border-indigo-500 rounded-xl">
                        <p class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'BetaSaved')" />
                        </p>
                    </div>
                </div>
                <div ref="fail-zone" class="flex justify-center item-center px-2 md:px-8 overflow-hidden transition-all" style="max-height: 0px;">
                    <div class="flex flex-col w-fit h-fit p-4 space-y-4 border-2 border-red-500 rounded-xl">
                        <p class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'BetaError')" />
                        </p>
                    </div>
                </div>
                <div ref="exists-zone" class="flex justify-center item-center px-2 md:px-8 overflow-hidden transition-all" style="max-height: 0px;">
                    <div class="flex flex-col w-fit h-fit p-4 space-y-4 border-2 border-green-500 rounded-xl">
                        <p class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'AlreadyBeta')" />
                        </p>
                    </div>
                </div>
                <div ref="toomuch-zone" class="flex justify-center item-center px-2 md:px-8 overflow-hidden transition-all" style="max-height: 0px;">
                    <div class="flex flex-col w-fit h-fit p-4 space-y-4 border-2 border-green-500 rounded-xl">
                        <p class="text-center">
                            <GetText :context="Lang.CreateTranslationContext('main', 'TooMuchRequests')" />
                        </p>
                    </div>
                </div>
                <div class="relative show-down flex w-full h-full pt-10 justify-center items-center text-slate-200">
                    <button
                        class="flex z-50 p-4 bg-indigo-500 shadow-lg rounded-xl hover:-translate-y-1 hover:shadow-indigo-500/[0.2] hover:shadow-xl transition-all"
                        @mouseover="betaParticles" @click="() => { showBetaZone? sendBetaRequest(): triggerBeta() }">
                        <p v-show="showBetaZone" class="font-bold pointer-events-none">
                            <GetText :context="Lang.CreateTranslationContext('main', 'ValidateRegister')" />
                        </p>
                        <p v-show="!showBetaZone" class="font-bold pointer-events-none">
                            <GetText :context="Lang.CreateTranslationContext('main', 'RegisterBeta')" />
                        </p>
                    </button>
                </div>
            </div>
            <span class="h-64 w-full" />
        </div>
        <div class="flex flex-col bg-slate-50 dark:bg-slate-800 p-4">
            <div class="flex w-full h-fit justify-center items-center">
                <p class="text-center">Copyright © 2024 Pypoll. All rights reserved.</p>
                <p class="px-4">|</p>
                <a href="/privacy" class="hover:text-white hover:underline text-center"><p>Privacy Policy</p></a>
                <p class="px-4">|</p>
                <a href="/terms" class="hover:text-white hover:underline text-center"><p>Terms of Use</p></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetText from '@/components/GetText.vue';
import PypollIcon from "@/components/PypollIcon.vue";
import Lang from "@/scripts/Lang";
import PhoneView from "@/components/PhoneView.vue";
import { animateShows } from "@/scripts/common";
import { API } from "@/scripts/API";
import ROUTES from "@/scripts/routes";

export default defineComponent({
    components: {
        PypollIcon,
        GetText,
        PhoneView
    },
    data() {
        return {
            Lang,
            name: "Pypoll",
            showBetaZone: false,
            darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
        };
    },
    mounted() {
        animateShows(this.$el);
    },
    methods: {
        betaParticles(ev: Event) {
            const NB_PARTICLES = 20;
            const button = ev.target as HTMLDivElement;
            const buttonRect = button.getBoundingClientRect();
            const buttonParentRect = button.parentElement?.getBoundingClientRect();
            const buttonCenter = {
                x: buttonRect.left + buttonRect.width / 2 - (buttonParentRect?.left || 0),
                y: buttonRect.top + buttonRect.height / 2 - (buttonParentRect?.top || 0)
            };

            for (let i = 0; i < NB_PARTICLES; i++) {
                const width = Math.random() * 15 + 5;
                const direction = Math.random() * Math.PI * 2;
                const vector = {
                    x: Math.cos(direction) * (buttonRect.width / buttonRect.height) * 0.6,
                    y: Math.sin(direction)
                };
                const start = {
                    x: buttonCenter.x + vector.x * 30,
                    y: buttonCenter.y + vector.y * 30
                };
                const end = {
                    x: buttonCenter.x + vector.x * 80,
                    y: buttonCenter.y + vector.y * 80
                };

                setTimeout(() => {
                    const particle = document.createElement("div");
                    particle.style.width = `${width}px`;
                    particle.style.height = `${width}px`;
                    particle.style.left = `${start.x}px`;
                    particle.style.top = `${start.y}px`;
                    particle.classList.add("beta-particle");
                    setTimeout(() => {
                        particle.style.left = `${end.x}px`;
                        particle.style.top = `${end.y}px`;
                        particle.style.opacity = "0";
                    }, 10);
                    button.parentElement?.appendChild(particle);
                    setTimeout(() => {
                        particle.remove();
                    }, 1000);
                }, i * 10);
            }
        },
        triggerBeta() {
            this.showBetaZone = true;
            const betaZone = this.$refs['beta-zone'] as HTMLElement;
            betaZone.style.maxHeight = betaZone.firstElementChild?.getBoundingClientRect().height + "px";
        },
        async sendBetaRequest() {
            const EMAIL_REGEX = /^.*@.*\..*$/;
            const emailInput = document.querySelector("input[name=email]") as HTMLInputElement;
            if (!emailInput) {
                return;
            }

            if (!emailInput.value || !EMAIL_REGEX.test(emailInput.value)) {
                emailInput.focus();
                return;
            }

            // Send email
            this.showBetaZone = false;
            const betaZone = this.$refs['beta-zone'] as HTMLElement;
            betaZone.style.maxHeight = "0px";

            const res = await API.Request(ROUTES.BETA.REGISTER(emailInput.value));
            if (res.error) {
                const errors: any = {
                    400: "exists-zone",
                    429: "toomuch-zone"
                };

                const logZone = this.$refs[errors[res.status] ?? 'fail-zone'] as HTMLElement;
                logZone.style.maxHeight = logZone.firstElementChild?.getBoundingClientRect().height + "px";
                setTimeout(() => {
                    logZone.style.maxHeight = "0px";
                }, 3000);
                return;
            }

            // show done zone for 3s
            const doneZone = this.$refs['done-zone'] as HTMLElement;
            doneZone.style.maxHeight = doneZone.firstElementChild?.getBoundingClientRect().height + "px";
            setTimeout(() => {
                doneZone.style.maxHeight = "0px";
            }, 3000);
        }
    }
});
</script>

<style>
.beta-particle {
    @apply absolute rounded-full bg-indigo-500 transition-all duration-1000 ease-out-expo;
}
</style>
