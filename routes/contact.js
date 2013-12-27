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
exports.view = function(req, res) {
	res.render('contact', { title: 'Conatct Us' });
};

exports.sent = function(req, res) {
	res.render('contact_sent', { title: 'Conatct Us Confirmation' });
};

exports.email =	function(req, res) {
	// send mail with defined transport object
	var email = req.body.email;
	var message = req.body.message;
	
	mailOptions["to"] = email;
	mailOptions["text"] = message;
	mailOptions["html"] = message;
	
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


