import moment from "moment";

export function formatDate(date, format = "DD MMM,YYYY") {
  return moment(date).format(format);
}
