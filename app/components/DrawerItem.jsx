import Link from "next/link";

const DrawerItem = ({ icon: Icon, href, label, onClick }) => (
  <li
    className="flex items-center py-1.5 px-2 rounded-md active:bg-[#e5e5c6] active:translate-y-0.5 transition transform md:hover:bg-[#e5e5c6]"
    onClick={onClick}
  >
    <span className="me-3">
      <Icon className="w-6 h-6" />
    </span>
    {href ? (
      <Link className="font-semibold" href={href}>
        {label}
      </Link>
    ) : (
      <button className="font-semibold" onClick={onClick}>
        {label}
      </button>
    )}
  </li>
);

export default DrawerItem;
