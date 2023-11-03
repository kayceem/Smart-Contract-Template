const { network } = require("hardhat")
const { verify } = require("../utils/verifyContract.js")
const { developmentChains, networkConfig } = require("../hardhat-helper.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { log, deploy } = deployments
    const chainId = network.config.chainId

    if (developmentChains.includes(chainId)) {
    } else {
    }
    const args = []
    log("Deploying $$Contract contract...")
    const contract = await deploy("$$Contract", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log("$$Contract contract deployed.")
    log("-------------------------------------------------------")
    log("Verifying $$Contract contract...")
    !developmentChains.includes(chainId) &&
        process.env.ETHERSCAN_API_KEY &&
        (await verify(contract.address, args))
    log("$$Contract contract verified.")
    log("------------------------------------------------------")
}
module.exports.tags = ["all", "$$Contract"]
