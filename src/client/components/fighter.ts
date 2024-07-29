import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";

@Component({
	tag: "fighter"
})
export class Fighter extends BaseComponent implements OnStart {
	onStart() {
		print("You are a fighter. Your fighter is:");
	}
}
