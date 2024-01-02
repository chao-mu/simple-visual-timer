// Types - Clock
import {
  createClock,
  pauseClock,
  playClock,
  setElapsed,
} from "@/features/timer/utils/clock";

const initialState = createClock();

/**
 * Possible action types for clockReducer
 *
 * @enum {string}
 * @readonly
 */
export const ClockActionType = {
  PLAY: "PLAY",
  PAUSE: "PAUSE",
  RESET: "RESET",
  RESTART: "RESTART",
  SET_ELAPSED: "SET_ELAPSED",
};

/**
 * @param {Clock} state
 * @param {Object} action
 * @param {ClockActionType} action.type
 * @param {any} [action.payload]
 */
export const clockReducer = (state, { type, payload }) => {
  switch (type) {
    case ClockActionType.PLAY: {
      return playClock(state);
    }
    case ClockActionType.PAUSE: {
      return pauseClock(state);
    }
    case ClockActionType.RESET: {
      return { ...initialState };
    }
    case ClockActionType.RESTART: {
      return {
        ...initialState,
        startedAt: Date.now(),
        paused: false,
      };
    }
    case ClockActionType.SET_ELAPSED: {
      const { elapsed } = payload;

      return setElapsed(state, { elapsed });
    }
    default: {
      throw Error("Unknown action received by clockReducer: " + type);
    }
  }
};
