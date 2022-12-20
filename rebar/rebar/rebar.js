//REBAR 2
//COPYRIGHT TOAST STUDIO

//GLOBALS
const queryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const queryIncreasedContrast = window.matchMedia('(prefers-contrast: more)').matches;

//FIRST RUN
	//SHEETS
	function summonInstallBanner() {
		summonToast({
			backing: "gradient",
			id: "buttonInstallApp",
			icon: `<img src="icon.png" />`,
			message: `Tap to install ${appName}`,
			closeButton: true,
		})
	}
	
	function summonHowToInstallSheet() {
		summonSheet({
			type: "smallsheet",
			backing: "dark",
			theme: false,
			id: "sheetInstall",
			content: `
				<button class="translucent xclose" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
				<div class="scrollview">
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
					<p class="subtext">The option to Save to Home Screen is only available in Safari on iPhone and iPad. It is not available through in-app browsers or other browser apps. If you have any issues please contact <a href="mailto:${appEmail}?subject=Help%20with%20installing%20${appName}">Support</a>.</p>
				</div>
			`,
		})
	}
	
	function summonWhatsNewSheet() {
		summonSheet({
			type: "smallsheet",
			backing: "dark",
			theme: false,
			id: "sheetWhatsNew",
			content: `
				<button class="translucent xclose" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
				<div class="scrollview excludePadding">
					<div class="headerWhatsNew">
						<div class="version">
							<h1 class="excludePadding">${appVersion}</h1>
						</div>
						<h2 class="excludePadding">What's New</h2>
					</div>
					<ul id="releaseNotes" class="excludePadding"></ul>
				</div>
			`,
		})
		
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
		
		//SET OS
		$("body").attr("data-os", grabOS());
		
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
				summonSheet({
					type: "smallsheet",
					backing: "dark",
					theme: false,
					id: false,
					content: `
						<button class="translucent xclose" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
						<div id="sheetTips"></div>
					`,
				})
				
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
	
	function tempAnimationStop() {
		document.documentElement.style.setProperty('--base-time-length', '0s');
		setTimeout(function(){ setTimeLength(); }, 100);
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

//GRAB OS
function grabOS() {
	var userAgent = window.navigator.userAgent,
	platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
	macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'macos';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'ios';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'windows';
	} else if (/Android/.test(userAgent)) {
		os = 'android';
	} else if (/Linux/.test(platform)) {
		os = 'linux';
	}

	return os;
}

//GRAB FUNCTION NAME
function grabFunctionName() {
	return grabFunctionName.caller.name
}

//SUMMON HOW TO INSTALL SHEET
	$(document).on('click', '#buttonInstallApp', function() {
		dismissDialog();
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
		let iconGroup = $(dataValue).data("icongroup")
		let iconName = $(dataValue).data("iconname")
		
		//HANDLE PICKERS
		if ($(dataValue).parent().parent().data("type") == "picker") {
			//SET STATE
			$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
			$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
			$(`[data-setting="${setting}"] .contextLabel`).empty().append(label); //Clears the label of the parent button and appends the clicked item value
		}
		
		if ($(dataValue).parent().parent().data("type") == "pickericons") {
			//SET STATE
			$(dataValue).siblings().removeClass("picked"); //Removes the picked class from all siblings of the clicked item
			$(dataValue).addClass("picked"); //Adds the picked class to the clicked item
			$(`[data-setting="${setting}"] .contextLabel`).empty().append(window[iconGroup][iconName]).append(label); //Clears the label of the parent button and appends the clicked item value
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
	
//NAVIGATION
	function controllerRoute(options) {
		//TEMPORARILY STOP COLUMN TRANSITIONS
		//This stops the views from transitioning on larger screens
			if (window.matchMedia("(min-width: 1100px)").matches || options.type == "deeplink") {
				tempAnimationStop();
			}
	
		//SETUP APP CONTAINER
		//This switches the layout between two and three columns
			switch (options.columns) {
				case 2:
					$(".containerApp").removeClass("columnsThree");
					$(".containerAside").addClass("single").removeClass("double");
					$(".columnSecondary").empty();
					break;
				case 3:
					$(".containerApp").addClass("columnsThree");
					$(".containerAside").addClass("double").removeClass("single");
					break;
			}
			
		//SETUP COLUMN STATES
		//This moves columns in to place and empties columns when they are no longer needed
			switch (options.level) {
				case "primary":
					//SET PICKED LIST ITEM
						$(".columnPrimary *").removeClass("picked").removeClass("subdued")
				
					//SET COLUMNS
						$(`.columnPrimary`).removeClass("slightSlide");
						$(`.columnSecondary`).removeClass("active").removeClass("slightSlide");
						$(".columnTertiary").removeClass("active");
					
					//EMPTY COLUMNS
						if (options.type == "backwards") {
							if (window.matchMedia("(max-width: 1099px)").matches) {
								setTimeout(function(){ $(`.columnSecondary`).empty(); }, 500);
							} else {
								$(".columnSecondary").empty();
							}
							
							if (window.matchMedia("(max-width: 639px)").matches) {
								setTimeout(function(){ $(`.columnTertiary`).empty(); }, 500);
							} else {
								$(".columnTertiary").empty();
							}
						}
						
						if (options.type == "forwards" || options.type == "deeplink") {
							$(".columnTertiary").empty();
						}
					break;
				case "secondary":
					//SET PICKED LIST ITEM
						$(".columnPrimary *").removeClass("picked").removeClass("subdued")
						$(".columnSecondary *").removeClass("picked")
						
					//SET COLUMNS
						$(`.columnPrimary`).addClass("slightSlide");
						$(`.columnSecondary`).addClass("active").removeClass("slightSlide");
						$(".columnTertiary").removeClass("active");
					
					//EMPTY COLUMNS
						if (options.type == "backwards") {
							if (window.matchMedia("(max-width: 639px)").matches) {
								setTimeout(function(){ $(`.columnTertiary`).empty(); }, 500);
							} else {
								$(".columnTertiary").empty();
							}
						}
						
						if (options.type == "forwards") {
							$(".columnSecondary").empty();
							$(".columnTertiary").empty();
						}
					break;
				case "secondaryExpanded":
					//SET PICKED LIST ITEM
						$(".columnPrimary *").removeClass("picked").removeClass("subdued")
						
					//SET COLUMNS
						$(`.columnPrimary`).addClass("slightSlide");
						$(`.columnSecondary`).removeClass("slightSlide").removeClass("active");
						$(".columnTertiary").addClass("active");
					
					//EMPTY COLUMNS
						if (options.type == "forwards") {
							$(".columnTertiary").empty();
						}
					break;
				case "tertiary":
					//SET PICKED LIST ITEM
						$(".columnPrimary .picked").addClass("subdued");
						$(".columnSecondary *").removeClass("picked")
					
					//SET COLUMNS
						$(`.columnSecondary`).addClass("slightSlide");
						$(".columnTertiary").addClass("active");
					
					//EMPTY COLUMNS
						if (options.type == "forwards" || options.type == "deeplink") {
							$(".columnTertiary").empty();
						}
					break;
			}
			
		//CLEAR CLASSES
		//Remove any classes that might have been active from the previous view
			$(`body`).removeClass(`contextActive`);
			
		//SET PICKED ITEM
		//Applies the .picked class to the newly selected item
			$(`[data-name="${options[options.highlight]}"]`).addClass("picked");
			
		//UPDATE URL
		//Updates the URL and pushes it to the browser history
			if (options.type == "forwards" || options.type == "backwards") {
				window.history.pushState(null, null, `?${options.route ? options.route : ``}${options.modifier ? `=${options.modifier}` : ``}`);
			}
	}
	
	//BROWSER BACK BUTTON
		window.addEventListener('popstate', function(e) {
			let url = grabURLParameter()
			if (url.query.length == 0 || url.query.length == 1) {
				window[topLevelRoute]({modifier: topLevelModifier, navtype: "deeplink"})
			} else {
				window["route" + url.query]({modifier: url.source, navtype: "deeplink"})
			}
		});
		
//TABS
	function controllerTab(options) {	
		let parent = $(`[data-name="${options.modifier}"]`).parent()
			
		//SETUP VIEW CONTAINER
			$(parent).next().empty();
		
		//SETUP TAB STATES
			$(`[data-name="${options.modifier}"]`).siblings().removeClass("picked");
			$(`[data-name="${options.modifier}"]`).addClass("picked");
		
		//UPDATE URL
			if (options.updateURL == true) {
				// let url = grabURLParameter().query
				window.history.pushState(null, null, `?${options.route}=${options.modifier}`);
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
		
//COLLAPSE ASIDE BUTTONS
	$(document).on('click', 'button.collapseAside', function() {
		$(".containerApp").toggleClass("fullWidth");
	});
		
//DIALOGS
	//OPEN
		function showDialog(type) {
			$('dialog')[0].addEventListener('cancel', (event) => {
				event.preventDefault();
			});
			if (type == "fullsheet" || type == "smallsheet") {
				$(".containerApp").addClass("recede");
			}
			$('dialog')[0].showModal();
		}
		
		//SHEET
			function summonSheet(options) {
				$("body").prepend(`
					<dialog data-type="${options.type}" data-backing="${options.backing}" ${options.theme ? `data-theme="${options.theme}"` : `` } id="${options.id}">
						${options.content}
					</dialog>
				`);
				showDialog(options.type);
			}
		
		//LIGHTBOX
			function summonLightbox(options) {
				$("body").prepend(`
					<dialog data-type="lightbox" data-backing="${options.backing}" id="${options.id}">
						<button class="translucent xclose" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
						${options.content}
					</dialog>
				`);
				showDialog("lightbox");
			}
			
		//ALERT
			function summonAlert(options) {
				if (options.customContent == false) {
					$("body").prepend(`
						<dialog data-type="alert" data-backing="${options.backing}" id="${options.id}">
							<div class="description">
								${options.icon ? `<span class="${options.iconType}">${options.icon}</span>` : ``}
								${options.title ? `<h5 class="textAlignCenter excludePadding">${options.title}</h5>` : ``}
								${options.message ? `<p class="excludeMargin textAlignCenter">${options.message}</p>` : ``}
							</div>
							<div class="buttons">
								${options.buttonPrimary}
								${options.buttonSecondary ? options.buttonSecondary : ``}
								${options.buttonTertiary ? options.buttonTertiary : ``}
							</div>
						</dialog>
					`);
					showDialog("alert");
				} else {
					$("body").prepend(`
						<dialog data-type="alert" data-backing="${options.backing}" id="${options.id}">
							<div class="description">
								${options.icon ? `<span class="${options.iconType}">${options.icon}</span>` : ``}
								${options.title ? `<h5 class="textAlignCenter excludePadding">${options.title}</h5>` : ``}
								${options.customContent}
							</div>
							<div class="buttons ${options.inlineButtons ? "inline" : ``}">
								${options.buttonPrimary}
								${options.buttonSecondary ? options.buttonSecondary : ``}
								${options.buttonTertiary ? options.buttonTertiary : ``}
							</div>
						</dialog>
					`);
					showDialog("alert");
				}
				
				
			}
		
		//TOAST
			function summonToast(options) {
				$("body").prepend(`
					<dialog data-type="toast" data-backing="${options.backing}">
						<div class="containerToastContents" id="${options.id}">
							${options.icon ? options.icon : ``}
							<p>${options.message}</p>
						</div>
						${options.closeButton ? `<button class="buttonToastDismiss excludePadding" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesCircleDuo}</button>` : ``}
					</dialog>
				`);
				showDialog("toast");
			}
	
	//CLOSE
		function dismissDialog() {
			$('dialog:first-child').addClass('hide'); //Add reversal animation
			
			if ($('dialog').length == 1) {
				$(".containerApp").removeClass("recede");
			}
			
			setTimeout(function(){
				$('dialog:first-child')[0].close(); //Close out the dialog
				$('dialog:first-child').remove(); //Remove dialog from DOM
			}, 300)
		};
		
		//CLOSE BUTTON
		$(document).on('click', '[data-function="closedialog"]', function() {
			dismissDialog()
		});
		
		$(document).on('click', 'dialog[data-type="lightbox"]', function() {
			dismissDialog()
		});
		
		//BACKDROP
		$(document).on('click', 'dialog', function() {
			if ($(this).attr("data-type") != "alert") {
				let dialog = $(this)[0]
				
				var rect = dialog.getBoundingClientRect();
				var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
				if (!isInDialog) {
					dismissDialog()
				}
			}
		});
	
//SHORTCUTS PANEL
	function summonShortcutsPanel() {
		summonSheet({
			type: "halfsheet",
			backing: "dark",
			theme: false,
			id: "sheetShortcuts",
			content: `
				<header class="containerToolbar">
					<div class="pinLeft"></div>
					<h1 class="headerToolbar">Shortcut Keys</h1>
					<div class="pinRight">
						<button class="transparent confirm" id="buttonSheetDismiss" data-function="closedialog" autofocus>Done</button>
					</div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset noBackgroundColor"></div>
				</div>
			`,
		})
		
		$.each( shortcutKeys, function( key, val ) {
			$("#sheetShortcuts .containerItemList").append(`
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
						dismissDialog();
					}
					break;
				case 'Escape':
					dismissDialog();
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
					<button class="primary" id="${options.actionIDFirst}">${options.actionFirst}</button>
				</div>
			`);
		}
		
		if (options.actionSecond != undefined) {
			$(".blankStateContents .containerActions").append(`<button class="secondary" id="${options.actionIDSecond}">${options.actionSecond}</button>`)
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
		let icon
		
		switch (grabOS()) {
			case 'windows':
				icon = iconInterfaceElements.shareWindows
				break;
			case 'android':
				icon = iconInterfaceElements.shareAndroidStroke
				break;
			default:
				icon = iconInterfaceElements.shareAppleUpStroke
				break
		}
		
		if (navigator.share) {
			return `
				<button class="share ${options.style}" title="${options.title}">
					${icon}
				</button>
			`
		} else {
			return ``
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
					<div class="itemList fixedIconSize">
						${iconObjects.paintbrushStroke}
						<div class="label" id="increaseContrastLabel">
							<span>Theme</span>
						</div>
						<div class="containerContextButton" data-setting="appearance" data-position="right" data-type="pickericons">
							<button class="buttonContext transparent excludePadding">
								<div class="contextContainerLabel">
									<span class="contextLabel"></span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</div>
							</button>
							<div class="contextContainerMenu"></div>
						</div>
					</div>
				`);
				
				//GENERATE THE TOKENS
				$.each( appThemes, function( key, val ) {
					$(`[data-setting="appearance"] .contextContainerMenu`).append(`
						<button data-value="${key}" data-label="${val.name}" data-icongroup='${val.iconGroup}' data-iconname='${val.iconName}'>
							${val.name}
							${window[val.iconGroup][val.iconName]}
						</button>
					`);
				});
				
				//SET THEME DROPDOWN
				$(`[data-setting="appearance"] button[data-value='${getPreferenceGroup("rebar.appSettings").appearance}']`).addClass("picked");
				$(`[data-setting="appearance"] .contextLabel`).append(window[appThemes[getPreferenceGroup("rebar.appSettings").appearance].iconGroup][appThemes[getPreferenceGroup("rebar.appSettings").appearance].iconName]);
				$(`[data-setting="appearance"] .contextLabel`).append(appThemes[getPreferenceGroup("rebar.appSettings").appearance].name);
			}
			
			//ACCENTS
			if (options.accentOptions == true) {
				//SET UP THE CONTAINER
				$(`#containerVisuals`).append(`
					<div class="itemList fixedIconSize">
						${iconObjects.swatchBookRight}
						<div class="label" id="increaseContrastLabel">
							<span>Accent</span>
						</div>
						<div class="containerContextButton" data-setting="accent" data-position="right" data-type="popover">
							<button class="buttonContext transparent excludePadding">
								<div class="contextContainerLabel">
									<span class="contextLabel" style="text-transform: none"><span class="colorChip" data-accent="${getPreferenceGroup("rebar.appSettings").accent}"></span> ${appAccents[getPreferenceGroup("rebar.appSettings").accent]}</span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</div>
							</button>
							<div class="contextContainerMenu">
								<div class="containerAccents itemList fixedIconSize" id="pickerAccent" data-max="1" data-setting="accent"></div>
							</div>
						</div>
					</div>
					
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
						<button class="switch positive" data-setting="increaseContrast"></button>
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
						<button class="switch positive" data-setting="reduceMotion"></button>
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
						<div class="containerContextButton" data-setting="dynamicTypeSize" data-position="right" data-type="picker">
							<button class="buttonContext transparent excludePadding">
								<div class="contextContainerLabel">
									<span class="contextLabel"></span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</div>
							</button>
							<div class="contextContainerMenu"></div>
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
						<button class="switch positive" data-setting="boldText"></button>
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
						<button class="switch positive" data-setting="dyslexiaText"></button>
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
	$(document).on('click', '[data-setting="appearance"] .contextContainerMenu button', function() {
		let selectedValue = clickContextMenuItem(this);
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "appearance",
			value: selectedValue.value,
		})
		$("body").attr("data-theme", selectedValue.value);
		setMetaTheme();
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
		$(`[data-setting="accent"] .contextLabel`).empty().append(`<span class="colorChip" data-accent="appAccents[getPreferenceGroup("rebar.appSettings").accent]"></span> ${appAccents[getPreferenceGroup("rebar.appSettings").accent]}`);
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
				<img class="spacerSingle" src="rebar/images/tips.png" srcset="rebar/images/tips@2x.png 2x" width="400" alt="" />
				<p class="textAlignCenter h5 spacerDouble">${appName} is developed by <a href="https://christophermuller.net" target="_blank">Chris</a> and <a href="https://twitter.com/trevormkay" target="_blank">Trevor</a>. If you'd like to show your support you can leave us a tip. It's much appreciated!</p>
				<div class="containerButtons spacerSingle">
					<a href="${tipsLinks.default}" target="_blank" class="noDecoration">
						<button class="large" onclick="stopTipsPrompts()">Donate $2</button>
					</a>
					<a href="${tipsLinks.custom}" target="_blank" class="noDecoration">
						<button class="transparent" onclick="stopTipsPrompts()">Custom Amount</button>
					</a>
				</div>
				<p class="textAlignCenter subtext">Prices are set in USD and payment is handled by Stripe. ${appName} does not require payment to use. If you have any issues, please contact <a href="mailto:${appEmail}?subject=Help%20with%20${appName}%20tip%20jar">Support</a>. For more information on how your data is handled please refer to the <a href="${appPrivacyPolicy}" target="_blank">Toast Studio Privacy Policy</a> and the <a href="https://stripe.com/privacy" target="_blank">Stripe Privacy Policy</a>.</p>
			</div>
		`);
	}
	
	function stopTipsPrompts() {
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "clickedDonationLink",
			value: "true",
		})
	}
	
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
			summonToast({
				backing: "gradient",
				id: false,
				icon: iconShapes.checkmarkCircleMulti,
				message: `Copied to Clipboard`,
				closeButton: false,
			})
		
		//DESTROY TOAST
			setTimeout(function(){ dismissDialog(); }, 1800);
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
		let prefs = getPreferenceGroup(options.group)
		
		//UPDATE THE IN MEMORY PREFERENCE GROUP
		switch (options.mode) {
			case 'update':
				prefs[options.preference] = options.value //This will both add a new item and modify an existing one
				break;
			case 'delete':
				delete prefs[options.preference]
				break
			case 'append':
				let storedSettings = prefs
				let metadataSettings = appPreferencesDefault[options.group]
				let mergedSettings = {}
				
				$.each( metadataSettings, function( key, val ) {
					if (key in storedSettings == true) {
						Object.assign(mergedSettings, {[key]: storedSettings[key]}) //Takes the key/value pair stored in localstorage and pushes it to the new merged object
					} else {
						Object.assign(mergedSettings, {[key]: metadataSettings[key]}) //Takes the key/value pair stored in metadata.js and pushes it to the new merged object
					}
				});
				
				prefs = mergedSettings
				break;
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
					<section class="containerSection banner withIcon info ${options.size}">
						${iconInterfaceElements.infoCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'warning':
				return `
					<section class="containerSection banner withIcon warning ${options.size}">
						${iconInterfaceElements.exclamationTriangleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'error':
				return `
					<section class="containerSection banner withIcon error ${options.size}">
						${iconShapes.timesCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'success':
				return `
					<section class="containerSection banner withIcon success ${options.size}">
						${iconShapes.checkmarkCircleMulti}
						<p class="excludeMargin">${options.content}</p>
					</section>
				`
				break;
			case 'accent':
				return `
					<section class="containerSection banner withIcon accent ${options.size}">
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