<template>
    <div class="flex flex-col grow justify-evenly items-center">
        <div class="flex flex-col">
            <div class="show-up flex w-fit h-fit justify-center items-center space-x-12">
                <PypollIcon class="w-40 drop-shadow-lg" />
                <h1 class="text-8xl font-extrabold drop-shadow-lg">
                    <GetText :context="Lang.CreateTranslationContext('notfound', 'Woops')" />
                </h1>
            </div>
            <div class="flex justify-center items-center">
                <p class="show-down text-xl drop-shadow-lg">
                    <GetText :context="Lang.CreateTranslationContext('notfound', 'Desc')" />
                </p>
            </div>
        </div>
        <div class="show-up" style="animation-delay: 200ms;">
            <router-link to="/" class="flex justify-center items-center space-x-2 text-xl font-semibold bg-indigo-500 py-3 px-4 rounded-xl shadow-lg">
                <GetText :context="Lang.CreateTranslationContext('notfound', 'Back')" />
            </router-link>
        </div>
    </div>
</template>

<script>
import GetText from '@/components/GetText.vue';
import PypollIcon from '@/components/PypollIcon.vue';
import Lang from '@/scripts/Lang';

export default {
    components: {
        GetText,
        PypollIcon
    },
    data() {
        return { Lang };
    },
    mounted() {}
}
</script>