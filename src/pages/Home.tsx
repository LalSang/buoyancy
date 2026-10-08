import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
        <section>
            <h1>Build the life you're aiming for.</h1>

            <p>
                Set a goal, choose your timeline, document your progress,
                and look back on the journey that got you there.
            </p>

            <Link to="/register">Start your Journey</Link>
        </section>
    </main>
  );
}

export default Home;