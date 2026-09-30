import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  function handleBackToHomepage() {
    navigate("/");
  }

  return (
    <div className="confirmation-page">
      <h1>Thank you for your order!</h1>
      <h2>Your plant babies will be on their way soon!🌱</h2>
      <button onClick={handleBackToHomepage}>Back to homepage</button>
    </div>
  );
}

export default Confirmation;
