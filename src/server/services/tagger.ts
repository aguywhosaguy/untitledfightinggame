import { Service, OnStart, OnInit } from "@flamework/core";
import { CollectionService, Players } from "@rbxts/services";

@Service({})
export class Tagger implements OnStart, OnInit {
	onInit() {}

	onStart() {
		Players.PlayerAdded.Connect((player: Player) => {
			player.CharacterAdded.Connect((character: Model) => {
				CollectionService.AddTag(character, "fighter");
				CollectionService.AddTag(character, "basic");
			});
		});
	}
}
