const express = require("express");
const router = express.Router();
const Career = require("../models/Career");
const authMiddleware = require("../middleware/authMiddleware");

// GET /api/careers - Fetch all careers (for All Careers page)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const careers = await Career.find({})
      .select("_id careerName title category shortDescription icon")
      .sort({ careerName: 1 });

    res.status(200).json({ success: true, careers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching careers",
      error: error.message
    });
  }
});

// GET /api/careers/search?q=<query> - Search careers by name (live search bar)
router.get("/search", authMiddleware, async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length === 0) {
      return res.status(200).json({ success: true, careers: [] });
    }

    // Case-insensitive partial match on careerName, title, category, description
    const regex = new RegExp(q.trim(), "i");
    const careers = await Career.find({
      $or: [
        { careerName: regex },
        { title: regex },
        { category: regex },
        { shortDescription: regex }
      ]
    })
      .select("_id careerName title category shortDescription icon")
      .limit(10);

    res.status(200).json({ success: true, careers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching careers",
      error: error.message
    });
  }
});

// GET /api/careers/detail/:id - Fetch full career data by MongoDB _id
router.get("/detail/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const career = await Career.findById(id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found"
      });
    }

    res.status(200).json({ success: true, career });
  } catch (error) {
    // Handle invalid ObjectId
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid career ID format"
      });
    }
    res.status(500).json({
      success: false,
      message: "Error fetching career",
      error: error.message
    });
  }
});

// GET /api/careers/:careerName - Fetch career by name (case insensitive & partial match fallback)
router.get("/:careerName", authMiddleware, async (req, res) => {
  try {
    const rawName = (req.params.careerName || "").trim();
    const cleanName = decodeURIComponent(rawName).trim();

    if (!cleanName) {
      return res.status(200).json({ success: true, career: null });
    }

    // 1. Exact case-insensitive match on careerName or title
    let career = await Career.findOne({
      $or: [
        { careerName: cleanName.toLowerCase() },
        { title: new RegExp(`^${cleanName}$`, "i") }
      ]
    });

    // 2. Fallback: partial match on base career title (e.g. "Product Manager (Tech)" -> "Product Manager")
    if (!career) {
      const sanitized = cleanName.replace(/[^\w\s]/g, " ").trim();
      const firstTwoWords = sanitized.split(/\s+/).slice(0, 2).join(" ");
      if (firstTwoWords.length >= 3) {
        career = await Career.findOne({
          $or: [
            { careerName: new RegExp(firstTwoWords, "i") },
            { title: new RegExp(firstTwoWords, "i") },
            { category: new RegExp(firstTwoWords, "i") }
          ]
        });
      }
    }

    // 3. Return 200 with career (or null if not found) to prevent 404 network errors in client
    res.status(200).json({
      success: true,
      career: career || null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching career",
      error: error.message
    });
  }
});

module.exports = router;
