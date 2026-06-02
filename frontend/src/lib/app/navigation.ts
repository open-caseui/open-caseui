export type AppNavItem = {
	label: string;
	href: `/app/${string}`;
	description: string;
};

export type AppNavGroup = {
	label: string;
	items: AppNavItem[];
};

export const appNavGroups: AppNavGroup[] = [
	{
		label: 'Case Types',
		items: [
			{
				label: 'Case Type Builder',
				href: '/app/case-type-builder',
				description: 'Define intake fields, statuses, roles, and case templates.'
			},
			{
				label: 'Case Type Library',
				href: '/app/case-type-library',
				description: 'Browse reusable case type patterns and starter templates.'
			}
		]
	},
	{
		label: 'Cases',
		items: [
			{
				label: 'Cases',
				href: '/app/cases',
				description: 'Track active, pending, and closed case records.'
			}
		]
	},
	{
		label: 'Workflows',
		items: [
			{
				label: 'Workflow Builder',
				href: '/app/workflow-builder',
				description: 'Design milestones, automations, and approval steps.'
			},
			{
				label: 'Workflow Library',
				href: '/app/workflow-library',
				description: 'Review reusable workflow blueprints for common matter types.'
			}
		]
	},
	{
		label: 'AI',
		items: [
			{
				label: 'Chat',
				href: '/app/chat',
				description: 'Ask questions across selected case context.'
			},
			{
				label: 'AI Agents',
				href: '/app/ai-agents',
				description: 'Configure task-focused agents for review, drafting, and triage.'
			},
			{
				label: 'Context',
				href: '/app/context',
				description: 'Manage the knowledge and case data available to AI features.'
			}
		]
	}
];

export const appFooterItems: AppNavItem[] = [
	{
		label: 'Settings',
		href: '/app/settings',
		description: 'Manage workspace preferences, members, and app configuration.'
	},
	{
		label: 'Documentation',
		href: '/app/documentation',
		description: 'Read implementation notes, concepts, and user guides.'
	}
];

export const appVersion = '0.0.1';

export const appNavItems = [...appNavGroups.flatMap((group) => group.items), ...appFooterItems];
