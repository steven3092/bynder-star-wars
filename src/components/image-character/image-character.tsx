import { CharactersDTO } from "../../interfaces/characters.dto";
import lukeSkywalker from "../../../src/assets/Luke_Skywalker.png";
import princessLeia from "../../../src/assets/Princess_Leia.png";
import c3po from "../../../src/assets/C-3PO.png";
import r2d2 from "../../../src/assets/R2-D2.png";
import r5d4 from "../../../src/assets/R5-D4.png";
import darthVader from "../../../src/assets/Darth_Vader.png";
import owenLars from "../../../src/assets/Owen_Lars.png";
import obiWan from "../../../src/assets/Obi-Wan.png";
import noIdea from "../../../src/assets/no_idea.png";

export const ImageCharacter = ({ character }: { character: CharactersDTO }) => {
  return (
    <>
      {character?.name === "Luke Skywalker" && (
        <img
          src={lukeSkywalker}
          alt="luke skywalker"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Leia Organa" && (
        <img
          src={princessLeia}
          alt="leia organa"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "C-3PO" && (
        <img
          src={c3po}
          alt="C-3PO"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R2-D2" && (
        <img
          src={r2d2}
          alt="R2-D2"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "R5-D4" && (
        <img
          src={r5d4}
          alt="R5-D4"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Darth Vader" && (
        <img
          src={darthVader}
          alt="darth vader"
          className="w-64 h-90 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Owen Lars" && (
        <img
          src={owenLars}
          alt="owen lars"
          className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
        />
      )}
      {character?.name === "Obi-Wan Kenobi" && (
        <img
          src={obiWan}
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
            src={noIdea}
            alt="no idea"
            className="w-64 h-80 rounded-lg object-cover mr-6 mb-6"
          />
        )}
    </>
  );
};
