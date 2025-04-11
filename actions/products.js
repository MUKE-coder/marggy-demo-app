"use server";

export async function getProducts() {
  const api = "https://inventory-app-ten-gilt.vercel.app/api/v1/products";
  //https://ipos-api.up.railway.app/api/v1
  https: try {
    const res = await fetch(api);
    const resData = await res.json();
    const products = resData.data.slice(0, 10).map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.productPrice,
        image: item.productThumbnail,
      };
    });
    return products;
  } catch (error) {
    console.log(error);
  }
}
