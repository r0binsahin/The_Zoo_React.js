import { Navbar } from '../components/Navbar/Navbar';
import './StartPage.scss';

export const StartPage = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className='welcomeWrapper'>
        <div className='welcomeWrapper__welcomeBox'>
          <h1 className='welcomeWrapper__welcomeBox--title'>🦊 The Zoo 🐻</h1>
          <h2 className='welcomeWrapper__welcomeBox--welcome'>
            Hej och välkommen!
          </h2>
          <span className='welcomeWrapper__welcomeBox--desc'>
            Här hittar du våra matgiriga djur som ofta är hungriga. Du får gärna
            kika in, lära känna dem och mata dem om de är hungriga. De behöver
            matas var tredje timme. Just nu svälter de säkert. Så skynda att
            mata dem.
          </span>

          <div className='welcomeWrapper__welcomeBox--link'>
            <a href='/animals'>kika på djuren</a>
          </div>
        </div>
      </div>
    </>
  );
};
