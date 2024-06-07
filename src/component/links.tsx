import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGoodreads, faSquareGithub, faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Links(){
    return (
        <div className="w-1/2">
            <div className='flex justify-between text-paragraph text-2xl'>
                <a href="https://github.com/blncmusa">
                    <p>
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </p>
                </a>
                <a><FontAwesomeIcon icon={faLinkedin} className="hover:text-red-500 cursor-pointer"/></a>
                <a><FontAwesomeIcon icon={faGoodreads} /></a>
                <a><FontAwesomeIcon icon={faPlaystation} /></a>
                <a><FontAwesomeIcon icon={faCode} /></a>
            </div>
        </div>
    )
}