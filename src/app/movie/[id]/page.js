import axios from "axios";
import {Image} from "next/image"
// import { useRouter } from "next/navigation";
export default async function MoviePage({params}) {
    const movieId = params.id;
    // console.log(movieId);
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjEzMDZhMTcwYTNmZjk5MDc4NjMxNGZiMjZmMWU4ZiIsInN1YiI6IjY0ODFmNTg5ZTI3MjYwMDBhZmMxNDZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xuiqeZNk7fjQwNBp-9Y1_Gsq3ByR_IUy7PMuymDtlj8'
        }
      };

    const res = await axios.request(options);
    // console.log(res.data);
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            
            {/* <Image src={`https://image.tmdb.org/t/p/original/${res.data.backdrop_path || res.data.poster_path}`} width={500} height={300} alt={res.data.title}
                    className="rounded-lg"
                    style={{
                        maxHeight:"100%",
                        height:"100%"
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                ></Image> */}
            <div className="p-2pka">
            <h2 className="text-lg font-bold mb-3 ">{res.data.title || res.data.name}</h2>
            <p className="text-lg mb-3">
                <span className="font-semibold mr-1">Overview:</span>
                {res.data.overview}    
            </p>
            <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span>
                {res.data.release_date}
            </p>
            <p className="mb-3"><span className="font-semibold mr-1">Rating</span>
                {res.data.vote_count}
            </p>
            </div>

        </div>
    </div>
  )
}
