import home from "../images/home.jpg";
import icon from "../images/buyhouse.png";

import { BsFillSendFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

import "./home.scss";
import { useState } from "react";
import HomeModal from "./HomeModal";

interface Data {
  checked?: boolean;
}

export default function Homepage() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendMail = (data: Data) => {
    delete data.checked;

    fetch("https://realn.pl:5000/mails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        reset();
        handleOpen();
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="home">
      <div className="home-main">
        <article className="home-main__title">
          <h1>
            Napędzana technologią najskuteczniejsza platforma i aplikacja branży
            nieruchomości
          </h1>
          <ul>
            <li>
              Lepsze, prostsze i najinteligentniejsze rozwiązanie dla kupujących
              i sprzedających
            </li>
            <li>Więcej przychodów, więcej profesjonalizmu dla Agentów</li>
          </ul>
          <h2>
            Odkryj najlepsze rozwiązania dla nieruchomości, wspierane przez
            zaawansowaną sztuczną inteligencję, które dostarczają inteligentne
            analizy rynkowe, personalizowane rekomendacje i innowacyjne
            narzędzia, aby pomóc Ci w osiągnięciu sukcesu w dziedzinie
            nieruchomości.
          </h2>
        </article>
        <aside className="home-main__images">
          <img className="mockup" src={home} alt="landing page"></img>
          <img className="icon" src={icon} alt="looking for a house"></img>
        </aside>
      </div>
      <div className="home-text__box">
        <div className="home-text__input">
          <form
            className="home-text__input-holder"
            onSubmit={handleSubmit(sendMail)}
          >
            <input
              className="home-text__email"
              placeholder="Zostaw swój adres email*"
              type="email"
              {...register("email", { required: true })}
            ></input>
            <button type="submit">
              <BsFillSendFill />
            </button>
          </form>
          {errors.email && <p className="error">Adres email jest wymagany</p>}

          <aside>
            <input
              className="home-text__checkbox"
              type="checkbox"
              {...register("checked", { required: true })}
            ></input>
            <span>
              *Zapoznałem się z Klauzulą Informacyjną dot.przetwarzania moich
              danych osobowych Realn.pl/ochrona-danych-osobowych
            </span>
            {errors.checked && <p className="error">Pole jest wymagane</p>}
          </aside>
        </div>
        <h3>
          Zostaw swój adres e-mail, a będziesz otrzymywać informacje o
          najlepszych ofertach nieruchomości jako jeden z pierwszych. Jeśli
          sprzedajesz nieruchomość, podaj swój adres e-mail, aby otrzymywać
          aktualizacje dotyczące naszych usług i możliwości sprzedaży.
        </h3>
      </div>
      <HomeModal handleClose={handleClose} open={open} />
    </div>
  );
}
