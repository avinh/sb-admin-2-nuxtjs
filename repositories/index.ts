import { NuxtAxiosInstance } from "@nuxtjs/axios"

export default ($axios: NuxtAxiosInstance) => (resource: any) => ({
    index(params: any) {
        return $axios.$get(`/${resource}`, {params})
    },

    create(payload: any) {
        return $axios.$post(`/${resource}`, payload)
    },

    show(id: any) {
        return $axios.$get(`/${resource}/${id}`)
    },

    update(payload: any, id: any) {
        return $axios.$put(`/${resource}/${id}`, payload)
    },

    delete(id: any) {
        return $axios.$delete(`/${resource}/${id}`)
    }
})