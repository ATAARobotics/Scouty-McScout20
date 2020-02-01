---
layout: default
title: Match
files: |
 <script src="./resources/js/match.js"></script>
---
<div id='spinner'></div>
<div id='status'>0</div>
<div id='page' class="container-fluid" style="background-color: #f0f0f0; margin-bottom: 15px">
    <form>
        <div class="row">
            <div class="col">
                <h2>General</h2>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" for="matchNumber">Match Number</label>
                <input id="matchNumber" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Match Number">
            </div>
            <div class="col">
                <label class="mr-sm-2" for="teamNumber">Team Number</label>
                <input id="teamNumber" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                    autocomplete="off" type="tel" class="form-control" placeholder="Team Number">
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md">
                <h2>Autonomous</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="startingLocation">Starting Location</label>
                <div id="startingLocation" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="startingLocationl1" class="btn btn-secondary">
                        <input type="radio" value="1" name="startingLocation" id="startingLocation1" autocomplete="off">
                        Left
                    </label>
                    <label id="startingLocationl2" class="btn btn-secondary">
                        <input type="radio" value="2" name="startingLocation" id="startingLocation2" autocomplete="off">
                        Middle
                    </label>
                    <label id="startingLocationl3" class="btn btn-secondary">
                        <input type="radio" value="3" name="startingLocation" id="startingLocation3" autocomplete="off">
                        Right
                    </label>
                </div>
            </div>
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="movedBaseline">Moved From Baseline</label>
                <div id="movedBaseline" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="movedBaselineYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="movedBaseline" id="movedBaselineYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="movedBaselineNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="movedBaseline" id="movedBaselineNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 15px">
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsPickup">Cells Picked Up</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoPickup_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsPickup" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoPickup_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsDropped">Cells Dropped/Missed</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoDrop_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsDropped" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoDrop_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsLow">Cells in Low Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoLow_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsLow" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoLow_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsHigh">Cells in High Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoHigh_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsHigh" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoHigh_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsInner">Cells in Inner Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoInner_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsInner" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoInner_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="autoCellsAssist">Cells Assisted</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyAutoAssist_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="autoCellsAssist" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyAutoAssist_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
        </div>
        <hr />
        <div class="row">
            <div class="col">
                <h2>Teleoperated</h2>
            </div>
        </div>
        <div class="row" style="margin-bottom: 15px">
                <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsPickup">Cells Picked Up</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopPickup_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsPickup" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopPickup_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsDropped">Cells Dropped/Missed</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopDrop_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsDropped" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopDrop_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsLow">Cells in Low Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopLow_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsLow" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopLow_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsHigh">Cells in High Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopHigh_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsHigh" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopHigh_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsInner">Cells in Inner Goal</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopInner_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsInner" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopInner_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
            </div>
            <div class="col-lg col-md-3 col-sm-4 col-6">
				<div class="row">
					<div class="col-md">
						<label style="margin-bottom: 0px" for="teleopCellsAssist">Cells Assisted</label>
					</div>
				</div>
				<div class="row" style="margin-top:15px">
					<div class="col-md input-group">
						<a onclick="modifyTeleopAssist_qty(-1)" class="btn btn-danger btn-lg" style="width: 50px; height: 50px; margin-right: 15px;" role="button">-</a>
						<input id="teleopCellsAssist" maxlength="2" onkeypress='return event.charCode >= 48 && event.charCode <= 57' autocomplete="off"
						 type="tel" class="form-control" value="0">
						<a onclick="modifyTeleopAssist_qty(1)" class="btn btn-success btn-lg" style="width: 50px; height: 50px; margin-left: 15px;" role="button">+</a>
					</div>
				</div>
			</div>
        </div>
        <div class="row" style="margin-bottom: 15px">
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="rotationControl">Rotation Control</label>
                <div id="rotationControl" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="rotationControlYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="rotationControl" id="rotationControlYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="rotationControlNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="rotationControl" id="rotationControlNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
            <div class="col-6">
                <label class="mr-sm-2" style="display: block" for="positionControl">Position Control</label>
                <div id="positionControl" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="positionControlYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="positionControl" id="positionControlYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="positionControlNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="positionControl" id="positionControlNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col">
              <h2>Endgame</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="selfClimb">Climbed</label>
                    <div id="selfClimb" class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label id="selfClimbYes" class="btn btn-secondary">
                            <input type="radio" value="1" name="selfClimb" id="selfClimbYes" autocomplete="off">
                            Yes
                        </label>
                        <label id="selfClimbNo" class="btn btn-secondary">
                            <input type="radio" value="0" name="selfClimb" id="selfClimbNo" autocomplete="off">
                            No
                        </label>
                    </div>
            </div>
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="selfPark">Parked</label>
                    <div id="selfPark" class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label id="selfParkYes" class="btn btn-secondary">
                            <input type="radio" value="1" name="selfPark" id="selfParkYes" autocomplete="off">
                            Yes
                        </label>
                        <label id="selfParkNo" class="btn btn-secondary">
                            <input type="radio" value="0" name="selfPark" id="selfParkNo" autocomplete="off">
                            No
                        </label>
                    </div>
            </div>
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="totalClimb">Total Climbs</label>
                <div id="totalClimb" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="totalClimb0" class="btn btn-secondary">
                        <input type="radio" value="0" name="totalClimb" id="totalClimb0" autocomplete="off">
                            0
                    </label>
                    <label id="totalClimb1" class="btn btn-secondary">
                        <input type="radio" value="1" name="totalClimb" id="totalClimb1" autocomplete="off">
                            1
                    </label>
                    <label id="totalClimb2" class="btn btn-secondary">
                        <input type="radio" value="2" name="totalClimb" id="totalClimb2" autocomplete="off">
                        2
                    </label>
                    <label id="totalClimb3" class="btn btn-secondary">
                        <input type="radio" value="3" name="totalClimb" id="totalClimb3" autocomplete="off">
                        3
                    </label>
                </div>
            </div>
            <div class="col-3">
                <label class="mr-sm-2" style="display: block" for="balanced">Balanced</label>
                <div id="balanced" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="balancedYes" class="btn btn-secondary">
                    <input type="radio" value="1" name="balanced" id="balancedYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="balancedNo" class="btn btn-secondary">
                    <input type="radio" value="0" name="balanced" id="balancedNo" autocomplete="off">
                        No
                    </label>
                </div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col">
                <h2>General</h2>
            </div>
        </div>
        <div class='row' style="margin-bottom: 15px">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="speedRating">Speed</label>
                <div id="speedRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="speed1" class="btn btn-secondary">
                        <input type="radio" value="1" name="speedRating" id="speed1" autocomplete="off"> 1
                    </label>
                    <label id="speed2" class="btn btn-secondary">
                        <input type="radio" value="2" name="speedRating" id="speed2" autocomplete="off"> 2
                    </label>
                    <label id="speed3" class="btn btn-secondary">
                        <input type="radio" value="3" name="speedRating" id="speed3" autocomplete="off"> 3
                    </label>
                    <label id="speed4" class="btn btn-secondary">
                        <input type="radio" value="4" name="speedRating" id="speed4" autocomplete="off"> 4
                    </label>
                    <label id="speed5" class="btn btn-secondary">
                        <input type="radio" value="5" name="speedRating" id="speed5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="stabilityRating">Stability</label>
                <div id="stabilityRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="stability1" class="btn btn-secondary">
                        <input type="radio" value="1" name="stabilityRating" id="stability1" autocomplete="off"> 1
                    </label>
                    <label id="stability2" class="btn btn-secondary">
                        <input type="radio" value="2" name="stabilityRating" id="stability2" autocomplete="off"> 2
                    </label>
                    <label id="stability3" class="btn btn-secondary">
                        <input type="radio" value="3" name="stabilityRating" id="stability3" autocomplete="off"> 3
                    </label>
                    <label id="stability4" class="btn btn-secondary">
                        <input type="radio" value="4" name="stabilityRating" id="stability4" autocomplete="off"> 4
                    </label>
                    <label id="stability5" class="btn btn-secondary">
                        <input type="radio" value="5" name="stabilityRating" id="stability5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="defenseRating">Defense</label>
                <div id="defenseRating" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="defenseNA" class="btn btn-secondary">
                        <input type="radio" value="0" name="defenseRating" id="defenseNA" autocomplete="off"> NA
                    </label>
                    <label id="defense1" class="btn btn-secondary">
                        <input type="radio" value="1" name="defenseRating" id="defense1" autocomplete="off"> 1
                    </label>
                    <label id="defense2" class="btn btn-secondary">
                        <input type="radio" value="2" name="defenseRating" id="defense2" autocomplete="off"> 2
                    </label>
                    <label id="defense3" class="btn btn-secondary">
                        <input type="radio" value="3" name="defenseRating" id="defense3" autocomplete="off"> 3
                    </label>
                    <label id="defense4" class="btn btn-secondary">
                        <input type="radio" value="4" name="defenseRating" id="defense4" autocomplete="off"> 4
                    </label>
                    <label id="defense5" class="btn btn-secondary">
                        <input type="radio" value="5" name="defenseRating" id="defense5" autocomplete="off"> 5
                    </label>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                <label class="mr-sm-2" style="display: block" for="primaryDefense">Primary Defense Bot</label>
                <div id="primaryDefense" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="primaryDefenseYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="primaryDefense" id="primaryDefenseYes" autocomplete="off"> Yes
                    </label>
                    <label id="primaryDefenseNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="primaryDefense" id="primaryDefenseNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 15px">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="anythingBreak">Did Anything Break?</label>
                <div id="anythingBreak" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="anythingBreakYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="anythingBreak" id="anythingBreakYes" autocomplete="off">
                        Yes
                    </label>
                    <label id="anythingBreakNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="anythingBreak" id="anythingBreakNo" autocomplete="off"> 
                        No
                    </label>
                </div>
            </div>
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="robotDead">Robot Dead, Disabled, Disconnected</label>
                <div id="robotDead" class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="robotDeadYes" class="btn btn-secondary">
                        <input type="radio" value="1" name="robotDead" id="robotDeadYes" autocomplete="off"> Yes
                    </label>
                    <label id="robotDeadNo" class="btn btn-secondary">
                        <input type="radio" value="0" name="robotDead" id="robotDeadNo" autocomplete="off"> No
                    </label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="autoCommentSection">Auto Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:75px" id="autoCommentSection"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="teleopCommentSection">Teleop Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:75px" id="teleopCommentSection"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="endgameCommentSection">Endgame Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:75px" id="endgameCommentSection"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="mr-sm-2" style="display: block" for="generalCommentSection">General Notes and Comments</label>
                <textarea autocomplete="off" style="width: 100%; height:75px" id="generalCommentSection"></textarea>
            </div>
        </div>
        <button id="Submit" class="btn btn-success" type="button" style="margin-top: 15px; margin-bottom: 15px">Submit</button>
    </form>
</div>