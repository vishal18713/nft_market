const { expect } = require("chai");

describe("NFTMarketplace", function () {
  let deployer, addr1, addr2, nft, marketplace;
  let feePercentage = 1;
  let URI = "sample uri";
  beforeEach(async function () {
    //get contract factory
    const NFT = await ethers.getContractFactory("NFT");
    const Marketplace = await ethers.getContractFactory("Marketplace");
    //get signers
    [deployer, addr1, addr2] = await ethers.getSigners();
    //Deploy contracts
    nft = await NFT.deploy();
    marketplace = await Marketplace.deploy(feePercentage);
  });
  describe("Deployment", function () {
    it("should track name and symbol of the nft collection", async function () {
      expect(await nft.name()).to.equal("v NFT");
      expect(await nft.symbol()).to.equal("VNFT");
    });
    it("should track the fee percentage", async function () {
      expect(await marketplace.feeAccount()).to.equal(deployer.address);
      expect(await marketplace.feePercentage()).to.equal(feePercentage);
    });
  });

  describe("Minting NFT's", function () {
    it("should track each minted nft", async function () {
        //addr1 mints an nft
        await nft.connect(addr1).mint(URI);
        expect(await nft.totalSupply()).to.equal(1);
        expect(await nft.balanceOf(addr1.address)).to.equal(1);
        expect(await nft.tokenURI(1)).to.equal(URI); 

        await nft.connect(addr2).mint(URI);
        expect(await nft.totalSupply()).to.equal(2);
        expect(await nft.balanceOf(addr2.address)).to.equal(1);
        expect(await nft.tokenURI(1)).to.equal(URI); 
    });

  });
});
