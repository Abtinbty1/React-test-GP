
import './Footer.css'
export default function Form() {
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label
            style={{
                color: "#ff0000ff",
            }}
            >Email</label>
            <br />
            <input name ='email' type='email' />
            <br />
            <label
            style={{
                color: "#ff0000ff",
            }}
            >Name</label>
            <br />
            <input name ='name' type='text' />  
            <br />
            <button className="Submit" type='submit'>Submit</button>
        </form>
    );

    function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    if (email === '' || name === '') {
        alert('Please fill in all fields.');
        return;
    }

    onSubmit(email, name);
}
function onSubmit(email, name){
    
    alert(`submitted :${name}- ${email}`);
}}