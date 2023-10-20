import {  ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {abi} from "../constants/abi";
import {CA} from "../constants/address";
import { useState } from "react";

const Home: NextPage = () => {
   const { contract } = useContract(CA, abi);
   const [lastAddress, setLastAddress] = useState("")
   const { data, isLoading, error } = useContractRead(
     contract,
     "showAddress",
     [],
   );

  // Read contract with arguments

  const getAddr = () => {
    if (error) {
      console.error("failed to read contract", error);
    }
    console.log(data)
    setLastAddress(data)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.connect}>
            <ConnectWallet
             switchToActiveChain={true}
              dropdownPosition={{
                side: "bottom",
                align: "center",
              
              }}
            />
          </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
                gasless counter.
            </span>
          </h1>

          <span className={styles.last}>Last Caller: {lastAddress}</span>

          
        </div>

        <div className={styles.functions}>
        <Web3Button onSuccess={() => alert("Number set succesfully!")} onError={() => alert("Something went wrong!")} contractAddress = {CA} contractAbi={abi} action={(contract) => contract.call("setNumber", [5]) }>setNumber</Web3Button>

        <Web3Button onSuccess={() => alert("Number increased by one!")}onError={() => alert("Something went wrong!")} contractAddress = {CA} action={(contract) => contract.call("increment")}>increment</Web3Button>

        <Web3Button onSuccess={() => alert("Number decreased by one!")}onError={() => alert("Something went wrong!")} contractAddress = {CA} action={(contract) => contract.call("decrement")}>decrement</Web3Button>
             

             <button className={styles.button} onClick={getAddr}>reveal last caller</button>
           

        </div>




        
      </div>
    </main>
  );
};

export default Home;
