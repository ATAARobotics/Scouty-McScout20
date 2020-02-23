document.addEventListener('deviceready', async function () {
    if (parseInt(localStorage.getItem('settingsCheck')) == 1) {
        var databaseName = localStorage.getItem('databaseName');
        var db;
        if (JSON.parse(localStorage.getItem('sqLite'))) {
            db = new PouchDB(databaseName, { adapter: 'cordova-sqlite' });
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
    function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    var picture1 = '';
    document.getElementById('newPicture1').onclick = function () {
        function success(img) {
            picture1 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto1Preview").style.display = "block";
            robotPhoto1Preview.src = URL.createObjectURL(picture1);
        }
        function fail() {
            console.log('newPicture1 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL });
    }
    document.getElementById('existingPicture1').onclick = function () {
        function success(img) {
            picture1 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto1Preview").style.display = "block";
            robotPhoto1Preview.src = URL.createObjectURL(picture1);
        }
        function fail() {
            console.log('existingPicture1 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }
    var picture2 = '';
    document.getElementById('newPicture2').onclick = function () {
        function success(img) {
            picture2 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto2Preview").style.display = "block";
            robotPhoto2Preview.src = URL.createObjectURL(picture2);
        }
        function fail() {
            console.log('newPicture2 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL });
    }
    document.getElementById('existingPicture2').onclick = function () {
        function success(img) {
            picture2 = b64toBlob(img, 'image/jpeg');
            document.getElementById("robotPhoto2Preview").style.display = "block";
            robotPhoto2Preview.src = URL.createObjectURL(picture2);
        }
        function fail() {
            console.log('existingPicture2 fail');
        }
        navigator.camera.getPicture(success, fail, { destinationType: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }
    function show(doc) {
        var robotAppearance = doc.robotAppearance;
        var robotDone = doc.robotDone;
        var robotBroken = doc.robotBroken;
        var cellIntake = doc.cellIntake;
        var climbType = doc.climbType;
        var robotCapacity = doc.robotCapacity;
        var cellLowLevel = doc.cellLowLevel;
        var cellHighLevel = doc.cellHighLevel;
        var cellInnerLevel = doc.cellInnerLevel;
        var controlPanel = doc.controlPanel;
        var robotWeight = doc.robotWeight;
        var robotHeight = doc.robotHeight;
        var robotPhoto1Url = URL.createObjectURL(doc._attachments['photo1.jpg'].data);
        var robotPhoto2Url = URL.createObjectURL(doc._attachments['photo2.jpg'].data);
        var comments = doc.comments;
        $('#commentSection').val(`${comments}\n---EDIT---\n`);
        $('#robotWeight').val(`${robotWeight}`);
        robotPhoto1Preview.src = robotPhoto1Url;
        robotPhoto2Preview.src = robotPhoto2Url;
        document.getElementById("robotPhoto1Preview").style.display = "block";
        document.getElementById("robotPhoto2Preview").style.display = "block";
        $("input[name=robotAppearance][value=" + robotAppearance + "]").prop('checked', true);
        $('#' + $('input[name=robotAppearance]:checked').attr("id")).addClass('active');
        $("input[name=cellIntake][value=" + cellIntake + "]").prop('checked', true);
        $('#' + $('input[name=cellIntake]:checked').attr("id")).addClass('active');
        $("input[name=climbType][value=" + climbType + "]").prop('checked', true);
        $('#' + $('input[name=climbType]:checked').attr("id")).addClass('active');
        $("input[name=robotCapacity][value=" + robotCapacity + "]").prop('checked', true);
        $('#' + $('input[name=robotCapacity]:checked').attr("id")).addClass('active');
        $("input[name=cellLowLevel][value=" + cellLowLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellLowLevel]:checked').attr("id")).addClass('active');
        $("input[name=cellHighLevel][value=" + cellHighLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellHighLevel]:checked').attr("id")).addClass('active');
        $("input[name=cellInnerLevel][value=" + cellInnerLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellInnerLevel]:checked').attr("id")).addClass('active');
        $("input[name=controlPanel][value=" + controlPanel + "]").prop('checked', true);
        $('#' + $('input[name=controlPanel]:checked').attr("id")).addClass('active');
        $("input[name=robotDone][value=" + robotDone + "]").prop('checked', true);
        $('#' + $('input[name=robotDone]:checked').attr("id")).addClass('active');
        $("input[name=robotHeight][value=" + robotHeight + "]").prop('checked', true);
        $('#' + $('input[name=robotHeight]:checked').attr("id")).addClass('active');
        $("input[name=robotBroken][value=" + robotBroken + "]").prop('checked', true);
        $('#' + $('input[name=robotBroken]:checked').attr("id")).addClass('active');
    }
    function hide() {
        $('#' + $('input[name=cellIntake]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=climbType]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotCapacity]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=cellLowLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=cellHighLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=cellInnerLevel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=controlPanel]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotWeight]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotAppearance]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotHeight]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotDone]:checked').attr("id")).removeClass('active');
        $('#' + $('input[name=robotBroken]:checked').attr("id")).removeClass('active');
        $('#commentSection').val('');
        $('input[type=radio]').attr('checked', false);
        document.getElementById("robotPhoto1Preview").style.display = "none";
        document.getElementById("robotPhoto1Preview").src = "#";
        document.getElementById("robotPhoto2Preview").style.display = "none";
        document.getElementById("robotPhoto2Preview").src = "#";

    }
    document.getElementById("Submit").onclick = async function () {
        var teamNumber = $('#teamNumber').val();
        var scoutName = localStorage.getItem('scoutName');
        var robotAppearance = parseInt($('input[name=robotAppearance]:checked').val());
        var cellIntake = $('input[name=cellIntake]:checked').val();
        var climbType = parseInt($('input[name=climbType]:checked').val());
        var robotCapacity = parseInt($('input[name=robotCapacity]:checked').val());
        var cellLowLevel = parseInt($('input[name=cellLowLevel]:checked').val());
        var cellHighLevel = parseInt($('input[name=cellHighLevel]:checked').val());
        var cellInnerLevel = parseInt($('input[name=cellInnerLevel]:checked').val());
        var controlPanel = parseInt($('input[name=controlPanel]:checked').val());
        var robotWeight = $('#robotWeight').val();
        var robotHeight = parseInt($('input[name=robotHeight]:checked').val());
        var robotDone = parseInt($('input[name=robotDone]:checked').val());
        var robotBroken = parseInt($('input[name=robotBroken]:checked').val());
        var comments = $('#commentSection').val();
        var doc = {
            _id: `pit_${teamNumber}`,
            _attachments: {
                'photo1.jpg': {
                    content_type: picture1.type || '',
                    data: picture1 || ''
                },
                'photo2.jpg': {
                    content_type: picture2.type || '',
                    data: picture2 || ''
                }
            },
            scoutName: scoutName,
            robotAppearance: robotAppearance,
            cellIntake: cellIntake,
            climbType: climbType,
            robotCapacity: robotCapacity,
            cellLowLevel: cellLowLevel,
            cellHighLevel: cellHighLevel,
            cellInnerLevel: cellInnerLevel,
            controlPanel: controlPanel,
            robotWeight: robotWeight,
            robotHeight: robotHeight,
            robotDone: robotDone,
            robotBroken: robotBroken,
            comments: comments

        }
        if (parseInt(localStorage.getItem('settingsCheck')) == 1) {
            if (teamNumber && 
                robotAppearance != NaN && 
                cellIntake && 
                climbType != NaN && 
                robotCapacity &&
                cellLowLevel != NaN &&
                cellHighLevel &&
                cellInnerLevel != NaN &&
                robotWeight &&
                robotDone != NaN &&
                robotBroken != NaN &&
                controlPanel != NaN &&
                robotHeight != NaN ) {
                try {
                    var docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.href = '../pit/index.html';
                } catch (err) {
                    if (err.status == 409) {
                        var old = await db.get(`pit_${teamNumber}`, { attachments: true, binary: true });
                        doc._rev = old._rev;
                        if (doc._attachments['photo1.jpg'].data == '') {
                            doc._attachments['photo1.jpg'].data = old._attachments['photo1.jpg'].data;
                            doc._attachments['photo1.jpg'].content_type = old._attachments['photo1.jpg'].content_type;
                        }
                        if (doc._attachments['photo2.jpg'].data == '') {
                            doc._attachments['photo2.jpg'].data = old._attachments['photo2.jpg'].data;
                            doc._attachments['photo2.jpg'].content_type = old._attachments['photo2.jpg'].content_type;
                        }
                        var newDoc = await db.put(doc, { force: true });
                        window.alert("Updated!");
                        window.location.href = '../pit/index.html';
                    }
                }
            } else {
                window.alert("Fill all fields!")
            }
        } else {
            window.alert("Set settings first!")
        }
    }
    document.getElementById("teamNumber").onkeyup = async function () {
        try {
            var pitDoc = await db.get(`pit_${$('#teamNumber').val()}`, { attachments: true, binary: true });
            hide();
            show(pitDoc);
        } catch (err) {
            hide();
        }
    }
});