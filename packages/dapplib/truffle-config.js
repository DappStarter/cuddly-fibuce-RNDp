require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rebel pitch exchange gloom civil army giant'; 
let testAccounts = [
"0x5ebce190220945510a029293bdd23868ff9b20548ce19ae4325292515474abfc",
"0x6eebc5b7b0950015349782415d9354906082c26c0d210f4d85e2b1e7621d46d6",
"0x90e747715332d3d23ad8086a48082e2c60040a0ca9a2134ed20ec1bc93087e35",
"0xac2daa5cb286bd3d0c08ae66a241b3d41460ba9baa65e6c51ffbc17ca640f7d4",
"0x75f31293faee64231a6023169b5edaff76cf3164bce27ec0690d9dc4b1411f7e",
"0xba399aa32ea4dfb39c2de3b49dddde3a37c5e562ae7709224277bb9fbeb720c5",
"0xdab9d9b8f6c2e722d17e06395cf22b70ae6b650cf06fde7d52f3805ff2fd5827",
"0x0103c3e26dd12105ea09a54133f9283dfa4d3729436a420612af31826c194525",
"0xf138a6e1b51021961aefd6b1da2e5a23c6819e93690a3108cee102785faf0372",
"0x15c18f8af40879136069dc2866b40a47ba0358990ce22372c5b70afb9292befd"
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
            version: '^0.8.0'
        }
    }
};

