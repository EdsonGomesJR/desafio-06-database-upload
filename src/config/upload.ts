// armazena as config de upload de imagens ou arquivos
import multer from 'multer'; // => yarn add -D @types/multer para corrigir o erro de import
import path from 'path';
import crypto from 'crypto';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp'); // caminho para salvar

export default {
  // esse directory iremos pegar no updateUserAvatarService
  directory: tmpFolder,
  // por enquanto salvaremos os arquivos dentro da estrutura do app
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      // gerar arquivos com nomes unicos
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
