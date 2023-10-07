import "./home.css";

function Home() {
  return (
    <div className="home">
      <video
        className="w-full h-screen absolute object-cover"
        autoPlay
        muted
        loop
        src="/images/unlam.mp4"
        type="video/mp4"
      />
    </div>
  );
}

export default Home;
