import express from "express";
import { getAllImages, addToImages, deleteImage } from "../models/image.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const allImages = await getAllImages();
    return res.json({ success: true, payload: allImages });
})

router.post("/", async (req, res) => {
    const newImage = await addToImages(req.body);
    return res.json({ success: true, payload: newImage });
})

router.delete("/:id", async (req, res) => {
    const deletedImage = await deleteImage(req.params.id);
    return res.json({ success: true, payload: deletedImage });
})

export default router;