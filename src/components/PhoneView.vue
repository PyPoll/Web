<template>
    <div class="flex bg-slate-50 dark:bg-slate-800 p-2 rounded-3xl shadow-2xl shadow-slate-950/[0.3]"
        :style="`transform: perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg);`">
        <div :style="`width: ${width}em; height: ${width * 2}em; background: url('${screen}'); background-size: cover;`"
            class="relative flex rounded-2xl">
            <div class="absolute flex top-0 left-0 right-0 h-fit justify-center items-center p-1">
                <div class="h-3 w-1/3 rounded-full bg-slate-800" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {},
    props: {
        screen: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 12
        },
        rotation: {
            type: Object,
            default: () => ({ x: 0, y: 0, z: 0 })
        }
    },
    data() {
        return {};
    },
    mounted() { },
    methods: {}
});
</script>