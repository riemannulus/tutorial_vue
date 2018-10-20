<template>
    <div class="todo">
        <ul>
            <li>{{ msg }} TODO</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    .todo {
    }
</style>
