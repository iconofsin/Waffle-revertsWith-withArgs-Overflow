import { ethers } from "hardhat";
import { Test, Test__factory } from '../typechain'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { providers, Contract, ContractFactory, BigNumber } from 'ethers'


interface TestDeployProps {
    deployer: SignerWithAddress | providers.JsonRpcSigner;
}

export const deployTest =
    async (deployProps: TestDeployProps): Promise<Test> => {
        const testFactory =
            (await ethers.getContractFactory('Test', deployProps.deployer)) as Test__factory

        const uf = await testFactory.deploy()

        await uf.deployed()

        return uf
    }
