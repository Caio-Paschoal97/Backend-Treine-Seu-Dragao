const mongoose = require('mongoose');

const treineSeuDragaoEntryschema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    tipo: { type: String, required: true, trim: true},
    instrucao: { type: String, required: true, trim: true },
    dataNascimento: { type: Date, required: true },
    metros: { type: Number , required: true}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('TreineSeuDragaoEntry', treineSeuDragaoEntryschema);
