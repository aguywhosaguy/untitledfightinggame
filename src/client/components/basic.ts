import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Fighter } from "./fighter";

@Component({
	tag: "basic"
})
export class Basic extends BaseComponent implements OnStart {
	constructor(private fighterComponent: Fighter) {
		super();
	}

	onStart() {
		print("Basic");
	}
}
