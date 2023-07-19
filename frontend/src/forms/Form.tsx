import { useForm } from "react-hook-form";

import "./forms.scss";
import { useEffect, useState } from "react";
import FormModal from "./FormModal";

interface Props {
  addData: (data: {}) => void;
  greeting: string;
  text: string;
  subject: string;
}

export default function Form({ addData, greeting, text, subject }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [to, setTo] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    getValues,
  } = useForm();

  const htmlContent = `
  <h1>Szanowny/a ${getValues("name")},<h1/>
  
  <p>Chciałbym skorzystać z okazji i podziękować za wyrażenie zainteresowania współpracą jako Agent RealN. Jesteśmy podekscytowani, że dostrzegasz potencjał naszej platformy i chciałbyś/ałabyś dołączyć do naszego zespołu.</p>
  
  <p>RealN to dynamicznie rozwijająca się firma, która łączy siły ludzi z zaawansowaną sztuczną inteligencją, aby zapewnić najwyższej jakości doświadczenie nieruchomościowe. Naszą misją jest rewolucjonizowanie rynku nieruchomości i dostarczanie klientom innowacyjnych rozwiązań, personalizowanych rekomendacji oraz inteligentnych narzędzi.</p>
  
  <p>Jako Agent RealN, będziesz miał/a dostęp do zaawansowanych technologii, które ułatwią Ci proces poszukiwania, sprzedaży i zarządzania nieruchomościami. Nasza platforma oferuje inteligentne analizy rynkowe, które dostarczą Ci dokładnych danych i trendów, umożliwiając podejmowanie świadomych decyzji inwestycyjnych. Ponadto, będziesz mógł/a korzystać z personalizowanych rekomendacji, które dostosujemy do Twoich preferencji i potrzeb, pomagając Ci znaleźć idealne nieruchomości dla Twoich klientów.</p>
  
  <p>Jeżeli jesteś zainteresowany/a dołączeniem do naszego zespołu, proszę o przesłanie swojego CV oraz krótkiego listu motywacyjnego na adres [adres e-mail] lub skorzystanie z formularza zgłoszeniowego na naszej stronie internetowej. Nasz zespół rekrutacyjny będzie Cię informował o dalszych krokach procesu rekrutacyjnego.</p>
  
  <p>Dziękuję jeszcze raz za wyrażenie zainteresowania Agentem RealN. Jesteśmy podekscytowani możliwością współpracy i czekamy na Twoje zgłoszenie.</p>
  
  <p>Z poważaniem,</p>
  
  <p>Sebastian Zimnol</p>
  <p>RealN - Zespół Rekrutacyjny</p>
  `;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      handleOpen();
    }
  }, [reset, isSubmitSuccessful]);

  const sendMail = () => {
    fetch("/send-email", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, htmlContent }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTo("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit(addData);
          sendMail();
        }}
      >
        <input
          type="text"
          placeholder="Imię"
          {...register("name", { required: true })}
        ></input>
        {errors.name && <p className="error">Imię jest wymagane</p>}

        <input
          type="text"
          placeholder="Nazwisko"
          {...register("surname", { required: true })}
        ></input>
        {errors.surname && <p className="error">Nazwisko jest wymagane</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          onChange={(e) => setTo(e.target.value)}
        ></input>
        {errors.email && <p className="error">Adres email jest wymagany</p>}
        <input
          type="tel"
          placeholder="Telefon"
          maxLength={9}
          {...register("phone", { required: true })}
        ></input>
        {errors.phone && <p className="error">Numer telefonu jest wymagany</p>}

        <aside {...register("checked", { required: true })}>
          <input
            className="home-text__checkbox"
            type="checkbox"
            {...register("checked", { required: true })}
          ></input>

          <span>
            *Zapoznałem się z Klauzulą Informacyjną dot. przetwarzania moich
            danych osobowych Realn.pl/ochrona-danych-osobowych
          </span>
          {errors.checked && <p className="error">Pole jest wymagane</p>}
        </aside>
        <button type="submit">Wyślij</button>
        <FormModal
          handleClose={handleClose}
          greeting={greeting}
          text={text}
          open={open}
        />
      </form>
    </>
  );
}
