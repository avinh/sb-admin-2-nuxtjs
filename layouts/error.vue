<template>
    <div class="d-flex align-items-center justify-content-center vh-100 bg-white w-100">
        <div class="text-center row">
            <div class=" col-md-12 mt-5">
                <div class="error mx-auto" data-text="404">404</div>
                <div class="lead">
                    <p class="lead text-gray-800 mb-5">Page Not Found</p>
                    <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                </div>
                <a href="/" class="btn btn-primary">Go Home</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "ErrorPage",
    layout: 'empty',
    props: ['error'],
}
</script>

