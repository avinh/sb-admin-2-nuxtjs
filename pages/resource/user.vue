<template>
    <div>
        <Resource :fields="['id', 'name', 'email', 'website']" perPage="5" source="user" :create="create" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            create: [
                {
                    name: 'username', title:"User name" , type:"text"
                },
                {
                    name: 'age', title:"Age", type:"number"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>