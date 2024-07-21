import { useState } from "react";
import Search from "./components/Search"
import PerfilList from "./components/PerfilList";
import SkeletonList from "./components/SkeletonList";

interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
}

const Home = () => {

    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = (results: GitHubUser[], isLoading: boolean) => {
        setUsers(results);
        setIsLoading(isLoading);
    };

    return (
        <div className=" bg-slate-800 flex flex-col items-center justify-center gap-6">
            <h1 className=" text-2xl text-white">Search User in Github</h1>
            <Search onSearch={handleSearch} />
            {/* List user search */}
            {
                isLoading
                ? <SkeletonList/>
                : <PerfilList users={users} />
            }
            

        </div>
    )
}

export default Home
