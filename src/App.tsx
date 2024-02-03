import './App.scss'
import { ArrowIcon } from './assets/componets/Arrow-icon'
import { Logo } from './assets/componets/logo'
function App() {
  return (
    <main>
      <header className='header-container'> 
          <Logo />
          <nav className='menu-options'>
            <a href="">What we offer</a>
            <a href="">How ir works</a>
            <a href="">Portfollo</a>
          </nav>
          <button>
            <div className='btn-face-white'>
            Contact us
            <ArrowIcon />
            </div>
            <div className='btn-face-purple'>
            Contact us
            <ArrowIcon />
            </div>
          </button>
      </header>

      <div className='content-container'>
        
        <div className="heading-container">
        <h2>Lets grow your  </h2>
        <h2>social presence. </h2>
        </div>

        <div className='buble target'>
          🎯
        </div>
        <div className='buble shopp'>
          🛍️
        </div>
        <div className='buble rocket'>
          🚀
        </div>
        <div className='buble fire'>
          🔥
        </div>
      </div>
    </main>
  )
}

export default App
