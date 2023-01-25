function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="react-logo" src="./images/react-logo.png"  />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                 </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2023 Ummie development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div className= "page-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
   ReactDOM.render(
       <Page />,
       document.getElementById('root')
   );