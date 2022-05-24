import logoLarge from '../images/logo-large.svg'
export default function Main(){
    return (
        <main className="main--container">
            <h1 className="main">Fun facts about React</h1>
            <ul className="list--container">
                <li className="list--items">Was first released in 2013</li>
                <li className="list--items">Was originally created by Jordan Walke</li>
                <li className="list--items">Has well over 100K stars on GitHub</li>
                <li className="list--items">Is maintained by Facebook</li>
                <li className="list--items">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logoLarge} className="main--container--logo" alt="logo-large"/>
        </main>
    )
} 