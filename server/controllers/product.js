const Product = require("../models/Product");

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: "there was some error" });
  }
};
//add a new product
exports.addProduct = async (req, res) => {
  const { name, price, description, quantityStock } = req.body;
console.log({ name, price, description, quantityStock })
  if (!name || !price || !description || !quantityStock)
    return res.status(400).json({ error: "all fields are required required" });

  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("err:", error);
    return res.status(500).json({ error: "internal errors" });
  }
};
//delete a product
exports.removeProduct = async (req, res) => {
  const { pId } = req.body;

  if (!pId) return res.status(400).json({ error: "ID is required" });

  try {
    const removed = await Product.findByIdAndRemove(pId);
    if (!removed) {
      return res.status(200).json({ success: true });
    } else return res.status(404).json({ error: "product doesn't exist" });
  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//get one product by Id
exports.getProduct = async (req, res) => {
  const { pId } = req.body;

  if (!pId) return res.status(400).json({ error: "ID is required" });

  try {
    const product = await Product.findById(pId);
    if (!product) return res.status(404).json({ error: "not found" });
    return res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//update a product
exports.updateProduct = async (req, res) => {
  const { pId, editProduct } = req.body;

  if (!pId) return res.status(400).json({ error: "ID is required" });

  if (!editProduct)
    return res.status(400).json({ error: "new product is required" });

  try {

    const updated = await Product.findByIdAndUpdate(pId, editProduct, { new: true });
    if(!updated)
      return res.status(500).json({ error: "couldn't update !" })
   return res.status(200).json({ success:true})

  } catch (err) {
    res.status(500).json({ error: "the was internal error" });
  }
};
//detailed search
exports.search=async(req,res)=>{
  const {search} = req.body
  let regex = search ?new RegExp(search):null

  try{
    const result = await Product.find({name:regex})
    if(result.length >0)
       return res.status(200).json(result)
    return res.status(400).json({"message":"no product was found!"})
  }catch(err){
     res.status(500).json("there was an error!")
     console.log(err)
  }
}
//get by category 
exports.getByCategory=async(req,res)=>{
   const {cId} = req.body
   let regex = cId ?new RegExp(search):null

   try{
    const result = await Product.find({tags:"clothes" })
    if(result.length >0)
       return res.status(200).json(result)
    return res.status(400).json({"message":"no product was found!"})
   }catch(err){
    res.status(500).json("there was an error!")
    console.log(err)
   }

}
