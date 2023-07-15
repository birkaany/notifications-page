import { NotificationModal } from "@/components/NotificationModal";

export default function Home() {
  const users = [
    {
      id: 1,
      name: "Mark Webber",
      profilePic: "avatar-mark-webber",
    },
    {
      id: 2,
      name: "Angela Gray",
      profilePic: "avatar-angela-gray",
    },
    {
      id: 3,
      name: "Anna Kim",
      profilePic: "avatar-anna-kim",
    },
    {
      id: 4,
      name: "Jacob Thompson",
      profilePic: "avatar-jacob-thompson",
    },
    {
      id: 5,
      name: "Kimberly Smith",
      profilePic: "avatar-kimberly-smith",
    },
    {
      id: 6,
      name: "Nathan Peterson",
      profilePic: "avatar-nathan-peterson",
    },
    {
      id: 7,
      name: "Rizky Hasanuddin",
      profilePic: "avatar-rizky-hasanuddin",
    },
  ];
  return (
    <>
      <NotificationModal users={users} />
    </>
  );
}
