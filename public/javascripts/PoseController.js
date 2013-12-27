var PoseController = (function() {

	//private static attributes
	var stage,
		figure,
		layerParts,
		layerPoints,
		activePartIndex,
		isPart;
		
	//private static methods

	//return constructor
	return function() {
		//private attributes
		
		//privileged methods
				
		this.makePoseSelector = function() {	
			var c=[];
			
			c.push("Select Starting Pose: <select id='poses'></select>");
			return c.join('');
		};
			
		this.makeTensionSelector = function() {	
			var c=[];	
			
			c.push("<br/>Roundness:");
			c.push("<input id='tens' value='' size='6'></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='1.0' ></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='0.8' ></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='0.6' ></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='0.4' ></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='0.2' ></input>");
			c.push("<input type='button' class='btnRound btn-primary' value='0.0' ></input>");
			
			return c.join('');
		};
				
		this.makeNumberPointsSelector = function(){	
			var c=[];
		
			c.push("<br/>Number Mid Points:");
			c.push("<input id='numMid' value='' size='6'></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='1' ></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='2' ></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='3' ></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='4' ></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='5' ></input>");
			c.push("<input type='button' class='btnNumMid btn-info' value='6' ></input>"); 
			
			return c.join('');
		};	

		this.makeDownloadControls = function() {
			var c=[];	
	
			c.push("Download an Image File:"); 
			c.push("<div id='saveImageDiv'>");
				c.push("<input type='button' id='exportImage' class='btn-success' value='Export Image'></input>");
			c.push("</div>");
			
			c.push("<div id='exportedImageDiv'>");
				c.push("<img id='exportedImage' src='' download='stickposer.png'>");
				c.push("<br/>");
				c.push('<a class="poser-export" id="saveToLibrary" href="#">Save to Library</a>');
				c.push('<a class="poser-export" id="downloadImage" href="#" download="stickposer.png">Download</a>');
			c.push("</div>");
			c.push("<div id='saveToLibraryMsg'></div>");
			
			return c.join('');
		};
		
		this.makeSaveControls = function() {
			var c=[];	
			
			// c.push("<br/>Get Pose File Text:"); 
			// c.push("<input type='button' id='getFile' value='Get File'></input> ");
			// c.push("<br/><textarea id='writeFile'></textarea> ");
			// c.push("<br/>Note: Copy and Paste code into PoseFile.js.");
			
			return c.join('');
		};
		
		this.makeAllHtml = function() {
			var c=[];	
		
			c.push("<div id='mainCtl' class='pose_controller'>");			
				c.push("<div id='posesCtl' class='pose_controller_sub'>" + this.makePoseSelector() + "</div>");
				c.push("<div id='tensionCtl' class='pose_controller_sub'>" + this.makeTensionSelector() + "</div>");
				c.push("<div id='numPointsCtl' class='pose_controller_sub'>" + this.makeNumberPointsSelector() + "</div>");
				c.push("<div id='downloadCtl' class='pose_controller_sub'>" + this.makeDownloadControls() + "</div>");
				c.push("<div id='saveCtl' class='pose_controller_sub'>" + this.makeSaveControls() + "</div>");
			c.push("</div>");		
		
			return c.join("");		
		};
		
		this.initializeEvents = function() {
			stage = new Kinetic.Stage({
				container: 'poser-container',
				width: 600,
				height: 600
			});

			layerParts = new Kinetic.Layer();
			layerPoints = new Kinetic.Layer();
			stage.add(layerParts);
			stage.add(layerPoints);			
			
			// figure = new PoseFigure(Pose["BASE"]);
			
			figure = this.getStickPose();	// Either the default figure from database or user's figure stored in the browser session.
			figure.Draw(layerParts, layerPoints);
			
			$.each(Pose, function(idx, pose){
				// console.log(pose);
				if (!figure.stored && pose.name == "BASE") {
					$('<option selected="selected">').val(idx).text(pose.name).appendTo('#poses');
				}
				else {
					$('<option>').val(idx).text(pose.name).appendTo('#poses');
				}
				// $('<option>').val(idx).text(idx).appendTo('#poses');
			});	
			
			// If the figure was stored, add an additional option for the user stored figure
			if (figure.stored) {
				$('<option selected="selected">').val($('#poses > option').length).text(figure.name).appendTo('#poses');
			}
			
			//set to blank first
			//$("#poses").prop("selectedIndex", -1);
				
			$("#poser-container").on("click", function(){
				clickTimer = setTimeout(function(){
					if(!isPart) {
						layerPoints.clear();				
					}
					isPart = false;
				}, 500);
			});
	
			$(".btnRound").on("click", function(){
				var tens = $(this).val();

				figure.GetParts()[activePartIndex].SetTension(parseFloat(tens));
			});
	
			$(".btnNumMid").on("click", function(){
				var num = $(this).val();

				figure.GetParts()[activePartIndex].SetNumMidPts(parseInt(num), layerPoints);
			}); 
						
			$("#exportImage").on("click", function(){
				var dataURL = layerParts.toDataURL();
				
				$("#exportedImageDiv").show();
				$("#exportedImage").attr("src", dataURL);
				$("#downloadImage").attr("href", dataURL);
				
				$("body").scrollTo("#exportedImage");
			});	
			
			$("#saveToLibrary").on("click", function(){
				event.preventDefault();
				
				var stickFigure = null;
				var name = prompt("Enter Name");
				
				if (name) {
					stickFigure = figure.Write(name);
					// console.log(stickFigure);
					
					$.post("/library", {"stickFigure": stickFigure}, function( data ) {
						if (data.error) {
							$("#saveToLibraryMsg").html('<h3 class="error">' + data.message + '</h3>');
						}
						// Need to get updated stickPoserCollection
						// And update the drop down list
						else {
							Pose = data.poserList;
							$("#saveToLibraryMsg").html('<h3>' + data.message + '</h3>');
							
							// Should this be abstracted to a method ?
							$("#poses").empty();	// clear all values first
							$.each(Pose, function(idx, pose){
								// console.log(pose);
								if (pose.name == stickFigure.name) {
									$('<option selected="selected">').val(idx).text(pose.name).appendTo('#poses');
								}
								else {
									$('<option>').val(idx).text(pose.name).appendTo('#poses');
								}
							});	
						}
					});
				}
			});	
	
			$("#getFile").on("click", function(){
				var txt = "";
				var name = prompt("Enter Name");
				if (name) {
					txt = figure.Write(name);
					$("#writeFile").text(txt);
				}
			});	
	
			$("#poses").on("change", function(){
				figure = new PoseFigure(Pose[this.value]);
				figure.Draw(layerParts, layerPoints);	
			});
		};
		
		this.redrawFigure = function(diffInMotion, currentPartName){
			figure.Draw(layerParts, layerPoints, diffInMotion, currentPartName);
		};
		
		this.setActivePart = function(part_idx){
			activePartIndex = part_idx;
			isPart = true;
		};
		
		this.getActivePartIndex = function(){
			return activePartIndex;
		};
		
		// Store the current user's stick figure in the browser session
		this.storeStickPose = function() {
			if (typeof(Storage) !== "undefined") {
				var storedPose = figure.Write();
				storedPose.name = "Current";
				sessionStorage.stickPose = JSON.stringify(storedPose);
			};
		}
		
		// Retrieve the user's working stick figure if it exists
		this.getStickPose = function() {
			if (typeof(Storage) !== "undefined") {
				var storedPose = sessionStorage.stickPose;
				var newPose;	// the PoseFigue to be created from session storage or the default Pose
				
				// Make sure there is a stick pose object
				if (sessionStorage.stickPose) {
					storedPose = JSON.parse(sessionStorage.stickPose);
					
					// Make sure this object has a relevant property
					if (storedPose.name) {
						newPose = new PoseFigure(storedPose);
						newPose.stored = true;
						newPose.name = storedPose.name;
						return newPose;
					}
				}
			};
			
			// There's no stored figure, so create a new default one
			if (Pose.find) {
				newPose = new PoseFigure(Pose.find("BASE"));
			} else {
				newPose = new PoseFigure(Pose[0]);
			}
			
			newPose.stored = false;
			return newPose;
		}

		//constructor code
	}

})();

//public static method
//PoseController.StaticMethod = function() {
//	return 100;
//};
 	
//public nonprivileged methods
PoseController.prototype = {
	Build: function(elName){
		var el = $("#" + elName).get();
		$("#"+elName).append(this.makeAllHtml());
		this.initializeEvents();
	},
	
	SetActivePart: function(part_idx){
		this.setActivePart(part_idx);
	},
	
	RedrawFigure: function(diffInMotion, currentPartName){
		this.redrawFigure(diffInMotion, currentPartName);
	},
	
	GetActivePartIndex: function(){
		return this.getActivePartIndex();
	}
};
