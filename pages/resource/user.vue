<template>
    <div>
        <ResourceAdmin perPage="5" source="user" :index="index" :create="create" :edit="edit" />
    </div>
</template>

<script>

const formField = [
    {
        name: 'name', title: "Name", type: "text", tag: 'input', required: false
    },
    {
        name: 'age', title: "Age", type: "number", tag: 'input', required: false
    },
    {
        name: 'sex', title: "Sex", tag: 'radio', required: false, options: [
            { value: 'male', text: 'Male' },
            { value: 'female', text: 'Female' },
        ]
    },
    {
        name: 'email', title: "Email", type: "email", tag: 'input', required: false
    },
    {
        name: 'birthday', title: "Birthday", type: "datetime-local", tag: 'input', required: false
    },
    {
        name: 'bio', title: "Bio", tag: 'textarea', rows: 3, maxRows: 6, required: false
    },
    {
        name: 'datepicker', title: "Datepicker", tag: 'datepicker', required: false
    },
    {
        name: 'timepicker', title: "Timepicker", tag: 'timepicker', required: false
    },
    {
        name: 'selected', title: "Selected:", options: [
            { value: null, text: 'Please select an option' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: { C: '3PO' }, text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled', disabled: true }
        ], tag: 'select', required: false
    },
    {
        name: 'radio', title: "Radio", tag: 'radio', required: false, options: [
            { value: 'male', text: 'Male' },
            { value: 'female', text: 'Female' },
        ]
    },
    {
        name: "checktest", content: "I accept the terms and use", tag: 'checkbox', required: false
    },
    {
        name: "spinbutton", title: "Spin Button", tag: 'spinbutton', min: 1, max: 100, step: 0.25, required: false
    },
    {
        name: 'image', title: "Image", tag: 'image', required: false, src: "https://picsum.photos/125/125/?image=58", alt: "Image"
    },
];

export default {
    name: "UserPage",
    middleware: 'auth',
    data() {
        return {
            index: {
                fields: ['id', 'name', 'email', 'website']
            },
            create: {
                col: { lg: 8 },
                fields: formField
            },
            edit: {
                col: { lg: 8 },
                fields: formField
            },

        }
    }
}
</script>

<style lang="scss" scoped>

</style>