class UIManager {
	displayBlinkingUIMessage(content, position) {
		const message0 = add([
			text(content, {
				size:32,
			}),
			area(),
			anchor("center"),
			pos(300,160),
			opacity(),
			state("flash-up", ["flash-up", "flash-down"])
			])
		message0.onStateEnter("flash-up", async () => {
			await tween(
				message0.opacity,
				0,
				0.69,
				(nextOpacityValue) => message0.opacity = nextOpacityValue,
				easings.linear
				)
			message0.enterState("flash-down")
		})
		message0.onStateEnter("flash-down", async () => {
			await tween(
				message0.opacity,
				1,
				0.69,
				(nextOpacityValue) => message0.opacity = nextOpacityValue,
				easings.linear
				)
			message0.enterState("flash-up")
		})
	}
	displaySpaceMenu() {
		add([sprite("black"),
			anchor("center"),
			pos(285,300),
			scale(1),])
	this.displayBlinkingUIMessage(
		"REMEMBER TO SAVE!")
	onKeyPress("space", () => {
		go("menu1")
	})
	}
	displayMenu() {
		add([sprite("back00"),
			anchor("center"),
			pos(285,260),
			scale(.8),])
		add([sprite("menu00"),
			anchor("center"),
			pos(295,175),
			scale(2.5)])
		add([sprite("menu00"),
			anchor("center"),
			pos(295,260),
			scale(2.5)])
		add([sprite("menu00"),
			anchor("center"),
			pos(295,345),
			scale(2.5)])

	}
	displayFrame() {
		add([sprite("frame"),])
		add([sprite("pwrbutton"),
			anchor("center"),
			pos(58, 440),
			scale(3)])
		add([sprite("button00"),
			anchor("center"),
			pos(515, 620),
			scale(6.25)])
		add([sprite("button01"),
			anchor("center"),
			pos(400, 650),
			scale(6.25)])
		add([sprite("button02"),
			anchor("center"),
			pos(480, 730),
			scale(6.25)])
		add([sprite("button03"),
			anchor("center"),
			pos(140, 600),
			scale(5.69)])
		add([sprite("button03"),
			anchor("center"),
			pos(140, 770),
			scale(5.69),
			rotate(180)])
		add([sprite("button03"),
			anchor("center"),
			pos(225, 685),
			scale(5.69),
			rotate(90)])
		add([sprite("button03"),
			anchor("center"),
			pos(55, 685),
			scale(5.69),
			rotate(270)])
		onKeyPress("space", () => {
			go("menu0")
		})
	}
	displayFrameOFF() {
		add([sprite('frameOFF'),])
		add([sprite("pwrbutton"),
			anchor("center"),
			pos(58, 440),
			scale(3)])
		add([sprite("button00"),
			anchor("center"),
			pos(515, 620),
			scale(6.25)])
		add([sprite("button01"),
			anchor("center"),
			pos(400, 650),
			scale(6.25)])
		add([sprite("button02"),
			anchor("center"),
			pos(480, 730),
			scale(6.25)])
		add([sprite("button03"),
			anchor("center"),
			pos(140, 600),
			scale(5.69)])
		add([sprite("button03"),
			anchor("center"),
			pos(140, 770),
			scale(5.69),
			rotate(180)])
		add([sprite("button03"),
			anchor("center"),
			pos(225, 685),
			scale(5.69),
			rotate(90)])
		add([sprite("button03"),
			anchor("center"),
			pos(55, 685),
			scale(5.69),
			rotate(270)])
	}
	}
export const uiManager = new UIManager()