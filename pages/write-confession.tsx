import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { waitForTransaction } from "@wagmi/core";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Oval } from "react-loader-spinner";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
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

export let txHash = "";
export default function Home() {
  const router = useRouter();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { openConnectModal } = useConnectModal();
  const [theConfession, setTheConfession] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false)
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
        // console.log("chain id is" + chain.id);
        // console.log(address);
        // console.log(buttonClicked);
        // console.log(provider);
        // console.log(signer);
        if (contract) {
          // console.log(contract);
          try {
            // console.log("well?");
            setLoading(true);
            const confess = await contract.confess(theConfession.trim());
            // console.log(confess);

            const temp = await waitForTransaction({ hash: confess.hash });
            setButtonClicked(false);
            setLoading(false);
            router.push({
              pathname: "success",
              query: { txHash: confess.hash },
            });
          } catch (error) {
            console.error(error);
            setButtonClicked(false);
            setLoading(false);
          }
        }
      }
    }
    writer();
  }, [chain, address, buttonClicked, signer, provider]);

  useEffect(()=>{
    console.log("\nLooking under the hood eh? I assume you're a developer/designer. Here is the link to the GitHub repo of this project ;)\nhttps://github.com/awesamarth/etched-on-chain")
    setReady(true)
  },[])

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

  const jokeRedirect = async () => {
    document.location.href = "https://www.youtube.com/watch?v=_R6M0vBxLac?autoplay=1";
  };

  return (
    <>
      <Head>
        <title>write a confession</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="main_div"
        className="    border-orange-400 min-h-screen flex flex-col justify-between px-2"
      >
        <div
          id="averageheadenjoyer"
          className=" max-[520px]:h-10 flex justify-end              border-white w-full h-14 ml-auto pt-4 pr-8 "
        >
          <div className="w-max max-[900px]:hidden transition-all ">

            <Link href="read-confession">
              <div className="bg-[#EEEEEE] select-none px-6 py-2 rounded md cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5]">
                <span className=" h-12        border-red-500">
                  <FontAwesomeIcon icon={faBookOpen as IconProp} />
                </span>
                <span className="font-imfell text-lg ml-2">
                  read a confession
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="    min-h-[calc(100vh-7.5rem)] max-[520px]:min-h-[calc(100vh-6.5rem)]        border-red-800 flex flex-col  justify-between px-20 max-[850px]:px-5 max-[520px]:px-3 ">
          
          <div className="flex  justify-center           border-blue-600 py-2 mx-10 max-[520px]:mx-0  ">
            <div className="  text-5xl font-cardo tracking-wide text-[#ffffff]  h-min l max-[520px]:text-[2.5rem] max-[360px]:text-[2rem] ">
              <Link href="/">etched on chain</Link>
            </div>
          </div>

          <div
            className="    border-green-500 flex flex-col items-center justify-center  pt-8 pb-1 mt-4 mx-52
          max-[1200px]:mx-20 max-[670px]:mx-16 max-[520px]:mx-4 max-[400px]:mx-0
          "
          >
            <div className="px-2  flex flex-col w-full max-[520px]:px-0  ">
              <div className="">
                <div className="font-imfell italic text-[#C3B091]     text-2xl max-[350px]:text-xl  text-justify">
                  {" "}
                  write your confession here:
                </div>
              </div>
              <div className="mt-2">
                <textarea
                  onKeyDown={Submit}
                  value={theConfession}
                  onChange={handleChange}
                  className=" placeholder:opacity-70  h-64 mt-2 -mb-1 py-4 px-5 resize-none font-sans rounded-2xl 
                  bg-[#4B4B4B] w-full text-[#FFFFFF] text-lg outline-none  max-[350px]:text-base"
                  placeholder="don't you dare write anything about your healthy relationships with your friends/partner/parents, there is only so much cheesiness that I can handle"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          {



            ready?

            (<div className="  mb-4       border-green-500 flex  justify-center -mt-4">


              <div className=" flex-col items-center font-imfell gap-7   min-w-[40%] text-[#181818] 
               tracking-wide text-[1.35rem] rounded-md max-w-[39rem] 
                text-justify flex justify-center">


              <div className="w-full  flex justify-center">
                <button
                  onClick={theConfession == "" ? jokeRedirect : confess}
                  className=" outline-none cursor-pointer  min-w-[12rem]  
                   hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69] self-start py-3 px-2 max-[520px]:py-3 
                   bg-[#FFCF80] rounded-md max-[490px]:text-lg disabled:cursor-not-allowed disabled:bg-[#a08252]"
                   disabled={isConnecting||loading}
                >
                  <div className=" w-full flex justify-center">
                    { isConnecting || loading ? (
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


                <div className="w-max  transition-all min-[900px]:hidden  ">
                  <Link href="read-confession">
                    <div className="bg-[#EEEEEE] max-[520px]:py-2 text-lg
                    select-none rounded md cursor-pointer py-3 px-5 hover:bg-[#d2d2d2] 
                    transition-all duration-200 active:bg-[#c5c5c5]">
                      <span className=" h-12        border-red-500">
                        <FontAwesomeIcon icon={faBookOpen as IconProp} />
                      </span>
                      <span className="  font-imfell  ml-2">
                        read a confession
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>):""
}
        </div>

        <div
          id="averagefeetenjoyer"
          className="       border-green-500  text-3xl px-12 flex gap-5 pt-4 h-16 max-[850px]:pt-5 max-[850px]:px-4 "
        >
          <Link href="https://github.com/awesamarth/" target="_blank">
            <span className=" text-[#695d4b] hover:cursor-pointer  hover:text-[#f0f6fc] transition-all">
              <FontAwesomeIcon icon={faGithub} />{" "}
            </span>
          </Link>
          <Link href="https://twitter.com/awesamarth_/" target="_blank">
            <span className="text-[#695d4b] hover:cursor-pointer hover:text-[#1c9aef] transition-all">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
