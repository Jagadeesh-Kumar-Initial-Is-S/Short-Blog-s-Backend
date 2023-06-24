const { Router } = require("express");

const { getBlog, saveBlog, deleteBlog, updateBlog } = require("../controllers/BlogController");

const router = Router();

router.get("/get-blog", getBlog);

router.post("/save-blog", saveBlog);

router.post("/delete-blog", deleteBlog);

router.post("/update-blog", updateBlog);

module.exports = router;