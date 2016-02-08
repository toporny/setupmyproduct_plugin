chrome.runtime.sendMessage({action:'get'}, function(response) {

  var frame = document.getElementsByTagName('iframe')[0];

  if (typeof frame != 'undefined') {
  	frame.contentWindow.postMessage(response.farewell, '*');

  } else {
	document.getElementById("id_first_name").value = response.farewell.id_first_name;
	document.getElementById("id_last_name").value = response.farewell.id_last_name;
	document.getElementById("id_contact_email").value = response.farewell.id_contact_email;
	document.getElementById("id_customer_support_email").value = response.farewell.id_customer_support_email;
	document.getElementById("id_paypal_email").value = response.farewell.id_paypal_email;
	document.getElementById("id_clickbank_id").value = response.farewell.id_clickbank_id;
	document.getElementById("id_jvzoo_id").value = response.farewell.id_jvzoo_id;
	document.getElementById("id_ftp_host").value = response.farewell.id_ftp_host;
	document.getElementById("id_ftp_username").value = response.farewell.id_ftp_username;
	document.getElementById("id_ftp_password").value = response.farewell.id_ftp_password;
	document.getElementById("id_url_customers_website").value = response.farewell.id_url_customers_website;

  }

  
});
