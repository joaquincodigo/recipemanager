export default function Footer() {
  return (
    <footer className="bg-[#ffffe5] text-slate-700 text-center p-4 mt-auto mb-3">
      <p className="text-sm">&copy; {new Date().getFullYear()} RecipeHaven. All rights reserved.</p>
    </footer>
  );
}
