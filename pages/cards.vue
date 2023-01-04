<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Cards</h1>
        </div>

        <div class="row">

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <b-card class="border-left-primary shadow h-100 py-2" no-body>
                    <b-card-body>
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Earnings (Monthly)</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>

            <!-- Earnings (Annual) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <b-card class="border-left-success shadow h-100 py-2" no-body>
                    <b-card-body>
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Earnings (Annual)</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>

            <!-- Tasks Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <b-card class="border-left-info shadow h-100 py-2" no-body>
                    <b-card-body>
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                </div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-sm mr-2">
                                            <div class="progress-bar bg-info" role="progressbar" style="width: 50%"
                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <b-card class="border-left-warning shadow h-100 py-2" no-body>
                    <b-card-body>
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Pending Requests</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-6">

                <!-- Default Card Example -->
                <b-card class="mb-4" no-body>
                    <b-card-header>
                        Default Card Example
                    </b-card-header>
                    <b-card-body>
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </b-card-body>
                </b-card>

                <!-- Basic Card Example -->
                <b-card class="shadow mb-4" no-body>
                    <b-card-header class="py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                    </b-card-header>
                    <b-card-body>
                        The styling for this basic card example is created by using default Bootstrap
                        utility classes. By using utility classes, the style of the card component can be
                        easily modified with no need for any custom CSS!
                    </b-card-body>
                </b-card>

                <div>
                    <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
                        tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </div>
            </div>

            <div class="col-lg-6">

                <!-- Dropdown Card Example -->
                <b-card class="shadow mb-4" no-body>
                    <!-- Card Header - Dropdown -->
                    <b-card-header class="py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </b-card-header>
                    <!-- Card Body -->
                    <b-card-body>
                        Dropdown menus can be placed in the card header in order to extend the functionality
                        of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                        icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </b-card-body>
                </b-card>

                <!-- Collapsable Card Example -->
                <b-card class="shadow mb-4" no-body>
                    <!-- Card Header - Accordion -->
                    <b-card-header href="#collapseCardExample" class="d-block py-3" data-toggle="collapse" role="button"
                        aria-expanded="true" aria-controls="collapseCardExample">
                        <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                    </b-card-header>
                    <!-- Card Content - Collapse -->
                    <div class="collapse show" id="collapseCardExample">
                        <b-card-body>
                            This is a collapsable card example using Bootstrap's built in collapse
                            functionality. <strong>Click on the card header</strong> to see the card body
                            collapse and expand!
                        </b-card-body>
                    </div>
                </b-card>

                <b-card no-body>
                    <b-card-header header-tag="nav">
                        <b-nav card-header>
                            <h6 class="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                        </b-nav>
                    </b-card-header>

                    <b-card-body>
                        This is a collapsable card example using Bootstrap's built in collapse
                        functionality. <strong>Click on the card header</strong> to see the card body
                        collapse and expand!
                    </b-card-body>
                </b-card>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
}
</script>

<style lang="scss" scoped>

</style>