import CryptoJS from 'crypto-js'

export function encryptWithCryptoJS(encodedMessage: string, plainText: string, keySize = 3): string {
  const key = CryptoJS.enc.Utf8.parse(encodedMessage);
  const iv1 = CryptoJS.enc.Utf8.parse(encodedMessage);
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
      keySize,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });

  return encrypted + "";
}

export function decryptionWithCryptoJS(encodedMessage: string, cipher: string, keySize = 3): string {
  const key = CryptoJS.enc.Utf8.parse(encodedMessage);
  const iv1 = CryptoJS.enc.Utf8.parse(encodedMessage);
  const plainText = CryptoJS.AES.decrypt(cipher, key, {
      keySize,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });

  return plainText.toString(CryptoJS.enc.Utf8);
}