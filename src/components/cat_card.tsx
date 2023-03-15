import { CatImageData } from "../data/cat-image-data";
import CatImage from "./cat_image";

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  catIndex: number;
  imageData: Array<CatImageData>;
}

const CatCard: React.FC<CatCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  catIndex,
  imageData,
}: CatCardProps) => (
  <div className="card">
    <h3 className="card__text card__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favourite Food(s): {favFoods.toString()}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
    {imageData[catIndex] && (
      <CatImage
        image={imageData[catIndex].image}
        altText={imageData[catIndex].altText}
        licenceType={imageData[catIndex].licenceType}
        licenceUrl={imageData[catIndex].licenceUrl}
        attributionName={imageData[catIndex].attributionName}
        attributionUrl={imageData[catIndex].attributionUrl}
      />
    )}
  </div>
);

export default CatCard;
