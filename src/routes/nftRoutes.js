import {
    addNewNft,
    getNft,
    getNftByID,
    updateNft,
    deleteNft,
} from "../controllers/nftController";

const routes = (app) => {
    app.route("/nft")
        // Get all Nfts
        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        }, getNft)

        // Post endpoint
        .post(addNewNft);

    app.route("/nft/:nftID")
        // Get Nft by ID endpoint
        .get(getNftByID)
        // Update an Nft endpoint
        .put(updateNft)
        // Delete an Nft endpoint
        .delete(deleteNft);
};

export default routes;
