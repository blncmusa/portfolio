import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGoodreads, faSquareGithub, faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Links(){
    return (
            <div className='flex justify-between text-paragraph text-2xl'>
                <a href="https://github.com/blncmusa" target='_blank'>
                    <p>
                        <FontAwesomeIcon icon={faSquareGithub} className='social-media'/>
                    </p>
                </a>
                <a href="https://www.linkedin.com/in/mustafa-kaspi-1a492b264/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="social-media"/></a>
                <a href="https://www.goodreads.com/user/show/171186445-mustafa" target='_blank'><FontAwesomeIcon icon={faGoodreads} className="social-media"/></a>
                <a href="https://leetcode.com/u/blncmusa/" target='_blank'><FontAwesomeIcon icon={faCode} className="social-media"/></a>
                <a href="https://psnprofiles.com/blnc-musa" target='_blank'><FontAwesomeIcon icon={faPlaystation} className="social-media"/></a>
            </div>
    )
}