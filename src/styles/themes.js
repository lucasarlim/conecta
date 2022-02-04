export const THEME = {
	brand_900: '#192436',
	brand_800: '#2A3C57',
	brand_700: '#3D5578',
	brand_600: '#516F99',
	brand_500: '#6789BA',
	brand_400: '#96B5E0',
	brand_300: '#B5C9E6',
	brand_200: '#9DBDEB',
	brand_100: '#BDD2F0',
	brand_50: '#E0E8F5',
	title: '#17273D',
	primaryText: '#17273D',
	captionText: '#808995',
	whiteText: '#FFFFFF',
	background: '#F8F8F9',
	tableHeader: '#F5F5F5',
	divider: '#E8EAEC',
	border: '#DCDEE2',
};

export const useTheme = {
	brand_900: ({ theme }) => theme.brand_900,
	brand_800: ({ theme }) => theme.brand_800,
	brand_700: ({ theme }) => theme.brand_700,
	brand_600: ({ theme }) => theme.brand_600,
	brand_500: ({ theme }) => theme.brand_500,
	brand_400: ({ theme }) => theme.brand_400,
	brand_300: ({ theme }) => theme.brand_300,
	brand_200: ({ theme }) => theme.brand_200,
	brand_100: ({ theme }) => theme.brand_100,
	brand_50: ({ theme }) => theme.brand_50,
	
	title: ({ theme }) => theme.title,
	primaryText: ({ theme }) => theme.primaryText,
	captionText: ({ theme }) => theme.captionText,
	whiteText: ({ theme }) => theme.whiteText,
	divider: ({ theme }) => theme.divider,
	background: ({ theme }) => theme.background,
	border: ({ theme }) => theme.border,
	tableHeader: ({ theme }) => theme.tableHeader,
};

export default THEME;