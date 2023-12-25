import './App.css'
import logo from './assets/logo.jpg';

function App() {
  return (
    <>
       <div className="header">
        <nav>
            <img className="logo" src={logo} alt="logo" />
            <div>
                <button className="lang-btn"><i className="fa-solid fa-globe"></i> English </button>
                <button>Sign In</button>
            </div>
        </nav>

        <div className="header-content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="#" className="email-signup">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Get Started</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default App

