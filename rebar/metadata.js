const appVersion = "1.0";
const appName = "Rebar";
const appDomain = "https://toast-studio.com/";
const appEmail = "toaststudioinbox@gmail.com";
const appReleaseNotes = [
	`Added Compare Models which displays all models in a table to make it easy to compare them`,
	`Added Data Sets as a way to view data from different OS releases`,
	`Choose to view measurements in Points or Pixels`,
	`Middle clicking will now open device information pages in a new tab`,
	`A tip jar has been added if you wish to help support Screen Sizes (which will always remain free to use)`,
	`Updated Last Supported By for iOS 15, iPadOS 15, watchOS 8, and tvOS 15`,
	`Added Extra Large widget size to the 2021 Data Set`,
	`All iPad widget sizes have been updated in the 2021 Data Set`,
	`Added Center Window multitasking size in the 2021 Data Set (Center Window Size Classes will come in a future update when I have that data)`,
	`Select your preferred accent colour to match your selection on macOS`,
	`Updated the styling of Settings on macOS to better fit in`,
	`Corrected model names for all Apple TVs (deep link URLs have changed to match)`,
	`Corrected resolution data for 1st, 2nd, and 3rd Gen iPod touches`,
	`Corrected a label in the iPad Multitasking section`,
	`Added missing zoomed widget sizes for iPhone 8 Plus and iPhone 7 Plus`,
	`Improved the model images for all Apple TVs`,
	`Improved the display shape images for all Apple Watches`,
	`Renamed some iPhone display names to make them a bit clearer`,
	`Press "C" to switch to the Comparison table`,
	`Press "D" to switch to Data Sets`,
	`Press "/" to focus the search field on the Comparison table`,
	`Press "Control" instead of "Shift" to view the Shortcuts panel (this will no longer interfere with taking screenshots)`,
	`Decreased the transition time when changing screens on mobile`,
	`When you initially load Screen Sizes, your View setting is now respected`,
	`Added Acknowledgements page`
];
const appThemes = ["system", "light", "dark", "custom"];
const appAccents = ["default", "custom", "red", "orange", "yellow", "green", "blue", "purple", "pink", "graphite", "ired", "iorange", "iyellow", "igreen", "iblue", "ipurple"];
const appTextSizes = {
	small: "Small",
	medium: "Medium",
	large: "Large"
};
const appTextWeights = {
	light: "Light",
	regular: "Regular",
	bold: "Bold",
};
const baseTimeLength = "0.3s";
const urlParam = "source";
const dynamicTypeSizes = {
	small: "12px",
	medium: "16px",
	large: "24px",
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