$(document).ready(function(){
	let url = grabURLParameter()
	const routeFunction = window["route" + url.query];
	
	if (typeof routeFunction === "function") {
		//LOAD ROUTE IN URL
		routeFunction({modifier: url.source, navtype: "deeplink"});
	} else {
		//LOAD DEFAULT ROUTES
		//SMALL SCREENS
		if (window.matchMedia("(max-width: 1099px)").matches) {
			//LEVEL 1
			routesidebar({modifier: false, navtype: "deeplink"})
		}
		
		//LARGE SCREENS
		if (window.matchMedia("(min-width: 1100px)").matches) {
			//LEVEL 3
			routegettingstarted({modifier: "welcome", navtype: "deeplink"})
		}
	}
});

function miniThemePicker() {
	summonSheet({
		type: "fullsheet",
		backing: "dark",
		theme: false,
		id: "themePicker",
		content: `
			<header class="containerToolbar layoutSheet">
				<div class="wrapperToolbarStart"></div>
				<div class="wrapperToolbarMiddle">
					<h1 class="headerToolbar">Display Options</h1>
				</div>
				<div class="wrapperToolbarEnd">
					<div class="pinToolbar material-liquidglass-thin">
						<span data-function="closedialog" autofocus>${insertCancelButton()}</div>
					</div>
				</div>
			</header>
			<div class="scrollview inset-T" id="sheetDisplayOptions"></div>
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
		textFontOptions: true,
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
		buttonPrimary: `<button data-button="action-fill" class="primary" data-function="closedialog" class="confirm" id="alertTest" autofocus>Save File</button>`,
		buttonSecondary: `<button data-button="action-fill" class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
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
		buttonPrimary: `<button data-button="action-fill" data-function="closedialog" class="destructive confirm" id="alertTest" autofocus>Delete Files</button>`,
		buttonSecondary: `<button data-button="action-fill" class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
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
		buttonPrimary: `<button data-button="action-fill" class="primary" data-function="closedialog" class="confirm" id="alertTest" autofocus>OK</button>`,
		buttonSecondary: `<button data-button="action-fill" class="secondary" data-function="closedialog" id="buttonAlertDismiss">Cancel</button>`,
		buttonTertiary: false,
	})
}

function copyIconName(self) {
	let text = $(self).data("iconname")
	copyToClipboard(text)
}

function exampleSwitches(self) {
	let state = clickSwitch(self);
	summonToast({
		backing: "gradient",
		id: "",
		icon: "",
		message: `This switch is now ${state}`,
		closeButton: true,
	})
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

function exampleTipsPrompt() {
	summonSheet({
		type: "smallsheet",
		backing: "dark",
		theme: false,
		id: false,
		content: `
			<button data-button="close" class="translucent" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
			<div id="sheetTips">
				${
					generateTipJar({
						mini: false,
					})
				}
			</div>
		`,
	})
}

function filterPeople(kind) {
	switch (kind) {
		case 'all':
			var parameters = '';
			break;
		case 'name':
			var parameters = {lastname: "smith"};
			break;
		case 'nameMulti':
			var parameters = {lastname: ["smith", "patel"]};
			break;
		case 'weight':
			var parameters = { weight: { $min: 60, $max: 70 } };
			break;
		case 'weightLow':
			var parameters = { weight: v => v < 60 };
			break;
		case 'height':
			var parameters = { gender: "male", height: 178 };
			break;
		case 'type':
			var parameters = { type: ['water'] };
			break;
		case 'notwater':
			var parameters = { type: {$none: ['water']} };
			break;
		case 'food':
			var parameters = { 'food.breakfast': 'toast' };
			break;
		case 'key':
			var parameters = { $key: ['jane', 'alex'] };
			break;
	}
	
	let data = dataFilter(filterExample, parameters)
	
	$(`#exampleFilter`).empty()
	
	$.each( data, function( key, val ) {
		let types = (val.type).slice(0, 2).map(capitalize).join(' + ');
		
		$(`#exampleFilter`).append(`
			<div class="cardPerson">
				<div class="left">
					${iconHuman[`gender` + capitalize(val.gender)]}
					<div>
						<h6 class="excludePadding">${capitalize(val.firstname)} ${capitalize(val.lastname)}</h6>
						<p class="excludeMargin">${val.height} cm &bull; ${val.weight} kg</p>
					</div>
				</div>
				<div class="right">
					<p>${val.glasses ? `Glases` : `No Glasses`}</p>
					<p>${types}</p>
					<p>${capitalize(val.food.breakfast)}</p>
				</div>
			</div>
		`)
	});
}

function sortPeople(kind) {
	switch (kind) {
		case 'none':
			var parameter = '';
			var direction = '';
			break;
		case 'nameAsc':
			var parameter = 'lastname';
			var direction = 'asc';
			break;
		case 'nameDesc':
			var parameter = 'lastname';
			var direction = 'desc';
			break;
		case 'heightAsc':
			var parameter = 'height';
			var direction = 'asc';
			break;
		case 'heightDesc':
			var parameter = 'height';
			var direction = 'desc';
			break;
		case 'typeAsc':
			var parameter = 'type';
			var direction = 'asc';
			break;
		case 'typeDesc':
			var parameter = 'type';
			var direction = 'desc';
			break;
		case 'glassesAsc':
			var parameter = 'glasses';
			var direction = 'asc';
			break;
		case 'glassesDesc':
			var parameter = 'glasses';
			var direction = 'desc';
			break;
		case 'foodAsc':
			var parameter = 'food.breakfast';
			var direction = 'asc';
			break;
		case 'foodDesc':
			var parameter = 'food.breakfast';
			var direction = 'desc';
			break;
	}
	
	let data = dataSort(filterExample, parameter, direction)
	console.log(data)
	
	$(`#exampleFilter`).empty()
	
	$.each( data, function( key, val ) {
		let types = (val.type).slice(0, 2).map(capitalize).join(' + ');
		
		$(`#exampleFilter`).append(`
			<div class="cardPerson">
				<div class="left">
					${iconHuman[`gender` + capitalize(val.gender)]}
					<div>
						<h6 class="excludePadding">${capitalize(val.firstname)} ${capitalize(val.lastname)}</h6>
						<p class="excludeMargin">${val.height} cm &bull; ${val.weight} kg</p>
					</div>
				</div>
				<div class="right">
					<p>${val.glasses ? `Glases` : `No Glasses`}</p>
					<p>${types}</p>
					<p>${capitalize(val.food.breakfast)}</p>
				</div>
			</div>
		`)
	});
}

function groupPeople(kind) {
	switch (kind) {
		case 'none':
			var parameter = '';
			break;
		case 'nameAsc':
			var parameter = 'lastname';
			var direction = 'asc'
			break;
		case 'nameDesc':
			var parameter = 'lastname';
			var direction = 'desc'
			break;
		case 'weightAsc':
			var parameter = 'weight';
			var direction = 'asc'
			break;
		case 'weightDesc':
			var parameter = 'weight';
			var direction = 'desc'
			break;
		case 'glassesAsc':
			var parameter = 'glasses';
			var direction = 'asc'
			break;
		case 'glassesDesc':
			var parameter = 'glasses';
			var direction = 'desc'
			break;
		case 'typeAsc':
			var parameter = 'type';
			var direction = 'asc'
			break;
		case 'typeDesc':
			var parameter = 'type';
			var direction = 'desc'
			break;
		case 'genderAsc':
			var parameter = 'gender';
			var direction = 'asc'
			break;
		case 'genderDesc':
			var parameter = 'gender';
			var direction = 'desc'
			break;
		case 'foodAsc':
			var parameter = 'food.breakfast';
			var direction = 'asc'
			break;
		case 'foodDesc':
			var parameter = 'food.breakfast';
			var direction = 'desc'
			break;
	}
	
	let groups = dataGroup(filterExample, parameter, direction)
	
	$(`#exampleFilter`).empty()
	
	//RENDER GROUPS
	const $container = $(`#exampleFilter`);
	
	groups.forEach((val, key) => {
		$container.append(`
			<h4 class="headerList">${key}</h4>
			<div class="containerSection excludePadding spacerSingle" id="${key}"></div>
		`);
		const $containerGroup = $(`#` + key);
		
		val.forEach((person, id) => {
			let types = (person.type).slice(0, 2).map(capitalize).join(' + ');
			
			$containerGroup.append(`
				<div class="cardPerson">
					<div class="left">
						${iconHuman[`gender` + capitalize(person.gender)]}
						<div>
							<h6 class="excludePadding">${capitalize(person.firstname)} ${capitalize(person.lastname)}</h6>
							<p class="excludeMargin">${person.height} cm &bull; ${person.weight} kg</p>
						</div>
					</div>
					<div class="right">
						<p>${person.glasses ? `Glases` : `No Glasses`}</p>
						<p>${types}</p>
						<p>${capitalize(person.food.breakfast)}</p>
					</div>
				</div>
			`);
		});
	});
}