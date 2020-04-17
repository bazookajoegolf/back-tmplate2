

const mongoose = require('mongoose');
const _ = require('lodash');

const {Settings} = require('../models/adminsettings');

const NodeCache = require('node-cache');


export class Cache {


   constructor(ttlSec) {

      this.cache = new NodeCache({ stdTTL: ttlSec, checkperiod : ttlSeconds * 0.2, useClones : false});
   }

   get(key, storeFunction) {

      const value = this.cache.get(key);

      if (value) {
         return Promise.resolve(value);
      }

      return storeFunction().then((result) => {
         this.cache.set(key, result);
         return result;
      });
   }

   del(keys) {

      this.cache.del(keys);
   }

   flush() {
      this.cache.flushAll();
   }
} ;//cache







