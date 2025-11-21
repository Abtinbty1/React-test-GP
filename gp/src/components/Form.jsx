
import '../Style/Form.css';
export default function Form() {
    return (
        <div className="Container">
        <form className="Form" onSubmit={handleSubmit}>
            <label className='la'>Email</label>
            <br />
            <input  className= 'II'name ='email' type='email' />
            <label className='la'>Name</label>
            <br />
            <input className= 'II'name ='name' type='text' />  
            <br />
            <button className="Submit" type='submit'>Submit</button>
        </form>
        </div>
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
    email.value = '';
    name.value = '';
    form
}}