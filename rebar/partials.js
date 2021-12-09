const views = {
	defaultView: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "secondaryNav",
			columnLevel: 0,
			removePicked: "primaryNav",
			query: "section"
		},
		content: ``
	},
	
	//SIDEBAR
	gettingStarted: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" title="Navigate Back">
					${iconShapes.chevronBackwardsStroke}
					Rebar
				</button>
				</div>
				<h1 class="headerToolbar">Getting Started</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="welcome">
							${iconHuman.handWaveRightStroke}
							<div class="label">
								<span>Welcome</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="fileStructure">
							${iconObjects.folderHorizontalStroke}
							<div class="label">
								<span>File Structure</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="appStructure">
							${iconObjects.legoStroke}
							<div class="label">
								<span>App Structure</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="metadata">
							${iconInterfaceElements.infoCircleStroke}
							<div class="label">
								<span>Metadata</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="versionHistory">
							${iconShapes.plusSquareRoundedStroke}
							<div class="label">
								<span>Version History</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="requirements">
							${iconShapes.checkmarkCircleStroke}
							<div class="label">
								<span>Requirements</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`
	},
	controls: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content:`
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Controls</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<h2 class="headerList">Buttons</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="buttonForm">
							${iconShapes.rectangeHorizontalDoubleStroke}
							<div class="label">
								<span>Buttons</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonSidebar">
							${iconInterfaceElements.sidebarLeftStroke}
							<div class="label">
								<span>Sidebar Items</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonListItem">
							${iconInterfaceElements.tableviewStroke}
							<div class="label">
								<span>List Items</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonSegment">
							${iconInterfaceElements.segmentedControl}
							<div class="label">
								<span>Segmented Items</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonToolbar">
							${iconInterfaceElements.windowBarTopFill}
							<div class="label">
								<span>Toolbar Items</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonTab">
							${iconInterfaceElements.windowBarBottomFill}
							<div class="label">
								<span>Tab Bar Items</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonBack">
							${iconShapes.chevronSingleLeftStroke}
							<div class="label">
								<span>Back Button</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="buttonShare">
							${iconInterfaceElements.shareSquareUpStroke}
							<div class="label">
								<span>Share Button</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="switches">
							${iconInterfaceElements.switchDoubleTopOnFill}
							<div class="label">
								<span>Switches</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Other Controls</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="contextMenus">
							${iconInterfaceElements.menuStroke}
							<div class="label">
								<span>Context Menus</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="segmentedControls">
							${iconInterfaceElements.segmentedControl}
							<div class="label">
								<span>Segmented Controls</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="inputs">
							${iconHardware.keyboardStroke}
							<div class="label">
								<span>Inputs</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="search">
							${iconInterfaceElements.searchStroke}
							<div class="label">
								<span>Search Bars</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="selectionGrids">
							${iconShapes.checkmarkCircleStroke}
							<div class="label">
								<span>Selection Grids</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="tokens">
							${iconObjects.tagLeftStroke}
							<div class="label">
								<span>Tokens</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="badges">
							${iconShapes.roundedrectangleHorizontalStroke}
							<div class="label">
								<span>Badges</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`,
	},
	layout: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content:`
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Layout</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<h2 class="headerList">Functions</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="routing">
							${iconObjects.compassStroke}
							<div class="label">
								<span>Routing</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="sourceLists">
							${iconInterfaceElements.installSquareRightStroke}
							<div class="label">
								<span>Source Lists</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Content Blocks</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="columns">
							${iconInterfaceElements.columnsTripleStroke}
							<div class="label">
								<span>Columns</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="sidebars">
							${iconInterfaceElements.sidebarLeftStroke}
							<div class="label">
								<span>Sidebars</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="itemLists">
							${iconInterfaceElements.tableviewStroke}
							<div class="label">
								<span>Item Lists</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="toolbars">
							${iconInterfaceElements.windowBarTopFill}
							<div class="label">
								<span>Toolbars</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="tabBars">
							${iconInterfaceElements.windowBarBottomFill}
							<div class="label">
								<span>Tab Bars</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Content Containers</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="scrollviews">
							${iconInterfaceElements.scrollviewStroke}
							<div class="label">
								<span>Scrollviews</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="sections">
							${iconInterfaceElements.windowBarTopStroke}
							<div class="label">
								<span>Sections</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="accordions">
							${iconShapes.chevronSingleCircleDownStroke}
							<div class="label">
								<span>Accordions</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="iframes">
							${iconObjects.compassStroke}
							<div class="label">
								<span>iframes</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`,
	},
	modals: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Modals</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<h2 class="headerList">Functions</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="panels">
							${iconShapes.rectangleOverlapHorizontalStroke}
							<div class="label">
								<span>Panels</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Modal Types</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="sheets">
							${iconShapes.rectangleStackHorizontalStroke}
							<div class="label">
								<span>Sheets</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="lightboxes">
							${iconObjects.loupeStroke}
							<div class="label">
								<span>Lightboxes</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="alerts">
							${iconObjects.bellStroke}
							<div class="label">
								<span>Alerts</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="toasts">
							${iconInterfaceElements.exclamationCircleStroke}
							<div class="label">
								<span>Toasts</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">System Modals</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="shortcutsPanel">
							${iconInterfaceElements.keyCommand}
							<div class="label">
								<span>Shortcuts Panel</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="installBanner">
							${iconInterfaceElements.installSquareDownStroke}
							<div class="label">
								<span>Install Banner</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="whatsNewPanel">
							${iconNature.sparkleFill}
							<div class="label">
								<span>What's New Panel</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`,
	},
	visuals: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Visuals</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<h2 class="headerList">Generated Views</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="displayOptions">
							${iconInterfaceElements.gridCircleStroke}
							<div class="label">
								<span>Display Options</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="blankStates">
							${iconInterfaceElements.questionCircleStroke}
							<div class="label">
								<span>Blank States</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="spinners">
							${iconInterfaceElements.spinnerDuo}
							<div class="label">
								<span>Spinners</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Components</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="colours">
							${iconShapes.vennDiagramTriple}
							<div class="label">
								<span>Semantic Colours</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="icons">
							${iconShapes.starFivePointStroke}
							<div class="label">
								<span>Icons</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="typography">
							${iconInterfaceElements.textEdit}
							<div class="label">
								<span>Typography</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="dynamicType">
							${iconInterfaceElements.textSize}
							<div class="label">
								<span>Dynamic Type</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="images">
							${iconObjects.photoLandscapeStroke}
							<div class="label">
								<span>Images</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="appearance">
							${iconInterfaceElements.appearance}
							<div class="label">
								<span>Appearance</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="accent">
							${iconObjects.swatchBookRight}
							<div class="label">
								<span>Accent</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="reduceMotion">
							${iconObjects.dialOffStroke}
							<div class="label">
								<span>Reduce Motion</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="increasedContrast">
							${iconShapes.circleHalfVerticalRightFill}
							<div class="label">
								<span>Increased Contrast</span>
							</div>
						</button>
					</section>
					<h2 class="headerList">Code</h2>
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="cssVariables">
							${iconShapes.bracketsCurly}
							<div class="label">
								<span>CSS Variables</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="utilityClasses">
							${iconObjects.hammerStroke}
							<div class="label">
								<span>Utility Classes</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="breakpoints">
							${iconInterfaceElements.splitShapeStroke}
							<div class="label">
								<span>Breakpoints</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="themeMetaTag">
							${iconInterfaceElements.windowBarTopFill}
							<div class="label">
								<span>Theme Meta Tag</span>
							</div>
						</button>
					</div>
				</section>
			</div>
		`,
	},
	helpers: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Helpers</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="preferencesSystem">
							${iconObjects.gear}
							<div class="label">
								<span>Preferences System</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="tipJar">
							${iconObjects.currencyCoinDollarStroke}
							<div class="label">
								<span>Tip Jar</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="capitalizeWord">
							${iconInterfaceElements.textCapital}
							<div class="label">
								<span>Capitalize Word</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="copyToClipboard">
							${iconObjects.clipboardStroke}
							<div class="label">
								<span>Copy to Clipboard</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="setTimeLength">
							${iconObjects.clockStroke}
							<div class="label">
								<span>Set Time Length</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="grabUrlParameters">
							${iconObjects.compassStroke}
							<div class="label">
								<span>Grab URL Parameters</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`,
	},
	iconBrowser: {
		properties: {
			originContainer: null,
			parentContainer: "primaryNav",
			parentRoute: null,
			targetContainer: "secondaryNav",
			clearContainer: "primaryContent",
			columnLevel: 1,
			removePicked: "primaryNav",
			query: "category"
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="secondaryNav" data-removeslide="primaryNav" data-clear="primaryContent" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
				</div>
				<h1 class="headerToolbar">Icons</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset">
					<section class="containerSection excludePadding">
						<button class="itemList rounded fixedIconSize" data-value="galleryInterfaceElements">
							${iconInterfaceElements.sliderVerticalStroke}
							<div class="label">
								<span>Interface Elements</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryShapes">
							${iconShapes.plusCircleStroke}
							<div class="label">
								<span>Shapes</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryObjects">
							${iconObjects.legoStroke}
							<div class="label">
								<span>Objects</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryIndices">
							${iconIndices.oneCircleStroke}
							<div class="label">
								<span>Indices</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryNature">
							${iconNature.sunStroke}
							<div class="label">
								<span>Nature</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryCharts">
							${iconCharts.barRight}
							<div class="label">
								<span>Charts</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryHuman">
							${iconHuman.userStroke}
							<div class="label">
								<span>Human</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryHardware">
							${iconHardware.keyboardStroke}
							<div class="label">
								<span>Hardware</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryTransport">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Transport</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize" data-value="galleryLogos">
							${iconLogos.rebarDuo}
							<div class="label">
								<span>Logos</span>
							</div>
						</button>
					</section>
				</div>
			</div>
		`,
	},

	//GETTING STARTED
	welcome: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar"></h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<div id="containerWelcome" class="spacerTriple">
					<img src="icon.png" width="256" />
					<h1>Welcome to Rebar</h1>
					<p>Rebar is a layout framework designed to give PWAs a native-feeling experience.</p>
				</div>
				<div id="gridWelcome">
					<section class="containerSection excludeMargin">
						<div class="alwaysAccent spacerHalf">${iconShapes.heartStroke}</div>
						<h3 class="h4">Native Feel</h3>
						<p class="excludeMargin">Rebar is designed to feel like a native app but not look 100% like one. This is because a Rebar app can be run on any platform with a web browser. You should strive to include what feels best from various platforms while maintaining your own uniqueness.</p>
					</section>
					
					<section class="containerSection excludeMargin">
						<div class="alwaysAccent spacerHalf">${iconShapes.checkmarkCircleStroke}</div>
						<h3 class="h4">Consistent Intent</h3>
						<p class="excludeMargin">Components in Rebar are always designed to keep the same intent across all breakpoints and responsive modes. This leads to cleaner implementation. An example of this is Sheets always stay modal, they do not turn in to columns on larger screens.</p>
					</section>
					
					<section class="containerSection excludeMargin">
						<div class="alwaysAccent spacerHalf">${iconObjects.legoStroke}</div>
						<h3 class="h4">Building Blocks</h3>
						<p class="excludeMargin">Rebar packs in many functions you will need to build a PWA. Whether it be something large like view management to something little like copying to the clipboard.</p>
					</section>
					
					<section class="containerSection excludeMargin">
						<div class="alwaysAccent spacerHalf">${iconShapes.starFivePointStroke}</div>
						<h3 class="h4">Icon Set</h3>
						<p class="excludeMargin">Rebar includes an every growing icon set to cover all your iconography needs. Each icon comes in multiple styles to suite any style of app.</p>
					</section>
				</div>
				
				<div id="toastCrafted">${iconLogos.toastCrafted}</div>
			</div>
		`
	},
	fileStructure: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">File Structure</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>For a Rebar app all JS and CSS files pertaining to Rebar to should live at the root level of your app. Images have their own folder with sub-folders for the different categories of images. The default structure is such:</p>
				<ul>
					<li>app.js</li>
					<li>apple-touch-icon.png</li>
					<li>favicon.ico</li>
					<li>favicon.svg</li>
					<li>icon-maskable.png</li>
					<li>icon.png</li>
					<li>icons-rebar.png</li>
					<li>index.html</li>
					<li>manifest.json</li>
					<li>metadata.js</li>
					<li>ogimage.png</li>
					<li>partials.js</li>
					<li>rebar.css</li>
					<li>rebar.js</li>
					<li>styles.css</li>
					<li>sw.js</li>
					<li>images</li>
					<ul>
						<li>rebar</li>
						<ul>
							<li>arrow-back-dark.svg</li>
							<li>arrow-back-light.svg</li>
							<li>arrow-forward-dark.svg</li>
							<li>arrow-forward-light.svg</li>
							<li>tick-dark.svg</li>
							<li>tick-light.svg</li>
						</ul>
						<li>themes</li>
						<ul>
							<li>dark.svg</li>
							<li>light.svg</li>
							<li>system.svg</li>
						</ul>
					</ul>
				</ul>
			</div>
		`,
	},
	appStructure: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">App Structure</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Setting up a three column Rebar app requires this stucture:</p>
<pre>
&lt;div class="containerApp columnsThree"&gt;
    &lt;aside class="containerAside double"&gt;
        &lt;div class="columnPrimary containerSidebar" id=""&gt;&lt;/div&gt;
        &lt;div class="columnSecondary" id=""&gt;&lt;/div&gt;
    &lt;/aside>
    &lt;main id="">&lt;/main&gt;
    &lt;div id="appGlyph"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
				<p>The content of a Rebar app must always live in a <code>containerApp</code> container. <code>containerApp</code> manages a lot of the transitions for the app frame.</p>
				<p>Any sidebars (here I mean the concept of a sidebar, not the <code>Sidebar</code> component included with Rebar) should always live inside a <code>containerAside</code> container, which manages the transitions for these columns.</p>
				<p><code>#appGlyph</code> is not mandatory but is used to fill in a background image for the main content column when it is empty. If you include this it has to be an SVG and the raw code inserted directly in to the HTML.</p>
			</div>
		`,
	},
	metadata: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Metadata</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Metadata in the context of Rebar is a JS file named <code>metadata.js</code> that holds important properties for managing how your app looks, works, and is filled with content. It is mandatory to include this file and nothing should be left out. Below is an explanation of what each property is used for:</p>
				<ul>
					<li><code>appVersion</code>: The version number of your app. This is used to show new release notes to users.</li>
					<li><code>appName</code>: The name of your app. This is used in the Install Banner and How to Install Sheet.</li>
					<li><code>appDomain</code>: The URL for your app. This is used when calling the Sharing function.</li>
					<li><code>appPrivacyPolicy</code>: The URL for your Privacy Policy. This is used in the Tip Jar disclaimer text.</li>
					<li><code>appEmail</code>: The email you would like users to contact you at. This is used in the How to Install Sheet, specifically in the "Contact Support" link.</li>
					<li><code>appReleaseNotes</code>: The release note for the current version of your app. This is used in the What's New Sheet.</li>
					<li><code>appThemes</code>: The list of themes you are including in your app. These should be the same names as you use in your CSS. You also need to include what you would like the themes to be named in the tooltips in the Theme Picker.</li>
					<li><code>appAccents</code>: The list of accents you are including in your app. These should be the same names as you use in your CSS. You also need to include what you would like the accents to be named in the Accent Picker.</li>
					<li><code>appTextSizes</code>: The list of Dynamic Type text sizes you are including in your app. These should be set so that the <code>key</code> is the name you would use in CSS and the <code>value</code> is the label.</li>
					<li><code>appPreferencesVersion</code>: The version number for the internal app preferences (this does not need to match <code>appVersion</code>).</li>
					<li><code>appPreferencesDefault</code>: The default settings for your app. The starter project will include settings needed for Rebar to function but you can also include other app-specific default preferences here.</li>
					<li><code>baseTimeLength</code>: The global CSS transition timing value.</li>
					<li><code>dynamicTypeSizes</code>: The list of Dynamic Type text size values you are including in your app. These should be set so that the <code>key</code> is the CSS name and the <code>value</code> is the value you would like to set.</li>
					<li><code>promptForTips</code>: This takes a <code>true</code> or <code>false</code> value. If <code>true</code> Rebar will automatically display a Sheet containing the Tip Jar.</li>
					<li><code>shortcutKeys</code>: The structure for the Shortcut Keys Panel.</li>
				</ul>
			</div>
		`,
	},
	versionHistory: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Version</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2 class="h4">1.1</h2>
				<p class="subtext">3 December 2021</p>
				<h3>Framework</h3>
				<h4>Added</h4>
				<ul>
					<li><code>shapeCircle</code> class to set elements to always be circle</li>
					<li>New Charts, Human, Hardware, Transport, and Logos categories in the Icon Set</li>
					<li>Progress Bars</li>
					<li>New gradient backing for Panels</li>
					<li>Spinners</li>
					<li><code>spacerHalf</code> class</li>
					<li>Buttons can now have the <code>excludePadding</code> class applied to them which will cause them so have no background and a 50% opacity hover style</li>
					<li>Variables</li>
					<li>Tip Jar</li>
					<li>Privacy Policy link global constant</li>
					<li><code>shareURL()</code> function</li>
					<li>Tooltips to Rebar components</li>
					<li>An event listener for when the System Appearance changes so the Theme Colour Meta Tag can be updated</li>
					<li>You can now prompt users for a donation after 20, 100, and 500 refreshes (The promptForTips constant has been added to the Metadata file to control this)</li>
					<li>Capitalise Word function</li>
					<li>Preference management system</li>
					<li><code>keepInitialWidth</code> class to exempt elements from having widths applied to them by their parent containers</li>
					<li><code>disablePointer</code> class that disables pointer-events</li>
					<li>New multicoloured icon style for icons that need to carry semantic meaning with colours</li>
					<li>Added a styling hook for Dynamic Type Size</li>
					<li>Added support for an Increased Contrast mode which also supports the device settings</li>
					<li>Added <code>--warning</code> and <code>--info</code> CSS variables</li>
					<li>Added <code>.alwaysPositive</code>, <code>.alwaysDestructive</code>, <code>.alwaysWarning</code>, and <code>.alwaysInfo</code></li>
				</ul>
				<h4>Changes</h4>
				<ul>
					<li>Tab Bars have a new <code>.alwaysVertical</code> class to keep Tab Items from using a horizontal layout on larger screens</li>
					<li>The search function has been rewritten using vanilla JS to make it more efficient for larger lists</li>
					<li>The crop classes now apply to iframes</li>
					<li>The back button now has a slight delay on clearing out the previous content container</li>
					<li><code>routes()</code> now supports Route Categories so that you can load the same view with different data</li>
					<li>Partials now have a new <code>query</code> property that's used with Route Categories</li>
					<li>The Back and Share buttons have been updated to work with Route Categories</li>
					<li>The <code>urlParam</code> constant has been removed</li>
					<li>Section Headers can now contain a leading icon which will be appropriately sized</li>
					<li>It's preferred to now use the gradient backing for Toasts</li>
					<li>The Accordion click function has been modified so it can activate <code>.containerAccordionContents</code> without being right next to a <code>.headerAccordion</code></li>
					<li>Display Options can now generate the setting for Reduced Motion</li>
					<li>Icons have been added to the rows in the Display Options view</li>
					<li>It's now preferred to use <code>chevronSingleDownFill</code> for the gripper in Context Menus</li>
					<li>Selection Rings can have their parent gain the <code>.picked</code> class and have the picked style cascade down to them now</li>
					<li>The default style for tokens has been updated to make it more clear the difference between the default and picked states</li>
					<li>Tokens now toggle instead of setting an immutable picked state</li>
					<li><code>Auto-Fit</code> is now used for the Tokens Container</li>
					<li>The Back button won't remove the <code>picked</code> state from Tab Bar items if a Tab Bar is contained within the target view to navigate back to</li>
					<li>The Selection Grid function has been completely reworked to separate selection and retrieving picked items</li>
					<li>Some slight styling changes to the Blank States</li>
					<li>There is a new <code>removePicked</code> property on routes which allows <code>changeView()</code> to be much more targeted with where it removed the picked state</li>
					<li>The Escape key shortcut is now reserved for dismissing Panels</li>
					<li>The Theme Colour Meta Tag is now set to the <code>background</code> colour instead of the accent colour (Accent was way too distracting on Mobile Safari and Background was chosen because Foreground is often white and Safari ignores that)</li>
					<li>The Accent Picker will no longer set the Theme Colour Meta Tag, that's now the responsibility of the Theme Picker</li>
					<li>Adjusted the metrics of the <code>paddingContent</code> class</li>
					<li>Removed launch images since they are really flakey on different versions of iOS and aren't worth the effort to support</li>
					<li>Context Menus return an object instead of an array</li>
					<li>Removed <code>overflow: hidden;</code> on Accordion Containers because it was cropping icons</li>
					<li>Moved Dynamic Type, Appearance, Reduced Motion, App Version, First Run state, and Openings count to the new preferences system</li>
					<li>Switches, Segmented Controls, and Picker Menus no longer automatically store values in local storage due to needing more fine grain control with the new preferences system</li>
					<li>Renamed the styling hook for Dynamic Type Weight</li>
					<li>Theme and Accent names are now explicitly stated inside the Metadata file</li>
					<li>The Text Weight option has been changed to a Bold Text option which by default which means Rebar doesn't present a picker for multiple text weight options (if you want this you can still roll your own)</li>
					<li>The Theme and Accent Pickers will now display the name of what is picked</li>
					<li>Changed <code>.highlight</code> to <code>.alwaysAccent</code></li>
				</ul>
				<h4>Fixes</h4>
				<ul>
					<li>The App Glyph is now correctly positioned for two column layouts</li>
					<li>Picked List Items no longer have a hover state so it's clear that an item has been picked when you click on it</li>
					<li>The App Container and Panel Container now have the appropriate heights for Mobile Safari so that they don't get cropped by the navigation bars</li>
					<li>Hovering on Item List DIVs no longer causes their borders to disappear</li>
					<li>Picked Item List buttons that sit above a DIV will now cause the DIV to lose it's border</li>
					<li>A scrollbar no longer appears when invoking a Sheet</li>
					<li>Made the Appearance and Accent pickers use a more consistent and appropriate size</li>
					<li>The correct light/dark versions of accents should be used now</li>
					<li>Item Lists no longer set a size on the SVGs inside buttons inserted in to Item list Rows</li>
					<li>Context Menus with icons should accept long names again</li>
					<li>Context Menus inside List Items no longer have a border that shouldn't have been there on Chrome</li>
					<li>The shortcut key for bringing up the Shortcuts Panel will now do an input check so it doesn't activate while textfields are active</li>
					<li>Removed scrollbars that shouldn't be there on the Alert message text</li>
				</ul>
				<h4>Removed</h4>
				<ul>
					<li>Browser zoom is no longer blocked, it interfered with normal browser operations</li>
					<li>The <code>appTextWeights</code> and <code>urlParam</code> properties from the Metadata file</li>
				</ul>
				<h3>Icons</h3>
				<h4>Added</h4>
				<h5 class="h6">Interface Elements</h5>
				<ul>
					<li>Ellipses</li>
					<li>Ellipses in Circle</li>
					<li>Question in Circle</li>
					<li>Exclamation in Circle</li>
					<li>Info in Circle</li>
					<li>Spinner</li>
					<li>Text Size</li>
					<li>Text Weight</li>
					<li>Text Edit</li>
					<li>Filter</li>
					<li>Filter in Circle</li>
					<li>Location Arrow</li>
					<li>Low Signal</li>
					<li>Medium Signal</li>
					<li>High Signal</li>
					<li>Horizontal Bars</li>
					<li>Vertical Bars</li>
					<li>Compare Rectangle</li>
					<li>Tableview</li>
					<li>Segmented Control</li>
					<li>Window with Top Bar</li>
					<li>Window with Bottom Bar</li>
					<li>Switches</li>
					<li>Menu</li>
					<li>Scrollview</li>
					<li>Command Key</li>
					<li>Split Shapes</li>
				</ul>
				<h5 class="h6">Shapes</h5>
				<ul>
					<li>6 Pointed Star</li>
					<li>8 Pointed Star</li>
					<li>Plus in Rounded Square</li>
					<li>Circle Stack</li>
					<li>Checkmark in Circle</li>
					<li>Plus</li>
					<li>Slim Ellipses</li>
					<li>Circle</li>
					<li>Circle Half</li>
					<li>Single Rectangle</li>
					<li>Double Rectanlge</li>
					<li>Rounded Rectangle</li>
					<li>Rectangle Stack</li>
					<li>Curly Brackets</li>
					<li>Venn Diagram</li>
				</ul>
				<h5 class="h6">Objects</h5>
				<ul>
					<li>Gear</li>
					<li>Map Marker</li>
					<li>Map Marker with Hole</li>
					<li>Sword</li>
					<li>Shield</li>
					<li>Half Shield</li>
					<li>Off Dial</li>
					<li>On Dial</li>
					<li>Credit Card</li>
					<li>ID Card</li>
					<li>Clock</li>
					<li>Shopping Bag</li>
					<li>Highlighter</li>
					<li>Pencil</li>
					<li>Pen</li>
					<li>Trash</li>
					<li>Lego</li>
					<li>Folder</li>
					<li>Bell</li>
					<li>Loupe</li>
					<li>Swatch</li>
					<li>Swatch Book</li>
					<li>Clipboard</li>
					<li>Briefcase</li>
				</ul>
				<h5 class="h6">Charts</h5>
				<ul>
					<li>Bar</li>
					<li>Pie</li>
				</ul>
				<h5 class="h6">Human</h5>
				<ul>
					<li>Male Gender</li>
					<li>Female Gender</li>
					<li>Mixed Gender</li>
					<li>Left Raised Hand</li>
					<li>Left Hand Wave</li>
					<li>Right Raised Hand</li>
					<li>Right Hand Wave</li>
					<li>User</li>
					<li>User in Circle</li>
					<li>Open Eye</li>
					<li>Closed Eye</li>
					
				</ul>
				<h5 class="h6">Nature</h5>
				<ul>
					<li>Sparkle</li>
				</ul>
				<h5 class="h6">Transport</h5>
				<ul>
					<li>Rocket</li>
				</ul>
				<h5 class="h6">Logos</h5>
				<ul>
					<li>Toast Logo in Circle</li>
					<li>Thank You in English, German, Spanish, French, Italian, Japanese, Korean, Dutch, Russian, Chinese Simplified, and Chinese Traditional</li>
					<li>Rebar</li>
					<li>Shortcuts</li>
					<li>Podcast</li>
					<li>RSS</li>
					<li>TypeDex</li>
					<li>CritterDex</li>
					<li>Screen Sizes</li>
					<li>YouTube</li>
					<li>Twitter</li>
					<li>Facebook</li>
					<li>Facebook Messenger</li>
					<li>Instagram</li>
					<li>App Store</li>
				</ul>
				<h4>Updated</h4>
				<ul>
					<li>starFivePointFill</li>
				</ul>
				<h4>Renamed</h4>
				<ul>
					<li>starStroke &rarr; starFivePointStroke</li>
					<li>starFill &rarr; starFivePointFill</li>
					<li>starHalfStroke &rarr; starFivePointHalfStroke</li>
					<li>starHalfFill &rarr; starFivePointHalfFill</li>
					<li>starHalfDuo &rarr; starFivePointHalfDuo</li>
					<li>starRoundedSquareStroke &rarr; starFivePointRoundedSquareStroke</li>
					<li>starRoundedSquareFill &rarr; starFivePointRoundedSquareFill</li>
					<li>starRoundedSquareDuo &rarr; starFivePointRoundedSquareDuo</li>
					<li>moonStroke &rarr; moonRightStroke</li>
					<li>moonFill &rarr; moonRightFill</li>
					<li>logoToast and logoToastCrafted have been moved to the new Logos category</li>
				</ul>
				
				<h2 class="h4">1.0</h2>
				<p class="subtext">10 October 2021</p>
				<ul>
					<li>Initial release of Rebar</li>
					<li>Initial release of the Rebar Icon Set</li>
				</ul>
			</div>
		`,
	},
	requirements: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "gettingStarted",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="gettingStarted" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Requirements</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>These requirements are based on needing to support <code>min()</code>, <code>max()</code>, <code>minmax()</code>, <code>clamp()</code>, <code>env()</code>, and <code>aspect-ratio</code>. For this reason (among many others) no version of Internet Explorer is supported. The minimum requirements for any Rebar app are:</p>
				<h2>Version 1.1</h2>
				<p class="subtext">Increased due to needing <code>aspect-ratio</code>.</p>
				<ul>
					<li>Edge 88</li>
					<li>Firefox 89</li>
					<li>Chrome 88</li>
					<li>Safari 15</li>
					<li>Opera 74</li>
				</ul>
				
				<h2>Version 1.0</h2>
				<ul>
					<li>Edge 79</li>
					<li>Firefox 75</li>
					<li>Chrome 79</li>
					<li>Safari 13</li>
					<li>Opera 66</li>
				</ul>
			</div>
		`,
	},
	
	//CONTROLS
	buttonForm: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Buttons</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Primary</h3>
				<section class="containerSection">
					<button>Standard</button>
					<button class="confirm">Confirm</button>
					<button class="transparent">Transparent</button>
					<button class="transparent confirm">Confirm</button>
					<button class="disabled">Disabled</button>
					<button>
						${iconShapes.plusCircleStroke}
					</button>
					<button class="useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="transparent">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="transparent useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="circular">
						${iconShapes.starFivePointFill}
					</button>
					<button class="large">Large</button>
				</section>
	
				<h3 class="h6">Secondary</h3>
				<section class="containerSection">
					<button class="secondary">Standard</button>
					<button class="secondary confirm">Confirm</button>
					<button class="secondary transparent">Transparent</button>
					<button class="secondary transparent confirm">Confirm</button>
					<button class="secondary disabled">Disabled</button>
					<button class="secondary">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="secondary useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="secondary transparent">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="secondary transparent useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="secondary circular">
						${iconShapes.starFivePointFill}
					</button>
					<button class="secondary large">Large</button>
				</section>
	
				<h3 class="h6">Outline</h3>
				<section class="containerSection">
					<button class="outline">Standard</button>
					<button class="outline confirm">Confirm</button>
					<button class="outline disabled">Disabled</button>
					<button class="outline">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="outline useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="outline circular">
						${iconShapes.starFivePointFill}
					</button>
					<button class="outline large">Large</button>
				</section>
				
				<h3 class="h6">Destructive</h3>
				<section class="containerSection">
					<button class="destructive">Standard</button>
					<button class="destructive confirm">Confirm</button>
					<button class="destructive transparent">Transparent</button>
					<button class="destructive transparent confirm">Confirm</button>
					<button class="destructive disabled">Disabled</button>
					<button class="destructive">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="destructive useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="destructive transparent">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="destructive transparent useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="destructive circular">
						${iconShapes.starFivePointFill}
					</button>
					<button class="destructive large">Large</button>
				</section>
				
				<h3 class="h6">Positive</h3>
				<section class="containerSection">
					<button class="positive">Standard</button>
					<button class="positive confirm">Confirm</button>
					<button class="positive transparent">Transparent</button>
					<button class="positive transparent confirm">Confirm</button>
					<button class="positive disabled">Disabled</button>
					<button class="positive">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="positive useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="positive transparent">
						${iconShapes.plusCircleStroke}
					</button>
					<button class="positive transparent useInitialFill">
						${iconInterfaceElements.exclamationCircleMulti}
					</button>
					<button class="positive circular">
						${iconShapes.starFivePointFill}
					</button>
					<button class="positive large">Large</button>
				</section>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerTriple">Buttons are the backbone of many components in Rebar. They are the base layer that enables a lot of styles to be applied. A Button can contain text, SVGs, and images.</p>
				
				<h3>Functions</h3>
				<p class="spacerTriple">Buttons have no functions in of themselves but can have many other functions applied to them since most clickable components will be based off of Buttons.</p>
				
				<h3>CSS</h3>
				<p>Buttons have many base styling classes that can be mixed with modified classes.</p>
				<h4 class="h6">Base Classes</h4>
				<ul>
					<li>To note there is no class for the Primary style, just including a <code>button</code> element will have it look like the Primary style.</li>
					<li><code>secondary</code> sets the backing to a translucent material.</li>
					<li><code>outline</code> removes the backing and adds a border.</li>
					<li><code>destructive</code> sets the backing to a red colour.</code>
					<li><code>positive</code> sets the backing to a green colour.</code>
				</ul>
				<h4 class="h6">Modifier Classes</h4>
				<ul>
					<li><code>transparent</code> will remove the backing and set the label to the colour of the base class.</li>
					<li><code>confirm</code> will set the label to bold text.</li>
					<li><code>disabled</code> will set the opacity down and disable pointer events.</code>
					<li><code>large</code> will increase the font size of the label.</li>
					<li><code>circular</code> will set the button to a fixed width and height and increase the border radius. It's recommended to only use this style with an icon.</li>
					<li><code>useInitialFill</code> will use the <code>fill</code> set inside the SVG instead of what comes from the Button class (this is what should be used for Multi style icons).</li>
				</ul>
				<p>There are many other styles but they are specific to different components. What is listed here can be used with any button but primarily intended for form buttons.</p>
			</div>
		`,
	},
	buttonSidebar: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Sidebar Items</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<button class="sidebar">
						<div class="labelSidebar">
							${iconNature.sunStroke}
							Standard
						</div>
						<div class="containerBadge">14</div>
					</button>
					<br><br>
					<button class="sidebar picked">
						<div class="labelSidebar">
							${iconNature.sunStroke}
							Picked
						</div>
						<div class="containerBadge">14</div>
					</button>
				</section>
				
				<h2>Documentation</h2>
				<p>Sidebar Items are buttons with the <code>sidebar</code> class. They come with default, <code>picked</code>, and <code>subdued</code> (this is used when an item in a secondary column is picked) states. An icon is not mandatory but highly recommended. You can include a Badge if need.</p>
				<h3 class="h6">Template</h3>
<pre>
&lt;button class="sidebar"&gt;
    &lt;div class="labelSidebar"&gt;
        &#36;{icon}
        Standard
    &lt;/div&gt;
    &lt;div class="containerBadge"&gt;&lt;/div&gt;
&lt;/button&gt;
</pre>
			</div>
		`,
	},
	buttonListItem: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">List Items</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Default Any Size</h3>
				<section class="containerSection">
					<button class="itemList">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
					<br><br>
					<button class="itemList picked">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
				</section>
				<h3 class="h6">Default Fixed Size</h3>
				<section class="containerSection">
					<button class="itemList fixedIconSize">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
					<br><br>
					<button class="itemList fixedIconSize picked">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
				</section>
				<h3 class="h6">Rounded Any Size</h3>
				<section class="containerSection">
					<button class="itemList rounded">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
					<br><br>
					<button class="itemList rounded picked">
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
				</section>
				<h3 class="h6">Rounded Fixed Size</h3>
				<section class="containerSection">
					<button class="itemList rounded fixedIconSize" >
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
					<br><br>
					<button class="itemList rounded fixedIconSize picked" >
						${iconNature.sunStroke}
						<div class="label">
							<span>Primary Label</span>
							<span class="subtext">Sub Label</span>
						</div>
					</button>
				</section>
				
				<h2>Documentation</h2>
				<p>List Items are buttons with the <code>itemList</code> class. They come with default and <code>picked</code> states. An icon is not mandatory, if you do include one it can be any size but you can fix it to a Rebar defined size of 24px with the <code>fixedIconSize</code> class. If you need to include a sublabel that's possible with the <code>subtext</code> class.</p>
				<h3 class="h6">Template</h3>
<pre>
//DEFAULT
&lt;button class="itemList"&gt;
    &#36;{icon}
    &lt;div class="label"&gt;
        &lt;span>&lt;/span&gt;
        &lt;span class="subtext"&gt;&lt;/span&gt;
    &lt;/div&gt;
&lt;/button&gt;

//ROUNDED
&lt;button class="itemList rounded"&gt;
    &#36;{icon}
    &lt;div class="label"&gt;
        &lt;span>&lt;/span&gt;
        &lt;span class="subtext"&gt;&lt;/span&gt;
    &lt;/div&gt;
&lt;/button&gt;
</pre>
			</div>
		`,
	},
	badges: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Badges</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<div class="containerBadge">14</div>
					<br><br>
					<div class="picked">
						<div class="containerBadge">14</div>
					</div>
				</section>
				<h2>Documentation</h2>
				<p>Badges are used with Sidebar Items and List Items to denote a numerical value for that item. While you could include text, it's not recommended.</p>
			</div>
		`,
	},
	buttonSegment: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Segmented Items</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Raised Style</h3>
				<section class="containerSection">
					<button class="segment">Standard</button>
					<button class="segment">Standard</button>
					<button class="segment picked">Picked</button>
					<button class="segment">Standard</button>
					<button class="segment">Standard</button>
				</section>
				<h3 class="h6">Flat Style</h3>
				<section class="containerSection split">
					<button class="segment">Standard</button>
					<button class="segment">Standard</button>
					<button class="segment picked">Picked</button>
					<button class="segment">Standard</button>
					<button class="segment">Standard</button>
				</section>
				
				<h2>Documentation</h2>
				<p>Segmented Items are buttons with the <code>segment</code> class. They come with default and <code>picked</code> states. By default the picked segment will have a raised look but if you add the <code>split</code> class to the parent container the picked style will be a more flat look.</p>
				<h3 class="h6">Template</h3>
<pre>
&lt;button class="segment"&gt;&lt;/button&gt;
</pre>
			</div>
		`,
	},
	buttonToolbar: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Toolbar Items</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<button class="toolbarItem" title="Example Button">${iconShapes.plusCircleStroke}</button>
				</section>
				<h2>Documentation</h2>
				<p>This button style is intended to give a more native look to toolbar buttons when viewed on a device using a mouse by using the <code>toolbarItem</code> class. If this isn't required please use the other transparent button styles.</p>
			</div>
		`,
	},
	buttonTab: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Tab Bar Items</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<button class="tab">
						${iconNature.sunStroke}
						Standard
					</button>
					<button class="tab picked">
						${iconNature.sunStroke}
						Picked
					</button>
				</section>
				
				<h2>Documentation</h2>
				<p>Tab Bar Items are buttons with the <code>tab</code> class. They come with default and <code>picked</code> styles. Tab Bar Items should always include both an icon and a label.</p>
				<h3 class="h6">Template</h3>
<pre>
&lt;button class="tab picked"&gt;
    &#36;{icon}
    Label
&lt;/button&gt;
</pre>
			</div>
		`,
	},
	buttonBack: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Back Button</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Slim with Label</span>
							</div>
							<button class="back slim transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.chevronBackwardsStroke}
								Label
							</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Circular with Label</span>
							</div>
							<button class="back transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.chevronSingleCircleLeftFill}
								Label
							</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Slim without Label</span>
							</div>
							<button class="back slim transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.chevronBackwardsStroke}
							</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Circular without Label</span>
							</div>
							<button class="back transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.chevronSingleCircleLeftFill}
							</button>
						</div>
					</section>
				</div>
				
				
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>The Back button is the single way in Rebar to navigate backwards between views. It should always be included in Secondary and Main columns. Including a label is recommended but not mandatory</p>
				<h4 class="h6 excludePadding">Data Attributes</h4>
				<ul>
					<li><code>data-removeactive</code> is the ID of the container (this should be the true parent container the Back Button is in) that needs to have it's <code>active</code> class removed.</li>
					<li><code>data-removeslide</code> is the ID of the container (this should be container of the previous column) that needs to have it's <code>slightSlide</code> class removed.</li>
					<li><code>data-query</code> is the value you would like to use for the leading part of the query string in the URL (not mandatory).</li>
					<li><code>data-target</code> is the value you would like to use for the trailing part of the query string in the URL (not mandatory).</li>
				</ul>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
//DEFAULT
&lt;button class="back slim transparent" data-removeactive="" data-removeslide="" data-clear="" data-query="" data-target=""  title="Navigate Back"&gt;
    &#36;{iconShapes.chevronBackwardsStroke}
    Label
&lt;/button&gt;

//ROUNDED CHEVRON
&lt;button class="back transparent" data-removeactive="" data-removeslide="" data-clear="" data-query="" data-target=""  title="Navigate Back"&gt;
    &#36;{iconShapes.chevronBackwardsStroke}
    Label
&lt;/button&gt;
</pre>
				
				<h3>Functions</h3>
				<p>All back buttons use the same click function. It's sole purpose is to navigate back in the stack using <code>data-removeactive</code> and <code>data-removeslide</code> to tell it which view states to change. <code>data-clear</code> is a special case for Secondary Columns to handle navigation on medium screens.</p>
				<p>This function will also handle URL updates for you by providing both the <code>query</code> and <code>target</code> data attributes. If you do not provide them Rebar will clear out the query string and leave you with a fresh URL.</p>
<pre class="spacerTriple">
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
    	window.history.pushState(null, null, "?&#36;{query}=&#36;{target}");
    }
});
</pre>
				
				<h3>CSS</h3>
				<p>On larger screens the Back Button will hide itself as it's not necessary since all columns are always visible (The examples on this page are being forced to be always visible so they can be seen). At it's core the Back Button is a standard Button which means it can inherit all the styling classes as needed. While not mandatory, it's strongly recommended to include the <code>transparent</code> class.</p>
				<p>For Back Buttons with the chevron not in a circle you need to add the <code>slim</code> class to the button to adjust the size of the SVG to avoid excess whitespace.</p>
				<p>The back button lacks a background when <code>:hover</code>. This was done to pull in the padding to give as much space as possible for text within the bounds of the <code>.pinLeft</code> width.</p>
			</div>
		`,
	},
	contextMenus: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Context Menus</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				
				<h3 class="h6">Standard Menus</h3>
				<section class="containerSection">
					<div class="containerContextButton" data-setting="context1">
						<button class="buttonContext">
							<span class="contextLabel">Primary</span>
							<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context2">
						<button class="buttonContext transparent">
							<span class="contextLabel">Transparent</span>
							<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context3">
						<button class="buttonContext secondary">
							<div class="contextContainerLabel">
								<span class="contextLabel">Secondary</span>
								<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
							</div>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context4">
						<button class="buttonContext" title="Example with icon and no label">
							<span class="contextLabel">
								${iconShapes.triangleRightCircleStroke}
							</span>
							<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context5">
						<button class="buttonContext transparent" title="Example with icon and no label">
							<span class="contextLabel">
								${iconShapes.triangleRightCircleStroke}
							</span>
							<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context6">
						<button class="buttonContext">
							<div class="contextContainerLabel">
								<span class="contextLabel">Right Menu</span>
								<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
							</div>
						</button>
						<div class="contextContainerMenu" data-position="right">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context7">
						<button class="buttonContext">
							<div class="contextContainerLabel">
								<span class="contextLabel">With Icons</span>
								<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
							</div>
						</button>
						<div class="contextContainerMenu" data-type="icons" data-position="left">
							<button data-value="love">
								<span>Save to Playlist&hellip;</span>
								${iconShapes.plusCircleStroke}
							</button>
							<button data-value="second">
								<span>Love</span>
								${iconShapes.heartStroke}
							</button>
							<button data-value="third">
								<span>Profile</span>
								<img src="images/ui/sidebar1.png" />
							</button>
							<div class="divider"></div>
							<button data-value="fourth" class="destructive">
								<span>Delete</span>
								${iconObjects.trashStroke}
							</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context8">
						<img class="buttonContext" src="images/ui/sidebar1.png" width="32"  title="Example with image" />
						<div class="contextContainerMenu" data-position="right">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
					<div class="containerContextButton" data-setting="context9">
						<button class="buttonContext">
							<div class="contextContainerLabel">
								<span class="contextLabel">Specific Width</span>
								<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
							</div>
						</button>
						<div class="contextContainerMenu" data-position="left">
							<button data-value="first">First</button>
							<button data-value="second">Second</button>
							<button data-value="third">Third</button>
							<button data-value="fourth">Fourth</button>
							<button data-value="fifth">Fifth</button>
						</div>
					</div>
				</section>
				
				<h3 class="h6">Picker Menus</h3>
				<section class="containerSection spacerTriple">
					<div class="containerContextButton" data-setting="picker1">
						<button class="buttonContext">
							<div class="contextContainerLabel">
								<span class="contextLabel"></span>
								<span class="contextGripper">${iconShapes.chevronSingleDownFill}</span>
							</div>
						</button>
						<div class="contextContainerMenu" data-position="left" data-type="picker">
							<button data-value="first" data-label="First">First</button>
							<button data-value="second" data-label="Second">Second</button>
							<button data-value="third" data-label="Third">Third</button>
							<button data-value="fourth" data-label="Fourth">Fourth</button>
							<button data-value="fifth" data-label="Fifth">Fifth</button>
						</div>
					</div>
				</section>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Context Menus come in two parts, an element with the <code>buttonContext</code> class and a container of buttons with the <code>contextContainerMenu</code>. Both of these sit inside a <code>.containerContextButton</code> container.</p>
				<p>They also come in two varities, a Standard Menu and a Picker Menu. Both will display a list of options when clicked but only the Picker Menu will update the label of the button. Picker Menus will also save their selected value to local storage while Standard Menus will not.</p>
				<p>When setting up a Context Menu it is important to add the appropriate data attributes. These will help with styling and functionality.</p>
				<h4 class="h6">Data Attributes</h4>
				<ul>
					<li><code>data-setting</code> is used on <code>.containerContextButton</code> and acts as the ID for the Context Menu.</li>
					<li><code>data-position</code> accepts a value of <code>left</code> or <code>right</code> and determines which way the menu will open.</li>
					<li><code>data-type</code> accepts a value of <code>picker</code> (which sets your Context Menu as a Picker Menu and displays the checkmark of the picked item) or <code>icons</code> (allows you to set icons to the right of each item).</li>
					<li><code>data-value</code> is the value of the selected item.</li>
					<li><code>data-label</code> is the label of the selected item (this is here so you can set labels for the button with whatever case you want).</li>
				</ul>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="containerContextButton" data-setting=""&gt;
    &lt;button class="buttonContext"&gt;
        &lt;div class="contextContainerLabel"&gt;
            &lt;span class="contextLabel"&gt;&lt;/span&gt;
            &lt;span class="contextGripper"&gt;&#36;{iconShapes.chevronSingleDownFill}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/button&gt;
    &lt;div class="contextContainerMenu" data-position="" data-type=""&gt;
        &lt;button data-value="" data-label=""&gt;&lt;/button&gt;
        &lt;button data-value="" data-label=""&gt;&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
				
				<h3>Functions</h3>
				<p>There are three functions related to Context Menus:</p>
				<ul>
					<li>A click function on all <code>.buttonContext</code> that simply opens the menu.</li>
					<li><code>clickContextMenuItem()</code> which handles picking the item and returning values. You will need to set this manually for every Context Menu you include.</li>
					<li>A click function that will allow you to click outside the menu to dismiss it (when you click on a Context Menu Button to open the menu a class is added to the <code>body</code> which this click function will remove).</li>
				</ul>
<pre>
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
        $(dataValue).siblings().removeClass("picked");
        $(dataValue).addClass("picked");
        $("[data-setting="&#36;{setting}"] .contextLabel").empty().append(label);
    }
    
    return {value, label};
}

//DISMISS MENU CLICK
$(document).on('click', '.contextActive', function() {
    $(".contextContainerMenu").removeClass("active");
    $("body").removeClass("contextActive");
});
</pre>
				
				<p class="spacerTriple">No value is saved to local storage by default. Instead use the Preferences system with the returned value and label.</p>
				
				<h3>CSS</h3>
				<p>Most of the styling is handled for you. If you use a standard Button all of the Button styling classes will apply. On top of this you don't have to use a Button, any element with the <code>buttonContext</code> class will make the element clickable.</p>
				<p>Menu items must be Buttons. They will infer styling from the <code>.contextContainerMenu</code> class. You can add the <code>destructive</code> class to a menu item Button to change the text and icon to red.</p>
			</div>
		`,
	},
	segmentedControls: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Segmented Controls</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<h6>Text</h6>
					<div class="controlSegmented" data-setting="segment1">
						<button class="segment" data-value="first">First</button>
						<button class="segment" data-value="second">Second</button>
						<button class="segment" data-value="third">Third</button>
						<button class="segment" data-value="fourth">Fourth</button>
						<button class="segment" data-value="fifth">Fifth</button>
					</div>
					<br>
					<h6>SVGs</h6>
					<div class="controlSegmented" data-setting="segment2">
						<button class="segment" data-value="grid">
							${iconInterfaceElements.gridSquareStroke}
						</button>
						<button class="segment" data-value="list">
							${iconInterfaceElements.listStroke}
						</button>
						<button class="segment" data-value="columns">
							${iconInterfaceElements.columnsTripleStroke}
						</button>
						<button class="segment" data-value="gallery">
							${iconInterfaceElements.galleryStroke}
						</button>
					</div>
					<br>
					<h6>Images</h6>
					<div class="controlSegmented" data-setting="segment3">
						<button class="segment" data-value="image1">
							<img src="images/ui/sidebar1.png" />
						</button>
						<button class="segment" data-value="image2">
							<img src="images/ui/sidebar2.png" />
						</button>
						<button class="segment" data-value="image3">
							<img src="images/ui/sidebar3.png" />
						</button>
					</div>
					<br>
					<h6>Split Style</h6>
					<div class="controlSegmented split" data-setting="segment2">
						<button class="segment" data-value="grid">
							${iconInterfaceElements.gridSquareStroke}
						</button>
						<button class="segment" data-value="list">
							${iconInterfaceElements.listStroke}
						</button>
						<button class="segment" data-value="columns">
							${iconInterfaceElements.columnsTripleStroke}
						</button>
						<button class="segment" data-value="gallery">
							${iconInterfaceElements.galleryStroke}
						</button>
					</div>
					<br>
				</section>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Segmented Controls are just a set of Buttons that sit in a <code>controlSegmented</code> container. The selected Button will gain a <code>picked</code> class.</p>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="controlSegmented" data-setting="">
    &lt;button class="segment" data-value=""&gt;&lt;/button&gt;
    &lt;button class="segment" data-value=""&gt;&lt;/button&gt;
    &lt;button class="segment" data-value=""&gt;&lt;/button&gt;
    &lt;button class="segment" data-value=""&gt;&lt;/button&gt;
    &lt;button class="segment" data-value=""&gt;&lt;/button&gt;
&lt;/div>
</pre>
				
				<h3>Functions</h3>
				<p>Segmented Controls use the <code>clickSegment()</code> function with <code>this</code> being the value passed in to the function. This will handle setting the picked segment and returning the picked <code>value</code>.</p>
				<h4 class="h6">Attributes</h4>
				<p><code>data-value</code> is the value of each segment.</p>
<pre>
function clickSegment(dataValue) {
    //GET VALUES
    let value = $(dataValue).data("value");
    
    //SET STATE
    $(dataValue).siblings().removeClass("picked");
    $(dataValue).addClass("picked");
    
    return value;
}
</pre>
				
				<p class="spacerTriple">No value is saved to local storage by default. Instead use the Preferences system with the returned value.</p>
				
				<h3>CSS</h3>
				<p>By default picked segments will use a raised style with the segments sitting in a track. To make Segmented Controls feel more at home in a Toolbar you can add the <code>split</code> class and the track will no longer be visible and the picked segment will have a more flat look.</p>
			</div>
		`,
	},
	switches: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Switches</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Switches allow you to toggle between an on/off state for an option that will be set immediately (which is also saved to local storage)</p>
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Default Off</span>
							</div>
							<button class="switch positive off" data-setting="switch1" title="Off">
								<div class="knob"></div>
							</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Default On</span>
							</div>
							<button class="switch positive" data-setting="switch2" title="On">
								<div class="knob"></div>
							</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Styled</span>
							</div>
							<button class="switch" data-setting="switch3" title="On">
								<div class="knob"></div>
							</button>
						</div>
					</section>
				</div>
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Switches are buttons that have the <code>switch</code> class added to them. Being buttons they can inherit any of the standard button styling classes to change the colour of the track. Adding an <code>off</code> class will set the Switch to the Off state.</p>
				<h4 class="h6">Data Attributes</h4>
				<p><code>data-setting</code> is used as the selector for the <code>clickSwitch()</code> function.</p>
				<h4 class="h6">Code</h4>
<pre class="spacerTriple">
&lt;button class="switch positive" data-setting=""&gt;
    &lt;div class="knob"&gt;&lt;/div&gt;
&lt;/button&gt;
</pre>
				<h3>Functions</h3>
				<h4 class="h6 excludePadding">Switch Click Function</h4>
				<p>This click function runs the function to toggle the Switch and can include any other functionality you need.</p>
<pre class="spacerDouble">
$(document).on('click', '.switch[data-setting=""]', function() {
    let state = clickSwitch(this);
});
</pre>
				<h4 class="h6 excludePadding">Setting Switch Values Function</h4>
				<p>This function will toggle the state of the Switch and return it's value.</p>
<pre>
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
</pre>
				<p class="spacerTriple">No value is saved to local storage by default. Instead use the Preferences system with the returned value.</p>
				
				<h3>CSS</h3>
				<p>All sizes use <code>--base-font-size</code> so will scale accordingly when using a Dynamic Type setting. The colour of the <code>knob</code> is set to always be white but this can be overwritten via appearance themes.</p>
			</div>
		`,
	},
	inputs: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Inputs</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Radio Buttons</h3>
				<section class="containerSection">
					<form class="excludeMargin">
						<div class="containerInput">
							<label for="radio1">
								<input type="radio" id="radio1" name="radio_buttons" value="radio1">
								<div class="fakeRadio"></div>
								<span class="inputLabel">First</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="radio2">
								<input type="radio" id="radio2" name="radio_buttons" value="radio2" checked>
								<div class="fakeRadio"></div>
								<span class="inputLabel">Second</span>
							</label>
						</div>
						<div class="containerInput excludeMargin">
							<label for="radio3">
								<input type="radio" id="radio3" name="radio_buttons" value="radio3">
								<div class="fakeRadio"></div>
								<span class="inputLabel">Third</span>
							</label>
						</div>
					</form>
				</section>
				<h2>Examples</h2>
				<h3 class="h6">Checkboxes</h3>
				<section class="containerSection">
					<form class="excludeMargin">
						<div class="containerInput">
							<label for="checkbox1">
								<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">First</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox2">
								<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Second</span>
							</label>
						</div>
						<div class="containerInput excludeMargin">
							<label for="checkbox3">
								<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Third</span>
							</label>
						</div>
					</form>
				</section>
				<h3 class="h6">Fields</h3>
				<p class="subtext"><code>font-size</code> on these fields is clamped to a minimum of 16px to avoid Mobile Safari's page zoom when the field has <code>:focus</code>.</p>
				<section class="containerSection">
					<form class="excludeMargin">
						<div class="containerInput">
							<label for="textfield1">Textfield</label>
							<br>
							<input type="text" id="textfield1" name="textfield1" placeholder="This is a placeholder">
						</div>
						<div class="containerInput">
							<label for="textfield2">Stepper</label>
							<br>
							<input type="number" id="textfield2" name="textfield2">
						</div>
						<div class="containerInput">
							<label for="textfield3">Textarea</label>
							<br>
							<textarea id="textfield3" name="textfield3" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui.</textarea>
						</div>
						<div class="containerInput excludeMargin">
							<input type="search" id="textfield4" name="textfield4" placeholder="Search">
						</div>
					</form>
				</section>
				
				<h2>Documentation</h2>
				<p>To make Radios and Checkboxes consistent across platforms Rebar hides the real elements and displays fake elements in their places.</p>
				<h3 class="h6">Templates</h3>
<pre>
//RADIOS
&lt;label for=""&gt;
    &lt;input type="radio" id="" name="" value=""&gt;
    &lt;div class="fakeRadio"&gt;&lt;/div&gt;
    &lt;span class="inputLabel"&gt;&lt;/span&gt;
&lt;/label&gt;

//CHECKBOXES
&lt;label for="">
    &lt;input type="checkbox" id="" name="" value=""&gt;
    &lt;div class="fakeCheckbox"&gt;&lt;/div&gt;
    &lt;span class="inputLabel"&gt;&lt;/span&gt;
&lt;/label&gt;
</pre>
			</div>
		`,
	},
	search: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Search Bars</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
					<header class="containerToolbar singleItem withAccessory">
						<h1 class="headerToolbar">National Dex</h1>
					</header>
					<div class="containerAccessoryBar">
						<div class="containerSearch">
							<input type="search" placeholder="Search Pok&eacute;mon" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">
								${iconShapes.timesFill}
							</div>
						</div>
					</div>
					<div class="scrollview cropToolbar cropAccessoryBar alwaysForegroundColor">
						<div class="containerItemList" id="pokemon"></div>
					</div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Search in Rebar is "filter as you type" search. It is not designed to let you input text and then query (for that type of search a new function will need to be built).</p>
				<p>The Search Bar is comprised of an input and a custom clear button (the reason to make this custom is not every browser will show a clear button and functionality differs between them).</p>
				<p>It is a requirement that an ID is applied to the search input and the list of items container. It is a requirement for a class to be applied to the item container and the container that contains the text to be searched.</p>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="containerSearch"&gt;
    &lt;input type="search" placeholder="" id="" /&gt;
    &lt;div class="buttonClearSearch"&gt;&#36;{iconShapes.timesFill}&lt;/div&gt;
&lt;/div&gt;
</pre>
				
				<h3>Functions</h3>
				<p>There are two functions that are needed for Search, <code>search()</code> and <code>searchClear()</code>. <code>searchClear()</code> should be wrapped in a click function.</p>
				<h4 class="h6">Properties</h4>
				<ul>
					<li><code>inputID</code> is the ID of the search input.</li>
					<li><code>parentID</code> is the ID of the items container.</li>
					<li><code>itemClass</code> is the class of the items to be searched.</li>
					<li><code>valueClass</code> is the class of the container that contains the text you would like to be searched.</li>
					<li><code>searchScope</code> is the item that should be filtered. It should be set something like this <code>#parentContainer button</code>.</li>
					<li><code>clearButton: this</code> is for the Clear Search button and should only ever be set to <code>this</code>.</li>
				</ul>
<pre class="spacerTriple">
function search(options) {
    $("#&#36;{options.inputID}").on("keyup", function() {
        //GATHER THE INPUTED TEXT
        let input = document.getElementById(options.inputID);
        let enteredText = input.value.toUpperCase();
        let parentContainer = document.getElementById(options.parentID);
        let items = parentContainer.getElementsByClassName(options.itemClass);
        
        //SET THE CONTAINER SCROLL BACK TO THE TOP
        document.getElementById(options.parentID).scrollTop = 0;
        
        //HIDE AND SHOW THE CLEAR SEARCH BUTTON
        if (enteredText.length == 0) {
            $(input).next().removeClass("active");
        } else {
            $(input).next().addClass("active");
        }
        
        //FILTER THE LIST BASED ON THE SEARCH INPUT
        for (i = 0; i < items.length; i++) {
            a = items[i].getElementsByClassName(options.valueClass)[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(enteredText) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
}

function searchClear(options) {
    $(options.searchScope).attr("style", "");
    $(options.clearButton).removeClass("active");
    $(options.inputID).val("");
}

search({
    inputID: "",
    parentID: "",
    itemClass: "",
    valueClass: ""
})

$(document).on('click', '.buttonClearSearch', function() {
    searchClear({
        inputID: "#pokemonSearch",
        searchScope: "#pokemon div",
        clearButton: this
    })
});
</pre>
				
				<h3>CSS</h3>
				<p>There are no styling classes for Search Bars.</p>
			</div>
		`,
	},
	selectionGrids: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Selection Grids</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Single Selection</h3>
				<div class="spacerDouble containerTokens" id="exampleTokenField" data-max="1" data-setting="critters">
					<div class="token" data-value="all">All</div>
					<div class="token" data-value="fish">Fish</div>
					<div class="token" data-value="insects">Insects</div>
					<div class="token" data-value="seacreatures">Sea Creatures</div>
				</div>
				<h3 class="h6">Multiple Selection</h3>
				<div class="spacerTriple containerTokens" id="exampleTokenField" data-max="2" data-setting="type">
					<div class="token" data-value="normal">Normal</div>
					<div class="token" data-value="fighting">Fighting</div>
					<div class="token" data-value="flying">Flying</div>
					<div class="token" data-value="poison">Poison</div>
					<div class="token" data-value="ground">Ground</div>
					<div class="token" data-value="rock">Rock</div>
					<div class="token" data-value="bug">Bug</div>
					<div class="token" data-value="ghost">Ghost</div>
					<div class="token" data-value="steel">Steel</div>
					<div class="token" data-value="fire">Fire</div>
					<div class="token" data-value="grass">Grass</div>
					<div class="token" data-value="water">Water</div>
					<div class="token" data-value="electric">Electric</div>
					<div class="token" data-value="psychic">Psychic</div>
					<div class="token" data-value="ice">Ice</div>
					<div class="token" data-value="dragon">Dragon</div>
					<div class="token" data-value="dark">Dark</div>
					<div class="token" data-value="fairy">Fairy</div>
				</div>
				
				<button id="displaySelections" class="spacerTriple">Display Selected Values in the Console</button>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Selection Grids do not require much specific structure, any container filled with clickable children items will do. This makes Selection Grids incredibly flexible in what they can be used for (Token Fields and Collection Views instantly come to mind).</p>
				<p>It is important to include <code>data-max</code> and <code>data-setting</code> on the container and <code>data-value</code> on the items. <code>data-max</code> can take a value of any number or <code>any</code> if you wish to not limit the selection.</p>
				<h4 class="h6">Properties</h4>
				<ul>
					<li><code>data-max</code> is the max number of selected items the Selection Grid should allow.</li>
					<li><code>data-setting</code> is the name of the Selection Grid and can be used for setting local storage if required (unlike other functions, <code>selectionGrid()</code> will not store to local storage automatically).</li>
					<li><code>data-value</code> is the value of the item.</li>
				</ul>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div id="" data-max="" data-setting=""&gt;
    &lt;div data-value=""&gt;&lt;/div&gt;
    &lt;div data-value=""&gt;&lt;/div&gt;
    &lt;div data-value=""&gt;&lt;/div&gt;
    &lt;div data-value=""&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
				
				<h3>Functions</h3>
				<p>Selection Grids are built out of three functions: <code>selectionGrid()</code> to set the picked items, <code>getSelectionGridValues()</code> to retrieve the picked items, and <code>getSelectionGridGroups()</code> to retrieve the groups with picked items. The functions are broken down this way so you can have multiple selection grids on a page while still being able to obtain all the values across the grids with picked items.</p>
				<p>This is how you should work with these functions:</p>
				<ul>
					<li><code>selectionGrid()</code>: Sits within a click function and allows you to apply a <code>picked</code> class to the items you click. Importantly, this will not return any values for you to use (if you do need to get a returned valuw with each click chain the <code>getSelectionGridGroups()</code> function in the same click function).</li>
					<li><code>getSelectionGridValues()</code>: This is a helper function and should not be called manually.</li>
					<li><code>getSelectionGridGroups()</code>: You must provide an array of group names (which are the <code>data-setting</code> you have applied to each group) as input for this function. This will return the picked items as an object broken up by the groups you input.</li>
				</ul>
<pre class="spacerTriple">
function selectionGrid(dataValue) {
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
        
        const valueOptionElements = $("[data-setting="&#36;{settingKey}"] [data-value].picked");
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
}
</pre>

				<h3>CSS</h3>
				<p>Selection Grids have no styling on their own since their job is to handle setting the picked state of items in the grid and returning their values. For whatever items you use inside a Selection Grid you need to have a <code>.picked</code> class for those items (you can set this on load for items that need to be picked by default and the <code>selectionGrid()</code> function will still work as expected.</p>
			</div>
		`,
	},
	tokens: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Tokens</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="spacerTriple containerTokens" id="exampleTokenField" data-max="2" data-setting="type">
					<div class="token" data-value="normal">Normal</div>
					<div class="token" data-value="fighting">Fighting</div>
					<div class="token picked" data-value="flying">Flying</div>
					<div class="token" data-value="poison">Poison</div>
					<div class="token" data-value="ground">Ground</div>
					<div class="token" data-value="rock">Rock</div>
					<div class="token" data-value="bug">Bug</div>
					<div class="token" data-value="ghost">Ghost</div>
					<div class="token picked" data-value="steel">Steel</div>
					<div class="token" data-value="fire">Fire</div>
					<div class="token" data-value="grass">Grass</div>
					<div class="token" data-value="water">Water</div>
					<div class="token" data-value="electric">Electric</div>
					<div class="token" data-value="psychic">Psychic</div>
					<div class="token" data-value="ice">Ice</div>
					<div class="token" data-value="dragon">Dragon</div>
					<div class="token" data-value="dark">Dark</div>
					<div class="token" data-value="fairy">Fairy</div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Tokens are divs with the <code>.token</code> class applied to them. Tokens should always be a div and not a button. To align them to a grid they should be in a container with the  <code>containerTokens</code> class.</p>
<pre class="spacerTriple">
&lt;div class="containerTokens" id="" data-max="" data-setting=""&gt;
    &lt;div class="token" data-value=""&gt;&lt;/div&gt;
    &lt;div class="token" data-value=""&gt;&lt;/div&gt;
    &lt;div class="token" data-value=""&gt;&lt;/div&gt;
    &lt;div class="token" data-value=""&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
	
				<h3>Function</h3>
				<p class="spacerTriple">Tokens themselves have no function but the <code>.containerTokens</code> container will use the <code>selectionGrid()</code> function to grant functionality to the Tokens.</p>
				
				<h3>CSS</h3>
				<p>The only styling class for Tokens is their <code>.picked</code> state.</p>
			</div>
		`,
	},
	buttonShare: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "controls",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="controls" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Tokens</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<p class="subtext">Note: If you are using a browser that do not support <code>navigator.share</code> then a non-functional button will be displayed for illustrative purposes.</p>
				<section class="containerSection spacerTriple">
					<button class="transparent" id="dummyShareButton" title="Share Content">
						${iconInterfaceElements.shareSquareUpStroke}
					</button>
				</section>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerTriple">You may construct a Share Button in any fashion you want, adding the <code>share</code> class on it to automatically invoke the click function for sharing. If you wish to trigger sharing in another function you can use the <code>shareURL()</code> function.</p>
				
				<h3>Function</h3>
				<p>The <code>shareURL()</code> function is designed to only share the URL of the current page (if you wish to do share other content a different function will need to be written). At this time the title of the share will default to the <code>appName</code> constant.</p>
<pre class="spacerTriple">
//GRAB URL PARAMETER
let url = grabURLParameter();

//SHARE
navigator.share({
    title: "&#36;{appName}",
    url: "&#36;{appDomain}?&#36;{url.query}=&#36;{url.source}"
}).then(() => {
    console.log("Share completed");
})
.catch(err => {
    console.log("Share failed: &#36;{err.message}");
});
</pre>
				
				<h3>CSS</h3>
				<p>The <code>share</code> class has no styles of it's own. You may apply it to anything you wish to use as a Share Button.</p>
			</div>
		`,
	},
	
	//LAYOUT
	routing: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Routing</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Documentation</h2>
				<p>Routing is a set of functions in Rebar that work together to handle generating views when clicking on a Source List item, loading a deep link, and using the browser navigation buttons. A primary goal of Routing is to have super clean URLs, only using a single parameter to divine everything else that should happen. As such, this requires quite a bit of setup in a few different places, this is what you'll need:</p>
				<ol>
					<li>A Source List that contains buttons that have a <code>data-value</code> attribute on them. These are used to drive your navigation and that <code>value</code> will be used as your anchor for loading views.</li>
					<li>The <code>changeView()</code> function which is already bundled with Rebar and is covered in the Source Lists section.</li>
					<li>A <code>routes()</code> function in your <code>app.js</code> that will hand passing the <code>value</code> to the <code>changeView()</code> function and generating your views.</li>
					<li>The <code>grabURLParameter()</code> function which is already bundled with Rebar and will be covered on this page.</li>
					<li>Setting <code>routes(grabURLParameter());</code> in your <code>app.js</code> file which will handle deep links.</li>
					<li>Setting <code>window.addEventListener('popstate', function(e) {routes(grabURLParameter());});</code> in your <code>app.js</code> file which will handle the browser navigation buttons.</li>
					<li>A <code>views</code> constant which will contain all the properties required for loading a view.</li>
					<li>A click function on your Source List buttons that calls the <code>routes()</code> function that sets <code>type: "navigation"</code>, <code>query: ""</code>, and <code>source: $(this).data("value")</code>.</li>
				</ol>
				<p>Why does Routing require so much set up in so many different places? Due to the custom nature of the content it can not live in the <code>rebar.js</code> file. Therefore anything that will require you to do something custom (like generating a view and adding some functionality to the content inside that view) needs to live in your <code>app.js</code> file. To keep things tidy the <code>views</code> constant is kept in it's own file.</p>
				<h3>Routes Function</h3>
				<p>The purpose of the <code>routes()</code> function is to bundle together all the pieces that are required to generate a view. Let's start by looking at the skeleton structure of the function:</p>
<pre>
function routes(value) {
    //URL HANDLERS
    if (value.source == null || value.source == undefined || value.source == "") {
        value = {
            type: "deeplink",
            query: "",
            source: "",
        }
    }
    
    //GET VALUES
    let properties
    let type = value.type
    let category = value.query
    let source = value.source
    let modifier = value.modifier
    
    //GENERATE VIEW
    switch (category) {
        case 'case1':
            //CONTENT
            properties = views[source].properties
            changeView({type, source, properties})
            $("#&#36;{views[source].properties.targetContainer}").append(views[source].content);
            
            //FUNCTIONALITY
            switch (source) {
                case 'case1':
                    //Functionality that should happen on view load goes here
                    break;
                case 'case2':
                    //Functionality that should happen on view load goes here
                    break;
                case 'case3':
                    //Functionality that should happen on view load goes here
                    break;
            }
            
            //DEEP LINK COLUMN GENERATION
            if (type == "deeplink") {
                $("#&#36;{properties.originContainer}").append(views[properties.parentRoute].content).addClass("active slightSlide");
            }
            
            break;
    }
}
</pre>
				<ul>
					<li>Loading a default view: Set up what view we would like to load if no <code>source</code> is provided. Using <code>matchMedia</code> it is possible to set up loading different views depending on what resolution the viewport is.</li>
					<li>Get values: The values that the <code>changeView()</code> function will need are gathered here. <code>type</code> and <code>source</code> are passed in from the function being loaded but <code>properties</code> is acquired from the <code>views</code> constant.</li>
					<li>Set state: This is when the <code>changeView()</code> function runs and it will handle state setting for everything.</li>
					<li>Generate view: Here is where you will do whatever you need to generate a view. There is no predefined way of doing this, it is solely up to your app's needs.</li>
					<li>Generate a deep link column: If you have a three column layout you will also need to manually generate the secondary column and this is where you would do it. How you do that is up to you but the provided <code>if statement</code> will give you the right hook to generate that column.</li>
					<li>Activate functionality on-load: If your view requires functionality and your view generation function doesn't handle that you can do that here with a <code>switch statement</code>.</li>
				</ul>
				
				<h3>Route Categories</h3>
				<p>To both simplify setting up the <code>views</code> constant and making it possible to have mulitple unique IDs render the same view, Rebar uses the constant of Route Categories. At it's core we use the leading part of the URL query string (<code>?leading=trailing</code>) to tell us what view to render and the trailing part to tell us what content to render.</p>
				<p>You can also provide a <code>modifier</code> value along with <code>type</code>, <code>query</code>, and <code>source</code> to help you make use of Route Categories if you need an extra value to determine what view or content to render.</p>
				
				<h3>Views Constant</h3>
				<p>The purpose of the <code>views</code> constant is to hold all the property data for each view you wish you load, this is a mandatory part of the Routes system. It can also hold content data but that's not mandatory. You will need to include these properties for each view:</p>
				<ul>
					<li><code>originContainer</code> is the ID of the container that started the navigation stack.</li>
					<li><code>parentContainer</code> is the ID of the container that the List Item for this view is contained in.</li>
					<li><code>parentRoute</code> is the <code>data-value</code> of the List Item that started the navigation stack.</li>
					<li><code>targetContainer</code> is the ID of the container that will be filled with content.</li>
					<li><code>clearContainer</code> is the ID of a secondary container that is needed to be cleared out (useful when switching Sidebar sourced).</li>
					<li><code>columnLevel</code> is the number value for the level that's being targeted. In a two column layout targetting <code>main</code> would be represented by a <code>1</code> and in a three column layout targetting <code>main</code> would be represented by a <code>2</code>.</li>
					<li><code>removePicked</code> is the ID of the container that should have it's picked state removed from before adding a new item as picked.</li>
					<li><code>query</code> is the string you would like to use for the leading part of the URL query string. It also determines what route category you would like to load.</li>
				</ul>
				<p>It is important to note that a view with the name <code>defaultView</code must be included if you are going to use a standard column layout. It is needed to handle the browser navigation buttons and it's properties should be set as such:</p>
<pre>
originContainer: null,
parentContainer: "The ID of your first column",
parentRoute: null,
targetContainer: "The ID of your second column",
clearContainer: "The ID of your second column",
columnLevel: 0
</pre>
			</div>
		`,
	},
	columns: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Columns</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h3>HTML</h3>
				<p>On smaller screens columns sit off-screen and will slide in to view when an <code>active</code> class is added. The column that is generating the view transition will gain a <code>slightSlide</code> class that will cause it to slightly slide underneath the column that has just been set to <code>active</code>.</p>
				<p>On medium screens with a three column layout the <code>columnPrimary</code> and <code>columnSecondary</code> columns will transition but the <code>main</code> column will always remain in view.</p>
				<p>On large screens all columns will always be present on screen and no transitions happen.</p>
				<p><code>aside</code> can be collapsed so the main column takes up the entire viewport on medium and larger screens. This is done with a button that has the <code>collapseAside</code> class. If your layout uses three columns and you would like to collapse the first two you will need to add the <code>columnsThree</code> class to the <code>containerApp</code> container.</p>
				<h4 class="h6">Templates</h4>
<pre class="spacerTriple">
//THREE COLUMN LAYOUT
&lt;aside class="containerAside double" id=""&gt;
    &lt;div class="columnPrimary" id=""&gt;&lt;/div&gt;
    &lt;div class="columnSecondary" id=""&gt;&lt;/div&gt;
&lt;/aside&gt;
&lt;main id=""&gt;&lt;/main&gt;

//TWO COLUMN LAYOUT
&lt;aside class="containerAside single" id=""&gt;
    &lt;div class="columnPrimary" id=""&gt;&lt;/div&gt;
&lt;/aside&gt;
&lt;main id=""&gt;&lt;/main&gt;
</pre>
				
				<h3>Functions</h3>
				<p class="spacerTriple">The columns themselves do not have any functions attached to them. Forwards navigation is handled through <code>changeView()</code> on the list items in a column (See Source Lists for more info). Backwards navigation is handled through a click function that applies to all Back Buttons (See the Back Buttons section for more info).</p>
				
				<h3>CSS</h3>
				<p>Both <code>columnPrimary</code> and <code>columnSecondary</code> have a fixed size based on <code>--aside-width</code>. On larger screens <code>containerAside</code> and <code>main</code> will adjust accordingly depending on how many columns are in <code>containerAside</code>.</p>
			</div>
		`,
	},
	sourceLists: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Source Lists</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h3>HTML</h3>
				<p class="spacerTriple">Source Lists power view management within Rebar and are the basis of Sidebars, Item Lists, Tab Bars, and Segmented Controls. Source Lists will always contain a list of buttons that when clicked change the contents of a target container based on the <code>data-value</code> value on the clicked item. HTML examples for controls powered by Source Lists can be found in their own sections.</p>
				
				<h3>Functions</h3>
				<p>Buttons in a Source List will use the <code>changeView()</code> function to activate view management. The function will take the <code>data-value</code> attribute on the button and return it so you can then display the corresponding content in the container named in <code>data-target</code> on the parent container.</p>
				<p><code>changeView()</code> also manages forward navigation states and transitions based on the <code>data-target</code> attribute. There is a special case for selecting Sidebar items in a three column layout to clear out the Main column's content when switching Sidebar items if the Secondary column has already activated content in the Main column, on the Sidebar's parent container there should be a <code>data-clear</code> attribute that has the ID of the main container.</p>
				<p>There is an if statement in here to handle lists with grouped buttons. This requires buttons to <b>always</b> be grouped with a <code>section</code> element.</p>
<pre class="spacerTriple">
function changeView(dataValue) {
    //HANDLE DEEP LINKS
    if (dataValue.type == "deeplink") {
        //CLEAR COLUMN STATES
        $("#&#36;{dataValue.properties.clearContainer}").removeClass("active");
        $("#&#36;{dataValue.properties.targetContainer}").removeClass("slightSlide");
        $("#&#36;{dataValue.properties.parentContainer}").removeClass("slightSlide");
        
        //CLEAR BUTTON STATES
        $("#&#36;{dataValue.properties.parentContainer} *").removeClass("picked subdued");
        $("#&#36;{dataValue.properties.targetContainer} *").removeClass("picked subdued");
        $("#&#36;{dataValue.properties.originContainer} *").removeClass("picked subdued");
        
        //TEMPORARILY DISABLE ALL ANIMATIONS
        document.documentElement.style.setProperty('--base-time-length', '0s');
        setTimeout(function(){ setTimeLength(); }, 100);
        
        //GENERATE CONTENT
        if (dataValue.properties.columnLevel == 2) {
            $("[data-value="&#36;{dataValue.properties.parentRoute}"]").addClass("picked subdued");
            $("#&#36;{dataValue.properties.originContainer}").addClass("slightSlide");
        }
    }
    
    //SET STATE
    if (dataValue.source != "defaultView") {
        $("#&#36;{dataValue.properties.removePicked} *").removeClass("picked subdued");
        $("[data-value="&#36;{dataValue.source}"]").addClass("picked");
        if ($("[data-value="&#36;{dataValue.source}"]").hasClass("itemList") == true) {
            $("[data-value="&#36;{dataValue.properties.parentRoute}"]").addClass("subdued");
        }
        $("#&#36;{dataValue.properties.parentContainer}").addClass("slightSlide");
        $("#&#36;{dataValue.properties.targetContainer}").empty().addClass("active").removeClass("slightSlide");
        $("#&#36;{dataValue.properties.clearContainer}"").empty().removeClass("active");
    }
    
    //UPDATE URL
    //"navigation" is chosen here so that the browser history doesn't populate with the same entry over and over
    if (dataValue.type == "navigation") {
        if (dataValue.source == undefined) {
            window.history.pushState(null, null, "?&#36;{dataValue.properties.query}=index");
        } else {
            window.history.pushState(null, null, "?&#36;{dataValue.properties.query}=&#36;{dataValue.source}");
        }
    }
}
</pre>
			</div>
		`,
	},
	sidebars: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Sidebars</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<p class="subtext">Note: Examples provided here are for illustrative purposes only and are non-functional. To view functional examples the Sample app itself uses Sidebars and the Columns section also has working examples.</p>
				<h4 class="h6">Standard layout</h4>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleSidebar1">
					<aside class="containerAside single">
						<div class="containerSidebar" id="sidebarWithHeader" data-target="contentArea1">
							<h1>Header</h1>
							<input type="search" placeholder="Search content">
							<section>
								<button class="sidebar" data-value="pickedItem">
									<div class="labelSidebar">
										${iconNature.sunStroke}
										Picked Item
									</div>
									<div class="containerBadge">120</div>
								</button>
								<button class="sidebar" data-value="unpickedItem">
									<div class="labelSidebar">
										${iconNature.moonLeftStroke}
										Unpicked Item
									</div>
									<div class="containerBadge">14</div>
								</button>
							</section>
							<div class="headerAccordion active">
								<h3 class="headerList">SVG</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightFill}</div>
							</div>
							<section class="containerAccordionContents active">
								<button class="sidebar" data-value="svg1">
									<div class="labelSidebar">
										${iconIndices.oneCircleStroke}
										SVG Item 1
									</div>
								</button>
								<button class="sidebar" data-value="svg2">
									<div class="labelSidebar">
										${iconIndices.twoCircleStroke}
										SVG Item 2
									</div>
								</button>
								<button class="sidebar" data-value="svg3">
									<div class="labelSidebar">
										${iconIndices.threeCircleStroke}
										SVG Item 3
									</div>
								</button>
							</section>
							<h2 class="headerList">Images</h2>
							<section>
								<button class="sidebar" data-value="image1">
									<div class="labelSidebar">
										<img src="images/ui/sidebar1.png" alt="" />
										Image Item 1
									</div>
								</button>
								<button class="sidebar" data-value="image2">
									<div class="labelSidebar">
										<img src="images/ui/sidebar2.png" alt="" />
										Image Item 2
									</div>
								</button>
								<button class="sidebar" data-value="image3">
									<div class="labelSidebar">
										<img src="images/ui/sidebar3.png" alt="" />
										Image Item 3
									</div>
								</button>
							</section>
						</div>
					</aside>
					<main id="contentArea1"></main>
				</div>
				
				<h3 class="h6">Grid Layout</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleSidebar2">
					<aside class="containerAside single">
						<div class="containerSidebar grid" id="sidebarWithoutHeader" data-target="contentArea2">
							<h1>Header</h1>
							<input type="search" placeholder="Search content">
							<section>
								<button class="sidebar" data-value="pickedItem">
									<div class="labelSidebar">
										${iconNature.sunStroke}
										Picked Item
									</div>
									<div class="containerBadge">120</div>
								</button>
								<button class="sidebar" data-value="unpickedItem">
									<div class="labelSidebar">
										${iconNature.moonLeftStroke}
										Unpicked Item
									</div>
									<div class="containerBadge">14</div>
								</button>
							</section>
							<div class="headerAccordion active">
								<h3 class="headerList">SVG</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightFill}</div>
							</div>
							<section class="containerAccordionContents active">
								<button class="sidebar" data-value="svg1">
									<div class="labelSidebar">
										${iconIndices.oneCircleStroke}
										SVG Item 1
									</div>
								</button>
								<button class="sidebar" data-value="svg2">
									<div class="labelSidebar">
										${iconIndices.twoCircleStroke}
										SVG Item 2
									</div>
								</button>
								<button class="sidebar" data-value="svg3">
									<div class="labelSidebar">
										${iconIndices.threeCircleStroke}
										SVG Item 3
									</div>
								</button>
							</section>
							<h2 class="headerList">Images</h2>
							<section>
								<button class="sidebar" data-value="image1">
									<div class="labelSidebar">
										<img src="images/ui/sidebar1.png" alt="" />
										Image Item 1
									</div>
								</button>
								<button class="sidebar" data-value="image2">
									<div class="labelSidebar">
										<img src="images/ui/sidebar2.png" alt="" />
										Image Item 2
									</div>
								</button>
								<button class="sidebar" data-value="image3">
									<div class="labelSidebar">
										<img src="images/ui/sidebar3.png" alt="" />
										Image Item 3
									</div>
								</button>
							</section>
						</div>
					</aside>
					<main id="contentArea2"></main>
				</div>
	
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Sidebars require two containers for their buttons, <code>containerAside</code> and <code>containerSidebar</code>. <code>containerAside</code> defines the position of the Sidebar and <code>containerSidebar</code> enables all of the styling to make an Item List in to a Sidebar. The <code>containerAside</code> class does not need to be applied to an aside element.</p>
				<h4 class="h6">Templates</h4>
<pre class="spacerTriple">
&lt;aside class="containerAside"&gt;
    &lt;div class="containerSidebar" id=""&gt;&lt;/div&gt;
&lt;/aside"&gt;
</pre>
				
				<h3>Functions</h3>
				<p>At their core Sidebars are just Source Lists with a particular set of styles applied which means they use <code>changeView()</code>. Refer to the Routes and Source Lists section for more information.</p>
				<p class="spacerTriple">A preset picked item on load can be set by applying <code>$("#sidebarName [data-value='valueName']").addClass("picked");</code></p>
				
				<h3>CSS</h3>
				<p>Sections can be grouped using the <code>section</code> element, margin will automatically be applied to space out each section. They can also be made collapsible by turning them in to Accordions, refer to the Accordions section on how to do this.</p>
				<p>The <code>changeView()</code> function will handle setting the correct styling to picked items depending at what level the currently selected navigation item is at.</p>
				<p>If you wish to have a tiled layout for your Sidebar on smaller screens you can add the <code>grid</code> class to the <code>containerSidebar</code> container. This style is great for Sidebars with a short list of items.</p>
			</div>
		`,
	},
	itemLists: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Item Lists</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h3>
				<p class="subtext">Note: Examples provided here are for illustrative purposes only and are non-functional. To view functional examples the Sample app itself uses Item Lists and the Columns section also has working examples.</p>
				<h3 class="h6">Standard buttons with inset</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
					<div class="containerItemList inset alwaysBackgroundColor" id="tableview1" data-target="testTarget" data-parent="testParent">
						<h2 class="headerList">Text Only</h2>
						<section class="containerSection excludePadding">
							<button class="itemList">
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
								<div class="containerBadge">14</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">DIVS instead of Buttons</h2>
						<section class="containerSection excludePadding">
							<div class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
								<button>Test with a long label</button>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 2</span>
								</div>
								<div class="containerBadge">14</div>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 3</span>
								</div>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 4</span>
								</div>
							</div>
						</section>
						
						<h2 class="headerList">SVG Icons</h2>
						<section class="containerSection excludePadding">
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.6308594,26.2958984 C21.8017578,26.2958984 23.6298828,26.0927734 24.9248047,24.7978516 C26.2197266,23.5029297 26.4101562,21.7001953 26.4101562,19.5292969 L26.4101562,9.76660156 C26.4101562,7.59570312 26.2197266,5.78027344 24.9248047,4.49804688 C23.6298828,3.203125 21.8017578,3 19.6308594,3 L9.74121094,3 C7.60839844,3 5.78027344,3.203125 4.48535156,4.49804688 C3.19042969,5.79296875 3,7.60839844 3,9.72851562 L3,19.5292969 C3,21.7001953 3.19042969,23.5029297 4.48535156,24.7978516 C5.78027344,26.0927734 7.60839844,26.2958984 9.76660156,26.2958984 L19.6308594,26.2958984 Z M19.9863281,24.2519531 L9.42382812,24.2519531 C8.11621094,24.2519531 6.74511719,24.0742188 5.97070312,23.3125 C5.20898438,22.5380859 5.04394531,21.1923828 5.04394531,19.8720703 L5.04394531,9.44921875 C5.04394531,8.11621094 5.20898438,6.74511719 5.97070312,5.98339844 C6.74511719,5.20898438 8.12890625,5.04394531 9.46191406,5.04394531 L19.9863281,5.04394531 C21.2939453,5.04394531 22.6650391,5.22167969 23.4267578,5.98339844 C24.2011719,6.7578125 24.3662109,8.10351562 24.3662109,9.41113281 L24.3662109,19.8720703 C24.3662109,21.1923828 24.2011719,22.5380859 23.4267578,23.3125 C22.6650391,24.0742188 21.2939453,24.2519531 19.9863281,24.2519531 Z M14.6923828,20.5449219 C15.3271484,20.5449219 15.7714844,20.1005859 15.7714844,19.4658203 L15.7714844,15.6826172 L19.5546875,15.6826172 C20.1894531,15.6826172 20.6337891,15.2636719 20.6337891,14.6416016 C20.6337891,14.0068359 20.1894531,13.5625 19.5546875,13.5625 L15.7714844,13.5625 L15.7714844,9.79199219 C15.7714844,9.14453125 15.3271484,8.70019531 14.6923828,8.70019531 C14.0703125,8.70019531 13.6513672,9.14453125 13.6513672,9.79199219 L13.6513672,13.5625 L9.88085938,13.5625 C9.23339844,13.5625 8.7890625,14.0068359 8.7890625,14.6416016 C8.7890625,15.2636719 9.23339844,15.6826172 9.88085938,15.6826172 L13.6513672,15.6826172 L13.6513672,19.4658203 C13.6513672,20.1005859 14.0703125,20.5449219 14.6923828,20.5449219 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.9492188,27.8984375 C22.0332031,27.8984375 27.8984375,22.0205078 27.8984375,14.9492188 C27.8984375,7.86523438 22.0205078,2 14.9365234,2 C7.86523438,2 2,7.86523438 2,14.9492188 C2,22.0205078 7.87792969,27.8984375 14.9492188,27.8984375 Z M14.9492188,25.7402344 C8.95703125,25.7402344 4.17089844,20.9414062 4.17089844,14.9492188 C4.17089844,8.95703125 8.94433594,4.15820312 14.9365234,4.15820312 C20.9287109,4.15820312 25.7275391,8.95703125 25.7402594,14.9492188 C25.7529297,20.9414062 20.9414062,25.7402344 14.9492188,25.7402344 Z M14.6826172,17.5771484 C15.3173828,17.5771484 15.7109375,17.1835938 15.7109375,16.6757812 L15.7109375,16.5234375 C15.7109375,15.8125 16.1171875,15.3681641 17.0058594,14.7841797 C18.2373047,13.9716797 19.1132812,13.2226562 19.1132812,11.7119141 C19.1132812,9.59179688 17.234375,8.46191406 15.0761719,8.46191406 C12.8925781,8.46191406 11.4580078,9.49023438 11.1152344,10.6582031 C11.0517578,10.8740234 11.0009766,11.0771484 11.0009766,11.2929688 C11.0009766,11.8515625 11.4580078,12.1689453 11.8769531,12.1689453 C12.6005859,12.1689453 12.7148438,11.7753906 13.1210938,11.3056641 C13.5400391,10.6074219 14.1494141,10.1884766 15,10.1884766 C16.1552734,10.1884766 16.9042969,10.8359375 16.9042969,11.8134766 C16.9042969,12.6767578 16.3710938,13.0957031 15.2666016,13.8574219 C14.3525391,14.4921875 13.6669922,15.1650391 13.6669922,16.4091797 L13.6669922,16.5742188 C13.6669922,17.2470703 14.0351562,17.5771484 14.6826172,17.5771484 Z M14.6572266,21.3730469 C15.3935547,21.3730469 16.0283203,20.7890625 16.0283203,20.0527344 C16.0283203,19.3037109 15.40625,18.7324219 14.6572266,18.7324219 C13.9082031,18.7324219 13.2861328,19.3164062 13.2861328,20.0527344 C13.2861328,20.7763672 13.9208984,21.3730469 14.6572266,21.3730469 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M13.9755859,28.6376953 C18.4316406,28.6376953 21.5800781,26.2255859 23.2685547,21.4648438 L25.5029297,15.1806641 C25.6552734,14.7490234 25.7314453,14.3300781 25.7314453,13.9492188 C25.7314453,12.6035156 24.7158203,11.6640625 23.4208984,11.6640625 C22.5449219,11.6640625 21.7578125,12.1845703 21.3261719,13.1875 L20.5009766,15.21875 C20.4755859,15.2695312 20.4375,15.3076172 20.3867188,15.3076172 C20.3232422,15.3076172 20.2978516,15.2568359 20.2978516,15.1933594 L20.2978516,5.01171875 C20.2978516,3.52636719 19.3710938,2.58691406 17.9492188,2.58691406 C17.4287109,2.58691406 16.9589844,2.77734375 16.6035156,3.10742188 C16.4384766,1.79980469 15.6005859,1 14.34375,1 C13.1123047,1 12.2490234,1.82519531 12.0585938,3.08203125 C11.7412109,2.76464844 11.2841797,2.58691406 10.8271484,2.58691406 C9.50683594,2.58691406 8.63085938,3.51367188 8.63085938,4.92285156 L8.63085938,6.33203125 C8.28808594,5.9765625 7.76757812,5.78613281 7.234375,5.78613281 C5.9140625,5.78613281 5,6.75097656 5,8.18554688 L5,19.0908203 C5,25.0322266 8.60546875,28.6376953 13.9755859,28.6376953 Z M13.9121094,26.8857422 C9.41796875,26.8857422 6.67578125,23.9912109 6.67578125,18.8876953 L6.67578125,8.36328125 C6.67578125,7.81738281 7.01855469,7.44921875 7.55175781,7.44921875 C8.07226562,7.44921875 8.453125,7.81738281 8.453125,8.36328125 L8.453125,14.8505859 C8.453125,15.3203125 8.83398438,15.6376953 9.24023438,15.6376953 C9.671875,15.6376953 10.0654297,15.3203125 10.0654297,14.8505859 L10.0654297,5.15136719 C10.0654297,4.60546875 10.4082031,4.22460938 10.9287109,4.22460938 C11.4619141,4.22460938 11.8300781,4.60546875 11.8300781,5.15136719 L11.8300781,14.203125 C11.8300781,14.6728516 12.2109375,14.9902344 12.6298828,14.9902344 C13.0615234,14.9902344 13.4423828,14.6728516 13.4423828,14.203125 L13.4423828,3.57714844 C13.4423828,3.03125 13.8105469,2.63769531 14.34375,2.63769531 C14.8515625,2.63769531 15.2197266,3.03125 15.2197266,3.57714844 L15.2197266,14.203125 C15.2197266,14.6474609 15.5751953,14.9902344 16.0195312,14.9902344 C16.4511719,14.9902344 16.8320312,14.6474609 16.8320312,14.203125 L16.8320312,5.15136719 C16.8320312,4.60546875 17.2001953,4.22460938 17.7207031,4.22460938 C18.2412109,4.22460938 18.609375,4.60546875 18.609375,5.15136719 L18.609375,17.6435547 C18.609375,18.2783203 18.9775391,18.6464844 19.5107422,18.6464844 C19.9677734,18.6464844 20.3486328,18.4433594 20.640625,17.8085938 L22.46875,13.7333984 C22.7099609,13.1875 23.1796875,12.9970703 23.6240234,13.1621094 C24.1191406,13.3398438 24.2714844,13.8095703 24.0429688,14.4316406 L21.7197266,20.9189453 C20.1708984,25.2480469 17.4541016,26.8857422 13.9121094,26.8857422 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Image Icons</h2>
						<section class="containerSection excludePadding">
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar1.png" width="30" />
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar2.png" width="30" />
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar3.png" width="30" />
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar4.png" width="30" />
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Icons of any size</h2>
						<section class="containerSection excludePadding">
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
					</div>
				</div>
				
				<h3 class="h6">Standard buttons with no inset</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
					<div class="containerItemList alwaysBackgroundColor" id="tableview1" data-target="testTarget" data-parent="testParent">
						<h2 class="headerList">Text Only</h2>
						<section class="containerSection excludePadding">
							<button class="itemList">
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList">
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">DIVS instead of Buttons</h2>
						<section class="containerSection excludePadding">
							<div class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
								<button>Test with a long label</button>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 2</span>
								</div>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 3</span>
								</div>
							</div>
							<div class="itemList">
								<div class="label">
									<span>Item 4</span>
								</div>
							</div>
						</section>
						
						<h2 class="headerList">SVG Icons</h2>
						<section class="containerSection excludePadding">
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.6308594,26.2958984 C21.8017578,26.2958984 23.6298828,26.0927734 24.9248047,24.7978516 C26.2197266,23.5029297 26.4101562,21.7001953 26.4101562,19.5292969 L26.4101562,9.76660156 C26.4101562,7.59570312 26.2197266,5.78027344 24.9248047,4.49804688 C23.6298828,3.203125 21.8017578,3 19.6308594,3 L9.74121094,3 C7.60839844,3 5.78027344,3.203125 4.48535156,4.49804688 C3.19042969,5.79296875 3,7.60839844 3,9.72851562 L3,19.5292969 C3,21.7001953 3.19042969,23.5029297 4.48535156,24.7978516 C5.78027344,26.0927734 7.60839844,26.2958984 9.76660156,26.2958984 L19.6308594,26.2958984 Z M19.9863281,24.2519531 L9.42382812,24.2519531 C8.11621094,24.2519531 6.74511719,24.0742188 5.97070312,23.3125 C5.20898438,22.5380859 5.04394531,21.1923828 5.04394531,19.8720703 L5.04394531,9.44921875 C5.04394531,8.11621094 5.20898438,6.74511719 5.97070312,5.98339844 C6.74511719,5.20898438 8.12890625,5.04394531 9.46191406,5.04394531 L19.9863281,5.04394531 C21.2939453,5.04394531 22.6650391,5.22167969 23.4267578,5.98339844 C24.2011719,6.7578125 24.3662109,8.10351562 24.3662109,9.41113281 L24.3662109,19.8720703 C24.3662109,21.1923828 24.2011719,22.5380859 23.4267578,23.3125 C22.6650391,24.0742188 21.2939453,24.2519531 19.9863281,24.2519531 Z M14.6923828,20.5449219 C15.3271484,20.5449219 15.7714844,20.1005859 15.7714844,19.4658203 L15.7714844,15.6826172 L19.5546875,15.6826172 C20.1894531,15.6826172 20.6337891,15.2636719 20.6337891,14.6416016 C20.6337891,14.0068359 20.1894531,13.5625 19.5546875,13.5625 L15.7714844,13.5625 L15.7714844,9.79199219 C15.7714844,9.14453125 15.3271484,8.70019531 14.6923828,8.70019531 C14.0703125,8.70019531 13.6513672,9.14453125 13.6513672,9.79199219 L13.6513672,13.5625 L9.88085938,13.5625 C9.23339844,13.5625 8.7890625,14.0068359 8.7890625,14.6416016 C8.7890625,15.2636719 9.23339844,15.6826172 9.88085938,15.6826172 L13.6513672,15.6826172 L13.6513672,19.4658203 C13.6513672,20.1005859 14.0703125,20.5449219 14.6923828,20.5449219 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.9492188,27.8984375 C22.0332031,27.8984375 27.8984375,22.0205078 27.8984375,14.9492188 C27.8984375,7.86523438 22.0205078,2 14.9365234,2 C7.86523438,2 2,7.86523438 2,14.9492188 C2,22.0205078 7.87792969,27.8984375 14.9492188,27.8984375 Z M14.9492188,25.7402344 C8.95703125,25.7402344 4.17089844,20.9414062 4.17089844,14.9492188 C4.17089844,8.95703125 8.94433594,4.15820312 14.9365234,4.15820312 C20.9287109,4.15820312 25.7275391,8.95703125 25.7402594,14.9492188 C25.7529297,20.9414062 20.9414062,25.7402344 14.9492188,25.7402344 Z M14.6826172,17.5771484 C15.3173828,17.5771484 15.7109375,17.1835938 15.7109375,16.6757812 L15.7109375,16.5234375 C15.7109375,15.8125 16.1171875,15.3681641 17.0058594,14.7841797 C18.2373047,13.9716797 19.1132812,13.2226562 19.1132812,11.7119141 C19.1132812,9.59179688 17.234375,8.46191406 15.0761719,8.46191406 C12.8925781,8.46191406 11.4580078,9.49023438 11.1152344,10.6582031 C11.0517578,10.8740234 11.0009766,11.0771484 11.0009766,11.2929688 C11.0009766,11.8515625 11.4580078,12.1689453 11.8769531,12.1689453 C12.6005859,12.1689453 12.7148438,11.7753906 13.1210938,11.3056641 C13.5400391,10.6074219 14.1494141,10.1884766 15,10.1884766 C16.1552734,10.1884766 16.9042969,10.8359375 16.9042969,11.8134766 C16.9042969,12.6767578 16.3710938,13.0957031 15.2666016,13.8574219 C14.3525391,14.4921875 13.6669922,15.1650391 13.6669922,16.4091797 L13.6669922,16.5742188 C13.6669922,17.2470703 14.0351562,17.5771484 14.6826172,17.5771484 Z M14.6572266,21.3730469 C15.3935547,21.3730469 16.0283203,20.7890625 16.0283203,20.0527344 C16.0283203,19.3037109 15.40625,18.7324219 14.6572266,18.7324219 C13.9082031,18.7324219 13.2861328,19.3164062 13.2861328,20.0527344 C13.2861328,20.7763672 13.9208984,21.3730469 14.6572266,21.3730469 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M13.9755859,28.6376953 C18.4316406,28.6376953 21.5800781,26.2255859 23.2685547,21.4648438 L25.5029297,15.1806641 C25.6552734,14.7490234 25.7314453,14.3300781 25.7314453,13.9492188 C25.7314453,12.6035156 24.7158203,11.6640625 23.4208984,11.6640625 C22.5449219,11.6640625 21.7578125,12.1845703 21.3261719,13.1875 L20.5009766,15.21875 C20.4755859,15.2695312 20.4375,15.3076172 20.3867188,15.3076172 C20.3232422,15.3076172 20.2978516,15.2568359 20.2978516,15.1933594 L20.2978516,5.01171875 C20.2978516,3.52636719 19.3710938,2.58691406 17.9492188,2.58691406 C17.4287109,2.58691406 16.9589844,2.77734375 16.6035156,3.10742188 C16.4384766,1.79980469 15.6005859,1 14.34375,1 C13.1123047,1 12.2490234,1.82519531 12.0585938,3.08203125 C11.7412109,2.76464844 11.2841797,2.58691406 10.8271484,2.58691406 C9.50683594,2.58691406 8.63085938,3.51367188 8.63085938,4.92285156 L8.63085938,6.33203125 C8.28808594,5.9765625 7.76757812,5.78613281 7.234375,5.78613281 C5.9140625,5.78613281 5,6.75097656 5,8.18554688 L5,19.0908203 C5,25.0322266 8.60546875,28.6376953 13.9755859,28.6376953 Z M13.9121094,26.8857422 C9.41796875,26.8857422 6.67578125,23.9912109 6.67578125,18.8876953 L6.67578125,8.36328125 C6.67578125,7.81738281 7.01855469,7.44921875 7.55175781,7.44921875 C8.07226562,7.44921875 8.453125,7.81738281 8.453125,8.36328125 L8.453125,14.8505859 C8.453125,15.3203125 8.83398438,15.6376953 9.24023438,15.6376953 C9.671875,15.6376953 10.0654297,15.3203125 10.0654297,14.8505859 L10.0654297,5.15136719 C10.0654297,4.60546875 10.4082031,4.22460938 10.9287109,4.22460938 C11.4619141,4.22460938 11.8300781,4.60546875 11.8300781,5.15136719 L11.8300781,14.203125 C11.8300781,14.6728516 12.2109375,14.9902344 12.6298828,14.9902344 C13.0615234,14.9902344 13.4423828,14.6728516 13.4423828,14.203125 L13.4423828,3.57714844 C13.4423828,3.03125 13.8105469,2.63769531 14.34375,2.63769531 C14.8515625,2.63769531 15.2197266,3.03125 15.2197266,3.57714844 L15.2197266,14.203125 C15.2197266,14.6474609 15.5751953,14.9902344 16.0195312,14.9902344 C16.4511719,14.9902344 16.8320312,14.6474609 16.8320312,14.203125 L16.8320312,5.15136719 C16.8320312,4.60546875 17.2001953,4.22460938 17.7207031,4.22460938 C18.2412109,4.22460938 18.609375,4.60546875 18.609375,5.15136719 L18.609375,17.6435547 C18.609375,18.2783203 18.9775391,18.6464844 19.5107422,18.6464844 C19.9677734,18.6464844 20.3486328,18.4433594 20.640625,17.8085938 L22.46875,13.7333984 C22.7099609,13.1875 23.1796875,12.9970703 23.6240234,13.1621094 C24.1191406,13.3398438 24.2714844,13.8095703 24.0429688,14.4316406 L21.7197266,20.9189453 C20.1708984,25.2480469 17.4541016,26.8857422 13.9121094,26.8857422 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Image Icons</h2>
						<section class="containerSection excludePadding">
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar1.png" width="30" />
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar2.png" width="30" />
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar3.png" width="30" />
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList fixedIconSize">
								<img src="images/ui/sidebar4.png" width="30" />
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Icons of any size</h2>
						<section class="containerSection excludePadding">
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
					</div>
				</div>
				
				<h3 class="h6">Rounded Buttons</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
					<div class="containerItemList inset alwaysBackgroundColor" id="tableview1" data-target="testTarget" data-parent="testParent">
						<h2 class="headerList">Text Only</h2>
						<section class="spacerDouble">
							<button class="itemList rounded">
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList rounded">
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList rounded">
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList rounded">
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">DIVS instead of Buttons</h2>
						<section class="spacerDouble">
							<div class="itemList rounded fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
								<button>Test with a long label</button>
							</div>
							<div class="itemList rounded">
								<div class="label">
									<span>Item 2</span>
								</div>
							</div>
							<div class="itemList rounded">
								<div class="label">
									<span>Item 3</span>
								</div>
							</div>
							<div class="itemList rounded">
								<div class="label">
									<span>Item 4</span>
								</div>
							</div>
						</section>
						
						<h2 class="headerList">SVG Icons</h2>
						<section class="spacerDouble">
							<button class="itemList rounded fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.6064453,26.3085938 C14.8730469,26.3085938 15.2539062,26.1308594 15.5332031,25.9658203 C22.6806641,21.3955078 27.2128906,16.0761719 27.2128906,10.6679688 C27.2128906,6.17382812 24.1279297,3 20.0146484,3 C17.6660156,3 15.7617188,4.1171875 14.6064453,5.83105469 C13.4765625,4.12988281 11.546875,3 9.19824219,3 C5.08496094,3 2,6.17382812 2,10.6679688 C2,16.0761719 6.53222656,21.3955078 13.6923828,25.9658203 C13.9589844,26.1308594 14.3398438,26.3085938 14.6064453,26.3085938 Z M14.6064453,24.1630859 C14.5556641,24.1630859 14.4667969,24.0996094 14.3525391,24.0107422 C9.03320312,20.4814453 4.04394531,15.390625 4.04394531,10.6679688 C4.04394531,7.29101562 6.22753906,5.04394531 9.17285156,5.04394531 C11.5595703,5.04394531 12.9306641,6.52929688 13.7431641,7.79882812 C14.0859375,8.30664062 14.3017578,8.44628906 14.6064453,8.44628906 C14.9111328,8.44628906 15.1015625,8.29394531 15.4697266,7.79882812 C16.3457031,6.5546875 17.6660156,5.04394531 20.0400391,5.04394531 C22.9853516,5.04394531 25.1689453,7.29101562 25.1689453,10.6679688 C25.1689453,15.390625 20.1796875,20.4814453 14.8730469,24.0107422 C14.7460937,24.0996094 14.6572266,24.1630859 14.6064453,24.1630859 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.6308594,26.2958984 C21.8017578,26.2958984 23.6298828,26.0927734 24.9248047,24.7978516 C26.2197266,23.5029297 26.4101562,21.7001953 26.4101562,19.5292969 L26.4101562,9.76660156 C26.4101562,7.59570312 26.2197266,5.78027344 24.9248047,4.49804688 C23.6298828,3.203125 21.8017578,3 19.6308594,3 L9.74121094,3 C7.60839844,3 5.78027344,3.203125 4.48535156,4.49804688 C3.19042969,5.79296875 3,7.60839844 3,9.72851562 L3,19.5292969 C3,21.7001953 3.19042969,23.5029297 4.48535156,24.7978516 C5.78027344,26.0927734 7.60839844,26.2958984 9.76660156,26.2958984 L19.6308594,26.2958984 Z M19.9863281,24.2519531 L9.42382812,24.2519531 C8.11621094,24.2519531 6.74511719,24.0742188 5.97070312,23.3125 C5.20898438,22.5380859 5.04394531,21.1923828 5.04394531,19.8720703 L5.04394531,9.44921875 C5.04394531,8.11621094 5.20898438,6.74511719 5.97070312,5.98339844 C6.74511719,5.20898438 8.12890625,5.04394531 9.46191406,5.04394531 L19.9863281,5.04394531 C21.2939453,5.04394531 22.6650391,5.22167969 23.4267578,5.98339844 C24.2011719,6.7578125 24.3662109,8.10351562 24.3662109,9.41113281 L24.3662109,19.8720703 C24.3662109,21.1923828 24.2011719,22.5380859 23.4267578,23.3125 C22.6650391,24.0742188 21.2939453,24.2519531 19.9863281,24.2519531 Z M14.6923828,20.5449219 C15.3271484,20.5449219 15.7714844,20.1005859 15.7714844,19.4658203 L15.7714844,15.6826172 L19.5546875,15.6826172 C20.1894531,15.6826172 20.6337891,15.2636719 20.6337891,14.6416016 C20.6337891,14.0068359 20.1894531,13.5625 19.5546875,13.5625 L15.7714844,13.5625 L15.7714844,9.79199219 C15.7714844,9.14453125 15.3271484,8.70019531 14.6923828,8.70019531 C14.0703125,8.70019531 13.6513672,9.14453125 13.6513672,9.79199219 L13.6513672,13.5625 L9.88085938,13.5625 C9.23339844,13.5625 8.7890625,14.0068359 8.7890625,14.6416016 C8.7890625,15.2636719 9.23339844,15.6826172 9.88085938,15.6826172 L13.6513672,15.6826172 L13.6513672,19.4658203 C13.6513672,20.1005859 14.0703125,20.5449219 14.6923828,20.5449219 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M14.9492188,27.8984375 C22.0332031,27.8984375 27.8984375,22.0205078 27.8984375,14.9492188 C27.8984375,7.86523438 22.0205078,2 14.9365234,2 C7.86523438,2 2,7.86523438 2,14.9492188 C2,22.0205078 7.87792969,27.8984375 14.9492188,27.8984375 Z M14.9492188,25.7402344 C8.95703125,25.7402344 4.17089844,20.9414062 4.17089844,14.9492188 C4.17089844,8.95703125 8.94433594,4.15820312 14.9365234,4.15820312 C20.9287109,4.15820312 25.7275391,8.95703125 25.7402594,14.9492188 C25.7529297,20.9414062 20.9414062,25.7402344 14.9492188,25.7402344 Z M14.6826172,17.5771484 C15.3173828,17.5771484 15.7109375,17.1835938 15.7109375,16.6757812 L15.7109375,16.5234375 C15.7109375,15.8125 16.1171875,15.3681641 17.0058594,14.7841797 C18.2373047,13.9716797 19.1132812,13.2226562 19.1132812,11.7119141 C19.1132812,9.59179688 17.234375,8.46191406 15.0761719,8.46191406 C12.8925781,8.46191406 11.4580078,9.49023438 11.1152344,10.6582031 C11.0517578,10.8740234 11.0009766,11.0771484 11.0009766,11.2929688 C11.0009766,11.8515625 11.4580078,12.1689453 11.8769531,12.1689453 C12.6005859,12.1689453 12.7148438,11.7753906 13.1210938,11.3056641 C13.5400391,10.6074219 14.1494141,10.1884766 15,10.1884766 C16.1552734,10.1884766 16.9042969,10.8359375 16.9042969,11.8134766 C16.9042969,12.6767578 16.3710938,13.0957031 15.2666016,13.8574219 C14.3525391,14.4921875 13.6669922,15.1650391 13.6669922,16.4091797 L13.6669922,16.5742188 C13.6669922,17.2470703 14.0351562,17.5771484 14.6826172,17.5771484 Z M14.6572266,21.3730469 C15.3935547,21.3730469 16.0283203,20.7890625 16.0283203,20.0527344 C16.0283203,19.3037109 15.40625,18.7324219 14.6572266,18.7324219 C13.9082031,18.7324219 13.2861328,19.3164062 13.2861328,20.0527344 C13.2861328,20.7763672 13.9208984,21.3730469 14.6572266,21.3730469 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<svg class="iconInfo" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M13.9755859,28.6376953 C18.4316406,28.6376953 21.5800781,26.2255859 23.2685547,21.4648438 L25.5029297,15.1806641 C25.6552734,14.7490234 25.7314453,14.3300781 25.7314453,13.9492188 C25.7314453,12.6035156 24.7158203,11.6640625 23.4208984,11.6640625 C22.5449219,11.6640625 21.7578125,12.1845703 21.3261719,13.1875 L20.5009766,15.21875 C20.4755859,15.2695312 20.4375,15.3076172 20.3867188,15.3076172 C20.3232422,15.3076172 20.2978516,15.2568359 20.2978516,15.1933594 L20.2978516,5.01171875 C20.2978516,3.52636719 19.3710938,2.58691406 17.9492188,2.58691406 C17.4287109,2.58691406 16.9589844,2.77734375 16.6035156,3.10742188 C16.4384766,1.79980469 15.6005859,1 14.34375,1 C13.1123047,1 12.2490234,1.82519531 12.0585938,3.08203125 C11.7412109,2.76464844 11.2841797,2.58691406 10.8271484,2.58691406 C9.50683594,2.58691406 8.63085938,3.51367188 8.63085938,4.92285156 L8.63085938,6.33203125 C8.28808594,5.9765625 7.76757812,5.78613281 7.234375,5.78613281 C5.9140625,5.78613281 5,6.75097656 5,8.18554688 L5,19.0908203 C5,25.0322266 8.60546875,28.6376953 13.9755859,28.6376953 Z M13.9121094,26.8857422 C9.41796875,26.8857422 6.67578125,23.9912109 6.67578125,18.8876953 L6.67578125,8.36328125 C6.67578125,7.81738281 7.01855469,7.44921875 7.55175781,7.44921875 C8.07226562,7.44921875 8.453125,7.81738281 8.453125,8.36328125 L8.453125,14.8505859 C8.453125,15.3203125 8.83398438,15.6376953 9.24023438,15.6376953 C9.671875,15.6376953 10.0654297,15.3203125 10.0654297,14.8505859 L10.0654297,5.15136719 C10.0654297,4.60546875 10.4082031,4.22460938 10.9287109,4.22460938 C11.4619141,4.22460938 11.8300781,4.60546875 11.8300781,5.15136719 L11.8300781,14.203125 C11.8300781,14.6728516 12.2109375,14.9902344 12.6298828,14.9902344 C13.0615234,14.9902344 13.4423828,14.6728516 13.4423828,14.203125 L13.4423828,3.57714844 C13.4423828,3.03125 13.8105469,2.63769531 14.34375,2.63769531 C14.8515625,2.63769531 15.2197266,3.03125 15.2197266,3.57714844 L15.2197266,14.203125 C15.2197266,14.6474609 15.5751953,14.9902344 16.0195312,14.9902344 C16.4511719,14.9902344 16.8320312,14.6474609 16.8320312,14.203125 L16.8320312,5.15136719 C16.8320312,4.60546875 17.2001953,4.22460938 17.7207031,4.22460938 C18.2412109,4.22460938 18.609375,4.60546875 18.609375,5.15136719 L18.609375,17.6435547 C18.609375,18.2783203 18.9775391,18.6464844 19.5107422,18.6464844 C19.9677734,18.6464844 20.3486328,18.4433594 20.640625,17.8085938 L22.46875,13.7333984 C22.7099609,13.1875 23.1796875,12.9970703 23.6240234,13.1621094 C24.1191406,13.3398438 24.2714844,13.8095703 24.0429688,14.4316406 L21.7197266,20.9189453 C20.1708984,25.2480469 17.4541016,26.8857422 13.9121094,26.8857422 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Image Icons</h2>
						<section class="spacerDouble">
							<button class="itemList rounded fixedIconSize">
								<img src="images/ui/sidebar1.png" width="30" />
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<img src="images/ui/sidebar2.png" width="30" />
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<img src="images/ui/sidebar3.png" width="30" />
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList rounded fixedIconSize">
								<img src="images/ui/sidebar4.png" width="30" />
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
						
						<h2 class="headerList">Icons of any size</h2>
						<section class="spacerDouble">
							<button class="itemList rounded">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 1</span>
									<span class="subtext">Sub-Label</span>
								</div>
							</button>
							<button class="itemList rounded">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 2</span>
								</div>
							</button>
							<button class="itemList rounded">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 3</span>
								</div>
							</button>
							<button class="itemList rounded">
								<svg height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M26.9199219,25.4648438 C29.3798828,25.4648438 31.0126953,23.8320312 31.0126953,21.3183594 C31.0126953,20.2441406 30.765625,19.0087891 30.3466797,17.6230469 C29.6914062,15.4208984 28.5419922,12.4238281 27.4462891,10.1035156 C26.5224609,8.16992188 26.0498047,7.2890625 23.7724609,6.7734375 C21.7529297,6.31152344 18.9492188,6 15.5117187,6 C12.0742188,6 9.25976562,6.31152344 7.24023438,6.7734375 C4.96289062,7.2890625 4.49023438,8.16992188 3.56640625,10.1035156 C2.47070312,12.4238281 1.32128906,15.4208984 0.666015625,17.6230469 C0.247070312,19.0087891 0,20.2441406 0,21.3183594 C0,23.8320312 1.6328125,25.4648438 4.09277344,25.4648438 C5.33886719,25.4648438 6.57421875,24.9277344 7.4765625,23.8105469 L9.42089844,21.4580078 C9.70019531,21.125 10.0224609,20.9638672 10.3447266,20.9638672 L20.6679688,20.9638672 C20.9902344,20.9638672 21.3125,21.125 21.5917969,21.4580078 L23.5361328,23.8105469 C24.4384766,24.9277344 25.6738281,25.4648438 26.9199219,25.4648438 Z M26.9414062,23.7998047 C26.125,23.7998047 25.3300781,23.3701172 24.7070312,22.6074219 L22.6875,20.1689453 C22.171875,19.5458984 21.7421875,19.234375 20.7431641,19.234375 L10.2695312,19.234375 C9.27050781,19.234375 8.84082031,19.5458984 8.32519531,20.1689453 L6.30566406,22.6074219 C5.68261719,23.3701172 4.88769531,23.7998047 4.07128906,23.7998047 C2.68554688,23.7998047 1.64355469,22.8652344 1.64355469,21.3828125 C1.64355469,20.7060547 1.79394531,19.8896484 2.13769531,18.71875 C2.85742188,16.2480469 4.10351562,13.046875 5.18847656,10.6728516 C5.71484375,9.5234375 6.00488281,8.82519531 7.40136719,8.50292969 C9.34570312,8.04101562 12.1171875,7.72949219 15.5117188,7.72949219 C18.8955078,7.72949219 21.6669922,8.04101562 23.6113281,8.50292969 C25.0078125,8.82519531 25.2871094,9.5234375 25.8242188,10.6728516 C26.9306641,13.046875 28.1230469,16.2587891 28.875,18.71875 C29.2294922,19.8896484 29.3691406,20.7060547 29.3691406,21.3828125 C29.3691406,22.8652344 28.3271484,23.7998047 26.9414062,23.7998047 Z M10.484375,17.2470703 C11.0107422,17.2470703 11.3330078,16.9033203 11.3330078,16.3554688 L11.3330078,14.4755859 L13.1484375,14.4755859 C13.75,14.4755859 14.1044922,14.1318359 14.1044922,13.5732422 C14.1044922,13.0361328 13.75,12.703125 13.1484375,12.703125 L11.3330078,12.703125 L11.3330078,10.8232422 C11.3330078,10.2753906 11.0107422,9.94238281 10.484375,9.94238281 C9.94726562,9.94238281 9.63574219,10.2753906 9.63574219,10.8232422 L9.63574219,12.703125 L7.70214844,12.703125 C7.14355469,12.703125 6.81054688,13.0361328 6.81054688,13.5732422 C6.81054688,14.1318359 7.14355469,14.4755859 7.70214844,14.4755859 L9.63574219,14.4755859 L9.63574219,16.3554688 C9.63574219,16.9033203 9.94726562,17.2470703 10.484375,17.2470703 Z M22.1826172,13.4335938 C23.0634766,13.4335938 23.7294922,12.7675781 23.7294922,11.8974609 C23.7294922,11.0166016 23.0634766,10.3398438 22.1826172,10.3398438 C21.3232422,10.3398438 20.6357422,11.0166016 20.6357422,11.8974609 C20.6357422,12.7675781 21.3232422,13.4335938 22.1826172,13.4335938 Z M19.0244141,16.6240234 C19.8945312,16.6240234 20.5712891,15.9472656 20.5712891,15.0771484 C20.5712891,14.1962891 19.8945312,13.5195312 19.0244141,13.5195312 C18.1650391,13.5195312 17.4775391,14.1962891 17.4775391,15.0771484 C17.4775391,15.9472656 18.1650391,16.6240234 19.0244141,16.6240234 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								<div class="label">
									<span>Item 4</span>
								</div>
							</button>
						</section>
					</div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Item Lists are the core component for making lists of things within Rebar. They offer a flexible set of styles to fit all types of lists. The basis of an Item List is a container with the <code>containerItemList</code> class. By default an Item List will take up 100% of it's parent container's width and height.</p>
				<p>Any row that is solely clickable needs to be a <code>button</code> with the <code>itemList</code> class. If the row itself is to not be clickable, maybe because it contains controls within itself, then it should be set as a <code>div</code> instead of a button.</p>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="containerItemList" id=""&gt;&lt/div&gt;
</pre>
				
				<h3>Functions</h3>
				<p class="spacerTriple">At their core Item Lists are just Source Lists with a particular set of styles applied which means they use <code>changeView()</code>. Refer to the Routes and Source Lists section for more information.</p>
				
				<h3>CSS</h3>
				<p>Several styling classes can be applied to the <code>containerItemList</code> container to give it different appearances:</p>
				<ul>
					<li><code>inset</code> will add a consistent padding to the container to inset the row items. This should always be used when you have buttons using the <code>rounded</code> class. This class will also set rounded corners to the <code>section</code> elements inside the container.</li>
					<li><code>alwaysBackgroundColor</code> will force the container to always use the <code>--background</code> colour.</li>
					<li><code>inline</code> will make Item Lists work in the middle of a content column. If you want rounded corners for your sections you can use the <code>inset</code> class but <code>inline</code> will forcefully remove the padding.</li>
					<li>While not a property of the container itself, it's important to note the third style is the Rounded List and this requires setting the <code>rounded</code> class on the buttons.</li>
					<li>The icon you add to the left of each button can be any size you want but if you want to set it to a Rebar defined size of 24px you can add the <code>fixedIconSize</code> class on the buttons.</li>
				</ul>
				<p>Rebar does not support picked List Items with a checkmark style. If you need to select from a group of options please use a Picker Menu instead.</p>
			</div>
		`,
	},
	toolbars: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Toolbars</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				
				<h3 class="h6">Toolbar Layouts</h3>
				<div class="containerGeneric excludePadding" id="exampleToolbar1">
					<header class="containerToolbar">
						<div class="pinLeft">
							<button class="transparent">${iconInterfaceElements.shareSquareUpStroke}</button>
						</div>
						<h1 class="headerToolbar">Standard Items</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
					</header>
				</div>
				
				<div class="containerGeneric excludePadding" id="exampleToolbar1">
					<header class="containerToolbar">
						<div class="pinLeft">
							<button class="toolbarItem">${iconInterfaceElements.shareSquareUpStroke}</button>
						</div>
						<h1 class="headerToolbar">Native Items</h1>
						<div class="pinRight">
							<button class="toolbarItem">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="toolbarItem">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
					</header>
				</div>
				
				<div class="containerGeneric excludePadding" id="exampleToolbar1">
					<header class="containerToolbar alwaysLeft">
						<div class="pinLeft">
							<button class="back slim toolbarItem">
								<svg width="14px" height="24px" viewBox="0 0 14 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M12.1132812,23.734375 C12.8242188,23.734375 13.3710938,23.2011719 13.3710938,22.4902344 C13.3710938,22.1347656 13.2207031,21.8339844 13.0019531,21.6015625 L3.04882812,11.8671875 L13.0019531,2.1328125 C13.2207031,1.90039062 13.3710938,1.5859375 13.3710938,1.24414062 C13.3710938,0.533203125 12.8242188,0 12.1132812,0 C11.7578125,0 11.4570312,0.123046875 11.2246094,0.35546875 L0.3828125,10.9648438 C0.123046875,11.2109375 0,11.5253906 0,11.8671875 C0,12.2089844 0.123046875,12.5097656 0.3828125,12.7695312 L11.2246094,23.3652344 C11.4570312,23.6113281 11.7578125,23.734375 12.1132812,23.734375 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
								Gallery
							</button>
						</div>
						<h1 class="headerToolbar">Keep Left</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
					</header>
				</div>
				
				<div class="containerGeneric excludePadding spacerDouble" id="exampleToolbar1">
					<header class="containerToolbar singleItem">
						<input type="search" placeholder="Single Item" />
					</header>
				</div>
				
				<h3 class="h6">Accessory Bars</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="exampleToolbar2">
					<header class="containerToolbar withAccessory" id="accessoryParent1">
						<div class="pinLeft">
							<button class="transparent">${iconInterfaceElements.shareSquareUpStroke}</button>
						</div>
						<h1 class="headerToolbar">Header</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							</button>
						</div>
					</header>
					<div class="scrollview" id="headerContent2">
						<div class="containerAccessoryBar">
							<input type="search" placeholder="Search text">
						</div>
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						</div>
					</div>
				</div>
				
				
				<h3 class="h6">Inline Accessory Bars</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="exampleToolbar4">
					<header class="containerToolbar withAccessory withInlineAccessory" id="accessoryParent3">
						<div class="pinLeft">
							<button class="transparent">${iconInterfaceElements.shareSquareUpStroke}</button>
						</div>
						<h1 class="headerToolbar">Header</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
					</header>
					<div class="containerInlineAccessory" id="headerContent4Parent">
						<div class="containerAccessoryBar">
							<input type="search" placeholder="Search text">
						</div>
						<div class="scrollview">
							<div class="groupText">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							</div>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Vanishing Toolbar</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="exampleToolbar2">
					<header class="containerToolbar noBackground" id="disappearingToolbar">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Header</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							</button>
						</div>
					</header>
					<div class="scrollview" id="disappearingScrollview">
						<div class="groupText">
							<h1>Header</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						</div>
					</div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Toolbars are the primary way of adding a header to a view. They are designed to contain a title and up to four buttons (two on each side). They can also contain navigation controls in the form of a Back Button and Aside Collapse Button.</p>
				<p>Accessory Bars sit inside the scrollview underneath the scrollview's Toolbar and will scroll with the content. It's important to use the <code>toolbarDivider()</code> function to ensure the bottom border gets displayed properly.</p>
				<p>Inline Accessory Bars will sit to the right of the Toolbar on larger screens. They require a different setup to standard Accessory Bars to work.</p>
				<p>Hidden Toolbars are set to hide the background, border, and title until the Scrollview has been scrolled past a defined point. You must include the <code>noBackground</code> class on <code>.containerToolbar</code> and use the <code>toolbarVisibility()</code> function to make the standard state appear.</p>
				<h4 class="h6">Templates</h4>
<pre class="spacerTriple">
//TOOLBAR
&lt;header class="containerToolbar"&gt;
    &lt;div class="pinLeft"&gt;&lt;/div&gt;
    &lt;h1 class="headerToolbar"&gt;&lt;/h1&gt;
    &lt;div class="pinRight"&gt;&lt;/div&gt;
&lt;/header&gt;


//ACCESSORY BAR
&lt;header class="containerToolbar withAccessory"&gt;
    &lt;div class="pinLeft"&gt;&lt;/div&gt;
    &lt;h1 class="headerToolbar"&gt;&lt;/h1&gt;
    &lt;div class="pinRight"&gt;&lt;/div&gt;
&lt;/header&gt;
&lt;div class="scrollview"&gt;
    &lt;div class="containerAccessoryBar"&gt;&lt;/div&gt;
&lt;/div&gt;


//INLINE ACCESSORY BAR
&lt;header class="containerToolbar withAccessory withInlineAccessory"&gt;
    &lt;div class="pinLeft"&gt;&lt;/div&gt;
    &lt;h1 class="headerToolbar"&gt;&lt;/h1&gt;
    &lt;div class="pinRight"&gt;&lt;/div&gt;
&lt;/header&gt;
&lt;div class="containerInlineAccessory"&gt;
    &lt;div class="containerAccessoryBar"&gt;&lt;/div&gt;
    &lt;div class="scrollview">&lt;/div&gt;
&lt;/div&gt;


//VANISHING TOOLBAR
&lt;header class="containerToolbar noBackground"&gt;
    &lt;div class="pinLeft"&gt;&lt;/div&gt;
    &lt;h1 class="headerToolbar"&gt;&lt;/h1&gt;
    &lt;div class="pinRight"&gt;&lt;/div&gt;
&lt;/header&gt;
</pre>
				
				<h3>Functions</h3>
				<p>There are two functions related to Toolbars, <code>toolbarDivider()</code> and <code>toolbarVisibility()</code>. They each handle visibility of styles when the corresponding Scrollview is scrolled. Both functions take the same options:</p>
				<ul>
					<li><code>scrollview</code> is the ID of the container to be watched for a changing scroll position.</li>
					<li><code>toolbar</code> is the ID of the target <code>.headerToolbar</code> to have styling classes toggled.</li>
					<li><code>height</code> is the value you wish for the styling classes to be toggled at.</li>
				</ul>
<pre class="spacerTriple">
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
</pre>
				
				<h3>CSS</h3>
				<p>There are a number of clases associated with Toolbars that make everything work:</p>
				<ul>
					<li><code>containerToolbar</code> sets a container as a Toolbar.</li>
					<li><code>withAccessory</code> will remove the bottom border so that Accessory Bars sit flush underneath the Toolbar.</li>
					<li><code>withInlineAccessory</code> will add back the bottom border on larger screens due to the Accessory Bar no longer being flush.</li>
					<li><code>containerInlineAccessory</code> is used to shuffle around an Accessory Bar and Scrollview so that on smaller screens the Accessory Bar can scroll away but on larger screens will be fixed to the right of the Toolbar.</li>
					<li><code>containerAccessoryBar</code> sets a container as an Accessory Bar.</li>
					<li><code>pinLeft</code> is used to hold content to the leading edge of the Toolbar.</li>
					<li><code>pinRight</code> is used to hold content to the trailing edge of the Toolabr.</li>
					<li><code>headerToolbar</code> is used to hold the title of the Toolbar.</li>
					<li><code>dividerBottom</code> is used to add back the bottom border that <code>.withAccessory</code> removes. This is used with the <code>toolbarDivider()</code> function.</li>
					<li><code>noBackground</code> is used to hide the background, border, and title of a Toolbar. This is used with the <code>toolbarVisibility()</code> function.</li>
					<li><code>singleItem</code> is used for Toolbars that only contain one child item (this is primarily intended for Toolbars that contain a single Search Input).</li>
					<li><code>translucent</code> will change the background to the Translucent Material.</li>
					<li><code>alwaysLeft</code> will set <code>.pinLeft</code> to always sit on the leading edge regardless of screen size.</li>
				</ul>
			</div>
		`,
	},
	tabBars: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Tab Bars</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Standard</h3>
				<div class="containerGeneric excludePadding" id="exampleTabBar1">
					<footer class="containerTabBar" id="tabBar1">
						<button class="tab" data-value="footerTab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="footerTab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="footerTab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="footerTab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="footerTab5">
							<img src="images/ui/sidebar1.png" />
							Fifth
						</button>
					</footer>
					<div id="contentAreaTabs1"></div>
				</div>

				<h3 class="h6">Using Segmented Control</h3>
				<div class="containerGeneric" id="exampleTabBar2">
					<div class="controlSegmented" id="tabBar2">
						<button class="segment" data-value="segmentTab1">First</button>
						<button class="segment" data-value="segmentTab2">Second</button>
						<button class="segment" data-value="segmentTab3">Third</button>
						<button class="segment" data-value="segmentTab4">Fourth</button>
						<button class="segment" data-value="segmentTab5">Fifth</button>
					</div>
					<div id="contentAreaTabs2"></div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Tab Bars present up to 5 options to pick from (more can be added but they will be cramped on small screens). The Standard style is used for app-level view changing but Segmeneted Controls can also be used for in-view tabs. It's preferrable to use SVGs for the icons but images can be used too. It is not required to use a <code>footer</code> element for Tab Bars.</p>
				<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;footer class="containerTabBar" id=""&gt;
    &lt;button class="tab" data-value=""&gt;
        &lt;svg&gt;&lt;/svg&gt;
        Label
    &lt;/button&gt;
    &lt;button class="tab" data-value=""&gt;
        &lt;svg&gt;&lt;/svg&gt;
        Label
    &lt;/button&gt;
    &lt;button class="tab" data-value=""&gt;
        &lt;svg&gt;&lt;/svg&gt;
        Label
    &lt;/button&gt;
    &lt;button class="tab" data-value=""&gt;
        &lt;svg&gt;&lt;/svg&gt;
        Label
    &lt;/button&gt;
    &lt;button class="tab" data-value=""&gt;
        &lt;svg&gt;&lt;/svg&gt;
        Label
    &lt;/button&gt;
&lt;/footer>
</pre>
				
				<h3>Functions</h3>
				<p>At their core Tab Bars are just Source Lists with a particular set of styles applied which means they use <code>changeView()</code>. Refer to the Routes and Source Lists section for more information.</p>
				<p class="spacerTriple">A preset picked item on load can be set by applying <code>$("#tabBarName [data-value='valueName']").addClass("picked");</code></p>
				
				<h3>CSS</h3>
				<p>Tab Bars can use the <code>translucent</code> class to make the background of the bar translucent if required. The other styling class available to you is the <code>picked</code> class which sets the style of the picked tab.</p>
				<p>If you need for the layout of the Tab Bar Items to stay vertical on larger screens you can add the <code>alwaysVertical</code> class to the <code>containerTabBar</code> container.</p>
			</div>
		`,
	},
	scrollviews: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Scrollviews</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<h3 class="h6">Scrollview only</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<div class="scrollview">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="scrollview cropToolbar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar and scrolling Accessory Bar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar withAccessory alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="scrollview cropToolbar">
						<div class="containerAccessoryBar">
							<input type="search" placeholder="Search text">
						</div>
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar and fixed Accessory Bar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar withAccessory alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="containerAccessoryBar">
						<input type="search" placeholder="Search text">
					</div>
					<div class="scrollview cropToolbar cropAccessoryBar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar and Inline Accessory Bar</h3>
				<div class="containerGeneric excludePadding" id="scrollview1">
					<header class="containerToolbar withAccessory withInlineAccessory">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="containerInlineAccessory">
						<div class="containerAccessoryBar">
							<input type="search" placeholder="Search text">
						</div>
						<div class="scrollview">
							<div class="groupText">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							</div>
						</div>
					</div>
				</div>
				
				<h3 class="h6">Scrollview with Tab Bar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<div class="scrollview cropTabBar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
					<footer class="containerTabBar" id="tabBar1" data-target="contentAreaTabs1">
						<button class="tab" data-value="tab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="tab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="tab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="tab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="tab5">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar and Tab Bar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="scrollview cropToolbar cropTabBar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
					<footer class="containerTabBar" id="tabBar1" data-target="contentAreaTabs1">
						<button class="tab" data-value="tab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="tab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="tab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="tab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="tab5">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar, fixed Accessory Bar, and Tab Bar</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar withAccessory alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="containerAccessoryBar">
						<input type="search" placeholder="Search text">
					</div>
					<div class="scrollview cropToolbar cropAccessoryBar cropTabBar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
					<footer class="containerTabBar" id="tabBar1" data-target="contentAreaTabs1">
						<button class="tab" data-value="tab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="tab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="tab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="tab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="tab5">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
				</div>
				
				<h3 class="h6">Scrollview with Toolbar, Inline Accessory Bar, and Tab Bar</h3>
				<div class="containerGeneric excludePadding" id="scrollview1">
					<header class="containerToolbar withAccessory withInlineAccessory">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="containerInlineAccessory cropTabBar">
						<div class="containerAccessoryBar">
							<input type="search" placeholder="Search text">
						</div>
						<div class="scrollview">
							<div class="groupText">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
								<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
								<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
							</div>
						</div>
					</div>
					<footer class="containerTabBar" id="tabBar1" data-target="contentAreaTabs1">
						<button class="tab" data-value="tab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="tab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="tab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="tab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="tab5">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
				</div>
				
				<h3 class="h6">Scrollview that sits underneath Translucent Bars</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
					<header class="containerToolbar translucent alwaysLeft">
						<div class="pinLeft"></div>
						<h1 class="headerToolbar">Toolbar</h1>
						<div class="pinRight"></div>
					</header>
					<div class="scrollview insetToolbar insetTabBar">
						<div class="groupText">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
							<img src="images/ui/image.jpg" width="400" style="min-width: 100%" class="spacerSingle" />
							<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
							<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
							<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
							<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
						</div>
					</div>
					<footer class="containerTabBar translucent" id="tabBar1" data-target="contentAreaTabs1">
						<button class="tab" data-value="tab1">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab" data-value="tab2">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab" data-value="tab3">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab" data-value="tab4">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab" data-value="tab5">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Scrollviews are designed to manage most scrollable regions within Rebar (some components like Sidebars come with scrolling baked in to save you having to insert a Scrollview in to them). To make a Scrollview you wrap the content you want to scroll in a <code>.scrollview</code> container and apply different classes to tell the container how much to inset itself.</p>
				<p class="spacerTriple">The purpose of this is to make sure scrollbars do not sit underneath bars or within them (There are two exceptions here, Accessory Bars and Translucent Bars. Accessory Bars have to have the scrollbar sit to the side due to their nature and Translucent Bars have to have scrollbar sit underneath them to get the translucent effect to work).</p>
				
				<h3>Functions</h3>
				<p class="spacerTriple">The only function associated with Scrollviews is related to Accessory Bars to make sure the border on the Toolbar appears properly. Refer to the Toolbars section for more information.</p>
				
				<h3>CSS</h3>
				<p class="excludeMargin">There are several classes to manage the size and position of a Scrollview:</p>
				<ul>
					<li><code>.cropToolbar</code> will inset the Scrollview from the top by the height of the Toolbar.</li>
					<li><code>.cropAccessoryBar</code> will inset the Scrollview from the top by the height of the Accessory Bar.</li>
					<li><code>.cropTabBar</code> will inset the Scrollview from the bottom by the height of the Tab Bar.</li>
					<li><code>.insetToolbar</code> will add top padding to the Scrollview that is the height of the Toolbar.</li>
					<li><code>.insetTabBar</code> will add bottom padding to the Scrollview that is the height of the Tab Bar.</li>
				</ul>
				<p>It is intended to combine the different <code>.crop</code> classes together to get a Scrollview that fits within the bars of your view. The <code>.inset</code> classes should be combined if you want Translucent Bars. It is not recommended to combine the <code>.crop</code> and <code>.inset</code> classes on a single Scrollview.</p>
				<p>In the future most of these classes will be deprecated for <code>:has()</code> when that is supported by browsers.</p>
				<p>If the Scrollview is a content container you should add the <code>paddingContent</code> class.</p>
			</div>
		`,
	},
	sections: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Sections</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="containerSection">
					<p class="excludeMargin">This is a standard section.</p>
				</section>
				<h2 class="headerSection">Header</h2>
				<section class="containerSection">
					<p class="excludeMargin">This is a section with a section header.</p>
				</section>
				<h2 class="headerSection withIcon">
					<span class="alwaysAccent containerIcon">${iconInterfaceElements.locationStroke}</span>
					<span class="h6">Header with Icon</span>
				</h2>
				<section class="containerSection">
					<p class="excludeMargin">This is a section with a section header.</p>
				</section>
				
				<h2>Documentation</h2>
				<p>Sections use the <code>containerSection</code> class to turn any element in to a Rebar section (it is not required to use the <code>section</code> element). You can also include a joined header with the <code>headerSection</code> class, which can include an icon.</p>
				<h3 class="h6">Templates</h3>
<pre>
//SECTION
&lt;section class="containerSection"&gt;&lt;/section&gt;

//SECTION WITH HEADER
&lt;h1 class="headerSection"&gt;&lt;/h1&gt;
&lt;section class="containerSection"&gt;&lt;/section&gt;

//SECTION WITH HEADER THAT HAS AN ICON
&lt;h1 class="headerSection"&gt;
    &lt;span class="alwaysAccent containerIcon"&gt;&lt;/span&gt;
    &lt;span class="h6"&gt;&lt;/span&gt;
&lt;/h1&gt;
&lt;section class="containerSection"&gt;&lt;/section&gt;
</pre>
			</div>
		`,
	},
	accordions: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Accordions</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerAccordion spacerSingle">
					<div class="headerAccordion">
						<h3>Header</h3>
						<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
					</div>
					<section class="containerAccordionContents">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p class="excludeMargin">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</section>
				</div>
				<div class="containerAccordion spacerTriple" id="exampleAccordion2">
					<div class="headerAccordion headerSection">
						<h3>Header</h3>
						<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
					</div>
					<section class="containerAccordionContents">
						<section class="containerSection">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p class="excludeMargin">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						</section>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Accordions are designed to hide content by default leaving only a header to click on to show that content. Accordions is Rebar are comprised on two pieces, <code>.headerAccordion</code> and <code>.containerAccordionContents</code> containers. You can wrap these two containers in a <code>.containerAccordion</code> container but that isn't necessary for the function for the Accordion (it can help you with spacing).</p>
				<p>For Accordions that are supposed to look like a <code>.containerSection</code> with a <code>.headerSection</code> this requires a little more setup.</p>
				<p>It is not required to include the chevron SVG but it's recommended so that users can identify that this is an Accordion. You can include any style of chevron you want as long as it's wrapped in a <code>.containerChevron</code> container. By default Rebar determines the closed state of the chevron should be pointing right and the open state should be pointing down, this was chosen for clarity between states but you are free to change to rotation to whatever you need it to be.</p>
<pre class="spacerTriple">
//STANDARD
&lt;div class="containerAccordion"&gt;
    &lt;div class="headerAccordion"&gt;
        &lt;h3&gt;&lt;/h3&gt;
        &lt;div class="containerChevron"&gt;&#36;{iconShapes.chevronSingleRightStroke}&lt;/div&gt;
    &lt;/div&gt;
    &lt;section class="containerAccordionContents"&gt;&lt;/section&gt;
&lt;/div>

//REPLICATING A SECTION CONTAINER
&lt;div class="containerAccordion"&gt;
    &lt;div class="headerAccordion headerSection"&gt;
        &lt;h3&gt;&lt;/h3&gt;
        &lt;div class="containerChevron"&gt;&#36;{iconShapes.chevronSingleRightStroke}&lt;/div&gt;
    &lt;/div&gt;
    &lt;section class="containerAccordionContents"&gt;
        &lt;section class="containerSection"&gt;&lt;/section&gt;
    &lt;/section&gt;
&lt;/div&gt;
</pre>
				
				<h3>Functions</h3>
				<p>Accordions have an automatic click function associated with them. As long as your header has the <code>headerAccordion</code> class then the click function will fire.</p>
<pre class="spacerTriple">
$(document).on('click', '.headerAccordion', function() {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
});
</pre>
				
				<h3>CSS</h3>
				<p>Accordions don't carry much in the way of inherent styles. You are pretty free to style the contents as you see fit. The only styling requirement is if you want it to look like a Section Container then you need to follow the structure above for that to work.</p>
				<p>When placed in a Sidebar some styling will be applied to make sure the header fits in with the other headers.</p>
				<p>If you wish to have the accordion open on load, add the <code>active</code> class to the <code>.headerAccordion</code> and <code>.containerAccordionContents</code> containers.</p>
				<p>It's important to know that accordions do not carry an <code>overflow: hidden;</code> and if you need rounded corners you will need to apply this manually.</p>
			</div>
		`,
	},
	iframes: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "layout",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="layout" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">iframes</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
					<iframe src="https://toast-studio.com/"></iframe>
				</div>
				
				<h2>Documentation</h2>
				<p>The only thing Rebar does for iframes is remove their border and set them to 100% width and height of their parent container.</p>
			</div>
		`,
	},
	
	//MODALS
	panels: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Panels</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>HTML</h2>
				<p>Panels power all of the modals within Rebar and are the basis of Sheets, Lightboxes, Alerts, Toasts, the Shortcuts Panel, and the Install Banner. Panels will always contain a content container that sits on top of an overlay. HTML examples for controls powered by Panels can be found in their own sections.</p>
				<p class="spacerTriple">Dismissing Panels is handled by the <code>dismissPanel()</code> function.</p>
				<h2>Functions</h2>
				<p>You can generate a Panel by invoking the <code>summonPanel()</code> function. This will handle generating the correct skeleton for you and inserting content (Sheets require inserting the content outside of the function so that they are completely flexible). When generating a Panel you must specify the right properties to display the correct Panel type, change how it looks, and give it content.</p>
				<h3 class="h6 excludePadding">Properties</h3>
				<ul>
					<li><code>type</code> takes a value of <code>sheet</code>, <code>lightbox</code>, <code>alert</code>, or <code>toast</code>. This determines what type of Panel you would like.</li>
					<li><code>backing</code> takes a value of <code>dark</code>, <code>light</code>, <code>transparent</code>, <code>blur</code>, or <code>gradient</code>. Blur can be mixed with the other three. This determines what the backing sheet looks like.</li>
					<li><code>theme</code> takes a value of your theme CSS class. This only applies to Sheets and allows them to be themed independantly of the rest of the app.</li>
					<li><code>outerPadding</code> takes a value of <code>exclude</code>. This allows you to remove the padding on the <code>.containerPanel</code> container.</li>
					<li><code>innerPadding</code> takes a value of <code>exclude</code>. This only applies to Sheets and allows you to remove the padding on the <code>.containerSheetContents</code> container.</li>
					<li><code>size</code> takes a value of <code>full</code> or <code>half</code>. This only applies to Sheets and allows you to set their size.</li>
					<li><code>width</code> takes a value of <code>slim</code>. This only applies to Sheets and allows you to make the Sheet skinnier on larger screens.</li>
					<li><code>icon</code> takes a value of an <code>img</code> or <code>svg</code> tag. This only applies to Toasts and allows to prepend an image.</li>
					<li><code>toolbar</code> takes a value of <code>include</code or <code>hidden</code>. This only applies to Sheets and allows you to control the visiblity of the Toolbar. If you set this to <code>hidden</code> then an <code>&times;</code> dismiss button will be inserted.</li>
					<li><code>title</code> takes a value of a string of text. This allows you to set the title of the Panel.</li>
					<li><code>message</code> takes a value of a string of text. This only applies to Toasts and allows you to set the message of the Toast.</li>
					<li><code>action</code> takes a value of a string of text. This only applies to Sheets and Alerts. On Sheets it allows you to set the label of the dismiss button (for sheets if no value is provided it will default to "Done") and on Alerts it allows you to set the label of the action button.</li>
					<li><code>actionID</code> takes a value of a strong of text. This only applies to Alerts and allows you to set the ID of the action button.</li>
					<li><code>buttonStyle</code> takes a value of <code>button</code> style class. This only applies to Alerts and allows you to set the style of the action button.</li>
				</ul>
<pre class="spacerTriple">
//SUMMON PANEL
The summonPanel() function is too large to reproduce here. Please refer to it in the rebar.js file

//DISMISS PANEL
function dismissPanel() {
    $(".containerPanel").addClass("inactive");
    $(".containerApp").removeClass("recede");
    setTimeout(function(){ $(".containerPanel").remove(); }, 400);
}
</pre>
				
				<h2>CSS</h2>
				<p>All styling is handled through the properties on the <code>summonPanel()</code> function.</p>
			</div>
		`,
	},
	sheets: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Sheets</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Full Sheet</span>
							</div>
							<button id="exampleSheet1">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Half Sheet (Exclude Padding)</span>
							</div>
							<button id="exampleSheet3">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Half Sheet (Include Padding)</span>
							</div>
							<button id="exampleSheet3b">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Themed Sheet</span>
							</div>
							<button id="exampleSheet2">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Toolbar Hidden Sheet</span>
							</div>
							<button id="exampleSheet4">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Slim Sheet</span>
							</div>
							<button id="exampleSheet5">View</button>
						</div>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Sheets are the primary way of displaying modals within Rebar. They feature a Toolbar as a heading and a contents container. No boiler plate code is required, the <code>summonPanel()</code> function will generate it for you. There are two styles of Sheet:</p>
				<ul class="spacerTriple">
					<li>A Full Sheet will take up the entire screen on smaller screens and as a centre panel on larger screens.</li>
					<li>A Half Sheet will take up half the screen on smaller screens and appear as a panel that slides out from the right on larger screens.</li>
				</ul>
				
				<h3>Functions and CSS</h3>
				<p class="spacerTriple">At their core Sheets are just Panels with a particular set of styles applied which means they use <code>summonPanel()</code>. Refer to the Panels section for more information.</p>
			</div>
		`,
	},
	lightboxes: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Lightboxes</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Show Lightbox</span>
							</div>
							<button id="exampleLightbox">View</button>
						</div>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>Lightboxes are a great way to zoom in on content within a view. Primarily intended for viewing images, a Lightbox can contain anything you want.</p>
				
				<h3>Functions</h3>
				<p>At their core Lightboxes are just Panels with a particular set of styles applied which means they use <code>summonPanel()</code>. Refer to the Panels section for more information.</p>
				<p class="spacerTriple">It is worth noting that <code>.containerLightbox</code> is inserted in to <code>.backingPanel</code> instead of <code>.containerPanel</code> like all other Panels. This is to make use of the fade animation that <code>.backingPanel</code> already has.</p>
				
				<h3>CSS</h3>
				<p>By default <code>img</code> has a <code>max-width</code> and <code>max-height</code> of 100% applied so images don't fall outside the viewport.</p>
			</div>
		`,
	},
	alerts: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Alerts</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Standard Action</span>
							</div>
							<button id="exampleAlert1">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Destructive Action</span>
							</div>
							<button id="exampleAlert2">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>No Message</span>
							</div>
							<button id="exampleAlert3">View</button>
						</div>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerTriple">Alerts are Sheets that have a different purpose and differnt styling but function the same. They both bring up a modal to display content, Alerts however are intended to be disruptive a force the choice of an option.</p>
				
				<h3>Functions and CSS</h3>
				<p class="spacerTriple">At their core Alerts are just Panels with a particular set of styles applied which means they use <code>summonPanel()</code>. Refer to the Panels section for more information.</p>
			</div>
		`,
	},
	toasts: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Toasts</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Standard</span>
							</div>
							<button id="exampleToast1">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>With SVG Icon</span>
							</div>
							<button id="exampleToast2">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>With Image Icon</span>
							</div>
							<button id="exampleToast3">View</button>
						</div>
					</section>
				</div>
					
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerTriple">Toasts are small, discreet notifications that appear from the top of the screen. They should be used when needing to notify a user the result of an action they took (for example adding a song to a playlist). Toasts can include an image but this is not mandatory. It is only possible to have a single line of text.</p>
				
				<h3>Functions and CSS</h3>
				<p>At their core Sheets are just Panels with a particular set of styles applied which means they use <code>summonPanel()</code>. Refer to the Panels section for more information.</p>
				<p class="spacerTriple">It's recommended to use the <code>gradient</code> backing for Toasts to help lift them above the content but you can use any backing style that suits your needs.</p>
			</div>
		`,
	},
	shortcutsPanel: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Shortcuts Panel</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<p>Press <code>Control</code> to bring up the Shortcuts Panel.</p>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>If you support Shortcuts within your app you can bring up a standard Shortcuts Panel to list out all of your supported shortcut keys. No HTML is required, the <code>summonShortcutsPanel()</code> function will generate it for you. It is required the <code>shortcutKeys</code> constant in the <code>metadata.js</code> file to be filled out. Shortcuts must be grouped in to sections.</p>
				<h4 class="h6">Shortcut Keys JSON</h4>
<pre class="spacerTriple">
let shortcutKeys = {
    "groupa": {
        "label": "Group A",
        "shortcutItems": [
            {
                "name": "Item A",
                "key": "A"
            }
        ]
    },
    "groupb": {
        "label": "Group B",
        "shortcutItems": [
            {
                "name": "Item B",
                "key": "B"
            }
        ]
    }
}
</pre>
				
				<h3>Functions</h3>
				<p>The <code>summonShortcutsPanel()</code> function sets up an inset Half Sheet for you and then iterates through the <code>shortcutKeys</code> constant to insert all of the shortcut keys. By default this function is bound to the <code>Control</code> key (pressing it will both summon and dismiss the Sheet). You can bind this function elsewhere to invoke the Shortcuts Panel in any way you want.</p>
<pre class="spacerTriple">
//CREATE PANEL
function summonShortcutsPanel() {
    summonSheet({ theme: 'themeSystem', backing: 'dark', size: 'half', padding: 'include', title: "Shortcut Keys"});
    $(".containerSheetContents").append("
        &lt;div class="containerItemList inset noBackgroundColor"&gt;&lt;/div&gt;
    "");
    $.each( shortcutKeys, function( key, val ) {
        $(".containerSheetContents .containerItemList").append("
            &lt;h2 class="headerList"&gt;{val.label}&lt;/h2&gt;
            &lt;section class="containerSection excludePadding" id="{key}"&gt;&lt;/section&gt;	
        ");
        
        $.each( val.shortcutItems, function( index, value) {
            $("#{key}").append("
                &lt;div class="itemList"&gt;
                    &lt;div class="label"&gt;
                        &lt;span>{value.name}&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;p>{value.key}&lt;/p&gt;
                &lt;/div&gt;
            ");
        });
    });
}
	
//SUMMON AND DISMISS PANEL
$(document).keyup(function(e) {
    switch (e.key) {
        case 'Control':
            if ($('.overlaySheet').length == 0) {
                summonShortcutsPanel();
            } else {
                dismissSheet();
            }
            break;
    }
});
</pre>
				
				<h3>CSS</h3>
				<p>While there are no direct styling classes for the Shortcuts Panel, being a Sheet means it can have it's inherit display properties modified. This however requires modifying the <code>summonShortcutsPanel()</code> function and is not recommended.</p>
			</div>
		`,
	},
	installBanner: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Install Banner</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Show Install Banner</span>
							</div>
							<button id="exampleInstall">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Reset <code>firstRun</code> in local storage</span>
							</div>
							<button class="secondary" id="exampleInstallReset">Reset</button>
						</div>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<p>The Install Banner is a Toast that will automatically show on first run in Mobile Safari while not running in <code>Standalone</code> mode. When tapped it will bring up a Half Sheet explaining how to install your app. The reason the Install Banner only shows in this narrow context is Mobile Safari has the capability to install PWAs but does not offer any UI to prompt the user to install whereas other browsers do.</p>
				<p>You do not need to do anything to invoke the Install Banner, it will automatically show as part of including Rebar. You do however need to provide it some info:</p>
				<ul>
					<li>You need to fill out the <code>appName</code> and <code>appEmail</code> constants in the <code>metadata.js</code> file.</li>
					<li>You need to supply an <code>icon.png</code> file in the root directory of your app.</li>
				</ul>
				<p>It's important to note the Install Banner is designed to only show once as to not frustrate users. If you wish to show the Install Banner or it's How to Install Sheet again you can invoke them with the <code>summonInstallBanner()</code> and <code>summonHowToInstallSheet()</code> functions respectively.</p>
			</div>
		`,
	},
	whatsNewPanel: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "modals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="modals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">What's New Panel</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerItemList inset inline spacerTriple alwaysBackgroundColor">
					<section class="containerSection excludePadding excludeMargin">
						<div class="itemList">
							<div class="label">
								<span>Show Panel</span>
							</div>
							<button id="exampleWhatsNew1">View</button>
						</div>
						<div class="itemList">
							<div class="label">
								<span>Reset <code>version</code> in local storage</span>
							</div>
							<button class="secondary" id="exampleWhatsNewReset">Reset</button>
						</div>
					</section>
				</div>
				
				<h2>Documentation</h2>
				<p>The What's New Panel is a Sheet that will automatically show on launch/reload if the <code>appVersion</code> stored in local storage does not match the version you've stored in the <code>metadata.js</code> file.</p>
				<p>To give the What's New Panel content you need to fill out the <code>appReleaseNotes</code> constant. Each item will be inserted as a list item in the Sheet.</p>
				<p>If you wish to show the What's New Panel outside of the launch/reload context you can do so by invoking the <code>summonWhatsNewSheet()</code> function.</p>
			</div>
		`,
	},
	
	//VISUALS
	icons: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Icons</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<section class="spacerTriple" id="iconGallery">
					<div class="containerIcon">
						<span class="iconPlatter">${iconInterfaceElements.exclamationCircleStroke}</span>
						<span class="iconName">Stroke</span>
					</div>
					
					<div class="containerIcon">
						<span class="iconPlatter">${iconInterfaceElements.exclamationCircleFill}</span>
						<span class="iconName">Fill</span>
					</div>
					
					<div class="containerIcon">
						<span class="iconPlatter">${iconInterfaceElements.exclamationCircleDuo}</span>
						<span class="iconName">Duo</span>
					</div>
					
					<div class="containerIcon">
						<span class="iconPlatter useInitialFill">${iconObjects.compassMulti}</span>
						<span class="iconName">
							Multi (Predefined)
						</span>
					</div>
					
					<div class="containerIcon">
						<span class="iconPlatter useInitialFill">${iconObjects.highlighterMulti}</span>
						<span class="iconName">
							Multi (Accent)
						</span>
					</div>
					
					<div class="containerIcon">
						<span class="iconPlatter useInitialFill">${iconInterfaceElements.switchDoubleTopOnMulti}</span>
						<span class="iconName">
							Multi (Semantic)
						</span>
					</div>
				</section>
				
				<h2>Documentation</h2>
				<p>Rebar comes with a built-in icon set. The icons in this set are geared towards common interface elements. Where appropriate icons will come in 4 styles:</p>
				<ul>
					<li>Stroke: A hollow style</li>
					<li>Fill: A solid style</li>
					<li>Duo: A dual tone style designed to highlight parts of the glyph</li>
					<li>Multi (Predefined): A multicolour icon set where colours are built-in to the SVG</li>
					<li>Multi (Accent): A multicolour icon set where some parts of the icon will use their parent's accent colour (and the main colour for parts that aren't highlighted)</li>
					<li>Multi (Semantic): A multicolour icon set where some parts of the icon will use semantically named colours (main, postive, destructive, warning, and info)</li>
				</ul>
				<p>Each icon is an SVG which makes it flexible in applying colour to (all icons need to be inlined as SVGs due to a lack of being able to use a specifc colour for the Hue CSS Filter). To insert the duo icon above you would use <code>&#36;{iconInterfaceElements.exclamationCircleDuo}</code>.</p>
				<p>Multi icons are special in a few ways. Firstly they are primarily designed to include colours with semantic meanining. Secondly they can have parts of their construction that will respond to your currently selected accent or main colour. These features are determined on a per icon basis.</p>
				<p class="excludeMargin">Icons are sorted in to these categories:</p>
				<ul>
					<li>Interface Elements</li>
					<li>Shapes</li>
					<li>Object</li>
					<li>Indicies</li>
					<li>Nature</li>
					<li>Charts</li>
					<li>Human</li>
					<li>Hardware</li>
					<li>Logos</li>
				</ul>
				<p>When creating a new icon it should follow a specific naming convention: <code>category.ObjectModifiersShapeStyle</code>.</p>
				<p>All icons can be viewed in the Icon Browser.</p>
				<h3>Designing Icons</h3>
				<ul>
					<li>Icons should be designed on a 48 &times; 48 px canvas.</li>
					<li>All strokes and lines should have a width of 4px (this results in a 2px stroke when scaled down to 24px).</li>
					<li>Outer corner radius should be 6px and inner corner radius should be 3px.</li>
					<li>For duo icons, elements that sit in the background should have a 20% opacity and overlapping elements should have a 40% opacity.</li>
					<li>For inner objects they should have a corner radius of 2px.</li>
					<li>The raw SVGs should use #000000 fill for every element. Multi icons should ignore this and bake their colours in to the SVG</li>
					<li>All objects within the SVG need to be a <code>path</code>. This leads to a simpler CSS implementation.</li>
				</ul>
			</div>
		`,
	},
	typography: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Typography</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>This properties typography library are based on the CSS variables provided. Changing the <code>--base-font-size</code> will cause all typography to scale accordingly.</p>
				<h2 class="headerSection">Headings</h2>
				<section class="containerSection">
					<h1>This is an H1</h1>
					<h2>This is an H2</h2>
					<h3>This is an H3</h3>
					<h4>This is an H4</h4>
					<h5>This is an H5</h5>
					<h6>This is an H6</h6>
				</section>
				<h2 class="headerSection">Body</h2>
				<section class="containerSection">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
					<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
					<ul>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<ol>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ol>
					<p><a href="https://toast-studio.com/">This is a link</a></p>
					<p class="subtext">This is subtext with a <a href="https://toast-studio.com/">link</a></p>
					<code>Text wrapped in a code tag</code>
				</section>
			</div>
		`,
	},
	dynamicType: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Dynamic Type</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div id="pickerText"></div>
				<h2>Documentation</h2>
				<h3>Text Size</h3>
				<p>Dynamic Type is the text size engine of Rebar. Components are designed to scale with <code>--base-font-size</code> and Dynamic Type can override this with a new value. By default Rebar has 3 text sizes: <code>small</code> (12px), <code>medium</code> (16px), and <code>large</code> (24px). The default size is <code>medium</code>.</p>
				<p>If required you can include any amount of extra sizes that you need. To do this add more sizes to the <code>dynamicTypeSizes</code> constant in the <code>metadata.js</code> file. The Dynamic Type Picker will need to be modified accordingly. It is worth noting that on first run when no size is set Rebar will default to <code>medium</code>, if this is missing it will fallback to whatever value is set for <code>--base-font-size</code>.
				<p>Rebar comes with a Text Size Picker in the form of Display Options. If you want a Type Size Picker with a different style you can use this code to set it up:</p>
<pre class="spacerTriple">
let selectedValue = {
    value: "value",
    label: "label"
}

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
</pre>
				<h3>Bold Text</h3>
				<p>The <code>font-weight</code> of all components can be overriden with Dynamic Type as well. There are 2 included font weights and these are not changable: Regular and Bold (Extra options for Light and Extra Bold exist in the Rebar CSS but are not presented in the Display Options component but can be used in a custom picker if you need). Each options corresponds to the same values for the <code>font-weight</code> CSS property.</p>
				<p>Rebar comes with a Bold Text Picker in the form of Display Options. If you want a Font Weight Picker with a different style or more options you can use this code to set it up:</p>
<pre class="spacerTriple">
let selectedValue = {
    value: "value",
    label: "label"
}

$("body").attr("data-textweight", selectedValue.value);
document.documentElement.style.setProperty('--base-font-size', dynamicTypeWeight[selectedValue.value]);
modifyPreference({
    group: "rebar.appSettings",
    mode: "update",
    preference: "dynamicTypeWeight",
    value: {
        value: selectedValue.value,
        label: selectedValue.label
    },
})
</pre>
			</div>
		`,
	},
	images: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Images</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>These images are provided as part of Rebar to be displayed within it's components. They all have a colour baked in so will need to be edited to match your theme.</p>
				<img src="images/rebar/tick-light.svg" />
				<img src="images/rebar/tick-dark.svg" />
				<img src="images/rebar/arrow-back-dark.svg" />
				<img src="images/rebar/arrow-back-light.svg" />
				<img src="images/rebar/arrow-forward-dark.svg" />
				<img src="images/rebar/arrow-forward-light.svg" />
			</div>
		`,
	},
	displayOptions: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Display Options</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="excludePadding" id="exampleDisplayOptions"></div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerDouble">There is no HTML setup required, the <code>generateDisplayOptions()</code> function will handle all of it for you. All you need is a container with an ID for the function to target.</p>
				
				<h3>Function</h3>
				<p>The <code>generateDisplayOptions()</code> function will generate all the Theme, Accent, Text, Contrast, and Motion pickers for you. If any other display options are added in the future they will automatically be added to this function (but you will need to update the instances you call the function to support them). To generate a picker you need to call this on load:</p>
<pre>
generateDisplayOptions({
    target: "exampleDisplayOptions",
    themeOptions: true,
    accentOptions: true,
    textSizeOptions: true,
    textWeightOptions: true,
    contrastOptions: true,
    motionOptions: true,
});
</pre>
				<p>The various pickers will only generate if you tell them to by adding a <code>true</code> value to each. You will also need to know:</p>
				<ul class="spacerTriple">
					<li><code>target</code> is the ID of the container you wish to generate in to.</li>
					<li>For Themes you will need to provide an array of theme names (<code>appThemes</code>) in the <code>metadata.js</code> file.</li>
					<li>For Accents you will need to provide an array of accent names (<code>appAccents</code>) in the <code>metadata.js</code> file.</li>
					<li>For Text Sizes you will need to provide an array of text size names with their labels (<code>appTextSizes</code>) in the <code>metadata.js</code> file.</li>
					<li>For Font Weights you will need to provide an array of font weight names with their labels (<code>appTextWeights</code>) in the <code>metadata.js</code> file.</li>
				</ul>
				
				<h3>CSS</h3>
				<p>There are no styling classes for the Display Options component.</p>
				<p>You need to provide images for the theme chips (this gives you the flexibility to have whatever you need in these chips). Images have to be placed in <code>/images/themes/</code>. They have to SVGs and the filename must match the internal theme name (the same value used in the <code>data-theme</code> attribute).</p>
			</div>
		`,
	},
	appearance: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Appearance</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div id="pickerTheme"></div>
				<div class="containerGeneric excludePadding spacerDouble" data-theme="system" id="appearance1">
					<header class="containerToolbar alwaysLeft">
						<div class="pinLeft">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M11.5283203,15.8339844 C11.9902344,15.8339844 12.3876953,15.4472656 12.3876953,14.9960938 L12.3876953,3.96386719 L12.3232422,2.35253906 L13.0429688,3.11523438 L14.6757812,4.85546875 C14.8261719,5.02734375 15.0410156,5.11328125 15.2558594,5.11328125 C15.6962891,5.11328125 16.0400391,4.79101562 16.0400391,4.35058594 C16.0400391,4.125 15.9433594,3.953125 15.7822266,3.79199219 L12.1513672,0.290039062 C11.9365234,0.0751953125 11.7539062,0 11.5283203,0 C11.3134766,0 11.1308594,0.0751953125 10.9052734,0.290039062 L7.27441406,3.79199219 C7.11328125,3.953125 7.02734375,4.125 7.02734375,4.35058594 C7.02734375,4.79101562 7.34960938,5.11328125 7.80078125,5.11328125 C8.00488281,5.11328125 8.24121094,5.02734375 8.39160156,4.85546875 L10.0136719,3.11523438 L10.7441406,2.35253906 L10.6796875,3.96386719 L10.6796875,14.9960938 C10.6796875,15.4472656 11.0664062,15.8339844 11.5283203,15.8339844 Z M17.6943359,24.2451172 C19.9394531,24.2451172 21.0673828,23.1279297 21.0673828,20.9150391 L21.0673828,10.1943359 C21.0673828,7.98144531 19.9394531,6.86425781 17.6943359,6.86425781 L14.6972656,6.86425781 L14.6972656,8.59375 L17.6621094,8.59375 C18.7255859,8.59375 19.3378906,9.17382812 19.3378906,10.2910156 L19.3378906,20.8183594 C19.3378906,21.9355469 18.7255859,22.515625 17.6621094,22.515625 L5.39453125,22.515625 C4.3203125,22.515625 3.72949219,21.9355469 3.72949219,20.8183594 L3.72949219,10.2910156 C3.72949219,9.17382812 4.3203125,8.59375 5.39453125,8.59375 L8.37011719,8.59375 L8.37011719,6.86425781 L5.37304688,6.86425781 C3.12792969,6.86425781 2,7.98144531 2,10.1943359 L2,20.9150391 C2,23.1279297 3.12792969,24.2451172 5.37304688,24.2451172 L17.6943359,24.2451172 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
						<h1 class="headerToolbar">System Theme</h1>
						<div class="pinRight">
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
							<button class="transparent">
								<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
									</g>
								</svg>
							</button>
						</div>
					</header>
					<footer class="containerTabBar">
						<button class="tab picked">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
					<div class="appearanceContent">
						<p>This theme is included with Rebar and responds to the device Light and Dark Modes.</p>
						<form>
						<div class="containerInput">
							<label for="checkbox1">
								<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">First</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox2">
								<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Second</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox3">
								<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Third</span>
							</label>
						</div>
					</form>
						<button>This is a button</button>
					</div>
				</div>
				
				<div class="containerGeneric excludePadding spacerDouble" data-theme="light" id="appearance1">
				<header class="containerToolbar alwaysLeft">
					<div class="pinLeft">
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M11.5283203,15.8339844 C11.9902344,15.8339844 12.3876953,15.4472656 12.3876953,14.9960938 L12.3876953,3.96386719 L12.3232422,2.35253906 L13.0429688,3.11523438 L14.6757812,4.85546875 C14.8261719,5.02734375 15.0410156,5.11328125 15.2558594,5.11328125 C15.6962891,5.11328125 16.0400391,4.79101562 16.0400391,4.35058594 C16.0400391,4.125 15.9433594,3.953125 15.7822266,3.79199219 L12.1513672,0.290039062 C11.9365234,0.0751953125 11.7539062,0 11.5283203,0 C11.3134766,0 11.1308594,0.0751953125 10.9052734,0.290039062 L7.27441406,3.79199219 C7.11328125,3.953125 7.02734375,4.125 7.02734375,4.35058594 C7.02734375,4.79101562 7.34960938,5.11328125 7.80078125,5.11328125 C8.00488281,5.11328125 8.24121094,5.02734375 8.39160156,4.85546875 L10.0136719,3.11523438 L10.7441406,2.35253906 L10.6796875,3.96386719 L10.6796875,14.9960938 C10.6796875,15.4472656 11.0664062,15.8339844 11.5283203,15.8339844 Z M17.6943359,24.2451172 C19.9394531,24.2451172 21.0673828,23.1279297 21.0673828,20.9150391 L21.0673828,10.1943359 C21.0673828,7.98144531 19.9394531,6.86425781 17.6943359,6.86425781 L14.6972656,6.86425781 L14.6972656,8.59375 L17.6621094,8.59375 C18.7255859,8.59375 19.3378906,9.17382812 19.3378906,10.2910156 L19.3378906,20.8183594 C19.3378906,21.9355469 18.7255859,22.515625 17.6621094,22.515625 L5.39453125,22.515625 C4.3203125,22.515625 3.72949219,21.9355469 3.72949219,20.8183594 L3.72949219,10.2910156 C3.72949219,9.17382812 4.3203125,8.59375 5.39453125,8.59375 L8.37011719,8.59375 L8.37011719,6.86425781 L5.37304688,6.86425781 C3.12792969,6.86425781 2,7.98144531 2,10.1943359 L2,20.9150391 C2,23.1279297 3.12792969,24.2451172 5.37304688,24.2451172 L17.6943359,24.2451172 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
					</div>
					<h1 class="headerToolbar">Light Theme</h1>
					<div class="pinRight">
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
					</div>
				</header>
				<footer class="containerTabBar">
					<button class="tab picked">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						First
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Second
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Third
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Fourth
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Fifth
					</button>
				</footer>
				<div class="appearanceContent">
					<p>This theme is included with Rebar and will always appear light.</p>
					<form>
					<div class="containerInput">
						<label for="checkbox1">
							<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">First</span>
						</label>
					</div>
					<div class="containerInput">
						<label for="checkbox2">
							<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Second</span>
						</label>
					</div>
					<div class="containerInput">
						<label for="checkbox3">
							<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Third</span>
						</label>
					</div>
				</form>
					<button>This is a button</button>
				</div>
				</div>
				
				<div class="containerGeneric excludePadding spacerDouble" data-theme="dark" id="appearance1">
				<header class="containerToolbar alwaysLeft">
					<div class="pinLeft">
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M11.5283203,15.8339844 C11.9902344,15.8339844 12.3876953,15.4472656 12.3876953,14.9960938 L12.3876953,3.96386719 L12.3232422,2.35253906 L13.0429688,3.11523438 L14.6757812,4.85546875 C14.8261719,5.02734375 15.0410156,5.11328125 15.2558594,5.11328125 C15.6962891,5.11328125 16.0400391,4.79101562 16.0400391,4.35058594 C16.0400391,4.125 15.9433594,3.953125 15.7822266,3.79199219 L12.1513672,0.290039062 C11.9365234,0.0751953125 11.7539062,0 11.5283203,0 C11.3134766,0 11.1308594,0.0751953125 10.9052734,0.290039062 L7.27441406,3.79199219 C7.11328125,3.953125 7.02734375,4.125 7.02734375,4.35058594 C7.02734375,4.79101562 7.34960938,5.11328125 7.80078125,5.11328125 C8.00488281,5.11328125 8.24121094,5.02734375 8.39160156,4.85546875 L10.0136719,3.11523438 L10.7441406,2.35253906 L10.6796875,3.96386719 L10.6796875,14.9960938 C10.6796875,15.4472656 11.0664062,15.8339844 11.5283203,15.8339844 Z M17.6943359,24.2451172 C19.9394531,24.2451172 21.0673828,23.1279297 21.0673828,20.9150391 L21.0673828,10.1943359 C21.0673828,7.98144531 19.9394531,6.86425781 17.6943359,6.86425781 L14.6972656,6.86425781 L14.6972656,8.59375 L17.6621094,8.59375 C18.7255859,8.59375 19.3378906,9.17382812 19.3378906,10.2910156 L19.3378906,20.8183594 C19.3378906,21.9355469 18.7255859,22.515625 17.6621094,22.515625 L5.39453125,22.515625 C4.3203125,22.515625 3.72949219,21.9355469 3.72949219,20.8183594 L3.72949219,10.2910156 C3.72949219,9.17382812 4.3203125,8.59375 5.39453125,8.59375 L8.37011719,8.59375 L8.37011719,6.86425781 L5.37304688,6.86425781 C3.12792969,6.86425781 2,7.98144531 2,10.1943359 L2,20.9150391 C2,23.1279297 3.12792969,24.2451172 5.37304688,24.2451172 L17.6943359,24.2451172 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
					</div>
					<h1 class="headerToolbar">Dark Theme</h1>
					<div class="pinRight">
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
						<button class="transparent">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
						</button>
					</div>
				</header>
				<footer class="containerTabBar">
					<button class="tab picked">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						First
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Second
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Third
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Fourth
					</button>
					<button class="tab">
						<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
							</g>
						</svg>
						Fifth
					</button>
				</footer>
				<div class="appearanceContent">
					<p>This theme is included with Rebar and will always appear dark.</p>
					<form>
					<div class="containerInput">
						<label for="checkbox1">
							<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">First</span>
						</label>
					</div>
					<div class="containerInput">
						<label for="checkbox2">
							<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Second</span>
						</label>
					</div>
					<div class="containerInput">
						<label for="checkbox3">
							<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Third</span>
						</label>
					</div>
				</form>
					<button>This is a button</button>
				</div>
				</div>
				
	<div class="containerGeneric excludePadding spacerDouble" data-theme="custom" id="appearance1">
	<header class="containerToolbar alwaysLeft">
		<div class="pinLeft">
			<button class="transparent">
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<path d="M11.5283203,15.8339844 C11.9902344,15.8339844 12.3876953,15.4472656 12.3876953,14.9960938 L12.3876953,3.96386719 L12.3232422,2.35253906 L13.0429688,3.11523438 L14.6757812,4.85546875 C14.8261719,5.02734375 15.0410156,5.11328125 15.2558594,5.11328125 C15.6962891,5.11328125 16.0400391,4.79101562 16.0400391,4.35058594 C16.0400391,4.125 15.9433594,3.953125 15.7822266,3.79199219 L12.1513672,0.290039062 C11.9365234,0.0751953125 11.7539062,0 11.5283203,0 C11.3134766,0 11.1308594,0.0751953125 10.9052734,0.290039062 L7.27441406,3.79199219 C7.11328125,3.953125 7.02734375,4.125 7.02734375,4.35058594 C7.02734375,4.79101562 7.34960938,5.11328125 7.80078125,5.11328125 C8.00488281,5.11328125 8.24121094,5.02734375 8.39160156,4.85546875 L10.0136719,3.11523438 L10.7441406,2.35253906 L10.6796875,3.96386719 L10.6796875,14.9960938 C10.6796875,15.4472656 11.0664062,15.8339844 11.5283203,15.8339844 Z M17.6943359,24.2451172 C19.9394531,24.2451172 21.0673828,23.1279297 21.0673828,20.9150391 L21.0673828,10.1943359 C21.0673828,7.98144531 19.9394531,6.86425781 17.6943359,6.86425781 L14.6972656,6.86425781 L14.6972656,8.59375 L17.6621094,8.59375 C18.7255859,8.59375 19.3378906,9.17382812 19.3378906,10.2910156 L19.3378906,20.8183594 C19.3378906,21.9355469 18.7255859,22.515625 17.6621094,22.515625 L5.39453125,22.515625 C4.3203125,22.515625 3.72949219,21.9355469 3.72949219,20.8183594 L3.72949219,10.2910156 C3.72949219,9.17382812 4.3203125,8.59375 5.39453125,8.59375 L8.37011719,8.59375 L8.37011719,6.86425781 L5.37304688,6.86425781 C3.12792969,6.86425781 2,7.98144531 2,10.1943359 L2,20.9150391 C2,23.1279297 3.12792969,24.2451172 5.37304688,24.2451172 L17.6943359,24.2451172 Z" fill="#000000" fill-rule="nonzero"></path>
					</g>
				</svg>
			</button>
		</div>
		<h1 class="headerToolbar">Custom Theme</h1>
		<div class="pinRight">
			<button class="transparent">
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<path d="M19.8095703,19.734375 C21.7753906,17.7578125 23,15.0185547 23,12 C23,5.97363281 18.0693359,1 12,1 C5.93066406,1 1,5.97363281 1,12 C1,15.0185547 2.22460938,17.7470703 4.19042969,19.734375 C4.33007812,19.8740234 4.48046875,19.8740234 4.59863281,19.7236328 L5.08203125,19.1757813 C5.2109375,19.0361328 5.20019531,18.9072266 5.07128906,18.7675781 C3.37402344,17.0166016 2.31054688,14.6210938 2.31054688,12 C2.31054688,6.71484375 6.69335938,2.32128906 12,2.32128906 C17.3066406,2.32128906 21.6894531,6.71484375 21.6894531,12 C21.6894531,14.6210938 20.6259766,17.0166016 18.9287109,18.7675781 C18.7998047,18.9072266 18.7890625,19.0361328 18.9179688,19.1757813 L19.4013672,19.7236328 C19.5195312,19.8740234 19.6699219,19.8740234 19.8095703,19.734375 Z M17.7363281,17.3818359 C19.0576172,15.9638672 19.8740234,14.0839844 19.8740234,12 C19.8740234,7.68164063 16.3398438,4.12597656 12,4.12597656 C7.66015625,4.12597656 4.12597656,7.68164063 4.12597656,12 C4.12597656,14.0839844 4.93164062,15.9638672 6.26367188,17.3818359 C6.40332031,17.5322266 6.55371094,17.5214844 6.68261719,17.3818359 L7.16601562,16.8447266 C7.30566406,16.7050781 7.28417969,16.5761719 7.15527344,16.4257813 C6.09179688,15.2441406 5.44726562,13.6972656 5.44726562,12 C5.44726562,8.41210938 8.40136719,5.44726562 12,5.44726562 C15.5986328,5.44726562 18.5527344,8.41210938 18.5527344,12 C18.5527344,13.6972656 17.9082031,15.2441406 16.8447266,16.4150391 C16.7158203,16.5654297 16.6943359,16.6943359 16.8339844,16.8339844 L17.328125,17.3818359 C17.4462891,17.5214844 17.6074219,17.5322266 17.7363281,17.3818359 Z M15.6630859,15.0078125 C16.3505859,14.1806641 16.7480469,13.1386719 16.7480469,12 C16.7480469,9.40039062 14.6103516,7.25195312 12,7.25195312 C9.38964844,7.25195312 7.25195312,9.40039062 7.25195312,12 C7.25195312,13.1386719 7.64941406,14.1806641 8.33691406,15.0078125 C8.45507812,15.1582031 8.60546875,15.1582031 8.74511719,15.0078125 L9.25,14.4814453 C9.37890625,14.3525391 9.36816406,14.2128906 9.27148438,14.0625 C8.83105469,13.4931641 8.57324219,12.7626953 8.57324219,12 C8.57324219,10.1308594 10.1308594,8.57324219 12,8.57324219 C13.8691406,8.57324219 15.4267578,10.1308594 15.4267578,12 C15.4267578,12.7626953 15.1689453,13.4931641 14.7285156,14.0625 C14.6210938,14.2128906 14.6103516,14.3525391 14.75,14.4921875 L15.2548828,15.0078125 C15.3837891,15.1582031 15.5449219,15.1582031 15.6630859,15.0078125 Z M18.5527344,22.6347656 C19.0576172,22.6347656 19.2509766,22.1083984 18.9394531,21.7539062 L12.4511719,14.4169922 C12.2041016,14.1376953 11.7744141,14.1376953 11.5273438,14.4169922 L5.04980469,21.7539062 C4.72753906,22.1191406 4.92089844,22.6347656 5.42578125,22.6347656 L18.5527344,22.6347656 Z" fill="#000000" fill-rule="nonzero"></path>
					</g>
				</svg>
			</button>
			<button class="transparent">
				<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<path d="M17.3291016,23.9228516 C18.8652344,23.9228516 19.8964844,22.9238281 19.9716797,21.3876953 L20.7128906,5.76855469 L22.0019531,5.76855469 C22.4423828,5.76855469 22.796875,5.39257812 22.796875,4.95214844 C22.796875,4.51171875 22.4423828,4.14648438 22.0019531,4.14648438 L17.0927734,4.14648438 L17.0927734,2.50292969 C17.0927734,0.9453125 16.0830078,0 14.4287109,0 L10.3466797,0 C8.69238281,0 7.68261719,0.9453125 7.68261719,2.50292969 L7.68261719,4.14648438 L2.80566406,4.14648438 C2.37597656,4.14648438 2,4.51171875 2,4.95214844 C2,5.40332031 2.37597656,5.76855469 2.80566406,5.76855469 L4.09472656,5.76855469 L4.8359375,21.3984375 C4.91113281,22.9345703 5.92089844,23.9228516 7.47851562,23.9228516 L17.3291016,23.9228516 Z M15.3847656,4.14648438 L9.390625,4.14648438 L9.390625,2.61035156 C9.390625,1.99804688 9.8203125,1.60058594 10.4648438,1.60058594 L14.3105469,1.60058594 C14.9550781,1.60058594 15.3847656,1.99804688 15.3847656,2.61035156 L15.3847656,4.14648438 Z M17.1572266,22.3007812 L7.62890625,22.3007812 C7.01660156,22.3007812 6.5546875,21.8388672 6.52246094,21.2050781 L5.77050781,5.76855469 L18.9833984,5.76855469 L18.2744141,21.2050781 C18.2529297,21.8496094 17.7910156,22.3007812 17.1572266,22.3007812 Z M9.21875,20.4638672 C9.62695312,20.4638672 9.89550781,20.2060547 9.88476562,19.8300781 L9.55175781,8.3359375 C9.54101562,7.95996094 9.27246094,7.71289062 8.88574219,7.71289062 C8.47753906,7.71289062 8.20898438,7.97070312 8.21972656,8.34667969 L8.54199219,19.8300781 C8.55273438,20.2167969 8.82128906,20.4638672 9.21875,20.4638672 Z M12.3984375,20.4638672 C12.8066406,20.4638672 13.0966797,20.2060547 13.0966797,19.8300781 L13.0966797,8.34667969 C13.0966797,7.97070312 12.8066406,7.71289062 12.3984375,7.71289062 C11.9902344,7.71289062 11.7109375,7.97070312 11.7109375,8.34667969 L11.7109375,19.8300781 C11.7109375,20.2060547 11.9902344,20.4638672 12.3984375,20.4638672 Z M15.5888672,20.4638672 C15.9755859,20.4638672 16.2441406,20.2167969 16.2548828,19.8300781 L16.5771484,8.34667969 C16.5878906,7.97070312 16.3193359,7.71289062 15.9111328,7.71289062 C15.5244141,7.71289062 15.2558594,7.95996094 15.2451172,8.34667969 L14.9228516,19.8300781 C14.9121094,20.2060547 15.1806641,20.4638672 15.5888672,20.4638672 Z" fill="#000000" fill-rule="nonzero"></path>
					</g>
				</svg>
			</button>
		</div>
	</header>
	<footer class="containerTabBar">
		<button class="tab picked">
			<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
				</g>
			</svg>
			First
		</button>
		<button class="tab">
			<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
				</g>
			</svg>
			Second
		</button>
		<button class="tab">
			<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
				</g>
			</svg>
			Third
		</button>
		<button class="tab">
			<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
				</g>
			</svg>
			Fourth
		</button>
		<button class="tab">
			<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
				</g>
			</svg>
			Fifth
		</button>
	</footer>
	<div class="appearanceContent">
		<p>This theme is not included with Rebar. It's an example of what you can do with the Appearance theming engine. This theme will respond to the device Light and Dark modes.</p>
		<form>
		<div class="containerInput">
			<label for="checkbox1">
				<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
				<div class="fakeCheckbox"></div>
				<span class="inputLabel">First</span>
			</label>
		</div>
		<div class="containerInput">
			<label for="checkbox2">
				<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
				<div class="fakeCheckbox"></div>
				<span class="inputLabel">Second</span>
			</label>
		</div>
		<div class="containerInput">
			<label for="checkbox3">
				<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
				<div class="fakeCheckbox"></div>
				<span class="inputLabel">Third</span>
			</label>
		</div>
	</form>
		<button>This is a button</button>
	</div>
	</div>
				
				<h2>Documentation</h2>
				<p>Appearance is the theming engine of Rebar. By default Rebar has three themes: <code>system</code>, <code>light</code>, and <code>dark</code>. System will respond to the device Light and Dark modes but you can override this to stay locked to the Light or Dark theme.</p>
				<p>This system can be extended to offer other themes. A theme can be applied at the <code>body</code> level or targeted to any child container.</p>
				<p>Rebar comes with an Appearance Picker in the form of Display Options. If you want an Appearance Picker with a different style you can use this code to set it up:</p>
<pre>
let selectedValue = "value";

$("body").attr("data-theme", selectedValue);
modifyPreference({
    group: "rebar.appSettings",
    mode: "update",
    preference: "theme",
    value: selectedValue,
})
</pre>
			</div>
		`,
	},
	accent: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Accent</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div id="exampleAccents"></div>
				<h3 class="h6">Default Accent</h3>
				<div class="containerGeneric excludePadding spacerDouble" id="accent1">
					<footer class="containerTabBar">
						<button class="tab picked">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
					<div id="accentContent1">
						<h1>Header</h1>
						<p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante.</p>
						<form>
						<div class="containerInput">
							<label for="checkbox1">
								<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">First</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox2">
								<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Second</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox3">
								<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Third</span>
							</label>
						</div>
					</form>
						<button>This is a button</button>
					</div>
				</div>
	
				<h3 class="h6">Custom Accent</h3>
				<div class="containerGeneric excludePadding spacerTriple" id="accent2">
					<footer class="containerTabBar">
						<button class="tab picked">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M5.35791016,23.0795898 L5.35791016,13.4360352 C5.35791016,9.99365234 7.38427734,7.99169922 10.8632812,7.99169922 L25.206543,7.99169922 L25.206543,7.78417969 C25.206543,5.26953125 23.9125977,4 21.3735352,4 L4.83300781,4 C2.26953125,4 1,5.26953125 1,7.78417969 L1,19.2954102 C1,21.8222656 2.26953125,23.0795898 4.83300781,23.0795898 L5.35791016,23.0795898 Z M27.5380859,28.7314453 C30.0771484,28.7314453 31.3710938,27.4619141 31.3710938,24.9472656 L31.3710938,13.4360352 C31.3710938,10.9213867 30.0771484,9.65185547 27.5380859,9.65185547 L10.8632812,9.65185547 C8.29980469,9.65185547 7.03027344,10.9213867 7.03027344,13.4360352 L7.03027344,24.9472656 C7.03027344,27.4741211 8.29980469,28.7314453 10.8632812,28.7314453 L27.5380859,28.7314453 Z M15.7338867,19.0146484 C14.3056641,19.0146484 13.1459961,17.8305664 13.1459961,16.4023438 C13.1459961,14.9985352 14.3056641,13.8144531 15.7338867,13.8144531 C17.1499023,13.8144531 18.3095703,14.9985352 18.3095703,16.4023438 C18.3095703,17.8305664 17.1499023,19.0146484 15.7338867,19.0146484 Z M27.5014648,26.7661133 L10.8876953,26.7661133 C9.66699219,26.7661133 8.99560547,26.1191406 8.99560547,24.8496094 L8.99560547,23.7387695 L11.7543945,21.3095703 C12.2304688,20.9067383 12.6821289,20.7114258 13.1582031,20.7114258 C13.6831055,20.7114258 14.1835938,20.9067383 14.6474609,21.3339844 L16.612793,23.1040039 L21.5444336,18.7338867 C22.0449219,18.2822266 22.5820312,18.0869141 23.1923828,18.0869141 C23.7783203,18.0869141 24.3642578,18.3066406 24.840332,18.7460938 L29.4057617,23.0551758 L29.4057617,24.8496094 C29.4057617,26.1191406 28.7099609,26.7661133 27.5014648,26.7661133 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							First
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M25.6049805,30.6645508 C28.9887695,30.6645508 30.6645508,28.9887695 30.6645508,25.6694336 L30.6645508,5.99511719 C30.6645508,2.67578125 28.9887695,1 25.6049805,1 L6.05957031,1 C2.69189453,1 1,2.65966797 1,5.99511719 L1,25.6694336 C1,29.0048828 2.69189453,30.6645508 6.05957031,30.6645508 L25.6049805,30.6645508 Z M10.2006836,13.0205078 C10.1040039,13.0205078 9.94287109,12.9399414 9.79785156,12.8432617 C8.20263672,11.715332 5.94677734,9.87841797 5.94677734,7.78369141 C5.94677734,6.36572266 6.9296875,5.33447266 8.25097656,5.33447266 C9.12109375,5.33447266 9.78173828,5.83398438 10.1845703,6.57519531 C10.5874023,5.83398438 11.2802734,5.33447266 12.0859375,5.33447266 C13.4555664,5.33447266 14.4384766,6.36572266 14.4384766,7.78369141 C14.4384766,9.87841797 12.230957,11.828125 10.6035156,12.8432617 C10.4584961,12.9238281 10.3134766,13.0205078 10.2006836,13.0205078 Z M23.1557617,20.2231445 L6.96191406,20.2231445 C6.36572266,20.2231445 5.94677734,19.7880859 5.94677734,19.2241211 C5.94677734,18.6762695 6.36572266,18.2412109 6.96191406,18.2412109 L23.1557617,18.2412109 C23.7197266,18.2412109 24.1386719,18.6762695 24.1386719,19.2241211 C24.1386719,19.7880859 23.7197266,20.2231445 23.1557617,20.2231445 Z M18.9018555,25.7338867 L6.96191406,25.7338867 C6.36572266,25.7338867 5.94677734,25.2988281 5.94677734,24.7509766 C5.94677734,24.1870117 6.36572266,23.7519531 6.96191406,23.7519531 L18.9018555,23.7519531 C19.4819336,23.7519531 19.9008789,24.1870117 19.9008789,24.7509766 C19.9008789,25.2988281 19.4819336,25.7338867 18.9018555,25.7338867 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Second
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M17.1308594,29.890625 C24.7597656,29.890625 31.0761719,23.5605469 31.0761719,15.9453125 C31.0761719,8.31640625 24.7324219,2 17.1171875,2 C10.1445312,2 4.265625,7.29101562 3.3359375,14.03125 L2.06445312,12.2949219 C1.84570312,11.9804688 1.53125,11.7753906 1.12109375,11.7753906 C0.4921875,11.7753906 0,12.2265625 0,12.8554688 C0,13.1289062 0.08203125,13.3886719 0.24609375,13.59375 L3.13085938,17.1347656 C3.5546875,17.6816406 3.91015625,17.8730469 4.45703125,17.8730469 C4.8125,17.8730469 5.0859375,17.7773438 5.42773438,17.53125 L8.99609375,14.8925781 C9.296875,14.6738281 9.4609375,14.3457031 9.4609375,13.9902344 C9.4609375,13.3476562 8.95507812,12.8828125 8.38085938,12.8828125 C8.12109375,12.8828125 7.88867188,12.9511719 7.68359375,13.1152344 L5.578125,14.7695312 C6.15234375,8.87695312 11.0605469,4.32421875 17.1171875,4.32421875 C23.5703125,4.32421875 28.7382812,9.4921875 28.7519531,15.9453125 C28.765625,22.3984375 23.5839844,27.5664062 17.1308594,27.5664062 C12.8652344,27.5664062 9.83007812,25.3105469 8.33984375,23.5742188 C8.05273438,23.21875 7.68359375,23.0820312 7.35546875,23.0820312 C6.78125,23.0820312 6.26171875,23.5195312 6.26171875,24.1484375 C6.26171875,24.4628906 6.38476562,24.8046875 6.68554688,25.1601562 C8.18945312,26.8828125 11.8945312,29.890625 17.1308594,29.890625 Z M14.9707031,20.9765625 L22.2988281,16.65625 C22.8320312,16.328125 22.8183594,15.5761719 22.2988281,15.2753906 L14.9707031,10.9277344 C14.4238281,10.5996094 13.6855469,10.859375 13.6855469,11.4746094 L13.6855469,20.4296875 C13.6855469,21.0585938 14.3828125,21.3320312 14.9707031,20.9765625 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Third
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M24.6816406,2.76367188 C24.5996094,1.6015625 23.9433594,1 22.671875,1 L9.42382812,1 C8.16601562,1 7.50976562,1.6015625 7.42773438,2.76367188 L24.6816406,2.76367188 Z M27.4980469,6.55078125 C27.2929688,5.30664062 26.7050781,4.62304688 25.3378906,4.62304688 L6.77148438,4.62304688 C5.40429688,4.62304688 4.81640625,5.30664062 4.61132812,6.55078125 L27.4980469,6.55078125 Z M25.9394531,30.7226562 C28.6875,30.7226562 30.0957031,29.328125 30.0957031,26.6074219 L30.0957031,12.8535156 C30.0957031,10.1328125 28.6875,8.75195312 25.9394531,8.75195312 L6.15625,8.75195312 C3.38085938,8.75195312 2,10.1328125 2,12.8535156 L2,26.6074219 C2,29.328125 3.38085938,30.7226562 6.15625,30.7226562 L25.9394531,30.7226562 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fourth
						</button>
						<button class="tab">
							<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<path d="M28.8364258,30.8647461 C29.8657227,30.8647461 30.5771484,30.0927734 30.5771484,29.0786133 C30.5771484,28.5942383 30.3955078,28.1552734 30.0776367,27.8374023 L22.6757812,20.3901367 C24.2348633,18.3618164 25.1582031,15.8339844 25.1582031,13.0791016 C25.1582031,6.41894531 19.7392578,1 13.0791016,1 C6.41894531,1 1,6.41894531 1,13.0791016 C1,19.7392578 6.41894531,25.1582031 13.0791016,25.1582031 C15.7128906,25.1582031 18.1196289,24.3105469 20.1025391,22.8876953 L27.5498047,30.3500977 C27.8979492,30.6982422 28.3520508,30.8647461 28.8364258,30.8647461 Z M13.0791016,22.5698242 C7.84179688,22.5698242 3.58837891,18.3164062 3.58837891,13.0791016 C3.58837891,7.84179688 7.84179688,3.58837891 13.0791016,3.58837891 C18.3164062,3.58837891 22.5698242,7.84179688 22.5698242,13.0791016 C22.5698242,18.3164062 18.3164062,22.5698242 13.0791016,22.5698242 Z" fill="#000000" fill-rule="nonzero"></path>
								</g>
							</svg>
							Fifth
						</button>
					</footer>
					<div id="accentContent2">
						<h1>Header</h1>
						<p>Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante.</p>
						<form>
						<div class="containerInput">
							<label for="checkbox1">
								<input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">First</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox2">
								<input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" checked>
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Second</span>
							</label>
						</div>
						<div class="containerInput">
							<label for="checkbox3">
								<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3">
								<div class="fakeCheckbox"></div>
								<span class="inputLabel">Third</span>
							</label>
						</div>
					</form>
						<button>This is a button</button>
					</div>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p style="spacerTriple">Accent acts as the primary tint colour of Rebar. Rebar comes with 15 accents built-in, your own custom accent is called <code>default</code> and the 14 macOS accent colours (this is to help your app feel at home as much as possible on that platform). It is not required to expose all accent colours in your app.</p>
				
				<h3>Functions</h3>
				<p>Rebar comes with an Accent Picker in the form of Display Options. If you want your an Accent Picker with a different style you can use this code to set it up:</p>
<pre style="spacerTriple">
let selectedValue = "value";

$("body").attr("data-accent", selectedValue);
modifyPreference({
	group: "rebar.appSettings",
	mode: "update",
	preference: "accent",
	value: selectedValue,
})
</pre>
				
				<h3>CSS</h3>
				<p>Accent is applied via <code>data-accent</code> on the <code>body</code> tag. If you need to apply an accent locally you can use the same data attribute on a container at any level. If you want to set up a custom accent you should take in to account the device Light and Dark modes, Light and Dark mode overrides, and Increased Contrast. Here is an example:</p>
<pre>
[data-accent="custom"] { --accent: 224, 56, 62; }

[data-contrast="more"][data-accent="custom"] { --accent: 197, 36, 43; }
[data-contrast="more"] [data-accent="custom"] { --accent: 197, 36, 43; }

@media (prefers-color-scheme: dark) {
    [data-accent="red"] { --accent: 225, 82, 87; }
    
    [data-contrast="more"][data-accent="custom"] { --accent: 225, 129, 133; }
    [data-contrast="more"] [data-accent="custom"] { --accent: 225, 129, 133; }
    
    /* LIGHT THEME OVERRIDE */
    [data-theme="light"][data-accent="custom"] { --accent: 224, 56, 62; }
    [data-theme="light"] [data-accent="custom"] { --accent: 224, 56, 62; }
    
    [data-theme="light"][data-contrast="more"][data-accent="custom"] { --accent: 197, 36, 43; }
    [data-theme="light"][data-contrast="more"] [data-accent="custom"] { --accent: 197, 36, 43; }
}

/* DARK THEME OVERRIDE */
[data-theme="dark"][data-accent="custom"] { --accent: 225, 82, 87; }
[data-theme="dark"] [data-accent="custom"] { --accent: 225, 82, 87; }

[data-theme="dark"][data-contrast="more"][data-accent="custom"] { --accent: 225, 129, 133; }
[data-theme="dark"][data-contrast="more"] [data-accent="custom"] { --accent: 225, 129, 133; }
</pre>
			<p>Unforunately this amount of repetition is required to make sure the interaction between the Device Appearance, App Appearance, and Increased Contrast result in the correct version of the accent displayed.</p>
			<p>It is required that you have a default accent that is specified in your own <code>styles.css</code> stylesheet.</p>
			</div>
		`,
	},
	reduceMotion: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Reduce Motion</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div id="pickerMotion"></div>
				
				<h2>Documentation</h2>
				<p>Reduced Motion is a setting which when turned on will set all CSS transitions in your app to have a timing of 0 seconds. The device setting is respected and if set to on the user will be locked out of setting your app's version of the setting independantly.</p>
				<p>Rebar comes with a Reduced Motion Picker as part of Display Options. You can set up your own custom picker you need but it is not recommended.</p>
			</div>
		`,
	},
	blankStates: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "visuals",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Blank States</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="containerGeneric excludePadding alwaysForegroundColor" id="exampleBlankState"></div>
				
				<h2>Documentation</h2>
				<p>Blank States allow you to provide an explanation to users when do data is found. There is no HTML for you to set up as it's all handled with the <code>generateBlankState()</code> function. There are properties you need to provide the function for it to generate a Blank State:</p>
				<ul>
					<li><code>target</code> is the ID of the container you would like the Blank State to be displayed in. This is mandatory.</li>
					<li><code>icon</code> is the SVG of the icon you would like to be displayed. You can also use Rebar Icons here by calling the dot notation name of the icon.</li>
					<li><code>title</code> is the heading of the Blank State. This is mandatory.</li>
					<li><code>message</code> is the copy of the Blank State.</li>
					<li><code>actionFirst</code> is the label of the primary action Button. This button will always have the primary style.</li>
					<li><code>actionIDFirst</code> is the ID you would like for the primary action Button.</li>
					<li><code>actionSecond</code> is the label of the secondary action Button. This button will always have the secondary style. If you do not include a primary action Button than this button will not appear.</li>
					<li><code>actionIDSecond</code> is the ID you would like for the secondary action Button.</li>
				</ul>
				<h3 class="h6">Function</h3>
<pre>
generateBlankState({
    target: "",
    icon: "", 
    title: '', 
    message: '',
    actionFirst: '', 
    actionIDFirst: '',
    actionSecond: '', 
    actionIDSecond: '', 
});
</pre>
			</div>
		`,
	},
	cssVariables: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">CSS Variables</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Rebar uses CSS Variables to set predefined values. All of them are fully overridable both at the <code>:root</code> level and at any selector level to allow for theming. These are the included set of variables and their default values:</p>
				<h2 class="excludePadding">Colours</h2>
				<p class="subtext">Colours are stored as raw RGB values so that they can be wrapped in rgb() or rgba() for independantly setting alpha values.
				<ul>
					<li><code>--main</code>: The primary colour predominately found in body copy.</li>
					<li><code>--accent</code>: The app tint colour.</li>
					<li><code>--destructive</code>: Destructive or negative actions.</li>
					<li><code>--positive</code>: Positive or confirmation actions.</li>
					<li><code>--background</code>: The base background colour.</li>
					<li><code>--foreground:</code> A colour that contrasts against <code>--background</code>.</li>
					<li><code>--divider</code>: For dividers and borders.</li>
					<li><code>--systempanel</code>: For elements that overlay the app.</li>
					<li><code>--systemBlue</code>: A colour that represents objects that come from the system itself.</li>
				</ul>
				
				<h2>Fonts</h2>
				<ul>	
					<li><code>--font-regular</code>: The primary font stack.</li>
					<li><code>--font-rounded</code>: A rounded font stack.</li>
					<li><code>--font-monospace</code>: A monospaced font stack.</li>
					<li><code>--base-font-size</code>: This size is used for fonts as well as anything that should scale with the size of text, to enable Dynamic Type like text scaling.</li>
				</ul>
				
				<h2>Images</h2>
				<ul>
					<li><code>--image-tick</code>: Used in Context Menus and Checkboxes, it responds to appearance</li>
					<li><code>--image-arrow-back</code>: Responds to appearance.</li>
					<li><code>--image-arrow-forward</code>: Used in Item List rows, it responds to appearance.</li>
				</ul>
				
				<h2>Effects</h2>
				<ul>
					<li><code>--shadow-wide</code>: Large box shadows.</li>
					<li><code>--shadow-tight</code>: Small box shadows.</li>
					<li><code>--base-time-length</code>: A standard time value for animations.</li>
					<li><code>--material-translucent-small</code>: A subtle background blur.</li>
					<li><code>--material-translucent-large</code>: A larger background blur.</li>
				</ul>
				
				<h2>Layout</h2>
				<ul>
					<li><code>--base-gap-size</code>: Spacing between elements.</li>
					<li><code>--base-radius-size</code>: The size of border radii.</li>
					<li><code>--tabbar-height</code>: The height of Tab Bars.</li>
					<li><code>--toolbar-height</code>: The height of Toolbars.</li>
					<li><code>--accessorybar-height</code>: The height of Accessory Bars.</li>
					<li><code>--aside-width</code>: The width of Sidebars and Item Lists.</li>
				</ul> 
			</div>
		`,
	},
	utilityClasses: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Utility Classes</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Utility classes are styling classes that have a more global context (Rebar tries to scope most component classes with some specificity to avoid conflicts).</p>
				<ul>
					<li><code>excludeMargin</code>: Removes margin</li>
					<li><code>excludePadding</code>: Removes padding</li>
					<li><code>spacerSingle</code>: Adds margin that's set to <code>--base-gap-size</code></li>
					<li><code>spacerDouble</code>: Adds margin that's set to double the <code>--base-gap-size</code></li>
					<li><code>spacerTriple</code>: Adds margin that's set to triple the <code>--base-gap-size</code></li>
					<li><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and <code>h6</code>: Sets the font size to match the respective heading size</li>
					<li><code>subtext</code>: Sets text to a small size and half opacity.</li>
					<li><code>textAlignLeft</code>, <code>textAlignCenter</code>, and <code>textAlignRight</code>: Sets the alignment of text.</li>
					<li><code>textBold</code>: Sets the <code>font-weight</code> to <code>bold</code>
					<li><code>alwaysAccent</code>: Sets the text and fill colours to the <code>--accent</code> colour.</li>
					<li><code>alwaysMain</code>: Overrides any text and fill colours to the <code>--main</code> colour.</li>
					<li><code>alwaysBackgroundColor</code>: Sets a container to always use <code>--background</code> for it's <code>background-color</code>.</li>
					<li><code>alwaysForegroundColor</code>: Sets a container to always use <code>--foreground</code> for it's <code>background-color</code>.</li>
					<li><code>noBackgroundColor</code>: Removes the <code>background-color</code> of a container.</li>
					<li><code>paddingContent</code>: Sets up the padding for a main content container.</li>
					<li><code>shapeCircle</code>: Sets a <code>border-radius</code> that will make a square element in to a circle.</li>
					<li><code>keepInitialWidth</code>: Resets the width of an element back to <code>auto</code>.</li>
					<li><code>disablePointer</code>: Removes pointer events from an element.</li>
					<li><code>useInitialFill</code>: Stops fill and color being applied to an element.</li>
				</ul>
			</div>
		`,
	},
	breakpoints: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Breakpoints</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>Rebar follows these standard breakpoints (you can use any that you require):</p>
				<ul>
					<li><code>414px</code>: Wide Small Screens</li>
					<li><code>640px</code>: Medium Screens</li>
					<li><code>1100px</code>: Large Screens</li>
					<li><code>1800px</code>: Wide Large Screens</li>
				</ul>
			</div>
		`,
	},
	increasedContrast: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Increased Contrast</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="spacerTriple" id="pickerContrast"></div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p>There is no HTML setup required to support Increased Contrast.</p>
				
				<h3>Functions</h3>
				<p>Rebar comes with an Increased Contrast Picker in the form of Display Options. You can set up your own custom picker you need but it is not recommended.</p>
				
				<h3>CSS</h3>
				<p>The CSS for Increased Contrast is mostly covered in the Accents section. Basically you need to provide a separate colour variable definition with the <code>[data-contrast="more"]</code> selector prefixed to it:</p>
<pre>
[data-accent="custom"] { --accent: 224, 56, 62; }

[data-contrast="more"][data-accent="custom"] { --accent: 197, 36, 43; }
[data-contrast="more"] [data-accent="custom"] { --accent: 197, 36, 43; }

@media (prefers-color-scheme: dark) {
    [data-accent="red"] { --accent: 225, 82, 87; }
    
    [data-contrast="more"][data-accent="custom"] { --accent: 225, 129, 133; }
    [data-contrast="more"] [data-accent="custom"] { --accent: 225, 129, 133; }
    
    /* LIGHT THEME OVERRIDE */
    [data-theme="light"][data-accent="custom"] { --accent: 224, 56, 62; }
    [data-theme="light"] [data-accent="custom"] { --accent: 224, 56, 62; }
    
    [data-theme="light"][data-contrast="more"][data-accent="custom"] { --accent: 197, 36, 43; }
    [data-theme="light"][data-contrast="more"] [data-accent="custom"] { --accent: 197, 36, 43; }
}

/* DARK THEME OVERRIDE */
[data-theme="dark"][data-accent="custom"] { --accent: 225, 82, 87; }
[data-theme="dark"] [data-accent="custom"] { --accent: 225, 82, 87; }

[data-theme="dark"][data-contrast="more"][data-accent="custom"] { --accent: 225, 129, 133; }
[data-theme="dark"][data-contrast="more"] [data-accent="custom"] { --accent: 225, 129, 133; }
</pre>
			</div>
		`,
	},
	spinners: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Spinners</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Example</h2>
				<div class="spacerTriple" id="exampleSpinner"></div>
				
				<h2>Documentation</h2>
				<p>Spinners are generated with the <code>generateSpinner()</code> function which takes two properties: <code>target</code> which is the ID of the view you would like to fill with the spinner and <code>icon</code> which is the icon you would like to have spin (it's recommended you use the Rebar icon set but any element could be used here).</p>
<pre>
generateSpinner({
    target: "",
    icon: "", 
});
</pre>
				<p>It should be noted here that the element you set as the spinner will have a <code>z-index</code> of <code>-1</code> so that it automatically sits underneath any content that gets inserted in to the view that the spinner is in.</p>
			</div>
		`,
	},
	themeMetaTag: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Theme Meta Tag</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p><code>setMetaTheme()</code> is a function that is used to update the value in the <code>theme</code> meta tag. This is done to make sure the UI of Safari 15 and Android Chrome blends in with your app. It will set the theme value to your <code>--background</code> CSS variable's current value (this was chosen because <code>foreground</code> will often be white and Safari will ignore this).</p>
				<p>Rebar is already set up to invoke this function when needed. So only call this when changing the current app theme in a custom way.</p>
<pre>
function setMetaTheme() {
    var style = getComputedStyle(document.body)
    document.querySelector('meta[name="theme-color"]').setAttribute('content', "rgb(&#36;{style.getPropertyValue('--background')})")
}
</pre>
			</div>
		`,
	},
	colours: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="visuals" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Semantic Colours</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Examples</h2>
				<div class="spacerTriple" id="gridColours">
					<div class="tile">
						<div class="alwaysMain">${iconShapes.circleFill}</div>
						<span class="label">Main</span>
					</div>
					<div class="tile">
						<div class="alwaysAccent">${iconShapes.circleFill}</div>
						<span class="label">Accent</span>
					</div>
					<div class="tile">
						<div class="alwaysDestructive">${iconShapes.circleFill}</div>
						<span class="label">Destructive</span>
					</div>
					<div class="tile">
						<div class="alwaysPositive">${iconShapes.circleFill}</div>
						<span class="label">Positive</span>
					</div>
					<div class="tile">
						<div class="alwaysWarning">${iconShapes.circleFill}</div>
						<span class="label">Warning</span>
					</div>
					<div class="tile">
						<div class="alwaysInfo">${iconShapes.circleFill}</div>
						<span class="label">Info</span>
					</div>
				</div>
				
				<h2>Documentation</h2>
				<p>Rebar comes with a variety of semantic colours that are used in components and available to use within your app. Each colour is already set to work with Increased Contrast. It should be noted there are Multi style icons that make use of Semantic Colours.</p>
			</div>
		`,
	},
	
	//HELPERS
	preferencesSystem: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Preferences System</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p>The Preferences System in Rebar is designed to be a robust way to store, modify, and delete records in local storage. Preferences can be saved in to groups to keep the local storage clean.</p>
				<p>It offers the ability to bake-in default preferences that are saved to local storage on first run guaranteeing that you have access to those values from the get go.</p>
				<p>Lastly there is the concept of a preference version number where if you have to make large breaking changes you can change the version number and Rebar will completely reset what is stored in local storage back to your new default set of preferences.</p>
				
				<h2>Default Preferences</h2>
				<p>Your default preferences are stored in your Metadata file under the <code>appPreferencesDefault</code> constant (it's important to note you will also need the <code>appPreferencesVersion</code> constant filled out). Preferences should be stored as objects and you can include as many preference groups as you want here. Here is what the default Rebar preferences look like:</p>
<pre>
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
    },
}
</pre>
				<p>It should be noted that each preference group must contain a version number in it. This allows you to wholesale refresh the stored preferences if needed.</p>
				
				<h2>Working with the Preferences System</h2>
				<p>The Preference System has two functions you will be working with <code>getPreferenceGroup()</code> for retrieval from local storage and <code>modifyPreference()</code> for changing values within local storage. There is a third function related to the Preferences System, <code>parsePreferenceGroup()</code> but this is used internally and not required for you to call.</p>
				<p class="excludeMargin">To retrieve preferences:</p>
<pre>
getPreferenceGroup("preference group name").valueName
</pre>
				<p class="excludeMargin">To save a preference:</p>
<pre>
modifyPreference({
    group: "",
    mode: "update",
    preference: "",
    value: "",
})
</pre>
				<p class="excludeMargin">To delete a preference:</p>
<pre>
modifyPreference({
    group: "",
    mode: "delete",
    preference: "",
})
</pre>
			</div>
		`,
	},
	tipJar: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Tip jar</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<h2>Generate Tip Jar</h2>
				<p><code>generateTipJar()</code> is a function for creating a standard Tip Jar which can be displayed in whatever view you need. The messaging is standard but will pick up <code>appName</code>, <code>appEmail</code>, and <code>appPrivacyPolicy</code> from your metadata file to customise it.</p>
				<p>When generating the Tip Jar you will need to provide three links for the Small, Medium, and Large links (The Tip Jar supports only displaying three links, no more or less).</p>
				<p>The <code>generateTipJar()</code> takes some values passed in to it:</p>
				<ul>
					<li><code>target</code>: The ID of the view you want to render the Tip Jar in to.</li>
					<li><code>link*</code>: These should be links to Stripe payment pages.</li>
				</ul>
<pre>
generateTipJar({
    target: "",
    linkSmall: "",
    linkMedium: "",
    linkLarge: ""
});
</pre>
			
				<h2>Prompt for Tips</h2>
				<p>You also have the option to automatically prompt users for tips. Whether the prompt appears is determined by <code>promptForTips</code> being set to <code>true</code> in the Metadata file. When set to true Rebar will keep track of how many times the app has been loaded and when the counter hits 20, 100, and 500 the prompt will be shown.</p>
				<p>If a user clicks on one of the links in the prompt this will cause the prompt to not be shown again (this is a way to not bother users who have already donated).</p>
			</div>
		`,
	},
	capitalizeWord: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Capitalize Word</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p><code>capitalize()</code> is a function to help you capitalize a single word that you might automatically get as lowercase from some JSON. To make it work you need to pass text in to the function. It currently only supports single words. It will return the capitalized word.</p>
<pre>
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
</pre>
			</div>
		`,
	},
	copyToClipboard: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "code",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Rebar
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Copy to Clipboard</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar paddingContent">
				<p><code>copyToClipboard()</code> is a function to help you copy provided text to the clipboard. To make it work you need to pass text in to the function. It currently only supports text and will not copy images or other content to the clipboard.</p>
				<p>The function will also generate a Toast notifying users that the copy was successful (which will auto-dismiss after a short period of time).</p>
<pre>
function copyToClipboard(text) {
    //COPY CONTENT
    var $temp = $("< input >");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    
    //DISPLAY TOAST
    summonPanel({
        type: 'toast', 
        backing: 'none', 
        title: 'Copied to Clipboard',
        icon: '&#36;{iconShapes.checkmarkCircleStroke}',
        containerID: "buttonUpdateApp"
    })
    
    //DESTROY TOAST
    setTimeout(function(){ dismissPanel(); }, 1800);
}
</pre>
			</div>
		`,
	},
	setTimeLength: {
			properties: {
				originContainer: "primaryNav",
				parentContainer: "secondaryNav",
				parentRoute: "code",
				targetContainer: "primaryContent",
				clearContainer: null,
				columnLevel: 2,
				removePicked: "secondaryNav",
				query: "detail"
			},
			content: `
				<header class="containerToolbar alwaysLeft">
					<div class="pinLeft">
						<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
							${iconShapes.chevronBackwardsStroke}
							Rebar
						</button>
						<button class="toolbarItem collapseAside">
							${iconInterfaceElements.sidebarLeftStroke}
						</button>
					</div>
					<h1 class="headerToolbar">Set Time Length</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar paddingContent">
					<p><code>setTimeLength()</code> is a function that is used to set the <code>--base-time-length</code> variable. It will look to both the device and app settings to determine which is the appropriate value to set. When not setting the variable to 0 it will use the value in the <code>baseTimeLength</code> constant.</p>
<pre>
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
</pre>
				</div>
			`,
		},
	grabUrlParameters: {
			properties: {
				originContainer: "primaryNav",
				parentContainer: "secondaryNav",
				parentRoute: "code",
				targetContainer: "primaryContent",
				clearContainer: null,
				columnLevel: 2,
				removePicked: "secondaryNav",
				query: "detail"
			},
			content: `
				<header class="containerToolbar alwaysLeft">
					<div class="pinLeft">
						<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="helpers" title="Navigate Back">
							${iconShapes.chevronBackwardsStroke}
							Rebar
						</button>
						<button class="toolbarItem collapseAside">
							${iconInterfaceElements.sidebarLeftStroke}
						</button>
					</div>
					<h1 class="headerToolbar">Grab URL Parameters</h1>
					<div class="pinRight"></div>
				</header>
				<div class="scrollview cropToolbar paddingContent">
					<p><code>grabURLParameter()</code> is a function to retrieve the current URL query string for you. If the URL is set up as <code>?leading=trailing</code> it will return both <code>leading</code> and <code>trailing</code>. It will also return a <code>type</code> of </code>deeplink</code> which is used for the routing system.</p>
<pre>
function grabURLParameter() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return {
        type: "deeplink",
        query: Object.keys(params).join(),
        source: Object.values(params).join(),
    }
}
</pre>
				</div>
			`,
		},
	
	//ICONS
	galleryInterfaceElements: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Interface Elements</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryShapes: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Shapes</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryObjects: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Objects</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryIndices: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Indices</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryNature: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Nature</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryCharts: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Charts</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryHuman: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Human</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryHardware: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Hardware</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	galleryTransport: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Transport</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent" id="iconGallery"></div>
			</div>
		`,
	},
	galleryLogos: {
		properties: {
			originContainer: "primaryNav",
			parentContainer: "secondaryNav",
			parentRoute: "iconBrowser",
			targetContainer: "primaryContent",
			clearContainer: null,
			columnLevel: 2,
			removePicked: "secondaryNav",
			query: "detail"
		},
		content: `
			<header class="containerToolbar alwaysLeft withAccessory withInlineAccessory" id="galleryHeader">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-parent="primaryContent" data-removeactive="primaryContent" data-removeslide="secondaryNav" data-query="category" data-target="iconBrowser" title="Navigate Back">
						${iconShapes.chevronBackwardsStroke}
						Icons
					</button>
					<button class="toolbarItem collapseAside">
						${iconInterfaceElements.sidebarLeftStroke}
					</button>
				</div>
				<h1 class="headerToolbar">Logos</h1>
				<div class="pinRight">
					<button id="miniThemePicker" class="toolbarItem">${iconObjects.paintbrushStroke}</button>
				</div>
			</header>
			<div class="containerInlineAccessory">
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Icons" id="iconSearch" />
						<div class="buttonClearSearch">${iconShapes.timesFill}</div>
					</div>
				</div>
				<div class="scrollview paddingContent " id="iconGallery"></div>
			</div>
		`,
	},
	
	//COLUMNS EXAMPLE
	threeColumnPickedItem1: {
		properties: {
			originContainer: null,
			parentContainer: "exampleThreeColumnsPrimary",
			parentRoute: null,
			targetContainer: "exampleThreeColumnsSecondary",
			clearContainer: "columnContent1",
			columnLevel: 0
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="exampleThreeColumnsSecondary" data-removeslide="exampleThreeColumnsPrimary" data-clear="columnContent1">
						${iconShapes.chevronBackwardsStroke}
						Primary
					</button>
				</div>
				<h1 class="headerToolbar">Secondary</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset" data-target="columnContent1" data-parent="exampleThreeColumnsSecondary">
					<button class="itemList rounded" data-value="threeColumnPickedChildItem">
						<div class="label">
							<span>Invoke Content</span>
						</div>
					</button>
				</div>
			</div>
		`
	},
	threeColumnPickedItem2: {
		properties: {
			originContainer: null,
			parentContainer: "exampleThreeColumnsPrimary",
			parentRoute: null,
			targetContainer: "exampleThreeColumnsSecondary",
			clearContainer: "columnContent1",
			columnLevel: 0
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="exampleThreeColumnsSecondary" data-removeslide="exampleThreeColumnsPrimary" data-clear="columnContent1">
						${iconShapes.chevronBackwardsStroke}
						Primary
					</button>
				</div>
				<h1 class="headerToolbar">Secondary</h1>
				<div class="pinRight"></div>
			</header>
			<div class="scrollview cropToolbar">
				<div class="containerItemList inset" data-target="columnContent1" data-parent="exampleThreeColumnsSecondary">
					<button class="itemList rounded" data-value="threeColumnPickedChildItem">
						<div class="label">
							<span>Invoke Content</span>
						</div>
					</button>
				</div>
			</div>
		`
	},
	threeColumnPickedChildItem: {
		properties: {
			originContainer: "exampleThreeColumnsPrimary",
			parentContainer: "exampleThreeColumnsSecondary",
			parentRoute: "threeColumnPickedItem1",
			targetContainer: "columnContent1",
			clearContainer: null,
			columnLevel: 2
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="columnContent1" data-removeslide="exampleThreeColumnsSecondary">
						${iconShapes.chevronBackwardsStroke}
						Secondary
					</button>
				</div>
				<h1 class="headerToolbar">Content</h1>
				<div class="pinRight"></div>
			</header>
		`,
	},
	twoColumnPickedItem1: {
		properties: {
			originContainer: null,
			parentContainer: "exampleTwoColumnsPrimary",
			parentRoute: null,
			targetContainer: "columnContent2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="columnContent2" data-removeslide="exampleTwoColumnsPrimary">
						${iconShapes.chevronBackwardsStroke}
						Primary
					</button>
				</div>
				<h1 class="headerToolbar">Content 1</h1>
				<div class="pinRight"></div>
			</header>
		`
	},
	twoColumnPickedItem2: {
		properties: {
			originContainer: null,
			parentContainer: "exampleTwoColumnsPrimary",
			parentRoute: null,
			targetContainer: "columnContent2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `
			<header class="containerToolbar">
				<div class="pinLeft">
					<button class="back slim toolbarItem" data-removeactive="columnContent2" data-removeslide="exampleTwoColumnsPrimary">
						${iconShapes.chevronBackwardsStroke}
						Primary
					</button>
				</div>
				<h1 class="headerToolbar">Content 2</h1>
				<div class="pinRight"></div>
			</header>
		`
	},
	
	//TAB BAR EXAMPLES
	footerTab1: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar1",
			parentRoute: null,
			targetContainer: "contentAreaTabs1",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>First</h1>`
	},
	footerTab2: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar1",
			parentRoute: null,
			targetContainer: "contentAreaTabs1",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Second</h1>`
	},
	footerTab3: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar1",
			parentRoute: null,
			targetContainer: "contentAreaTabs1",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Third</h1>`
	},
	footerTab4: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar1",
			parentRoute: null,
			targetContainer: "contentAreaTabs1",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Fourth</h1>`
	},
	footerTab5: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar1",
			parentRoute: null,
			targetContainer: "contentAreaTabs1",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Fifth</h1>`
	},
	segmentTab1: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar2",
			parentRoute: null,
			targetContainer: "contentAreaTabs2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>First</h1>`
	},
	segmentTab2: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar2",
			parentRoute: null,
			targetContainer: "contentAreaTabs2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Second</h1>`
	},
	segmentTab3: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar2",
			parentRoute: null,
			targetContainer: "contentAreaTabs2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Third</h1>`
	},
	segmentTab4: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar2",
			parentRoute: null,
			targetContainer: "contentAreaTabs2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Fourth</h1>`
	},
	segmentTab5: {
		properties: {
			originContainer: null,
			parentContainer: "tabBar2",
			parentRoute: null,
			targetContainer: "contentAreaTabs2",
			clearContainer: null,
			columnLevel: 0
		},
		content: `<h1>Fifth</h1>`
	},
}