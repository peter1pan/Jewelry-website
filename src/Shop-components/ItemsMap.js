import JewelCard from './JewelCard';
import useFetch from '../hooks/useFetch';

const ItemsMap = () => {

    const url = "http://localhost:3000/shop";

    const { data: jewels, isLoading, error } = useFetch(url)
    return (
        <section className='jewels-card'>
            {isLoading && <p><i className="fa-solid fa-spinner fa-spin"></i>Shop Loading</p>}
            {error && <p> {error}</p>}

            {
                jewels && jewels.map((jewel) => (
                    <div key={jewel.id}>
                        <JewelCard jewel={jewel} />
                    </div>
                ))
            }
        </section>

    );

}

export default ItemsMap;