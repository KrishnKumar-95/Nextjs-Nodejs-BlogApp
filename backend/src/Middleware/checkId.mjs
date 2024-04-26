import mongoose from "mongoose";
export function checkMongoId(req, res, next) {
    const { _id } = req.body;

    /* Checking for valid id */
    const objectId = mongoose.Types.ObjectId;
}