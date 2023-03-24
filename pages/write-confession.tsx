import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { waitForTransaction } from '@wagmi/core'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Oval } from "react-loader-spinner";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from 'next/router';
import NoSsr from "./components/NoSsr";


import {
  useAccount,
  useContractRead,
  useContract,
  useNetwork,
  useSigner,
  useProvider,
} from "wagmi";
import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ADDRESS, ABI } from "../constants/constants";


export let txHash=""
export default function Home() {



  const router = useRouter()
  const provider = useProvider();
  const { data: signer } = useSigner();

  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { openConnectModal } = useConnectModal();
  const [theConfession, setTheConfession] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false)
  const contract = useContract({
    address: ADDRESS,
    abi: ABI,
    signerOrProvider: signer || provider,
  });

  const handleChange = (event: any) => {
    setTheConfession(event.target.value);
  };

  useEffect(() => {
    async function writer() {
      if (
        chain &&
        chain.id == 80001 &&
        address &&
        buttonClicked == true &&
        provider &&
        signer
      ) {
        console.log("chain id is" + chain.id);
        console.log(address);
        console.log(buttonClicked);
        console.log(provider);
        console.log(signer);
        if (contract) {
          console.log(contract);
          try {
            console.log("well?");
            setLoading(true)
            const confess = await contract.confess(theConfession.trim());
            console.log(confess)
            
            const temp =await waitForTransaction({hash:confess.hash}) 
            setButtonClicked(false);
            setLoading(false)
            router.push({
              pathname:"success",
              query:{txHash:confess.hash}
            })
          } catch (error) {
            console.error(error);
            setButtonClicked(false);
            setLoading(false)

          }
        }
      }
    }
    writer();
  }, [chain, address, buttonClicked, signer, provider]);

  const confess = async () => {
    setButtonClicked(true);
    if (openConnectModal != undefined) {
      openConnectModal();
    }
  };
  const Submit = (event: any) => {
    if (event.ctrlKey && event.keyCode == 13) {
      confess();
    }
  };

  const jokeRedirect = async()=>{
    document.location.href="https://www.youtube.com/watch?v=_R6M0vBxLac"
  }

  return (
    <>
      <Head>
        <title>write a confession</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  id="main_div" className="  border-2 border-orange-400 min-h-screen flex flex-col justify-between px-2">

        <div id="averageheadenjoyer" className="flex justify-end  border-2 border-white w-full h-14 ml-auto pt-1 pr-8 ">
          <div className="w-max">
            {/* <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            /> */}
            <Link href="read-confession">
              <div className="bg-[#EEEEEE] select-none px-6 py-2 rounded md cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5]">
                <span className=" h-12    border-2 border-red-500">
                  <FontAwesomeIcon icon={faBookOpen as IconProp} />
                </span>
                <span className="font-imfell text-lg ml-2">
                  read a confession
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="    min-h-[calc(100vh-7.5rem)] border-2 border-red-800 flex flex-col  justify-between px-20 ">
          <div className="flex  justify-center        border-2 border-blue-600 py-2 px-16">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              <Link href="/">etched on chain</Link>
            </div>
          </div>

          <div className="      border-2 border-green-500 flex-col  px-20 pt-8 pb-1 mt-4">
            <div className=" px-52">
              <div className="font-imfell italic text-[#C3B091]    text-2xl max-w-[39rem]  text-justify">
                {" "}
                write your confession here:
              </div>
              <div className="mt-2">
                <textarea
                  onKeyDown={Submit}
                  value={theConfession}
                  onChange={handleChange}
                  className=" placeholder:opacity-70 w-full h-64 mt-2 -mb-1 py-4 px-5 resize-none font-sans rounded-2xl bg-[#4B4B4B] text-[#FFFFFF] text-lg outline-none"
                  placeholder="don't you dare write anything about your healthy relationships with your friends/partner/parents, there is only so much cheesiness that I can handle"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <NoSsr>
          <div className="     border-2 border-green-500 flex justify-center -mt-1">
            <div className=" h-28 font-imfell  min-w-[40%] text-[#181818]  tracking-wide text-[1.35rem] rounded-md max-w-[39rem]  text-justify flex justify-center">
              {" "}
              <button
                onClick={theConfession==""?jokeRedirect:confess}
                className=" outline-none cursor-pointer  min-w-[40%]   hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69] self-start py-3 px-2 bg-[#FFCF80] rounded-md"
              >
                <div className=" w-full flex justify-center">
                {isConnecting|| loading ? (
                  <Oval
                    height={27}
                    width={30}
                    color="#181818"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#080808"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "confess"
                )}
                </div>
              </button>
            </div>
          </div>
          </NoSsr>


        </div>
        <div id="averagefeetenjoyer" className="     border-2 border-green-500  text-3xl px-12 flex gap-5 pt-4 h-16">
          <Link href="https://github.com/awesamarth/" target="_blank"><span className=" text-[#695d4b] hover:cursor-pointer  hover:text-[#f0f6fc] transition-all"><FontAwesomeIcon icon={faGithub} /> </span></Link>
          <Link href="https://twitter.com/awesamarth_/" target="_blank"><span className= "text-[#695d4b] hover:cursor-pointer hover:text-[#1c9aef] transition-all"><FontAwesomeIcon icon={faTwitter} /></span></Link>
          </div>
      </div>
    </>
  );
}
