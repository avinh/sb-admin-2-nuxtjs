import { Inject } from '@nuxt/types/app';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import createRepository from '~/repositories'

export default (ctx: {
    $axios: NuxtAxiosInstance
}, inject: Inject) => {
    // inject the repository in the context (ctx.app.$repository)
    // And in the Vue instances (this.$repository in your components)
    const repositories = createRepository(ctx.$axios)
    inject('repositories', repositories)
}
