import React, { useState, useEffect } from "react";
import { Web3Storage } from "web3.storage";
import Head from 'next/head'
import Login from '../components/Login'
import Header2 from '../components/Header2';
import { useMoralis } from 'react-moralis';


const upload = () => {
  const client = new Web3Storage({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ5OGM0MzkzRDk3NzFhZTVlOEZGNTIwODlGMTYwMjQwN0VFNjNDZGIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgxNTQxMjc5MTMsIm5hbWUiOiJUb2tlbiJ9.aITjRenUZ57Qda2dF8ZWDq19_jxDhSynN7-maK3ez-Y",
  });


  const { isAuthenticated  } = useMoralis();

  if (!isAuthenticated) {
    return (
     <Login />
    );
  }
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [cids, setCids] = useState("");
  useEffect(async () => {
    setCids("");
    if (selectedFiles != null) {
      const rootCid = await client.put(selectedFiles, {
        name: "any name",
        maxRetries: 3,
      });

      const res = await client.get(rootCid);
      const files = await res.files();

      files.forEach((file) => {
        setCids(file.cid + " ");
      });
    }
  }, [selectedFiles]);

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

        <Header2 />


        <div class="flex justify-center mt-8">
    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Resume Upload</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>
                    <input type="file" className="opacity-0 " onChange={(e) => setSelectedFiles(e.target.files)  } />
                </label>
            </div>
        </div>
        <div class="flex justify-center p-2">
        </div>
    </div>
</div> 


         

        </div>     
      </div>
      
      </div>
      

    
  );
};

export default upload;



