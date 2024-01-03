// Ours - Timer
import { createClock, pauseClock, getElapsed, playClock } from "../utils/clock";

/**
 * Possible action types for timerReducer
 *
 * @enum {string}
 * @readonly
 */
export const TimerActionType = {
  PLAY: "PLAY",
  PAUSE: "PAUSE",
  STOP: "STOP",
  SET_DURATION: "SET_DURATION",
  TICK: "TICK",
};

/**
 * @param {Timer} state
 * @param {Object} action
 * @param {TimerActionType} action.type
 * @param {any} [action.payload]
 */
export const timerReducer = (state, { type, payload }) => {
  switch (type) {
    case TimerActionType.PLAY: {
      return {
        ...state,
        clock: playClock(state.clock),
      };
    }
    case TimerActionType.PAUSE: {
      return {
        ...state,
        clock: pauseClock(state.clock),
      };
    }
    case TimerActionType.TICK: {
      const completed = getElapsed(state.clock) >= state.duration;
      if (completed && !state.completed) {
        return {
          ...state,
          completed: true,
          clock: pauseClock(state.clock),
        };
      }

      // This action will be called almost constantly, so important to preserve Object.is
      // to avoid re-renders
      return state;
    }
    case TimerActionType.SET_DURATION: {
      const { duration } = payload;

      return {
        ...state,
        duration,
        clock: createClock(),
      };
    }
    case TimerActionType.STOP: {
      return {
        ...state,
        clock: createClock(),
      };
    }
    default: {
      throw Error("Unknown action received by timerReducer: " + type);
    }
  }
};
