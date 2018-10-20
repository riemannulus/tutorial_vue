<template>
<div>
    <h1>My App</h1>
    <h2 v-for="friend in friends">
        <h4>{{friend | fullName}}</h4>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
    </h2>
</div>
</template>

<script>
    var d = {
        friends: [
            {
                first: 'Bobby',
                last: 'Boone',
                age: 25
            },
            {
                first: 'John',
                last: 'Boone',
                age: 35
            }]
    };

    export default {
        name: "Tutorial",
        filters: {
            fullName(value){
                return `${value.last}, ${value.first}`;
            }
        },
        data: function () {
           return d;
        }
    }
</script>

<style scoped>

</style>
