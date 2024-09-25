import stilos from './Vermas.module.css';

const Vermas = ({ onClick }) => {
    return (
    <button className={stilos.button} onClick={onClick}>
        Ver más
    </button>
    );
};

export default Vermas;
