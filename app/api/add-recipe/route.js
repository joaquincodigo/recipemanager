// app/api/recipes/route.js
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import db from "@/lib/db";

const log = (...args) => console.log("[RECIPES_API]", ...args);

const isValidData = (data) => {
  log("Validating data:", data);

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
  log("POST /api/recipes hit");

  try {
    log("Reading formData()");
    const form = await req.formData();

    log("Raw form entries:");
    for (const [k, v] of form.entries()) {
      log(`  ${k}:`, v);
    }

    const imageFile = form.get("image");
    log("imageFile:", imageFile);

    let ingredients;
    let preparation_steps;

    try {
      ingredients = JSON.parse(form.get("ingredients") || "[]");
      preparation_steps = JSON.parse(form.get("preparation_steps") || "[]");
    } catch (e) {
      log("JSON parse error:", e);
      return NextResponse.json(
        { success: false, error: "Invalid JSON fields" },
        { status: 400 }
      );
    }

    const data = {
      title: form.get("title"),
      description: form.get("description"),
      difficulty: form.get("difficulty"),
      category: form.get("category"),
      ingredients,
      preparation_steps,
      preparation_time: Number(form.get("preparation_time")),
      servings: Number(form.get("servings")),
      author: form.get("author"),
      image: null,
    };

    log("Normalized data:", data);

    if (!isValidData(data)) {
      log("Validation failed");
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    if (imageFile && typeof imageFile.arrayBuffer === "function") {
      log("Uploading image to Vercel Blob");

      try {
        const blob = await put(
          `recipes/${Date.now()}-${imageFile.name}`,
          imageFile,
          { access: "public" }
        );
        log("Blob uploaded:", blob);
        data.image = blob.url;
      } catch (e) {
        log("Blob upload failed:", e);
        return NextResponse.json(
          { success: false, error: "Image upload failed" },
          { status: 500 }
        );
      }
    } else {
      log("No image provided");
    }

    log("Executing INSERT into Neon");

    try {
      const result = await db`
        INSERT INTO recipes (
          title,
          description,
          difficulty,
          category,
          ingredients,
          preparation_steps,
          preparation_time,
          servings,
          author,
          image
        )
        VALUES (
          ${data.title},
          ${data.description},
          ${data.difficulty},
          ${data.category},
          ${data.ingredients}::text[],
          ${data.preparation_steps}::text[],
          ${data.preparation_time},
          ${data.servings},
          ${data.author},
          ${data.image}
        )
        RETURNING id
      `;

      log("Insert result:", result);
    } catch (e) {
      log("DB INSERT failed:", e);
      return NextResponse.json(
        { success: false, error: "Database insert failed", detail: e.message },
        { status: 500 }
      );
    }

    log("Recipe created successfully");
    return NextResponse.json({ success: true });
  } catch (err) {
    log("Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
