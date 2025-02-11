const appVersion = "2.3";
const appName = "Rebar";
const appDomain = "https://toast-studio.com/";
const appPrivacyPolicy = "https://toast-studio.com/";
const appEmail = "toaststudioinbox@gmail.com";
const appReleaseNotes = [
	`See Version History for the full changelog`,
	`Item 2`,
	`Item 3`,
	`Item 4`,
	`Item 5`,
];
const appThemes = {
	system: {
		name: "Device",
		iconGroup: "iconInterfaceElements",
		iconName: "appearance",
	},
	light: {
		name: "Light",
		iconGroup: "iconNature",
		iconName: "sunFill",
	},
	dark: {
		name: "Dark",
		iconGroup: "iconNature",
		iconName: "moonRightFill",
	},
	custom: {
		name: "Custom",
		iconGroup: "iconNature",
		iconName: "sparkleFill",
	},
};
const appAccents = {
	default: "Rebar",
	custom: "Custom",
};
const appTextSizes = {
	small: "Small",
	medium: "Medium",
	large: "Large"
};
const appPreferencesVersion = 1;
const appPreferencesDefault = {
	"rebar.appSettings": {
		version: 1,
		debug: false,
		os: "default",
		openings: 0,
		firstRun: null,
		accent: ["default"],
		appearance: ["system"],
		dynamicTypeSize: {
			value: "medium",
			label: "Medium",
		},
		textWeight: "regular",
		textFont: "system",
		increaseContrast: "less",
		reduceMotion: "off",
		clickedDonationLink: false,
		
	},
}
const topLevelRoute = "routesidebar";
const topLevelModifier = false;
const baseTimeLength = "0.3s";
const dynamicTypeSizes = {
	small: "12px",
	medium: "16px",
	large: "24px",
};
const promptForTips = true;
const tipsLinks = {
	default: "https://buy.stripe.com/fZe3fE6m8f2S2judQQ",
	custom: "https://buy.stripe.com/dR65nMcKw3ka0bm4gh",
};
const shortcutKeys = {
	"groupa": {
		"label": "Group A",
		"shortcutItems": [
			{
				"name": "Item A",
				"key": "A"
			},
			{
				"name": "Item B",
				"key": "B"
			},
			{
				"name": "Item C",
				"key": "C"
			},
			{
				"name": "Item D",
				"key": "D"
			}
		]
	},
	"groupb": {
		"label": "Group B",
		"shortcutItems": [
			{
				"name": "Test 1",
				"key": "X"
			},
			{
				"name": "Test 2",
				"key": "Y"
			},
			{
				"name": "Test 3",
				"key": "Z"
			}
		]
	},
	"realitems": {
		"label": "Group C",
		"shortcutItems": [
			{
				"name": "Search",
				"key": "/"
			},
			{
				"name": "Shortcuts Panel",
				"key": "ctrl"
			},
			{
				"name": "Info",
				"key": "I"
			},
			{
				"name": "Share",
				"key": "S"
			}
		]
	}
}