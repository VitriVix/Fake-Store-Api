import stilos from './BuscarEntrada.module.css';

const BuscarEntrada = ({ buscarProducto, setBuscarProductos }) => {
    return (
    <input
        type="text"
        className={stilos.buscar}
        placeholder="Buscar productos..."
        value={buscarProducto}
        onChange={(e) => setBuscarProductos(e.target.value)}
    />
    );
};

export default BuscarEntrada;