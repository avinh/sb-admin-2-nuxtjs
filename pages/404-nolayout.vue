<template>
    <div class="d-flex align-items-center justify-content-center vh-100 bg-white w-100">
        <div class="text-center row">
            <div class=" col-md-12 mt-5">
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
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