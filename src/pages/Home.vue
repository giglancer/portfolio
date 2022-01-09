<template>
  <div id="app">
    <div class="main">
      <div class="wrapper">
        <HeaderVue></HeaderVue>
        <main class="content">
          <!-- split -->
          <div class="split">
            <div class="split-body">
              <p class="split-title">Keiya<br />Kanamori</p>
              <p class="split-text">
                國學院大學経済学部経済学部 卒業<br />
                都内SIerに入社<br />
                フロントエンドとネイティブ領域の業務に携わっています。<br />
              </p>
            </div>
            <div class="split-img"></div>
          </div>
          <!-- /split -->

          <!-- works -->
          <section class="works section" id="works">
            <div class="inner">
              <h2 class="title">WORKS</h2>
              <div class="works-list">
                <div
                  class="works-item"
                  v-for="work in works"
                  :key="work.id"
                  @click="openModel(work)"
                >
                  <p class="works-img"><img :src="work.images[0]" alt="" /></p>
                  <p class="works-name">{{ work.title }}</p>
                  <p class="works-info">{{ work.overView }}</p>
                </div>
              </div>
            </div>
            <WorksModalVue
              :value="postItem"
              v-show="showContent"
              @close="closeModel"
            ></WorksModalVue>
          </section>
          <!-- /works -->

          <!-- skill -->
          <section class="skill section" id="skill">
            <div class="inner">
              <h2 class="title">SKILL</h2>
              <div class="skill-list">
                <div class="skill-item" v-for="skill in skills" :key="skill.id">
                  <p class="skill-img">
                    <img :src="skill.src" :alt="skill.name" />
                  </p>
                  <div class="skill-body">
                    <h3 class="skill-name">{{ skill.name }}</h3>
                    <p class="skill-text">{{ skill.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- /skill -->

          <!-- contact -->
          <section class="contact section" id="contact">
            <div class="inner">
              <h2 class="title">CONTACT</h2>
              <p class="lead">
                お問い合わせは、<br
                  class="sp-only"
                />メールにてお願いいたします。
              </p>
              <div class="contact-list">
                <span class="contact-item">keiya.kanamori@gmail.com</span>
              </div>
            </div>
          </section>
          <!-- /contact -->
        </main>
        <FooterVue></FooterVue>
      </div>
    </div>
  </div>
</template>

<script>
import "normalize.css";
import HeaderVue from "../components/Header.vue";
import FooterVue from "../components/Footer.vue";
import WorksModalVue from "../components/WorksModal.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
    WorksModalVue,
  },
  data: function () {
    return {
      showContent: true,
      postItem: "",
      skills: [
        {
          id: 1,
          name: "HTML/CSS",
          src: require("@/assets/img/html_logo_150.jpg"),
          desc: "経験年数2年 Sass BEM",
        },
        {
          id: 2,
          name: "Vue.js",
          src: require("@/assets/img/vue-logo-150x150.png"),
          desc: "経験年数2年 Vuex VueRouter",
        },
        {
          id: 3,
          name: "JavaScript",
          src: require("@/assets/img/js_logo_150.jpg"),
          desc: "経験年数2年",
        },
        {
          id: 4,
          name: "Android",
          src: require("@/assets/img/android.jpg"),
          desc: "経験年数１年 MVVM jetpack kotlin/java",
        },
      ],
      works: [
        {
          id: 1,
          title: "ポートフォリオサイト",
          overView: "自己紹介用のポートフォリオサイトです。",
          term: "2日",
          useLanguages: "HTML&CSS/Scss/Javascript/JQuery/slick.js/Vue.js",
          githubURL: "https://github.com/giglancer/potfolio.git",
          images: [
            require("@/assets/img/screenshot_portfolio1.png"),
            require("@/assets/img/screenshot_portfolio2.png"),
            require("@/assets/img/screenshot_portfolio3.png"),
          ],
        },
        {
          id: 2,
          title: "Todoリスト",
          overView: "MVVMアーキテクチャを使用したサンプルアプリ",
          term: "1週間",
          useLanguages: "Kotlin/MVVM/DataBinidng/ViewModel/KotlinCoroutine/Room/RecyclerView",
          githubURL: "https://github.com/giglancer/TodoList.git",
          images: [
            require("@/assets/img/todo1.png"),
            require("@/assets/img/todo2.png"),
            require("@/assets/img/todo3.png"),
          ],
        },
        {
          id: 3,
          title: "乗換検索アプリ",
          overView: "駅すぱあとAPIを使用した経路検索アプリ",
          term: "1か月",
          useLanguages: "Kotlin/KotlinCoroutine/Room/RecyclerView/HttpUrlConnection",
          githubURL: "https://github.com/giglancer/navinavi.git",
          images: [
            require("@/assets/img/navi1.png"),
            require("@/assets/img/navi2.png"),
            require("@/assets/img/navi3.png"),
          ],
        },
        {
          id: 4,
          title: "天気時計",
          overView: "OpenWeatherMapAPIを使用した天気＆時計アプリ",
          term: "1か月",
          useLanguages: "Kotlin/KotlinCoroutine/Okhttp3/Retrofit2/Moshi",
          githubURL: "https://github.com/giglancer/WeatherClock.git",
          images: [
            require("@/assets/img/weatherClock1.png"),
            require("@/assets/img/weatherClock2.png"),
            require("@/assets/img/weatherClock3.png"),
          ],
        },
      ],
    };
  },
  methods: {
    openModel(work) {
      this.showContent = true;
      this.postItem = work;
    },
    closeModel() {
      this.showContent = false;
    },
  },
};
</script>

<style>
.main {
  font-family: "Montserrat", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.8px;
  color: #333;
}

a {
  transition: opacity 0.3s;
  text-decoration: none;
  color: #1ca9e3;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
  border-style: none;
}

ul,
li {
  list-style: none;
}

.pc-only {
  display: block;
}

.sp-only {
  display: none;
}

/*--------------------------------
 レイアウト
---------------------------------*/
.section {
  padding: 80px 0;
}

.inner {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 40px;
}

/*--------------------------------
 見出し
---------------------------------*/
.title {
  font-size: 34px;
  font-weight: normal;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 40px;
  letter-spacing: 0.05em;
  color: #333;
}

.lead {
  margin-bottom: 30px;
}

/*--------------------------------
 スプリットスクリーン
---------------------------------*/
.split {
  display: flex;
  align-items: center;
}

.split-body {
  width: 50%;
  padding-right: 3%;
  padding-left: 10%;
}

.split-img {
  width: 50%;
  height: 95vh;
  background-image: url("../assets/img/notebook.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.split-title {
  font-size: 42px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

/*--------------------------------
 Works
---------------------------------*/
.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
}

.works-item {
  width: 31.74603%;
  margin-right: 1.5873%;
  margin-bottom: 40px;
  color: #333;
}

.works-item:hover {
  opacity: 0.9;
}

.works-item:nth-of-type(3n) {
  margin-right: 0;
}

.works-img img {
  border: 1px solid grey;
  max-width: 300px;
  max-height: 300px;
}

.works-name {
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
}

.works-info {
  font-size: 13px;
}

/*--------------------------------
 Skill
---------------------------------*/
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -50px;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 48%;
  margin-bottom: 50px;
}

.skill-img {
  width: 60px;
  height: auto;
  margin-right: 20px;
}

.skill-body {
  flex: 1;
}

.skill-name {
  margin-bottom: 3px;
}

/*--------------------------------
 Contact
---------------------------------*/
.contact-item:not(:last-child) {
  margin-right: 10px;
}

.contact-text {
  margin-top: 10px;
}
/*--------------------------------
 ページトップ
---------------------------------*/
.page-top {
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #f3f3f3;
}

.page-top .material-icons-outlined {
  vertical-align: bottom;
}

/*--------------------------------
 フッター
---------------------------------*/
.footer {
  padding: 30px;
  background-color: #333;
}

.copyright {
  font-size: 10px;
  text-align: center;
  color: #797979;
}
/*--------------------------------
 下層：Worksページ
---------------------------------*/
.article {
  padding: 80px 0;
}

.article-inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-title {
  margin-bottom: 20px;
  text-align: center;
}

.article-img {
  margin-bottom: 20px;
}

.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}

.article-info-title {
  font-size: 15px;
}

.article-body img {
  margin-bottom: 30px;
}

.article-body p {
  margin-bottom: 30px;
}

.home-link {
  text-align: center;
}

/*media Queries 767
----------------------------------------------------*/
@media screen and (max-width: 767px) {
  body {
    font-size: 13px;
    line-height: 1.7;
  }

  .header-nav {
    display: none;
  }

  .header-logo > a {
    font-size: 15px;
  }

  .pc-only {
    display: none;
  }

  .sp-only {
    display: block;
  }

  /* 見出し */
  .title {
    font-size: 26px;
    margin-bottom: 20px;
  }

  /* レイアウト */
  .section {
    padding: 60px 0;
  }

  .inner {
    padding: 0 20px;
  }

  /* ヘッダー */
  .header-inner {
    padding: 20px;
  }

  .header-logo {
    font-size: 16px;
  }

  .header-nav-item:not(:last-child) {
    margin-right: 10px;
  }

  .header-nav-item a {
    font-size: 11px;
  }

  /* スプリットスクリーン */
  .split {
    flex-direction: column-reverse;
  }

  .split-body {
    width: 100%;
    padding-right: 3%;
    padding-left: 8%;
  }

  .split-img {
    width: 100%;
    height: 67vh;
    margin-bottom: 20px;
    background-image: url("../assets/img/notebook.jpg");
  }

  .split-title {
    font-size: 32px;
  }

  /* Works */
  .works-name {
    font-size: 10px;
  }

  .works-list {
    justify-content: space-between;
  }

  .works-item {
    flex: 0 0 48%;
    margin-right: 0;
    margin-bottom: 30px;
  }

  /* Skill */
  .skill-list {
    display: block;
    margin-bottom: 0;
  }

  .skill-item {
    width: 100%;
    margin-bottom: 35px;
  }

  .skill-item:last-child {
    margin-bottom: 0;
  }
}
</style>
