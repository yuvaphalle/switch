import Image from "next/image";
import {useMoralis} from "react-moralis";

function Login(){
    const { authenticate , isAuthenticating } = useMoralis();
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

           
            <div className="img-hover-zoom--colorize">
            <Image className = " " src="/images/SWITCH.PNG" width={400} height={100}  />
            </div>

                <button className="glow-on-hover w-100" onClick={authenticate}>
                Log in to: edu-ID
                </button>
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