<template>
  <v-app>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row class="fill-height justify-end align-center">
          <v-col class="col-6 align-center">
            <v-row class="justify-center">
              <v-card class="col-8 pa-16">
                <v-row class="justify-center mt-16">
                  <v-btn 
                    color="primary" 
                    block 
                    @click="logar"
                    :disabled="loading"
                    >
                    <v-progress-circular
                      indeterminate
                      v-if="loading"
                      >
                    </v-progress-circular>
                    Entrar
                  </v-btn>
                </v-row>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
    name: 'Login',
    data: () => ({
        loading: false
    }),
    methods: {
        logar() {
            this.$router.push('/home')
        }
    }
}
</script>
