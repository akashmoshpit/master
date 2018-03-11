/**
 * AssociatesDetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		 first_name : 
  	           {
					   	type: "String",
					   	required : "true"
			   },
    	 last_name : 
  	           {
					   	type: "String"
			   },
		 email : 
  	           {
					   	type: "email",
					   	required : "true"
			   },	
	     mobile_number: 
  	           {
					   	type: "int",
					   	required : "true"
			   },	
		 company_display_name : 
  	           {
					   	type: "String"
			   },
		company_name	 : 
  	           {
					   	type: "String"
			   },
    	 aadhar_number : 
  	           {
					   	type: "String",
					   	required : "true"
			   },
		 role : 
  	           {
					   	type: "String",
					   	required : "true"
			   },	
	     password: 
  	           {
					   	type: "String",
					   	required : "true"
			   }
  }
};

