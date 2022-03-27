import uniqid from 'uniqid'

const trendingList = [
    {
        "img" : "/images/cat2.jpg",
        "username" : "@tegan",
        "tag": "World Peace Builder",
        "id" : uniqid()
    },
    {
        "img" : "/images/cat1.jpg",
        "username" : "@morgan",
        "tag": "Super Cool Project",
        "id" : uniqid()
    },
    {
        "img" : "/images/cat4.jpg",
        "username" : "@kendall",
        "tag": "Life Changing App",
        "id" : uniqid()
    },
    {
        "img" : "/images/cat5.jpg",
        "username" : "@alex",
        "tag": "No Traffic Maker",
        "id" : uniqid()
    },
]

const Trending = () => {
  return (
    <div className="px-8 py-6 xl:py-0">
      <div className="font-bold text-xl">Trending</div>
      <div className='bg-white grid 2xl:grid-cols-2 gap-5 mt-5 shadow-md border-2 rounded-xl p-4'>
          {trendingList.map(profile => (
              <div key={profile.id} className='flex items-center space-x-3'>
                  <img className='md:w-20 md:h-20 w-12 h-12 object-cover rounded-full' src={profile.img} alt={profile.username} />
                  <div>
                      <p className='font-bold tracking-wider'>{profile.username}</p>
                      <p className='text-gray-500 font-semibold'>{profile.tag}</p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Trending
