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

const CatCard: React.FC<CatCardProps> = (props: CatCardProps) => (
  <div className="card">
    <h3 className="card__text card__header">{props.name}</h3>
    <p className="card__text">Species: {props.species}</p>
    <p className="card__text">Favourite Food(s): {props.favFoods.toString()}</p>
    <p className="card__text">Birth Year: {props.birthYear}</p>
    {props.imageData[props.catIndex] && (
      <CatImage
        image={props.imageData[props.catIndex].image}
        altText={props.imageData[props.catIndex].altText}
        licenceType={props.imageData[props.catIndex].licenceType}
        licenceUrl={props.imageData[props.catIndex].licenceUrl}
        attributionName={props.imageData[props.catIndex].attributionName}
        attributionUrl={props.imageData[props.catIndex].attributionUrl}
      />
    )}
  </div>
);

export default CatCard;
