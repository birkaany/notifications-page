import styles from "../styles/SingleNotification.module.css";
export const SingleNotification = ({
  userName,
  actionName,
  isRead,
  activity,
  activityLink,
  userPicture,
}) => {
  const actions = {
    reaction: "reacted to your recent post",
    follow: "followed you",
    joinGroup: "has joined your group",
    comment: "commented on your picture",
    leftGroup: "left the group",
  };

  return (
    <div className={`${styles.wrapper} ${isRead ? styles.isRead : undefined}`}>
      <div className={styles.img}>
        <img src={`/profile-pics/${userPicture}.webp`} alt="" />
      </div>
      <div className={styles.content}>
        <div>
          <h2>{userName}</h2>
          <p>{actionName && actions[actionName]}</p>

          <a href={activityLink}>{activity}</a>
        </div>
        <div className={styles.postTime}>1m ago</div>
      </div>
    </div>
  );
};
