# sb-admin-2
This project is a vue version of SB Admin 2 bootstrap dashboard designed for Nuxtjs. The dashboard includes Bootstrap 4.

Check the [Startbootstrap](https://startbootstrap.com/theme/sb-admin-2).
Check the [Live Demo here](https://sb-admin-2.vercel.app/).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Using component resource 
- It automatically creates page CRUD resource with REST API

Example:

```
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
    }
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
```