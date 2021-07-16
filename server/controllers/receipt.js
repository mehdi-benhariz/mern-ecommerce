const Receipt = require("../models/Receipt");

exports.getList = async (req, res, next) => {
  try {
    const receiptList = await Receipt.find();
    return res.status(200).json(receiptList);
  } catch (error) {
    next(error);
  }
};

exports.getReceipt = async (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(400).json("id is required");
  try {
    const receipt = await Receipt.findById(id);
    return res.status(200).json(receipt);
  } catch (error) {
    next(error);
  }
};
//
/**
 * @param  {} body
 */
const handleError = (body, res) => {
  const { total, products } = body;
  let errors = [];
  if (!total) errors.push({ total: "required" });

  if (!products) errors.push({ products: "required" });

  if (errors.length > 0) return res.status(400).json({ errors });
};
/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
exports.addReceipt = async (req, res, next) => {
  handleError(req.body, res);
  try {
    const receipt = new Receipt(req.body);
    const added = await receipt.save();
    if (!added) return res.status(500).json({ error: "couldn't add !" });
    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.removeReceipt = async (req, res, next) => {
  const { id } = req.body;
  if (!id) return res.status(400).json("id is required");
  try {
    const removed = await Receipt.findByIdAndRemove(id);
    if (!removed) return res.status(200).json({ success: true });
    return res.status(404).json({ error: "receipt  doesn't exist" });
  } catch (error) {
    next(error);
  }
};

exports.updateReceipt = async (req, res, next) => {
  const { id, editReceipt } = req.body;

  if (!id) return res.status(400).json({ error: "ID is required" });

  if (!editReceipt)
    return res.status(400).json({ error: "new receipt is required" });

  try {
    const updated = await Receipt.findByIdAndUpdate(id, editReceipt, {
      new: true,
    });
    if (!updated) return res.status(500).json({ error: "couldn't update !" });
    return res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
