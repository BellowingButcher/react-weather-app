function SubmitButton () {
    function handleClick () {
        console.log('You"ve clicked me');
    }
    return(
        <button onClick= {handleClick}>Submit Zip</button>
    )
}
export default SubmitButton;
