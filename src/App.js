
import manager from './assets/sticker.png';



function App() {
  return (
	<div>
		<nav className='flex-nav'>
			<ul >
				<li className='nav-logo'>
					<a href='/'>Logo</a>
				</li>
				<li className='nav-feedbacks'>
					<a href='/'>Feedbacks</a>
				</li>
				<li className='nav-login'>
					<a href='/'>Log in</a>
				</li>
				<li className='nav-signup'>
					<button className='btn-black'>Sign Up</button>
				</li>
			</ul>
		</nav>
		<section className="home">
			<div className='welcome'>
				<div>
					<h1><div className='features'>Create features</div> It’s time to feedback on your terms</h1>
					<p>Product feedback app is amazing platform that allows you to create honest ratings of your favorite tools and cooperate with others.</p>
					<button className='btn-black'>Get started</button>
				</div>
				<img alt='wizard' src={manager}></img>
			</div>
		</section>
	</div>
  );
}

export default App;
