require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember snake good clock flock tonight'; 
let testAccounts = [
"0x972a1aa7bedc2946a98ef7eafd018c277093d3c4b0b4e32d363cf19c79de94bc",
"0x071db26a53a0bdf4ca860e3f7b27b6f6984a8d822537ab39b720d4c296f63d52",
"0xd10dd6516703e03a35f838f5c9b5706991c9bb1270c665383e3989dd3fc6a4d6",
"0xf89fe80ed29df974b3bae49d06c755f92dee140e4503a0f6101ab37325ca043d",
"0xf14797994b32075b80afde4722fb62287dc356c9da0238f0be9c064604220a20",
"0xb679a64ef64691409b27d434a65472279e9f85bb96e77287911155f4948ca56b",
"0x8406e8ba469c5e5308e1ab889943b92a57555b738997d840657f9d84ed778961",
"0xda9e30807474586ec13cf819ece710ef4905350bc30e813b045f18a0ff967f0f",
"0x64a16b10d5cce3530c87086ee590c159948cc331238c3c4cf3b9b279b0873c2d",
"0xae759d94b4ead9d4fdf9e5430f9d8ebf0cb50e9f4a90cd6e563b40ee50e338b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
