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
			<button class="sidebar" data-value="iconBrowser">
				<div class="labelSidebar">
					${iconShapes.starStroke}
					Icons
				</div>
			</button>
		</section>
	`)
	
	//ROUTING
		//LOADING A ROUTE ON IN-APP NAVIGATION
		function routes(value) {
			//LOADING A DEFAULT VIEW
			if ((value.source == null || value.source == undefined) && window.matchMedia("(max-width: 1099px)").matches) {
				value = {type: "deeplink", source: "defaultView"} //Gives a source to target to handle browser navigation back to the initial view
			}
			
			if ((value.source == null || value.source == undefined) && window.matchMedia("(min-width: 1100px)").matches) {
				value = {type: "deeplink", source: "welcome"} //Select the view you would like to be the default view on larger screens
			}
			
			//GET VALUES
			let properties = views[value.source].properties
			let type = value.type
			let source = value.source
			
			//SET STATE
			changeView({type, source, properties})
			
			//GENERATE VIEW
			$(`#${views[value.source].properties.targetContainer}`).append(views[value.source].content);
			
			//GENERATE A DEEP LINK COLUMN
			//This will generate the second column if you are loading in the third column
			if (type == "deeplink" && properties.columnLevel == 2) {
				$(`#${properties.parentContainer}`).append(views[properties.parentRoute].content).addClass("active slightSlide");
				$(`[data-value="${source}"]`).addClass("picked");
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
									<span>${val}</span>
								</div>
							</div>
						`);
					});
					
					//SEARCH LIST
					search({
						inputID: "#pokemonSearch",
						searchScope: "#pokemon div"
					})
					
					$(document).on('click', '.buttonClearSearch', function() {
						searchClear({
							inputID: "#pokemonSearch",
							searchScope: "#pokemon div",
							clearButton: this
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
					//SET SWITCH STATE
					if (localStorage.getItem("reduceMotion") == "off") {
						$('[data-setting="reduceMotion"]').addClass("off");
					}
					
					if (queryReducedMotion == true) {
						$('[data-setting="reduceMotion"]').addClass("disabled").removeClass("off");
						$("#reducedMotionLabel").append(`<span class="subtext">Using device settings</span>`)
					}
					
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
						$("#iconGallery").append(`
							<div>
								<span class="iconPlatter">${val}</span>
								${key}
							</div>
						`)
					});
					
					//SEARCH LIST
					search({
						inputID: "#iconSearch",
						searchScope: "#iconGallery div"
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
						$("#iconGallery").append(`
							<div>
								<span class="iconPlatter">${val}</span>
								${key}
							</div>
						`)
					});
					
					//SEARCH LIST
					search({
						inputID: "#iconSearch",
						searchScope: "#iconGallery div"
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
						$("#iconGallery").append(`
							<div>
								<span class="iconPlatter">${val}</span>
								${key}
							</div>
						`)
					});
					
					//SEARCH LIST
					search({
						inputID: "#iconSearch",
						searchScope: "#iconGallery div"
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
						$("#iconGallery").append(`
							<div>
								<span class="iconPlatter">${val}</span>
								${key}
							</div>
						`)
					});
					
					//SEARCH LIST
					search({
						inputID: "#iconSearch",
						searchScope: "#iconGallery div"
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
						$("#iconGallery").append(`
							<div>
								<span class="iconPlatter">${val}</span>
								${key}
							</div>
						`)
					});
					
					//SEARCH LIST
					search({
						inputID: "#iconSearch",
						searchScope: "#iconGallery div"
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
		});
		
		$(document).on('click', '.switch[data-setting="switch2"]', function() {
			let state = clickSwitch(this);
		});
		
		$(document).on('click', '.switch[data-setting="switch3"]', function() {
			let state = clickSwitch(this);
		});
		
	//SAMPLE APP NAVIGATION
		$(document).on('click', '#primaryNav button', function() {
			routes({
				type: "navigation",
				source: $(this).data("value")
			});
		});
		
		$(document).on('click', '#secondaryNav button.itemList', function() {
			routes({
				type: "navigation",
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
				backing: 'transparent', 
				title: "This is an example Toast",
				containerID: "exampleTextToast"
			});
		});
		
		$(document).on('click', '#exampleToast2', function() {
			summonPanel({ 
				type: 'toast', 
				backing: 'transparent', 
				title: "This is an example Toast with an SVG",
				icon: `${iconInterfaceElements.appearance}`,
				containerID: "exampleSVGToast"
			});
		});
		
		$(document).on('click', '#exampleToast3', function() {
			summonPanel({ 
				type: 'toast', 
				backing: 'transparent', 
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
			localStorage.setItem("firstRun", "");
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
			
			//PUSH THE SELECTED VALUES TO A GLOBAL VARIABLE
			selectedTokens = selectedTokens.filter(item => item.setting !== selectedSection.setting); //Removes an existing entry
			selectedTokens.push(selectedSection)
		});
		
		//GET VALUES OF PICKED TOKENS
		$(document).on('click', '#displaySelections', function() {
			//GET THE VALUES OF THE SELECTED TOKENS
			console.log(selectedTokens.find(ele => ele.setting === 'critters').selectedValues)
			console.log(selectedTokens.find(ele => ele.setting === 'type').selectedValues)
		});
});