import { get } from "lodash";

import { entitySelector } from "../../../../redux/selectors";

const toastSelector = (state) => entitySelector(state, "toast");

export const toastState = (state) => ({
  isOpen: get(toastSelector(state), "isOpen"),
  severity: get(toastSelector(state), "severity"),
  title: get(toastSelector(state), "title"),
  content: get(toastSelector(state), "content"),
});
