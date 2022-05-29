$(document).ready(function(){
	//GENERATE SIDEBAR
	$("#primaryNav").append(`
		<header class="containerToolbar noBackground">
			<div class="pinLeft"></div>
			<h1 class="headerToolbar">Rebar</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="location.reload()">
					${iconInterfaceElements.refreshForwards}
				</button>
			</div>
		</header>
		<h1>Rebar</h1>
		<section>
			<button class="sidebar" data-value="gettingStarted">
				<div class="labelSidebar">
					${iconShapes.triangleRightCircleStroke}
					Getting Started
				</div>
			</button>
			<button class="sidebar" data-value="controls">
				<div class="labelSidebar">
					${iconInterfaceElements.sliderHorizontalStroke}
					Controls
				</div>
			</button>
			<button class="sidebar" data-value="layout">
				<div class="labelSidebar">
					${iconInterfaceElements.windowSplitMiddleStroke}
					Layout
				</div>
			</button>
			<button class="sidebar" data-value="modals">
				<div class="labelSidebar">
					${iconShapes.rectangleOverlapHorizontalStroke}
					Modals
				</div>
			</button>
			<button class="sidebar" data-value="visuals">
				<div class="labelSidebar">
					${iconObjects.paintbrushStroke}
					Visuals
				</div>
			</button>
			<button class="sidebar" data-value="helpers">
				<div class="labelSidebar">
					${iconObjects.cogStroke}
					Helpers
				</div>
			</button>
			<button class="sidebar" data-value="iconBrowser">
				<div class="labelSidebar">
					${iconShapes.starFivePointStroke}
					Icons
				</div>
			</button>
		</section>
	`)
	
	//ROUTING
		//LOADING A ROUTE ON IN-APP NAVIGATION
		function routes(value) {
			//BLANK URLS
				//SMALL SCREENS
				if (value.source == "" && window.matchMedia("(max-width: 1099px)").matches) {
					value = {
						type: "deeplink",
						query: "section",
						source: "defaultView"
					}
				}
				
				//LARGE SCREENS
				if (value.source == "" && window.matchMedia("(min-width: 1100px)").matches) {
					value = {
						type: "deeplink",
						query: "detail",
						source: "welcome"
					}
				}
			
			//GET VALUES
			let properties
			let type = value.type
			let category = value.query
			let source = value.source
			
			//GENERATE VIEW
			switch (category) {
				case 'section':
					//CONTENT
					properties = views[source].properties
					changeView({type, source, properties})
					$(`#${views[source].properties.targetContainer}`).append(views[source].content);
					
					break;
				case 'category':
					//CONTENT
					properties = views[source].properties
					changeView({type, source, properties})
					$(`#${views[source].properties.targetContainer}`).append(views[source].content);
					
					break;
				case 'detail':
					//CONTENT
					properties = views[source].properties
					changeView({type, source, properties})
					$(`#${views[source].properties.targetContainer}`).append(views[source].content);
					$("#tableData").tablesorter({ sortList: [[0,0]] });
					
					//DEEP LINK COLUMN GENERATION
					if (type == "deeplink") {
						$(`#${properties.parentContainer}`).append(views[properties.parentRoute].content).addClass("active slightSlide");
						$(`[data-value="${source}"]`).addClass("picked");
					}
					
					break;
			}
			
			//ACTIVATE FUNCTIONALITY ON-LOAD
			switch (value.source) {
				case 'contextMenus':
					//SET PICKED MENU ITEMS
					$("[data-setting='picker1'] button[data-value='second']").addClass("picked");
					$("[data-setting='picker1'] .contextLabel").append("Second");
					
					break;
				case 'segmentedControls':
					//SET PICKED SEGMENTS
					$("[data-setting='segment1'] button[data-value='second']").addClass("picked");
					$("[data-setting='segment2'] button[data-value='columns']").addClass("picked");
					$("[data-setting='segment3'] button[data-value='image2']").addClass("picked");
					
					break;
				case 'search':
					//FILL LIST
					let pokemon = [
						"Bulbasaur",
						"Ivysaur",
						"Venusaur",
						"Mega Venusaur",
						"Gigantamax Venusaur",
						"Charmander",
						"Charmeleon",
						"Charizard",
						"Mega Charizard X",
						"Mega Charizard Y",
						"Gigantamax Charizard",
						"Squirtle",
						"Wartortle",
						"Blastoise",
						"Mega Blastoise",
						"Gigantamax Blastoise"
					];
					$.each( pokemon, function( key, val ) {
						$("#pokemon").append(`
							<div class="itemList">
								<div class="label">
									<span class="itemLabel">${val}</span>
								</div>
							</div>
						`);
					});
					
					//SEARCH LIST
					search({
						inputID: "pokemonSearch",
						parentID: "pokemon",
						itemClass: "itemList",
						valueClass: "itemLabel"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#pokemonSearch",
							searchScope: "#pokemon div",
							clearButton: this,
							parentID: "pokemon",
						})
					});
					
					break;
				case 'buttonShare':
					if (navigator.share) {
						// $("#dummyShareButton").remove();
						$("#explainer section").append(`
							<button class="transparent share">
								${iconInterfaceElements.shareSquareUpStroke}
							</button>
						`);
					}
					break
				case 'toolbars':
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: "#headerContent2",
						toolbar: "#accessoryParent1",
						height: 50
					});
					toolbarDivider({
						scrollview: "#headerContent3",
						toolbar: "#accessoryParent2",
						height: 50
					});
					toolbarDivider({
						scrollview: "#headerContent4Parent",
						toolbar: "#accessoryParent3",
						height: 50
					});
					toolbarVisibility({
						scrollview: "#disappearingScrollview",
						toolbar: "#disappearingToolbar",
						height: 50
					});
					
					break;
				case 'tabBars':
					//SET PICKED TABS
					$("#tabBar1 [data-value='footerTab1']").addClass("picked");
					$("#contentAreaTabs1").append(`<h1>First</h1>`);
					$("#tabBar2 [data-value='segmentTab1']").addClass("picked");
					$("#contentAreaTabs2").append(`<h1>First</h1>`);
					
					break;
				case 'sidebars':
					//SET PICKED SIDEBAR ITEMS
					$("#sidebarWithHeader [data-value='pickedItem']").addClass("picked");
					$("#contentArea1").append(`
						<header class="containerToolbar">
							<div class="pinLeft"></div>
							<h1 class="headerToolbar">Picked Item</h1>
							<div class="pinRight"></div>
						</header>
					`);
					$("#sidebarWithoutHeader [data-value='pickedItem']").addClass("picked");
					$("#contentArea2").append(`
						<header class="containerToolbar">
							<div class="pinLeft"></div>
							<h1 class="headerToolbar">Picked Item</h1>
							<div class="pinRight"></div>
						</header>
					`);
					
					break;
				case 'itemLists':
					$("#primaryContent").append(secondaryNav.itemLists);
					$("[data-source='itemListStandard'] [data-value='button3']").addClass("picked");
					break;
				case 'dynamicType':
					generateDisplayOptions({
						target: "pickerText",
						themeOptions: false,
						accentOptions: false,
						textSizeOptions: true,
						textWeightOptions: true,
						textDyslexicOptions: true,
					});
					
					break;
				case 'displayOptions':
					//GENERATE DISPLAY OPTIONS
					generateDisplayOptions({
						target: "exampleDisplayOptions",
						themeOptions: true,
						accentOptions: true,
						textSizeOptions: true,
						textWeightOptions: true,
						contrastOptions: true,
						motionOptions: true,
						textDyslexicOptions: true,
					});
					
					break;
				case 'appearance':
					generateDisplayOptions({
						target: "pickerTheme",
						themeOptions: true,
						accentOptions: false,
						textSizeOptions: false,
						textWeightOptions: false,
					});
					
					break;
				case 'accent':
					generateDisplayOptions({
						target: "exampleAccents",
						themeOptions: false,
						accentOptions: true,
						textSizeOptions: false,
						textWeightOptions: false,
					});
					
					break;
				case 'reduceMotion':
					generateDisplayOptions({
						target: "pickerMotion",
						themeOptions: false,
						accentOptions: false,
						textSizeOptions: false,
						textWeightOptions: false,
						contrastOptions: false,
						motionOptions: true,
					});
					
					break;
				case 'increasedContrast':
					generateDisplayOptions({
						target: "pickerContrast",
						contrastOptions: true,
					});
					
					break;
				case 'spinners':
					generateSpinner({
						target: "exampleSpinner",
						icon: `${iconInterfaceElements.spinnerDuo}`, 
					});
					
					break;
				case 'blankStates':
					//GENERATE BLANK STATE
					generateBlankState({
						target: "exampleBlankState",
						icon: `${iconShapes.plusCircleStroke}`, 
						title: 'No Data Found', 
						message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem tellus, luctus eu lacus ultricies, finibus molestie sapien.',
						actionFirst: 'Try Again', 
						actionIDFirst: 'tryAgain',
						actionSecond: 'Clear Filters', 
						actionIDSecond: 'clearFilters', 
					});
					
					break;
				case 'galleryInterfaceElements':
					//GENERATE LIST
					$.each( iconInterfaceElements, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconInterfaceElements.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconInterfaceElements.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryShapes':
					//GENERATE LIST
					$.each( iconShapes, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconShapes.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconShapes.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryObjects':
					//GENERATE LIST
					$.each( iconObjects, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconObjects.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconObjects.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryIndices':
					//GENERATE LIST
					$.each( iconIndices, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconIndices.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconIndices.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryNature':
					//GENERATE LIST
					$.each( iconNature, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconNature.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconNature.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryCharts':
					//GENERATE LIST
					$.each( iconCharts, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconCharts.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconCharts.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryHuman':
					//GENERATE LIST
					$.each( iconHuman, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconHuman.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconHuman.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryHardware':
					//GENERATE LIST
					$.each( iconHardware, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconHardware.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconHardware.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryLogos':
					//GENERATE LIST
					$.each( iconLogos, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconLogos.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconLogos.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
				case 'galleryTransport':
					//GENERATE LIST
					$.each( iconTransport, function( key, val ) {
						if (key.includes("Multi") == true) {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconTransport.${key}">
									<span class="iconPlatter useInitialFill">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						} else {
							$("#iconGallery").append(`
								<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="iconTransport.${key}">
									<span class="iconPlatter">${val}</span>
									<span class="iconName">${key}</span>
								</div>
							`)
						}
					});
					
					//SEARCH LIST
					search({
						inputID: "iconSearch",
						parentID: "iconGallery",
						itemClass: "containerIcon",
						valueClass: "iconName"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#iconSearch",
							searchScope: "#iconGallery div",
							clearButton: this
						})
					});
					
					//TOOLBAR SCROLL DIVIDERS
					toolbarDivider({
						scrollview: ".containerInlineAccessory",
						toolbar: "#galleryHeader",
						height: 50
					});
					
					break;
			}
		}
		
		// LOAD A ROUTE ON LOAD
		routes(grabURLParameter());
		
		//LOAD A ROUTE ON BROWSER NAVIGATION EVENT
		window.addEventListener('popstate', function(e) {
			routes(grabURLParameter());
		});
	
	
	//SEGMENTED CONTROLS
		//MAKE SEGMENTS CLICKABLE
		$(document).on('click', '[data-setting="segment1"] button', function() {
			let selectedValue = clickSegment(this)
		});
		
		$(document).on('click', '[data-setting="segment2"] button', function() {
			let selectedValue = clickSegment(this)
		});
		
		$(document).on('click', '[data-setting="segment3"] button', function() {
			let selectedValue = clickSegment(this)
		});
	
	//CONTEXT MENUS	
		//MAKE CONTEXT BUTTONS CLICKABLE
		$(document).on('click', '[data-setting="picker1"] .contextContainerMenu button', function() {
			let selectedValue = clickContextMenuItem(this);
		});
	
	//SWITCHES
		//SET SWITCHES STATE
	
		//MAKE SWITCHES CLICKABLE
		$(document).on('click', '.switch[data-setting="switch1"]', function() {
			let state = clickSwitch(this);
			
			if (state ==  "on") {
				$('.switch[data-setting="switch1"]').attr("title", "On")
			} else {
				$('.switch[data-setting="switch1"]').attr("title", "Off")
			}
			
		});
		
		$(document).on('click', '.switch[data-setting="switch2"]', function() {
			let state = clickSwitch(this);
			
			if (state ==  "on") {
				$('.switch[data-setting="switch2"]').attr("title", "On")
			} else {
				$('.switch[data-setting="switch2"]').attr("title", "Off")
			}
			
		});
		
		$(document).on('click', '.switch[data-setting="switch3"]', function() {
			let state = clickSwitch(this);
			
			if (state ==  "on") {
				$('.switch[data-setting="switch3"]').attr("title", "On")
			} else {
				$('.switch[data-setting="switch3"]').attr("title", "Off")
			}
		});
		
	//SAMPLE APP NAVIGATION
		$(document).on('click', '#primaryNav button', function() {
			routes({
				type: "navigation",
				query: "category",
				source: $(this).data("value")
			});
		});
		
		$(document).on('click', '#secondaryNav button.itemList', function() {
			routes({
				type: "navigation",
				query: "detail",
				source: $(this).data("value")
			});
		});
		
	//TAB BARS
		$(document).on('click', '#tabBar1 button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
		$(document).on('click', '#tabBar2 button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
	//COLUMNS
		//THREE COLUMN EXAMPLE
		$(document).on('click', '#exampleThreeColumnsPrimary button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
		$(document).on('click', '#exampleThreeColumnsSecondary .containerItemList button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
		//TWO COLUMN EXAMPLE
		$(document).on('click', '#exampleTwoColumnsPrimary button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
	//TOASTS
		$(document).on('click', '#exampleToast1', function() {
			summonPanel({ 
				type: 'toast', 
				backing: 'gradient',
				title: "This is an example Toast",
				containerID: "exampleTextToast"
			});
		});
		
		$(document).on('click', '#exampleToast2', function() {
			summonPanel({ 
				type: 'toast', 
				backing: 'gradient', 
				title: "This is an example Toast with an SVG",
				icon: `${iconInterfaceElements.appearance}`,
				containerID: "exampleSVGToast"
			});
		});
		
		$(document).on('click', '#exampleToast3', function() {
			summonPanel({ 
				type: 'toast', 
				backing: 'gradient', 
				title: "This is an example Toast with an image",
				icon: `<img src="images/ui/sidebar1.png" />`,
				containerID: "exampleImageToast"
			});
		});
		
	//SHEETS
		$(document).on('click', '#exampleSheet1', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'full', 
				outerPadding: 'include', 
				innerPadding: 'include',
				title: "Full Sheet",
				toolbar: "include",
				containerID: "exampleFullSheet"
			});
			$(".containerSheetContents").append(`
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
				<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
				<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
				<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
				<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
			`);
		});
		
		$(document).on('click', '#exampleSheet2', function() {
			summonPanel({ 
				type: 'sheet', 
				theme: 'custom', 
				backing: 'dark', 
				size: 'full', 
				outerPadding: 'include', 
				innerPadding: 'include',
				title: "Themed Sheet",
				action: 'Close',
				toolbar: "include",
				containerID: "exampleCustomSheet"
			});
			$(".containerSheetContents").append(`
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			`);
		});
		
		$(document).on('click', '#exampleSheet3', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'half', 
				outerPadding: 'exclude', 
				innerPadding: 'include',
				title: "Half Sheet",
				toolbar: "include",
				containerID: "exampleHalfSheet"
			});
			$(".containerSheetContents").append(`
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			`);
		});
		
		$(document).on('click', '#exampleSheet3b', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'half', 
				outerPadding: 'include', 
				innerPadding: 'include',
				title: "Half Sheet",
				toolbar: "include",
				containerID: "exampleHalfSheet"
			});
			$(".containerSheetContents").append(`
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			`);
		});
		
		$(document).on('click', '#exampleSheet4', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'full', 
				outerPadding: 'include',
				innerPadding: 'exclude',
				toolbar: "hidden",
				containerID: "exampleNoToolbarSheet"
			});
			$(".containerSheetContents").append(`
				<div class="spacerSingle">
					<h1>Sheet Title</h1>
					<button class="secondary">Add to Guides</button>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
				<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
				<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
				<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
				<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
			`);
		});
		
		$(document).on('click', '#exampleSheet5', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'full', 
				width: 'slim',
				outerPadding: 'include', 
				title: 'Slim Sheet',
				toolbar: 'include',
				containerID: "exampleSlimSheet"
			});
			$(".containerSheetContents").append(`
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
				<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
				<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
				<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
				<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
			`);
		});
		
	//ALERTS
		$(document).on('click', '#exampleAlert1', function() {
			summonPanel({ 
				type: 'alert',
				backing: 'dark',
				action: 'Save File', 
				buttonStyle: 'standard', 
				actionID: 'alertTest', 
				title: 'Standard Action', 
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor.',
				containerID: "exampleAlertStandard" 
			});
		});
		
		$(document).on('click', '#exampleAlert2', function() {
			summonPanel({ 
				type: 'alert',
				backing: 'dark',
				action: 'Delete File', 
				buttonStyle: 'destructive', 
				actionID: 'alertTest', 
				title: 'Destructive Action', 
				message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin rutrum suscipit. Quisque erat lectus, varius vel venenatis quis, volutpat ac tortor.',
				containerID: "exampleAlertDestructive"
			});
		});
		
		$(document).on('click', '#exampleAlert3', function() {
			summonPanel({ 
				type: 'alert',
				backing: 'dark',
				action: 'Okay', 
				buttonStyle: 'positive', 
				actionID: 'alertTest', 
				title: 'No Message Available',
				containerID: "exampleAlertPositive" 
			});
		});
	
	//INSTALL BANNER
		$(document).on('click', '#exampleInstall', function() {
			summonInstallBanner();
		});
		
		$(document).on('click', '#exampleInstallReset', function() {
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "firstRun",
				value: null,
			})
			location.reload();
		});
		
	//LIGHTBOXES
		$(document).on('click', '#exampleLightbox', function() {
			summonPanel({ 
				type: 'lightbox', 
				backing: 'dark', 
				padding: 'include', 
			});
			$(".containerLightbox").append(`
				<img src="images/ui/image.jpg" />
			`);
		});
		
	//WHATS NEW PANEL
		$(document).on('click', '#exampleWhatsNew1', function() {
			summonWhatsNewSheet();
		});
		
		$(document).on('click', '#exampleWhatsNewReset', function() {
			localStorage.setItem("version", "0.9");
			location.reload();
		});
		
	//SELECTION GRIDS
		//HOLDING VARIABLES
		let selectedTokens = []
		
		//SET PICKED TOKENS
		$(document).on('click', '#exampleTokenField .token', function() {
			let selectedSection = selectionGrid(this);
		});
		
		//GET VALUES OF PICKED TOKENS
		$(document).on('click', '#displaySelections', function() {
			//GET THE VALUES OF THE SELECTED TOKENS
			console.log(getSelectionGridGroups(["critters", "type"]))
		});
		
	//COPY ICON NAMES
		$(document).on('click', '.containerIcon', function() {
			let text = $(this).data("iconname")
			copyToClipboard(text)
		});
		
	//CHANGE THEME AND ACCENT FROM THE ICON BROWSER
		$(document).on('click', '#miniThemePicker', function() {
			summonPanel({ 
				type: 'sheet', 
				backing: 'dark', 
				size: 'full', 
				width: 'slim',
				outerPadding: 'include', 
				title: 'Display Options',
				toolbar: 'include',
				containerID: "sheetDisplayOptions"
			});
			
			generateDisplayOptions({
				target: "sheetDisplayOptions",
				themeOptions: true,
				accentOptions: true,
				textSizeOptions: false,
				textWeightOptions: false,
				contrastOptions: true,
				motionOptions: false,
			});
		});
});