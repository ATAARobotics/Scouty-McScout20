---
layout: default
title: Pit
files: |
 <script src="../resources/js/pit.js"></script>
---
<div id='spinner'></div>
<div id='status'>0</div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
    <form>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" for="teamNumber">Team Number</label>
                <input id="teamNumber" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Team Number">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-5">
                <label class="mr-sm-2" style="display: block" for="robotAppearance">Overall Appearance:</label>
                <div id="robotAppearance" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="appearance1" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotAppearance" id="appearance1" autocomplete="off"> 1
                    </label>
                    <label id="appearance2" class="btn btn-secondary">
                        <input type="radio" value="2" name="robotAppearance" id="appearance2" autocomplete="off"> 2
                    </label>
                    <label id="appearance3" class="btn btn-secondary">
                        <input type="radio" value="3" name="robotAppearance" id="appearance3" autocomplete="off"> 3
                    </label>
                    <label id="appearance4" class="btn btn-secondary">
                        <input type="radio" value="4" name="robotAppearance" id="appearance4" autocomplete="off"> 4
                    </label>
                    <label id="appearance5" class="btn btn-secondary">
                        <input type="radio" value="5" name="robotAppearance" id="appearance5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-lg-4 col-md-5 col-7">
                <label class="mr-sm-2" style="display: block" for="cellIntake">Intake</label>
                <div id="cellIntake" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="groundCellIntake" class="btn btn-secondary">
                        <input type="radio" value="cargo" name="cellIntake" id="groundCellIntake" autocomplete="off">
                        Ground
                    </label>
                    <label id="stationCellIntake" class="btn btn-secondary">
                        <input type="radio" value="hatch" name="cellIntake" id="stationCellIntake" autocomplete="off">
                        Station
                    </label>
                    <label id="noCellIntake" class="btn btn-secondary">
                        <input type="radio" value="both" name="CellIntake" id="noCellIntake" autocomplete="off">
                        None
                    </label>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-4">
                <label class="mr-sm-2" style="display: block" for="climbType">Can Climb and Balance?</label>
                <div id="climbLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="noClimb" class="btn btn-secondary">
                        <input type="radio" value="1" name="climbType" id="noClimb" autocomplete="off"> Neither
                    </label>
                    <label id="onlyClimb" class="btn btn-secondary">
                        <input type="radio" value="2" name="climbType" id="onlyClimb" autocomplete="off"> Climb
                    </label>
                    <label id="balanceClimb" class="btn btn-secondary">
                        <input type="radio" value="3" name="climbType" id="balanceClimb" autocomplete="off"> Both
                    </label>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
                <label class="mr-sm-2" style="display: block" for="cellLowLevel">Low Goal</label>
                <div id="cellLowLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="yesCellLow" class="btn btn-secondary">
                        <input type="radio" value="1" name="cellLowLevel" id="yesCellLow" autocomplete="off">
                        Yes
                    </label>
                    <label id="noCellLow" class="btn btn-secondary">
                        <input type="radio" value="0" name="cellLowLevel" id="noCellLow" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
                <label class="mr-sm-2" style="display: block" for="cellHighLevel">High Goal</label>
                <div id="cellHighLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="yesCellHigh" class="btn btn-secondary">
                        <input type="radio" value="1" name="cellHighLevel" id="yesCellHigh" autocomplete="off">
                        Yes
                    </label>
                    <label id="noCellHigh" class="btn btn-secondary">
                        <input type="radio" value="0" name="cellHighLevel" id="noCellHigh" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
                <label class="mr-sm-2" style="display: block" for="cellInnerLevel">Inner Goal</label>
                <div id="cellInnerLevel" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="yesCellInner" class="btn btn-secondary">
                        <input type="radio" value="1" name="cellInnerLevel" id="yesCellInner" autocomplete="off">
                        Yes
                    </label>
                    <label id="noCellInner" class="btn btn-secondary">
                        <input type="radio" value="0" name="cellInnerLevel" id="noCellInner" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="robotDone">Robot Done</label>
                <div id="robotDone" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotDoneYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotDone" id="robotDoneYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotDoneNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotDone" id="robotDoneNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="robotBroken">Anything Broken?</label>
                <div id="robotBroken" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotBrokenYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotBroken" id="robotBrokenYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotBrokenNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotBroken" id="robotBrokenNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-6">
                <div>
                    <img class="img-fluid" style="margin-top: 15px; display:none" alt="No Image" id="robotPhoto1Preview" />
                </div>
                <label class="mr-sm-2" style="display: block" for="robotPhoto1">Robot Photo 1</label>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <button id='newPicture1' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Take
                            Picture</button>
                    </div>
                    <div class="col-sm-6 col-12">
                        <button id='existingPicture1' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Use
                            Existing</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-6">
                <div>
                    <img class="img-fluid" style="margin-top: 15px; display:none" alt="No Image" id="robotPhoto2Preview" />
                </div>
                <label class="mr-sm-2" style="display: block" for="robotPhoto2">Robot Photo 2</label>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <button id='newPicture2' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Take
                            Picture</button>
                    </div>
                    <div class="col-sm-6 col-12">
                        <button id='existingPicture2' class="btn btn-info" type="button" style="width: 100%; margin-bottom: 15px">Use
                            Existing</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="commentSection">Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:100px" id="commentSection"></textarea>
            </div>
        </div>
        <button id="Submit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Submit</button>
    </form>
</div>