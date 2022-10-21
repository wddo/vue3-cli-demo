import axios from "axios";

const url = "/booking";

/**
 * 비동기 형태로 firstname 으로 id 반환
 * @param {string} firstname
 * @returns Primoise { data: [{bookingId: ..}, {}, ..] }
 */
export const fetchBookingIds = (firstname) =>
  axios({
    url,
    method: "get",
    params: {
      firstname,
    },
  });

/**
 * 동기 형태로 id 토대로 정보 반환
 * @param {number} id
 * @returns Primise { lastname: "", bookingId: "", ... }
 */
export const fetchBookingById = async (id) => {
  try {
    const { data } = await axios({
      url: `${url}/${id}`,
      method: "get",
    });

    return { ...data, bookingId: id };
  } catch (error) {
    console.error(error);
  }
};

export const createBookingData = (data) => {
  return axios({
    method: "post",
    url,
    data,
  }).catch((error) => {
    console.log(error);
  });
};

export const deleteBookingData = (id) => {
  return axios({
    url: `${url}/${id}`,
    method: "delete",
  }).catch((error) => {
    console.log(error);
  });
};
