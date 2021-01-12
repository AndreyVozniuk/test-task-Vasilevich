const baseUrl = 'http://localhost:3000'

export const productsAPI = {
  getProducts: async () => {
    const res = await fetch(baseUrl + '/products.json')

    if(!res.ok){
      throw new Error('Request status is not ok =(')
    }

    return await res.json()
  },
}
