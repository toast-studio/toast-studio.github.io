$(document).ready(function(){
	let url = grabURLParameter()
		
	if (url.query == "") {
		//SMALL SCREENS
		if (window.matchMedia("(max-width: 1099px)").matches) {
			//LOAD LEVEL 1
			routesidebar({modifier: false, navtype: "deeplink"})
		}
		
		//LARGE SCREENS
		if (window.matchMedia("(min-width: 1100px)").matches) {
			//LOAD LEVEL 3
			routegettingstarted({modifier: "welcome", navtype: "deeplink"})
		}
	} else {
		//LOAD ROUTE FROM URL
		window["route" + url.query]({modifier: url.source, navtype: "deeplink"})
	}
});

function miniThemePicker() {
	summonSheet({
		type: "smallsheet",
		backing: "dark",
		theme: false,
		id: "themePicker",
		content: `
			<header class="containerToolbar">
				<div class="pinLeft"></div>
				<h1 class="headerToolbar">Display Options</h1>
				<div class="pinRight">
					<button class="transparent confirm" data-function="closedialog" autofocus>Done</button>
				</div>
			</header>
			<div class="scrollview cropToolbar" id="sheetDisplayOptions"></div>
		`,
	})
	
	generateDisplayOptions({
		target: "sheetDisplayOptions",
		themeOptions: true,
		accentOptions: true,
		textSizeOptions: true,
		textWeightOptions: true,
		contrastOptions: true,
		motionOptions: true,
		textDyslexicOptions: true,
	});
}

function resetWhatsNew() {
	localStorage.setItem("version", "0.9");
	location.reload();
}

function resetInstallBanner() {
	modifyPreference({
		group: "rebar.appSettings",
		mode: "update",
		preference: "firstRun",
		value: null,
	})
	
	location.reload();
}

function exampleToast1() {
	summonToast({
		backing: "gradient",
		id: "exampleTextToast",
		icon: false,
		message: "This is an example Toast",
		closeButton: true,
	})
}

function exampleToast2() {
	summonToast({
		backing: "gradient",
		id: "exampleSVGToast",
		icon: iconHuman.thumbsUpLeftFill,
		message: "This is an example Toast with an SVG",
		closeButton: true,
	})
}

function exampleToast3() {
	summonToast({
		backing: "gradient",
		id: "exampleImageToast",
		icon: `<img src="app/images/ui/sidebar2.png" />`,
		message: "This is an example Toast with an image",
		closeButton: false,
	})
}

function exampleSheetFull() {
	summonSheet({
		type: "fullsheet",
		backing: "dark",
		theme: false,
		id: "sheet1",
		content: sheetExamples.full,
	})
}

function exampleSheetThemed() {
	summonSheet({
		type: "fullsheet",
		backing: "dark",
		theme: "custom",
		id: "sheet2",
		content: sheetExamples.themed,
	})
}

function exampleSheetHalf() {
	summonSheet({
		type: "halfsheet",
		backing: "dark",
		theme: false,
		id: "sheet3",
		content: sheetExamples.half,
	})
}

function exampleSheetNoToolbar() {
	summonSheet({
		type: "fullsheet",
		backing: "dark",
		theme: false,
		id: "exampleNoToolbarSheet",
		content: sheetExamples.notoolbar,
	})
}

function exampleSheetSmall() {
	summonSheet({
		type: "smallsheet",
		backing: "dark",
		theme: false,
		id: "sheet5",
		content: sheetExamples.small,
	})
}

function exampleLightbox() {
	summonLightbox({
		backing: "blurdark",
		id: "testlightbox",
		content: `<img src="app/images/ui/image.jpg" />`
	})
}

function exampleAlertStandard() {
	summonAlert({
		backing: "dark",
		id: "alert1",
		icon: false,
		iconType: false,
		title: "Standard Action",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor.",
		customContent: false,
		buttonPrimary: `<button data-function="closedialog" class="confirm" id="alertTest" autofocus>Save File</button>`,
		buttonSecondary: `<button class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
		buttonTertiary: false,
	})
}

function exampleAlertDestructive() {
	summonAlert({
		backing: "dark",
		id: "alert2",
		icon: iconInterfaceElements.exclamationTriangleMulti,
		iconType: "useInitialFill",
		title: "Destructive Action",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		customContent: false,
		buttonPrimary: `<button data-function="closedialog" class="destructive confirm" id="alertTest" autofocus>Delete Files</button>`,
		buttonSecondary: `<button class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
		buttonTertiary: false,
	})
}

function exampleAlertCustom() {
	summonAlert({
		backing: "dark",
		id: "alert3",
		icon: iconHuman.userCircleFill,
		iconType: "alwaysAccent",
		title: "Custom Content",
		message: false,
		customContent: `
			<input type="text" class="excludeMargin" id="filterNameTextfield">
			<p class="subtext textAlignCenter excludeMargin">Saving a new filter with an existing name will overwrite the existing filter</p>
		`,
		buttonPrimary: `<button data-function="closedialog" class="confirm" id="alertTest" autofocus>OK</button>`,
		buttonSecondary: `<button class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
		buttonTertiary: false,
	})
}

function copyIconName(self) {
	let text = $(self).data("iconname")
	copyToClipboard(text)
}

function exampleSwitches(self) {
	let state = clickSwitch(self);
	console.log(`This switch is now ${state}`)
}

let selectedTokens = []

function showSelectionResults() {
	summonToast({
		backing: "gradient",
		id: false,
		icon: false,
		message: JSON.stringify(getSelectionGridGroups(["critters", "type"])),
		closeButton: true,
	})
}

$(document).on('click', '[data-setting="picker1"] .contextContainerMenu button', function() {
	let selectedValue = clickContextMenuItem(this);
});