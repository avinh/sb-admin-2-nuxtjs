<template>
    <div>
        <b-form @submit="onSubmit">
            <b-row class="my-2" v-for="field in fields" :key="field.id">
                <b-col sm="3">
                    <label :for="`id-${field.id}`">{{ field.title }}</label>
                </b-col>
                <b-col sm="9" v-if="field.tag == 'input'">
                    <b-form-input @change="(e) => { onChange(e, field) }" v-model="form[field.name]"
                        :placeholder="field.placeholder" :id="field.name" :type="field.type"
                        :required="field.required"></b-form-input>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'select'">
                    <b-form-select :id="field.name" v-model="form[field.name]" :options="field.options"
                        :required="field.required"></b-form-select>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'checkbox'">
                    <b-form-checkbox :id="field.name" v-model="form[field.name]" :name="field.name"
                        :unchecked-value="false" :required="field.required">
                        {{ field.content }}
                    </b-form-checkbox>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'datepicker'">
                    <b-form-datepicker :id="field.name" v-model="form[field.name]" class="mb-2"
                        :required="field.required"></b-form-datepicker>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'timepicker'">
                    <b-form-datepicker :id="field.name" v-model="form[field.name]" class="mb-2"
                        :required="field.required"></b-form-datepicker>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'spinbutton'">
                    <b-form-spinbutton :id="field.name" v-model="form[field.name]" :min="field.min ?? 1"
                        :max="field.max ?? 100" :step="field.step ?? 1" :required="field.required"></b-form-spinbutton>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'textarea'">
                    <b-form-textarea :id="field.name" v-model="form[field.name]" :rows="field.rows ?? 3"
                        :max-rows="field.maxRows ?? 6" :required="field.required"></b-form-textarea>
                </b-col>
                <b-col sm="9" v-else-if="field.tag == 'image'">
                    <b-img center :src="field.src" :alt="field.alt"></b-img>
                </b-col>
            </b-row>

            <b-button variant="primary" type="submit">
                <span class="icon text-white-50">
                    <font-awesome-icon v-if="target === 'create'" :icon="`fa fa-plus`" />
                    <font-awesome-icon v-if="target === 'edit'" :icon="`fa fa-edit`" />
                </span>

                <span class="text" v-if="target === 'create'">Create</span>
                <span class="text" v-if="target === 'edit'">Edit</span>
            </b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "ResourceAdminForm",
    props: ['fields', 'source', 'onTarget', 'target'],
    data() {
        return {
            form: {},
            dataFields: {}
        }
    },
    methods: {
        async onChange(val, field) {
            this.dataFields[`${field.name}`] = val;
        },
        async onSubmit(event) {
            event.preventDefault()
            let resData;
            if (this.target === "create") {
                resData = await this.$repositories(this.source).create(this.form).catch((err) => {
                    this.$bvModal.msgBoxOk('Fail !! ' + err.message)
                    return null;
                });
            } else if (this.target === "edit") {
                const id = this.$route.fullPath.split('#')[1];
                resData = await this.$repositories(this.source).update(this.form, id).catch((err) => {
                    this.$bvModal.msgBoxOk('Fail !! ' + err.message)
                    return null;
                });
            }

            if (resData) {
                this.$bvModal.msgBoxOk('Successfully created !! ')
                    .then(async () => {
                        this.$router.push({ path: this.$route.path });
                        this.onTarget('index');
                    })
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>