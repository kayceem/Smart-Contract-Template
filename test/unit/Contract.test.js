const { assert, expect } = require("chai")
const { networkConfig, developmentChains } = require("../../hardhat-helper.config")
const { deployments, getNamedAccounts, network, ethers } = require("hardhat")
const chainId = network.config.chainId

!developmentChains.includes(chainId)
    ? describe.skip
    : describe("$$Contract Unit Tests", function () {
          let deployer, contract

          beforeEach(async () => {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              contract = await ethers.getContract("$$Contract", deployer)
          })

          describe("constructor", function () {
              it("initializes contract correctly", async () => {})
          })

          describe("function", function () {
              it("does something", async () => {})
          })
      })
