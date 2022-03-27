import Header from "./Header"
import Projects from "./Projects"
import Announcements from "./Announcements"
import Trending from "./Trending"

const Main = () => {
  return (
    <div className="w-full h-screen bg-[#fafafa] overflow-y-scroll">
      <Header />
      <div className="xl:grid grid-cols-3">
        <div className="z-100 flex xl:flex-col flex-col lg:flex-row xl:order-5">
          <Announcements />
          <Trending />
        </div>
        <div className="col-span-2 xl:order-0">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default Main
