<template>
    <div class="flex flex-col grow text-slate-200">
        <div class="flex w-full">
            <div class="show-down flex flex-col w-full justify-center items-center space-y-4 pt-4">
                <p class="text-3xl font-bold"> {{ documentName() }} </p>
                <p class="show-down text-xl font-semibold"> {{ documentDate() }} </p>
            </div>
        </div>
        <div class="flex max-h-full min-h-0 p-4">
            <div class="flex grow p-4 overflow-scroll max-h-full min-h-0 bg-slate-800 rounded-xl">
                <div class="show-up w-full h-fit">
                    <component :is="document()" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrivacyDocument from './Legal/Privacy.vue';
import TermsDocument from './Legal/Terms.vue';

export default {
    components: {
        
    },
    data() {
        return {
            type: this.$route.path.split('/').pop(),
            documentName: () => ({
                'privacy': 'Privacy Policy',
                'terms': 'Terms of Service'
            }[this.type]),
            documentDate: () => ({
                'privacy': 'Last updated: 04-08-2024',
                'terms': 'Last updated: 04-08-2024'
            }[this.type]),
            document: () => ({
                'privacy': PrivacyDocument,
                'terms': TermsDocument
            }[this.type])
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>
