const { assert, expect } = require("chai")
const { networkConfig, developmentChains } = require("../../hardhat-helper.config")
const { getNamedAccounts, network, ethers } = require("hardhat")
const chainId = network.config.chainId

developmentChains.includes(chainId)
    ? describe.skip
    : describe("$$Contract Staging Tests", function () {
          let deployer, contract

          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              contract = await ethers.getContract("$$Contract", deployer)
          })

          describe("function", function () {
              it("does something", async () => {})
          })
      })
