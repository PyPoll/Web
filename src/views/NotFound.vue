<template>
    <div class="flex flex-col grow min-h-full h-fit min-w-0 max-w-full w-full">
        <GetText :context="{ key: 'notfound.title' }" />
    </div>
</template>

<script>
import GetText from '../components/text/GetText.vue';
import Lang from '../scripts/Lang';

export default {
    name: "NotFound",
    components: {
        GetText
    },
    data() {
        return { Lang };
    },
    mounted() {}
}
</script>