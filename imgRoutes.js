const express = require('express');
const imgController = require('./imgController')
const router = express.Router();

router
    .route('/')
    .get(imgController.getAllImages)
    .post(imgController.uploadImage)

router
    .route('/:name')
    .get(imgController.getImage)
    .delete(imgController.deleteImage)
    .put(imgController.updateImage)
module.exports = router;
/*
Upload Image
Delete Image
Replace/Update Image
Search for a particular image
View all images 
*/