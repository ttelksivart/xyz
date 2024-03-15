class UIManager {
	displayBlinkingUIMessage(content, position) {
		const message0 = add([
			text(content, {
				size:34,
			}),
			area(),
			anchor("center"),
			pos(380,520),
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
			pos(380,350),
			scale(1),])
	this.displayBlinkingUIMessage(
		"spacebar = power switch")
	onKeyPress("space", () => {
		go("menu1")
	})
	}
	displayMenu() {
		add([sprite("back00"),
			anchor("center"),
			pos(380,350),
			scale(1),])
		add([sprite("menu00"),
			anchor("center"),
			pos(380,255),
			scale(3)])
		add([sprite("menu00"),
			anchor("center"),
			pos(380,350),
			scale(3)])
		add([sprite("menu00"),
			anchor("center"),
			pos(380,445),
			scale(3)])
	}
	displayFrame() {
		add([sprite('frame'),])
		add([sprite("button01"),
			anchor("center"),
			pos(585, 825),
			scale(6.5)])
		add([sprite("button01"),
			anchor("center"),
			pos(460, 865),
			scale(6.5)])
		onKeyPress("space", () => {
			go("menu0")
		})
	}
	displayFrameOFF() {
		add([sprite('frameOFF'),])
		add([sprite("button01"),
			anchor("center"),
			pos(585, 825),
			scale(6.5)])
		add([sprite("button01"),
			anchor("center"),
			pos(460, 865),
			scale(6.5)])
	}
	}
export const uiManager = new UIManager()