export type ModuleFederationConfig = {
	entry: Record<string, string>;
	shared: Record<string, { eager: boolean }>;
};

export const moduleFederationPlugin = (config: ModuleFederationConfig) => {
	return {
		name: '@module-federation/vite',
		async config() {
			console.log('await federationBuilder.init', config.entry, config.shared);
		},
		async closeBundle() {
			console.log('await federationBuilder.build()');
		},
	};
};
