var mongo = require('mongodb');
var db = require('monk')('mongodb://St1k3dMan:w90dC0rk3d@ds061228.mongolab.com:61228/heroku_app20791518'); 
var Pose = [];  // Filled out below

var Poser = function() {
	var collection = db.get('stickPoserCollection');
	var fileContents = Pose;
	
	// Default is that the mongo db is not available, so use flat file contents below.
	var isFile = true;
	var dbType = "Flat File";
	var poses = fileContents;
	
	// If the database doesn't have a stick poser collection, then initialize one with file contents.
	function dbInitCollection() {
		for (var i = 0; i < fileContents.length; i++) {
			console.log("inserting " + fileContents[i].name);
			var pose = fileContents[i];
			
			collection.insert(pose, function(err) {
				if (err) {
					console.log(err.message);
				}
				else {
					console.log(pose);
				}
			});
		}
	}
	
	// Find Stick Poses, either from the database or the file contents.
	function find() {
		collection.find({}, function(err, docs) {
			if (err) {
				console.log(err.message);
				isFile = true;
				dbType = "Flat File";
				fileContents = Pose;
			}
			else {
				// Mongo db is available, so use it's stick poser collection.
				isFile = false;
				dbType = "Mongo";
				
				if (docs.length === 0) {
					dbInitCollection();
				}
				else {
					docs.sort(function(a, b) {
						if(a.name < b.name) return -1;
						if(a.name > b.name) return 1;
						return 0;
					});
					
					poses = docs;
				}
			}
		});
	}
	
	this.getDbType = function() {
		return dbType;
	}
	
	this.getPoses = function() {
		find();
		return poses;
	}
	
	this.savePose = function(req, res) {
		var stickFigure = req.body.stickFigure;
		console.log(stickFigure);
		
		// Submit to the DB
		collection.insert(stickFigure, function (err, doc) {
			if(err) {
				// If it failed, return error
				console.log(err.message);
				if (!isFile) {
					var msg = "You're using a flat file database, which isn't setup to save images. Use Mongo instead.";
				}
				else {
					var msg  = "There was a problem adding the information to the database.";
				}
				
				res.send({
					error: true,
					message: msg,
				});
			}
			else {
				find(); // get Latest collection
				
				res.send({
					error: false,
					message: "Your image has been added to the library.",
					poserList: poses
				});
			}
		});
	}
}

exports.Poser = Poser;

// Initial Stick Poser Figures for seeding a database collection or to start a web library (if the mongo database is not available).
Pose = [
	{
		name: "BASE",
		parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3.2,1.8],"midPoints":[[3.2,2.8]],"endPoint":[3.2,3.8],"tension":0},
		{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3.4000000000000004,1.8],"midPoints":[[3.2,1.65]],"endPoint":[3.2,1.5],"tension":0},
		{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[3.4000000000000004,1.5],"midPoints":[[2.6933333333333334,0.9516666666666667],[3.146666666666667,0.3633333333333334],[3.666666666666667,0.935]],"endPoint":[3.2933333333333334,1.4266666666666667],"tension":0.6},
		{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3.6000000000000005,1.8],"midPoints":[[4.2,1.8]],"endPoint":[5.04,2.4000000000000004],"tension":0.2},
		{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3.8000000000000007,1.8],"midPoints":[[2.2,1.8]],"endPoint":[1.3733333333333333,1.12],"tension":0.2},
		{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[5.24,2.4000000000000004],"midPoints":[[5.3116666666666665,2.586666666666667],[5.503333333333333,2.3466666666666667],[5.321666666666666,2.16]],"endPoint":[5.1000000000000005,2.3066666666666666],"tension":0.4},
		{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[1.5733333333333333,1.12],"midPoints":[[1.155,1.306666666666667],[0.8833333333333333,1.1333333333333333],[1.065,0.8400000000000001]],"endPoint":[1.3666666666666667,0.9866666666666668],"tension":0.4},
		{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[3.4000000000000004,3.8],"midPoints":[[4.2,4.8]],"endPoint":[4.293333333333334,5.8],"tension":0.4},
		{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[3.6000000000000005,3.8],"midPoints":[[2.2,4.8]],"endPoint":[2.146666666666667,5.84],"tension":0.6},
		{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[4.493333333333334,5.8],"midPoints":[[4.565,5.973333333333333],[4.383333333333334,6.253333333333333],[4.055000000000001,6.1466666666666665]],"endPoint":[4.180000000000001,5.88],"tension":0.4},
		{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[2.346666666666667,5.84],"midPoints":[[1.8616666666666668,5.8533333333333335],[1.8433333333333335,6.2],[2.211666666666667,6.2266666666666675]],"endPoint":[2.233333333333334,5.933333333333334],"tension":0.4}]
	},
	
	{
		name: "RICHARD_1",
		parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,1.2],"midPoints":[[3,2.2]],"endPoint":[2.7333333333333334,3.226666666666667],"tension":0.2},
		{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,1.4],"midPoints":[[3,1.05]],"endPoint":[3.013333333333333,1.0066666666666666],"tension":0},
		{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[3.013333333333333,1.2066666666666666],"midPoints":[[2.72,0.7388888888888887],[2.8666666666666667,-0.08888888888888896],[3.013333333333333,-0.2766666666666667],[3.4266666666666667,-0.07777777777777789],[3.4266666666666667,0.6944444444444442]],"endPoint":[3.04,1],"tension":0.4},
		{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,1.5999999999999999],"midPoints":[[3.8133333333333335,2.4000000000000004]],"endPoint":[3.066666666666667,3.7733333333333334],"tension":0},
		{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,1.7999999999999998],"midPoints":[[2.4,1.804444444444444],[1.68,2.4355555555555557]],"endPoint":[2.48,3.5333333333333337],"tension":0.2},
		{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[3.066666666666667,3.9733333333333336],"midPoints":[[3.3480000000000003,3.781333333333334],[3.6560000000000006,3.856],[3.630666666666667,4.117333333333334],[3.272,4.085333333333333]],"endPoint":[3.0733333333333333,3.826666666666666],"tension":0.4},
		{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[2.48,3.733333333333334],"midPoints":[[2.006666666666667,3.5520000000000005],[1.8266666666666667,3.690666666666667],[1.9533333333333334,3.8426666666666667],[2.2133333333333334,3.821333333333334]],"endPoint":[2.46,3.68],"tension":0.6},
		{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[2.7333333333333334,3.426666666666667],"midPoints":[[3,4.1466666666666665],[3.0533333333333332,4.866666666666667],[3.1333333333333333,5.613333333333333]],"endPoint":[2.973333333333333,6.386666666666667],"tension":0.4},
		{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[2.7333333333333334,3.6266666666666674],"midPoints":[[2.1866666666666665,4.666666666666667]],"endPoint":[2.28,6.306666666666667],"tension":0},
		{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[2.973333333333333,6.586666666666667],"midPoints":[[3.3277777777777775,6.337777777777777],[3.762222222222222,6.342222222222223],[3.9833333333333325,6.586666666666667],[3.6444444444444444,6.764444444444444],[2.878888888888888,6.635555555555555]],"endPoint":[2.98,6.4],"tension":0.4},
		{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[2.28,6.506666666666667],"midPoints":[[1.9699999999999998,6.315555555555556],[1.553333333333333,6.404444444444444],[1.4699999999999995,6.653333333333333],[1.9066666666666667,6.742222222222224],[2.5566666666666666,6.564444444444445]],"endPoint":[2.433333333333333,6.32],"tension":0.4}]
	},

	{
		name: "RICHARD_2",
		parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,2],"midPoints":[[3.16,2.34],[3.1466666666666665,2.8933333333333335],[2.7866666666666666,4.233333333333333]],"endPoint":[2.6,4.426666666666667],"tension":0.4},
		{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,3],"midPoints":[[2.933333333333333,1.8366666666666667]],"endPoint":[2.88,1.6733333333333333],"tension":0},
		{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[2.88,2.6733333333333333],"midPoints":[[2.38,1.5122222222222221],[2.0533333333333332,0.9644444444444445],[2.22,0.4700000000000001],[2.7866666666666666,0.5622222222222223],[3.0733333333333333,1.2411111111111113]],"endPoint":[2.8666666666666667,1.6800000000000002],"tension":0.4},
		{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,4],"midPoints":[[3.84,2.0666666666666664],[4.466666666666667,1.9466666666666668],[4.32,1.8666666666666667],[4.08,1.0666666666666667]],"endPoint":[3.96,0.8],"tension":0.2},
		{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,5],"midPoints":[[3.12,2.1733333333333333],[2.453333333333333,2.16],[1.4933333333333334,1.92],[1.3066666666666666,1.92],[0.5466666666666666,0.9733333333333334]],"endPoint":[0.32,0.7066666666666667],"tension":0.2},
		{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[3.96,1.8],"midPoints":[[3.694666666666667,0.6719999999999999],[3.789333333333333,0.3973333333333332],[4.204,0.44266666666666665],[4.2586666666666675,0.7146666666666667]],"endPoint":[4.006666666666667,0.7866666666666666],"tension":0.4},
		{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[0.32,1.7066666666666666],"midPoints":[[-0.09833333333333333,0.8200000000000001],[-0.14333333333333334,0.48],[0.225,0.4066666666666666]],"endPoint":[0.35333333333333333,0.6933333333333334],"tension":0.4},
		{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[2.6,5.426666666666667],"midPoints":[[4.76,3.5866666666666664]],"endPoint":[4.506666666666668,4.96],"tension":0},
		{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[2.6,6.426666666666667],"midPoints":[[4.426666666666668,4.1066666666666665]],"endPoint":[3.466666666666667,5.986666666666666],"tension":0},
		{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[4.506666666666668,5.96],"midPoints":[[4.976666666666667,4.640000000000001],[5.3933333333333335,4.6],[5.236666666666668,4.933333333333333],[4.786666666666667,5.253333333333333],[4.376666666666666,5.213333333333333]],"endPoint":[4.5,4.933333333333334],"tension":0.4},
		{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[3.466666666666667,6.986666666666666],"midPoints":[[3.9677777777777776,5.682222222222221],[4.322222222222222,5.737777777777778],[3.93,6.153333333333334],[3.4844444444444442,6.435555555555556],[3.1855555555555557,6.304444444444445]],"endPoint":[3.3533333333333335,6.026666666666666],"tension":0.4}]
	},

	{
		name: "Creature",
		parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[4,2.4],"midPoints":[[3.7,2.3333333333333335],[3.4,2.2666666666666666],[2.8,2.1333333333333333],[2.033333333333333,2.1733333333333333],[0.9433333333333334,2.046666666666667],[-0.10166666666666667,1.6166666666666667]],"endPoint":[1.5866666666666667,2.2133333333333334],"tension":0},
		{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[4,2.8],"midPoints":[[4.8,2.0633333333333335]],"endPoint":[5.573333333333333,1.7400000000000002],"tension":1},
		{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[5.573333333333333,2.14],"midPoints":[[4.8133333333333335,1.1916666666666667],[5.826666666666666,0.9900000000000002],[5.693333333333337,1.7083333333333335]],"endPoint":[6.840000000000002,1.7333333333333338],"tension":0.6},
		{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[4,3.1999999999999997],"midPoints":[[5.066666666666666,3.1066666666666665]],"endPoint":[5.586666666666667,4.386666666666667],"tension":0.2},
		{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[4,3.5999999999999996],"midPoints":[[4.173333333333333,3.56]],"endPoint":[4.36,4.5200000000000005],"tension":0.2},
		{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[5.586666666666667,4.786666666666667],"midPoints":[[5.858333333333335,4.573333333333336],[6.050000000000002,4.333333333333334],[5.868333333333335,4.146666666666667]],"endPoint":[5.646666666666667,4.293333333333333],"tension":0.4},
		{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[4.36,4.920000000000001],"midPoints":[[4.141666666666667,4.70666666666667],[3.87,4.533333333333334],[4.051666666666667,4.24]],"endPoint":[4.3533333333333335,4.386666666666667],"tension":0.4},
		{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[1.5866666666666667,2.6133333333333333],"midPoints":[[2.586666666666668,3.213333333333335]],"endPoint":[2.306666666666668,4.200000000000003],"tension":0.4},
		{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[1.5866666666666667,3.013333333333333],"midPoints":[[0.5866666666666667,3.213333333333335],[0.56,3.733333333333334],[0.5466666666666667,3.9933333333333345],[0.54,4.123333333333336],[0.5366666666666667,4.188333333333338]],"endPoint":[0.5333333333333334,4.253333333333336],"tension":0.6},
		{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[2.306666666666668,4.600000000000003],"midPoints":[[2.5783333333333345,4.373333333333335],[2.396666666666668,4.653333333333332],[2.068333333333334,4.546666666666667]],"endPoint":[2.1933333333333347,4.280000000000002],"tension":0.4},
		{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[0.5333333333333334,4.653333333333336],"midPoints":[[0.24833333333333352,4.266666666666671],[0.2300000000000002,4.613333333333334],[0.5983333333333334,4.6400000000000015]],"endPoint":[0.6200000000000003,4.346666666666671],"tension":0.4}]
	}
];