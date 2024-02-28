# Install pnpm and lerna
deps-platform:
	npm install --global --force pnpm@6.32.11 lerna

# Install JS packages
deps-project:
	pnpm install --frozen-lockfile

# Preprocess resources required to test or build packages
prepare:
	lerna run build

# Run lint / static testing
lint:
	lerna run lint

format-check:
	lerna run format:check

# Local bearer is expected in ./bin/bearer
LOCAL_BEARER := ./bin/bearer
BEARER_CONFIG := ./bearer.yml

# Run bearer; installs if not already installed, then loops through each package and runs bearer if it has a JS folder and a package.json
# Skips ui-icons as the files are trivial and it slows down the testing a lot
bearer:
	@if [ ! -f "$(LOCAL_BEARER)" ]; then \
		echo "Installing Bearer"; \
		curl -sfL https://raw.githubusercontent.com/Bearer/bearer/main/contrib/install.sh | sh; \
	fi

	@for package in $(shell ls packages) ; do \
		if [ -d "packages/$$package/src" ]; then \
			if [ $$package = "ui-icons" ]; then \
				continue; \
			fi; \
			echo "Running Bearer for $$package"; \
			cd packages/$$package && ../../$(LOCAL_BEARER) scan src --force --config-file ../../$(BEARER_CONFIG); \
			EXIT_CODE=$$?; \
			if [ $$EXIT_CODE -ne 0 ]; then \
				exit $$EXIT_CODE; \
			fi; \
			cd ../..; \
		fi \
	done


# Run tests
test:
	lerna run test

version-patch:
	@lerna version patch --no-git-tag-version --force-publish --yes && pnpm i --lockfile-only && borg version patch && borg lock

version-minor:
	@lerna version minor --no-git-tag-version --force-publish --yes && pnpm i --lockfile-only && borg version minor && borg lock

version-major:
	@lerna version major --no-git-tag-version --force-publish --yes && pnpm i --lockfile-only && borg version major && borg lock
# Publish all the packages to the appropriate repositories
publish:
	git reset --hard
	echo "//registry.npmjs.org/:_authToken=$${NPMJS_TOKEN}" >> .npmrc
	git update-index --assume-unchanged .npmrc
	lerna publish from-package --yes --no-git-reset --no-push --no-git-tag-version --force-publish
	sed -i '$$ d' .npmrc

# Clean development artifacts from the repository
clean:
	git clean -xfd .
