const mongoose = require("mongoose");

const logosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  logo: {
    data: Buffer,
    contentType: String,
  },
  // TODO: Voir à ajouter un format grand logo et petit logo
});
