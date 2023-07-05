import React from 'react'

function Contact() {
    console.log('contact render')

    const [userName, setUserName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPhone, setUserPhone] = React.useState('');

    function submitForm(e) {
        e.preventDefault();
        console.log('form submitted')
    }

    /**
     * useEffect
     * 1. first time useEffect always run
     * 2. code rerenders when any dependency changes
     * 3. dependancy array can have more than one state
     * 4. dependancy must be a state
     * 5. empty dependancy array, useEffect code run for the first render only
     */

    React.useEffect( () => {
        console.log('$$$ expensive code $$$')
    }, [] )

    /**
     * Expensive Render
     * 1. Calculation heavy (process)
     * 2. API calls
     * 3. Monitory terms - API costs
     */

  return (
    <div>
        <h1>Contact Us</h1>

        <p>Please submit this form, our team will reachout to you :)</p>

        <form onSubmit={submitForm}>
            <input type="text" placeholder='John doe' onChange={e => setUserName(e.target.value)} />
            <input type="email" placeholder='johndoe@gmail.com' onChange={e => setUserEmail(e.target.value)} />
            <input type="number" placeholder='+91-1234567890' onChange={e => setUserPhone(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact
