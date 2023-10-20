import { useContract } from "@thirdweb-dev/react";
import {CA} from "../../pages/address";
import {abi} from "../../pages/abi";

const { contract, isLoading, error } = useContract(
  CA,
//   {abi},
);