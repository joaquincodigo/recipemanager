import pool from "@/lib/db";

export default async function RecipesPage() {
  const { rows } = await pool.query(
    "SELECT id, message, created_at FROM connectivity_test"
  );

  return (
    <ul>
      {rows.map((r) => (
        <li key={r.id}>{r.message}</li>
      ))}
    </ul>
  );
}
