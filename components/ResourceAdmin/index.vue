<template>
    <div v-if="target">
        <div v-if="target === 'index'">
            <b-card>
                <b-card-body>
                    <b-row>
                        <b-col class="d-flex justify-content-end">
                            <b-button variant="primary" @click="onCreate">
                                <span class="icon text-white-50">
                                    <font-awesome-icon :icon="`fa fa-plus`" />
                                </span>
                                <span class="text">Create</span>
                            </b-button>
                        </b-col>
                    </b-row>

                    <b-table :items="items" responsive v-bind="$props" class="mt-2" selectable :select-mode="'single'"
                        @row-selected="onRowSelected">
                        <template #table-busy>
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Loading...</strong>
                            </div>
                        </template>
                    </b-table>
                    <b-row>
                        <b-col class="d-flex justify-content-end">
                            <b-pagination @change="onPageChanged" :total-rows="totalRows" :per-page="perPageLocal"
                                v-model="currentPage" class="my-0" />
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>

        </div>
        <div v-if="target !== 'index'">
            <ResourceAdminForm :fields="create" :source="source" :target="target"
                :onTarget="(target) => { this.target = target }" :onDelete="onDelete" />
        </div>
    </div>
</template>

<script>
export default {
    name: "ResourceAdmin",
    props: ['fields', 'perPage', 'source', 'create'],
    data() {
        return {
            items: null,
            paginatedItems: 0,
            currentPage: 1,
            perPageLocal: this.$props.perPage ?? 10,
            totalRows: 0,
            target: null
        }
    },
    watch: {
        $route(to) {
            if (to.fullPath.includes('#create')) {
                this.target = 'create';
            }
            else if (to.fullPath.includes('#')) {
                this.target = 'edit';
            }
            else {
                this.target = 'index';
            }
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
        }
    },
    mounted() {
        if (this.$route.fullPath.includes('#create')) {
            this.target = 'create';
        }
        else if (this.$route.fullPath.includes('#')) {
            this.target = 'edit';
        }
        else {
            this.target = 'index';
        }
        this.getData();
    }
}
</script>