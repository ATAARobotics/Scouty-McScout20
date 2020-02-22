document.addEventListener('deviceready', async function () {
    if (localStorage.getItem('settingsCheck') == 1) {
        let databaseName = localStorage.getItem('databaseName');
        let db;
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

        let byteCharacters = atob(b64Data);
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        let blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    let picture1 = '';
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
    let picture2 = '';
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
        let robotAppearance = doc.robotAppearance;
        let robotDone = doc.robotDone;
        let robotBroken = doc.robotBroken;
        let cellIntake = doc.cellIntake;
        let climbType = doc.climbType;
        let robotCapacity = doc.robotCapacity;
        let cellLowLevel = doc.cellLowLevel;
        let cellHighLevel = doc.cellHighLevel;
        let cellInnerLevel = doc.cellInnerLevel;
        let controlPanel = doc.controlPanel;
        let robotWeight = doc.robotWeight;
        let robotHeight = doc.robotHeight;
        let robotPhoto1Url = URL.createObjectURL(doc._attachments['photo1.jpg'].data);
        let robotPhoto2Url = URL.createObjectURL(doc._attachments['photo2.jpg'].data);
        let comments = doc.comments;
        $('#commentSection').val(`${comments}\n---EDIT---\n`);
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
        $("input[name=robotcapacity][value=" + robotCapacity + "]").prop('checked', true);
        $('#' + $('input[name=robotCapacity]:checked').attr("id")).addClass('active');
        $("input[name=cellLowLevel][value=" + cellLowLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellLowlevel]:checked').attr("id")).addClass('active');
        $("input[name=cellHighLevel][value=" + cellHighLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellHighLevel]:checked').attr("id")).addClass('active');
        $("input[name=cellInnerLevel][value=" + cellInnerLevel + "]").prop('checked', true);
        $('#' + $('input[name=cellInnerLevel]:checked').attr("id")).addClass('active');
        $("input[name=controlPanel][value=" + controlPanel + "]").prop('checked', true);
        $('#' + $('input[name=controlPanel]:checked').attr("id")).addClass('active');
        $("input[name=robotWeight][value=" + robotWeight + "]").prop('checked', true);
        $('#' + $('input[name=robotWeight]:checked').attr("id")).addClass('active');
        $("input[name=robotDone][value=" + robotDone + "]").prop('checked', true);
        $("input[name=robotHeight][value=" + robotHeight + "]").prop('checked', true);
        $('#' + $('input[name=robotHeight]:checked').attr("id")).addClass('active');
        $('#' + $('input[name=robotDone]:checked').attr("id")).addClass('active');
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
        let teamNumber = $('#teamNumber').val();
        let scoutName = localStorage.getItem('scoutName');
        let robotAppearance = parseInt($('input[name=robotAppearance]:checked').val());
        let cellIntake = $('input[name=cellIntake]:checked').val();
        let climbType = parseInt($('input[name=climbType]:checked').val());
        let robotCapacity = parseInt($('input[name=robotCapacity]:checked').val());
        let cellLowLevel = parseInt($('input[name=cellLowLevel]:checked').val());
        let cellHighLevel = parseInt($('input[name=cellHighLevel]:checked').val());
        let cellInnerLevel = parseInt($('input[name=cellInnerLevel]:checked').val());
        let controlPanel = parseInt($('input[name=controlPanel]:checked').val());
        let robotWeight = $('#robotWeight').val();
        let robotHeight = parseInt($('input[name=robotHeight]:checked').val());
        let robotDone = parseInt($('input[name=robotDone]:checked').val());
        let robotBroken = parseInt($('input[name=robotBroken]:checked').val());
        let comments = $('#commentSection').val();
        let doc = {
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
        if (localStorage.getItem('settingsCheck') == 1) {
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
                    let docPut = await db.put(doc);
                    window.alert("Submitted!");
                    window.location.href = '../pit/index.html';
                } catch (err) {
                    if (err.status == 409) {
                        let old = await db.get(`pit_${teamNumber}`, { attachments: true, binary: true });
                        doc._rev = old._rev;
                        if (doc._attachments['photo1.jpg'].data == '') {
                            doc._attachments['photo1.jpg'].data = old._attachments['photo1.jpg'].data;
                            doc._attachments['photo1.jpg'].content_type = old._attachments['photo1.jpg'].content_type;
                        }
                        if (doc._attachments['photo2.jpg'].data == '') {
                            doc._attachments['photo2.jpg'].data = old._attachments['photo2.jpg'].data;
                            doc._attachments['photo2.jpg'].content_type = old._attachments['photo2.jpg'].content_type;
                        }
                        let newDoc = await db.put(doc, { force: true });
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
            let pitDoc = await db.get(`pit_${$('#teamNumber').val()}`, { attachments: true, binary: true });
            hide();
            show(pitDoc);
        } catch (err) {
            hide();
        }
    }
});