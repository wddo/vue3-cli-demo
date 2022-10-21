import { ref, watch } from "vue";
import { fetchBookingIds, fetchBookingById } from "@/api/books";

export default function useBookingData() {
  const bookingData = ref([]);

  const getBookingData = (firstname) => {
    fetchBookingIds(firstname).then((res) => {
      Promise.all(
        res.data.slice(0, 10).map((value) => fetchBookingById(value.bookingid))
      ).then((res) => {
        bookingData.value = res.filter((value) => typeof value === "object");
      });
    });
  };

  return {
    bookingData,
    getBookingData,
  };
}
