import {  ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import {abi} from "../pages/abi";
import {CA} from "../pages/address";
import { useState } from "react";

const Home: NextPage = () => {
   const { contract } = useContract(CA);
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
        <Web3Button contractAddress = {CA} contractAbi={abi} action={(contract) => contract.call("setNumber", [5])}>setNumber</Web3Button>

        <Web3Button contractAddress = {CA} action={(contract) => contract.call("increment")}>increment</Web3Button>

        <Web3Button contractAddress = {CA} action={(contract) => contract.call("decrement")}>decrement</Web3Button>

        <button className={styles.button} onClick={getAddr}>show Last</button>

        </div>




        
      </div>
    </main>
  );
};

export default Home;
