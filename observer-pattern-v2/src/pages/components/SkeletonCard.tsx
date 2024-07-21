interface SkeletonCardProps{
    i:number
}

const SkeletonCard:React.FC<SkeletonCardProps> = ({i}) => {

  return (
    <div className="">
        <div  className="rounded-md h-36 w-36 bg-gray-500 border-gray-700 animate-pulse"></div>

        <div className="flex items-center gap-1 mt-2">
            <div className=" rounded-full h-6 w-6 bg-gray-500 border-gray-700 animate-pulse"></div>
            <div className="h-5 w-16 bg-gray-500 border-gray-700 animate-pulse"></div>
        </div>

    </div>
  )
}

export default SkeletonCard
