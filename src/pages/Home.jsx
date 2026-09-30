import Orchids from "../assets/orchids.jpg";

function Home() {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <h2>Welcome to my plant webshop!🌱</h2>
      <img
        src={Orchids}
        alt="Orchids"
        style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        className="home-image"
      />
      <p className="home-description">
        Discover a wide variety of plants to bring life and freshness to your
        home. <br />
        Browse our collection and find the perfect plant companions for your
        space. Happy shopping!
      </p>
    </div>
  );
}

export default Home;
