import { test } from "vitest"
import { App } from 'uWebSockets.js'

test("test it", async () => {
	try {
		console.log('before App()')
		// try commenting out the App() call
		App()
		console.log('after App()')
	}
	catch (e) {
		console.log(e)
	}
})