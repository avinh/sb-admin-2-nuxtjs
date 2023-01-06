<template>
    <div>
        <b-card>
            <b-card-body>
                <div v-if="target === 'index'">
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

                    <b-table :items="items" responsive v-bind="$props" class="mt-2">
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
                </div>
                <div v-if="target === 'create'">
                    <ResourceCreate :fields="create" :source="source"/>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Resource",
    props: ['fields', 'perPage', 'source', 'create'],
    data() {
        return {
            items: null,
            paginatedItems: 0,
            currentPage: 1,
            perPageLocal: this.$props.perPage ?? 10,
            totalRows: 0,
            target: "index"
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
        }
    },
    mounted() {
        this.getData()
    }
}
</script>