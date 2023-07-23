// Seedgoose Config

module.exports = {
    modelBaseDirectory: "app_server/database/models", // model directory name
    models: ["*.js", "!db.js"], // model matches
    data: "data", // data directory
    db: "mongodb://127.0.0.1:27017/travlr" // db connection url
};
    
