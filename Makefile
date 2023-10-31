.PHONY: default
default: install dev

.PHONY: install
install:
	pnpm install

.PHONY: dev build lint
dev build start lint:
	pnpm run $@