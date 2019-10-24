<template>
    <div>
        {{ count }} 
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script lang="ts">
// NOTE: NOT USE Vue.extend()
export default {
    computed: {
        count(): number {
            return (this as any).$store.state.counter.count;
        }
    },
    methods: {
        increment() {
            (this as any).$store.dispatch('counter/increment')
        },
        decrement() {
            (this as any).$store.dispatch('counter/decrement')
        }
    }
}
</script>
