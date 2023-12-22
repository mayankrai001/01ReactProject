const Hero = () =>{
    return (
        <main className="hero flex flex-row mw-1280rem m-auto mx-10 items-center h-100vh">
            <div className="hero-content">
                <h1 class="font-bold"> YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET<br></br> DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
                <div className="hero-button flex flex-row gap-4">
                    <button className="bg-red-400">Shop Now</button>
                    <button className="bg-green-400">Category</button>
                </div>
                <div className="hero-platoform">
                    <p>Available On</p>
                </div>
                <div className="brand-icons flex flex-row gap-3 mx-4">
                    <img src="/images/flipkart.png"></img>
                    <img src="/images/amazon.png"></img>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png"></img>
            </div>
        </main>
    )
}

export default Hero;