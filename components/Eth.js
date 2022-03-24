import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
//Message Duration


function Eth() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef("null");
  
    return (
        <div>          
<iframe  className="items-center w-full h-screen " src="https://ethz.ch/de/die-eth-zuerich/lehre/innovation/online-learning-moocs.html"></iframe>
      </div>
    )
}

export default Eth;
