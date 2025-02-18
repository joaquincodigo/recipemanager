const useLogout = () => {
  const handleLogout = () => {
    document.cookie = "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.reload();
  };

  return { handleLogout };
};

export default useLogout;
