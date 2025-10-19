import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

// const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const { deployer } = await hre.getNamedAccounts();
//   const { deploy } = hre.deployments;

//   const deployedFHECounter = await deploy("FHECounter", {
//     from: deployer,
//     log: true,
//   });

//   console.log(`FHECounter contract: `, deployedFHECounter.address);
// };
// export default func;
// func.id = "deploy_fheCounter"; // id required to prevent reexecution
// func.tags = ["FHECounter"];


// // ignition/modules/ConfidentialERC20.ts
// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const ConfidentialERC20Module = buildModule("ConfidentialERC20Module", (m) => {
//   // ---- Params (override at CLI) ----
//   const name     = m.getParameter("name", "ConfToken");
//   const symbol   = m.getParameter("symbol", "cTOK");
//   const decimals = m.getParameter("decimals", 6); // choose 6 or 9 per your design

//   // decimals=6, 2,000 tokens => 2_000_000_000 raw units
//   const initialMintRaw = m.getParameter<bigint>("initialMintRaw", 0n);

//   // Deployer
//   const deployer = m.getAccount(0);

//   // ---- Deploy (constructor: (string name, string symbol, uint8 decimals)) ----
//   const token = m.contract(
//     "ConfidentialERC20",
//     [name, symbol, decimals],
//     { from: deployer }
//   );


//   m.call(token, "mint", [deployer, initialMintRaw], { from: deployer });

//   return { token };
// });

// export default ConfidentialERC20Module;



const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedConfidentialERC20 = await deploy("ConfidentialERC20", {
    from: deployer,
    args: ["ConfToken", "cTOK", 6],
    log: true,
  });

  console.log(`ConfidentialERC20 contract: `, deployedConfidentialERC20.address);
};
export default func;
func.id = "deploy_confidentialERC20"; // id required to prevent reexecution
func.tags = ["ConfidentialERC20"];