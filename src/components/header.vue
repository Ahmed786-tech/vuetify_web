<template>
  <div>
    <div>
      <div
        class="py-4 d-none d-lg-block d-md-block"
        style="background-color: #24637d"
      ></div>
      <div class="top-menu1 py-10" v-show="showNav">
        <v-container class="">
          <v-row>
            <v-col cols="3">
              <p class="btnColor">jbhbhb</p>
              <p class="btnColor">nhjhbh</p>
              <p class="btnColor">jbjhbjh</p>
              <p class="btnColor">jbhbhb</p>
              <p class="btnColor">nhjhbh</p>
              <p class="btnColor">jbjhbjh</p>
            </v-col>
            <v-col cols="3">
              <p class="btnColor">jbhbhb</p>
              <p class="btnColor">nhjhbh</p>
              <p class="btnColor">jbjhbjh</p>
              <p class="btnColor">jbhbhb</p>
              <p class="btnColor">nhjhbh</p></v-col
            >
            <v-col cols="3">
              <p class="btnColor">nhjhbh</p>
              <p class="btnColor">jbjhbjh</p>
              <p class="btnColor">jbhbhb</p></v-col
            >
            <v-col cols="3" class="d-flex flex-column align-end justify-end">
              <v-img
                alt="Vuetify Logo"
                class="shrink text-center"
                src="https://gracious-volhard-367eab.netlify.app/_nuxt/img/mega-phone.78e2976.svg"
                transition="scale-transition"
              />
              <v-btn
                large
                outlined
                elevation=""
                color="#4dbad1"
                class="mt-3 pt-3 text-center"
                >UNSERE ANWENDERBERICHTE</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div class="top-menu d-none d-lg-flex d-md-flex">
        <div class="menu-bar d-flex" style="background-color: #3d96a7; width: 350px">
          <v-text-field dark hide-details clear-icon="" type="" error-count="" v-model="input"
    label="" :append-icon="appendIcon" @click:append="clickHandler" filled ></v-text-field>
          
        </div>
        <div
          class="theme-switch ml-3 px-4 pt-4"
          style="background-color: #3d96a7"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4O30uYSwuY3tzdHJva2U6IzAwMzU0Nzt9LmJ7Y2xpcC1wYXRoOnVybCgjYSk7fS5je2ZpbGw6IzAwMzU0Nzt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIxMCIgY3k9IjEwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzI3LjA3MSAtNTI0LjY0MykiPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzI4LjU3MSA1MjYuMTQzKSI+PHBhdGggY2xhc3M9ImMiIGQ9Ik0wLDBIMjUuNTY0VjM4LjVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNDk5IC05LjI0OCkiLz48L2c+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjEwIiBjeT0iMTAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzI4LjU3MSA1MjYuMTQzKSIvPjwvZz48L3N2Zz4="
            width="18"
            alt="Switch"
            class="link"
          />
        </div>
      </div>
      <v-app-bar
        align="end"
        align-end
        justify-end
        color="#0F3547"
        height="150"
        flat
        dark
        style="border-bottom: 1px solid #61dbe0"
      >
        <div class="d-flex align-end" style="width: 100%">
          <div class="d-none d-lg-block d-md-block pa-lg-8 pa-md-8">
            <v-img
              alt="Vuetify Logo"
              class="shrink ml-lg-6 ml-sm-2 mr-2 mr-sm-0"
              src="@/assets/images/logo.2db837a.svg"
              transition="scale-transition"
              max-width="200"
            />
          </div>
          <div class="d-lg-none d-md-none pa-lg-8 pa-md-8">
            <v-img
              alt="Vuetify Logo"
              class="shrink ml-lg-6 ml-sm-2 mr-2 mr-sm-0"
              src="@/assets/images/logo.2db837a.svg"
              transition="scale-transition"
              max-width="130"
            />
          </div>

          <div class="flex-wrap ml-8 mb-8 d-none d-md-flex">
            <div
              @mouseover="showNav = !showNav"
              class="text-uppercase pr-10 text-h5 borderClass btnColor"
            >
              Branchen
            </div>
            <div class="text-uppercase px-10 text-h5 borderClass btnColor">
              Aktuelles
            </div>
            <div class="text-uppercase px-10 text-h5 btnColor">Aktuelles</div>
          </div>
          <v-spacer></v-spacer>
          <div class="hidden-md-and-up mr-3">
            <v-btn
              @click="showDialog = true"
              small
              icon
              class="float-right"
              elevation=""
              color=""
            >
              <v-icon color="#24637D">mdi-menu mdi-36px</v-icon>
            </v-btn>
          </div>
        </div>
      </v-app-bar>

      <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="transition-none"
      >
        <v-card color="#24637D">
          <v-toolbar
            dark
            flat
            height="auto"
            style="border-bottom: 1px solid #a7ffeb !important"
            color="transparent"
          >
            <div class="pa-8">
              <v-img
                class="shrink ml-6 ml-sm-2 mr-2 mr-sm-0"
                contain
                src="@/assets/images/logo.2db837a.svg"
                transition="scale-transition"
                width="150"
              />
            </div>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="showDialog = false">
              <v-icon color="#3D96A7">mdi-close mdi-24px</v-icon>
            </v-btn>
          </v-toolbar>
          <div class="d-flex ma-3">
            <v-text-field
              background-color="#3D96A7"
              type=""
              error-count=""
              placeholder="snsas"
              label=""
              append-icon="mdi-magnify"
              hide-details=""
              solo
              flat
              color
            ></v-text-field>

            <div
              class="theme-switch ml-3 px-4 pt-4"
              style="background-color: #3d96a7"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6M3B4O30uYSwuY3tzdHJva2U6IzAwMzU0Nzt9LmJ7Y2xpcC1wYXRoOnVybCgjYSk7fS5je2ZpbGw6IzAwMzU0Nzt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIxMCIgY3k9IjEwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzI3LjA3MSAtNTI0LjY0MykiPjxnIGNsYXNzPSJiIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzI4LjU3MSA1MjYuMTQzKSI+PHBhdGggY2xhc3M9ImMiIGQ9Ik0wLDBIMjUuNTY0VjM4LjVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNDk5IC05LjI0OCkiLz48L2c+PGNpcmNsZSBjbGFzcz0iYSIgY3g9IjEwIiBjeT0iMTAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzI4LjU3MSA1MjYuMTQzKSIvPjwvZz48L3N2Zz4="
                width="18"
                alt="Switch"
                class="link"
              />
            </div>
          </div>
          <div class="text-center">
            <div v-for="(item, i) in arrays" :key="i">
              <h1 @click="selectedIndex = i" class="font-weight-light btnColor">
                {{ item.name }}
              </h1>
              <div
                v-show="selectedIndex == i"
                v-for="(subitem, index) in item.menu"
                :key="index"
              >
                <p class="btnColor">{{ subitem }}</p>
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    appendIcon: 'mdi-magnify',
    input:'User Portal',
    selectedIndex: -1,
    showNav: false,
    showDialog: false,
    arrays: [
      {
        name: "Branchen",
        menu: ["name", "name", "name", "name", "name", "name"],
      },
      {
        name: "newAktuelles",
        menu: ["name", "name", "name", "name", "name", "name"],
      },
      {
        name: "Aktuelles",
        menu: ["name", "name", "name", "name", "name", "name"],
      },
    ],
    
  }),
  methods: {
      clickHandler() {
        this.input = ''
        this.appendIcon = 'mdi-close'
      }
    },
};
</script>
<style scoped>
::v-deep .v-text-field--filled{
      background-color: #3d96a7;
      border-radius: 0 0 0 0;
  }
.borderClass {
  border-right: 0.5px solid #fff;
}
.btnColor {
  color: #fff;
}
.btnColor:hover {
  color: #00d8de;
}
.appbarcolor {
  color: #00d8de;
}
.top-menu {
  width: auto;
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 1;
}
.top-menu1 {
  width: 100%;
  position: absolute;
  top: 182px;
  z-index: 1;
  border-bottom: 1px solid #a7ffeb;
  background-color: #0f3547;
}
.setPosition {
  position: absolute;
  top: 0;
  background-color: red;
  height: 100vh;
  z-index: 1;
}
</style>