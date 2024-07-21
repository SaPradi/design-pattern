import { GitHubUser } from "../../interfaces";

interface PerfilCardProps {
  user: GitHubUser;
}

const PerfilCard:React.FC<PerfilCardProps> = ({ user }) => {


  return (
    <div className=" cursor-pointer" >
        <img className=" rounded-md h-36" src={user.avatar_url} alt="" />

        <div className="flex items-center gap-1 mt-2">
          <a href={user.html_url}>
            <img className="h-6" src='src/assets/github.png' alt="" />
          </a>
          <p className=" text-white uppercase"> { user.login } </p>

        </div>

    </div>
  )
}

export default PerfilCard
