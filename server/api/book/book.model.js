'use strict';

import mongoose from 'mongoose';

var BookSchema = new mongoose.Schema({
  
  title: String,
  publisher: String,
  author: String,
  date_added: { type: Date, default: Date.now },
  count: Number,
  active: Boolean
});

export default mongoose.model('Book', BookSchema);
