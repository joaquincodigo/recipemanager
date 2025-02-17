import { useRouter } from "next/navigation";
import { Router } from "next/router";

const useLogout = () => { const handleLogout = () => {
    document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    Router.push("/home")
  };

  return { handleLogout };
};

export default useLogout;
