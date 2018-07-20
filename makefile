#.PHONY: run

run:
	@echo "All apps started and running"
	@echo "  API:          http://localhost:3000"
	@./node_modules/.bin/nodemon "npm start"