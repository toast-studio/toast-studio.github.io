//REBAR 3.0
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
			type: "fullsheet",
			backing: "dark",
			theme: false,
			id: "sheetInstall",
			content: ``,
		})
		
		contentInstallSheet("default")
	}
	
	function contentInstallSheet(type) {
		$(`#sheetInstallContent`).remove();
		$(`#sheetInstall`).append(`<div id="sheetInstallContent"></div>`)
		
		switch (type) {
			case 'default':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart"></div>
						<div class="wrapperToolbarMiddle"></div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					<div class="scrollview inset-T">
						<div id="containerIntroText">
							<div id="containerIcon">
								<img src="icon.png" width="120" alt="">
								<div class="icon">${iconShapes.arrowSingleDownFill}</div>
							</div>
						
							<h2 class="textAlignCenter">Install ${appName} with these browsers</h2>
							<p class="textAlignCenter">${appName} can be installed to your Dock, Taskbar, and Home Screen. It will launch like any other app and work offline.</p>
						</div>
						<div id="containerBrowsersList" class="spacerDouble">
							<div onclick="contentInstallSheet('brave')">
								<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-brave@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Brave</p>
							</div>
							<div onclick="contentInstallSheet('chrome')">
								<img src="rebar/images/browser-chrome.webp" srcset="rebar/images/browser-chrome@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Chrome</p>
							</div>
							<div onclick="contentInstallSheet('edge')">
								<img src="rebar/images/browser-edge.webp" srcset="rebar/images/browser-edge@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Edge</p>
							</div>
							<div onclick="contentInstallSheet('firefox')">
								<img src="rebar/images/browser-firefox.webp" srcset="rebar/images/browser-firefox@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Firefox</p>
							</div>
							<div onclick="contentInstallSheet('safari')">
								<img src="rebar/images/browser-safari.webp" srcset="rebar/images/browser-safari@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Safari</p>
							</div>
							<div onclick="contentInstallSheet('samsunginternet')">
								<img src="rebar/images/browser-samsunginternet.webp" srcset="rebar/images/browser-samsunginternet@2x.webp 2x" alt="" />
								<p class="excludeMargin textAlignCenter">Samsung Internet</p>
							</div>
						</div>
						<p class="subtext textAlignCenter">If you have any issues please contact <a href="mailto:${appEmail}?subject=Help%20with%20installing%20${appName}">Support</a>.</p>
					</div>
				`)
				break;
			case 'brave':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-brave@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Android</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.ellipsesVerticalSlim}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installBraveMobileStroke}</span> <span class="textBold alwaysAccent">Add to Home screen</span></li>
											<li>Tap <span class="textBold alwaysAccent">Install</span></li>
										</ol>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>macOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installChromeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Windows</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installChromeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
									</div>
								</div>
							</section>
						</div>
						
						${
							insertBanner({
								type: 'warning',
								content: 'Installation is not available in iOS and iPadOS',
								icon: false,
								size: "large",
							})
						}
					</div>
				`)
				break;
			case 'chrome':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-chrome@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iPadOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iPadOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Android</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.ellipsesVerticalSlim}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installChromeMobileStroke}</span> <span class="textBold alwaysAccent">Install app</span></li>
											<li>Tap <span class="textBold alwaysAccent">Install</span></li>
										</ol>
										<p class="subtext">iPadOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>macOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installChromeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
										<p class="subtext">Chrome 39 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Windows</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installChromeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
										<p class="subtext">Chrome 39 onwards</p>
									</div>
								</div>
							</section>
						</div>
					</div>
				`)
				break;
			case 'edge':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-edge@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iPadOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iPadOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Android</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.ellipsesHorizontalRoundedRectangleStroke}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installEdgeMobileStroke}</span> <span class="textBold alwaysAccent">Add to phone</span></li>
											<li>Tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">Edge 79 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>macOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installEdgeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
										<p class="subtext">Edge 79 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Windows</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installEdgeDesktopStroke}</span> button</li>
											<li>Click <span class="textBold alwaysAccent">Install</span></li>
										</ol>
										<p class="subtext">Edge 79 onwards</p>
									</div>
								</div>
							</section>
						</div>
					</div>
				`)
				break;
			case 'firefox':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-firefox.webp" srcset="rebar/images/browser-firefox@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.barsHorizontalStroke}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> <span class="textBold alwaysAccent">Share</span></li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iPadOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.barsHorizontalStroke}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> <span class="textBold alwaysAccent">Share</span></li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iPadOS 16.4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>Android</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.ellipsesVerticalSlim}</span> button</li>
											<li>Tap <span class="installShareIcon alwaysAccent">${iconInterfaceElements.installFirefoxMobileStroke}</span> <span class="textBold alwaysAccent">Install</span></li>
											<li>Tap <span class="textBold alwaysAccent">Add to home screen</span></li>
										</ol>
									</div>
								</div>
							</section>
						</div>
						
						${
							insertBanner({
								type: 'warning',
								content: 'Installation is not available in macOS and Windows',
								icon: false,
								size: "large",
							})
						}
					</div>
				`)
				break;
			case 'safari':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-safari@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iOS 1.1.3 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>iPadOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.shareAppleUpStroke}</span> button</li>
											<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
											<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">iPadOS 4 onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						<div class="containerAccordion spacerSingle">
							<div class="headerAccordion headerSection">
								<h3>macOS</h3>
								<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
							</div>
							<section class="containerAccordionContents">
								<div class="wrapper">
									<div class="containerSection">
										<ol>
											<li>Click the <span class="textBold alwaysAccent">File</span> menu</li>
											<li>Click <span class="textBold alwaysAccent">Add to Dock&hellip;</span></li>
											<li>Set a name and click <span class="textBold alwaysAccent">Add</span></li>
										</ol>
										<p class="subtext">macOS 14 Sonoma onwards</p>
									</div>
								</div>
							</section>
						</div>
						
						${
							insertBanner({
								type: 'warning',
								content: 'Installation is not available in visionOS',
								icon: false,
								size: "large",
							})
						}
					</div>
				`)
				break;
			case 'samsunginternet':
				$(`#sheetInstallContent`).append(`
					<div class="containerToolbar layoutSheet vanishing" id="toolbarInstall">
						<div class="wrapperToolbarStart">
							<div class="pinToolbar material-liquidglass-thin">
								<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
							</div>
						</div>
						<div class="wrapperToolbarMiddle">
							<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-samsunginternet@2x.webp 2x" alt="" width="42" />
						</div>
						<div class="wrapperToolbarEnd">
							<div class="pinToolbar material-liquidglass-thin">
								<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
							</div>
						</div>
					</div>
					
					<div class="scrollview inset-T" id="installinstructions">
						<div class="containerSection">
							<ol>
								<li>Tap the <span class="installShareIcon alwaysAccent">${iconInterfaceElements.barsHorizontalStroke}</span> button</li>
								<li>Tap <span class="installShareIcon alwaysAccent">${iconShapes.plusStroke}</span> <span class="textBold alwaysAccent">Add page to</span></li>
								<li>Tap <span class="textBold alwaysAccent">Home screen</span></li>
								<li>Tap <span class="textBold alwaysAccent">Add to home screen</span></li>
							</ol>
						</div>
					</div>
				`)
				break;
		}
	}
	
	function summonWhatsNewSheet() {
		summonSheet({
			type: "smallsheet",
			backing: "dark",
			theme: false,
			id: "sheetWhatsNew",
			content: `
				<header class="containerToolbar layoutSheet">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle"></div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span id="buttonSheetDismiss" data-function="closedialog" autofocus>${insertCancelButton()}</button>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T excludePadding">
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
		//ADD ANY NEW REBAR SETTINGS FOR AN ALREADY INSTALLED APP
			modifyPreference({
				group: "rebar.appSettings",
				mode: "append",
			})
		
		//FIRST RUN
		if (getPreferenceGroup("rebar.appSettings").firstRun != "complete") {
			//GENERATE REBAR SETTINGS
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "firstRun",
				value: "complete",
			})
			
			//SUMMON INSTALL TOAST
			summonInstallBanner();
			// let isRunningOnMobileSafari = CSS.supports("-webkit-touch-callout", "inherit");
			// if ((isRunningOnMobileSafari == true) && (window.matchMedia("(display-mode: browser)").matches)) {
			// 	summonInstallBanner();
			// }
		}
		
		//OVERWRITE DEFAULT OS WITH ACUTAL OS
		if (getPreferenceGroup("rebar.appSettings").os == "default") {
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "os",
				value: grabOS(),
			})
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
		
		//SET FONT
		$("body").attr("data-font", getPreferenceGroup("rebar.appSettings").textFont);
		
		//SET INCREASED CONTRAST
		if (queryIncreasedContrast == true) {
			$("body").attr("data-contrast", "more");
		} else {
			$("body").attr("data-contrast", getPreferenceGroup("rebar.appSettings").increaseContrast);
		}
		
		//SET OS
		if (getPreferenceGroup("rebar.appSettings").os == undefined) {
			$("body").attr("data-os", grabOS()).attr("data-device", grabOS());
		} else {
			$(`body`).attr("data-os", getPreferenceGroup("rebar.appSettings").os).attr("data-device", grabOS())
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
		macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;
	
		if (macosPlatforms.indexOf(platform) !== -1) {
			let isRunningOnMobileSafari = CSS.supports("-webkit-touch-callout", "inherit");
			if (isRunningOnMobileSafari == true) {
				os = 'ios';
			} else {
				os = 'macos';
			}
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
	
	function storedOS() {
		return getPreferenceGroup("rebar.appSettings").os
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
	let lastW = window.innerWidth, lastH = window.innerHeight, id;
	
	$(window).on('resize', () => {
		const w = window.innerWidth, h = window.innerHeight;
		if (w === lastW && h === lastH) return; //IGNORE FALSE POSITIVES
		lastW = w; lastH = h;
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
	  let isOn = $(dataValue).prop("checked");
	  return isOn ? true : false;
	}

	
//NAVIGATION CONTROLLERS
	//COLUMNS
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
	var toolbarVisibility = function(options) {
		$(options.scrollview).scroll(function() {
			var y = $(options.scrollview).scrollTop();
			if (y > options.height) {
				$(options.toolbar).removeClass("vanishing");
			} else {
				$(options.toolbar).addClass("vanishing");
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
			
			// if (type == "fullsheet" || type == "smallsheet") {
			// 	$(".containerApp").addClass("recede");
			// }
			//This was removed as part of the iOS 26 update
			
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
						<button data-button="close" class="translucent" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
						${options.content}
					</dialog>
				`);
				showDialog("lightbox");
			}
			
		//ALERT
			function summonAlert(options) {
				if (options.customContent == false) {
					$("body").prepend(`
						<dialog data-type="alert" data-backing="${options.backing}" id="${options.id}" class="material-liquidglass-thick">
							<div class="description">
								${options.icon ? `<span class="${options.iconType}">${options.icon}</span>` : ``}
								${options.title ? `<h5 class="excludePadding">${options.title}</h5>` : ``}
								${options.message ? `<p class="excludeMargin">${options.message}</p>` : ``}
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
						<dialog data-type="alert" data-backing="${options.backing}" id="${options.id}" class="material-liquidglass-thick">
							<div class="description">
								${options.icon ? `<span class="${options.iconType}">${options.icon}</span>` : ``}
								${options.title ? `<h5 class="excludePadding">${options.title}</h5>` : ``}
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
					<dialog data-type="toast" data-backing="${options.backing}" class="material-liquidglass-thick material-acrylic">
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
				<header class="containerToolbar layoutSheet">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Shortcut Keys</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span id="buttonSheetDismiss" data-function="closedialog" autofocus>${insertCancelButton()}</button>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerItemList inset noBackgroundColor excludePadding"></div>
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
					<div data-button="item-flat">
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
					if ($(`#sheetShortcuts`).length == 0) {
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
	//NOT EXCLUSIVE ACCORDIONS
	$(document).on('click', '.containerAccordion:not([data-accordiongroup]) .headerAccordion', function() {
		$(this).parent().toggleClass(`active`);
	});
	
	//EXCLUSIVE ACCORDIONS
	$(document).on('click', '[data-accordiongroup] .headerAccordion', function() {
		const parent = $(this).parent()
		const group = parent.data(`accordiongroup`)
		$(`[data-accordiongroup="${group}"]`).not(parent).removeClass(`active`)
		parent.toggleClass(`active`);
	});
	
	//OPEN ON LARGE SCREENS
	function openAccordionsLargeScreens(min) {
		var isLarge = $(window).width() >= min;
		$('.largeOpen').toggleClass('active', isLarge);
	}
	
//SEARCH
	function search(options) {
		const selector = options.inputSelector || `#${options.inputID}`;
			
		$(document).on("keyup", selector, function () {
			//GATHER THE INPUTED TEXT
			let input = this; //The search field
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
				hit = txtValue.toUpperCase().includes(enteredText);
				
				$(items[i])
					.toggle(hit)
					.toggleClass("itemDisplayed", hit)
					.toggleClass("itemHidden", !hit);
			}
			
			//DISPLAY BLANK STATE WHEN THERE ARE NO MATCHES
			if ($('.itemDisplayed').length > 0) {
				//MATCHES FOUND
				$(`.noResults .containerBlankState`).remove();
				$(`#` + options.parentID).parent().removeClass(`noResults`);
			} else {
				//NO MATCHES
				$(`.noResults .containerBlankState`).remove();
				$(`#` + options.parentID).parent().addClass(`noResults`);
				generateBlankState({
					target: options.parentID,
					icon: options.emptyIcon, 
					title: options.emptyMessage,
				});
			}
		});
	}
	
	function searchTable(options) {
		let input = document.getElementById(options.inputID);
		let value = $(options.enteredText).val().toLowerCase();
		$("table :not(thead) tr").filter(function() {
			let isVisible = $(this).text().toLowerCase().indexOf(value) > -1;
			$(this).toggle(isVisible);
			if (!isVisible) {
				$(this).addClass("itemHidden");
				$(this).removeClass("itemDisplayed");
			} else {
				$(this).removeClass("itemHidden");
				$(this).addClass("itemDisplayed");
			}
		});
		
		//SET THE CONTAINER SCROLL BACK TO THE TOP
		document.getElementById(options.parentID).scrollTop = 0;
		
		//HIDE AND SHOW THE CLEAR SEARCH BUTTON
		if (options.enteredText.value.length == 0) {
			$(input).next().removeClass("active"); //Hide the clear button
		} else {
			$(input).next().addClass("active"); //Show the clear button
		}
		
		//DISPLAY BLANK STATE WHEN THERE ARE NO MATCHES
		if ($('.itemDisplayed').length > 0) {
			//MATCHES FOUND
			$(`.noResults .containerBlankState`).remove();
			$(`#` + options.parentID).parent().removeClass(`noResults`);
		} else {
			//NO MATCHES
			$(`.noResults .containerBlankState`).remove();
			$(`#` + options.parentID).parent().addClass(`noResults`);
			generateBlankState({
				target: options.parentID,
				icon: options.emptyIcon, 
				title: options.emptyMessage,
			});
		}
	}
	
	function searchClear(options) {
		$(options.searchScope).attr("style", "").removeClass("itemDisplayed").removeClass("itemHidden"); //Unhide all items and remove the display classes
		$(options.clearButton).removeClass("active"); //Hide the clear button
		$(options.inputID).val(""); //Empty the search input
		$(`#` + options.parentID).removeClass("activeSearch"); //Remove the active search class from the parent container of the items
		$(`.noResults .containerBlankState`).remove();
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
	
//DATA HANDLING
	function dataFilter(data, where = {}) {
		const getByPath = (obj, path) => path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
		
		const matches = (fieldValue, criterion, row) => {
			if (typeof criterion === 'function') return !!criterion(fieldValue, row);
			if (Array.isArray(criterion)) {
				if (Array.isArray(fieldValue)) return fieldValue.some(v => criterion.includes(v));
				return criterion.includes(fieldValue);
			}
			if (criterion && typeof criterion === 'object' && !Array.isArray(criterion)) {
				if (('$min' in criterion) || ('$max' in criterion)) {
					const min = criterion.$min ?? -Infinity, max = criterion.$max ?? Infinity;
					return fieldValue >= min && fieldValue <= max;
				}
				if (Array.isArray(fieldValue)) {
					if ('$all' in criterion)  return criterion.$all.every(v => fieldValue.includes(v));
					if ('$any' in criterion)  return criterion.$any.some(v => fieldValue.includes(v));
					if ('$none' in criterion) return !criterion.$none.some(v => fieldValue.includes(v));
				}
			}
			return fieldValue === criterion;
		};
			
		const testEntry = (entryKey, row) =>
			Object.entries(where).every(([path, criterion]) => {
				const fieldValue = path === '$key' ? entryKey : getByPath(row, path);
				return matches(fieldValue, criterion, row);
			});
			
		if (Array.isArray(data)) return data.filter((row, i) => testEntry(String(i), row));
		return Object.fromEntries(Object.entries(data).filter(([k, row]) => testEntry(k, row)));
	}
	
	function dataSort(data, key, dir = 'asc') {
		const isArr = Array.isArray(data);
		const toEntries = isArr ? data.map((v, i) => [String(i), v]) : Object.entries(data);
		const get = typeof key === 'function' ? key : makeGetter(key);
		const mult = String(dir).toLowerCase() === 'desc' ? -1 : 1;
		
		toEntries.sort((a, b) => {
			const av = get(a[1]);
			const bv = get(b[1]);
			return cmp(av, bv) * mult;
		});
		
		const out = {};
		if (isArr) {
			for (let i = 0; i < toEntries.length; i++) out[String(i)] = toEntries[i][1];
		} else {
			for (const [k, v] of toEntries) out[k] = v;
		}
		return out;
		
		function makeGetter(path) {
			if (!path) return x => x;
			const parts = String(path).replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
			return obj => {
				let cur = obj;
				for (const p of parts) { if (cur == null) return undefined; cur = cur[p]; }
				return cur;
			};
		}
		
		function cmp(a, b) {
			const aN = a == null, bN = b == null;
			if (aN || bN) return aN && bN ? 0 : (aN ? 1 : -1); // nulls last
			if (Array.isArray(a) && Array.isArray(b)) {
				const n = Math.min(a.length, b.length);
				for (let i = 0; i < n; i++) { const c = cmp(a[i], b[i]); if (c) return c; }
				return a.length - b.length; //SHORTER FIRST
			}
			if (typeof a === 'number' && typeof b === 'number') return a - b;
			if (typeof a === 'boolean' && typeof b === 'boolean') return (a === b) ? 0 : (a ? 1 : -1);
			
			//STRONGS OR MIXED -> COMPARE AS STRINGS WITH NUMERIC
			const sa = typeof a === 'string' ? a : String(a);
			const sb = typeof b === 'string' ? b : String(b);
			return sa.localeCompare(sb, undefined, { numeric: true, sensitivity: 'base' });
		}
	}
	
	function dataGroup(collection, by, options = {}) {
		if (typeof options === 'string') options = { sort: options };
		const {
			label = (v) => String(v),
			empty = 'Unspecified',
			sort = 'none',
			locale,
			numeric = true,
			sensitivity = 'base',
		} = options;
		
		const get = (obj, path) =>
			typeof by === 'function' ? by(obj) :
			typeof path === 'string' ? path.split('.').reduce((o,k)=>o?.[k], obj) :
			obj?.[path];
		
		const entries = Array.isArray(collection)
			? collection.map((v, i) => [String(i), v])
			: Object.entries(collection);
		
		const groups = new Map(); // outer map
		
		for (const [id, item] of entries) {
			const raw = get(item, by);
			const vals = Array.isArray(raw) ? raw : [raw];
			const groupVals = vals.length ? vals : [undefined];
			
			for (const v of groupVals) {
				const name = v == null || v === '' ? empty : label(v);
				if (!groups.has(name)) groups.set(name, new Map());
				groups.get(name).set(id, item);
			}
		}
		
		if (!sort || sort === 'none') return groups;
		
		const coll = new Intl.Collator(locale, { numeric, sensitivity });
		const cmp = typeof sort === 'function'
			? sort
			: (a, b) => sort === 'desc' ? coll.compare(b, a) : coll.compare(a, b);
		
		const ordered = new Map();
		for (const k of [...groups.keys()].sort(cmp)) ordered.set(k, groups.get(k));
		return ordered;
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
			$(`#${options.target} .blankStateContents`).prepend(`${options.icon}`);
		}
		
		if (options.message != undefined) {
			$(`#${options.target} .blankStateContents`).append(`<p>${options.message}</p>`);
		}
		
		if (options.actionFirst != undefined) {
			$(`#${options.target} .blankStateContents`).append(`
				<div class="containerActions">
					<button data-button="action-fill" class="primary" id="${options.actionIDFirst}">${options.actionFirst}</button>
				</div>
			`);
		}
		
		if (options.actionSecond != undefined) {
			$(`#${options.target} .blankStateContents .containerActions`).append(`<button data-button="action-fill" class="secondary" id="${options.actionIDSecond}">${options.actionSecond}</button>`)
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
			return `
				<span class="only-ios only-macos">
					<button data-button="action-transparent" class="share ${options.style}" title="${options.title}">${iconInterfaceElements.shareAppleUpStroke}</button>
				</span>
				<span class="only-android">
					<button data-button="action-transparent" class="share ${options.style}" title="${options.title}">${iconInterfaceElements.shareAndroidStroke}</button>
				</span>
				<span class="only-windows">
					<button data-button="action-transparent" class="share ${options.style}" title="${options.title}">${iconInterfaceElements.shareWindows}</button>
				</span>
			`
		} else {
			return ``
		}
	}
	
//BACK BUTTON
	function insertBackButton(label) {
		return `
			<span class="only-ios only-macos">
				<button data-button="action-transparent" class="toolbarItem back" title="Navigate Back">${iconShapes.chevronBackwardsStroke}</button>
			</span>
			<span class="only-android only-windows">
				<button data-button="action-transparent" class="toolbarItem back" title="Navigate Back">${iconShapes.arrowSingleLeft}</button>
			</span>
		`
	}
	
//CONFIRMATION BUTTON
	function insertConfirmationButton() {
		return `
			<span class="only-ios only-macos">
				<button data-button="action-fill" class="primary toolbarItem material-liquidglass-tinted" title="Done">${iconShapes.checkmarkStroke}</button>
			</span>
			<span class="only-android only-windows">
				<button data-button="action-transparent" class="toolbarItem" title="Done">${iconShapes.checkmarkStroke}</button>
			</span>
		`
	}

//CANCEL BUTTON
	function insertCancelButton() {
		return `
			<span class="only-ios only-macos">
				<button data-button="action-transparent" class="toolbarItem" title="Cancel">${iconShapes.timesSmallStroke}</button>
			</span>
			<span class="only-android">
				<button data-button="action-transparent" class="toolbarItem" title="Cancel">${iconShapes.arrowSingleLeft}</button>
			</span>
			<span class="only-windows">
				<button data-button="action-transparent" class="toolbarItem" title="Cancel">${iconShapes.timesStroke}</button>
			</span>
		`
	}
	
//THEME PICKER
	//GENERATE THE THEME PICKER
	function generateDisplayOptions(options) {
		if (options.themeOptions == true || options.accentOptions == true || options.contrastOptions == true || options.motionOptions == true) {
			//SET UP THE CONTAINER
				$(`#${options.target}`).append(`
					<h2 class="h4">Visuals</h2>
					<section class="spacerDouble" id="containerVisuals"></section>
				`);
				
			//THEME
				$(`#containerVisuals`).append(`
					<div class="containerDisplayRow containerSection" id="displayTheme">
						<div>
							<h3 class="h5 excludePadding">Theme</h3>
							<p class="excludeMargin">Style ${appName} with one of the OS themes</p>
						</div>
						<div class="options">
							<button data-button="display-tile" class="primary" data-name="ios" onclick="overrideOS('ios')">
								${iconHardware.tabletphoneLandscapeStroke}
								iOS
							</button>
							<button data-button="display-tile" class="primary" data-name="macos" onclick="overrideOS('macos')">
								${iconHardware.imacStroke}
								macOS
							</button>
							<button data-button="display-tile" class="primary" data-name="android" onclick="overrideOS('android')">
								${iconLogos.android}
								Android
							</button>
							<button data-button="display-tile" class="primary" data-name="windows" onclick="overrideOS('windows')">
								${iconLogos.windows}
								Windows
							</button>
						</div>
					</div>
				`);
				
				switch (getPreferenceGroup("rebar.appSettings").os) {
					case 'ios':
						$(`[data-setting="os"] .contextLabel`).append(`iOS`);
						$(`[data-name="ios"]`).addClass(`picked`);
						break;
					case 'macos':
						$(`[data-setting="os"] .contextLabel`).append(`macOS`);
						$(`[data-name="macos"]`).addClass(`picked`);
						break;
					case 'android':
						$(`[data-setting="os"] .contextLabel`).append(`Android`);
						$(`[data-name="android"]`).addClass(`picked`);
						break;
					case 'windows':
						$(`[data-setting="os"] .contextLabel`).append(`Windows`);
						$(`[data-name="windows"]`).addClass(`picked`);
						break;
				}
			
			//GENERATE APPEARANCE OPTIONS
				if (options.themeOptions == true) {
					//SET UP THE CONTAINER
						$(`#containerVisuals`).append(`
							<div class="containerDisplayRow containerSection" id="displayAppearance">
								<div>
									<h3 class="h5 excludePadding">Appearance</h3>
									<p class="excludeMargin">Set ${appName} to light or dark mode</p>
								</div>
								<div class="options"></div>
							</div>
						`);
					
					//GENERATE BUTTONS
						$.each( appThemes, function( key, val ) {
							$(`#displayAppearance .options`).append(`
								<button data-button="display-tile" class="primary" data-value="${key}" data-label="${val.name}" data-icongroup='${val.iconGroup}' data-iconname='${val.iconName}'>
									${window[val.iconGroup][val.iconName]}
									${val.name}
								</button>
							`);
						});
					
					//SET SELECTED APPEARANCE ON LOAD
						$(`#displayAppearance [data-value='${getPreferenceGroup("rebar.appSettings").appearance}']`).addClass("picked");
				}
			
			//GENERATE ACCENT OPTIONS
				if (options.accentOptions == true) {
					//SET UP THE CONTAINER
					$(`#containerVisuals`).append(`
						<div class="containerDisplayRow containerSection" id="displayAccent">
							<div>
								<h3 class="h5 excludePadding">Accent</h3>
								<p class="excludeMargin">Set the colour of ${appName}</p>
							</div>
							<div class="options">
								<div class="spacerSingle" id="appAccents">
									<h4 class="h6">App</h4>
								</div>
								
								<div class="spacerSingle">
									<h4 class="h6">iOS and macOS</h4>
									<button data-button="action-circular" class="primary" data-value="blue" data-accent="blue" title="Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="teal" data-accent="teal" title="Teal">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="purple" data-accent="purple" title="Purple">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="pink" data-accent="pink" title="Pink">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="red" data-accent="red" title="Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="orange" data-accent="orange" title="Orange">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="yellow" data-accent="yellow" title="Yellow">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="green" data-accent="green" title="Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="graphite" data-accent="graphite" title="Graphite">${iconShapes.circleFill}</button>
								</div>
								
								<div class="spacerSingle">
									<h4 class="h6">iMac</h4>
									<button data-button="action-circular" class="primary" data-value="iyellow" data-accent="iyellow" title="Yellow iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="iyellow24" data-accent="iyellow24" title="Yellow iMac 2024">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="igreen" data-accent="igreen" title="Green iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="igreen24" data-accent="igreen24" title="Green iMac 2024">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="iblue" data-accent="iblue" title="Blue iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="iblue24" data-accent="iblue24" title="Blue iMac 2024">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="ired" data-accent="ired" title="Pink iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="ired24" data-accent="ired24" title="Pink iMac 2024">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="ipurple" data-accent="ipurple" title="Purple iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="ipurple24" data-accent="ipurple24" title="Purple iMac 2024">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="iorange" data-accent="iorange" title="Orange iMac 2021">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="iorange24" data-accent="iorange24" title="Orange iMac 2024">${iconShapes.circleFill}</button>
								</div>
								
								<div class="spacerSingle">
									<h4 class="h6">Android</h4>
									<button data-button="action-circular" class="primary" data-value="android-red" data-accent="android-red" title="Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-orange" data-accent="android-orange" title="Orange">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-sun" data-accent="android-sun" title="Sun">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-yellow" data-accent="android-yellow" title="Yellow">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-green" data-accent="android-green" title="Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-carbon" data-accent="android-carbon" title="Carbon">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-blue" data-accent="android-blue" title="Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-classic" data-accent="android-classic" title="Classic">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-indigo" data-accent="android-indigo" title="Indigo">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-paper" data-accent="android-paper" title="Paper">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="android-violet" data-accent="android-violet" title="Violet">${iconShapes.circleFill}</button>
								</div>
								
								<div>
									<h4 class="h6">Windows</h4>
									<button data-button="action-circular" class="primary" data-value="windows-yellow-gold" data-accent="windows-yellow-gold" title="Yellow Gold">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-gold" data-accent="windows-gold" title="Gold">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-orange-bright" data-accent="windows-orange-bright" title="Orange Bright">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-orange-dark" data-accent="windows-orange-dark" title="Orange Dark">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-rust" data-accent="windows-rust" title="Rust">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-pale-rust" data-accent="windows-pale-rust" title="Pale Rust">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-brick-red" data-accent="windows-brick-red" title="Brick Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-mod-red" data-accent="windows-mod-red" title="Mod Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-pale-red" data-accent="windows-pale-red" title="Pale Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-red" data-accent="windows-red" title="Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-rose-bright" data-accent="windows-rose-bright" title="Rose Bright">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-rose" data-accent="windows-rose" title="Rose">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-plum-light" data-accent="windows-plum-light" title="Plum Light">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-plum" data-accent="windows-plum" title="Plum">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-orchid-light" data-accent="windows-orchid-light" title="Orchid Light">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-orchid" data-accent="windows-orchid" title="Orchid">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-blue" data-accent="windows-blue" title="Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-navy-blue" data-accent="windows-navy-blue" title="Navy Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-purple-shadow" data-accent="windows-purple-shadow" title="Purple Shadow">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-purple-shadow-dark" data-accent="windows-purple-shadow-dark" title="Purple Shadow Dark">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-iris-pastel" data-accent="windows-iris-pastel" title="Iris Pastel">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-iris-spring" data-accent="windows-iris-spring" title="Iris Spring">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-violet-red-light" data-accent="windows-violet-red-light" title="Violet Red Light">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-violet-red" data-accent="windows-violet-red" title="Violet Red">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-cool-blue-bright" data-accent="windows-cool-blue-bright" title="Cool Blue Bright">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-cool-blue" data-accent="windows-cool-blue" title="Cool Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-seafoam" data-accent="windows-seafoam" title="Seafoam">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-seafoam-teal" data-accent="windows-seafoam-teal" title="Seafoam Teal">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-mint-light" data-accent="windows-mint-light" title="Mint Light">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-mint-dark" data-accent="windows-mint-dark" title="Mint Dark">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-turf-green" data-accent="windows-turf-green" title="Turf Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-sport-green" data-accent="windows-sport-green" title="Sport Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-gray" data-accent="windows-gray" title="Gray">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-gray-brown" data-accent="windows-gray-brown" title="Gray Brown">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-steel-blue" data-accent="windows-steel-blue" title="Steel Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-metal-blue" data-accent="windows-metal-blue" title="Metal Blue">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-pale-moss" data-accent="windows-pale-moss" title="Pale Moss">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-moss" data-accent="windows-moss" title="Moss">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-meadow-green" data-accent="windows-meadow-green" title="Meadow Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-green" data-accent="windows-green" title="Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-overcast" data-accent="windows-overcast" title="Overcast">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-storm" data-accent="windows-storm" title="Storm">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-blue-gray" data-accent="windows-blue-gray" title="Blue Gray">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-gray-dark" data-accent="windows-gray-dark" title="Gray Dark">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-liddy-green" data-accent="windows-liddy-green" title="Liddy Green">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-sage" data-accent="windows-sage" title="Sage">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-camouflage-desert" data-accent="windows-camouflage-desert" title="Camouflage Desert">${iconShapes.circleFill}</button>
									<button data-button="action-circular" class="primary" data-value="windows-camouflage" data-accent="windows-camouflage" title="Camouflage">${iconShapes.circleFill}</button>
									
									
									
									
								</div>
							</div>
						</div>
					`);
					
					//GENERATE THE TOKENS
						$.each( appAccents, function( key, val ) {
							$(`#appAccents`).append(`
								<button data-button="action-circular" class="primary" data-value="${key}" data-accent="${key}" title="${val}">${iconShapes.circleFill}</button>
							`);
						});
					
					//SET THE PICKED TOKEN
						$(`#displayAccent [data-value="${getPreferenceGroup("rebar.appSettings").accent}"]`).addClass("picked");
				}
			
			//GENERATE INCREASED CONTRAST OPTIONS
				if (options.contrastOptions == true) {
					//GENERATE MENU
						$(`#containerVisuals`).append(`
							<div class="containerDisplayRow containerSection" id="displayContrast" style="--layout: grid; align-items: center;">
								<div>
									<h3 class="h5 excludePadding">Increase Contrast</h3>
									<p class="excludeMargin">Makes elements more distinct</p>
								</div>
								<label for="increaseContrast">
									<input type="checkbox" switch id="increaseContrast" name="increaseContrast" value="">
									<div class="fakeCheckbox"></div>
								</label>
							</div>
						`);
					
					//SET SWITCH STATE
						if (getPreferenceGroup("rebar.appSettings").increaseContrast == "more") {
							$('#increaseContrast').prop('checked', true);
						}
						
						if (queryIncreasedContrast == true) {
							$('#increaseContrast').prop('checked', true).addClass("disabled");
							$("#displayContrast div:first-child").append(`<p class="subtext">Using device settings</p>`)
						}
				}
			
			//GENERATE REDUCED MOTION OPTIONS
				if (options.motionOptions == true) {
					//GENERATE MENU
					$(`#containerVisuals`).append(`
						<div class="containerDisplayRow containerSection" id="displayMotion" style="--layout: grid; align-items: center;">
							<div>
								<h3 class="h5 excludePadding">Reduce Motion</h3>
								<p class="excludeMargin">Disables animations across ${appName}</p>
							</div>
							<label for="reduceMotion">
								<input type="checkbox" switch id="reduceMotion" name="reduceMotion" value="">
								<div class="fakeCheckbox"></div>
							</label>
						</div>
					`);
					
					//SET SWITCH STATE
					if (getPreferenceGroup("rebar.appSettings").reduceMotion == "on") {
						$('#reduceMotion').prop('checked', true);
					}
					
					if (queryReducedMotion == true) {
						$('#reduceMotion').prop('checked', true).addClass("disabled");
						$("#displayMotion div:first-child").append(`<p class="subtext">Using device settings</p>`)
					}
				}
		}
		
		if (options.textSizeOptions == true || options.textWeightOptions == true || options.textFontOptions == true) {
			//SET UP THE CONTAINER
				$(`#${options.target}`).append(`
					<h2 class="h4">Text</h2>
					<section id="containerText"></section>
				`);
				
			//GENERATE TEXT SIZE OPTIONS
				if (options.textSizeOptions == true) {
					//GENERATE MENU
						$(`#containerText`).append(`
							<div class="containerDisplayRow containerSection" id="displayTextSize">
								<div>
									<h3 class="h5 excludePadding">Text Size</h3>
									<p class="excludeMargin">Set ${appName} to a comfortable reading size</p>
								</div>
								<div class="options">
									<button data-button="display-tile" class="primary" data-value="small" data-label="small">
										${iconInterfaceElements.textSmall}
										Small
									</button>
									<button data-button="display-tile" class="primary" data-value="medium" data-label="medium">
										${iconInterfaceElements.textMedium}
										Medium
									</button>
									<button data-button="display-tile" class="primary" data-value="large" data-label="large">
										${iconInterfaceElements.textLarge}
										Large
									</button>
								</div>
							</div>
						`);
					
					
					//SET TEXT SIZE DROPDOWN
						$(`#displayTextSize [data-value='${getPreferenceGroup("rebar.appSettings").dynamicTypeSize.value}']`).addClass("picked");
				}
			
			//GENERATE BOLD TEXT OPTIONS
				if (options.textWeightOptions == true) {
					//GENERATE MENU
					$(`#containerText`).append(`
						<div class="containerDisplayRow containerSection" id="displayBoldText" style="--layout: grid; align-items: center;">
							<div>
								<h3 class="h5 excludePadding">Bold Text</h3>
								<p class="excludeMargin">Increase the weight of text for a stronger appearance</p>
							</div>
							<label for="boldText">
								<input type="checkbox" switch id="boldText" name="boldText" value="">
								<div class="fakeCheckbox"></div>
							</label>
						</div>
					`);
					
					if (getPreferenceGroup("rebar.appSettings").textWeight == "bold") {
						$('#boldText').prop('checked', true);
					}
				}
				
			//GENERATE FONT OPTIONS
				if (options.textFontOptions == true) {
					//GENERATE MENU
						$(`#containerText`).append(`
							<div class="containerDisplayRow containerSection" id="displayFont">
								<div>
									<h3 class="h5 excludePadding">Font</h3>
									<p class="excludeMargin">Select from a variety of fonts to help with readability</p>
								</div>
								<div class="options-row" id="pickerFonts">
									<h4 class="h6 excludePadding">System</h4>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="system" data-label="System Sans Serif">
										<span>Sans Serif</span>
										<span class="ignoreFontOverride">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="serif" data-label="System Serif">
										<span>Serif</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-serif);">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride spacerSingle" data-value="mono" data-label="System Mono">
										<span>Monospace</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-monospace);">iIl1 oO0 Gg</span>
									</button>
									
									<h4 class="h6 excludePadding">OS Fonts</h4>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="sfpro" data-label="SF Pro">
										<span>SF Pro</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-sfpro);">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="productsans" data-label="Product Sans">
										<span>Product Sans</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-productsans);">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride spacerSingle" data-value="segoeui" data-label="Segoe UI">
										<span>Segoe UI</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-segoeui);">iIl1 oO0 Gg</span>
									</button>
									
									<h4 class="h6 excludePadding">Accessible</h4>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="opendyslexic" data-label="OpenDyslexic">
										<span>OpenDyslexic</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-dyslexic);">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="atkinson" data-label="Atkinson Hyperlegible">
										<span>Atkinson Hyperlegible</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-atkinson);">iIl1 oO0 Gg</span>
									</button>
									<button data-button="display-row" class="primary ignoreFontOverride" data-value="shantell" data-label="Shantell Sans">
										<span>Shantell Sans</span>
										<span class="ignoreFontOverride" style="font-family: var(--font-shantell);">iIl1 oO0 Gg</span>
									</button>
									
								</div>
							</div>
						`);
						
						$(`#displayFont [data-value="${getPreferenceGroup("rebar.appSettings").textFont}"]`).addClass(`picked`);
				}
		}
	}
	
	//SET APPEARANCE
		$(document).on('click', '#displayAppearance button', function() {
			let selectedValue = clickContextMenuItem(this);
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "appearance",
				value: selectedValue.value,
			})
			$("body").attr("data-theme", selectedValue.value);
			setMetaTheme();
			$(`#displayAppearance button`).removeClass(`picked`)
			$(this).addClass(`picked`)
		});
	
	//SET ACCENT
		$(document).on('click', '#displayAccent button', function() {
			let selectedValue = clickContextMenuItem(this);
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "accent",
				value: selectedValue.value,
			})
			$("body").attr("data-accent", selectedValue.value);
			$(`#displayAccent button`).removeClass(`picked`)
			$(`#displayAccent [data-value="${selectedValue.value}"]`).addClass("picked");
		});
	
	//SET TEXT SIZE
		$(document).on('click', '#displayTextSize button', function() {
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
			$(`#displayTextSize button`).removeClass(`picked`);
			$(`[data-value="${selectedValue.value}"]`).addClass(`picked`);
		});
		
	//SET BOLD TEXT
		$(document).on('click', '#boldText', function() {
			let state = clickSwitch(this);
			if (state == "on" || state == true) {
				$("body").attr("data-textweight", "bold");
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "textWeight",
					value: "bold",
				})
			}
			if (state == "off" || state == false) {
				$("body").attr("data-textweight", "regular");
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "textWeight",
					value: "regular",
				})
			}
		});
	
	//SET FONT
		$(document).on('click', '#displayFont button', function() {
			let selectedValue = clickContextMenuItem(this);
			$("body").attr("data-font", selectedValue.value);
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textFont",
				value: selectedValue.value,
			})
			$(`#displayFont button`).removeClass(`picked`)
			
			$(`#displayFont [data-value="${selectedValue.value}"]`).addClass(`picked`);
		});
	
	//SET INCREASED CONTRAST
		$(document).on('click', '#increaseContrast', function() {
			let state = clickSwitch(this);
			if (state == "on" || state == true) {
				$("body").attr("data-contrast", "more");
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "increaseContrast",
					value: "more",
				})
			}
			if (state == "off" || state == false) {
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
		$(document).on('click', '#reduceMotion', function() {
			let state = clickSwitch(this);
			if (state == "on" || state == true) {
				document.documentElement.style.setProperty('--base-time-length', '0s');
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "reduceMotion",
					value: "on",
				})
			}
			if (state == "off" || state == false) {
				document.documentElement.style.setProperty('--base-time-length', baseTimeLength);
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "reduceMotion",
					value: "off",
				})
			}
		});
	
	//SET THEME
		function overrideOS(selection) {
			$(`body`).attr("data-os", selection);
			
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "os",
				value: selection,
			})
			
			$(`#displayTheme button`).removeClass(`picked`)
			
			switch (selection) {
				case 'default':
					$(`[data-name="default"]`).addClass(`picked`);
					break;
				case 'ios':
					$(`[data-name="ios"]`).addClass(`picked`);
					break;
				case 'macos':
					$(`[data-name="macos"]`).addClass(`picked`);
					break;
				case 'android':
					$(`[data-name="android"]`).addClass(`picked`);
					break;
				case 'windows':
					$(`[data-name="windows"]`).addClass(`picked`);
					break;
			}
		}

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
		if (options.mini == true) {
			if (getPreferenceGroup("rebar.appSettings").clickedDonationLink == false) {
				return `
					<div id="miniTipJar">
						<button data-button="close" class="translucent" id="dismiss" title="Dismiss Tips Panel" onclick="stopTipsPrompts()">${iconShapes.timesFill}</button>
						<div class="containerTipJar mini">
							<img class="spacerSingle" src="rebar/images/tips.webp" srcset="rebar/images/tips@2x.webp 2x" width="400" alt="" />
							<p class="textAlignCenter">Support ${appName} by leaving <a href="https://www.trevorkay.me/connect/" target="_blank">Trevor</a> and <a href="https://christophermuller.net" target="_blank">Chris</a> a tip. It's appreciated!</p>
							<div class="containerButtons">
								<a href="${tipsLinks.default}" target="_blank" class="noDecoration">
									<button data-button="action-fill" class="primary" onclick="stopTipsPrompts()">Donate $2</button>
								</a>
								<a href="${tipsLinks.custom}" target="_blank" class="noDecoration">
									<button data-button="action-fill" class="secondary" onclick="stopTipsPrompts()">Any Amount</button>
								</a>
							</div>
						</div>
					</div>
				`
			} else {
				return ``
			}
		} else {
			return `
				<div class="containerTipJar">
					<img class="spacerSingle" src="rebar/images/tips.webp" srcset="rebar/images/tips@2x.webp 2x" width="400" alt="" />
					<p class="textAlignCenter h5 spacerDouble">${appName} is developed by <a href="https://www.trevorkay.me/connect/" target="_blank">Trevor</a> and <a href="https://christophermuller.net" target="_blank">Chris</a>. If you'd like to show your support you can leave us a tip. It's much appreciated!</p>
					<div class="containerButtons spacerSingle">
						<a href="${tipsLinks.default}" target="_blank" class="noDecoration">
							<button data-button="action-fill" class="primary" onclick="stopTipsPrompts()">Donate $2</button>
						</a>
						<a href="${tipsLinks.custom}" target="_blank" class="noDecoration">
							<button data-button="action-fill" class="secondary" onclick="stopTipsPrompts()">Any Amount</button>
						</a>
					</div>
					<p class="textAlignCenter subtext">Prices are set in USD and payment is handled by Stripe. ${appName} does not require payment to use. If you have any issues, please contact <a href="mailto:${appEmail}?subject=Help%20with%20${appName}%20tip%20jar">Support</a>. For more information on how your data is handled please refer to the <a href="${appPrivacyPolicy}" target="_blank">Toast Studio Privacy Policy</a> and the <a href="https://stripe.com/privacy" target="_blank">Stripe Privacy Policy</a>.</p>
				</div>
			`
		}
	}
	
	function stopTipsPrompts() {
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "clickedDonationLink",
			value: "true",
		})
		
		$(`#miniTipJar`).remove()
	}
	
//HOW TO INSTALL SHEET
	function generateInstallPanel() {
		return `
			<div class="containerInstallPanel" onclick="summonHowToInstallSheet()">
				<div id="containerIcon">
					<img src="icon.png" width="120" alt="">
					<div class="icon">${iconShapes.arrowSingleDownFill}</div>
				</div>
				<div>
					<p class="excludeMargin">Learn how to install ${appName}</p>
				</div>
			</div>
		`
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
	
//ICON STYLE
	function iconList(fill, stroke) {
		return `<span class="only-ios only-macos only-android">${fill}</span>
				<span class="only-windows">${stroke}</span>`
	}
	
	function iconGripper() {
		return `<span class="only-ios">${iconShapes.chevronOutwardsVerticalFill}</span> 
				<span class="only-macos outsideToolbar">${iconShapes.chevronOutwardsVerticalFill}</span> 
				<span class="only-macos insideToolbar">${iconShapes.chevronDownwardsFill}</span> 
				<span class="only-android">${iconShapes.chevronDownwardsFill}</span> 
				<span class="only-windows">${iconShapes.chevronDownwardsStroke}</span>`
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
	
	//SAVE RECENT
	function saveRecent(options) {
		var arrayRecents = getPreferenceGroup(options.group).recent || [];
		var i = arrayRecents.indexOf(options.id);
		
		if (i !== -1) arrayRecents.splice(i, 1); //REMOVE EXISTING
		arrayRecents.unshift(options.id); //ADD TO START
		if (arrayRecents.length > options.max) arrayRecents.pop(); //ENFORCES MAX SIZE
		
		modifyPreference({
			group: options.group,
			mode: "update",
			preference: "recent",
			value: arrayRecents,
		});
	}
	
	//TOGGLE PREFERENCE ITEMS
	function togglePrefItem(options) {
		var arrayFavourites = getPreferenceGroup(options.group).favourite || [];
		var i = arrayFavourites.indexOf(options.id);
	
		if (i !== -1) {
			//REMOVE ID IF IT EXISTS
			arrayFavourites.splice(i, 1);
		} else {
			//ADD ID IF IT DOESN'T EXIST
			arrayFavourites.unshift(options.id);
		}
	
		modifyPreference({
			group: options.group,
			mode: "update",
			preference: "favourite",
			value: arrayFavourites,
		});
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
							<td data-id="${currentData.key}">
								${options.images ? `<img src="${currentData.image}" width="50" height="50" /> ` : ``}
								<div>
									${currentData.name} 
									${options.subtext ? `<p class="subtext excludeMargin">${currentData.subtext}</p>` : ``} 
									${options.badge ? `${currentData.badge}` : ``}
								</div>
							</td>
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
			$(`#${options.target}`).append(`<div class="chartStats" data-orientation="${options.orientation}"></div>`)
		
		
		//APPEND THE BARS
			$.each(options.data, function(key,val) {
				let percentageValue = Math.round((val[1] / options.max) * 100)
				
				$(`#${options.target} .chartStats`).append(`
					<span data-value="${val[0]}">
						<label for="${val[0]}"><div class="textBold">${val[0]}</div>${val[1]}</label>
						<div class="track">
							<div class="bar" id="${val[0]}" style="--stat-bar-length: ${percentageValue}%;">
						</div>
					</span>
				`)
			});
	}
	
//SHORTCUT KEYS
	$(document).keyup(function(e) {
		let checkFocus = (document.activeElement === document.getElementsByTagName('input')[0])
		
		if (checkFocus == false) {
			switch (e.key) {
				case 'D':
					if (getPreferenceGroup("rebar.appSettings").debug == false) {
						modifyPreference({
							group: "rebar.appSettings",
							mode: "update",
							preference: "debug",
							value: true,
						})
					} else {
						modifyPreference({
							group: "rebar.appSettings",
							mode: "update",
							preference: "debug",
							value: false,
						})
					}
					
					location.reload()
					break;
			}
		}
	});