import './Cards.css'
function CardHolder ({Children}){
    return(
        <section className="CardHolder">
            {Children}
        </section>
    );
}

export default CardHolder;