import { GitHubUser } from "../../interfaces";
import PerfilCard from "./PerfilCard";
import SkeletonCard from "./SkeletonCard";


  
interface PerfiListProps {
  users: GitHubUser[];
}

const PerfilList: React.FC<PerfiListProps> = ({ users }) => {
  return (
    <div className="  w-3/4 grid auto-rows-[202px]  gap-4  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  ">
       
       {users.map(user => (
        <PerfilCard user={user} key={user.id}/>
      ))}
    </div>
  )
}

export default PerfilList
