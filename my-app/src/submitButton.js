function SubmitButton () {
    function handleClick () {
        let zipcode = document.getElementById('input').value;
        console.log(zipcode);
    }
    return(
        <button id="zipBtn" onClick= {handleClick}>Submit Zip</button>
    )
}
export default SubmitButton;
