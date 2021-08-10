
function Search(props) {
    return (
        <section className= 'searchbox-wrap'>
            <input
                type="text"
                onChange={props.handleInput}
                placeholder='Search for a movie...'
                className="searchbox"
                onKeyPress={props.search}
            />
        </section>
    );
}

export default Search;