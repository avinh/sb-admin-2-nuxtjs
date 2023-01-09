<template>
    <div>
        <ResourceAdmin :fields="['id', 'name', 'email', 'website']" perPage="5" source="user" :create="create" />
    </div>
</template>

<script>

export default {
    name: "UserPage",
    data() {
        return {
            create: [
                {
                    name: 'username', title: "User name", type: "text", tag: 'input'
                },
                {
                    name: 'age', title: "Age", type: "number", tag: 'input'
                },
                {
                    name: 'email', title: "Email", type: "email", tag: 'input'
                },
                {
                    name: 'birthday', title: "Birthday", type: "datetime-local", tag: 'input'
                },
                {
                    name: 'selected', title: "Selected:", options: [
                        { value: null, text: 'Please select an option' },
                        { value: 'a', text: 'This is First option' },
                        { value: 'b', text: 'Selected Option' },
                        { value: { C: '3PO' }, text: 'This is an option with object value' },
                        { value: 'd', text: 'This one is disabled', disabled: true }
                    ], tag: 'select'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>