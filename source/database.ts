import PouchDB from 'pouchdb-react-native';

const db = new PouchDB("teamdb");

type MatchType = "qualification" | "practice";

export type ClimbLevel = 0 | 1 | 2 | 3 | 4;

export interface MatchInfo {
	type: "match_info",
	match: number | undefined,
	match_category: MatchType | undefined,
	team: number | undefined,
	auto: {
		exited_tarmac: boolean,
		starting_location: "left" | "middle" | "right" | undefined,
		cells_acquired: number,
		cells_dropped: number,
		low_goal_shots: number,
		high_goal_shots: number,
	},
	teleop: {
		cells_acquired: number,
		cells_dropped: number,
		low_goal_shots: number,
		high_goal_shots: number,
	},
	climb: {
		highest_attempted: ClimbLevel,
		highest_scored: ClimbLevel,
		fell: boolean,
	},
	speed: number | undefined,
	stability: number | undefined,
	defense: number | undefined,
	is_primary_defence: boolean,
	was_broken: boolean,
	was_disabled: boolean,
	notes: string,
};

export interface RobotInfo {
	type: "robot_info",
	team: number,
	// TODO
};

export function writeMatch(data: MatchInfo): boolean {
	if (data.match === undefined || data.match_category === undefined || data.team === undefined) {
		return false;
	}
	db.put({
		_id: `robot_info_${data.match.toString()}_${data.match_category.toString()}_${data.team.toString()}`,
		...data
	});
	return true;
}

export function writeRobot(data: RobotInfo) {
	db.put({
		_id: [data.team],
		...data
	});
}

export function readMatch(match: number, match_category: MatchType, team: number): MatchInfo {
	return db.get(["robot_info", match, match_category, team]);
}

export function readRobot(team: number): RobotInfo {
	return db.get(["match_info", team]);
}
