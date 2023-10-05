const sm2 = require('sm-crypto').sm2
const CryptoJS = require("crypto-js");

const generateKey = () => { 
  return CryptoJS.MD5(Math.random().toString(36).slice(-8)).toString()
}

const data = generateKey();
const publicKey = '04c5b05a5e0e9c3d4bb9cfe6e0bfaf06a8ab0a55c5e306654c5b80a6cf7e936cdd0baea46c7818c3fd2b0feed231489f5439724a2eccd8b43caa3e62c30b3d5e4d';


let encryptData = sm2.doEncrypt(data, publicKey, 1)
console.log(encryptData)


let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode)