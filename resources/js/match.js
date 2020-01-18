document.addEventListener('deviceready', async function () {
    if (localStorage.getItem('settingsCheck') == 1){
        var databaseName = localStorage.getItem('databaseName');
        var db;
        if (JSON.parse(localStorage.getItem('sqLite'))) {
            db = new PouchDB(databaseName, {adapter: 'cordova-sqlite'});
            console.log(db.adapter);
            console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
        } else {
            db = new PouchDB(databaseName);
            console.log(db.adapter);
        }
    } else {
        $('#Submit').prop('disabled', true);
        window.alert("Check Settings!")
    }
    /* This would probably work when the names are changed. TODO
    function show(doc) {
        $('#climbingType').val(doc.climbingType);
        $('#cargoshipCargo').val(doc.teleopCargoshipCargo);
        $('#rocket1Cargo').val(doc.teleopRocket1Cargo);
        $('#rocket2Cargo').val(doc.teleopRocket2Cargo);
        $('#rocket3Cargo').val(doc.teleopRocket3Cargo);
        $('#droppedCargo').val(doc.teleopDroppedCargo);
        $('#cargoshipHatch').val(doc.teleopCargoshipHatch);
        $('#rocket1Hatch').val(doc.teleopRocket1Hatch);
        $('#rocket2Hatch').val(doc.teleopRocket2Hatch);
        $('#rocket3Hatch').val(doc.teleopRocket3Hatch);
        $('#droppedHatch').val(doc.teleopDroppedHatch);
        $("input[name=startingLevel][value=" + doc.startingLevel + "]").prop('checked', true);
        $('#' + $('input[name=startingLevel]:checked').attr("id")).addClass('active');
        $("input[name=crossedBaseline][value=" + doc.crossedBaseline + "]").prop('checked', true);
        $('#' + $('input[name=crossedBaseline]:checked').attr("id")).addClass('active');
        $('#commentSection').val(`${doc.comments}\n---EDIT---\n`);
        $("input[name=gaveAssistance][value=" + doc.climbingGaveAssistance + "]").prop('checked', true);
        $('#' + $('input[name=gaveAssistance]:checked').attr("id")).addClass('active');
        $("input[name=gotAssistance][value=" + doc.climbingGotAssistance + "]").prop('checked', true);
        $('#' + $('input[name=gotAssistance]:checked').attr("id")).addClass('active');
        $("input[name=speedRating][value=" + doc.speed + "]").prop('checked', true);
        $('#' + $('input[name=speedRating]:checked').attr("id")).addClass('active');
        $("input[name=stabilityRating][value=" + doc.stability + "]").prop('checked', true);
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).addClass('active');
        $("input[name=skillRating][value=" + doc.driverSkill + "]").prop('checked', true);
        $('#' + $('input[name=skillRating]:checked').attr("id")).addClass('active');
        $("input[name=defenceRating][value=" + doc.defence + "]").prop('checked', true);
        $('#' + $('input[name=defenceRating]:checked').attr("id")).addClass('active');
        $("input[name=robotDead][value=" + doc.dead + "]").prop('checked', true);
        $('#' + $('input[name=robotDead]:checked').attr("id")).addClass('active');
        $("input[name=anythingBreak][value=" + doc.anythingBreak + "]").prop('checked', true);
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).addClass('active');
        $('#startMatch').prop('disabled', true);
    }

    function hide() {
        $('#' + $('input[name=startingLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=crossedBaseline]:checked').attr("id")).removeClass('active');
        $('#climbingType').val("Choose...");
        $('#cargoshipCargo').val("0");
        $('#rocket1Cargo').val("0");
        $('#rocket2Cargo').val("0");
        $('#rocket3Cargo').val("0");
        $('#droppedCargo').val("0");
        $('#cargoshipHatch').val("0");
        $('#rocket1Hatch').val("0");
        $('#rocket2Hatch').val("0");
        $('#rocket3Hatch').val("0");
        $('#droppedHatch').val("0");
        $('#' + $('input[name=gotAssistance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=gaveAssistance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=skillRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=defenceRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotDead]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).removeClass('active');
        $('#commentSection').val('');
        $('input[type=radio]').attr('checked', false);
        $('#startMatch').prop('disabled', false);
    }

    async function update() {
        try {
            var matchDoc = await db.get(`${localStorage.getItem('matchType')}${$('#matchNumber').val()}_${$('#teamNumber').val()}`);
            hide();
            show(matchDoc);
        } catch (err) {
            hide();
        }
    }

    document.getElementById('matchNumber').onkeyup = function() {
        update();
    }
    document.getElementById('teamNumber').onkeyup = function() {
        update();
    }*/

    document.getElementById("Submit").onclick = async function () {
        var matchType = localStorage.getItem('matchType');
        var matchNumber = $('#matchNumber').val();
        var teamNumber = $('#teamNumber').val();

        var startingLocation = parseInt($('input[name=startingLocation]:checked').val());
        var movedBaseline = parseInt($('input[name=movedBaseline]:checked').val());
        var autoComments = $('#autoCommentSection').val();        

        var cellsPickup = parseInt($('#cellPickup').val());
        var cellsDropped = parseInt($('#cellsDropped').val());
        var cellsLow = parseInt($('#cellsLow').val());
        var cellsHigh = parseInt($('#cellsHigh').val());
        var cellsInner = parseInt($('#cellsInner').val());
        var rotationControl = parseInt($('input[name=rotationControl]:checked').val());
        var positionControl = parseInt($('input[name=positionControl]:checked').val());
        var teleopComments = $('#teleopCommentSection').val();

        var selfClimb = parseInt($('input[name=selfClimb]:checked').val());
        var totalClimb = parseInt($('input[name=totalClimb]:checked').val());
        var balanced = parseInt($('input[name=balanced]:checked').val());
        var endgameComments = $('#endgameCommentSection').val();

        var speed = parseInt($('input[name=speedRating]:checked').val());
        var stability = parseInt($('input[name=stabilityRating]:checked').val());
        var defence = parseInt($('input[name=defenceRating]:checked').val());
        var primaryDefence = parseInt($('input[name=primaryDefence]:checked').val());
        var anythingBreak = parseInt($('input[name=anythingBreak]:checked').val());
        var dead = parseInt($('input[name=robotDead]:checked').val());
        var generalComments = $('#generalCommentSection').val();

        var doc = {
            _id: `${matchType}${matchNumber}_${teamNumber}`,
            scoutName: localStorage.getItem('scoutName'),
            startingLocation: startingLevel,
            movedBaseline: crossedBaseline,
            autoComments: autoComments,
            cellsPickup: cellsPickup,
            cellsDropped: cellsDropped,
            cellsLow: cellsLow,
            cellsHigh: cellsHigh,
            cellsInner: cellsInner,
            rotationControl: rotationControl,
            positionControl: positionControl,
            teleopComments: teleopComments,
            selfClimb: selfClimb,
            totalClimb: totalClimb,
            balanced: balanced,
            endgameComments: endgameComments,
            speed: speed,
            stability: stability,
            defence: defence,
            primaryDefence: primaryDefence,
            anythingBreak: anythingBreak,
            dead: dead,
            generalComments: generalComments
        }
        if (localStorage.getItem('settingsCheck') == 1) {
            if (matchNumber && teamNumber) {
                try {
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.reload();
                } catch (err) {
                    if (err.status == 409) {
                        let old = await db.get(`${matchType}${matchNumber}_${teamNumber}`);
                        doc._rev = old._rev;
                        if (old.crossedBaselineTime) {
                            doc.crossedBaselineTime = old.crossedBaselineTime;
                        }
                        doc.teleopCargoTime = old.teleopCargoTime;
                        doc.teleopHatchTime = old.teleopHatchTime;
                        doc.climbingTime = old.climbingTime;
                        let newDoc = await db.put(doc, {force: true});
                        window.alert("Updated!");
                        window.location.reload();
                    }
                }
            } else {
                window.alert("Fill all fields!")
            }
        } else {
            window.alert("Set settings first!")
        }
    }
});

function modifyPickup_qty(val) {
	var qty = document.getElementById('cellsPickup').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('cellsPickup').value = new_qty;
	return new_qty;
}

function modifyDrop_qty(val) {
	var qty = document.getElementById('cellsDropped').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('cellsDropped').value = new_qty;
	return new_qty;
}

function modifyLow_qty(val) {
	var qty = document.getElementById('cellsLow').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('cellsLow').value = new_qty;
	return new_qty;
}

function modifyHigh_qty(val) {
	var qty = document.getElementById('cellsHigh').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('cellsHigh').value = new_qty;
	return new_qty;
}

function modifyInner_qty(val) {
	var qty = document.getElementById('cellsInner').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('cellsInner').value = new_qty;
	return new_qty;
}