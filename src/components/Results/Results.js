import Result from "./Result";
function Results({ results, openPopup, error }){
    return (
        <section className="results">
            {results.map(result =>{
                return (<Result result = {result} openPopup = {() => openPopup(result.imdbID)}/>)
            })}
        </section>
    );
};

export default Results;