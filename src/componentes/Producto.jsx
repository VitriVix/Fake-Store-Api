import stilos from './Producto.module.css';

const Producto = ({ product }) => {
    return (
    <div className={stilos.tarjeta}>
        <img className={stilos.imagen} src={product.image} alt={product.title} />
        <h3 className={stilos.titulo}>{product.title}</h3>
        <p className={stilos.precio}>${product.price}</p>
        <p className={stilos.descripcion}>{product.description}</p>
    </div>
    );
};

export default Producto;
