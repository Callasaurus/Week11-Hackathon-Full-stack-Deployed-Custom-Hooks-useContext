import query from "../db/index.js";

async function getAllImages() {
    const allImages = await query(`SELECT * FROM images;`);
    return allImages.rows;
}

async function addToImages(url) {
    const newImage = await query(`INSERT INTO images (image_link) VALUES ('${url.image_link}') RETURNING *;`)
    return newImage.rows;
}

async function deleteImage(id) {
    const deletedImage = await query(`DELETE FROM images WHERE id = $1 RETURNING *;`, [id]);
    return deletedImage.rows;
}

export {
    getAllImages,
    addToImages,
    deleteImage
}