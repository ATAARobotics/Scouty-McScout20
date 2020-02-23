"use strict";
document.addEventListener('deviceready', async function () {
    if (parseInt(localStorage.getItem('settingsCheck')) === 1){
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
        window.alert("Check Settings!");
    }
    function show(doc) {
        $('#autoCellsPickup').val(doc.autoCellsPickup);
        $('#autoCellsDropped').val(doc.autoCellsDropped);
        $('#autoCellsLow').val(doc.autoCellsLow);
        $('#autoCellsHigh').val(doc.autoCellsHigh);
        $('#autoCellsInner').val(doc.autoCellsInner);
        $('#autoCellsAssist').val(doc.autoCellsAssist);
        $('#teleopCellsPickup').val(doc.teleopCellsPickup);
        $('#teleopCellsDropped').val(doc.teleopCellsDropped);
        $('#teleopCellsLow').val(doc.teleopCellsLow);
        $('#teleopCellsHigh').val(doc.teleopCellsHigh);
        $('#teleopCellsInner').val(doc.teleopCellsInner);
        $('#teleopCellsAssist').val(doc.teleopCellsAssist);
        $('#penalties').val(doc.penalties);

        $("input[name=startingLocation][value=" + doc.startingLocation + "]").prop('checked', true);
        $('#' + $('input[name=startingLocation]:checked').attr("id")).addClass('active');
        $("input[name=movedBaseline][value=" + doc.movedBaseline + "]").prop('checked', true);
        $('#' + $('input[name=movedBaseline]:checked').attr("id")).addClass('active');
        $('#commentSection').val(`${doc.comments}\n---EDIT---\n`);
        $("input[name=rotationControl][value=" + doc.rotationControl + "]").prop('checked', true);
        $('#' + $('input[name=rotationControl]:checked').attr("id")).addClass('active');
        $("input[name=positionControl][value=" + doc.positionControl + "]").prop('checked', true);
        $('#' + $('input[name=positionControl]:checked').attr("id")).addClass('active');
        $("input[name=selfClimb][value=" + doc.selfClimb + "]").prop('checked', true);
        $('#' + $('input[name=selfClimb]:checked').attr("id")).addClass('active');
        $("input[name=selfPark][value=" + doc.selfPark + "]").prop('checked', true);
        $('#' + $('input[name=selfPark]:checked').attr("id")).addClass('active');
        $("input[name=totalClimb][value=" + doc.totalClimb + "]").prop('checked', true);
        $('#' + $('input[name=totalClimb]:checked').attr("id")).addClass('active');
        $("input[name=balanced][value=" + doc.balanced + "]").prop('checked', true);
        $('#' + $('input[name=balanced]:checked').attr("id")).addClass('active');

        $("input[name=speedRating][value=" + doc.speed + "]").prop('checked', true);
        $('#' + $('input[name=speedRating]:checked').attr("id")).addClass('active');
        $("input[name=stabilityRating][value=" + doc.stability + "]").prop('checked', true);
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).addClass('active');
        $("input[name=defenseRating][value=" + doc.defense + "]").prop('checked', true);
        $('#' + $('input[name=defenseRating]:checked').attr("id")).addClass('active');
        $("input[name=primaryDefense][value=" + doc.primaryDefense + "]").prop('checked', true);
        $('#' + $('input[name=primaryDefense]:checked').attr("id")).addClass('active');
        $("input[name=robotDead][value=" + doc.dead + "]").prop('checked', true);
        $('#' + $('input[name=robotDead]:checked').attr("id")).addClass('active');
        $("input[name=anythingBreak][value=" + doc.anythingBreak + "]").prop('checked', true);
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).addClass('active');

        $('#autoCommentSection').val(`${doc.autoComments}\n---EDIT---\n`);
        $('#teleopCommentSection').val(`${doc.teleopComments}\n---EDIT---\n`);
        $('#endgameCommentSection').val(`${doc.endgameComments}\n---EDIT---\n`);
        $('#generalCommentSection').val(`${doc.generalComments}\n---EDIT---\n`);
        
    }

    function hide() {
        $('#' + $('input[name=startingLocation]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=movedBaseline]:checked').attr("id")).removeClass('active');
        $('#autoCellsPickup').val("0");
        $('#autoCellsDropped').val("0");
        $('#autoCellsLow').val("0");
        $('#autoCellsHigh').val("0");
        $('#autoCellsInner').val("0");
        $('#autoCellsAssist').val("0");
        $('#teleopCellsPickup').val("0");
        $('#teleopCellsDropped').val("0");
        $('#teleopCellsLow').val("0");
        $('#teleopCellsHigh').val("0");
        $('#teleopCellsInner').val("0");
        $('#teleopCellsAssist').val("0");
        $('#penalties').val("0");
        $('#' + $('input[name=rotationControl]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=positionControl]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=selfClimb]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=selfPark]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=totalClimb]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=balanced]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=defenseRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=primaryDefense]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotDead]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=anythingBreak]:checked').attr("id")).removeClass('active');
        $('#autoCommentSection').val('');
        $('#teleopCommentSection').val('');
        $('#endgameCommentSection').val('');
        $('#generalCommentSection').val('');
        $('input[type=radio]').attr('checked', false);
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
    };
    document.getElementById('teamNumber').onkeyup = function() {
        update();
    };

    document.getElementById("Submit").onclick = async function () {
        var matchType = localStorage.getItem('matchType');
        var matchNumber = $('#matchNumber').val();
        var teamNumber = $('#teamNumber').val();
        var startingLocation = parseInt($('input[name=startingLocation]:checked').val());
        var movedBaseline = parseInt($('input[name=movedBaseline]:checked').val());
        var autoCellsPickup = parseInt($('#autoCellsPickup').val());
        var autoCellsDropped = parseInt($('#autoCellsDropped').val());
        var autoCellsLow = parseInt($('#autoCellsLow').val());
        var autoCellsHigh = parseInt($('#autoCellsHigh').val());
        var autoCellsInner = parseInt($('#autoCellsInner').val());
        var autoCellsAssist = parseInt($('#autoCellsAssist').val());
        var autoComments = $('#autoCommentSection').val();        
        var teleopCellsPickup = parseInt($('#teleopCellsPickup').val());
        var teleopCellsDropped = parseInt($('#teleopCellsDropped').val());
        var teleopCellsLow = parseInt($('#teleopCellsLow').val());
        var teleopCellsHigh = parseInt($('#teleopCellsHigh').val());
        var teleopCellsInner = parseInt($('#teleopCellsInner').val());
        var teleopCellsAssist = parseInt($('#teleopCellsAssist').val());
        var rotationControl = parseInt($('input[name=rotationControl]:checked').val());
        var positionControl = parseInt($('input[name=positionControl]:checked').val());
        var penalties = parseInt($('#penalties').val());
        var teleopComments = $('#teleopCommentSection').val();
        var selfClimb = parseInt($('input[name=selfClimb]:checked').val());
        var selfPark = parseInt($('input[name=selfPark]:checked').val());
        var totalClimb = parseInt($('input[name=totalClimb]:checked').val());
        var balanced = parseInt($('input[name=balanced]:checked').val());
        var endgameComments = $('#endgameCommentSection').val();
        var speed = parseInt($('input[name=speedRating]:checked').val());
        var stability = parseInt($('input[name=stabilityRating]:checked').val());
        var defense = parseInt($('input[name=defenseRating]:checked').val());
        var primaryDefense = parseInt($('input[name=primaryDefense]:checked').val());
        var anythingBreak = parseInt($('input[name=anythingBreak]:checked').val());
        var dead = parseInt($('input[name=robotDead]:checked').val());
        var generalComments = $('#generalCommentSection').val();
        var doc = {
            _id: `${matchType}${matchNumber}_${teamNumber}`,
            scoutName: localStorage.getItem('scoutName'),
            startingLocation: startingLocation,
            movedBaseline: movedBaseline,
            autoCellsPickup: autoCellsPickup,
            autoCellsDropped: autoCellsDropped,
            autoCellsLow: autoCellsLow,
            autoCellsHigh: autoCellsHigh,
            autoCellsInner: autoCellsInner,
            autoCellsAssist: autoCellsAssist,
            autoComments: autoComments,
            teleopCellsPickup: teleopCellsPickup,
            teleopCellsDropped: teleopCellsDropped,
            teleopCellsLow: teleopCellsLow,
            teleopCellsHigh: teleopCellsHigh,
            teleopCellsInner: teleopCellsInner,
            teleopCellsAssist: teleopCellsAssist,
            rotationControl: rotationControl,
            positionControl: positionControl,
            teleopComments: teleopComments,
            penalties: penalties,
            selfClimb: selfClimb,
            selfPark: selfPark,
            totalClimb: totalClimb,
            balanced: balanced,
            endgameComments: endgameComments,
            speed: speed,
            stability: stability,
            defense: defense,
            primaryDefense: primaryDefense,
            anythingBreak: anythingBreak,
            dead: dead,
            generalComments: generalComments
        };
        if (parseInt(localStorage.getItem('settingsCheck')) === 1) {
            if (matchNumber && teamNumber) {
                try {
                    var docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.reload();
                } catch (err) {
                    if (err.status === 409) {
                        var old = await db.get(`${matchType}${matchNumber}_${teamNumber}`);
                        doc._rev = old._rev;
                        var newDoc = await db.put(doc, {force: true});
                        window.alert("Updated!");
                        window.location.reload();
                    }
                }
            } else {
                window.alert("Fill all fields!");
            }
        } else {
            window.alert("Set settings first!");
        }
    };
});

function modifyAutoPickup_qty(val) {
	var qty = document.getElementById('autoCellsPickup').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsPickup').value = new_qty;
	return new_qty;
}

function modifyAutoDrop_qty(val) {
	var qty = document.getElementById('autoCellsDropped').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsDropped').value = new_qty;
	return new_qty;
}

function modifyAutoLow_qty(val) {
	var qty = document.getElementById('autoCellsLow').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsLow').value = new_qty;
	return new_qty;
}

function modifyAutoHigh_qty(val) {
	var qty = document.getElementById('autoCellsHigh').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsHigh').value = new_qty;
	return new_qty;
}

function modifyAutoInner_qty(val) {
	var qty = document.getElementById('autoCellsInner').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsInner').value = new_qty;
	return new_qty;
}

function modifyTeleopPickup_qty(val) {
	var qty = document.getElementById('teleopCellsPickup').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsPickup').value = new_qty;
	return new_qty;
}

function modifyTeleopDrop_qty(val) {
	var qty = document.getElementById('teleopCellsDropped').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsDropped').value = new_qty;
	return new_qty;
}

function modifyTeleopLow_qty(val) {
	var qty = document.getElementById('teleopCellsLow').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsLow').value = new_qty;
	return new_qty;
}

function modifyTeleopHigh_qty(val) {
	var qty = document.getElementById('teleopCellsHigh').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsHigh').value = new_qty;
	return new_qty;
}

function modifyTeleopInner_qty(val) {
	var qty = document.getElementById('teleopCellsInner').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsInner').value = new_qty;
	return new_qty;
}

function modifyAutoAssist_qty(val) {
	var qty = document.getElementById('autoCellsAssist').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsAssist').value = new_qty;
	return new_qty;
}

function modifyTeleopAssist_qty(val) {
	var qty = document.getElementById('teleopCellsAssist').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsAssist').value = new_qty;
	return new_qty;
}

function modifyPenalties_qty(val) {
	var qty = document.getElementById('penalties').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('penalties').value = new_qty;
	return new_qty;
}