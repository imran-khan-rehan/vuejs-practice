<template>
    <div class=" flex flex-col gap-4">
        {{ email }}
        <orderListItem/>
        <orderListItem/>

        <orderListItem/>

        <orderListItem/>

    </div>
</template>

<script>
import { ref } from 'vue';
import orderListItem from './order-list-item.vue';
const email = ref("imrankhan");
export default {
    components: {
        orderListItem
    },
    setup() {
        return {
            email,
            
        }
    }
}
</script>