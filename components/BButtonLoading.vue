<template>
    <div>
        <b-button :class="$props.childClass" v-bind="$props" :disabled="loading == true || $props.disabled">
            <font-awesome-icon icon="fa fa-spinner" spin v-if="loading == true" />
            <slot></slot>
        </b-button>
    </div>
</template>

<script>
export default {
    name: "BButtonLoading",
    props: ['variant', 'type', 'block', 'childClass', 'disabled', 'loading'],
}
</script>

<style lang="scss" scoped>

</style>