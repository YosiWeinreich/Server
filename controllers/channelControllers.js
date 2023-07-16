const ChannelRouter = require('../routers/channelRouters')
const channelService = require("../services/channelService");
exports.create = async (req, res) => {
    try {
      console.log("update");
      const { DEV, CH, VAL } = req.body;
      console.log(DEV);
      const result = await channelService.create(DEV, CH, VAL);
      res.status(201).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
      console.log("getAll");
        const channels = await channelService.getAll();
        res.status(200).json(channels);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.addChToDev = async (req, res) => {
  try {
    const { DEV, CH, VAL } = req.body;
    const result = await channelService.addCH(DEV, CH, VAL);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
exports.getValByDevAndCh = async (req, res) => {
  try {
    const { dev, ch } = req.params;
    const val = await channelService.getValByDevAndCh(dev, ch);
    res.status(200).send(val.valueOf(val).toString())
    // res.status(200).json({ val });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
