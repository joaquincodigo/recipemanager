export default function ProfileAvatar({ size }) {
  return (
    <img
      src="/images/avatar-placeholder.gif"
      alt="Profile Picture"
      className="rounded-full object-cover ring-1 ring-white ring-offset-1 ring-offset-[#7FC37E] cursor-pointer"
      style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
    />
  );
}
