<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-4 text-gray-800">Buttons</h1>

        <div class="row">

            <div class="col-lg-6">

                <!-- Circle Buttons -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                    </div>
                    <div class="card-body">
                        <p>Use Font Awesome Icons (included with this theme package) along with the circle
                            buttons as shown in the examples below!</p>
                        <!-- Circle Buttons (Default) -->
                        <div class="mb-2">
                            <code>.btn-circle</code>
                        </div>
                        <b-button variant="primary" class="btn-circle">
                            <font-awesome-icon :icon="`fa-angle-left`"/>
                        </b-button>
                        <b-button variant="success" class="btn-circle">
                            <font-awesome-icon :icon="`fas fa-check`"/>
                        </b-button>
                        <b-button variant="info" class="btn-circle">
                            <font-awesome-icon :icon="`fas fa-info-circle`"/>
                        </b-button>
                        <b-button variant="warning" class="btn-circle">
                            <font-awesome-icon :icon="`fas fa-exclamation-triangle`"/>
                        </b-button>
                        <b-button variant="danger" class="btn-circle">
                            <font-awesome-icon :icon="`fas fa-trash`"/>
                        </b-button>
                        <!-- Circle Buttons (Small) -->
                        <div class="mt-4 mb-2">
                            <code>.btn-circle .btn-sm</code>
                        </div>
                        <b-button variant="primary" class="btn-circle btn-sm">
                            <font-awesome-icon :icon="`fa-angle-left`"/>
                        </b-button>
                        <b-button variant="success" class="btn-circle btn-sm">
                            <font-awesome-icon :icon="`fas fa-check`"/>
                        </b-button>
                        <b-button variant="info" class="btn-circle btn-sm">
                            <font-awesome-icon :icon="`fas fa-info-circle`"/>
                        </b-button>
                        <b-button variant="warning" class="btn-circle btn-sm">
                            <font-awesome-icon :icon="`fas fa-exclamation-triangle`"/>
                        </b-button>
                        <b-button variant="danger" class="btn-circle btn-sm">
                            <font-awesome-icon :icon="`fas fa-trash`"/>
                        </b-button>
                        <!-- Circle Buttons (Large) -->
                        <div class="mt-4 mb-2">
                            <code>.btn-circle .btn-lg</code>
                        </div>
                        <b-button variant="primary" class="btn-circle btn-lg">
                            <font-awesome-icon :icon="`fa-angle-left`"/>
                        </b-button>
                        <b-button variant="success" class="btn-circle btn-lg">
                            <font-awesome-icon :icon="`fas fa-check`"/>
                        </b-button>
                        <b-button variant="info" class="btn-circle btn-lg">
                            <font-awesome-icon :icon="`fas fa-info-circle`"/>
                        </b-button>
                        <b-button variant="warning" class="btn-circle btn-lg">
                            <font-awesome-icon :icon="`fas fa-exclamation-triangle`"/>
                        </b-button>
                        <b-button variant="danger" class="btn-circle btn-lg">
                            <font-awesome-icon :icon="`fas fa-trash`"/>
                        </b-button>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">

                <!-- Circle Buttons -->
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Loading Buttons</h6>
                    </div>
                    <div class="card-body">
                        <b-button-loading variant="primary" :loading="true">
                            Loading...
                        </b-button-loading>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                    </div>
                    <div class="card-body">
                        <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                            the markup in the examples below. The examples below also use the
                            <code>.text-white-50</code> helper class on the icons for additional styling,
                            but it is not required.
                        </p>
                        <b-button variant="primary">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-flag`"/>
                            </span>
                            <span class="text">Split Button Primary</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="success">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-check`"/>
                            </span>
                            <span class="text">Split Button Success</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="info">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-info-circle`"/>
                            </span>
                            <span class="text">Split Button Info</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="warning">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-exclamation-triangle`"/>
                            </span>
                            <span class="text">Split Button Warning</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="danger">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-trash`"/>
                            </span>
                            <span class="text">Split Button Danger</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="secondary">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-arrow-right`"/>
                            </span>
                            <span class="text">Split Button Secondary</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="light">
                            <span class="icon text-gray-600">
                                <font-awesome-icon :icon="`fas fa-arrow-right`"/>
                            </span>
                            <span class="text">Split Button Light</span>
                        </b-button>
                        <div class="mb-4"></div>
                        <p>Also works with small and large button classes!</p>
                        <b-button variant="primary" class="btn-icon-split btn-sm">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-flag`"/>
                            </span>
                            <span class="text">Split Button Small</span>
                        </b-button>
                        <div class="my-2"></div>
                        <b-button variant="primary" class="btn-icon-split btn-lg">
                            <span class="icon text-white-50">
                                <font-awesome-icon :icon="`fas fa-flag`"/>
                            </span>
                            <span class="text">Split Button Large</span>
                        </b-button>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
  
<script lang="ts">

export default {
    name: "IndexPage",
    middleware: 'auth',
    components: {}
}
</script>
  