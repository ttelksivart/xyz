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

	}
	displayFrame() {
		add([sprite('frame'),])
		onKeyPress("space", () => {
			go("menu0")
		})
	}
	displayFrameOFF() {
		add([sprite('frameOFF'),])
	}
	}
export const uiManager = new UIManager()