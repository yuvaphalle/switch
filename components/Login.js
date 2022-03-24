import Image from "next/image";
import React, { useEffect } from "react";

import {useMoralis} from "react-moralis";

function Login(){
    const { authenticate , isAuthenticating,isWeb3Enabled,
        isAuthenticated,
        user,
        enableWeb3,
        Moralis, } = useMoralis();


        async function authWalletConnect() {
            const user = authenticate({
              provider: "walletconnect",
              chainId: 56,
              // mobileLinks: [
              //   "metamask",
              //   "trust",
              //   "rainbow",
              //   "argent",
              //   "imtoken",
              //   "pillar",
              // ],
              signingMessage: "Welcome!",
            });
            console.log(user);
          }
        
          useEffect(() => {
            if (!isWeb3Enabled && isAuthenticated) {
              enableWeb3({ provider: "walletconnect", chainId: 56 });
              console.log("web3 activated");
            }
          }, [isWeb3Enabled, isAuthenticated, enableWeb3]);
        
          
            
    if(isAuthenticating){
        return (


            
     
            
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-9">
                
                <div className="img-hover-zoom--colorize">
                <Image className = "" src="/images/switch.png" width={400} height={100}  />
                </div>
                <button className="glow-on-hover" disabled >
                        is Authenticating.....
                </button>
            </div>        
                
        
                              
                  
            );
        
    };
    return (
       
      
        
        

        <div className=" relative">
            {/* <video autoPlay muted loop id="videoBG" >         
            <source src="/images/vbg.mp4" type="video/mp4"/>       
        </video>
             */}
            <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-9">
             
            <div class="box-border h-300 w-300 p-20 border-8 items-center justify-center flex flex-col">

           <div className="text-green-600  font-bold">
            SWITCH edu-ID
           </div>
            <div className="img-hover-zoom--colorize p-5">
            <Image className = " " src="/images/switch.png" width={400} height={100}  />
            </div>
                <div className="flex flex-col space-y-10">
                <button className=" glow-on-hover md:visible w-100 invisible  " onClick={authenticate}>
                Login With Metamask
                </button>

                <button className="glow-on-hover w-100" onClick={() => authWalletConnect()}>
                Wallet Connect
                </button>
                </div>
            </div>
            
            <div>
                {/*Profile logo and log button*/}
            </div>
            </div>

            <div className="w-full h-screen">
            {/* <Image src="/images/bg1.jpg" layout="fill" objectFit="cover"/> */}


                {/*Login form*/}
            </div>
        </div>
    );
}

export default Login;
