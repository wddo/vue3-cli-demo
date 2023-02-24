<template>
  <div class="searchArea">
    <form
      action=""
      onsubmit="return false;"
    >
      <div class="formWrap">
        <div class="filter">
          <label for="searchName"> first name : </label>
          <input
            id="searchName"
            v-model="searchName"
            type="text"
            class="btnSearch"
          >
        </div>
        <button
          type="sumit"
          @click="search"
        >
          조회
        </button>
      </div>
    </form>
  </div>

  <div>
    <button @click="create">
      생성
    </button>
  </div>

  <ul class="books">
    <li
      v-for="(user, idx) in bookingData"
      :key="`booking-data-${idx}`"
    >
      <span>{{ `${user.bookingId}` }}</span>
      <div class="inputWrap">
        <input
          type="text"
          :value="user.firstname"
          readonly
        >
        <input
          type="text"
          :value="user.lastname"
          readonly
        >
      </div>
      <div class="btnWrap">
        <button>수정</button>
        <button @click="del(user.bookingId)">
          삭제
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { createBookingData, deleteBookingData } from "@/api/books";
import useBookingData from "@/composables/books/useBooks";

const searchName = ref();
const { bookingData, getBookingData } = useBookingData();

function search() {
  getBookingData(searchName.value);
}

function create() {
  createBookingData({
    firstname: "ddoeng",
    lastname: "wddo",
    totalprice: 123,
    depositpaid: true,
    bookingdates: {
      checkin: "2022-09-21",
      checkout: "2022-10-28",
    },
    additionalneeds: "Breakfast",
  }).then(() => {
    search();
  });
}

function del(id) {
  deleteBookingData(id).then(() => {
    search();
  });
}
</script>

<style lang="scss" scoped>
@import "https://necolas.github.io/normalize.css/8.0.1/normalize.css";

.searchArea {
  .formWrap {
    display: flex;
    justify-content: center;

    margin-bottom: 1rem;

    .filter {
      input {
        margin-right: 1rem;
      }
    }
  }
}

ul.books {
  margin-top: 1rem;

  li {
    padding: 0.5rem;
    display: flex;

    > span {
      margin-left: 1rem;
    }

    .inputWrap {
      input:read-only {
        border: none;
        background-color: none;
      }
    }

    > .btnWrap {
      margin-left: auto;

      > button:not(:first-child) {
        margin-left: 0.4rem;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid gray;
    }
  }
}
</style>
