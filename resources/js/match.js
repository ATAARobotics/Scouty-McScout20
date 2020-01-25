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
    function show(doc) {
        $('#autoCellsPickup').val(doc.autoCellsPickup);
        $('#autoCellsDropped').val(doc.autoCellsDropped);
        $('#autoCellsLow').val(doc.autoCellsLow);
        $('#autoCellsHigh').val(doc.autoCellsHigh);
        $('#autoCellsInner').val(doc.autoCellsInner);
        $('#teleopCellsPickup').val(doc.teleopCellsPickup);
        $('#teleopCellsDropped').val(doc.teleopCellsDropped);
        $('#teleopCellsLow').val(doc.teleopCellsLow);
        $('#teleopCellsHigh').val(doc.teleopCellsHigh);
        $('#teleopCellsInner').val(doc.teleopCellsInner);

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
        $("input[name=totalClimb][value=" + doc.totalClimb + "]").prop('checked', true);
        $('#' + $('input[name=totalClimb]:checked').attr("id")).addClass('active');
        $("input[name=balanced][value=" + doc.balanced + "]").prop('checked', true);
        $('#' + $('input[name=balanced]:checked').attr("id")).addClass('active');

        $("input[name=speedRating][value=" + doc.speed + "]").prop('checked', true);
        $('#' + $('input[name=speedRating]:checked').attr("id")).addClass('active');
        $("input[name=stabilityRating][value=" + doc.stability + "]").prop('checked', true);
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).addClass('active');
        $("input[name=defenceRating][value=" + doc.defence + "]").prop('checked', true);
        $('#' + $('input[name=defenceRating]:checked').attr("id")).addClass('active');
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
        $('#teleopCellsPickup').val("0");
        $('#teleopCellsDropped').val("0");
        $('#teleopCellsLow').val("0");
        $('#teleopCellsHigh').val("0");
        $('#teleopCellsInner').val("0");
        $('#' + $('input[name=rotationControl]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=positionControl]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=selfClimb]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=totalClimb]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=balanced]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=defenceRating]:checked').attr("id")).removeClass('active');
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
    }
    document.getElementById('teamNumber').onkeyup = function() {
        update();
    }

    document.getElementById("Submit").onclick = async function () {
        var matchType = localStorage.getItem('matchType');
        var matchNumber = $('#matchNumber').val();
        var teamNumber = $('#teamNumber').val();

        var startingLocation = parseInt($('input[name=startingLocation]:checked').val());
        var movedBaseline = parseInt($('input[name=movedBaseline]:checked').val());
        var autoCellsPickup = parseInt($('#cellPickup').val());
        var autoCellsDropped = parseInt($('#cellsDropped').val());
        var autoCellsLow = parseInt($('#cellsLow').val());
        var autoCellsHigh = parseInt($('#cellsHigh').val());
        var autoCellsInner = parseInt($('#cellsInner').val());
        var autoComments = $('#autoCommentSection').val();        

        var teleopCellsPickup = parseInt($('#cellPickup').val());
        var teleopCellsDropped = parseInt($('#cellsDropped').val());
        var teleopCellsLow = parseInt($('#cellsLow').val());
        var teleopCellsHigh = parseInt($('#cellsHigh').val());
        var teleopCellsInner = parseInt($('#cellsInner').val());
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
            startingLocation: startingLocation,
            movedBaseline: movedBaseline,
            autoCellsPickup: autoCellsPickup,
            autoCellsDropped: autoCellsDropped,
            autoCellsLow: autoCellsLow,
            autoCellsHigh: autoCellsHigh,
            autoCellsInner: autoCellsInner,
            teleopCellsPickup: teleopCellsPickup,
            teleopCellsDropped: teleopCellsDropped,
            teleopCellsLow: teleopCellsLow,
            teleopCellsHigh: teleopCellsHigh,
            teleopCellsInner: teleopCellsInner,
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