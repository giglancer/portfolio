<template>
  <div id="overlay">
    <div id="content">
      <div class="content__close">
        <img
          src="../assets/img/close_icon.png"
          alt="閉じるアイコン"
          class="content__close__img"
          @click="$emit('close')"
        />
      </div>
      <div class="content__inner">
        <div class="content__inner__description">
          <table class="content__inner__description__table">
            <tr class="content__inner__description__table__row">
              <th class="content__inner__description__table__row__th">Title</th>
              <td class="content__inner__description__table__row__td">
                {{ value.title }}
              </td>
            </tr>
            <tr class="content__inner__description__table__row">
              <th class="content__inner__description__table__row__th">概要</th>
              <td class="content__inner__description__table__row__td">
                {{ value.overView }}
              </td>
            </tr>
            <tr class="content__inner__description__table__row">
              <th class="content__inner__description__table__row__th">
                制作期間
              </th>
              <td class="content__inner__description__table__row__td">
                {{ value.term }}
              </td>
            </tr>
            <tr class="content__inner__description__table__row">
              <th class="content__inner__description__table__row__th">
                使用言語など
              </th>
              <td class="content__inner__description__table__row__td">
                {{ value.useLanguages }}
              </td>
            </tr>
            <tr class="content__inner__description__table__row">
              <th class="content__inner__description__table__row__th">
                github
              </th>
              <a
                :href="value.githubURL"
                class="content__inner__description__table__row__td"
              >
                <td class="content__inner__description__table__row__td__url">
                  {{ value.githubURL }}
                </td>
              </a>
            </tr>
          </table>
        </div>

        <!-- slider -->
        <div class="content__inner__slider">
          <slick ref="slick" :options="slickOptions" class="slick-outer">
            <!-- v-forとslickは同時に私用できないみたい -->
            <div><img :src="value.images[0]" class="slick-img" /></div>
            <div><img :src="value.images[1]" class="slick-img" /></div>
            <div><img :src="value.images[2]" class="slick-img" /></div>
          </slick>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slick from "vue-slick";
export default {
  props: ["value"],
  components: {
    slick,
  },
  data: function () {
    return {
      slickOptions: {
        arrows: true, //スライドの矢印ボタン
        dots: true, //ドットマーク
        autoplay: true, //自動スライド
        autoplaySpeed: 4000, //自動スライド間隔(ms)
        pauseOnFocus: false, //ドットマークを押すとスライドショーが止まるのを防ぐ
        prevArrow: '<button type="button" class="slick-prev"></button>', //ひとつ前の画像に戻る矢印ボタン
        nextArrow: '<button type="button" class="slick-next"></button>', //ひとつ先の画像に進む矢印ボタン
        centerMode: true,
        slideToshow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../public/slick-css/slick.css";
@import "../../public/slick-css/slick-theme.css";

#overlay {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 3;
  width: 70%;
  background-color: #fff;
  position: absolute;

  word-wrap: break-word;
  overflow-wrap: break-word;
}

.content__close {
  width: 100%;
  text-align: right;
  &__img {
    height: 3rem;
    width: 3rem;
    margin: 1rem;
  }
}

.content__inner {
  display: flex;
  flex-wrap: wrap;

  &__description {
    width: 50%;

    &__table {
      &__row {
        &__th {
          text-align: left;
          width: 6rem;
          padding: 1rem;
        }
        &__td {
          text-align: left;
          &__url {
            padding-top: 1rem;
            text-align: left;
          }
        }
      }
    }
  }

  &__slider {
    width: 40%;
    margin: 1rem;
  }
}

// slider
.slick-slide img {
  display: inline;
  margin: 1rem;
  width: 90%;
  height: 100%;
  object-fit: cover;
  border: 1px solid grey;
}

// smartphone
@media screen and (max-width: 767px) {
  #content {
    width: 95%;
  }

  .content__close {
    width: 100%;
    text-align: right;
    &__img {
      height: 2rem;
      width: 2rem;
      margin: 1rem;
    }
  }
  .content__inner {
    flex-direction: column-reverse;
    padding: 0.7rem;
    &__description {
      width: 50%;

      &__table {
        &__row {
          &__th {
            padding: 0.1rem;
          }
          &__td {
            font-size: 0.75rem;
            &__url {
              padding-top: 0.2rem;
            }
          }
        }
      }
    }

    &__slider {
      width: 50%;
      margin-left: 1.7rem;
      // margin: 0 auto;
    }
    .slick-slide img {
      display: inline;
      margin: 1rem;
      width: 90%;
      height: 40vw;
      object-fit: cover;
    }
    .slick-outer {
      width: 170%;
    }
  }
}
</style>
