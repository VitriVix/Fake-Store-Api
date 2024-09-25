import { useEffect, useState } from 'react';
import BuscarEntrada from './BuscarEntrada';
import stilos from './ContenedorDeProductos.module.css';
import ListaProductos from './ListaProductos';
import Vermas from './Vermas';

const ContenedorDeProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosVisibles, setProductosVisibles] = useState(10);
  const [buscarProductos, setBuscarProductos] = useState('');

  useEffect(() => {
    const fetchDeProductos = async () => {
      const respuesta = await fetch('https://fakestoreapi.com/products');
      const datos = await respuesta.json();
      setProductos(datos);
    };
    fetchDeProductos();
  }, []);

  const productosFiltrados = productos.filter(product =>
    product.title.toLowerCase().includes(buscarProductos.toLowerCase())
  );

  const vermasProductos = () => {
    setProductosVisibles((actual) => actual + 10);
  };

  return (
    <div className={stilos.contenedor}>
      <BuscarEntrada buscarProductos={buscarProductos} setBuscarProductos={setBuscarProductos} />
      <ListaProductos productos={productosFiltrados.slice(0, productosVisibles)} />
      {productosVisibles < productosFiltrados.length && (
        <Vermas onClick={vermasProductos} />
      )}
    </div>
  );
};

export default ContenedorDeProductos;