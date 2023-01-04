<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <!-- Sidebar Toggle (Topbar) -->
            <button class="btn btn-link d-md-none rounded-circle mr-3" @click="onClickSidebar" id="sidebarToggle">
                <font-awesome-icon icon="fa fa-bars" />
            </button>

            <!-- Topbar Search -->
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <font-awesome-icon icon="fas fa-search fa-sm" />
                        </button>
                    </div>
                </div>
            </form>

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Nav Item - User Information -->
                <li class="nav-item dropdown no-arrow">
                    <b-dropdown class="nav-link dropdown-toggle" no-caret>
                        <template #button-content>
                            <span class="mr-2 d-lg-inline small">Admin</span>
                            <img class="img-profile rounded-circle" src="/img/undraw_profile.svg" />
                        </template>
                        <b-dropdown-item>
                            <font-awesome-icon icon="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            Profile
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <font-awesome-icon icon="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                            Settings
                        </b-dropdown-item>
                        <div class="dropdown-divider"></div>
                        <b-dropdown-item @click="logout">
                            <font-awesome-icon icon="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            Logout
                        </b-dropdown-item>
                    </b-dropdown>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';

export default {
    name: 'TopBar',
    computed: {
        ...mapState({
            sidebarToggleTop: state => state.sidebarToggleTop,
        }),
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        ...mapMutations([
            'setSidebarToggleTop'
        ]),
        onClickSidebar() {
            this.setSidebarToggleTop()
        },
        async logout() {
            await this.$auth.logout();
            this.$router.push({path: '/login'});
        },
    },
}
</script>

<style lang="scss" scoped>

</style>