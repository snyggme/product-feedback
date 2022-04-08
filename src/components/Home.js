import manager from '../assets/sticker.png';

function Home() {
    return (
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
    )
}

export default Home;