<template>
    <div>
        <hr :class="$props.childClass" class="d-none d-md-block">
    </div>
</template>

<script>
export default {
    name: "BDivider",
    props: ['childClass'],
}
</script>

<style lang="scss" scoped>

</style>