// import modules
import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
// init kaboomjs
kaboom({
	width: 750,
	height: 1330,
	scale: 0.69,
})
load.assets()
// scenes
const scenes = {
	menu0: () => {
		uiManager.displaySpaceMenu();
		uiManager.displayFrameOFF()
	},
	menu1: () => {
		uiManager.displayMenu();
		uiManager.displayFrame()
	},
	sett: () => {

		uiManager.displayFrame();
	},
	controls: () => {

		uiManager.displayFrame();
	},
	lvl0: () => {

		uiManager.displayFrame();
	},
	overWrld: () => {

		uiManager.displayFrame();
	},
	gameover: () => {

		uiManager.displayFrame();
	},
	win: () => {

		uiManager.displayFrame();
	},
}
// scenes - loop
for (const key in scenes) {
	scene(key, scenes[key])
}
// game start - 1st scene "menu"
go("menu0")