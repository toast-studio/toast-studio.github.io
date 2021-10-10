//REBAR 1.0
//COPYRIGHT TOAST STUDIO

//GLOBALS
const queryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//FIRST RUN
	//SHEETS
	function summonInstallBanner() {
		summonPanel({ 
			type: 'toast', 
			backing: 'transparent', 
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
		if (localStorage.getItem("firstRun") != "complete") {
			localStorage.setItem("firstRun", "complete");
			
			//SUMMON INSTALL TOAST
			let isRunningOnMobileSafari = CSS.supports("-webkit-touch-callout", "inherit");
			if ((isRunningOnMobileSafari == true) && (window.matchMedia("(display-mode: browser)").matches)) {
				summonInstallBanner();
			}
		}
		
		//SET APPEARANCE
		if (localStorage.getItem("appearance") == undefined) {
			//SET DEFAULT APPEARANCE IN LOCAL STORAGE
			localStorage.setItem("appearance", "system");
			$("body").attr("data-theme", localStorage.getItem("appearance"));
		} else {
			//APPLY STORED APPEARANCE
			$("body").attr("data-theme", localStorage.getItem("appearance"));
		}
		
		//SET ACCENT
		if (localStorage.getItem("accent") == undefined) {
			//SET DEFAULT APPEARANCE IN LOCAL STORAGE
			localStorage.setItem("accent", "default");
			$("body").attr("data-accent", localStorage.getItem("accent"));
		} else {
			//APPLY STORED APPEARANCE
			$("body").attr("data-accent", localStorage.getItem("accent"));
		}
		
		//SET TYPE SIZE
		if (localStorage.getItem("dynamicTypeSize") == undefined) {
			//SET DEFAULT TYPE SIZE IN LOCAL STORAGE
			localStorage.setItem("dynamicTypeSize", "medium");
			localStorage.setItem("dynamicTypeSizeLabel", "Medium");
			document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes.medium);
		} else {
			//APPLY STORED TYPE SIZE
			document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[localStorage.getItem("dynamicTypeSize")]);
		}
		
		//SET FONT WEIGHT
		if (localStorage.getItem("dynamicTypeWeight") == undefined) {
			//SET DEFAULT TYPE SIZE IN LOCAL STORAGE
			localStorage.setItem("dynamicTypeWeight", "regular");
			localStorage.setItem("dynamicTypeWeightLabel", "Regular");
			$("body").attr("data-weight", "regular");
		} else {
			//APPLY STORED TYPE SIZE
			document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[localStorage.getItem("dynamicTypeSize")]);
			$("body").attr("data-weight", localStorage.getItem("dynamicTypeWeight"));
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
	});
	
//SET TIME LENGTH
function setTimeLength() {
	if (queryReducedMotion == true) {
		document.documentElement.style.setProperty('--base-time-length', '0s');
	} else {
		switch (localStorage.getItem("reduceMotion")) {
			case null:
				localStorage.setItem("reduceMotion", "off");
				break;
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
	let source = new URLSearchParams(window.location.search).get(urlParam);
	return {type: "deeplink", source}
}

//SUMMON HOW TO INSTALL SHEET
	$(document).on('click', '#buttonInstallApp', function() {
		dismissPanel();
		setTimeout(function(){ summonHowToInstallSheet(); }, 500);
	});
		
//SELECT AND SET DYNAMIC TYPE
	//TEXT SIZE
	$(document).on('click', '[data-setting="dynamicTypeSize"] .contextContainerMenu button', function() {
		let selectedValue = clickContextMenuItem(this);
		document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[selectedValue[0]]);
		localStorage.setItem("dynamicTypeSizeLabel", selectedValue[1])
	});
	
	//FONT WEIGHT
	$(document).on('click', '[data-setting="dynamicTypeWeight"] .contextContainerMenu button', function() {
		let selectedValue = clickContextMenuItem(this);
		$("body").attr("data-weight", selectedValue[0]);
		localStorage.setItem("dynamicTypeWeightLabel", selectedValue[1]);
	});
	
//SET REDUCED MOTION
$(document).on('click', '.switch[data-setting="reduceMotion"]', function() {
	let state = clickSwitch(this);
	if (state == "on") {
		document.documentElement.style.setProperty('--base-time-length', '0s');
	}
	if (state == "off") {
		document.documentElement.style.setProperty('--base-time-length', baseTimeLength);
	}
});

//DISABLE ZOOM
	document.addEventListener('gesturestart', function(e) {
		e.preventDefault();
		document.body.style.zoom = 1.0;
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
		//GET VALUES
		let setting = $(dataValue).parent().data("setting"); //The key name to be used for local storage
		let value = $(dataValue).data("value"); //The value to be used for local storage
		
		//SET STATE
		$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
		$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
		
		//SET LOCAL STORAGE
		localStorage.setItem(setting, value);
		
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
			
			//SET LOCAL STORAGE
			localStorage.setItem(setting, value);
		}
		
		return [value, label];
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
			localStorage.setItem(setting, "on");
			return "on";
		} else {
			localStorage.setItem(setting, "off");
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
			$(`#${dataValue.properties.parentContainer} *`).removeClass("picked subdued"); //Removes the picked state in the parent container
			$(`[data-value="${dataValue.source}"]`).addClass("picked"); //Adds the picked state to the selected list item
			if ($(`[data-value="${dataValue.source}"]`).hasClass("itemList") == true) {
				$(`[data-value="${dataValue.properties.parentRoute}"]`).addClass("subdued"); //Adds a subdued class to the current list item that has a picked class (this is used when selecting an item in the secondary column to set the look of the primary column in 3 column layouts)
			}
			$(`#${dataValue.properties.parentContainer}`).addClass("slightSlide"); //Adds the slightSlide class to the true parent container of the clicked item to have the container slightly slide while the next active container is sliding in
			$(`#${dataValue.properties.targetContainer}`).empty().addClass("active").removeClass("slightSlide"); //Clears out the target container and adds an active class to it
			$(`#${dataValue.properties.clearContainer}`).empty().removeClass("active"); //Clears out a secondary container (this is used when switching between sidebar sources in 3 column layouts)
		}		
		
		//UPDATE URL
		//"navigation" is chosen here so that the browser history doesn't populate with the same entry over and over
		if (dataValue.type == "navigation") {
			if (dataValue.source == undefined) {
				window.history.pushState(null, null, `?${urlParam}=index`);
			} else {
				window.history.pushState(null, null, `?${urlParam}=${dataValue.source}`);
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
		let target = $(this).data("target");
		
		//REMOVE PARENT ACTIVE STATE
		$("#" + removeActive).removeClass("active").removeClass("slightSlide");
		
		//RESET STATE OF PREVIOUS COLUMN
		$("#" + removeSlide + " button").removeClass("picked").removeClass("subdued");
		$("#" + removeSlide).removeClass("slightSlide");
		
		//EMPTY THE MAIN COLUMN
		$("#" + clearContent).empty().removeClass("active");
		
		//UPDATE URL
		if (target == undefined) {
			window.history.pushState(null, null, "?");
		} else {
			window.history.pushState(null, null, `?${urlParam}=${target}`);
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
				<div class="backingPanel ${options.backing}"></div>
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
						<button class="secondary xclose" id="buttonSheetDismiss">${iconShapes.timesFill}</button>
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
								<button class="secondary" id="buttonAlertDismiss">Cancel</button>
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
						<span class="buttonToastDismiss">${iconShapes.timesCircleDuo}</span>
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
					<button class="secondary xclose">${iconShapes.timesFill}</button>
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
		switch (e.key) {
			case 'Control':
				if ($('.containerPanel').length == 0) {
					summonShortcutsPanel();
				} else {
					dismissPanel();
				}
				break;
		}
	});
	
//ACCORDIONS
	$(document).on('click', '.headerAccordion', function() {
		$(this).toggleClass("active");
		$(this).next().toggleClass("active");
	});
	
//SEARCH
	function search(options) {
		$(options.inputID).on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$(options.searchScope).filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
			if (value.length == 0) {
				$(options.inputID).next().removeClass("active"); //Hide the clear button
			} else {
				$(options.inputID).next().addClass("active"); //Show the clear button
			}
		});
	}
	
	function searchClear(options) {
		$(options.searchScope).attr("style", ""); //Unhide all items
		$(options.clearButton).removeClass("active"); //Hide the clear button
		$(options.inputID).val(""); //Empty the search input
	}
	
//SELECTION GRIDS
	function selectionGrid(dataValue) {
		//GET VALUES
		let value = $(dataValue).data("value");
		let setting = $(dataValue).parent().data("setting");
		let maxCount = $(dataValue).parent().data("max");
		
		//SET STATE
		let amountPicked = $(dataValue).parent().children(".picked").length; //Get amount of items picked
		if (amountPicked == maxCount) {
			$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
		}
		$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
		
		//GET SELECTED ITEM VALUES
		let pickedChildren = $(dataValue).parent().children(".picked"); //Find all items that are picked
		let selectedValues = [];
		$.each( pickedChildren, function( key, val ) {
			selectedValues.push($(val).data("value")); //For each picked item extract the data-value and stash it
		});		
		
		return {setting, selectedValues};
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
					<button class="primary" id="${options.actionIDFirst}">${options.actionFirst}</button>
				</div>
			`);
		}
		
		if (options.actionSecond != undefined) {
			$(".blankStateContents .containerActions").append(`<button class="secondary" id="${options.actionIDSecond}">${options.actionSecond}</button>`)
		}
	}
	
//SHARE BUTTON
	$(document).on('click', 'button.share', function() {
		//GRAB URL PARAMETER
		let url = grabURLParameter();
		
		//SHARE
		navigator.share({
			title: `${appName}`,
			url: `${appDomain}?${urlParam}=${url.source}`
		}).then(() => {
			console.log('Share completed');
		})
		.catch(err => {
			console.log(`Share failed: ${err.message}`);
		});
	});
	
//THEME PICKER
	//GENERATE THE THEME PICKER
	function generateDisplayOptions(options) {
		//THEMES
		if (options.themeOptions == true) {
			//SET UP THE CONTAINER
			$(`#${options.target}`).append(`
				<h2 class="headerList">Themes</h2>
				<div class="containerAccents containerSection" id="pickerAppearance" data-max="1" data-setting="appearance"></div>
			`);
			
			//GENERATE THE TOKENS
			$.each( appThemes, function( key, val ) {
				$(`#pickerAppearance`).append(`
					<div class="accentChip selectionRing" data-value="${val}" style="background: url(images/themes/${val}.svg);"></div>
				`);
			});
			
			//SET THE PICKED TOKEN
			$(`#pickerAppearance [data-value="${localStorage.getItem("appearance")}"]`).addClass("picked");
		}
		
		//ACCENTS
		if (options.accentOptions == true) {
			//SET UP THE CONTAINER
			$(`#${options.target}`).append(`
				<h2 class="headerList">Accents</h2>
				<div class="containerAccents containerSection" id="pickerAccent" data-max="1" data-setting="accent"></div>
			`);
			
			//GENERATE THE TOKENS
			$.each( appAccents, function( key, val ) {
				$(`#pickerAccent`).append(`
					<div class="accentChip selectionRing" data-value="${val}" data-accent="${val}"></div>
				`);
			});
			
			//SET THE PICKED TOKEN
			$(`#pickerAccent [data-value="${localStorage.getItem("accent")}"]`).addClass("picked");
		}
		
		if (options.textSizeOptions == true || options.textWeightOptions == true) {
			//SET UP THE CONTAINER
			$(`#${options.target}`).append(`
				<h2 class="headerList">Text</h2>
				<div class="containerItemList inset inline spacerDouble alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin" id="textOptions"></section>
				</div>
			`);
			
			//GENERATE TEXT SIZE OPTIONS
			if (options.textSizeOptions == true) {
				//GENERATE MENU
				$(`#textOptions`).append(`
					<div class="itemList">
						<div class="label">
							<span>Size</span>
						</div>
						<div class="containerContextButton" data-setting="dynamicTypeSize">
							<button class="buttonContext transparent">
								<div class="contextContainerLabel">
									<span class="contextLabel"></span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
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
				$(`[data-setting='dynamicTypeSize'] button[data-value='${localStorage.getItem("dynamicTypeSize")}']`).addClass("picked");
				$("[data-setting='dynamicTypeSize'] .contextLabel").append(localStorage.getItem("dynamicTypeSizeLabel"));
			}
			
			//GENERATE FONT WEIGHT OPTIONS
			if (options.textWeightOptions == true) {
				//GENERATE MENU
				$(`#textOptions`).append(`
					<div class="itemList">
						<div class="label">
							<span>Weight</span>
						</div>
						<div class="containerContextButton" data-setting="dynamicTypeWeight">
							<button class="buttonContext transparent">
								<div class="contextContainerLabel">
									<span class="contextLabel"></span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</div>
							</button>
							<div class="contextContainerMenu" data-position="right" data-type="picker"></div>
						</div>
					</div>
				`);
				
				//GENERATE MENU ITEMS
				$.each( appTextWeights, function( key, val ) {
					$(`[data-setting="dynamicTypeWeight"] .contextContainerMenu`).append(`
						<button data-value="${key}" data-label="${val}">${val}</button>
					`)
				});
				
				//SENT PICKED ITEM
				$(`[data-setting='dynamicTypeWeight'] button[data-value='${localStorage.getItem("dynamicTypeWeight")}']`).addClass("picked");
				$("[data-setting='dynamicTypeWeight'] .contextLabel").append(localStorage.getItem("dynamicTypeWeightLabel"));
			}
		}
	}
	
	//MAKE THE THEME PICKER CLICKABLE
	$(document).on('click', '#pickerAppearance div', function() {
		let selectedSection = selectionGrid(this);
		localStorage.setItem("appearance", selectedSection.selectedValues);
		$("body").attr("data-theme", selectedSection.selectedValues);
	});
	
	//MAKE THE ACCENT PICKER CLICKABLE
	$(document).on('click', '#pickerAccent div', function() {
		let selectedSection = selectionGrid(this);
		localStorage.setItem("accent", selectedSection.selectedValues);
		$("body").attr("data-accent", selectedSection.selectedValues);
		setMetaTheme();
	});

//UPDATE BANNER
	$(document).on('click', '#buttonUpdateApp', function() {
		location.reload();
	});
	
//SET THEME META TAG
	function setMetaTheme() {
		var style = getComputedStyle(document.body)
		document.querySelector('meta[name="theme-color"]').setAttribute('content', `rgb(${style.getPropertyValue('--accent')})`)
	}