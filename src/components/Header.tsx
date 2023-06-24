import { UserProfile } from "./UserProfile";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <h1>いきいき通販 ポータル</h1>
      <UserProfile />
    </header>
  );
};
