//SIDEBAR ITEMS
function routesidebar(options) {
	controllerRoute({
		columns: 3,
		level: "primary",
		route: false,
		modifier: options.modifier,
		type: options.navtype,
		highlight: false,
	})
	
	if ( $(".columnPrimary").children().length == 0 ) {
		$(".columnPrimary").append(`
			<header class="containerToolbar noBackground">
				<div class="pinLeft"></div>
				<h1 class="headerToolbar">Rebar</h1>
				<div class="pinRight">
					<button data-button="action-transparent" class="toolbarItem" onclick="location.reload()">
						${iconInterfaceElements.refreshForwards}
					</button>
				</div>
			</header>
			<h1>Rebar</h1>
			<section>
				<button data-button="sidebar" data-name="gettingstarted" onclick='routegettingstarted({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconShapes.triangleRightCircleStroke}
						Getting Started
					</div>
				</button>
				<button data-button="sidebar" data-name="controls" onclick='routecontrols({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconInterfaceElements.switchDoubleTopOnFill}
						Controls
					</div>
				</button>
				<button data-button="sidebar" data-name="layout" onclick='routelayout({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconObjects.blueprintStroke}
						Layout
					</div>
				</button>
				<button data-button="sidebar" data-name="modals" onclick='routemodals({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconShapes.rectangleOverlapHorizontalStroke}
						Modals
					</div>
				</button>
				<button data-button="sidebar" data-name="visuals" onclick='routevisuals({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconObjects.paintbrushStroke}
						Visuals
					</div>
				</button>
				<button data-button="sidebar" data-name="charts" onclick='routecharts({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconCharts.barUp}
						Charts
					</div>
				</button>
				<button data-button="sidebar" data-name="helpers" onclick='routehelpers({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconObjects.cogStroke}
						Helpers
					</div>
				</button>
				<button data-button="sidebar" data-name="icons" onclick='routeicons({modifier: false, navtype: "forwards"})'>
					<div class="labelSidebar">
						${iconShapes.starFivePointStroke}
						Icons
					</div>
				</button>
			</section>
		`)
	}
	
}

function routegettingstarted(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Getting Started</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<h2 class="headerList">Get to know Rebar</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="welcome" onclick='routegettingstarted({modifier: "welcome", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--warning);">${iconLogos.rebarDuo}</span>
								<div class="label">
									<span>Welcome</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="filestructure" onclick='routegettingstarted({modifier: "filestructure", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: #4DA5FA;">${iconStyle(iconObjects.folderHorizontalFill, iconObjects.folderHorizontalStroke)}</span>
								<div class="label">
									<span>File Structure</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="appstructure" onclick='routegettingstarted({modifier: "appstructure", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: #4DA5FA;">${iconStyle(iconObjects.legoFill, iconObjects.legoStroke)}</span>
								<div class="label">
									<span>App Structure</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="config" onclick='routegettingstarted({modifier: "config", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconObjects.cogFill, iconObjects.cogStroke)}</span>
								<div class="label">
									<span>Config</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="versionhistory" onclick='routegettingstarted({modifier: "versionhistory", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconShapes.plusSquareRoundedFill, iconShapes.plusSquareRoundedStroke)}</span>
								<div class="label">
									<span>Version History</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="requirements" onclick='routegettingstarted({modifier: "requirements", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconShapes.checkmarkCircleFill, iconShapes.checkmarkCircleStroke)}</span>
								<div class="label">
									<span>Requirements</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routegettingstarted({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(gettingstarted[options.modifier])
		}
	}
}

function routecontrols(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Controls</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<h2 class="headerList">Buttons</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="buttons" onclick='routecontrols({modifier: "buttons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightseagreen;">${iconStyle(iconShapes.rectangleHorizontalDoubleFill, iconShapes.rectangleHorizontalDoubleStroke)}</span>
								<div class="label">
									<span>Action Buttons</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="sidebaritems" onclick='routecontrols({modifier: "sidebaritems", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: orchid;">${iconStyle(iconInterfaceElements.sidebarLeftFill, iconInterfaceElements.sidebarLeftStroke)}</span>
								<div class="label">
									<span>Sidebar Items</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="listitems" onclick='routecontrols({modifier: "listitems", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: orchid;">${iconInterfaceElements.tableviewStroke}</span>
								<div class="label">
									<span>List Items</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="segmenteditems" onclick='routecontrols({modifier: "segmenteditems", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: orchid;">${iconInterfaceElements.segmentedControl}</span>
								<div class="label">
									<span>Segmented Items</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="toolbaritems" onclick='routecontrols({modifier: "toolbaritems", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.windowBarTopFill}</span>
								<div class="label">
									<span>Toolbar Items</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="backbutton" onclick='routecontrols({modifier: "backbutton", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconShapes.arrowSingleLeft}</span>
								<div class="label">
									<span>Back Button</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="sharebutton" onclick='routecontrols({modifier: "sharebutton", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.shareAppleUpStroke}</span>
								<div class="label">
									<span>Share Button</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="tabbaritems" onclick='routecontrols({modifier: "tabbaritems", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightseagreen;">${iconInterfaceElements.windowBarBottomFill}</span>
								<div class="label">
									<span>Tab Bar Items</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="switches" onclick='routecontrols({modifier: "switches", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: limegreen;">${iconInterfaceElements.switchDoubleTopOnFill}</span>
								<div class="label">
									<span>Switches</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Other Controls</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="contextmenus" onclick='routecontrols({modifier: "contextmenus", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: olivedrab;">${iconStyle(iconInterfaceElements.menuFill, iconInterfaceElements.menuStroke)}</span>
								<div class="label">
									<span>Context Menus</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="popovers" onclick='routecontrols({modifier: "popovers", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: olivedrab;">${iconShapes.viewfinder}</span>
								<div class="label">
									<span>Popovers</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="segmentedcontrols" onclick='routecontrols({modifier: "segmentedcontrols", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: orchid;">${iconInterfaceElements.segmentedControl}</span>
								<div class="label">
									<span>Segmented Controls</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="forminputs" onclick='routecontrols({modifier: "forminputs", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: slateblue;">${iconStyle(iconHardware.keyboardFill, iconHardware.keyboardStroke)}</span>
								<div class="label">
									<span>Form Inputs</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="searchbars" onclick='routecontrols({modifier: "searchbars", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: palevioletred;">${iconInterfaceElements.searchStroke}</span>
								<div class="label">
									<span>Search Bars</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="selectiongrids" onclick='routecontrols({modifier: "selectiongrids", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: tomato;">${iconStyle(iconShapes.checkmarkCircleFill, iconShapes.checkmarkCircleStroke)}</span>
								<div class="label">
									<span>Selection Grids</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="tokens" onclick='routecontrols({modifier: "tokens", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: tomato;">${iconStyle(iconObjects.tagLeftFill, iconObjects.tagLeftStroke)}</span>
								<div class="label">
									<span>Tokens</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="badges" onclick='routecontrols({modifier: "badges", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: forestgreen;">${iconShapes.roundedrectangleHorizontalFill}</span>
								<div class="label">
									<span>Badges</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routecontrols({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(controls[options.modifier])
			
			switch (options.modifier) {
				case 'contextmenus':
					//SET PICKED MENU ITEMS
					$("[data-setting='picker1'] button[data-value='second']").addClass("picked");
					$("[data-setting='picker1'] .contextLabel").append("Second");
					
					break;
				case 'segmentedcontrols':
					//SET PICKED SEGMENTS
					$("[data-setting='segment1'] button[data-value='second']").addClass("picked");
					$("[data-setting='segment2'] button[data-value='columns']").addClass("picked");
					$("[data-setting='segment3'] button[data-value='image2']").addClass("picked");
					
					break;
				case 'searchbars':
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
							<div data-button="item-flat">
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
						valueClass: "itemLabel",
						emptyIcon: iconNature.sparkleDuo,
						emptyMessage: "No Pok&eacute;mon Found",
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
				case 'sharebutton':
					if (navigator.share) {
						// $("#dummyShareButton").remove();
						$("#explainer section").append(`
							<button class="transparent share">
								${iconInterfaceElements.shareSquareUpStroke}
							</button>
						`);
					}
					break
			}
		}
	}
}

function routelayout(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Layout</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<h2 class="headerList">Functions</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="routing" onclick='routelayout({modifier: "routing", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.installSquareRightStroke}</span>
								<div class="label">
									<span>Routing</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Structure</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="columns" onclick='routelayout({modifier: "columns", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue;">${iconInterfaceElements.columnsTripleStroke}</span>
								<div class="label">
									<span>Columns</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="sidebars" onclick='routelayout({modifier: "sidebars", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue;">${iconStyle(iconInterfaceElements.sidebarLeftFill, iconInterfaceElements.sidebarLeftStroke)}</span>
								<div class="label">
									<span>Sidebars</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="itemlists" onclick='routelayout({modifier: "itemlists", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue;">${iconInterfaceElements.tableviewStroke}</span>
								<div class="label">
									<span>Item Lists</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="tables" onclick='routelayout({modifier: "tables", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue;">${iconInterfaceElements.tableFill}</span>
								<div class="label">
									<span>Tables</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="toolbars" onclick='routelayout({modifier: "toolbars", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue">${iconInterfaceElements.windowBarTopFill}</span>
								<div class="label">
									<span>Toolbars</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="tabbars" onclick='routelayout({modifier: "tabbars", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: lightskyblue">${iconInterfaceElements.windowBarBottomFill}</span>
								<div class="label">
									<span>Tab Bars</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Containers</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="scrollviews" onclick='routelayout({modifier: "scrollviews", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.scrollviewStroke}</span>
								<div class="label">
									<span>Scrollviews</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="sections" onclick='routelayout({modifier: "sections", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.windowBarTopStroke}</span>
								<div class="label">
									<span>Sections</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="accordions" onclick='routelayout({modifier: "accordions", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconShapes.chevronSingleCircleDownStroke}</span>
								<div class="label">
									<span>Accordions</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="banners" onclick='routelayout({modifier: "banners", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--warning);">${iconInterfaceElements.exclamationTriangleFill}</span>
								<div class="label">
									<span>Banners</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="iframes" onclick='routelayout({modifier: "iframes", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconStyle(iconObjects.compassFill, iconObjects.compassStroke)}</span>
								<div class="label">
									<span>iframes</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routelayout({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(layout[options.modifier])
			
			switch (options.modifier) {
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
				case 'tabbars':
					routetabs('tabfourth')
					routesegment('segmentsecond')
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
				case 'itemlists':
					$("#primaryContent").append(secondaryNav.itemLists);
					$("[data-source='itemListStandard'] [data-value='button3']").addClass("picked");
					break;
			}
		}
	}
}

function routemodals(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Modals</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						${generateInstallPanel()}
					
						<h2 class="headerList">Functions</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="dialogs" onclick='routemodals({modifier: "dialogs", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconShapes.rectangleOverlapHorizontalFill, iconShapes.rectangleOverlapHorizontalStroke)}</span>
								<div class="label">
									<span>Dialogs</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Modal Types</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="sheets" onclick='routemodals({modifier: "sheets", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconStyle(iconShapes.rectangleStackHorizontalFill, iconShapes.rectangleStackHorizontalStroke)}</span>
								<div class="label">
									<span>Sheets</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="lightboxes" onclick='routemodals({modifier: "lightboxes", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconObjects.loupeStroke}</span>
								<div class="label">
									<span>Lightboxes</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="alerts" onclick='routemodals({modifier: "alerts", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--warning);">${iconStyle(iconObjects.bellFill, iconObjects.bellStroke)}</span>
								<div class="label">
									<span>Alerts</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="toasts" onclick='routemodals({modifier: "toasts", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--warning);">${iconStyle(iconInterfaceElements.exclamationCircleFill, iconInterfaceElements.exclamationCircleStroke)}</span>
								<div class="label">
									<span>Toasts</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">System Modals</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="shortcutspanel" onclick='routemodals({modifier: "shortcutspanel", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: limegreen;">${iconInterfaceElements.keyCommand}</span>
								<div class="label">
									<span>Shortcuts Panel</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="installbanner" onclick='routemodals({modifier: "installbanner", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: limegreen;">${iconInterfaceElements.installSquareDownStroke}</span>
								<div class="label">
									<span>Install Banner</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="whatsnewpanel" onclick='routemodals({modifier: "whatsnewpanel", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: limegreen;">${iconNature.sparkleFill}</span>
								<div class="label">
									<span>What's New Panel</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routemodals({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(modals[options.modifier])
		}
	}
}

function routevisuals(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Visuals</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<h2 class="headerList">Generated Views</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="displayoptions" onclick='routevisuals({modifier: "displayoptions", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconInterfaceElements.gridCircleFill, iconInterfaceElements.gridCircleStroke)}</span>
								<div class="label">
									<span>Display Options</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="blankstates" onclick='routevisuals({modifier: "blankstates", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconInterfaceElements.questionCircleFill, iconInterfaceElements.questionCircleStroke)}</span>
								<div class="label">
									<span>Blank States</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="spinners" onclick='routevisuals({modifier: "spinners", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.spinnerDuo}</span>
								<div class="label">
									<span>Spinners</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="appglyph" onclick='routevisuals({modifier: "appglyph", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconLogos.rebarDuo}</span>
								<div class="label">
									<span>App Glyph</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Components</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="colours" onclick='routevisuals({modifier: "colours", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: darkorchid;">${iconShapes.vennDiagramTriple}</span>
								<div class="label">
									<span>Semantic Colours</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="iconsguide" onclick='routevisuals({modifier: "iconsguide", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: darkorchid;">${iconStyle(iconShapes.starFivePointFill, iconShapes.starFivePointStroke)}</span>
								<div class="label">
									<span>Icons</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="typography" onclick='routevisuals({modifier: "typography", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: darkorchid;">${iconInterfaceElements.textEdit}</span>
								<div class="label">
									<span>Typography</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="images" onclick='routevisuals({modifier: "images", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: darkorchid;">${iconObjects.photoLandscapeStroke}</span>
								<div class="label">
									<span>Images</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="dynamictype" onclick='routevisuals({modifier: "dynamictype", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: dodgerblue;">${iconInterfaceElements.textSize}</span>
								<div class="label">
									<span>Dynamic Type</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="appearance" onclick='routevisuals({modifier: "appearance", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: dodgerblue;">${iconInterfaceElements.appearance}</span>
								<div class="label">
									<span>Appearance</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="accent" onclick='routevisuals({modifier: "accent", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: dodgerblue;">${iconObjects.swatchBookRight}</span>
								<div class="label">
									<span>Accent</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="reducemotion" onclick='routevisuals({modifier: "reducemotion", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: dodgerblue;">${iconStyle(iconObjects.dialOffFill, iconObjects.dialOffStroke)}</span>
								<div class="label">
									<span>Reduce Motion</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="increasedcontrast" onclick='routevisuals({modifier: "increasedcontrast", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: dodgerblue;">${iconShapes.circleHalfVerticalRightFill}</span>
								<div class="label">
									<span>Increased Contrast</span>
								</div>
							</button>
						</section>
						<h2 class="headerList">Code</h2>
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="cssvariables" onclick='routevisuals({modifier: "cssvariables", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconShapes.bracketsCurly}</span>
								<div class="label">
									<span>CSS Variables</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="utilityclasses" onclick='routevisuals({modifier: "utilityclasses", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconStyle(iconObjects.hammerFill, iconObjects.hammerStroke)}</span>
								<div class="label">
									<span>Utility Classes</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="breakpoints" onclick='routevisuals({modifier: "breakpoints", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.splitShapeStroke}</span>
								<div class="label">
									<span>Breakpoints</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="thememetatag" onclick='routevisuals({modifier: "thememetatag", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconInterfaceElements.windowBarTopFill}</span>
								<div class="label">
									<span>Theme Meta Tag</span>
								</div>
							</button>
						</div>
					</section>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routevisuals({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(visuals[options.modifier])
			
			switch (options.modifier) {
				case 'dynamictype':
					generateDisplayOptions({
						target: "pickerText",
						themeOptions: false,
						accentOptions: false,
						textSizeOptions: true,
						textWeightOptions: true,
						textFontOptions: true,
					});
					
					break;
				case 'displayoptions':
					//GENERATE DISPLAY OPTIONS
					generateDisplayOptions({
						target: "exampleDisplayOptions",
						themeOptions: true,
						accentOptions: true,
						textSizeOptions: true,
						textWeightOptions: true,
						contrastOptions: true,
						motionOptions: true,
						textFontOptions: true,
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
				case 'reducemotion':
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
				case 'increasedcontrast':
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
				case 'blankstates':
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
			}
		}
	}
}

function routecharts(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Charts</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="pie" onclick='routecharts({modifier: "pie", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconCharts.pie60Stroke}</span>
								<div class="label">
									<span>Pie and Donut</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="gantt" onclick='routecharts({modifier: "gantt", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconCharts.gantt}</span>
								<div class="label">
									<span>Gantt</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="stats" onclick='routecharts({modifier: "stats", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconCharts.barRight}</span>
								<div class="label">
									<span>Stats</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routecharts({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(charts[options.modifier])
			
			switch (options.modifier) {
				case 'pie':
					generateChartPie({
						target: 'containerFruit',
						title: 'Fruits',
						donutSize: 250,
						legend: true,
						includeCount: true,
						countLabel: `qty`,
						data: [
							['Watermelon', 35],
							['Mandarin', 32],
							['Lemon', 24],
							['Lime', 18],
							['Cucumber', 12],
							['Blueberry', 8],
							['Blackberry', 2]
						]
					})
					generateChartPie({
						target: 'containerVotes',
						title: 'Votes',
						donutSize: 50,
						legend: true,
						includeCount: false,
						data: [
							['For', 32],
							['Against', 18],
						]
					})
					break;
				case 'gantt':
					generateChartGantt({
						target: 'exampleChartGantt',
						primaryLabel: 'Fruits',
						images: true,
						subtext: true,
						badge: true,
						direction: 'ascending',
						columnTitles: [
							{
								label: 'JAN',
								value: 1,
							},
							{
								label: 'FEB',
								value: 2,
							},
							{
								label: 'MAR',
								value: 3,
							},
							{
								label: 'APR',
								value: 4,
							},
							{
								label: 'MAY',
								value: 5,
							},
							{
								label: 'JUN',
								value: 6,
							},
							{
								label: 'JUL',
								value: 7,
							},
							{
								label: 'AUG',
								value: 8,
							},
							{
								label: 'SEP',
								value: 9,
							},
							{
								label: 'OCT',
								value: 10,
							},
							{
								label: 'NOV',
								value: 11,
							},
							{
								label: 'DEC',
								value: 12,
							},
						],
						data: [
							{
								name:'Watermelon',
								key: 'watermelon',
								image: 'app/images/fruits/watermelon.png',
								subtext: 'Summer',
								badge: '',
								start: 1,
								end: 3,
							},
							{
								name:'Mandarin',
								key: 'mandarin',
								image: 'app/images/fruits/mandarin.png',
								subtext: 'Autumn',
								badge: '',
								start: 2,
								end: 6,
							},
							{
								name:'Lemon',
								key: 'lemon',
								image: 'app/images/fruits/lemon.png',
								subtext: 'Winter',
								badge: '',
								start: 7,
								end: 9,
							},
							{
								name:'Kiwi',
								key: 'kiwi',
								image: 'app/images/fruits/kiwi.png',
								subtext: '',
								badge: '<p class="containerBadge mini excludeMargin" data-type="warning">Harvest</p>',
								start: 3,
								end: 3,
							},
							{
								name:'Cucumber',
								key: 'cucumber',
								image: 'app/images/fruits/cucumber.png',
								start: 10,
								subtext: '',
								badge: '',
								end: 12,
							},
							{
								name:'Pineapple',
								key: 'pineapple',
								image: 'app/images/fruits/pineapple.png',
								subtext: '',
								badge: '<p class="containerBadge mini excludeMargin" data-type="positive">Plant</p>',
								start: 5,
								end: 11,
							},
							{
								name:'Grapes',
								key: 'grapes',
								image: 'app/images/fruits/grapes.png',
								subtext: '',
								badge: '',
								start: 4,
								end: 8,
							}
						]
					})
					break;
				case 'stats':
					generateChartStats({
						target: 'exampleChartStatsLandscape',
						orientation: 'landscape',
						max: 256,
						data: [
							['HP', 140],
							['ATK', 85],
							['DEF', 95],
							['SP ATK', 145],
							['SP DEF', 95],
							['SPD', 130]
						]
					})
					
					generateChartStats({
						target: 'exampleChartStatsPortrait',
						orientation: 'portrait',
						max: 256,
						data: [
							['HP', 140],
							['ATK', 85],
							['DEF', 95],
							['SP ATK', 145],
							['SP DEF', 95],
							['SPD', 130]
						]
					})
					break;
	
			}
		}
	}
}

function routehelpers(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Helpers</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						${
							generateTipJar({
								mini: true,
							})
						}
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="preferences" onclick='routehelpers({modifier: "preferences", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: grey;">${iconObjects.gear}</span>
								<div class="label">
									<span>Preferences System</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="tipjar" onclick='routehelpers({modifier: "tipjar", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: limegreen;">${iconStyle(iconObjects.currencyCoinDollarFill, iconObjects.currencyCoinDollarStroke)}</span>
								<div class="label">
									<span>Tip Jar</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="capitalizeword" onclick='routehelpers({modifier: "capitalizeword", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconInterfaceElements.textCapital}</span>
								<div class="label">
									<span>Capitalize Word</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="copytoclipboard" onclick='routehelpers({modifier: "copytoclipboard", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconStyle(iconObjects.clipboardFill, iconObjects.clipboardStroke)}</span>
								<div class="label">
									<span>Copy to Clipboard</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="iconstyle" onclick='routehelpers({modifier: "iconstyle", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconStyle(iconShapes.starFivePointFill, iconShapes.starFivePointStroke)}</span>
								<div class="label">
									<span>Icon Style</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="settimelength" onclick='routehelpers({modifier: "settimelength", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: tomato;">${iconStyle(iconObjects.clockFill, iconObjects.clockStroke)}</span>
								<div class="label">
									<span>Set Time Length</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="temporaryanimationpause" onclick='routehelpers({modifier: "temporaryanimationpause", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: tomato;">${iconObjects.clockPauseStroke}</span>
								<div class="label">
									<span>Temporary Animation Pause</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="graburlparameters" onclick='routehelpers({modifier: "graburlparameters", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: slateblue;">${iconStyle(iconObjects.compassFill, iconObjects.compassStroke)}</span>
								<div class="label">
									<span>Grab URL Parameters</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="grabos" onclick='routehelpers({modifier: "grabos", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: slateblue;">${iconHardware.monitorStroke}</span>
								<div class="label">
									<span>Grab OS</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="scrolltotop" onclick='routehelpers({modifier: "scrolltotop", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: var(--info);">${iconStyle(iconShapes.chevronSingleCircleUpFill, iconShapes.chevronSingleCircleUpStroke)}</span>
								<div class="label">
									<span>Scroll to Top</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routehelpers({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnTertiary").append(helpers[options.modifier])
		}
	}
}

function routeicons(options) {
	if (options.modifier == false) {
		routesidebar({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "secondary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "route",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			$(".columnSecondary").append(`
				<header class="containerToolbar">
					<div class="pinLeft">
						<button data-button="action-transparent" class="back slim toolbarItem" onclick='routesidebar({modifier: false, navtype: "backwards"})' title="Navigate Back">
							${insertBackButton("Rebar")}
						</button>
					</div>
					<h1 class="headerToolbar">Icons</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar">
					<div class="containerItemList inset">
						<section class="containerSection excludePadding">
							<button data-button="item-rounded" data-icon-size="fixed" data-name="interfaceicons" onclick='routeicons({modifier: "interfaceicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconInterfaceElements.sliderVerticalFill, iconInterfaceElements.sliderVerticalStroke)}</span>
								<div class="label">
									<span>Interface Elements</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="shapesicons" onclick='routeicons({modifier: "shapesicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconShapes.plusCircleFill, iconShapes.plusCircleStroke)}</span>
								<div class="label">
									<span>Shapes</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="objectsicons" onclick='routeicons({modifier: "objectsicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconObjects.legoFill, iconObjects.legoStroke)}</span>
								<div class="label">
									<span>Objects</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="indiciesicons" onclick='routeicons({modifier: "indiciesicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconIndices.oneCircleFill, iconIndices.oneCircleStroke)}</span>
								<div class="label">
									<span>Indices</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="natureicons" onclick='routeicons({modifier: "natureicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconNature.sunFill, iconNature.sunStroke)}</span>
								<div class="label">
									<span>Nature</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="chartsicons" onclick='routeicons({modifier: "chartsicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconCharts.barUp}</span>
								<div class="label">
									<span>Charts</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="humanicons" onclick='routeicons({modifier: "humanicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconHuman.userFill, iconHuman.userStroke)}</span>
								<div class="label">
									<span>Human</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="hardwareicons" onclick='routeicons({modifier: "hardwareicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconHardware.keyboardFill, iconHardware.keyboardStroke)}</span>
								<div class="label">
									<span>Hardware</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="transporticons" onclick='routeicons({modifier: "transporticons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconStyle(iconTransport.carFill, iconTransport.carStroke)}</span>
								<div class="label">
									<span>Transport</span>
								</div>
							</button>
							<button data-button="item-rounded" data-icon-size="fixed" data-name="logosicons" onclick='routeicons({modifier: "logosicons", navtype: "forwards"})'>
								<span class="containerIcon" style="--icon-container: steelblue;">${iconLogos.rebarDuo}</span>
								<div class="label">
									<span>Logos</span>
								</div>
							</button>
						</section>
					</div>
				</div>
			`)
		}
	}
	
	if (options.modifier != false) {
		routeicons({
			modifier: false, 
			navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
		});
		
		controllerRoute({
			columns: 3,
			level: "tertiary",
			route: grabFunctionName().replace('route',''),
			modifier: options.modifier,
			type: options.navtype,
			highlight: "modifier",
		})
		
		if (options.navtype == "forwards" || options.navtype == "deeplink") {
			//DATA
				let iconGroup
				let iconCodeGroup
				let groupName
				let iconImage
				
				switch (options.modifier) {
					case 'interfaceicons':
						iconGroup = iconInterfaceElements
						iconCodeGroup = "iconInterfaceElements"
						groupName = "Interface Elements"
						iconImage = iconInterfaceElements.sliderVerticalStroke
						break;
					case 'shapesicons':
						iconGroup = iconShapes
						iconCodeGroup = "iconShapes"
						groupName = "Shapes"
						iconImage = iconShapes.plusCircleStroke
						break;
					case 'objectsicons':
						iconGroup = iconObjects
						iconCodeGroup = "iconObjects"
						groupName = "Objects"
						iconImage = iconObjects.legoStroke
						break;
					case 'indiciesicons':
						iconGroup = iconIndices
						iconCodeGroup = "iconIndices"
						groupName = "Indicies"
						iconImage = iconIndices.oneCircleStroke
						break;
					case 'natureicons':
						iconGroup = iconNature
						iconCodeGroup = "iconNature"
						groupName = "Nature"
						iconImage = iconNature.sunStroke
						break;
					case 'chartsicons':
						iconGroup = iconCharts
						iconCodeGroup = "iconCharts"
						groupName = "Charts"
						iconImage = iconCharts.barUp
						break;
					case 'humanicons':
						iconGroup = iconHuman
						iconCodeGroup = "iconHuman"
						groupName = "Human"
						iconImage = iconHuman.userStroke
						break;
					case 'hardwareicons':
						iconGroup = iconHardware
						iconCodeGroup = "iconHardware"
						groupName = "Hardware"
						iconImage = iconHardware.keyboardStroke
						break;
					case 'transporticons':
						iconGroup = iconTransport
						iconCodeGroup = "iconTransport"
						groupName = "Transport"
						iconImage = iconTransport.rocketStroke
						break;
					case 'logosicons':
						iconGroup = iconLogos
						iconCodeGroup = "iconLogos"
						groupName = "Logos"
						iconImage = iconLogos.rebarThinStroke
						break;
				}
			
			//APPEND SKELETON
				$(".columnTertiary").append(`
					<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
						<div class="pinLeft">
							<button data-button="action-transparent" class="back slim toolbarItem" onclick='routeicons({modifier: false, navtype: "backwards"})' title="Navigate Back">
								${iconShapes.chevronBackwardsStroke}
								Icons
							</button>
							<button data-button="action-transparent" class="toolbarItem collapseAside">
								${iconInterfaceElements.sidebarLeftStroke}
							</button>
						</div>
						<h1 class="headerToolbar">${groupName}</h1>
						<div class="pinRight">
							<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
						</div>
					</header>
					<div class="containerInlineAccessory">
						<div class="containerAccessoryBar">
							<div class="containerSearch">
								<input type="search" placeholder="Search Icons" id="iconSearch" />
								<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
								<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
							</div>
						</div>
						<div class="scrollview paddingContent " id="iconGallery"></div>
					</div>
				`)
				
			//GENERATE LIST
				$.each( iconGroup, function( key, val ) {
					if (key.includes("Multi") == true) {
						$("#iconGallery").append(`
							<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="${iconCodeGroup}.${key}" onclick="copyIconName(this)">
								<span class="iconPlatter useInitialFill">${val}</span>
								<span class="iconName">${key}</span>
							</div>
						`)
					} else {
						$("#iconGallery").append(`
							<div class="containerIcon" title="Copy ${key} to Clipboard" data-iconname="${iconCodeGroup}.${key}" onclick="copyIconName(this)">
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
					valueClass: "iconName",
					emptyIcon: iconImage,
					emptyMessage: `No ${groupName} Icons Found`,
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
		}
	}
}

//TABS
function routetabs(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: false,
	})
	
	switch (modifier) {
		case "tabfirst":
			$(`#contentAreaTabs1`).empty().append(`
				<h1 class="alwaysMain">${iconObjects.handsetLeadingFill}</h1>
			`)
			break;
		case "tabsecond":
			$(`#contentAreaTabs1`).empty().append(`
				<h1 class="alwaysMain">${iconHuman.userCircleFill}</h1>
			`)
			break;
		case "tabthird":
			$(`#contentAreaTabs1`).empty().append(`
				<h1 class="alwaysMain">${iconObjects.bagFill}</h1>
			`)
			break;
		case "tabfourth":
			$(`#contentAreaTabs1`).empty().append(`
				<h1 class="alwaysMain">${iconObjects.loupeFill}</h1>
			`)
			break;
		case "tabfifth":
			$(`#contentAreaTabs1`).empty().append(`
				<h1 class="alwaysMain"><img src="app/images/ui/sidebar1.png" /></h1>
			`)
			break;
	}
}

function routesegment(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: false,
	})
	
	switch (modifier) {
		case "segmentfirst":
			$(`#contentAreaTabs2`).append(`
				<h1 class="alwaysMain">First</h1>
			`)
			break;
		case "segmentsecond":
			$(`#contentAreaTabs2`).append(`
				<h1 class="alwaysMain">Second</h1>
			`)
			break;
		case "segmentthird":
			$(`#contentAreaTabs2`).append(`
				<h1 class="alwaysMain">Third</h1>
			`)
			break;
		case "segmentfourth":
			$(`#contentAreaTabs2`).append(`
				<h1 class="alwaysMain">Fourth</h1>
			`)
			break;
		case "segmentfifth":
			$(`#contentAreaTabs2`).append(`
				<h1 class="alwaysMain">Fifth</h1>
			`)
			break;
	}
}

//SEGMENTED CONTROLS
function routesegmentexampledefault(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: false,
	})
}

function routesegmentexamplesplit(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: false,
	})
}

function routesegmentexampledisplay(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: false,
	})
}