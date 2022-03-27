import uniqid from 'uniqid'
import Icon from '@mdi/react'
import { mdiStarPlusOutline, mdiEyePlusOutline, mdiSourceFork } from '@mdi/js';

const projectList = [
    {
        "title" : "Blog 1",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
    {
        "title" : "Blog 2",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
    {
        "title" : "Blog 3",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
    {
        "title" : "Blog 4",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
    {
        "title" : "Blog 5",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
    {
        "title" : "Blog 6",
        "content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, culpa velit. Dolores enim amet, accusantium ea quisquam aliquid, adipisci nemo facere fuga quibusdam tempora sed consequuntur culpa eligendi distinctio at?",
        "id": uniqid()
    },
]

const Projects = () => {
  return (
    <div className="p-6 text-gray-700">
        <div className="font-bold text-xl">
            Your Projects
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-5">
            {projectList.map(project => (
                <div className='py-4 px-4 bg-white shadow-md mr-4 mb-4 border border-l-8 border-l-yellow-500 rounded-lg' key={project.id}>
                    <div className='font-bold text-lg'>{project.title}</div>
                    <div>{project.content}</div>
                    <div className='flex space-x-2 justify-end items-center'>
                        <Icon path={mdiStarPlusOutline} size={1} className='cursor-pointer' />
                        <Icon path={mdiEyePlusOutline} size={1} className='cursor-pointer' />
                        <Icon path={mdiSourceFork} size={1} className='cursor-pointer' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
