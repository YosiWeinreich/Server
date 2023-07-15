const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    dev: {
      type: Number,
      required: true,
      trim: true,
    },
    ch: [{
      ch: {
        type: Number,
        required: true,
        trim: true,
      },
      val: {
        type: Number,
        required: true,
        trim: true,
      },
    }],
});

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
