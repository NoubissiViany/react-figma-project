import { Link, useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  /*  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); */

  function goAfter5() {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }

  return (
    <div>
      <h1>About Pages</h1>
      <Link to="/">Go back</Link>
      <button onClick={goAfter5} type="button">
        Go after 5
      </button>
    </div>
  );
}

export default AboutPage;
