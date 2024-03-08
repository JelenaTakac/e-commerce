const ContactUs = () => {
  return (
    <div className="contact-page wrapper">
        <h1 className="title contact-title">Contact Us:</h1>
        <form className="contact-form">
            <div>
                <label>First Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" />
            </div>
            <div>
                <label>Phone: </label>
                <input type="number" />
            </div>
            <div>
                <label>Subject: </label>
                <input type="text" />
            </div>
            <div>
                <label>Message: </label>
                <textarea></textarea>
            </div>
            <input type="submit" value="Send" className='btn'/>
        </form>
    </div>
  )
}

export default ContactUs