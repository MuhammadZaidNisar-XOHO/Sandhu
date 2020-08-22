import { FINISH_ACTION } from "./constants";
export const FinishEnvironmentAction = (
  AngularReducer,
  ReactReducer,
  VueReducer
) => {
  const Environmentdata = {
    AngularData: AngularReducer,
    ReactData: ReactReducer,
    VueData: VueReducer
  };
  console.log("Action(Environmentdata): ", Environmentdata);
  return dispatch => {
    dispatch({ type: FINISH_ACTION, payload: Environmentdata });
  };
};
