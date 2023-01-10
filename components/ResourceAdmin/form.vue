<template>
    <div>
        <b-form @submit="onSubmit">
            <b-card>
                <b-card-body>
                    <b-row class="my-2" v-for="field in fields" :key="field.id">
                        <b-col sm="3">
                            <label :for="`id-${field.id}`">{{ field.title }}</label>
                        </b-col>
                        <b-col sm="9" v-if="field.tag == 'input'">
                            <b-form-input v-model="form[field.name]" :placeholder="field.placeholder" :id="field.name"
                                :type="field.type" :required="field.required"></b-form-input>
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
                            <b-form-timepicker :id="field.name" v-model="form[field.name]" class="mb-2"
                                :required="field.required"></b-form-timepicker>
                        </b-col>
                        <b-col sm="9" v-else-if="field.tag == 'spinbutton'">
                            <b-form-spinbutton :id="field.name" v-model="form[field.name]" :min="field.min ?? 1"
                                :max="field.max ?? 100" :step="field.step ?? 1"
                                :required="field.required"></b-form-spinbutton>
                        </b-col>
                        <b-col sm="9" v-else-if="field.tag == 'textarea'">
                            <b-form-textarea :id="field.name" v-model="form[field.name]" :rows="field.rows ?? 3"
                                :max-rows="field.maxRows ?? 6" :required="field.required"></b-form-textarea>
                        </b-col>
                        <b-col sm="9" v-else-if="field.tag == 'image'">
                            <b-img center :src="field.src" :alt="field.alt"></b-img>
                        </b-col>
                        <b-col sm="9" v-else-if="field.tag == 'radio'">
                            <b-form-radio-group class="mb-3" v-model="form[field.name]" :label="field.label"
                                :options="field.options" :required="field.required">
                            </b-form-radio-group>
                        </b-col>
                    </b-row>
                </b-card-body>
                <template #footer>
                    <div class="d-flex justify-content-between">
                        <b-button variant="primary" type="submit">
                            <span class="icon text-white-50">
                                <font-awesome-icon v-if="target === 'create'" :icon="`fa fa-plus`" />
                                <font-awesome-icon v-if="target === 'edit'" :icon="`fa fa-edit`" />
                            </span>

                            <span class="text" v-if="target === 'create'">Create</span>
                            <span class="text" v-if="target === 'edit'">Edit</span>
                        </b-button>
                        <b-button variant="danger" v-if="target === 'edit'" @click="onDeleteFunc">
                            <span class="icon text-white-50">
                                <font-awesome-icon v-if="target === 'edit'" :icon="`fa fa-trash`" />
                            </span>
                            <span class="text">Delete</span>
                        </b-button>
                    </div>
                </template>
            </b-card>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "ResourceAdminForm",
    props: ['fields', 'source', 'onTarget', 'onDelete', 'target'],
    data() {
        return {
            form: {}
        }
    },
    mounted() {
        this.loadData();
    },
    watch: {
        $route() {
            this.loadData();
        }
    },
    computed: {
        getID() {
            try {
                const id = this.$route.fullPath.split('#')[1];
                return id;
            } catch (error) {
                console.log(error)
                return null;
            }
        },
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            let resData;
            if (this.target === "create") {
                resData = await this.$repositories(this.source).create(this.form).catch((err) => {
                    console.log(err.message)
                    this.$bvModal.msgBoxOk('Fail !!')
                    return null;
                });
            } else if (this.target === "edit") {
                resData = await this.$repositories(this.source).update(this.form, this.getID).catch((err) => {
                    console.log(err.message)
                    this.$bvModal.msgBoxOk('Fail !!')
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
        async onDeleteFunc() {
            const resData = await this.$repositories(this.source).delete(this.getID).catch((err) => {
                console.log(err.message)
                this.$bvModal.msgBoxOk('Fail !!')
                return null;
            });
            if (resData) {
                this.$bvModal.msgBoxOk('Removed')
                    .then(async () => {
                        this.$router.push({ path: this.$route.path });
                        this.onTarget('index');
                        this.onDelete(this.getID)
                    })
            }
        },
        async loadData() {
            if (this.target === "edit" && this.getID) {
                this.$repositories(this.source).show(this.getID).then((res) => {
                    this.form = res;
                }).catch((err) => {
                    console.log(err)
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>