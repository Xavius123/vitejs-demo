import { defineConfig } from 'vitest/config';

// test: {
// 	globals: true,
// 	environment: "jsdom",
// 	include: ["**/*.test.{ts,tsx}"],
// 	setupFiles: ["./src/test/setup.ts"],
// 	css: true,
// 	reporters: ['default', 'html'],
// 	coverage: {
// 		reportsDirectory: "html/ui",
// 		include: ["**/*.{ts,tsx}"],
// 		exclude: ["src/test/**/*.{ts,tsx}"],
// 		reporter: ['text', ['html', { subdir: 'coverage'}]],
// 		provider: "v8",
// 	}
// },

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        coverage: {
            reportsDirectory: 'html/ui',
            include: ['**/*.{ts,tsx}'],
            exclude: ['src/test/**/*.{ts,tsx}'],
            reporter: ['text', ['html', { subdir: 'coverage' }]],
            provider: 'v8',
        },
    },
});
