const config = {
	gitRepositoryURL: 'https://github.com/woocommerce/woocommerce.git',
	setupTestRunner:
		'npm install -g pnpm && pnpm install --filter="@woocommerce/plugin-woocommerce" &> /dev/null && cd plugins/woocommerce && pnpm exec playwright install chromium',
	setupCommand:
		'npm install -g pnpm && pnpm install &> /dev/null && pnpm build &> /dev/null',
	pluginPath: '/plugins/woocommerce',
	testsPath: '/plugins/woocommerce/tests/metrics/specs',
	testCommand:
		'npm install -g pnpm && cd plugins/woocommerce && pnpm test:metrics',
};

module.exports = config;
