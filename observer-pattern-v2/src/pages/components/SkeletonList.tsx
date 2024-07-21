import SkeletonCard from "./SkeletonCard"



const SkeletonList = () => {
  return (
    <div className="  w-3/4 grid auto-rows-[202px]  gap-4  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  ">
      {

        [...Array(15)].map((_,i)=>(
            <SkeletonCard key={i} i={i}/>
        ))
      }

    </div>
  )
}

export default SkeletonList
