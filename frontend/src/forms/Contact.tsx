import Form from "./Form";

import home from "../images/ipad.jpg";
import ik from "../images/Ik1.webp";

interface Data {
  checked?: boolean;
}

export default function Contact() {

  const greeting="Dziękujemy za dołączenie do RealN"
  const text="Sprawdzaj regularnie pocztę aby być na bieżąco ze wszystkimi aktualnościami dotyczącymi RealN"
  const subject = "Zainteresowanie aplikacją RealN";


  const addContact = (data: Data) => {
    delete data.checked;
    fetch("https://realn.pl:5000/contact", {
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
        <h3>Dowiedz się więcej o RealN</h3>
        <Form addData={addContact} greeting={greeting} text={text} subject={subject}/>
      </div>
      <div className="contact-img__box">
        <img className="mockup" src={home} alt="contact us"></img>
        <img className="icon" src={ik} alt="icon"></img>
      </div>
    </div>
  );
}
