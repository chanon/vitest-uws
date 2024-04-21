Update: the fix is to use --pool=forks

# vitest-uws
Reproduction of Vitest not working with uwebsockets

The test code in `tests/minimal.test.ts`:
```
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
```

Run 
```
pnpm install
pnpm vitest
```

Result:

![image](https://github.com/chanon/vitest-uws/assets/357737/d31ac65f-367d-4059-93f6-eed65266dc9a)

Comment `App()` call and run again.

Result:

![image](https://github.com/chanon/vitest-uws/assets/357737/b4f83297-e2fd-40b6-976f-488544185cb9)

