import React from "react";

const Description = ({ language }) => {
  const text =
    language === "pt" ? (
      <>
        Thauros é um projeto com uma identidade sonora abstrata e marcante. Traz
        em seu set uma imersão sônica e cibernética única, com uma fusão de
        vertentes, transportando você para uma dimensão futurista, onde os sons
        se fundem em harmonia perfeita, criando uma experiência sonora inovadora
        e autoral.
        <br></br>
        <br></br>
        Difícil de explicar, não se surpreenda se você não entender nada mas
        ainda assim quiser ouvir mais!
      </>
    ) : (
      <>
        Thauros is a project with a distinctive and abstract sound identity. It brings forth a unique sonic and cybernetic immersion in his set, blending different genres and transporting you to a futuristic dimension where sounds merge in perfect harmony, creating an innovative and original sound experience.
        <br></br>
        <br></br>
        Hard to explain, don't be surprised if you don't understand anything, but still want to hear more!
      </>
    );
  return (
    <section>
      <p className="text-justify">{text}</p>
    </section>
  );
};

export default Description;
