import { data } from "../data";

//action
const FILTER_WORK = "/FILTER_WORK" as const;

export const filtering = (filter: string) => ({
  type: FILTER_WORK,
  action: filter,
});
export type WorkAction = ReturnType<typeof filtering>;

// type
export type WorkType = {
  filter: string;
  id: string;
  img: string;
  title: string;
  describtion: string;
  date: string;
  tool: string[];
  features: string[];
  git: string;
  url: string;
};

export type WorksState = WorkType[];
const worksArr = data.works;
const initialState = {
  worksArr,
};

function filterReducer(state: WorksState = initialState, action: WorkAction) {}

export default filterReducer;
