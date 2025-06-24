import Link from "next/link";
import { useRouter } from "next/navigation";

const DrawerItem = ({ icon: Icon, href, label, onClick }) => {
  const router = useRouter();

  const handleClick = (e) => {
    // Prevent navigation for non-link items
    if (!href) {
      onClick?.();
      return;
    }

    // For link items: close drawer and navigate
    onClick?.();
    router.push(href);
  };

  return (
    <li
      onClick={handleClick}
      className="flex items-center py-1.5 px-2 rounded-md active:bg-[#e5e5c6] active:translate-y-0.5 transition transform md:hover:bg-[#e5e5c6] cursor-pointer"
    >
      <span className="me-3">
        <Icon className="w-6 h-6" />
      </span>
      {href ? (
        <Link
          href={href}
          className="font-semibold"
          onClick={(e) => e.preventDefault()} // Prevent default link behavior
        >
          {label}
        </Link>
      ) : (
        <button className="font-semibold">{label}</button>
      )}
    </li>
  );
};

export default DrawerItem;
