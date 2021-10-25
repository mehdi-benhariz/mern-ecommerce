var fs = require("fs");
exports.decodeImg = (base64, name) => {
  var Readable = require("stream").Readable;
  let base64Image = base64.split(";base64,").pop();
  // let ext = base64.split(";base64,")[0].slice(11);
  let ext = "png";
  const imgBuffer = Buffer.from(base64Image, "base64");

  var s = new Readable();
  console.log({ ext });
  s.push(imgBuffer);
  s.push(null);
  //data:image/
  s.pipe(fs.createWriteStream(`public/product_images/${name}.${ext}`));
};
exports.dataValidation = (req) => {
  let errors = [];
  const { name, price, description, quantityStock } = req.body.newProduct;
  console.log(req.body);
  if (!name || !price || !description || !quantityStock)
    errors.push("all fields are requried!");
  console.log(errors);
  return errors;
  //!impliment a data validation
};
exports.deleteImg = (name) => {
  const path = `public/product_images/${name}.png`;
  try {
    fs.unlinkSync(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
};
