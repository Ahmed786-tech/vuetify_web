<template>
    <div>
        <v-container fluid style="background-color: #3d96a7" class="py-lg-16 px-lg-16">
            <div class="pl-lg-4 pt-lg-7">
                <h1 class="  text-lg-h3 white--text font-weight-light">Aktuelles</h1>
            </div>
            <v-row class="py-10">
                <v-col cols="12" lg="4" md="6">
                    <div class="px-3 py-3 card">
                        <div>
                            <v-img src="@/assets/images/news1.b201065.png">
                                <div class="py-4 px-4">
                                    <v-card class="py-3" elevation="" max-width="100">
                                        <h1 style="color: #5dd8de" class="text-center text-h4 ">19</h1>
                                        <h4 style="color: #25647e" class="text-center mt-1 font-weight-light">MÄRZ 2021
                                        </h4>
                                    </v-card>
                                </div>
                            </v-img>

                        </div>
                        <div>
                            <h3 class="font-weight-light text-body-2 text-lg-h6 white--text py-5">ERP &
                                Dokumentenmanagement als unschlagbares Doppel für mehr Effizienz

                            </h3>
                            <h3 class="font-weight-light text-body-2 text-lg-body-1 white--text">ERP und
                                Dokumentenmanagementsystem (DMS) sollten eng verzahnt sein, um das volle Potenzial einer
                                Prozessoptimierung ausschöpfen zu können. Im Idealfall ist das DMS in der ERP-Lösung
                                standardisiert integriert.

                            </h3>
                        </div>
                        <div class=" pt-4 d-flex">
                            <v-sheet class="py-0" color="#f4a346" elevation="1" height="20" rounded="xl" width="20">
                            </v-sheet>
                            <p class="px-3 white--text">Mehr erfahren</p>
                        </div>

                    </div>
                </v-col>
                 <v-col cols="12" lg="4" md="6">
                    <div class="px-3 py-3 card">
                        <div>
                            <v-img src="@/assets/images/news2.f18eede.png">
                                <div class="py-4 px-4">
                                    <v-card class="py-3" elevation="" max-width="100">
                                        <h1 style="color: #5dd8de" class="text-center text-h4 ">19</h1>
                                        <h4 style="color: #25647e" class="text-center mt-1 font-weight-light">MÄRZ 2021
                                        </h4>
                                    </v-card>
                                </div>
                            </v-img>

                        </div>
                        <div>
                            <h3 class="font-weight-light text-body-2 text-lg-h6 white--text py-5">ERP &
                                Dokumentenmanagement als unschlagbares Doppel für mehr Effizienz

                            </h3>
                            <h3 class="font-weight-light text-body-2 text-lg-body-1 white--text">ERP und
                                Dokumentenmanagementsystem (DMS) sollten eng verzahnt sein, um das volle Potenzial einer
                                Prozessoptimierung ausschöpfen zu können. Im Idealfall ist das DMS in der ERP-Lösung
                                standardisiert integriert.

                            </h3>
                        </div>
                        <div class=" pt-4 d-flex">
                            <v-sheet class="py-0" color="#f4a346" elevation="1" height="20" rounded="xl" width="20">
                            </v-sheet>
                            <p class="px-3 white--text">Mehr erfahren</p>
                        </div>

                    </div>
                </v-col>
            </v-row>
            <v-row class="pt-0 justify-center justify-lg-end justify-md-end">
                <v-col class="pt-0" cols="4" lg="2" md="2">
                        <v-btn class="pt-3 mb-10 " large elevation="0" outlined color="#61dbe0">learn more</v-btn>
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .card {
        transition: all .5s ease-in-out;
    }

    .card:hover {
        border: 2px solid #4ebac5;
        border-radius: 5px;
        transform: scale(1.050);
    }
</style>