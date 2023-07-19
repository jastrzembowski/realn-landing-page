import Form from "./Form";

import keys from "../images/keys.jpg";
import "./forms.scss";

export default function Agent() {
  const greeting = "Witaj agencie!";
  const text =
    "Dostaliśmy Twoje zgłoszenie o dołączenie do zespołu RealN i odezwiemy się do Ciebie w najbliższym czasie! ";
  const subject = "Zainteresowanie współpracą jako Agent RealN";

  const addAgent = (data: {}) => {
    fetch("https://realn.pl:5000/agents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  return (
    <div className="contact-container">
      <div className="form-box">
        <h1>Buduj swoją przyszłość</h1>
        <h3>Zostań agentem RealN</h3>
        <Form addData={addAgent} greeting={greeting} text={text} subject={subject} />
      </div>
      <div className="contact-img__box">
        <img className="keys" src={keys} alt="contact us"></img>
      </div>
    </div>
  );
}
