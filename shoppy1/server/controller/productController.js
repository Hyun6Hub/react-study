import * as repository from '../repository/productRepository.js';

/**
 * 상품 등록
 */
export const insert = async (req, res) => {
  const productData = req.body;
  const result = await repository.insert(productData);
  res.json(result);
  res.end();
}

/**
 * 개별 상품 전송
 */
export const getProduct = async (req, res, next)=>{
  const product = await repository.getProduct(req.params.id);
  res.json(product);
  res.end();
}

/**
 * 전체 상품 전송
 */
export const getProducts = async (req, res, next)=>{
  const params = req.body;
  const products = await repository.getProducts(params);
  res.json(products);
  res.end();
}