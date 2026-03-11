const express = require("express");
const router = express.Router();
const pool = require("../db");

// Create note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const result = await pool.query(
      "INSERT INTO notes (title, content) VALUES ($1,$2) RETURNING *",
      [title, content]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await pool.query(
      "SELECT * FROM notes ORDER BY created_at DESC"
    );

    res.json(notes.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get single note
router.get("/:id", async (req, res) => {
  try {
    const note = await pool.query(
      "SELECT * FROM notes WHERE id=$1",
      [req.params.id]
    );

    res.json(note.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Update note
router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;

    await pool.query(
      "UPDATE notes SET title=$1, content=$2 WHERE id=$3",
      [title, content, req.params.id]
    );

    res.json({ message: "Note updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Delete note
router.delete("/:id", async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM notes WHERE id=$1",
      [req.params.id]
    );

    res.json({ message: "Note deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;