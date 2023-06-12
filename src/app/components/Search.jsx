"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

 
export default function Search() {
    const [search,setSearch] = useState("");
    const router = useRouter();
    const searchHandler =(e)=>{
            setSearch(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!search)
        {
            return
        }
        else
        {
            router.push(`/search/${search}`);
        }
    };
  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5"
    
    >
        <input type="text" value={search} placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-grey-500 outline-none bg-transparent flex-1" onChange={searchHandler}/>
        <button type="submit" className="text-amber-600 disabled:text-gray-400" disabled={!search}>Search</button>
    </form>
  )
}
