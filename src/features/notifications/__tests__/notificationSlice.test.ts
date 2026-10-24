import { describe, it, expect } from 'vitest';
import notificationReducer, {
  addNotification,
  removeNotification,
  clearNotifications,
} from '../notificationSlice';

import type { Notification } from '../notificationSlice';

describe('notificationSlice', () => {
  const firstNotification: Notification = {
    id: '1',
    message: 'Operation successful',
    type: 'success',
  };

  const secondNotification: Notification = {
    id: '2',
    message: 'Something went wrong',
    type: 'error',
  };

  it('adds a notification', () => {
    const state = notificationReducer(
      undefined,
      addNotification(firstNotification),
    );

    expect(state.items).toEqual([firstNotification]);
  });

  it('removes only the notification with the matching ID', () => {
    const initialState = {
      items: [firstNotification, secondNotification],
    };

    const state = notificationReducer(
      initialState,
      removeNotification('1'),
    );

    expect(state.items).toEqual([secondNotification]);
  });

  it('clears all notifications', () => {
    const initialState = {
      items: [firstNotification, secondNotification],
    };

    const state = notificationReducer(
      initialState,
      clearNotifications(),
    );

    expect(state.items).toEqual([]);
  });

  it('preserves the state when removing an unknown ID', () => {
    const initialState = {
      items: [firstNotification, secondNotification],
    };

    const state = notificationReducer(
      initialState,
      removeNotification('unknown'),
    );

    expect(state.items).toEqual(initialState.items);
  });
});
