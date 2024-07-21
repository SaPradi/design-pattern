import { useEffect, useState } from "react";
import { githubService } from "../../service/githubUser.service";
import { GitHubUser } from "../../interfaces";
import { Subscription } from "rxjs";


interface SearchProps {
    onSearch: (results: GitHubUser[], isLoading: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {

    const [query, setQuery] = useState<string>('');
    useEffect(() => {
        const subscription: Subscription = githubService.searchUsers(query).subscribe(({ users, isLoading }) => {
            onSearch(users, isLoading);
        });
        return () => subscription.unsubscribe();
    }, [query]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };
    return (
        <div className="flex items-center justify-center">
            <div className=" bg-white rounded-md flex items-center">
                <input
                    className=" p-3  bg-inherit"
                    value={query}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Search"
                />

            </div>
        </div>
    )
}

export default Search
