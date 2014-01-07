/*
 * GET basic routes with simple logic.
 */

// Return a function for getting the stick poser collection and rendering the proper jade template for the given route.
function getPoserCollection(db, template, pageTitle) {
	return function(req, res) {
		var collection = db.get('stickPoserCollection');
		
		collection.find({}, {}, function(e, docs) {
			docs.sort(function(a, b) {
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			});
			
			res.render(template, {
				title: pageTitle,
				poserlist: docs,
			});
		});
	};
}
 
 // How to abstract same functionality from index, library and database dump?
exports.index = function(poser) {
	return function(req, res) {
		res.render('index', {
			title: 'Stick Poser Project',
			poserlist: poser.getPoses(),
		});
	}
};

exports.database = function(poser) {
	return function(req, res) {
		res.render('database', {
			title: 'Stick Poser Database',
			poserlist: poser.getPoses(),
			dbType: poser.getDbType(),
		});
	}
};

exports.guide = function(req, res) {
	res.render('guide', { title: 'Guide' });
};

exports.editor = function(req, res) {
	res.render('editor', { title: 'Editor' });
};

// Goes into an iframe in the editor page
exports.svgEditor = function(req, res) {
	res.render('svg-edit', { title: 'SVG Editor' });
};

exports.about = function(req, res) {
	res.render('about', { title: 'About' });
};

exports.library = function(poser) {
	return function(req, res) {
		res.render('library', {
			title: 'Stick Poser Library',
			poserlist: poser.getPoses(),
		});
	}
};

exports.addToLibrary = function(poser) {
	return function(req, res) {
		var stickFigure = req.body.stickFigure;

		// Submit to the poser
		collection.insert(stickFigure, function (err, doc) {
			if(err) {
				// If it failed, return error
				res.send({
					error: true,
					message: "There was a problem adding the information to the database.",
				});
			}
			else {
				// If it worked, return success message and updated stick figure list
				collection = poser.get('stickPoserCollection');
				collection.find({},{},function(e,docs){
					res.send({
						error: false,
						message: "Your image has been added to the library.",
						poserList: docs
					});
				});
			}
		});
	}
};


