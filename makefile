# .PHONY: run
run:
	@./node_modules/.bin/concurrently "cd api && npm start"
