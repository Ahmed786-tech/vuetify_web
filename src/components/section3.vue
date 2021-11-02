<template>
  <div>
    <v-container fluid class="pb-10" style="background-color: #24637d">
      <div class="py-lg-10 mt-10 mt-lg-10">
        <h2 class="text-center white--text font-weight-light text-lg-h3">
          Diese Unternehmen vertrauen bereits auf <br />unsere Expertise im
          Bereich Medizintechnik
        </h2>
      </div>
      <div class="px-lg-16 py-9">
        <v-divider dark></v-divider>
      </div>
      <v-carousel cycle continuous hide-delimiter-background class="mt-lg-10" v-model="model">
        <v-carousel-item class="px-lg-16">
          <v-row>
            <v-col cols="12" lg="2" md="2">
              <v-img
                max-height="100"
                src="@/assets/images/carousel_img.png"
              ></v-img>
            </v-col>
            <v-col cols="12" lg="10" md="10">
              <v-card color="#3d96a7" class="pb-10" elevation="" max-width="">
                <div class="px-lg-16 px-6 py-5 py-lg-16">
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6 white--text"
                  >
                    REFERENZ | MEDIZINTECHNIK
                  </h3>
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6"
                    style="color: #5bd4db"
                  >
                    FLEIMA-PLASTIC GmbH | www.fleima-plastic.de
                  </h3>
                  <div class="py-5">
                    <v-divider
                      width="20%"
                      max-width="100%"
                      color="white"
                      class=""
                    ></v-divider>
                  </div>
                  <h1
                    class="font-weight-regular white--text text-lg-h4 text-h5"
                  >
                    Die FLEIMA-PLASTIC GmbH ist ein Unternehmen
                    <br />
                    mit einem Full-Service Angebot rund um die <br />
                    Kunststoffverarbeitung.
                  </h1>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item class="px-lg-16">
          <v-row>
            <v-col cols="12" lg="2" md="2">
              <v-img
                max-height="100"
                src="@/assets/images/carousel_img.png"
              ></v-img>
            </v-col>
            <v-col cols="12" lg="10" md="10">
              <v-card color="#3d96a7" class="pb-10" elevation="" max-width="">
                <div class="px-lg-16 px-6 py-5 py-lg-16">
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6 white--text"
                  >
                    REFERENZ | MEDIZINTECHNIK
                  </h3>
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6"
                    style="color: #5bd4db"
                  >
                    FLEIMA-PLASTIC GmbH | www.fleima-plastic.de
                  </h3>
                  <div class="py-5">
                    <v-divider
                      width="20%"
                      max-width="100%"
                      color="white"
                      class=""
                    ></v-divider>
                  </div>
                  <h1
                    class="font-weight-regular white--text text-lg-h4 text-h5"
                  >
                    Die FLEIMA-PLASTIC GmbH ist ein Unternehmen
                    <br />
                    mit einem Full-Service Angebot rund um die <br />
                    Kunststoffverarbeitung.
                  </h1>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
        <v-carousel-item class="px-lg-16">
          <v-row>
            <v-col cols="12" lg="2" md="2">
              <v-img
                max-height="100"
                src="@/assets/images/carousel_img.png"
              ></v-img>
            </v-col>
            <v-col cols="12" lg="10" md="10">
              <v-card color="#3d96a7" class="pb-10" elevation="" max-width="">
                <div class="px-lg-16 px-6 py-5 py-lg-16">
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6 white--text"
                  >
                    REFERENZ | MEDIZINTECHNIK
                  </h3>
                  <h3
                    class="font-weight-light text-body-2 text-lg-h6"
                    style="color: #5bd4db"
                  >
                    FLEIMA-PLASTIC GmbH | www.fleima-plastic.de
                  </h3>
                  <div class="py-5">
                    <v-divider
                      width="20%"
                      max-width="100%"
                      color="white"
                      class=""
                    ></v-divider>
                  </div>
                  <h1
                    class="font-weight-regular white--text text-lg-h4 text-h5"
                  >
                    Die FLEIMA-PLASTIC GmbH ist ein Unternehmen
                    <br />
                    mit einem Full-Service Angebot rund um die <br />
                    Kunststoffverarbeitung.
                  </h1>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>

      <div class="d-flex justify-center py-10">
        <v-btn class="pt-3" large outlined elevation="" color="#61dce1"
          >Alle refernzen</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>