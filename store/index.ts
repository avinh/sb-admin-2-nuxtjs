import { Auth } from "@nuxtjs/auth-next"

interface State {
    sidebarToggleTop: boolean,
    auth: Auth
}

export const state = () => ({
    sidebarToggleTop: true,
})

export const getters = {
    isAuthenticated(state:State) {
        return state.auth.loggedIn
    },

    loggedInUser(state:State) {
        return state.auth.user
    }
}

export const mutations = {
    setSidebarToggleTop(state: State, data: boolean) {
        if (data == null || data == undefined) {
            state.sidebarToggleTop = !state.sidebarToggleTop;
            return 
        }
        state.sidebarToggleTop = data;
    },
}

export const actions = {
}