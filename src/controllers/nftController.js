import mongoose from "mongoose";
import { NftSchema } from "../models/nftModel";

const Nft = mongoose.model("Nft", NftSchema);

export const addNewNft = (req, res) => {
    let newNft = new Nft(req.body);

    newNft.save((err, nft) => {
        if (err) {
            res.send(err);
        }
        res.json(nft);
    });
};

export const getNft = (req, res) => {
    Nft.find({}, (err, nft) => {
        if (err) {
            res.send(err);
        }
        res.json(nft);
    });
};

export const getNftByID = (req, res) => {
    Nft.findById(req.params.nftID, (err, nft) => {
        if (err) {
            res.send(err);
        }
        res.json(nft);
    });
};

export const updateNft = (req, res) => {
    Nft.findOneAndUpdate(
        { _id: req.params.nftID },
        req.body,
        { new: true, useFindAndModify: false },
        (err, nft) => {
            if (err) {
                res.send(err);
            }
            res.json(nft);
        }
    );
};

export const deleteNft = (req, res) => {
    Nft.remove({ _id: req.params.nftID }, (err, nft) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Successfully deleted Nft" });
    });
};
