import styles from "../styles/NotificationModal.module.css";
import { NotificationCounter } from "./NotificationCounter";
import { NotificationList } from "./NotificationList";
import { useNotificationsContext } from "@/context/NotificationsContext";
export const NotificationModal = () => {
  const { notifications, setNotifications } = useNotificationsContext();
  function handleReadAll() {
    const updatedNotifications = notifications.map((notification) => {
      return {
        ...notification,
        isRead: true,
      };
    });
    setNotifications(updatedNotifications);
  }

  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.h1}>Notifications</h1>
          <NotificationCounter />
        </div>
        <button onClick={handleReadAll} className={styles.btnMarkAll}>
          Mark all as read
        </button>
      </header>
      <NotificationList />
    </main>
  );
};
