import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <h1>Contact Us:</h1>
        <form>
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
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default ContactUs