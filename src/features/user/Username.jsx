import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return <p className="text-sm font-semibold sm:block">{username}</p>;
}

export default Username;
