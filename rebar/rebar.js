//REBAR 1.4
//COPYRIGHT TOAST STUDIO

//GLOBALS
const queryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const queryIncreasedContrast = window.matchMedia('(prefers-contrast: more)').matches;

//FIRST RUN
	//SHEETS
	function summonInstallBanner() {
		summonPanel({ 
			type: 'toast', 
			backing: 'gradient', 
			title: `Tap to install ${appName}`,
			icon: `<img src="icon.png" />`,
			containerID: "buttonInstallApp"
		});
	}
	
	function summonHowToInstallSheet() {
		summonPanel({ 
			type: 'sheet', 
			size: 'full',
			backing: 'dark', 
			title: `How to Install`,
			toolbar: "hidden",
			width: "slim",
			containerID: "sheetInstall"
		});
		
		$(".containerSheetContents").append(`
			<p class="excludeMargin textAlignCenter"><img src="icon.png" width="120" /></p>
			<p class="textAlignCenter">${appName} can be installed to your Home Screen. It will launch like any other app and work offline.</p>
			<div class="containerItemList inset inline spacerSingle alwaysBackgroundColor">
				<h3 class="headerList">How to Install</h3>
				<section class="containerSection excludePadding excludeMargin">
					<div class="itemList fixedIconSize">
						<span class="alwaysMain">${iconIndices.oneCircleStroke}</span>
						<div class="label">
							<span id="installStepOne">
								Tap the <span class="alwaysMain" id="installShareIcon">${iconInterfaceElements.shareSquareUpStroke}</span> button
							</span>
						</div>
					</div>
					<div class="itemList fixedIconSize">
						<span class="alwaysMain">${iconIndices.twoCircleStroke}</span>
						<div class="label">
							<span>Tap <span class="textBold">Add to Home Screen</span></span>
						</div>
					</div>
					<div class="itemList fixedIconSize">
						<span class="alwaysMain">${iconIndices.threeCircleStroke}</span>
						<div class="label">
							<span>Set a name and tap <span class="textBold">Add</span></span>
						</div>
					</div>
				</section>
			</div>
			<p class="subtext">The option to Save to Home Screen is only available in Safari on iPhone and iPad. It is not available through in-app browsers or 3rd party browser apps. If you have any issues please contact <a href="mailto:${appEmail}?subject=Help%20with%20installing%20${appName}">Support</a>.</p>
		`);
	}
	
	function summonWhatsNewSheet() {
		summonPanel({ 
			type: 'sheet', 
			size: 'full',
			backing: 'dark', 
			toolbar: 'include',
			title: `What's New in ${appVersion}`,
			width: 'slim',
			containerID: "sheetWhatsNew",
			toolbar: "hidden",
			innerPadding: 'exclude',
		});
		
		$(".containerSheetContents").append(`
			<div class="headerWhatsNew">
				<div class="version">
					<h1 class="excludePadding">${appVersion}</h1>
				</div>
				<h2 class="excludePadding">What's New</h2>
			</div>
			<ul id="releaseNotes" class="excludePadding"></ul>
		`);
		
		$.each( appReleaseNotes, function( key, val ) {
			$("#releaseNotes").append(`
				<li>${val}</li>
			`);
		});
	}
		
	//ACTIVATE FUNCTIONS
	$(document).ready(function(){
		if (getPreferenceGroup("rebar.appSettings").firstRun != "complete") {
			//GENERATE REBAR SETTINGS
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "firstRun",
				value: "complete",
			})
			
			//SUMMON INSTALL TOAST
			let isRunningOnMobileSafari = CSS.supports("-webkit-touch-callout", "inherit");
			if ((isRunningOnMobileSafari == true) && (window.matchMedia("(display-mode: browser)").matches)) {
				summonInstallBanner();
			}
		}
		
		//SET APPEARANCE
		$("body").attr("data-theme", getPreferenceGroup("rebar.appSettings").appearance);
		
		//SET ACCENT
		$("body").attr("data-accent", getPreferenceGroup("rebar.appSettings").accent);
		
		//SET TYPE SIZE
		document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[getPreferenceGroup("rebar.appSettings").dynamicTypeSize.value]);
		$("body").attr("data-textsize", getPreferenceGroup("rebar.appSettings").dynamicTypeSize.value);
		
		//SET FONT WEIGHT
		$("body").attr("data-textweight", getPreferenceGroup("rebar.appSettings").textWeight);
		
		//SET DYSLEXIC FONT
		$("body").attr("data-textdyslexia", getPreferenceGroup("rebar.appSettings").textDyslexia);
		
		//SET INCREASED CONTRAST
		if (queryIncreasedContrast == true) {
			$("body").attr("data-contrast", "more");
		} else {
			$("body").attr("data-contrast", getPreferenceGroup("rebar.appSettings").increaseContrast);
		}
		
		//SET REDUCED MOTION
		setTimeLength();
		
		//SET VERSION
		if (localStorage.getItem("version") == undefined) {
			//SET CURRENT VERSION IN LOCAL STORAGE
			localStorage.setItem("version", appVersion);
		} else {
			//SUMMON WHAT'S NEW SHEET
			if (localStorage.getItem("version") !== appVersion) {
				summonWhatsNewSheet();
				localStorage.setItem("version", appVersion);
			}
		}
		
		//SET META THEME TAG
		setMetaTheme();
		
		//TIPS PROMPT
		if (promptForTips == true && getPreferenceGroup("rebar.appSettings").clickedDonationLink == false) {
			//GRAB THE CURRENT AMOUNT OF OPENINGS
			let countOpenings = getPreferenceGroup("rebar.appSettings").openings;
			
			//INCREMENT THE STORED OPENINGS COUNT BY 1
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "openings",
				value: ++countOpenings,
			})
			
			//DISPLAY TIPS PROMPT
			if (countOpenings == 4 || countOpenings == 8  || countOpenings == 14 ) {
				summonPanel({ 
					type: 'sheet', 
					size: 'full',
					backing: 'dark', 
					toolbar: "hidden",
					width: "slim",
					containerID: "sheetTips"
				});
				generateTipJar({
					target: "sheetTips",
				});
			}
		}
	});
	
//SET TIME LENGTH
function setTimeLength() {
	if (queryReducedMotion == true) {
		document.documentElement.style.setProperty('--base-time-length', '0s');
	} else {
		switch (getPreferenceGroup("rebar.appSettings").reduceMotion) {
			case 'on':
				document.documentElement.style.setProperty('--base-time-length', '0s');
				break;
			case 'off':
				document.documentElement.style.setProperty('--base-time-length', baseTimeLength);
				break;
		}
	}
}

//GRAB URL PARAMETER
function grabURLParameter() {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return {
		type: "deeplink",
		query: Object.keys(params).join(),
		source: Object.values(params).join(),
	}
}

//SUMMON HOW TO INSTALL SHEET
	$(document).on('click', '#buttonInstallApp', function() {
		dismissPanel();
		setTimeout(function(){ summonHowToInstallSheet(); }, 500);
	});
	
//DISABLE ANIMATIONS WHILE RESIZING
	var id;
	$(window).resize(function() {
		clearTimeout(id);
		id = setTimeout(doneResizing, 500);
		document.documentElement.style.setProperty('--base-time-length', '0s');
	});
	
	function doneResizing(){
		setTimeLength();
	}

//SEGMENTED CONTROLS
	function clickSegment(dataValue) {
		//GET VALUE
		let value = $(dataValue).data("value"); //The value to be used for local storage
		
		//SET STATE
		$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
		$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
		
		return value;
	}

//CONTEXT MENUS
	//BUTTON CLICK
	$(document).on('click', '.buttonContext', function() {
		$("body").addClass("contextActive");
		$(this).siblings().toggleClass("active");
	});
	
	//CONTEXT MENU ITEM CLICK
	function clickContextMenuItem(dataValue) {
		//GET VALUES
		let setting = $(dataValue).parent().parent().data("setting");
		let value = $(dataValue).data("value")
		let label = $(dataValue).data("label")
		
		//HANDLE PICKERS
		if ($(dataValue).parent().data("type") == "picker") {
			//SET STATE
			$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
			$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
			$(`[data-setting="${setting}"] .contextLabel`).empty().append(label); //Clears the label of the parent button and appends the clicked item value
		}
		
		return {value, label};
	}
	
	//DISMISS MENU CLICK
	$(document).on('click', '.contextActive', function() {
		$(".contextContainerMenu").removeClass("active");
		$("body").removeClass("contextActive");
	});
	
//SWITCHES
	function clickSwitch(dataValue) {
		//GET VALUES
		let setting = $(dataValue).data("setting")
		let isOn = $(dataValue).attr("class").includes("off");
		
		//SET STATE
		$(dataValue).toggleClass("off");
		
		//SET LOCAL STORAGE AND RETURN
		if (isOn ==  true) {
			$(dataValue).attr("title", "On")
			return "on";
		} else {
			$(dataValue).attr("title", "Off")
			return "off";
		}
	}
	
//SOURCE LISTS
	function changeView(dataValue) {
		//HANDLE DEEP LINKS
		if (dataValue.type == "deeplink") {
			//CLEAR COLUMN STATES
			$(`#${dataValue.properties.clearContainer}`).removeClass("active");
			$(`#${dataValue.properties.targetContainer}`).removeClass("slightSlide");
			$(`#${dataValue.properties.parentContainer}`).removeClass("slightSlide");
			
			//CLEAR BUTTON STATES
			$(`#${dataValue.properties.parentContainer} *`).removeClass("picked subdued");
			$(`#${dataValue.properties.targetContainer} *`).removeClass("picked subdued");
			$(`#${dataValue.properties.originContainer} *`).removeClass("picked subdued");
			
			//TEMPORARILY DISABLE ALL ANIMATIONS
			document.documentElement.style.setProperty('--base-time-length', '0s');
			setTimeout(function(){ setTimeLength(); }, 100);
			
			//GENERATE CONTENT
			if (dataValue.properties.columnLevel == 2) {
				$(`[data-value="${dataValue.properties.parentRoute}"]`).addClass("picked subdued"); //Set the picked sidebar item
				$(`#${dataValue.properties.originContainer}`).addClass("slightSlide"); //Set the first column in to the correct state so it can display an animation when a view transition happens
			}
		}
		
		//SET STATE
		if (dataValue.source != "defaultView") {
			$(`#${dataValue.properties.removePicked} *`).removeClass("picked subdued"); //Removes the picked state in the target container
			$(`[data-value="${dataValue.source}"]`).addClass("picked"); //Adds the picked state to the selected list item
			if ($(`[data-value="${dataValue.source}"]`).hasClass("itemList") == true) {
				$(`[data-value="${dataValue.properties.parentRoute}"]`).addClass("subdued"); //Adds a subdued class to the current list item that has a picked class (this is used when selecting an item in the secondary column to set the look of the primary column in 3 column layouts)
				$(`[data-value="${dataValue.modifier}"]`).addClass("subdued");
			}
			$(`#${dataValue.properties.parentContainer}`).addClass("slightSlide"); //Adds the slightSlide class to the true parent container of the clicked item to have the container slightly slide while the next active container is sliding in
			$(`#${dataValue.properties.targetContainer}`).empty().addClass("active").removeClass("slightSlide"); //Clears out the target container and adds an active class to it
			$(`#${dataValue.properties.clearContainer}`).empty().removeClass("active"); //Clears out a secondary container (this is used when switching between sidebar sources in 3 column layouts)
			if (dataValue.properties.expandSecondaryColumn == true) {
				$(`.containerApp`).addClass(`expandSecondaryColumn`); //Adds a class to the App Container so that a two column layout can be shown in a three column setup
			} else {
				$(`.containerApp`).removeClass(`expandSecondaryColumn`);
			}
		}
		
		//UPDATE URL
		//"navigation" is chosen here so that the browser history doesn't populate with the same entry over and over
		if (dataValue.type == "navigation") {
			if (dataValue.source == undefined) {
				window.history.pushState(null, null, `?${dataValue.properties.query}=index`);
			} else {
				window.history.pushState(null, null, `?${dataValue.properties.query}=${dataValue.source}`);
			}
		}
	}

//TOOLBARS
	var toolbarDivider = function(options) {
		$(options.scrollview).scroll(function() {
			var y = $(options.scrollview).scrollTop();
			if (y > options.height) {
				$(options.toolbar).addClass("dividerBottom");
			} else {
				$(options.toolbar).removeClass("dividerBottom");
			}
		});
	}
	
	var toolbarVisibility = function(options) {
		$(options.scrollview).scroll(function() {
			var y = $(options.scrollview).scrollTop();
			if (y > options.height) {
				$(options.toolbar).removeClass("noBackground");
			} else {
				$(options.toolbar).addClass("noBackground");
			}
		});
	}
	
//BACK BUTTONS
	$(document).on('click', 'button.back', function() {
		//GET VALUES
		let removeActive = $(this).data("removeactive");
		let removeSlide = $(this).data("removeslide");
		let clearContent = $(this).data("clear");
		let query = $(this).data("query");
		let target = $(this).data("target");
		
		//REMOVE PARENT ACTIVE STATE
		$("#" + removeActive).removeClass("active").removeClass("slightSlide");
		
		//RESET STATE OF PREVIOUS COLUMN
		$("#" + removeSlide + " :not(.containerTabBar) button").removeClass("picked").removeClass("subdued");
		$("#" + removeSlide).removeClass("slightSlide");
		
		//EMPTY THE MAIN COLUMN
		setTimeout(function(){ $("#" + clearContent).empty().removeClass("active"); }, 500);
		
		//UPDATE URL
		if (target == undefined) {
			window.history.pushState(null, null, "?");
		} else {
			window.history.pushState(null, null, `?${query}=${target}`);
		}
	});
	
//COLLAPSE ASIDE BUTTONS
	$(document).on('click', 'button.collapseAside', function() {
		$(".containerApp").toggleClass("fullWidth");
	});
	
//PANELS
	//SUMMON PANEL
	function summonPanel(options) {
		//REMOVE ANY EXISTING PANELS
		$(".containerPanel").remove();
		
		//SETUP PANEL SKELETON
		$("body").prepend(`
			<div class="containerPanel ${options.size} ${options.outerPadding}Padding">
				<div class="backingPanel ${options.backing}" title="Dismiss"></div>
			</div>
		`);
		
		//FILL IN PANEL SKELETON
		switch (options.type) {
			case 'sheet':
				if (options.action == undefined) {
					options.action = "Done";
				}
				
				$(".containerPanel").append(`
					<div class="containerSheet"  data-theme="${options.theme}">
						<div class="containerSheetContents ${options.innerPadding}Padding" id="${options.containerID}"></div>
					</div>
				`);
				
				if (options.size == "full") {
					$(".containerApp").addClass("recede");
				}
				
				if (options.width == "slim") {
					$(".containerSheet").addClass("slim");
				}
				
				if (options.toolbar == "include") {
					$(".containerSheet").prepend(`
						<header class="containerToolbar">
							<div class="pinLeft"></div>
							<h1 class="headerToolbar">${options.title}</h1>
							<div class="pinRight">
								<button class="transparent confirm" id="buttonSheetDismiss">${options.action}</button>
							</div>
						</header>
					`);
				}
				
				if (options.toolbar == "hidden") {
					$(".containerSheetContents").addClass("toolbarHidden");
					$(".containerSheet").prepend(`
						<button class="secondary xclose" id="buttonSheetDismiss" title="Dismiss">${iconShapes.timesFill}</button>
					`);
				}
				
				break;
			case 'alert':
				$(".containerPanel").addClass("alwaysCenter");
				$(".containerPanel").prepend(`
					<div class="containerAlert">
						<div class="containerAlertContents" id="${options.containerID}">
							<div class="description">
								<h1 class="h5">${options.title}</h1>
							</div>
							<div class="buttons">
								<button class="${options.buttonStyle}" id="${options.actionID}">${options.action}</button>
								<button class="transparent" id="buttonAlertDismiss">Cancel</button>
							</div>
						</div>
					</div>
				`);
				
				if (options.message != undefined) {
					$(".containerAlertContents .description").append(`<p class="excludeMargin">${options.message}</p>`);
				}
				
				break;
			case 'toast':
				$(".containerPanel").addClass("alwaysTop");
				$(".containerPanel").prepend(`
					<div class="containerToast">
						<div class="containerToastContents" id="${options.containerID}">
							<p>${options.title}</p>
						</div>
						<span class="buttonToastDismiss" title="Dismiss">${iconShapes.timesCircleDuo}</span>
					</div>
				`);
				
				if (options.icon != undefined) {
					$(".containerToastContents").prepend(`${options.icon}`);
				}
					
				break;
			case 'lightbox':
				$(".backingPanel").prepend(`
					<div class="containerLightbox" id="${options.containerID}"></div>
				`);
				
				$(".backingPanel").prepend(`
					<button class="secondary xclose" title="Dismiss">${iconShapes.timesFill}</button>
				`);
				
				break;
		}
	}
	
	//DISMISS PANELS
	function dismissPanel() {
		$(".containerPanel").addClass("inactive");
		$(".containerApp").removeClass("recede");
		setTimeout(function(){ $(".containerPanel").remove(); }, 500);
	}
	
	$(document).on('click', '#buttonSheetDismiss, .backingPanel, .buttonToastDismiss, #buttonAlertDismiss', function() {
		dismissPanel();
	});
	
	$(document).keyup(function(e) {
		switch (e.key) {
			case 'Escape':
				dismissPanel();
				break;
		}
	});
	
//SHORTCUTS PANEL
	function summonShortcutsPanel() {
		summonPanel({ 
			type: 'sheet', 
			backing: 'dark', 
			size: 'half', 
			outerPadding: 'include', 
			title: "Shortcut Keys",
			toolbar: "include",
			containerID: "sheetShortcuts"
		});
		$(".containerSheetContents").append(`
			<div class="containerItemList inset noBackgroundColor"></div>
		`);
		$.each( shortcutKeys, function( key, val ) {
			$(".containerSheetContents .containerItemList").append(`
				<h2 class="headerList">${val.label}</h2>
				<section class="containerSection excludePadding" id="${key}"></section>	
			`);
			
			$.each( val.shortcutItems, function( index, value) {
				$(`#${key}`).append(`
					<div class="itemList">
						<div class="label">
							<span>${value.name}</span>
						</div>
						<kbd>${value.key}</kbd>
					</div>
				`);
			});
		});
	}
	
	$(document).keyup(function(e) {
		let checkFocus = (document.activeElement === document.getElementsByTagName('input')[0])
		
		if (checkFocus == false) {
			switch (e.key) {
				case 'Control':
					if ($('.containerPanel').length == 0) {
						summonShortcutsPanel();
					} else {
						dismissPanel();
					}
					break;
				case 'Escape':
					dismissPanel();
					break;
			}
		}
	});
	
//ACCORDIONS
	$(document).on('click', '.headerAccordion', function() {
		$(this).toggleClass("active");
		$(this).parent().find(".containerAccordionContents:first").toggleClass("active");
	});
	
//SEARCH
	function search(options) {
		$(`#${options.inputID}`).on("keyup", function() {
			//GATHER THE INPUTED TEXT
			let input = document.getElementById(options.inputID); //The search field
			let enteredText = input.value.toUpperCase(); // The text entered in to the search field
			let parentContainer = document.getElementById(options.parentID); //The container that holds the items to be searched
			let items = parentContainer.getElementsByClassName(options.itemClass); //The items to be searched
			
			//SET THE CONTAINER SCROLL BACK TO THE TOP
			document.getElementById(options.parentID).scrollTop = 0;
			
			//HIDE AND SHOW THE CLEAR SEARCH BUTTON
			if (enteredText.length == 0) {
				$(input).next().removeClass("active"); //Hide the clear button
				$(`#` + options.parentID).removeClass("activeSearch");
			} else {
				$(input).next().addClass("active"); //Show the clear button
				$(`#` + options.parentID).addClass("activeSearch");
			}
			
			//FILTER THE LIST BASED ON THE SEARCH INPUT
			for (i = 0; i < items.length; i++) {
				a = items[i].getElementsByClassName(options.valueClass)[0];
				txtValue = a.textContent || a.innerText;
				if (txtValue.toUpperCase().indexOf(enteredText) > -1) {
					items[i].style.display = "";
					$(items[i]).addClass("itemDisplayed");
					$(items[i]).removeClass("itemHidden");
				} else {
					items[i].style.display = "none";
					$(items[i]).addClass("itemHidden");
					$(items[i]).removeClass("itemDisplayed");
				}
			}
		});
	}
	
	function searchTable(options) {
		let input = document.getElementById(options.inputID);
		var value = $(options.enteredText).val().toLowerCase();
		$("table :not(thead) tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
		
		//SET THE CONTAINER SCROLL BACK TO THE TOP
		document.getElementById(options.parentID).scrollTop = 0;
		
		//HIDE AND SHOW THE CLEAR SEARCH BUTTON
		if (options.enteredText.value.length == 0) {
			$(input).next().removeClass("active"); //Hide the clear button
		} else {
			$(input).next().addClass("active"); //Show the clear button
		}
	}
	
	function searchClear(options) {
		$(options.searchScope).attr("style", "").removeClass("itemDisplayed").removeClass("itemHidden"); //Unhide all items and remove the display classes
		$(options.clearButton).removeClass("active"); //Hide the clear button
		$(options.inputID).val(""); //Empty the search input
		$(`#` + options.parentID).removeClass("activeSearch"); //Remove the active search class from the parent container of the items
	}
	
//SELECTION GRIDS
	//SET PICKED ITEMS	
	function selectionGrid(selectedItem) {
		const selectedOption = $(selectedItem);
		const optionAlreadyPicked = selectedOption.hasClass("picked");
		const container = selectedOption.parent();
		const maxCount = container.data("max");
		
		if (optionAlreadyPicked) {
			selectedOption.removeClass("picked");
			return;
		}
		
		const selectionCount = container.children(".picked").length;
		
		//LIMIT SELECTION TO THE MAX COUNT AND RESET IF NEEDED
		if (maxCount != "any") {
			if (selectionCount >= maxCount) {
				container.children(".picked").removeClass("picked");
			}
		}
		
		selectedOption.addClass("picked");
	}
	
	//RETRIEVE PICKED ITEMS
	function getSelectionGridValues(settingKey) {
		if (!settingKey) return [];
		
		const valueOptionElements = $(`[data-setting="${settingKey}"] [data-value].picked`);
		const gridValues = valueOptionElements.get().map((ele) => $(ele).data("value"));
		return gridValues;
	}
	
	//PLACE PICKED ITEMS WITHIN THEIR GROUPS
	function getSelectionGridGroups(groups) {
		const filters = {};
		const searchFilterKeys = groups;
		
		searchFilterKeys.forEach((key) => {
			const values = getSelectionGridValues(key);
			
			if (!values || values.length === 0) return;
			
			filters[key] = values;
		});
		
		return filters;
	}
	
//BLANK STATES
	function generateBlankState(options) {
		$(`#${options.target}`).append(`
			<div class="containerBlankState">
				<div class="blankStateContents">
					<h2>${options.title}</h2>
				</div>
			</div>
		`);
		
		if (options.icon != undefined) {
			$(".blankStateContents").prepend(`${options.icon}`);
		}
		
		if (options.message != undefined) {
			$(".blankStateContents").append(`<p>${options.message}</p>`);
		}
		
		if (options.actionFirst != undefined) {
			$(".blankStateContents").append(`
				<div class="containerActions">
					<button class="primary transparent" id="${options.actionIDFirst}">${options.actionFirst}</button>
				</div>
			`);
		}
		
		if (options.actionSecond != undefined) {
			$(".blankStateContents .containerActions").append(`<button class="secondary transparent" id="${options.actionIDSecond}">${options.actionSecond}</button>`)
		}
	}
	
//SPINNERS
	function generateSpinner(options) {
		$(`#${options.target}`).append(`
			<div class="containerSpinner">
				<div class="spinner alwaysMain">
					${options.icon}
				</div>
			</div>
		`);
	}
	
//SHARE BUTTON
	function shareURL() {
		//GRAB URL PARAMETER
		let url = grabURLParameter();
		
		//SHARE
		navigator.share({
			title: `${appName}`,
			url: `${appDomain}?${url.query}=${url.source}`
		}).then(() => {
			console.log('Share completed');
		})
		.catch(err => {
			console.log(`Share failed: ${err.message}`);
		});
	}

	$(document).on('click', 'button.share', function() {
		shareURL();
	});
	
	function insertShareButton(options) {
		if (navigator.share) {
			$(options.location).append(`
				<button class="share ${options.style}" title="${options.title}">
					${iconInterfaceElements.shareSquareUpStroke}
				</button>	
			`);
		}
	}
	
//THEME PICKER
	//GENERATE THE THEME PICKER
	function generateDisplayOptions(options) {
		if (options.themeOptions == true || options.accentOptions == true || options.contrastOptions == true || options.motionOptions == true) {
			//SET UP THE CONTAINER
			$(`#${options.target}`).append(`
				<h2 class="headerList">Visuals</h2>
				<div class="containerItemList inset inline spacerDouble alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin" id="containerVisuals"></section>
				</div>
			`);
			
			//THEMES
			if (options.themeOptions == true) {
				//SET UP THE CONTAINER
				$(`#containerVisuals`).append(`
					<div class="itemList fixedIconSize" style="border: none; padding-block-end: 0px;">
						${iconInterfaceElements.appearance}
						<div class="label" id="increaseContrastLabel">
							<span>Theme</span>
						</div>
						<p class="subtext textAlignRight excludeMargin" id="selectedAppearance"></p>
					</div>
					<div class="containerAccents itemList fixedIconSize" id="pickerAppearance" data-max="1" data-setting="appearance"></div>
				`);
				
				//GENERATE THE TOKENS
				$.each( appThemes, function( key, val ) {
					$(`#pickerAppearance`).append(`
						<div class="accentChip selectionRing" data-value="${key}" style="background: url(images/themes/${key}.svg);" title="${val}"></div>
					`);
				});
				
				//SET THE PICKED TOKEN
				$(`#pickerAppearance [data-value="${getPreferenceGroup("rebar.appSettings").appearance}"]`).addClass("picked");
				$(`#selectedAppearance`).empty().append(appThemes[getPreferenceGroup("rebar.appSettings").appearance]);
			}
			
			//ACCENTS
			if (options.accentOptions == true) {
				//SET UP THE CONTAINER
				$(`#containerVisuals`).append(`
					<div class="itemList fixedIconSize" style="border: none; padding-block-end: 0px;">
						${iconObjects.swatchBookRight}
						<div class="label" id="increaseContrastLabel">
							<span>Accent</span>
						</div>
						<p class="subtext textAlignRight excludeMargin" id="selectedAccent"></p>
					</div>
					<div class="containerAccents itemList fixedIconSize" id="pickerAccent" data-max="1" data-setting="accent"></div>
				`);
				
				//GENERATE THE TOKENS
				$.each( appAccents, function( key, val ) {
					$(`#pickerAccent`).append(`
						<div class="accentChip selectionRing" data-value="${key}" data-accent="${key}" title="${val}"></div>
					`);
				});
				
				//SET THE PICKED TOKEN
				$(`#pickerAccent [data-value="${getPreferenceGroup("rebar.appSettings").accent}"]`).addClass("picked");
				$(`#selectedAccent`).empty().append(appAccents[getPreferenceGroup("rebar.appSettings").accent]);
			}
			
			//GENERATE INCREASED CONTRAST OPTIONS
			if (options.contrastOptions == true) {
				//GENERATE MENU
				$(`#containerVisuals`).append(`
					<div class="itemList fixedIconSize">
						${iconShapes.circleHalfVerticalRightFill}
						<div class="label" id="increaseContrastLabel">
							<span>Increase Contrast</span>
						</div>
						<button class="switch positive" data-setting="increaseContrast">
							<div class="knob"></div>
						</button>
					</div>
				`);
				
				//SET SWITCH STATE
				if (getPreferenceGroup("rebar.appSettings").increaseContrast == "less") {
					$('[data-setting="increaseContrast"]').addClass("off");
					$('[data-setting="increaseContrast"]').attr("title", "Off")
				} else {
					$('[data-setting="increaseContrast"]').attr("title", "On")
				}
				
				if (queryIncreasedContrast == true) {
					$('[data-setting="increaseContrast"]').addClass("disabled").removeClass("off");
					$("#increaseContrastLabel").append(`<span class="subtext">Using device settings</span>`)
					$('[data-setting="increaseContrast"]').attr("title", "On")
				}
			}
			
			//GENERATE REDUCED MOTION OPTIONS
			if (options.motionOptions == true) {
				//GENERATE MENU
				$(`#containerVisuals`).append(`
					<div class="itemList fixedIconSize">
						${iconObjects.dialOffStroke}
						<div class="label" id="reducedMotionLabel">
							<span>Reduce Motion</span>
						</div>
						<button class="switch positive" data-setting="reduceMotion">
							<div class="knob"></div>
						</button>
					</div>
				`);
				
				//SET SWITCH STATE
				if (getPreferenceGroup("rebar.appSettings").reduceMotion == "off") {
					$('[data-setting="reduceMotion"]').addClass("off");
					$('[data-setting="reduceMotion"]').attr("title", "Off")
				} else {
					$('[data-setting="reduceMotion"]').attr("title", "On")
				}
				
				if (queryReducedMotion == true) {
					$('[data-setting="reduceMotion"]').addClass("disabled").removeClass("off");
					$("#reducedMotionLabel").append(`<span class="subtext">Using device settings</span>`)
					$('[data-setting="reduceMotion"]').attr("title", "On")
				}
			}
		}
		
		if (options.textSizeOptions == true || options.textWeightOptions == true || options.textDyslexicOptions == true) {
			//SET UP THE CONTAINER
			$(`#${options.target}`).append(`
				<h2 class="headerList">Text</h2>
				<div class="containerItemList inset inline spacerDouble alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin" id="containerText"></section>
				</div>
			`);
			
			//GENERATE TEXT SIZE OPTIONS
			if (options.textSizeOptions == true) {
				//GENERATE MENU
				$(`#containerText`).append(`
					<div class="itemList fixedIconSize">
						${iconInterfaceElements.textSize}
						<div class="label">
							<span>Text Size</span>
						</div>
						<div class="containerContextButton" data-setting="dynamicTypeSize">
							<button class="buttonContext transparent excludePadding">
								<div class="contextContainerLabel">
									<span class="contextLabel"></span>
									<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
								</div>
							</button>
							<div class="contextContainerMenu" data-position="right" data-type="picker"></div>
						</div>
					</div>
				`);
				
				//GENERATE MENU ITEMS
				$.each( appTextSizes, function( key, val ) {
					$(`[data-setting="dynamicTypeSize"] .contextContainerMenu`).append(`
						<button data-value="${key}" data-label="${val}">${val}</button>
					`)
				});
				
				//SET TEXT SIZE DROPDOWN
				$(`[data-setting='dynamicTypeSize'] button[data-value='${getPreferenceGroup("rebar.appSettings").dynamicTypeSize.value}']`).addClass("picked");
				$("[data-setting='dynamicTypeSize'] .contextLabel").append(getPreferenceGroup("rebar.appSettings").dynamicTypeSize.label);
			}
			
			//GENERATE BOLD TEXT OPTIONS
			if (options.textWeightOptions == true) {
				//GENERATE MENU
				$(`#containerText`).append(`
					<div class="itemList fixedIconSize">
						${iconInterfaceElements.textWeight}
						<div class="label">
							<span>Bold Text</span>
						</div>
						<button class="switch positive" data-setting="boldText">
							<div class="knob"></div>
						</button>
					</div>
				`);
				
				if (getPreferenceGroup("rebar.appSettings").textWeight == "regular") {
					$('[data-setting="boldText"]').addClass("off");
					$('[data-setting="boldText"]').attr("title", "Off")
				} else {
					$('[data-setting="boldText"]').attr("title", "On")
				}
			}
			
			//GENERATE DYSLEXIC TEXT OPTIONS
			if (options.textDyslexicOptions == true) {
				//GENERATE MENU
				$(`#containerText`).append(`
					<div class="itemList fixedIconSize">
						${iconInterfaceElements.textDyslexia}
						<div class="label">
							<span>Use OpenDyslexic Font</span>
						</div>
						<button class="switch positive" data-setting="dyslexiaText">
							<div class="knob"></div>
						</button>
					</div>
				`);
				
				if (getPreferenceGroup("rebar.appSettings").textDyslexia == "off") {
					$('[data-setting="dyslexiaText"]').addClass("off");
					$('[data-setting="dyslexiaText"]').attr("title", "Off")
				} else {
					$('[data-setting="dyslexiaText"]').attr("title", "On")
				}
			}
		}
	}
	
	//MAKE THE THEME PICKER CLICKABLE
	$(document).on('click', '#pickerAppearance div', function() {
		selectionGrid(this);
		let selectedAppearance = getSelectionGridGroups(["appearance"])
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "appearance",
			value: selectedAppearance.appearance,
		})
		$("body").attr("data-theme", selectedAppearance.appearance);
		setMetaTheme();
		$(`#selectedAppearance`).empty().append(appThemes[getPreferenceGroup("rebar.appSettings").appearance]);
	});
	
	//MAKE THE ACCENT PICKER CLICKABLE
	$(document).on('click', '#pickerAccent div', function() {
		selectionGrid(this);
		let selectedAccent = getSelectionGridGroups(["accent"])
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "accent",
			value: selectedAccent.accent,
		})
		$("body").attr("data-accent", selectedAccent.accent);
		$(`#selectedAccent`).empty().append(appAccents[getPreferenceGroup("rebar.appSettings").accent]);
	});
	
	//MAKE THE TEXT SIZE PICKER CLICKABLE
	$(document).on('click', '[data-setting="dynamicTypeSize"] .contextContainerMenu button', function() {
		let selectedValue = clickContextMenuItem(this);
		$("body").attr("data-textsize", selectedValue.value);
		document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[selectedValue.value]);
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "dynamicTypeSize",
			value: {
				value: selectedValue.value,
				label: selectedValue.label
			},
		})
	});
		
	//SET BOLD TEXT
	$(document).on('click', '.switch[data-setting="boldText"]', function() {
		let state = clickSwitch(this);
		if (state == "on") {
			$("body").attr("data-textweight", "bold");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textWeight",
				value: "bold",
			})
		}
		if (state == "off") {
			$("body").attr("data-textweight", "regular");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textWeight",
				value: "regular",
			})
		}
	});
	
	//SET DYSLEXIC TEXT
	$(document).on('click', '.switch[data-setting="dyslexiaText"]', function() {
		let state = clickSwitch(this);
		if (state == "on") {
			$("body").attr("data-textdyslexia", "on");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textDyslexia",
				value: "on",
			})
		}
		if (state == "off") {
			$("body").attr("data-textdyslexia", "off");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textDyslexia",
				value: "off",
			})
		}
	});
	
	//SET INCREASED CONTRAST
	$(document).on('click', '.switch[data-setting="increaseContrast"]', function() {
		let state = clickSwitch(this);
		if (state == "on") {
			$("body").attr("data-contrast", "more");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "increaseContrast",
				value: "more",
			})
		}
		if (state == "off") {
			$("body").attr("data-contrast", "less");
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "increaseContrast",
				value: "less",
			})
		}
	});
		
	//SET REDUCED MOTION
	$(document).on('click', '.switch[data-setting="reduceMotion"]', function() {
		let state = clickSwitch(this);
		if (state == "on") {
			document.documentElement.style.setProperty('--base-time-length', '0s');
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "reduceMotion",
				value: "on",
			})
		}
		if (state == "off") {
			document.documentElement.style.setProperty('--base-time-length', baseTimeLength);
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "reduceMotion",
				value: "off",
			})
		}
	});

//UPDATE BANNER
	$(document).on('click', '#buttonUpdateApp', function() {
		location.reload();
	});
	
//SET THEME META TAG
	function setMetaTheme() {
		var style = getComputedStyle(document.body)
		document.querySelector('meta[name="theme-color"]').setAttribute('content', `rgb(${style.getPropertyValue('--foreground')})`)
	}
	
	window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
		setMetaTheme()
	});
	
//TIP JAR
	function generateTipJar(options) {
		$(`#${options.target}`).append(`
			<div class="containerTipJar">
				<span class="alwaysAccent spacerDouble">${iconLogos.thanksEN}</span>
				<p class="textAlignCenter h5 spacerDouble">${appName} is developed by just two people. If you'd like to show your support you can leave us a tip. It's much appreciated!</p>
				<div id="containerTips" class="spacerDouble">
					<a href="${tipsLinks.small}" target="_blank">
						<span class="emoji">🧁</span>
						<span class="name">Small</span>
						<span class="value">$1.00</span>
					</a>
					<a href="${tipsLinks.medium}" target="_blank">
						<span class="emoji">☕️</span>
						<span class="name">Medium</span>
						<span class="value">$5.00</span>
					</a>
					<a href="${tipsLinks.large}" target="_blank">
						<span class="emoji">🍔</span>
						<span class="name">Large</span>
						<span class="value">$10.00</span>
					</a>
				</div>
				<p class="textAlignCenter subtext">Prices are set in USD and payment is handled by Stripe. ${appName} does not require payment to use. If you have any issues, please contact <a href="mailto:${appEmail}?subject=Help%20with%20${appName}%20tip%20jar">Support</a>. For more information on how your data is handled please refer to the <a href="${appPrivacyPolicy}" target="_blank">Toast Studio Privacy Policy</a> and the <a href="https://stripe.com/privacy" target="_blank">Stripe Privacy Policy</a>.</p>
			</div>
		`);
	}
	
	$(document).on('click', '#containerTips a', function() {
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "clickedDonationLink",
			value: "true",
		})
	});
	
//CAPITALIZE WORD
	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

//COPT TO CLIPBOARD
	function copyToClipboard(text) {
		//COPY CONTENT
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(text).select();
		document.execCommand("copy");
		$temp.remove();
		
		//DISPLAY TOAST
		summonPanel({
			type: 'toast', 
			backing: 'none', 
			title: `Copied to Clipboard`,
			icon: `${iconShapes.checkmarkCircleStroke}`,
			containerID: "buttonUpdateApp"
		})
		
		//DESTROY TOAST
		setTimeout(function(){ dismissPanel(); }, 1800);
	}
	
//SCROLL ITEM TO TOP
	function scrollToTop(value) {
		var elmnt = document.getElementById(value);
		elmnt.scrollIntoView();
	}
	
//PREFERENCE MANAGEMENT
	//CONVERT LOCAL STORAGE PREFERENCE STRING
	function parsePreferenceGroup(options) {
		//options.group = the name of the preference group
		//options.string = the returned string from local storage
			
		if (options.string == null) {
			return appPreferencesDefault[options.group];
		} else {
			const parsedPreferences = JSON.parse(options.string).version;
			
			if (parsedPreferences != appPreferencesVersion) {
				return appPreferencesDefault[options.group]; //This will reset preferences if a breaking change needs to be made
			} else {
				return JSON.parse(options.string);
			}
		}
	}
	
	//RETRIEVE PREFERENCE GROUP
	function getPreferenceGroup(option) {
		//option = the name of the preference group
		
		return parsePreferenceGroup({
			group: option,
			string: localStorage.getItem(option),
		})
	}
	
	//MODIFY PREFERENCE 
	function modifyPreference(options) {
		//options.group = the name of the preference group
		//options.mode = whether this change will save a modified entry or delete an existing entry
		//options.preference = the name of the child item to be modified or deleted
		//options.value = the content to save in to the selected preference
		
		//RETRIEVE THE PREFERENCE GROUP FROM LOCAL STORAGE
		const prefs = getPreferenceGroup(options.group)
		
		//UPDATE THE IN MEMORY PREFERENCE GROUP
		switch (options.mode) {
			case 'update':
				prefs[options.preference] = options.value //This will both add a new item and modify an existing one
				break;
			case 'delete':
				delete prefs[options.preference]
				break
		}
		
		//UPDATE THE PREFERENCE GROUP IN LOCAL STORAGE
		localStorage.setItem(options.group, JSON.stringify(prefs));
	}
	
//COMPONENTS
	//BANNERS
	function insertBanner(options) {
		switch (options.type) {
			case 'info':
				return `
					<section class="containerSection withIcon info">
						${iconInterfaceElements.infoCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'warning':
				return `
					<section class="containerSection withIcon warning">
						${iconInterfaceElements.exclamationTriangleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'error':
				return `
					<section class="containerSection withIcon error">
						${iconShapes.timesCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'success':
				return `
					<section class="containerSection withIcon success">
						${iconShapes.checkmarkCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'accent':
				return `
					<section class="containerSection withIcon accent">
						${options.icon}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
		}
	}
	
//CHARTS
	function generateChartPie(options) {
		//INSERT PIE CHART CONTAINER
			$(`#${options.target}`).append(`<div class="containerPie"></div>`);
		
		//APPEND THE PIE CHART PIECES
			//CALCULATE THE TOTAL VALUE
				let totalCount = 0
				$.each(options.data, function(key,val) {
					totalCount = totalCount + val[1]
				});
			
			//GENERATE PIE PIECES
				let previousPiece = 0;
				let countPie = 1;
				
				$.each( options.data, function( key, val ) {
					$(`#${options.target} .containerPie`).prepend(`
						<div class="pie" style="--p:${Math.round((val[1] + previousPiece) / totalCount * 100)}; --b:${options.donutSize}px;"  data-segment="seg${countPie}"></div>
					`);
					
					previousPiece = val[1] + previousPiece //To calculate the correct gradient the value needs to be incremented
					countPie++ //This number is to help with applying the sequential styling
				});
				
		//GENERATE TABLE
			if (options.legend == true) {
				//CREATE TABLE SKELETON
				$(`#${options.target}`).append(`
					<div class="containerChartLegend">
						${options.title ? `<h4>${options.title}</h4>` : ``}
						<table>
							<tbody></tbody>
						</table>
					</div>
				`)
				
				//APPEND ROWS
				let countColorKey = 1;
				$.each(options.data, function(key,val) {
					$(`#${options.target} tbody`).append(`
						<tr>
							<td class="containerColorKey"><div class="colorKey" data-segment="seg${countColorKey}"></div> <span>${val[0]}</span></td>
							<td>${Math.round(val[1] / totalCount * 100)} %</td>
							${options.includeCount ? `<td>${val[1]} ${options.countLabel}</td>` : ``}
						</tr>
					`)
					
					countColorKey++
				});
			}
	}
	
	function generateChartGantt(options) {
		//CREATE TABLE SKELETON
			$(`#${options.target}`).append(`
				<table class="chartGantt">
					<thead>
						<tr style="grid-template-columns: 280px repeat(${options.columnTitles.length}, 100px);">
							<th>${options.primaryLabel}</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			`)
		
		//CREATE DATA COLUMN TITLES
			$.each( options.columnTitles, function( key, val ) {
				$(`#${options.target} thead tr`).append(`<th>${val.label}</th>`);
			});
			
		//CREATE ROWS
			$.each( options.data, function( key, val ) {
				let currentData = val
				let currentID = key
				
				//APPEND ROW
					$(`#${options.target} tbody`).append(`
						<tr class="row" data-row="${currentID}" data-rowid="${currentData.key}" style="grid-template-columns: 280px repeat(${options.columnTitles.length}, 100px);">
							<td data-id="${currentData.key}">${options.images ? `<img src="${currentData.image}" width="50" height="50" /> ` : ``}${currentData.name}</td>
						</tr>
					`);
				
				//APPEND CELLS
					if (options.direction == 'ascending') {
						$.each( options.columnTitles, function( key, val ) {
							if (val.value == currentData.start && val.value == currentData.end) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="single cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value == currentData.start) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="start cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value == currentData.end) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="end cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value > currentData.start && val.value < currentData.end) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="middle cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else {
								$(`[data-row="${currentID}"]`).append(`
									<td class="cellSupport" data-cell="${val.value}"></td>	
								`)
							}
						});
					}
					
					if (options.direction == 'descending') {
						$.each( options.columnTitles, function( key, val ) {
							if (val.value == currentData.end && val.value == currentData.start) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="single cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value == currentData.end) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="start cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value == currentData.start) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="end cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else if (val.value < currentData.end && val.value > currentData.start) {
								$(`[data-row="${currentID}"]`).append(`
									<td class="middle cellSupport" data-cell="${val.value}">
										<div class="bar"></div>
									</td>	
								`)
							} else {
								$(`[data-row="${currentID}"]`).append(`
									<td class="cellSupport" data-cell="${val.value}"></td>	
								`)
							}
						});
					}
				
			});
	}
	
	function generateChartStats(options) {
		//CREATE CHART CONTAINER
			$(`#${options.target}`).append(`<div class="chartStats"></div>`)
		
		
		//APPEND THE BARS
			$.each(options.data, function(key,val) {
				$(`#${options.target} .chartStats`).append(`
					<span>
						<label for="${val[0]}"><div class="textBold">${val[0]}:</div> ${val[1]}</label>
						<progress id="${val[0]}" value="${val[1]}" max="${options.max}"></progress>
					</span>
				`)
			});
	}