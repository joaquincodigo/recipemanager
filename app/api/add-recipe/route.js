import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { db } from "@/lib/db";

const isValidData = (data) => {
  const {
    title,
    description,
    difficulty,
    category,
    ingredients,
    preparation_steps,
    preparation_time,
    servings,
    author,
  } = data;

  if (!title?.trim()) return false;
  if (!description?.trim()) return false;
  if (!["easy", "medium", "hard"].includes(difficulty)) return false;
  if (!category?.trim()) return false;
  if (!Array.isArray(ingredients) || ingredients.length === 0) return false;
  if (!Array.isArray(preparation_steps) || preparation_steps.length === 0)
    return false;
  if (!Number.isInteger(servings) || servings <= 0) return false;
  if (typeof preparation_time !== "number" || preparation_time <= 0)
    return false;
  if (!author?.trim()) return false;

  return true;
};

export async function POST(req) {
  try {
    const form = await req.formData();
    const imageFile = form.get("image");

    const data = {
      title: form.get("title"),
      description: form.get("description"),
      difficulty: form.get("difficulty"),
      category: form.get("category"),
      ingredients: JSON.parse(form.get("ingredients")),
      preparation_steps: JSON.parse(form.get("preparation_steps")),
      preparation_time: Number(form.get("preparation_time")),
      servings: Number(form.get("servings")),
      author: form.get("author"),
      image: null,
    };

    if (!isValidData(data)) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    if (imageFile instanceof File) {
      const blob = await put(
        `recipes/${Date.now()}-${imageFile.name}`,
        imageFile,
        { access: "public" }
      );

      data.image = blob.url;
    }

    await db.query(
      `
      INSERT INTO recipes
      (title, description, difficulty, category, ingredients,
       preparation_steps, preparation_time, servings, author, image)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      `,
      [
        data.title,
        data.description,
        data.difficulty,
        data.category,
        data.ingredients,
        data.preparation_steps,
        data.preparation_time,
        data.servings,
        data.author,
        data.image,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
