import seriesData from "../api/seriesData.json"
import { SeriesList } from "./SeriesList";

export const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {seriesData.map((currentele) => {
                return (
                <SeriesList key={currentele.id} currentele={currentele} />
                );
            })}

        </ul>
    )
}