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

        <li class="nav-item" :class="isRouteActive(itemMenu) ? 'active' : ''" v-for="itemMenu in menuList">

            <NuxtLink block v-b-toggle="`collapse-${itemMenu.id}`" :data-toggle="itemMenu.sub ? 'collapse' : ''"
                variant="primary" class="nav-link" v-if="itemMenu.name" :to="itemMenu.link ?? '#'">
                <font-awesome-icon :icon="itemMenu.icon" />
                <span>{{ itemMenu.name }}</span>
            </NuxtLink>

            <BDivider v-if="itemMenu.id === 'divider'" childClass="sidebar-divider" />

            <b-collapse v-if="itemMenu.sub" :id="`collapse-${itemMenu.id}`" :visible="isRouteActive(itemMenu)"
                class="mt-2" accordion="menu-accordion">
                <div class="bg-white py-2 collapse-inner rounded">
                    <div v-for="itemMenuSub in itemMenu.sub">
                        <h6 class="collapse-header" v-if="itemMenuSub.name">{{ itemMenuSub.name }}</h6>
                        <a class="collapse-item" :href="itemMenuSubItem.link"
                            :class="isRouteActive(itemMenuSubItem) ? 'active' : ''"
                            v-for="itemMenuSubItem in itemMenuSub.items">{{ itemMenuSubItem.name }}</a>
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
                <font-awesome-icon :icon="`fas ${sidebarToggleTop ? 'fa-angle-left': 'fa-angle-right'}`" />
            </b-button>
        </div>

    </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import BDivider from '~/components/BDivider.vue';

export default {
    name: "SideBar",
    data() {
        return {
            menuList: [
                {
                    id: "dashboard",
                    name: "Dashboard",
                    link: "/",
                    icon: "fas fa-fw fa-tachometer-alt"
                },
                {
                    id: "divider"
                },
                {
                    id: "components",
                    name: "Components",
                    icon: "fas fa-fw fa-cog",
                    sub: [
                        {
                            name: "CUSTOM COMPONENTS:",
                            items: [
                                {
                                    id: "buttons",
                                    name: "Buttons",
                                    link: "/buttons"
                                },
                                {
                                    id: "cards",
                                    name: "Cards",
                                    link: "/cards"
                                },
                                {
                                    id: "table",
                                    name: "Table",
                                    link: "/table"
                                },
                            ]
                        }
                    ]
                },
                {
                    id: "pages",
                    name: "Pages",
                    icon: "fas fa-fw fa-folder",
                    sub: [
                        {
                            name: "OTHER PAGES:",
                            items: [
                                {
                                    id: "404",
                                    name: "404",
                                    link: "/404"
                                },
                                {
                                    id: "404-nolayout",
                                    name: "404 No Layout",
                                    link: "/404-nolayout"
                                }
                            ]
                        }
                    ]
                }
            ],
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
            if (menuItem.link === this.$route.path) {
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
            ;
            if (windowWidth < 480 && !this.sidebarToggleTop) {
                this.setSidebarToggleTop(false);
            }
            ;
        }
    },
    components: { BDivider }
}
</script>

<style lang="scss" scoped>

</style>