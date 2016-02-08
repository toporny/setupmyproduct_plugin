function parseEmail (str) {

  var aReturn = {};
  var re = /First Name\s?:?\s?(.*|\s).*/i;
  var first_name = str.match(re);
  if (Array.isArray(first_name)) {
    aReturn.id_first_name = first_name[1].trim();
  } else {
    aReturn['id_first_name'] = '???????????????';
  }
  var re = /last Name\s?:?\s?(.*)/i;
  var last_name = str.match(re);
  if (Array.isArray(last_name)) {
    aReturn['id_last_name'] = last_name[1].trim();
  } else {
    aReturn['id_last_name'] = '???????????????';
  }
  var re = /.*[Contact Email|Your Email|My Contact Email]:(.*)/;
  var contact_email = str.match(re);
  if (Array.isArray(contact_email)) {
    aReturn['id_contact_email'] = contact_email[1].trim();
  } else {
    aReturn['id_contact_email'] = '???????????????';
  }
  var re = /.*Customer Support Email.*:+\s*(.*@.*|http:\/\/.*)/;
  var support_email = str.match(re);
  if (Array.isArray(support_email)) {
    aReturn['id_customer_support_email'] = support_email[1].trim();
  } else {
    aReturn['id_customer_support_email'] = '???????????????';
  }
  var re = /.*PayPal Email:{0,1}\s*(.*@.*)/;
  var paypal_email = str.match(re);
  if (Array.isArray(paypal_email)) {
    aReturn['id_paypal_email'] = paypal_email[1].trim();
  } else {
    aReturn['id_paypal_email'] = '???????????????';
  }
  var re = /.*ClickBank ID:{0,1}\s*(.*)/;
  var clickbank_id = str.match(re);
  if (Array.isArray(clickbank_id)) {
    aReturn['id_clickbank_id'] = clickbank_id[1].trim();
  } else {
    aReturn['id_clickbank_id'] = '???????????????';
  }
  var re = /JVZoo[^0-9]*(\d*)/;
  var jvzoo_id = str.match(re);
  console.warn('jvzoo_id = ',jvzoo_id);
  if (Array.isArray(jvzoo_id)) {
    aReturn['id_jvzoo_id'] = jvzoo_id[1].trim();
  } else {
     aReturn['id_jvzoo_id'] = '???????????????';
  }
  var re = /.*FTP Server:{0,1}(.*)/;
  var ftp_host = str.match(re);
  if (Array.isArray(ftp_host)) {
    aReturn['id_ftp_host'] = ftp_host[1].trim();
  } else {
    aReturn['id_ftp_host'] = '???????????????';
  }
  var re = /.*FTP Username:{0,1}(.*)/;
  var ftp_username = str.match(re);
  if (Array.isArray(ftp_username)) {
    aReturn['id_ftp_username'] = ftp_username[1].trim();
  } else {
    aReturn['id_ftp_username'] = '???????????????';
  }
  var re = /.*FTP password:{0,1}(.*)/i;
  var ftp_password = str.match(re);
  if (Array.isArray(ftp_password)) {
    aReturn['id_ftp_password'] = ftp_password[1].trim();
  } else {
    aReturn['id_ftp_password'] = '???????????????';
  }
  var re = /.*URL to website\s{0,1}:{0,1}\s+(http:\/\/.*)\s*/i;
  var url_customers_website = str.match(re);
  if (Array.isArray(url_customers_website)) {
    aReturn['id_url_customers_website'] = url_customers_website[1].trim();
  } else {
    var re = /.*URL to website\s+:{0,1}\s+(www.*)\s*/i;
    var url_customers_website = str.match(re);
    if (Array.isArray(url_customers_website)) {
      aReturn['id_url_customers_website'] = url_customers_website[1].trim();
    }
    else {
      var re = /.*http\:\/\/www\..*(http.*)/;
      var url_customers_website = str.match(re);
      if (Array.isArray(url_customers_website)) {
        aReturn['id_url_customers_website'] = url_customers_website[1].trim();
      }
      else 
      aReturn['id_url_customers_website'] = '???????????????';
    }
  }
  return aReturn;
}



var mailToParse = '';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){

	if (message.action == 'set') {
		mailToParse = message.mailToParse;
		console.log('background side - set action');
		sendResponse({farewell:"copyID done = " + mailToParse});
	}

	if (message.action == 'get') {
  	var parsed = parseEmail(mailToParse);
		console.log('background side - parsed', parsed);
 		sendResponse({farewell: parsed});
	}  
  
});
