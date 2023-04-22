const URL = 'https://fakestoreapi.com/products'

export const getAllCategories = async () => {
  return fetch(`${URL}/categories`).then((resp) => resp.json())
}

export const getAllCategoryProducts = async (categoryName: string) => {
  return fetch(`${URL}/category/${categoryName}`).then((resp) => resp.json())
}

export const getProduct = async (productId: number) => {
  return fetch(`${URL}/${productId}`).then((resp) => resp.json())
}
