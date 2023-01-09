<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        :class="sidebarToggleTop ? '' : 'toggled'">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon rotate-n-15">
                <font-awesome-icon icon="fas fa-laugh-wink" />
            </div>
            <div class="sidebar-brand-text mx-3">Admin <sup>vue</sup></div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <li class="nav-item" v-bind:key="itemMenu.id" :class="isRouteActive(itemMenu) ? 'active' : ''"
            v-for="itemMenu in menuList">

            <NuxtLink block v-b-toggle="`collapse-${itemMenu.id}`" :data-toggle="itemMenu.sub ? 'collapse' : ''"
                variant="primary" class="nav-link" v-if="itemMenu.name" :to="itemMenu.link ?? '#'">
                <font-awesome-icon :icon="itemMenu.icon" />
                <span>{{ itemMenu.name }}</span>
            </NuxtLink>

            <BDivider v-if="itemMenu.id === 'divider'" childClass="sidebar-divider" />

            <b-collapse v-if="itemMenu.sub" :id="`collapse-${itemMenu.id}`" :visible="isRouteActive(itemMenu)"
                class="mt-2" accordion="menu-accordion">
                <div class="bg-white py-2 collapse-inner rounded">
                    <div v-bind:key="itemMenuSub.id" v-for="itemMenuSub in itemMenu.sub">
                        <h6 class="collapse-header" v-if="itemMenuSub.name">{{ itemMenuSub.name }}</h6>
                        <a class="collapse-item" :href="itemMenuSubItem.link"
                            :class="isRouteActive(itemMenuSubItem) ? 'active' : ''"
                            v-for="itemMenuSubItem in itemMenuSub.items" v-bind:key="itemMenuSubItem.id">{{
                                itemMenuSubItem.name
                            }}</a>
                        <div class="collapse-divider"></div>
                    </div>
                </div>
            </b-collapse>
        </li>

        <!-- Divider -->
        <BDivider childClass="sidebar-divider" />

        <!-- Sidebar Toggler (Sidebar) -->
        <!-- <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" @click="onClickSidebar"></button>
        </div> -->
        <div class="text-center d-none d-md-inline">
            <b-button variant="primary" class="rounded-circle border-0" id="sidebarToggle" @click="onClickSidebar">
                <font-awesome-icon :icon="`fas ${sidebarToggleTop ? 'fa-angle-left' : 'fa-angle-right'}`" />
            </b-button>
        </div>

    </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import BDivider from '~/components/BDivider.vue';
import { sidebarConfig } from '~/configs/sidebar';

export default {
    name: "SideBar",
    data() {
        return {
            menuList: sidebarConfig,
        };
    },
    computed: {
        ...mapState({
            sidebarToggleTop: state => state.sidebarToggleTop,
            subMenuActiveId: state => state.subMenuActiveId,
        }),
    },
    mounted: function () {
        this.$nextTick(function () {
            this.onResize();
        });
        window.addEventListener("resize", this.onResize);
    },
    methods: {
        ...mapMutations([
            "setSidebarToggleTop",
            "setSubMenuActiveId"
        ]),
        onClickSidebar() {
            this.setSidebarToggleTop();
        },
        isRouteActive(menuItem) {
            if (menuItem.link === this.$route.fullPath) {
                return true;
            }
            if (menuItem.sub) {
                let length = menuItem.sub.length;
                for (let i = 0; i < length; i++) {
                    const itemSub = menuItem.sub[i];
                    let found = itemSub.items.find((item) => this.$route.path.includes(item.link));
                    if (found) {
                        return true;
                    }
                }
            }
            return false;
        },
        onResize() {
            let windowWidth = window.innerWidth;
            if (windowWidth < 768) {
                this.setSidebarToggleTop(false);
            }

            if (windowWidth < 480 && !this.sidebarToggleTop) {
                this.setSidebarToggleTop(false);
            }
        }
    },
    components: { BDivider }
}
</script>

<style lang="scss" scoped>

</style>