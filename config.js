const TASK_STATE_MODES = {
  PENDIENT: ["Pendient", "primary"],
  DONE: ["Done", "success"],
  CANCEL: ["Canceled", "secondary"],
  DELETE: ["Deleted", "danger"],
};

export const getColorByState = (state = "PENDIENT") =>
  TASK_STATE_MODES[state][1];

export const getStateText = (state = "PENDIENT") => TASK_STATE_MODES[state][0];
