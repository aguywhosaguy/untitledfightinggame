namespace Enums {
	export enum Body {
		Legs = "Legs",
		Arms = "Arms"
	}
}

namespace Constants {
	export const BodyParts = {
		"Left Leg": Enums.Body.Legs,
		"Right Leg": Enums.Body.Legs,
		"Left Arm": Enums.Body.Arms,
		"Right Arm": Enums.Body.Arms
	};
}
export { Enums, Constants };
