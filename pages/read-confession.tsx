import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { useContract, useContractRead, useProvider, useSigner } from "wagmi";
import { ADDRESS, ABI } from "@/constants/constants";
import { Oval } from "react-loader-spinner";

import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { client } from "./_app";

let arrlength: number = -1;

export default function Home() {
  const provider = useProvider();
  const { data: signer } = useSigner();

  const contract = useContract({
    address: ADDRESS,
    abi: ABI,
    signerOrProvider: signer || provider,
  });

  const [loading, setLoading] = useState(false)
  const [randomIndex, setRandomIndex] = useState<number>();
  const [theConfessionObject, setTheConfessionObject] = useState<any>(null);
  let checker =0
  useEffect(() => {
    checker++
    console.log(checker)
    if(checker==1){
    newConfession();
    }
  }, []);

  async function newConfession() {
      console.log(checker)
          setLoading(true)
          arrlength = await contract?.getCounter();
          if(arrlength!=-1&&contract){
            const index = Math.floor(Math.random() * arrlength);
          const { data } = await client.query({
            query: gql`
            query GetConfessions($index:Int!) {
            confesseds(first: 1, skip:$index) {
              id
              confession
              num
            }
          }
        `,
        variables:{index}
          });
          const theConfession = data.confesseds[0].confession
          const theIndex= data.confesseds[0].num
         setTheConfessionObject({index:theIndex, theConfession:theConfession})
         setLoading(false)
         console.log("ran")
        }
      
  
      }
  


  return (
    <>
      <Head>
        <title>read a confession</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  id="main_div" className="  min-h-screen          border-orange-400  flex flex-col justify-between px-2">

      <div id="averageheadenjoyer" className=" max-[520px]:h-10                border-white w-full h-14 ml-auto pt-4 pr-8 ">
          <div>
          </div>
        </div> 




        <div className="    min-h-[calc(100vh-7.5rem)] max-[520px]:min-h-[calc(100vh-6.5rem)]     border-red-800 flex flex-col  justify-between px-20 max-[850px]:px-5 max-[520px]:px-3 ">
          


          
        <div className="flex  justify-center           border-blue-600 py-2 mx-10 max-[520px]:mx-0  ">
          <div className="  text-5xl font-cardo tracking-wide text-[#ffffff]  h-min l max-[520px]:text-[2.5rem]  ">
              <Link href="/"> etched on chain </Link>
            </div>
          </div>



          <div className=" w-[40rem] 
          max-[690px]:w-[35rem] max-[600px]:w-[30rem] max-[520px]:w-[25rem] max-[450px]:w-[24rem] max-[420px]:w-[22rem] max-[400px]:w-[20rem] max-[380px]:w-[18rem]
          
          mx-16  -mb-6 self-center      border-green-500 flex-col  pt-4 pb-1">
            <div className="       border-red-500 pb-4">
              <div className=" w-max        border- font-cardo pb-2 tracking-wide  underline text-[#C3B091] text-3xl  text-justify ">
                {" "}
                {theConfessionObject||loading
                  ? <div>{`Confession #${theConfessionObject.index}`}</div>
                  : "Confession #"}
              </div>

              <div className="mt-4 ">
                <div className="flex w-full   min-h-[7.7rem] flex-col justify-center  mt-2  
                py-8 px-5 resize-none font-sans rounded-xl bg-[#646464] text-[#f2f2f2] 
                text-[1.4rem] outline-none">
                  <div className=" h-min text-center flex justify-center italic "> 
                  {theConfessionObject&&!loading ? (`"${theConfessionObject.theConfession}"`
                      ) : (
                    <div className=" w-min">
                    <Oval
                    height={27}
                    width={30}
                    color="#ededed"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#dedede"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                    />
                  </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" gap-[0.4rem]        border-green-500 flex flex-col justify-center pb-4 mb-24  max-[520px]:mb-28">
           
           
           
            <div className=" py-4 -mt-4    text-[1.25rem] max-[520px]:text-[1.2rem]  font-imfell text-justify flex justify-center">
              <button  onClick={()=>newConfession()} disabled={loading} className="
               disabled:cursor-not-allowed disabled:bg-[#949494] bg-[#EEEEEE] px-8 py-3 rounded-md  
               cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5] select-none 
               flex gap-3    border-red-500 
               
               ">
                <span className="   border-red-500 rounded-md" >
                  <FontAwesomeIcon icon={faBookOpen as IconProp} />
                </span>
                <span className="font-imfell    border-white ">
                  read another confession
                </span>
              </button>
            </div>

            <div className="  text-[#] pt-1     text-[1.25rem] max-[520px]:text-[1.2rem]   font-imfell text-justify flex justify-center">
             <Link href="write-confession"> <div className="bg-[#ffcf80] px-8 py-3 rounded-md  flex gap-3 cursor-pointer  hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69]                 border-red-500">
                <span className="             border-red-500 rounded-md">
                  <FontAwesomeIcon icon={faFeather as IconProp} />
                </span>
                <span className="font-imfell">write a confession</span>
              </div>
              </Link>
            </div>
          </div>




        </div>
        <div id="averagefeetenjoyer" className="      border-green-500  text-3xl px-12 flex gap-5 pt-4 h-16 max-[850px]:pt-5 max-[850px]:px-4 ">
          <Link href="https://github.com/awesamarth/" target="_blank"><span className=" text-[#695d4b] hover:cursor-pointer  hover:text-[#f0f6fc] transition-all"><FontAwesomeIcon icon={faGithub} /> </span></Link>
          <Link href="https://twitter.com/awesamarth_/" target="_blank"><span className= "text-[#695d4b] hover:cursor-pointer hover:text-[#1c9aef] transition-all"><FontAwesomeIcon icon={faTwitter} /></span></Link>
          </div>
      </div>
    </>
  );
}
