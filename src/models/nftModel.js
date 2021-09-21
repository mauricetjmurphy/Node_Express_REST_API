import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const NftSchema = new Schema({
    dna: {
        type: String,
        required: "Enter the dna",
    },
    name: {
        type: String,
    },
    desription: {
        type: String,
    },
    image: {
        type: String,
    },
    edition: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    attributes: {
        type: Array,
    },
    compiler: {
        type: String,
    },
});
