import { vi, beforeEach, describe, expect, test } from "vitest";

// Ours - Timer
import { timerReducer, TimerActionType } from "./timerReducer";
import { createClock, getElapsed } from "../utils/clock";

const createMockTimer = () => ({
  clock: createClock(),
  duration: 10000000000000,
  completed: false,
});

describe("timerReducer", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  test("end to end", () => {
    // Start the clock
    let timer = timerReducer(createMockTimer(), {
      type: TimerActionType.PLAY,
    });
    let clock = timer.clock;

    expect(clock.paused).toBe(false);

    const expectedElapsed = 1000;
    vi.setSystemTime(clock.startedAt + expectedElapsed);

    // Should have at least elapsed
    expect(getElapsed(clock)).toBeGreaterThanOrEqual(expectedElapsed);

    // Reset clock
    timer = timerReducer(timer, {
      type: TimerActionType.STOP,
    });
    clock = timer.clock;

    // Reset should pause and set elapsed to 0
    expect(clock.paused).toBe(true);
    expect(getElapsed(clock)).toBe(0);

    // Resume the clock
    timer = timerReducer(timer, {
      type: TimerActionType.PLAY,
    });
    clock = timer.clock;

    // Should be unpaused
    expect(clock.paused).toBe(false);

    // Make that time elapsed
    vi.setSystemTime(clock.startedAt + expectedElapsed);

    // Should have at least elapsed
    expect(getElapsed(clock)).toBeGreaterThanOrEqual(expectedElapsed);
  });
});
