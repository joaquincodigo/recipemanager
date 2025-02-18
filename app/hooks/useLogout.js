import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.refresh();
  };

  return { handleLogout };
};

export default useLogout;
