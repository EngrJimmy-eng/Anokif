import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeNotification } from '../features/notifications/notificationSlice';

const notificationStyles = {
  success: 'border-green-500 bg-green-50 text-green-800',
  error: 'border-red-500 bg-red-50 text-red-800',
  info: 'border-blue-500 bg-blue-50 text-blue-800',
};

export default function NotificationDisplay() {
  const notifications = useAppSelector(
    (state) => state.notifications.items,
  );

  const dispatch = useAppDispatch();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3"
      aria-label="Notifications"
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          role="status"
          className={`flex items-start justify-between gap-3 rounded-lg border-l-4 p-4 shadow-lg ${notificationStyles[notification.type]}`}
        >
          <p className="text-sm font-medium">
            {notification.message}
          </p>

          <button
            type="button"
            onClick={() => dispatch(removeNotification(notification.id))}
            aria-label={`Dismiss notification: ${notification.message}`}
            className="rounded px-2 font-bold hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
