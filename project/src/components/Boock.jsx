const Boock = (props) => {
    console.log(props);
    
    return (
        <div>
            <h1> {props.book[0].name} </h1>
            <h2>{props.book[0].price} $</h2>
            <h1> {props.book[1].name} </h1>
        </div>
    )
}
export default Boock