const companyList = ["0xEssential","2Cents","3ID","Actyx","Afterparty","Agoric","AlphaBack","Andsub","Anjuna","Anytype","Artizen",
"Astrofitters","Atomica","Atoms.org","Atreus","Audius","Autonomy Network","Bacalhau","Banyan","Bedrock","BertyTechnologies","Bifrost","BlastGG",
"BlockScience","Boto","Braneframe","Browsers & Platforms","Builder’s Funnel","Buildspace","Bunkyr","Canvas","Canza","CCP Games","Celestia",
"Celestia Labs","Ceramic 3Box","Chaingrep","ChainSafe","Chestr","Chingari","CID Gravity","Clam Island","Clockwork Labs","CoinFeeds","CoinList",
"Coinshift","Compute over Data","Concept Art House","ConsensusLab","ConsenSys","ConvoSpace","Crcle","Cryptio","CryptoEconLab","CryptoNet","Cryptosat",
"Cubist","Cudo Ventures","Curio","Currentsfm","CyberConnect","DataUnion","Decrypt","DeSci Foundation","DeSci Labs","Developers & Collabs","DoinGud",
"double jump","Drand","Ecko","Ecosystem","Encultured AI","Endowl","Enlightra","Ephere Football","Eqty Lab","Exorde Labs","Experiment Foundation",
"Fayre Labs","FFDW","FilDev","Filebase","Filecoin Foundation","Filecoin Green","Filecoin Retrieval Markets","Filecoin Saturn","FileDrive Labs",
"Filmine","FilSwan","Filta","Fimio","Finnt","Fission","Flame","Fleek","Fleming Protocol","Fluence Labs","Fractio","Frame","Functionland","FVM",
"Gitcoin","GitPOAP","Glif Infinite Scroll","Glitter Protocol","Golden","Goldsky","Hedgey Finance","Hex Trust","Holaplex","Huddle","Huddln",
"HyperDapp","Inflow","Ingonyama","IP Stewards","IPFS Stewards","Kamu Data","KEN Labs","KLOOV","Koii Network","Kosen Labs","Kotal","Launchpad",
"Lava Network","libp2p Stewards","Lighthouse","Lit Protocol","Little Bear Labs","Livepeer","Lotus","Lurk","Magna","Mask Network","Matrix",
"Matters Lab","Medium","Memex.Garden","MetaPals","Metaverse AI","Midpoint Labs","Mint State Labs","MintGate","Molecule","Mosaia","Motley Labs",
"Murmuration","Myel","Mysterious","NetOps","Network Goods","Network Growth","NFT.Storage","Nftfy","NFTPort","nGram.com","Nifty Royale",
"Notifi Network","number zero","Numbers","OKcontract","OP Games","OpenSea (Dharma Labs)","Orange Comet","Origami","Outercore","Ownership Labs",
"Paras","Parcel","Peeranha","Photure Inc","Pinata","PL Accelerators","PL EngRes","PL Ventures","Polybase","Polyphene","Polywrap","PowerLoom",
"Privy","Probe Lab","Prominence Games","Props","Protocol Labs","Puma Browser","Qubit9","Radix","Rarify","Respct","Rodeo Money, Inc.","Science",
"Seal Storage Technology","Secured Finance","Sentinel","SharpShark","SINSO","Skiff","SkillWallet - Aut Labs","Slate","Slik Photos","SmartFunds",
"Solaris","SourceCred","Spaceport","Spexigon","Spice AI","Spruce","Starboard Ventures","Starfleet","StarkWare Industries Ltd.","Starling",
"Style Protocol","Subconscious, Inc","Superdao","Supranational","Syndicate","Tachyon","Talent Protocol","Tamago Labs","Tephra Labs","Textile",
"The AI Responsibility Lab","The MoNA","Third Storage","thirdweb","Token","TransCrypts Inc.","TrustToken (now Archblock)","Unbanx",
"Unstoppable Systems","Valist","Venus","Video","Warpforge","WeatherXM","Web3 Collabs","web3.storage","Webrecorder","WorkDAO","Xone","Yatima",
"Zama", "zondax", "Polychain Capital","Zondax","Parity","Livepeer","Matrix","Soramitsu","Open Work Labs","Chainsafe","ETHGlobal",
"The Ethereum Foundation","ConsenSys","Infura","PegaSys","MetaMask","Codefi","Truffle","Airswap","Gitcoin","Tachyon","Textile","Fleek",
"Web3 Foundation","Polkadot","Pinata","Aragon","Igalia","Starboard","FilMine","Tachyon","Outlier Ventures","LongHash","Opera","Brave",
"Caravel Partners, A BPM Technology Solutions Company (BPM LLP)","DeSci Labs"];

const GIPHY_API_KEY = 'rWnCyayvICBXDT0wgmGj8jsWo8GqNZUy';
const GIPHY_ENDPOINT = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=cat`;

// Make sure jQuery and jQuery UI are loaded
if (!window.jQuery || !window.jQuery.ui) {
  console.error('jQuery and jQuery UI are required for autocomplete.');
}

$(document).ready(function() {
  // Get the input element and add autocomplete
  const companyInput = $('#company');
  companyInput.autocomplete({
    source: companyList,
    select: function(event, ui) {
      checkCompany(ui.item.value);
    }
  });

  // Get the button element and add an event listener
  const checkBtn = document.getElementById('checkBtn');
  checkBtn.addEventListener('click', function() {
    checkCompany(companyInput.val());
  });

  // Get the div element where you want to display the gif
  const gifContainer = document.getElementById('gif-container');
  fetch(GIPHY_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      const gifUrl = data.data.images.original.url;
      // Create an img element
      const gifImg = document.createElement('img');
      gifImg.src = gifUrl;
      gifContainer.appendChild(gifImg);
    })
    .catch(error => console.error(error));
});

function checkCompany(companyInput) {
  const lowercaseInput = companyInput.toLowerCase();
  const lowercaseCompanyList = companyList.map(company => company.toLowerCase());
  if (lowercaseCompanyList.includes(lowercaseInput)) {
    document.getElementById('result').innerHTML = 'The company is in the list';
  } else {
    document.getElementById('result').innerHTML = 'The company is not in the list';
  }
}