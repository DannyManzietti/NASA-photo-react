import axios from "axios";
import moment from "moment";

export const fetchPhoto = async date => {
  try {
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt&date=${moment(
        date
      ).format("YYYY-MM-DD")}`
    );
    return res.data;
  } catch (err) {}
};
