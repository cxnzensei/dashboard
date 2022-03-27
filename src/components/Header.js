import Icon from "@mdi/react"
import { mdiMagnify, mdiBellRingOutline } from "@mdi/js"

const Header = () => {
  return (
    <div className="top-0 border-b-2 shadow-md sticky z-10 bg-white text-gray-700">
        <div className="pt-4 px-8 flex md:items-center space-y-4 md:space-y-0 flex-col md:space-x-4 md:flex-row">
            <div className="flex items-center w-full justify-start md:w-3/5 space-x-3">
                <div>
                    <Icon path={mdiMagnify} size={1.2} />
                </div>
                <div className="w-full">
                    <input 
                        type="text" 
                        className="outline-none border-2 w-full rounded-full px-3 py-1 bg-gray-300" 
                    />
                </div>
            </div>
            <div className="flex items-center w-full md:justify-end md:w-2/5 space-x-5">
                <Icon path={mdiBellRingOutline} size={1.2} />
                <img 
                    src="/images/cat1.jpg" 
                    alt="profilePhoto"
                    className="w-14 h-14 object-cover rounded-full p-0.5 border border-gray-500"
                />
                <div className="font-bold text-lg">Morgan Oakley</div>
            </div>
        </div>
        <div className="flex items-center py-4 px-8 justify-between">
            <div className="md:flex items-center hidden space-x-3">
                <img 
                    src="/images/cat1.jpg" 
                    alt="profilePhoto"
                    className="w-20 h-20 object-cover rounded-full p-0.5 border border-gray-500" 
                />
                <div className="font-bold text-lg">
                    <p> Hi, there! </p>
                    <p>Morgan Oakley (@morgan)</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <button className="button">New</button>
                <button className="button">Upload</button>
                <button className="button">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Header
