import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header';
import { useMoralis } from 'react-moralis';
import Eth from '../components/Eth';

export default function Home() {
  const { isAuthenticated  } = useMoralis();

  if (!isAuthenticated) {
    return (
     <Login />
    );
  }
  return (
    
    <div className=" relative h-screen overflow-y-scroll overflow-hidden ">
    {/* <video autoPlay muted loop id="videoBG" >         
    <source src="/images/vbg2.mp4" type="video/mp4"/>       
    </video> */}
      <Head>
        <title>Switch</title>
        <link rel="icon" href="/switch.ico" />
      </Head>
      {/* <div className="flex absolute  w-full items-center justify-center space-y-9">
            */}

      <div>
        <div className="max-w mx-auto">
              
        {/*header*/}

        <Header />
       
       <Eth />
        {/*main*/}

        </div>     
      </div>
      
      </div>
    // </div>
  );
}
