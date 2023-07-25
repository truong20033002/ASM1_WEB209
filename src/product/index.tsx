import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
const ProductList = () => {
  const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        const listProduct = async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            dispatch({ type: "products/listproducts", payload: data });
        };
        listProduct();
    }, []);
   const addProduct = async (product:any)=>{
    const {data} = await axios.post(`http://localhost:3000/products`,product);
    dispatch({type:"product/addproduct", payload:data});
   }
   const updateProduct = async (product:any)=>{
    const { data } = await axios.put(`http://localhost:3000/products/${product.id}`,product);
    dispatch({ type: "products/updateproducts", payload: data });
   }
   const deleteProduct = async (id:any) => {
    const thongbao = window.confirm('Bạn có chắc muốn xóa?');
    if (!thongbao) {
      return; 
    }
      await axios.delete(`http://localhost:3000/products/${id}`);
      dispatch({ type: "product/deleteproduct", payload: id });
  
  };
  return (
    
    
    <div>
    {products?.map((item: any) => (
        <div key={item.id}>{item.name}</div>
    ))}
    <button onClick={()=>addProduct({name:"product C"})} className="mr-4">add</button>
    <button onClick={()=>updateProduct({name:"product C update",id:3})} className="mr-4">edit</button>
    <button onClick={()=>deleteProduct(3)} >delete</button>
   </div>
  )
}

export default ProductList