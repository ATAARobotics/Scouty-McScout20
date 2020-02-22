"use strict";
document.addEventListener('deviceready', async function () {
    if (localStorage.getItem('settingsCheck') === 1){
        let databaseName = localStorage.getItem('databaseName');
        let db;
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
        $('#teleopCellsAssist').val(doc.teleopCellsInner);
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
            let matchDoc = await db.get(`${localStorage.getItem('matchType')}${$('#matchNumber').val()}_${$('#teamNumber').val()}`);
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
        let matchType = localStorage.getItem('matchType');
        let matchNumber = $('#matchNumber').val();
        let teamNumber = $('#teamNumber').val();
        let startingLocation = parseInt($('input[name=startingLocation]:checked').val());
        let movedBaseline = parseInt($('input[name=movedBaseline]:checked').val());
        let autoCellsPickup = parseInt($('#autoCellsPickup').val());
        let autoCellsDropped = parseInt($('#autoCellsDropped').val());
        let autoCellsLow = parseInt($('#autoCellsLow').val());
        let autoCellsHigh = parseInt($('#autoCellsHigh').val());
        let autoCellsInner = parseInt($('#autoCellsInner').val());
        let autoCellsAssist = parseInt($('#autoCellsAssist').val());
        let autoComments = $('#autoCommentSection').val();        
        let teleopCellsPickup = parseInt($('#teleopCellsPickup').val());
        let teleopCellsDropped = parseInt($('#teleopCellsDropped').val());
        let teleopCellsLow = parseInt($('#teleopCellsLow').val());
        let teleopCellsHigh = parseInt($('#teleopCellsHigh').val());
        let teleopCellsInner = parseInt($('#teleopCellsInner').val());
        let teleopCellsAssist = parseInt($('#teleopCellsAssist').val());
        let rotationControl = parseInt($('input[name=rotationControl]:checked').val());
        let positionControl = parseInt($('input[name=positionControl]:checked').val());
        let penalties = parseInt($('#penalties').val());
        let teleopComments = $('#teleopCommentSection').val();
        let selfClimb = parseInt($('input[name=selfClimb]:checked').val());
        let selfPark = parseInt($('input[name=selfPark]:checked').val());
        let totalClimb = parseInt($('input[name=totalClimb]:checked').val());
        let balanced = parseInt($('input[name=balanced]:checked').val());
        let endgameComments = $('#endgameCommentSection').val();
        let speed = parseInt($('input[name=speedRating]:checked').val());
        let stability = parseInt($('input[name=stabilityRating]:checked').val());
        let defense = parseInt($('input[name=defenseRating]:checked').val());
        let primaryDefense = parseInt($('input[name=primaryDefense]:checked').val());
        let anythingBreak = parseInt($('input[name=anythingBreak]:checked').val());
        let dead = parseInt($('input[name=robotDead]:checked').val());
        let generalComments = $('#generalCommentSection').val();
        let doc = {
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
        if (localStorage.getItem('settingsCheck') === 1) {
            if (matchNumber && teamNumber) {
                try {
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.reload();
                } catch (err) {
                    if (err.status === 409) {
                        let old = await db.get(`${matchType}${matchNumber}_${teamNumber}`);
                        doc._rev = old._rev;
                        let newDoc = await db.put(doc, {force: true});
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
	let qty = document.getElementById('autoCellsPickup').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsPickup').value = new_qty;
	return new_qty;
}

function modifyAutoDrop_qty(val) {
	let qty = document.getElementById('autoCellsDropped').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsDropped').value = new_qty;
	return new_qty;
}

function modifyAutoLow_qty(val) {
	let qty = document.getElementById('autoCellsLow').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsLow').value = new_qty;
	return new_qty;
}

function modifyAutoHigh_qty(val) {
	let qty = document.getElementById('autoCellsHigh').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsHigh').value = new_qty;
	return new_qty;
}

function modifyAutoInner_qty(val) {
	let qty = document.getElementById('autoCellsInner').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsInner').value = new_qty;
	return new_qty;
}

function modifyTeleopPickup_qty(val) {
	let qty = document.getElementById('teleopCellsPickup').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsPickup').value = new_qty;
	return new_qty;
}

function modifyTeleopDrop_qty(val) {
	let qty = document.getElementById('teleopCellsDropped').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsDropped').value = new_qty;
	return new_qty;
}

function modifyTeleopLow_qty(val) {
	let qty = document.getElementById('teleopCellsLow').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsLow').value = new_qty;
	return new_qty;
}

function modifyTeleopHigh_qty(val) {
	let qty = document.getElementById('teleopCellsHigh').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsHigh').value = new_qty;
	return new_qty;
}

function modifyTeleopInner_qty(val) {
	let qty = document.getElementById('teleopCellsInner').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsInner').value = new_qty;
	return new_qty;
}

function modifyAutoAssist_qty(val) {
	let qty = document.getElementById('autoCellsAssist').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('autoCellsAssist').value = new_qty;
	return new_qty;
}

function modifyTeleopAssist_qty(val) {
	let qty = document.getElementById('teleopCellsAssist').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopCellsAssist').value = new_qty;
	return new_qty;
}

function modifyPenalties_qty(val) {
	let qty = document.getElementById('penalties').value;
	let new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('penalties').value = new_qty;
	return new_qty;
}