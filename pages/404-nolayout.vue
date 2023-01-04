<template>
    <div class="d-flex align-items-center justify-content-center vh-100 bg-white w-100">
        <div class="text-center row">
            <div class=" col-md-12 mt-5">
                <div class="error mx-auto" data-text="500">500</div>
                <p class="lead">
                    Opps! Internal Server Error!
                </p>
                <a href="/" class="btn btn-primary">Go Home</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'empty',
    middleware: 'auth',
}
</script>

<style lang="scss" scoped>

</style>