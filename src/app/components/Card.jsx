import Link from "next/link";
import Image from "next/image";
import {FaRegThumbsUp} from "react-icons/fa"
export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
           
           <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300} alt={result.title}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    style={{
                        maxHeight:"100%",
                        height:"auto"
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                ></Image>
                <div className="">
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="line-clamp-1 text-lg font-bold">{result.title || result.name}</h2>
                    <p className="flex items-center">{result.release_date || result.first_air_date} <FaRegThumbsUp className="h-5 mr-1 ml-3"/>{result.vote_count}</p>
                </div>
           </Link>
    </div>
  )
}
