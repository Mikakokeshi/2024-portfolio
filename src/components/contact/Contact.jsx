import './contact.scss'

const Contact = () => {
  return (
    <div className="contact">
        <div className="textContainer">
            <h1>Contact Me</h1>
            <div className="item">
                <h2>Mial</h2>
                <span>mikakokeshi00124@gmail.com</span>
            </div>
        </div>
        <div className="formContainer">
            <form action="">
                <input type="text" required placeholder='Name' />
                <input type="email" required placeholder='Email' />
                <textarea name="" id="" rows={8} placeholder='White a message' />
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact