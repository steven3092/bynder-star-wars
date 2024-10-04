import { CharactersDTO } from "../../interfaces/characters.dto";

export const ImageCharacter = ({ character }: { character: CharactersDTO }) => {
  return (
    <>
      {character?.name === "Luke Skywalker" && (
        <img
          src="../../../../public/assets/Luke Skywalker.png"
          alt="luke skywalker"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Leia Organa" && (
        <img
          src="../../../../public/assets/Princess Leia.png"
          alt="leia organa"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "C-3PO" && (
        <img
          src="../../../../public/assets/C-3PO.png"
          alt="C-3PO"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R2-D2" && (
        <img
          src="../../../../public/assets/R2-D2.png"
          alt="R2-D2"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R5-D4" && (
        <img
          src="../../../../public/assets/R5-D4.png"
          alt="R5-D4"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Darth Vader" && (
        <img
          src="../../../../public/assets/Darth Vader.png"
          alt="darth vader"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Owen Lars" && (
        <img
          src="../../../../public/assets/Owen Lars.png"
          alt="owen lars"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Obi-Wan Kenobi" && (
        <img
          src="../../../../public/assets/Obi-Wan.png"
          alt="obi-wan kenobi"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name !== "Obi-Wan Kenobi" &&
        character?.name !== "Owen Lars" &&
        character?.name !== "Darth Vader" &&
        character?.name !== "R5-D4" &&
        character?.name !== "R2-D2" &&
        character?.name !== "Leia Organa" &&
        character?.name !== "Luke Skywalker" &&
        character?.name !== "C-3PO" && (
          <img
            src="../../../../public/assets/no_idea.png"
            alt="no idea"
            className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
          />
        )}
    </>
  );
};
