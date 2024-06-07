import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGoodreads, faSquareGithub, faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Links(){
    return (
            <div className='flex justify-between text-paragraph text-3xl'>
                <a href="https://github.com/blncmusa">
                    <p>
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </p>
                </a>f
                <a><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-red-500"/></a>
                <a><FontAwesomeIcon icon={faGoodreads} className="cursor-pointer"/></a>
                <a><FontAwesomeIcon icon={faCode} className="cursor-pointer"/></a>
                <a><FontAwesomeIcon icon={faPlaystation} className="cursor-pointer"/></a>
            </div>
    )
}