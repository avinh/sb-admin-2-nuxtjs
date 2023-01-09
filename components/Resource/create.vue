<template>
    <div>
        <b-row class="my-1" v-for="field in fields" :key="field.id">
            <b-col sm="3">
                <label :for="`id-${field.id}`">{{ field.title }}</label>
            </b-col>
            <b-col sm="9" v-if="field.tag == 'input'">
                <b-form-input @change="(e) => { onChange(e, field) }" value="" :placeholder="field.placeholder"
                    :id="`id-${field.name}`" :type="field.type"></b-form-input>
            </b-col>
            <b-col sm="9" v-else-if="field.tag == 'select'">
                <b-form-select v-model="selected" :options="field.options"></b-form-select>
            </b-col>
        </b-row>
        <b-button variant="primary" @click="onCreate">
            <span class="icon text-white-50">
                <font-awesome-icon :icon="`fa fa-plus`" />
            </span>
            <span class="text">Create</span>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "ResourceCreate",
    props: ['fields', 'source', 'onTarget'],
    data() {
        return {
            selected: null,
            dataFields: {}
        }
    },
    mounted() {
    },
    methods: {
        async onChange(val, field) {
            this.dataFields[`${field.name}`] = val;
        },
        async onCreate() {
            await this.$repositories(this.source).create(this.dataFields);
            this.$bvModal.msgBoxOk('Successfully created !!')
                .then(async (value) => {
                    this.$router.push({ path: this.$route.path });
                    this.onTarget('index');
                })
                .catch(err => {
                    // An error occurred
                })

        }
    }
}
</script>

<style lang="scss" scoped>

</style>