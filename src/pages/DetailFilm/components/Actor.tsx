// import { useEffect, useState } from "react";
// interface ActorProp {
//   tmdbId: string;
// }
// type Actor = {
//   name: string;
//   character: string;
//   image: string | null;
// };
// export default function Actor({ tmdbId }: ActorProp) {
//   const [actors, setActors] = useState<Actor[]>([]);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${tmdbId}/credits?api_key=YOUR_API_KEY&language=vi-VN`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const castWithImage = data.cast.map((actor: Actor) => ({
//           name: actor.name,
//           character: actor.character,
//           image: actor.image
//             ? `https://image.tmdb.org/t/p/w500${actor.image}`
//             : null,
//         }));
//         setActors(castWithImage);
//       });
//   }, [tmdbId]);

//   return (
//     <div className="flex flex-wrap gap-4">
//       {actors.map((actor) => (
//         <div key={actor.name} className="w-32 text-center">
//           {actor.image ? (
//             <img
//               src={actor.image}
//               alt={actor.name}
//               className="rounded-lg w-full h-40 object-cover"
//             />
//           ) : (
//             <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
//               No Image
//             </div>
//           )}
//           <p className="mt-2">{actor.name}</p>
//           <p className="text-sm text-gray-500">{actor.character}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
