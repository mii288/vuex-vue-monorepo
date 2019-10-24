<template>
    <div>
        {{ count }} 
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.counter.count;
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('counter/increment')
        },
        decrement() {
            this.$store.dispatch('counter/decrement')
        },
    }
}
</script>
