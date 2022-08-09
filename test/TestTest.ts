import chai from 'chai'
import { solidity } from 'ethereum-waffle'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from 'hardhat'

import { Test } from '../typechain'
import { deployTest } from './utils'

chai.use(solidity)
const { expect } = chai


describe('Waffle-Muffle', () => {
    let defaultAccount: SignerWithAddress
    let owner: SignerWithAddress
    let test: Test
    const myError = 'MyCustomError'

    before(async () => {
        [owner, defaultAccount] = await ethers.getSigners()

        test = await deployTest({ deployer: owner })
    })

    describe('Waffle', () => {
        it('...will bark when the argument exceeds JavaScript\'s max integer', async () => {
            await expect(test.doRevertWithMyCustomError())
                .to.be.revertedWith(myError).withArgs(ethers.constants.WeiPerEther)
        })
    })
})
