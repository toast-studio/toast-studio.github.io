const appVersion = "1.1";
const appName = "Rebar";
const appDomain = "https://toast-studio.com/";
const appPrivacyPolicy = "https://toast-studio.com/";
const appEmail = "toaststudioinbox@gmail.com";
const appReleaseNotes = [
	`See Version History for the full changelog`,
];
const appThemes = {
	system: "Match Device Appearance",
	light: "Always Light",
	dark: "Always Dark",
	custom: "Custom Theme",
};
const appAccents = {
	default: "Rebar",
	custom: "Custom",
	red: "Red",
	orange: "Orange",
	yellow: "Yellow",
	green: "Green",
	blue: "Blue",
	purple: "Purple",
	pink: "Pink",
	graphite: "Graphite",
	ired: "iMac Red",
	iorange: "iMac Orange",
	iyellow: "iMac Yellow",
	igreen: "iMac Green",
	iblue: "iMac Blue",
	ipurple: "iMac Purple",
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
		accent: ["default"],
		appearance: ["system"],
		dynamicTypeSize: {
			value: "medium",
			label: "Medium",
		},
		textWeight: "regular",
		increaseContrast: "less",
		reduceMotion: "off",
		firstRun: null,
		openings: 1,
		clickedDonationLink: false,
	},
}
const baseTimeLength = "0.3s";
const dynamicTypeSizes = {
	small: "12px",
	medium: "16px",
	large: "24px",
};
const promptForTips = true;
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