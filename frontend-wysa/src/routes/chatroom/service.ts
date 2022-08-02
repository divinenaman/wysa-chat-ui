import axios from "axios";

export const getChatData = async () => {
  try {
    const res = await axios.get("http://localhost:3002/chat");

    if (res.data) {
      return res.data.data;
    }

    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
