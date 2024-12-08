// import { useRecoilValue } from "recoil";
// import { locationAtom } from "../recoil/atoms/locationAtom";

// interface Location {
//     latitude: number;
//     longitude: number;
// }

// const useFilterByDistance = () => {
//     const userLocation = useRecoilValue(locationAtom);

//     const filterByDistance = (locations: Location[], maxDistance: number) => {
//         if (!userLocation) {
//             console.error("??? ??? ???? ?????.");
//             return [];
//         }

//         const { latitude: userLat, longitude: userLng } = userLocation;

//         return locations.filter((location) => {
//             const { latitude, longitude } = location;

//             const toRad = (value: number) => (value * Math.PI) / 180;
//             const R = 6371e3; // ?? ??? (??)
//             const �1 = toRad(userLat);
//             const �2 = toRad(latitude);
//             const �� = toRad(latitude - userLat);
//             const �� = toRad(longitude - userLng);

//             const a =
//                 Math.sin(�� / 2) * Math.sin(�� / 2) +
//                 Math.cos(�1) * Math.cos(�2) * Math.sin(�� / 2) * Math.sin(�� / 2);
//             const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//             const distance = R * c; // ?? ?? (??)
//             return distance <= maxDistance; // ?? ?? ??? ??? ??
//         });
//     };

//     return { filterByDistance };
// };

// export default useFilterByDistance;
