import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import Leaflet from "leaflet";

import mapPin from "../assets/icons/pin.svg";

import { ApiResponse } from "../types/api";
import { Position } from "../types/map";

interface Props {
  location: Position<number>;
  job: ApiResponse;
  position?: Position<number>;
}

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -75],
});

function SelectedJobMarker({ location }: any) {
  const map = useMap();
  map.flyTo(location, map.getZoom());
  return null;
}

export function Map({ location, job, position }: Props) {
  return (
    <MapContainer
      center={location}
      zoom={5}
      style={{ width: "50%", height: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
      />

      {position && (
        <Marker icon={mapPinIcon} position={position}>
          <Popup closeButton={true}>
            <div>
              <h3>{job.job_title}</h3>
              <p>{job.organization_name}</p>
            </div>
          </Popup>
        </Marker>
      )}

      <SelectedJobMarker location={location} />
    </MapContainer>
  );
}
