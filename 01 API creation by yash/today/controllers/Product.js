const Product = require("../models/Product");

const getAllData = async (req, res) => {
  const productData = await Product.find();

  // verfication
  if (!productData)
    return res
      .status(404)
      .send({ message: "no product in database", success: false });

  return res
    .status(200)
    .send({ success: true, message: "data found", data: productData });
};
const editData = async (req, res) => {
  //   {productName,productDescription,productId}
  const product = req.body;

  const productUpdated = Product.findByIdAndUpdate(product.productId, {
    ...product,
  });

  if (!productUpdated)
    return res
      .status(404)
      .send({ message: "product update unsuccesffull", success: false });

  return res
    .status(200)
    .send({
      success: true,
      message: "producted updated",
      data: productUpdated,
    });
};

const deleteData = async (req, res) => {
  const id = req.body;

  const product = await Product.findById({ id: id });
  const response = await Product.findByIdAndDelete({ _id: product._id });
};





const postData = async (req, res) => {
  const proudct = req.body.product;

  const newProduct = new Product(proudct);

  const response = await newProduct.save();

  // if(!response)return res.stat
};

module.exports = {
  getAllData,
  editData,
  deleteData,
};
