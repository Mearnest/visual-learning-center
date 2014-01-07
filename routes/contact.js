/*
 * Handle Contact Page.
 */
 
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: "mark@treesforlife.org",
		pass: "corkwood1"
	}
});

// setup e-mail data with unicode symbols
var mailOptions = {
		from: "Mark Earnest ✔ <mark@treesforlife.org>", // sender address
		to: "", // list of receivers
		subject: "Stick Poser Project ✔", // Subject line
		text: "", // plaintext body
		html: "" // html body
}

//	Routes
exports.view = function(poser) {
	return function(req, res) {
		res.render('contact', {
			title: 'Contact Us',
			poserlist: poser.getPoses(),
		});
	}
};

exports.sent = function(req, res) {
	res.render('contact_sent', { title: 'Conatct Us Confirmation' });
};

exports.email =	function(req, res) {
	// send mail with defined transport object
	var email = req.body.email;
	var message = req.body.message;
	var stickpose = req.body.stickpose;
	var base64Data = stickpose.replace(/^data:image\/png;base64,/,"");

	require("fs").writeFile("_tmp/stickpose.png", base64Data, 'base64', function(err) {
	  console.log(err);
	});
	
	mailOptions["to"] = email;
	mailOptions["text"] = message;
	mailOptions["html"] = message + '<p>' + stickpose + '</p><p><img alt="Embedded Image" height="128" width="128" src="' + stickpose + '"></p>';
	
	smtpTransport.sendMail(mailOptions, function(error, response) {
		if (error) {
			console.log(error);
			res.redirect('/contact');
		} 
		else {
			console.log("Message sent: " + response.message);
			res.redirect('/contact/sent');
		}

		// if you don't want to use this transport object anymore, uncomment following line
		smtpTransport.close(); // shut down the connection pool, no more messages
	});
};


