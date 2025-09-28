# Maintainer Binu Udayakumar <binu@dronasys.com>

# import config.
# You can change the default config with `make cnf="config_special.env" build`
# use build_staging.env for staging server (local too)

# Optional environmental variables

REPO=dronasys-com
APP=ngx-simple-tools
ANGULAR_CLI_DEV=angular-cli-headless-chrome

BUILD_VER ?= a1.0.0

DOCKER_HUB_TAG ?= a1.0.0

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help
help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

build: ## build all libraries in this project
	ng build ngx-simple-tools

test: ## run angular tests, if you are running within docker, container must container chromium headless
	ng test ngx-simple-tools

run-lib: ## run the lib watching for changes
	ng build ngx-simple-tools --watch

run: ## runs the angular demo project
	ng serve
	
publish: ## publish to npm - cd dist/ngx-simple-tools/  && npm publish   	
#	cd dist/ngx-simple-tools/  && npm publish   	