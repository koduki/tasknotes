<template>
  <div id="app">
    <div
      class=".header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
      <h5 class="my-0 mr-md-auto title-logo">
        <router-link to="/home">
          <img src="/banner.png" />
        </router-link>
      </h5>
      <b-button
        id="show-btn"
        @click="$bvModal.show('bv-modal-profile')"
        variant="link"
        v-show="this.user().id"
      >
        <img :src="this.user().pic" width="32px" height="32px" />
      </b-button>
      <b-modal id="bv-modal-profile" hide-footer>
        <template v-slot:modal-title>ログアウト</template>
        <b-button class="mt-3" block @click="logout()">Logout</b-button>
      </b-modal>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Auth from "@/modules/auth";

export default {
  metaInfo: {
    title: "task.Notes",
    meta: [
      {
        property: "og:site_name",
        content: "task.Notes",
      },
      {
        property: "og:title",
        content: "Markdownのメモをチケットとしてタスク管理できるツール",
      },
      {
        property: "og:url",
        content: "https://tasknotes.nklab.dev/",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:description",
        content: "JIRAやREDMINEのようなチケット管理は便利ですが、ちょっとタスクを作るのに気構えちゃいますよね。task.Notesはもっと気軽にタスクを作れます",
      },
      {
        property: "og:image",
        content: "https://tasknotes.nklab.dev/tasknote_og.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@koduki",
      },
    ],
  },
  data() {
    return {
      user() {
        return Auth.user();
      },
    };
  },
  methods: {
    logout() {
      const self = this;
      this.$bvModal.hide("bv-modal-profile");
      Auth.logout(() => self.$router.push("/"));
    },
  },
};
</script>
