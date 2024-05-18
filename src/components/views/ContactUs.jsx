const ContactUs = () => {
  return (
    <div className="contact-page wrapper">
        <h1 className="title contact-title">Contact Us:</h1>
        <form className="contact-form">
            <div>
                <label className="form-control w-full max-w-xs">First Name: </label>
                <input type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">Last Name: </label>
                <input type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">Email: </label>
                <input type="email" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">Phone: </label>
                <input type="number" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">Subject: </label>
                <input type="text" className="input input-bordered w-full max-w-xs"/>
            </div>
            <div>
                <label className="form-control w-full max-w-xs">Message: </label>
                <textarea className="textarea textarea-bordered h-24 w-full max-w-xs"></textarea>
            </div>
            <input type="submit" value="Send" className='btn'/>
        </form>
    </div>
  )
}

export default ContactUs