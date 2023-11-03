const { network } = require("hardhat")
const { developmentChains } = require("../hardhat-helper.config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts()
    const { log, deploy } = deployments
    const chainId = network.config.chainId
    const args = []
    if (developmentChains.includes(chainId)) {
        log("Deploying Mocks...")
        await deploy("$$Mock", {
            from: deployer,
            args: args,
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
        })
        log("Mocks deployed.")
        log("-------------------------------------------------------")
    } else {
        log("Skipping Mocks.")
        log("------------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
