const Channel = require("../models/cannel"); // הנתיב יהיה תלוי במיקום הקובץ

exports.create = async (DEV, CH, VAL) => {
    try {
        // צור אובייקט ערוץ מהנתונים שמגיעים מהבקשה
        const channel = new Channel({
            dev: DEV,
            ch: [{ ch: CH, val: VAL }]
        });

        // שמור את האובייקט במסד הנתונים
        const newChannel = await channel.save();

        return newChannel;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getAll = async () => {
    try {
        const channels = await Channel.find();
        return channels;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
exports.addCH = async (dev, ch, val) => {
    try {
        // Find the relevant dev
        const devDoc = await Channel.findOne({ dev: dev });
        if (!devDoc) {
            return this.create(dev, ch, val);
        }

        // Find the relevant ch in dev
        let chDoc = devDoc.ch.find(chDoc => chDoc.ch === ch);
        if (!chDoc) {
            // If ch doesn't exist, create a new one
            chDoc = { ch: ch, val: val };
            devDoc.ch.push(chDoc);
        } else {
            // If ch exists, update the val
            chDoc.val = val;
        }

        // Save the dev
        await devDoc.save();

        return devDoc;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getValByDevAndCh = async (dev, ch) => {
  try {
    const device = await Channel.findOne({ dev: dev });
    if (!device) {
      throw new Error("Device not found");
    }
    const channel = device.ch.find((c) => c.ch === Number(ch));
    if (!channel) {
      throw new Error("Channel not found in the device");
    }
    return channel.val;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

