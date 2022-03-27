import Icon from '@mdi/react';
import { 
    mdiHome, 
    mdiLaptop, 
    mdiCardAccountDetailsOutline, 
    mdiMessageReply,
    mdiClockTimeThreeOutline,
    mdiNoteMultiple,
    mdiAccountGroup,
    mdiCog,
    mdiHelpBox,
    mdiShieldCheck 
} from '@mdi/js';

const Sidebar = () => {
  return (
    <div className='bg-sky-600 max-w-max h-screen lg:pr-12 text-white'>
        <div className='p-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 items-center'>
                <div className='dashIcon mb-14'>
                    <Icon path={mdiLaptop} size={2} />
                </div>
                <div className='col-span-2 ml-1.5 font-bold cursor-pointer hidden lg:inline-block text-xl mb-14'>Dashboard</div> 
                <div className='dashIcon'>
                    <Icon path={mdiHome} size={1} className='items-center w-full' />
                </div>
                <div className='dashText'>Home</div>
                <div className='dashIcon'>
                    <Icon path={mdiCardAccountDetailsOutline} size={1} />
                </div>
                <div className='dashText'>Profile</div>
                <div className='dashIcon'>
                    <Icon path={mdiMessageReply} size={1} />
                </div>
                <div className='dashText'>Messages</div>
                <div className='dashIcon'>
                    <Icon path={mdiClockTimeThreeOutline} size={1} />
                </div>
                <div className='dashText'>History</div>
                <div className='dashIcon'>
                    <Icon path={mdiNoteMultiple} size={1} /> 
                </div>
                <div className='dashText'>Tasks</div>
                <div className='dashIcon mb-14'>
                    <Icon path={mdiAccountGroup} size={1} />
                </div>
                <div className='dashText mb-14'>Communities</div>
                <div className='dashIcon'>
                    <Icon path={mdiCog} size={1} />
                </div>
                <div className='dashText'>Settings</div>
                <div className='dashIcon'>
                    <Icon path={mdiHelpBox} size={1} />
                </div>
                <div className='dashText'>Questions</div>
                <div className='dashIcon'>
                    <Icon path={mdiShieldCheck} size={1} />
                </div>
                <div className='dashText'>Privacy</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
