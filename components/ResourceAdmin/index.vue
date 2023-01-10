<template>
    <div v-if="target">
        <div v-if="target === 'index'">
            <b-row>
                <b-col v-bind="index.col">
                    <b-card>
                        <b-card-body>
                            <b-row>
                                <b-col class="d-flex justify-content-end">
                                    <b-button variant="primary" @click="onCreate">
                                        <span class="icon text-white-50">
                                            <font-awesome-icon :icon="`fa fa - plus`" />
                                        </span>
                                        <span class="text">Create</span>
                                    </b-button>
                                </b-col>
                            </b-row>

                            <b-table :hover="true" :items="items" :fields="index.fields" responsive class="mt-2"
                                selectable :select-mode="'single'" @row-selected="onRowSelected">
                                <template #table-busy>
                                    <div class="text-center text-danger my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>
                            </b-table>
                            <b-row>
                                <b-col class="d-flex justify-content-end">
                                    <b-pagination @change="onPageChanged" :total-rows="totalRows"
                                        :per-page="perPageLocal" v-model="currentPage" class="my-0" />
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>


        </div>
        <div v-if="target !== 'index'">
            <b-row>
                <b-col v-bind="this.target == 'create' ? create.col : edit.col">
                    <ResourceAdminForm :fields="formFields" :source="source" :target="target"
                        :onTarget="(target) => { this.target = target }" :onDelete="onDelete" />
                </b-col>
            </b-row>

        </div>
    </div>
</template>

<script>
export default {
    name: "ResourceAdmin",
    props: ['index', 'perPage', 'source', 'create', 'edit'],
    data() {
        return {
            items: null,
            paginatedItems: 0,
            currentPage: 1,
            perPageLocal: this.$props.perPage ?? 10,
            totalRows: 0,
            target: null,
            formFields: null
        }
    },
    watch: {
        $route() {
            this.onInit()
        }
    },
    methods: {
        paginate(page_size, page_number) {
            let itemsToParse = this.items;
            this.paginatedItems = itemsToParse.slice(
                page_number * page_size,
                (page_number + 1) * page_size
            );
        },
        onPageChanged(page) {
            this.currentPage = page;
            this.getData();
            this.paginate(this.perPageLocal, page - 1);
        },
        async getData() {
            const items = await this.$repositories(this.source).index({ page: this.currentPage });
            this.items = items
            this.paginatedItems = items
            this.totalRows = items.length
        },
        onCreate() {
            this.$router.push({ path: this.$route.path + "#create" });
            this.target = 'create';
        },
        onRowSelected(items) {
            this.$router.push({ path: this.$route.path + "#" + items[0].id })
            this.target = 'edit';
        },
        onDelete(id) {
            const foundIndex = this.items.findIndex((item) => item.id == id);
            this.items.splice(foundIndex, 1)
        },
        onInit() {
            if (this.$route.fullPath.includes('#create')) {
                this.target = 'create';
                this.formFields = this.create.fields
            }
            else if (this.$route.fullPath.includes('#')) {
                this.target = 'edit';
                this.formFields = this.edit.fields
            }
            else {
                this.target = 'index';
            }
            this.getData();
        }
    },
    mounted() {
        this.onInit()
    }
}
</script>