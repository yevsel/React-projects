import {links,socials} from './data/linksAndSocials'

import Navbar from './components/Navbar'

function App() {
  return (
    <nav className="navigation shadow">
      <Navbar socials={socials} links={links}/>
    </nav>
  );
}

export default App;
