import stilos from './ListaProductos.module.css';
import Producto from './Producto';

const ListaProductos = ({ productos }) => {
    return (
    <div className={stilos.grid}>
        {productos.map(product => (
        <Producto key={product.id} product={product} />
        ))}
    </div>
    );
};

export default ListaProductos;

