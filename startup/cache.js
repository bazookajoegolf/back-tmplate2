

//const mongoose = require('mongoose');
//const _ = require('lodash');

//const {Settings} = require('../models/adminsettings');

const NodeCache = require('node-cache');


module.exports  = class MyCache {

   constructor(ttlSec) {

     this.MyCache = new NodeCache({ stdTTL: ttlSec, checkperiod : ttlSeconds * 0.2, useClones : false});
   }

   get(key, storeFunction) {

      const value = this.cache.get(key);

      if (value) {
         return Promise.resolve(value);
      }

      return storeFunction().then((result) => {
         this.MyCache.set(key, result);
         return result;
      });
   }
   
   list() {
	   
	  return  this.MyCache.keys();
   }

   del(keys) {

      this.MyCache.del(keys);
   }

   flush() {
      this.MyCache.flushAll();
   }

} 