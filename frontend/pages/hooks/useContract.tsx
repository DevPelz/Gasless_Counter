import { useContract } from "@thirdweb-dev/react";
import {CA} from "../../pages/address";
import {abi} from "../../pages/abi";

const useget = useContract(
  CA,
  abi,
);
export default useget;