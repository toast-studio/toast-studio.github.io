//REBAR 3.1
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
			icon: `<img src="icon.png" alt="" />`,
			message: `Learn how to install ${appName}`,
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
		const installContent = {
			default: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
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
							<div class="icon">${generateIcon(iconShapes.arrowSingleDown, 'fill')}</div>
						</div>
					
						<h2 class="textAlignCenter">Install ${appName} with these browsers</h2>
						<p class="textAlignCenter">${appName} can be installed to your Dock, Taskbar, and Home Screen. It will launch like any other app and work offline.</p>
					</div>
					<div id="containerBrowsersList" class="spacerDouble">
						<div onclick="contentInstallSheet('brave')">
							<picture>
								<source
									media="(prefers-color-scheme: dark)"
									srcset="rebar/images/browser-brave-dark.webp, rebar/images/browser-brave-dark@2x.webp 2x"
								/>
								<img
									src="rebar/images/browser-brave.webp"
									srcset="rebar/images/browser-brave@2x.webp 2x"
									alt=""
								/>
							</picture>
							<p class="excludeMargin textAlignCenter">Brave</p>
						</div>
						<div onclick="contentInstallSheet('chrome')">
							<picture>
								<source
									media="(prefers-color-scheme: dark)"
									srcset="rebar/images/browser-chrome-dark.webp, rebar/images/browser-chrome-dark@2x.webp 2x"
								/>
								<img
									src="rebar/images/browser-chrome.webp"
									srcset="rebar/images/browser-chrome@2x.webp 2x"
									alt=""
								/>
							</picture>
							<p class="excludeMargin textAlignCenter">Chrome</p>
						</div>
						<div onclick="contentInstallSheet('edge')">
							<picture>
								<source
									media="(prefers-color-scheme: dark)"
									srcset="rebar/images/browser-edge-dark.webp, rebar/images/browser-edge-dark@2x.webp 2x"
								/>
								<img
									src="rebar/images/browser-edge.webp"
									srcset="rebar/images/browser-edge@2x.webp 2x"
									alt=""
								/>
							</picture>
							<p class="excludeMargin textAlignCenter">Edge</p>
						</div>
						<div onclick="contentInstallSheet('firefox')">
							<picture>
								<source
									media="(prefers-color-scheme: dark)"
									srcset="rebar/images/browser-firefox-dark.webp, rebar/images/browser-firefox-dark@2x.webp 2x"
								/>
								<img
									src="rebar/images/browser-firefox.webp"
									srcset="rebar/images/browser-firefox@2x.webp 2x"
									alt=""
								/>
							</picture>
							<p class="excludeMargin textAlignCenter">Firefox</p>
						</div>
						<div onclick="contentInstallSheet('safari')">
							<picture>
								<source
									media="(prefers-color-scheme: dark)"
									srcset="rebar/images/browser-safari-dark.webp, rebar/images/browser-safari-dark@2x.webp 2x"
								/>
								<img
									src="rebar/images/browser-safari.webp"
									srcset="rebar/images/browser-safari@2x.webp 2x"
									alt=""
								/>
							</picture>
							<p class="excludeMargin textAlignCenter">Safari</p>
						</div>
						<div onclick="contentInstallSheet('samsunginternet')">
							<img src="rebar/images/browser-samsunginternet.webp" srcset="rebar/images/browser-samsunginternet@2x.webp 2x" alt="" />
							<p class="excludeMargin textAlignCenter">Samsung Internet</p>
						</div>
					</div>
					<small class="textAlignCenter">If you have any issues please contact <a href="mailto:${appEmail}?subject=Help%20with%20installing%20${appName}">Support</a>.</small>
				</div>
			`,
			brave: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<picture>
							<source
								media="(prefers-color-scheme: dark)"
								srcset="rebar/images/browser-brave-dark.webp, rebar/images/browser-brave-dark@2x.webp 2x"
							/>
							<img
								src="rebar/images/browser-brave.webp"
								srcset="rebar/images/browser-brave@2x.webp 2x"
								alt=""
								width="42"
							/>
						</picture>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</div>
				
				<div class="scrollview inset-T" id="installinstructions">
					<div class="containerAccordion spacerSingle" data-accordiongroup="brave">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.android, 'fill')}
								<h3>Android</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.ellipsesVerticalSlim, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installBraveMobile, 'stroke')}</span> <span class="textBold alwaysAccent">Add to Home screen</span></li>
										<li>Tap <span class="textBold alwaysAccent">Install</span></li>
									</ol>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="brave">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.imac, 'stroke')}
								<h3>macOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installChromeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="brave">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.windows, 'fill')}
								<h3>Windows</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installChromeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
								</div>
							</div>
						</section>
					</div>
					
					${
						insertBanner({
							type: 'warning',
							content: 'Installation is not available on iOS and iPadOS',
							icon: false,
							size: "large",
						})
					}
				</div>
			`,
			chrome: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<picture>
							<source
								media="(prefers-color-scheme: dark)"
								srcset="rebar/images/browser-chrome-dark.webp, rebar/images/browser-chrome-dark@2x.webp 2x"
							/>
							<img
								src="rebar/images/browser-chrome.webp"
								srcset="rebar/images/browser-chrome@2x.webp 2x"
								alt=""
								width="42"
							/>
						</picture>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</div>
				
				<div class="scrollview inset-T" id="installinstructions">
					<div class="containerAccordion spacerSingle" data-accordiongroup="chrome">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.iphoneFacePortrait, 'stroke')}
								<h3>iOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="chrome">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.ipadFacePortrait, 'stroke')}
								<h3>iPadOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iPadOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="chrome">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.android, 'fill')}
								<h3>Android</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.ellipsesVerticalSlim, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installChromeMobile, 'stroke')}</span> <span class="textBold alwaysAccent">Install app</span></li>
										<li>Tap <span class="textBold alwaysAccent">Install</span></li>
									</ol>
									<small>iPadOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="chrome">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.imac, 'stroke')}
								<h3>macOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installChromeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
									<small>Chrome 39 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="chrome">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.windows, 'fill')}
								<h3>Windows</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installChromeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
									<small>Chrome 39 onwards</small>
								</div>
							</div>
						</section>
					</div>
				</div>
			`,
			edge: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<picture>
							<source
								media="(prefers-color-scheme: dark)"
								srcset="rebar/images/browser-edge-dark.webp, rebar/images/browser-edge-dark@2x.webp 2x"
							/>
							<img
								src="rebar/images/browser-edge.webp"
								srcset="rebar/images/browser-edge@2x.webp 2x"
								alt=""
								width="42"
							/>
						</picture>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</div>
				
				<div class="scrollview inset-T" id="installinstructions">
					<div class="containerAccordion spacerSingle" data-accordiongroup="edge">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.iphoneFacePortrait, 'stroke')}
								<h3>iOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="edge">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.ipadFacePortrait, 'stroke')}
								<h3>iPadOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iPadOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="edge">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.android, 'fill')}
								<h3>Android</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.ellipsesHorizontalRoundedRectangle, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installEdgeMobile, 'stroke')}</span> <span class="textBold alwaysAccent">Add to phone</span></li>
										<li>Tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>Edge 79 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="edge">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.imac, 'stroke')}
								<h3>macOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installEdgeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
									<small>Edge 79 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="edge">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.windows, 'fill')}
								<h3>Windows</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installEdgeDesktop, 'stroke')}</span> button</li>
										<li>Click <span class="textBold alwaysAccent">Install</span></li>
									</ol>
									<small>Edge 79 onwards</small>
								</div>
							</div>
						</section>
					</div>
				</div>
			`,
			firefox: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<picture>
							<source
								media="(prefers-color-scheme: dark)"
								srcset="rebar/images/browser-firefox-dark.webp, rebar/images/browser-firefox-dark@2x.webp 2x"
							/>
							<img
								src="rebar/images/browser-firefox.webp"
								srcset="rebar/images/browser-firefox@2x.webp 2x"
								alt=""
								width="42"
							/>
						</picture>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</div>
				
				<div class="scrollview inset-T" id="installinstructions">
					<div class="containerAccordion spacerSingle" data-accordiongroup="firefox">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.iphoneFacePortrait, 'stroke')}
								<h3>iOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.barsHorizontal, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> <span class="textBold alwaysAccent">Share</span></li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="firefox">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.ipadFacePortrait, 'stroke')}
								<h3>iPadOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.barsHorizontal, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> <span class="textBold alwaysAccent">Share</span></li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iPadOS 16.4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="firefox">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconLogos.android, 'fill')}
								<h3>Android</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.ellipsesVerticalSlim, 'stroke')}</span> button</li>
										<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.installFirefoxMobile, 'stroke')}</span> <span class="textBold alwaysAccent">Install</span></li>
										<li>Tap <span class="textBold alwaysAccent">Add to home screen</span></li>
									</ol>
								</div>
							</div>
						</section>
					</div>
					
					${
						insertBanner({
							type: 'warning',
							content: 'Installation is not available on macOS and Windows',
							icon: false,
							size: "large",
						})
					}
				</div>
			`,
			safari: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<picture>
							<source
								media="(prefers-color-scheme: dark)"
								srcset="rebar/images/browser-Safari-dark.webp, rebar/images/browser-Safari-dark@2x.webp 2x"
							/>
							<img
								src="rebar/images/browser-Safari.webp"
								srcset="rebar/images/browser-Safari@2x.webp 2x"
								alt=""
								width="42"
							/>
						</picture>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<span data-function="closedialog" title="Dismiss" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</div>
				
				<div class="scrollview inset-T" id="installinstructions">
					<div class="containerAccordion spacerSingle" data-accordiongroup="safari">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.iphoneFacePortrait, 'stroke')}
								<h3>iOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iOS 1.1.3 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="safari">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.ipadFacePortrait, 'stroke')}
								<h3>iPadOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}</span> button</li>
										<li>Tap <span class="textBold alwaysAccent">Add to Home Screen</span></li>
										<li>Set a name and tap <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>iPadOS 4 onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					<div class="containerAccordion spacerSingle" data-accordiongroup="safari">
						<div class="headerAccordion headerSection">
							<div class="containerContent">
								${generateIcon(iconHardware.imac, 'stroke')}
								<h3>macOS</h3>
							</div>
							<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
						</div>
						<section class="containerAccordionContents">
							<div class="wrapper">
								<div class="containerSection">
									<ol>
										<li>Click the <span class="textBold alwaysAccent">File</span> menu</li>
										<li>Click <span class="textBold alwaysAccent">Add to Dock&hellip;</span></li>
										<li>Set a name and click <span class="textBold alwaysAccent">Add</span></li>
									</ol>
									<small>macOS 14 Sonoma onwards</small>
								</div>
							</div>
						</section>
					</div>
					
					${
						insertBanner({
							type: 'warning',
							content: 'Installation is not available on visionOS',
							icon: false,
							size: "large",
						})
					}
				</div>
			`,
			samsunginternet: `
				<div class="containerToolbar layoutSheet" id="toolbarInstall">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem" onclick="contentInstallSheet('default')">Other Browsers</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<img src="rebar/images/browser-samsunginternet.webp" srcset="rebar/images/browser-samsunginternet@2x.webp 2x" alt="" width="42" />
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
							<li>Tap the <span class="installShareIcon alwaysAccent">${generateIcon(iconInterfaceElements.barsHorizontal, 'stroke')}</span> button</li>
							<li>Tap <span class="installShareIcon alwaysAccent">${generateIcon(iconShapes.plus, 'stroke')}</span> <span class="textBold alwaysAccent">Add page to</span></li>
							<li>Tap <span class="textBold alwaysAccent">Home screen</span></li>
							<li>Tap <span class="textBold alwaysAccent">Add to home screen</span></li>
						</ol>
					</div>
				</div>
			`
		}
		
		$(`#sheetInstallContent`).remove();
		$(`#sheetInstall`).append(`<div id="sheetInstallContent">${installContent[type]}</div>`)
	}
	
	function summonWhatsNewSheet() {
		const releaseList = appReleaseNotes.map((item) => `<li>${item}</li>`).join("")
		
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
							<span id="buttonSheetDismiss" data-function="closedialog" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="headerWhatsNew">
						<div class="version">
							<h1 class="excludePadding">${appVersion}</h1>
						</div>
						<h2 class="excludePadding">What's New</h2>
					</div>
					<ul id="releaseNotes" class="excludePadding">
						${releaseList}
					</ul>
				</div>
			`,
		})
	}
		
	//ACTIVATE FUNCTIONS
		function writeAppSettings() {
			const appSettings = getPreferenceGroup("rebar.appSettings")
			
			const contrastValue = queryIncreasedContrast 
				? "more" 
				: appSettings.increaseContrast
				
			const osValue = appSettings.os == "default" 
				? grabOS() 
				: appSettings.os
			
			$("body").attr("data-theme", appSettings.appearance)
					.attr("data-accent", appSettings.accent)
					.attr("data-textweight", appSettings.textWeight)
					.attr("data-font", appSettings.textFont)
					.attr("data-textsize", appSettings.dynamicTypeSize.value)
					.attr("data-contrast", contrastValue)
					.attr("data-device", grabOS())
					.attr("data-os", osValue);
			
			document.documentElement.style.setProperty(
				'--base-font-size', 
				dynamicTypeSizes[appSettings.dynamicTypeSize.value]
			);
			
			//REDUCED MOTION
			setTimeLength();
			
			//META THEME TAG
			setMetaTheme();
		}
		
		function showTipsPrompt() {
			// CONSTANTS
			const appSettings = getPreferenceGroup("rebar.appSettings")
			let countOpenings = appSettings.openings;
			const tipsPromptNumber = [4, 8, 14]
			
			//EXIT CONDITIONS
			if (promptForTips !== true) return; //->
			if (appSettings.clickedDonationLink === true) return; //->
			
			//UPDATE STORED COUNT
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "openings",
				value: ++countOpenings,
			})
			
			//EXIT CONDITION
			if (!tipsPromptNumber.includes(countOpenings)) return; //->
			
			//DISPLAY TIPS PROMPT
			summonSheet({
				type: "smallsheet",
				backing: "dark",
				theme: false,
				id: false,
				content: `
					<button data-button="close" class="translucent" data-function="closedialog" title="Dismiss" autofocus>${generateIcon(iconShapes.times, 'fill')}</button>
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
		
		function versionChange() {
			//CONSTANTS
			const storedVersion = localStorage.getItem("version");
			
			//SET LOCAL STORAGE VERSION NUMBER
			localStorage.setItem("version", appVersion);
			
			//EXIT CONDITIONS
			if (storedVersion == null) return; //->
			if (storedVersion === appVersion) return; //->
		
			//SHOW WHAT'S NEW IF UPDATED VERSION
			summonWhatsNewSheet();
		}
		
		$(document).ready(function(){
			//CONSTANTS
			const appSettings = getPreferenceGroup("rebar.appSettings")
			
			//ADD ANY NEW REBAR SETTINGS FOR AN ALREADY INSTALLED APP
			modifyPreference({
				group: "rebar.appSettings",
				mode: "append",
			})
			
			//FIRST RUN
			if (appSettings.firstRun != "complete") {
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
			if (appSettings.os == "default") {
				modifyPreference({
					group: "rebar.appSettings",
					mode: "update",
					preference: "os",
					value: grabOS(),
				})
			}
			
			//WRITE APP SETTINGS TO BODY
			writeAppSettings()
				
			//VERSION
			versionChange()
			
			//TIPS PROMPT
			showTipsPrompt()
		});
	
//SET TIME LENGTH
	function setTimeLength() {
		//CONSTANTS
		const reduceMotionSetting = getPreferenceGroup("rebar.appSettings").reduceMotion;
		const shouldReduceMotion = queryReducedMotion || reduceMotionSetting === "on" || reduceMotionSetting === true;
		const timeLength = shouldReduceMotion ? "0s" : baseTimeLength;
		
		//SET TIME
		document.documentElement.style.setProperty("--base-time-length", timeLength);
	}
	
	function tempAnimationStop() {
		document.documentElement.style.setProperty('--base-time-length', '0s');
		setTimeout(function(){ setTimeLength(); }, 100);
	}

//GRAB URL PARAMETER
	function grabURLParameter() {
		//This function will only return the first parameter set
		
		//CONSTANTS
		const urlSearchParams = new URLSearchParams(window.location.search);
		const firstEntry = urlSearchParams.entries().next().value;
		
		//EXIT IF NO VALUES
		if (!firstEntry) {
			return {
				type: "deeplink",
				query: "",
				source: ""
			}; //->
		}
		
		//SET VARIABLES
		const [query, source] = firstEntry;
		
		//EXIT WITH VALUES
		return {
			type: "deeplink",
			query,
			source
		}; //->
	}

//GRAB OS
	function grabOS() {
		//CONSTANTS
		const platform = navigator.userAgentData?.platform || navigator.platform || "";
		const hasTouch = navigator.maxTouchPoints > 1;
		
		//PLATFORM CHECKS
		if (platform === "MacIntel" && hasTouch) return "ios"; //->
		if (platform === "iPhone" || platform === "iPad" || platform === "iPod") return "ios"; //->
		if (platform.startsWith("Mac") || platform === "macOS") return "macos"; //->
		if (platform.startsWith("Win")) return "windows"; //->
		if (/Android/i.test(navigator.userAgent)) return "android"; //->
		
		//UNKNOWN PLATFORM FOUND
		return null;
	}
	
	function storedOS() {
		return getPreferenceGroup("rebar.appSettings").os
	}

//SUMMON HOW TO INSTALL SHEET
	$(document).on('click', '#buttonInstallApp', function() {
		dismissDialog();
		setTimeout(function(){ summonHowToInstallSheet(); }, 500);
	});
	
//DISABLE ANIMATIONS WHILE RESIZING
	let lastW = window.innerWidth
	let lastH = window.innerHeight
	let id
	
	$(window).on('resize', () => {
		const w = window.innerWidth
		const h = window.innerHeight
		
		//IGNORE FALSE POSITIVES
		if (w === lastW && h === lastH) return
		
		lastW = w
		lastH = h
		
		clearTimeout(id)
		
		document.documentElement.style.setProperty('--base-time-length', '0s')
		id = setTimeout(setTimeLength, 500)
	})

//CONTEXT MENUS
//These functions will be removed when Anchor Positioning is supported in transformed parent containers

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
	function clickSwitch(element) {
		return $(element).prop("checked");
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
		window.addEventListener("popstate", function() {
			//CONSTANTS
			const url = grabURLParameter();
			const isTopLevelRoute = url.query.length == 0 || url.query.length == 1;
			const routeFunction = window["route" + url.query];
			
			//EXIT TO TOP LEVEL
			if (isTopLevelRoute || typeof routeFunction !== "function") {
				window[topLevelRoute]({ modifier: topLevelModifier, navtype: "deeplink" });
				return;
			}
			
			//NAVIGATE TO URL IN STACK
			routeFunction({ modifier: url.source, navtype: "deeplink" });
		});
		
	//TABS
		function controllerTab(options) {
			//CONSTANTS
			const $activeTab = $(`[data-name="${options.modifier}"]`);
			const $tabGroup = $activeTab.parent();
			
			//STOP IF THE TAB DOES NOT EXIST
			if ($activeTab.length === 0) return; //->
			
			//CLEAR THE CONNECTED VIEW CONTAINER
			$tabGroup.next().empty();
			
			//UPDATE TAB STATES
			$activeTab.siblings().removeClass("picked");
			$activeTab.addClass("picked");
			
			//ONLY SWAP ICON VARIANTS FOR CHIP SEGMENTS
			if ($tabGroup.attr("data-segments") === "chip") {
				$tabGroup.find("svg").attr("data-variant", "stroke");
				$activeTab.find("svg").attr("data-variant", "fill");
			}
			
			//UPDATE THE URL IF REQUIRED
			if (options.updateURL === true) {
				window.history.pushState(null, null, `?${options.route}=${options.modifier}`);
			}
		}
		
//COLLAPSE ASIDE BUTTONS
	$(document).on('click', 'button.collapseAside', function() {
		$(".containerApp").toggleClass("fullWidth");
	});
		
//DIALOGS
	//OPEN
		function showDialog() {
			$('dialog')[0].addEventListener('cancel', (event) => {
				event.preventDefault();
			});
			
			$('dialog')[0].showModal();
		}
		
		//SHEET
			function summonSheet(options) {
				//BUILD OPTIONAL ATTRIBUTES
				const themeAttribute = options.theme ? ` data-theme="${options.theme}"` : "";
				
				//INSERT DIALOG
				$("body").prepend(`
					<dialog data-type="${options.type}" data-backing="${options.backing}"${themeAttribute} id="${options.id}">
						${options.content}
					</dialog>
				`);
				
				//OPEN DIALOG
				showDialog();
			}
		
		//LIGHTBOX
			function summonLightbox(options) {
				$("body").prepend(`
					<dialog data-type="lightbox" data-backing="${options.backing}" id="${options.id}">
						<button data-button="close" class="translucent" title="Dismiss" autofocus>${generateIcon(iconShapes.times, 'fill')}</button>
						${options.content}
					</dialog>
				`);
				showDialog();
			}
			
		//ALERT
			function summonAlert(options) {
				$("body").prepend(`
					<dialog data-type="alert" data-backing="${options.backing}" id="${options.id}" class="material-liquidglass-thick">
						<div class="description">
							${options.icon ? `<span class="${options.iconType}">${options.icon}</span>` : ``}
							${options.title ? `<h5 class="excludePadding">${options.title}</h5>` : ``}
							${options.message ? `<p class="excludeMargin">${options.message}</p>` : ``}
							${options.customContent ? options.customContent : ``}
						</div>
						<div class="buttons">
							${options.buttonPrimary}
							${options.buttonSecondary ? options.buttonSecondary : ``}
							${options.buttonTertiary ? options.buttonTertiary : ``}
						</div>
					</dialog>
				`);
				
				showDialog();
			}
		
		//TOAST
			function summonToast(options) {
				//BUILD OPTIONAL CLOSE BUTTON
				const closeButton = options.closeButton
					? `<button class="buttonToastDismiss excludePadding" data-function="closedialog" title="Dismiss" autofocus>${generateIcon(iconShapes.timesCircle, 'duo')}</button>`
					: "";
				
				//BUILD TOAST MARKUP
				const toastMarkup = `
					<dialog data-type="toast" data-backing="${options.backing}" class="material-liquidglass-thick material-acrylic">
						<div class="containerToastContents" id="${options.id}">
							${options.icon || ""}
							<p>${options.message}</p>
						</div>
						${closeButton}
					</dialog>
				`;
				
				//INSERT DIALOG
				$("body").prepend(toastMarkup);
				
				//OPEN DIALOG
				showDialog();
			}
	
	//CLOSE
	//This code will be deprecated when light-dismiss on dialogs is supported
		function dismissDialog() {
			//CONSTANTS
			const $dialog = $('dialog:first-child');
			
			//REVERSAL ANINMATION
			$dialog.addClass('hide');
			
			if ($('dialog').length === 1) {
				$(".containerApp").removeClass("recede");
			}
			
			//REMOVE FROM DOM
			setTimeout(function() {
				$dialog[0].close();
				$dialog.remove();
			}, 300);
		}
		
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
		const shortcutGroups = Object.entries(shortcutKeys).map(function([key, value]) {
			return `
				<h2 class="headerList">${value.label}</h2>
				<section class="containerSection excludePadding" data-shortcut-group="${key}">
					${value.shortcutItems.map(function(item) {
						return `
							<div data-button="item-flat">
								<div class="label">
									<span>${item.name}</span>
								</div>
								<kbd>${item.key}</kbd>
							</div>
						`; //->
					}).join("")}
				</section>
			`; //->
		}).join("");
		
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
							<span id="buttonSheetDismiss" data-function="closedialog" autofocus>${insertCancelButton()}</span>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerItemList inset noBackgroundColor excludePadding">
						${shortcutGroups}
					</div>
				</div>
			`,
		});
	}
	
//ACCORDIONS
	//NOT EXCLUSIVE ACCORDIONS
	$(document).on('click', '.containerAccordion:not([data-accordiongroup]) .headerAccordion', function() {
		$(this).closest(".containerAccordion").toggleClass(`active`);
	});
	
	//EXCLUSIVE ACCORDIONS
	$(document).on("click", "[data-accordiongroup] .headerAccordion", function() {
		const accordion = $(this).closest(".containerAccordion");
		const group = accordion.data("accordiongroup");
		
		$(`[data-accordiongroup="${group}"]`).not(accordion).removeClass("active");
		accordion.toggleClass("active");
	});
	
	//OPEN ON LARGE SCREENS
	function openAccordionsLargeScreens(minWidth) {
		const isLargeScreen = $(window).width() >= minWidth;
		
		$(".largeOpen").toggleClass("active", isLargeScreen);
	}
	
//SEARCH
	function search(options) {
		const selector = options.inputSelector || `#${options.inputID}`;
		
		$(document).off("input.search", selector).on("input.search", selector, function() {
			//GET ACTIVE INPUT
			const input = this;
			const enteredText = input.value.toUpperCase();
			
			//GET RELATED SEARCH INPUTS
			const searchInputs = document.querySelectorAll(selector);
			
			//GET SEARCH CONTAINER
			const parentContainer = document.getElementById(options.parentID);
			const items = parentContainer.getElementsByClassName(options.itemClass);
			const $parentContainer = $(`#${options.parentID}`);
			const $searchWrapper = $parentContainer.parent();
			
			//SYNC OTHER SEARCH BOXES WITHOUT SHOWING THEIR CLEAR BUTTONS
			searchInputs.forEach(searchInput => {
				if (searchInput !== input) {
					searchInput.value = input.value;
					$(searchInput).next().removeClass("active");
				}
			});
			
			//SET THE CONTAINER SCROLL BACK TO THE TOP
			parentContainer.scrollTop = 0;
			
			//HIDE AND SHOW THE ACTIVE CLEAR SEARCH BUTTON ONLY
			if (enteredText.length === 0) {
				$(input).next().removeClass("active");
				$parentContainer.removeClass("activeSearch");
			} else {
				$(input).next().addClass("active");
				$parentContainer.addClass("activeSearch");
			}
			
			//FILTER THE LIST BASED ON THE SEARCH INPUT
			for (let i = 0; i < items.length; i++) {
				const valueElement = items[i].getElementsByClassName(options.valueClass)[0];
				const textValue = valueElement.textContent || valueElement.innerText;
				const hit = textValue.toUpperCase().includes(enteredText);
				
				$(items[i])
					.toggle(hit)
					.toggleClass("itemDisplayed", hit)
					.toggleClass("itemHidden", !hit);
			}
			
			//DISPLAY BLANK STATE WHEN THERE ARE NO MATCHES
			if ($parentContainer.find(".itemDisplayed").length > 0) {
				//MATCHES FOUND
				$searchWrapper.find(".containerBlankState").remove();
				$searchWrapper.removeClass("noResults");
			} else {
				//NO MATCHES
				$searchWrapper.find(".containerBlankState").remove();
				$searchWrapper.addClass("noResults");
				$parentContainer.append(generateBlankState({
					icon: options.emptyIcon,
					title: options.emptyMessage,
				}));
			}
		});
	}
	
	function searchTable(options) {
		//GET ACTIVE INPUT
		const selector = options.inputSelector || `#${options.inputID}`;
		const input = options.enteredText || document.querySelector(selector);
		const parent = document.getElementById(options.parentID);
		
		//STOP IF REQUIRED ELEMENTS ARE MISSING
		if (!input || !parent) {
			return;
		}
		
		//GET ELEMENTS
		const $input = $(input);
		const $parent = $(parent);
		const $wrapper = $parent.parent();
		const searchValue = input.value.toLowerCase();
		const searchInputs = document.querySelectorAll(selector);
		
		//GET TABLE ROWS WITHIN THE TARGET PARENT
		const $rows = $parent.find("tr").not("thead tr");
		
		//RESET SCROLL POSITION
		parent.scrollTop = 0;
		
		//SYNC OTHER SEARCH BOXES WITHOUT SHOWING THEIR CLEAR BUTTONS
		searchInputs.forEach(searchInput => {
			if (searchInput !== input) {
				searchInput.value = input.value;
				$(searchInput).next().removeClass("active");
			}
		});
		
		//TOGGLE ACTIVE CLEAR BUTTON ONLY
		$input.next().toggleClass("active", searchValue.length > 0);
		
		//FILTER ROWS
		$rows.each(function() {
			const isVisible = $(this).text().toLowerCase().includes(searchValue);
			
			$(this)
				.toggle(isVisible)
				.toggleClass("itemDisplayed", isVisible)
				.toggleClass("itemHidden", !isVisible);
		});
		
		//REMOVE EXISTING BLANK STATE
		$wrapper.find(".containerBlankState").remove();
		
		//CHECK FOR MATCHES
		const hasMatches = $rows.filter(":visible").length > 0;
		$wrapper.toggleClass("noResults", !hasMatches);
		
		//SHOW BLANK STATE
		if (!hasMatches) {
			$wrapper.prepend(
				generateBlankState({
					icon: options.emptyIcon,
					title: options.emptyMessage,
				})
			);
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
		//CONSTANTS
		const selectedOption = $(selectedItem);
		const optionAlreadyPicked = selectedOption.hasClass("picked");
		const container = selectedOption.parent();
		const maxCount = container.data("max");
		const selectionCount = container.children(".picked").length;
		
		//UNSELECT IF ALREADY PICKED
		if (optionAlreadyPicked) {
			selectedOption.removeClass("picked");
			return;
		}
		
		//LIMIT SELECTION TO THE MAX COUNT AND RESET IF NEEDED
		if (maxCount != "any") {
			if (selectionCount >= maxCount) {
				container.children(".picked").removeClass("picked");
			}
		}
		
		//SELECT NEW OPTION
		selectedOption.addClass("picked");
	}
	
	//RETRIEVE PICKED ITEMS
	function getSelectionGridValues(settingKey) {
		//RETURN EMPTY ARRAY IF NO SETTING KEY WAS PROVIDED
		if (!settingKey) return []; //->
		
		//GET PICKED ITEMS FOR THIS SETTING GROUP
		const pickedItems = $(`[data-setting="${settingKey}"] [data-value].picked`);
		
		//RETURN THEIR DATA VALUES
		return pickedItems.get().map(function(item) {
			return $(item).data("value"); //->
		});
	}
	
	//PLACE PICKED ITEMS WITHIN THEIR GROUPS
	function getSelectionGridGroups(groups) {
		//CREATE FILTER OBJECT
		const filters = {};
		
		//LOOP THROUGH EACH GROUP KEY
		groups.forEach(function(groupKey) {
			const selectedValues = getSelectionGridValues(groupKey);
			
			//ONLY SAVE GROUPS THAT HAVE SELECTED VALUES
			if (selectedValues.length > 0) {
				filters[groupKey] = selectedValues;
			}
		});
		
		//RETURN GROUPED FILTERS
		return filters; //->
	}
	
//DATA HANDLING
	//FILTERING
		const FILTER_METHODS = {
			is: {
				args: { type: 'scalar', count: 1 },
				field: 'scalar',
				test: (value, [expected]) => value === expected
			},
			isNot: {
				args: { type: 'scalar', count: 1 },
				field: 'scalar',
				test: (value, [expected]) => value !== expected
			},
			isOneOf: {
				args: { type: 'scalarList', allowEmpty: true },
				field: 'scalar',
				test: (value, [values]) => values.includes(value)
			},
			isNotOneOf: {
				args: { type: 'scalarList', allowEmpty: false },
				field: 'scalar',
				test: (value, [values]) => !values.includes(value)
			},
			isBetween: {
				args: { type: 'numberRange' },
				field: 'number',
				test: (value, [min, max]) => value >= min && value <= max
			},
			fromMin: {
				args: { type: 'number', count: 1 },
				field: 'number',
				test: (value, [min]) => value >= min
			},
			aboveMin: {
				args: { type: 'number', count: 1 },
				field: 'number',
				test: (value, [min]) => value > min
			},
			toMax: {
				args: { type: 'number', count: 1 },
				field: 'number',
				test: (value, [max]) => value <= max
			},
			belowMax: {
				args: { type: 'number', count: 1 },
				field: 'number',
				test: (value, [max]) => value < max
			},
			includes: {
				args: { type: 'scalar', count: 1 },
				field: 'array',
				test: (value, [expected]) => value.includes(expected)
			},
			includesAny: {
				args: { type: 'scalarList', allowEmpty: false },
				field: 'array',
				test: (value, [values]) => values.some(item => value.includes(item))
			},
			includesAll: {
				args: { type: 'scalarList', allowEmpty: false },
				field: 'array',
				test: (value, [values]) => values.every(item => value.includes(item))
			},
			includesNone: {
				args: { type: 'scalarList', allowEmpty: false },
				field: 'array',
				test: (value, [values]) => !values.some(item => value.includes(item))
			},
			contains: {
				args: { type: 'contains' },
				field: 'string',
				test: (value, [text, options = {}]) => stringIncludes(value, text, options)
			},
			doesNotContain: {
				args: { type: 'contains' },
				field: 'string',
				test: (value, [text, options = {}]) => !stringIncludes(value, text, options)
			},
			passes: {
				args: { type: 'function' },
				field: 'any'
			},
			exists: {
				args: { type: 'none' },
				field: 'presence',
				test: value => !isUnavailable(value)
			},
			isEmpty: {
				args: { type: 'none' },
				field: 'presence',
				test: isEmptyValue
			},
			isNotEmpty: {
				args: { type: 'none' },
				field: 'presence',
				test: value => !isEmptyValue(value)
			}
		};
		
		function dataFilter(data, where) {
			if (arguments.length > 1) return runLegacyDataFilter(data, where);
			return createDataFilterBuilder(data);
		}
		
		function createDataFilterBuilder(data) {
			const conditions = [];
			let current = null;
			let gate = null;
			let nextConditionId = 1;
		
			const builder = {
				when,
				where,
				whereKey,
				treatAs,
				results
			};
		
			Object.keys(FILTER_METHODS).forEach(method => {
				builder[method] = (...args) => addCondition(method, args);
			});
		
			return builder;
		
			function when(condition) {
				finalizeCurrent();
				if (gate) warn(`dataFilter: previous .when() was overwritten before a filter condition was added.`);
				if (arguments.length !== 1) {
					warn(`dataFilter: .when() expected exactly one condition.`);
					gate = { active: false };
					return builder;
				}
				gate = { active: !!condition };
				return builder;
			}
		
			function where(path) {
				finalizeCurrent();
				const active = consumeGate();
				const invalid = arguments.length !== 1 || typeof path !== 'string' || path.length === 0;
				if (active && invalid) warn(`dataFilter: .where() expected one non-empty string path.`);
				current = { active, invalid, path, useKey: false, treatAs: [] };
				return builder;
			}
		
			function whereKey() {
				finalizeCurrent();
				const active = consumeGate();
				if (active && arguments.length !== 0) warn(`dataFilter: .whereKey() does not take arguments.`);
				current = { active, invalid: false, path: '$key', useKey: true, treatAs: [] };
				return builder;
			}
		
			function treatAs(matchValue, replacement) {
				if (!current) {
					if (!gate || gate.active) warn(`dataFilter: .treatAs() must follow .where() or .whereKey().`);
					return builder;
				}
				if (!current.active) return builder;
				if (arguments.length !== 2) {
					warn(`dataFilter: .treatAs() expected exactly two arguments.`);
					return builder;
				}
				current.treatAs.push({ matchValue, replacement });
				return builder;
			}
		
			function addCondition(method, args) {
				if (!current) {
					if (gate) {
						const active = consumeGate();
						if (!active) return builder;
					}
					warn(`dataFilter: .${method}() must follow .where() or .whereKey().`);
					return builder;
				}
		
				const field = current;
				current = null;
				if (!field.active) return builder;
		
				const validationError = field.invalid ? null : validateArgs(method, args);
				if (validationError) warn(validationError);
		
				conditions.push({
					id: nextConditionId++,
					invalid: field.invalid || !!validationError,
					method,
					path: field.path,
					useKey: field.useKey,
					args: validationError ? [] : args,
					treatAs: validationError ? [] : field.treatAs.slice()
				});
				return builder;
			}
		
			function results() {
				finalizeCurrent();
				if (gate) {
					warn(`dataFilter: .when() has no filter condition.`);
					gate = null;
				}
				return runChainDataFilter(data, conditions);
			}
		
			function finalizeCurrent() {
				if (!current) return;
				if (current.active) warn(`dataFilter: .where("${formatPath(current)}") has no condition.`);
				current = null;
			}
		
			function consumeGate() {
				if (!gate) return true;
				const active = gate.active;
				gate = null;
				return active;
			}
		
			function warn(message) {
				console.warn(message);
			}
		}
		
		function runChainDataFilter(data, conditions) {
			const warnState = new Set();
			return filterData(data, warnState, (entryKey, row) =>
				conditions.every(condition => evaluateCondition(condition, row, entryKey, warnState))
			);
		}
		
		function runLegacyDataFilter(data, where) {
			const warnState = new Set();
			let commands = where;
		
			if (!isPlainObject(commands)) {
				warnOnce(warnState, 'legacy-where', `dataFilter: legacy filter commands must be an object. Using an empty filter.`);
				commands = {};
			}
		
			return filterData(data, warnState, (entryKey, row) =>
				Object.entries(commands).every(([path, criterion]) => {
					const fieldValue = path === '$key' ? entryKey : getByPath(row, path);
					return legacyMatches(fieldValue, criterion, row);
				})
			);
		}
		
		function filterData(data, warnState, testEntry) {
			if (!isFilterableData(data)) {
				warnOnce(warnState, 'invalid-data', `dataFilter: data must be an array or object. Returning {}.`);
				return {};
			}
		
			if (Array.isArray(data)) return data.filter((row, index) => testEntry(String(index), row));
			return Object.fromEntries(Object.entries(data).filter(([entryKey, row]) => testEntry(entryKey, row)));
		}
		
		function evaluateCondition(condition, row, entryKey, warnState) {
			if (condition.invalid) return false;
		
			const spec = FILTER_METHODS[condition.method];
			if (!spec) {
				warnOnce(warnState, `${condition.id}:unknown-method`, `dataFilter: unknown filter method "${condition.method}".`);
				return false;
			}
		
			const pathLabel = condition.useKey ? '$key' : condition.path;
			const rawValue = condition.useKey ? entryKey : getByPath(row, condition.path);
			const fieldValue = applyTreatAs(rawValue, condition.treatAs);
		
			if (condition.method === 'passes') return runCustomPredicate(condition, fieldValue, row, entryKey, pathLabel, warnState);
			if (!fieldMatchesSpec(condition, spec, fieldValue, pathLabel, warnState)) return false;
		
			return spec.test(fieldValue, condition.args);
		}
		
		function runCustomPredicate(condition, fieldValue, row, entryKey, pathLabel, warnState) {
			try {
				return !!condition.args[0](fieldValue, row, entryKey);
			} catch (error) {
				warnOnce(warnState, `${condition.id}:passes:error`, `dataFilter: .passes() threw for "${pathLabel}".`, error);
				return false;
			}
		}
		
		function fieldMatchesSpec(condition, spec, value, pathLabel, warnState) {
			if (spec.field === 'presence') return true;
			if (spec.field === 'any') return true;
			if (isUnavailable(value)) return false;
		
			if (spec.field === 'scalar' && isScalarValue(value)) return true;
			if (spec.field === 'number' && isFiniteNumber(value)) return true;
			if (spec.field === 'string' && typeof value === 'string') return true;
			if (spec.field === 'array' && Array.isArray(value) && value.every(isScalarValue)) return true;
		
			warnOnce(
				warnState,
				`${condition.id}:${spec.field}-field-type`,
				`dataFilter: .${condition.method}() expected "${pathLabel}" to be ${fieldExpectationLabel(spec.field)}, but received ${describeType(value)}.`
			);
			return false;
		}
		
		function validateArgs(method, args) {
			const rule = FILTER_METHODS[method].args;
		
			if (rule.type === 'none') {
				if (args.length !== 0) return `dataFilter: .${method}() expected no arguments.`;
				return null;
			}
		
			if (rule.type === 'function') {
				if (args.length !== 1) return `dataFilter: .${method}() expected exactly one function argument.`;
				if (typeof args[0] !== 'function') return `dataFilter: .${method}() expected a function argument.`;
				return null;
			}
		
			if (rule.type === 'contains') return validateContainsArgs(method, args);
		
			if (args.length !== rule.count && rule.type !== 'scalarList' && rule.type !== 'numberRange') {
				return `dataFilter: .${method}() expected exactly ${rule.count} argument${rule.count === 1 ? '' : 's'}.`;
			}
		
			if (rule.type === 'scalar') {
				if (!isScalarValue(args[0])) return `dataFilter: .${method}() expected a scalar argument.`;
				return null;
			}
		
			if (rule.type === 'scalarList') {
				if (args.length !== 1) return `dataFilter: .${method}() expected exactly one array argument.`;
				if (!Array.isArray(args[0])) return `dataFilter: .${method}() expected an array argument.`;
				if (!rule.allowEmpty && args[0].length === 0) return `dataFilter: .${method}() expected a non-empty array.`;
				if (!args[0].every(isScalarValue)) return `dataFilter: .${method}() expected an array of scalar values.`;
				return null;
			}
		
			if (rule.type === 'number') {
				if (!args.every(isFiniteNumber)) return `dataFilter: .${method}() expected finite number arguments.`;
				return null;
			}
		
			if (rule.type === 'numberRange') {
				if (args.length !== 2) return `dataFilter: .${method}() expected exactly two arguments.`;
				if (!args.every(isFiniteNumber)) return `dataFilter: .${method}() expected finite number arguments.`;
				if (args[0] > args[1]) return `dataFilter: .${method}() expected min to be less than or equal to max.`;
			}
		
			return null;
		}
		
		function validateContainsArgs(method, args) {
			if (args.length < 1 || args.length > 2) return `dataFilter: .${method}() expected text and optional options arguments.`;
			if (typeof args[0] !== 'string') return `dataFilter: .${method}() expected search text to be a string.`;
			if (args[0].length === 0) return `dataFilter: .${method}() expected non-empty search text.`;
			if (args.length === 1) return null;
		
			const options = args[1];
			if (!isPlainObject(options)) return `dataFilter: .${method}() options must be an object.`;
		
			const unknownKey = Object.keys(options).find(key => key !== 'caseSensitive');
			if (unknownKey) return `dataFilter: .${method}() received unknown option "${unknownKey}".`;
			if ('caseSensitive' in options && typeof options.caseSensitive !== 'boolean') {
				return `dataFilter: .${method}() option "caseSensitive" must be a boolean.`;
			}
			return null;
		}
		
		function legacyMatches(fieldValue, criterion, row) {
			if (typeof criterion === 'function') return !!criterion(fieldValue, row);
			if (Array.isArray(criterion)) {
				if (Array.isArray(fieldValue)) return fieldValue.some(value => criterion.includes(value));
				return criterion.includes(fieldValue);
			}
			if (criterion && typeof criterion === 'object' && !Array.isArray(criterion)) {
				if (('$min' in criterion) || ('$max' in criterion)) {
					const min = criterion.$min ?? -Infinity;
					const max = criterion.$max ?? Infinity;
					return fieldValue >= min && fieldValue <= max;
				}
				if (Array.isArray(fieldValue)) {
					if ('$all' in criterion) return criterion.$all.every(value => fieldValue.includes(value));
					if ('$any' in criterion) return criterion.$any.some(value => fieldValue.includes(value));
					if ('$none' in criterion) return !criterion.$none.some(value => fieldValue.includes(value));
				}
			}
			return fieldValue === criterion;
		}
		
		function getByPath(obj, path) {
			return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
		}
		
		function applyTreatAs(value, replacements) {
			return replacements.reduce(
				(current, replacement) => (current === replacement.matchValue ? replacement.replacement : current),
				value
			);
		}
		
		function stringIncludes(value, text, options) {
			const caseSensitive = options.caseSensitive !== false;
			const source = caseSensitive ? value : value.toLowerCase();
			const search = caseSensitive ? text : text.toLowerCase();
			return source.includes(search);
		}
		
		function isFilterableData(value) {
			return Array.isArray(value) || (value !== null && typeof value === 'object');
		}
		
		function isPlainObject(value) {
			return Object.prototype.toString.call(value) === '[object Object]';
		}
		
		function isFiniteNumber(value) {
			return typeof value === 'number' && Number.isFinite(value);
		}
		
		function isUnavailable(value) {
			return value === false || value == null || (typeof value === 'number' && !Number.isFinite(value));
		}
		
		function isScalarValue(value) {
			return (
				value == null
				|| typeof value === 'string'
				|| typeof value === 'boolean'
				|| isFiniteNumber(value)
			);
		}
		
		function isEmptyValue(value) {
			if (isUnavailable(value)) return true;
			if (value === '') return true;
			if (Array.isArray(value)) return value.length === 0;
			if (isPlainObject(value)) return Object.keys(value).length === 0;
			return false;
		}
		
		function warnOnce(state, key, message, extra) {
			if (state.has(key)) return;
			state.add(key);
			if (arguments.length >= 4) console.warn(message, extra);
			else console.warn(message);
		}
		
		function fieldExpectationLabel(fieldType) {
			if (fieldType === 'scalar') return 'a scalar value';
			if (fieldType === 'number') return 'a finite number';
			if (fieldType === 'string') return 'a string';
			if (fieldType === 'array') return 'an array of scalar values';
			return `a ${fieldType} value`;
		}
		
		function formatPath(current) {
			if (current.useKey) return '$key';
			if (typeof current.path === 'string') return current.path;
			return String(current.path);
		}
		
		function describeType(value) {
			if (value === null) return 'null';
			if (Array.isArray(value)) return 'array';
			if (Number.isNaN(value)) return 'NaN';
			if (value === Infinity) return 'Infinity';
			if (value === -Infinity) return '-Infinity';
			return typeof value;
		}
		
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = dataFilter;
		}

	
	//SORTING
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
	
	//GROUPING
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
		return `
			<div class="containerBlankState">
				<div class="blankStateContents">
					${options.icon ? options.icon : ``}
					<h2>${options.title}</h2>
					${options.message ? `<p>${options.message}</p>` : ``}
					${options.actionFirst 
						? `
							<div class="containerActions">
								<button data-button="action-fill" class="primary" id="${options.actionIDFirst}">${options.actionFirst}</button>
								
								${options.actionSecond 
									? `<button data-button="action-fill" class="secondary" id="${options.actionIDSecond}">${options.actionSecond}</button>` 
									: ``
								}
							</div>
						` 
						: ``
					}
				</div>
			</div>
		` //->
	}
	
//SPINNERS
	function generateSpinner(icon) {
		return `
			<div class="containerSpinner">
				<div class="spinner alwaysMain">${icon || ``}</div>
			</div>
		` //->
	}
	
//ICONS
	//GENERATE ICON MARKUP STRING
	function generateIcon(iconMarkup, variant = "stroke") {
		//DEBUG BAD CALLS
		if (typeof iconMarkup !== "string") {
			console.error("generateIcon received:", iconMarkup);
			console.error("generateIcon variant:", variant);
			console.trace("generateIcon bad call");
			throw new Error(`generateIcon() expected an SVG string but got ${typeof iconMarkup}.`);
		}
		
		//TURN SVG STRING INTO DOM
		const template = document.createElement("template");
		template.innerHTML = iconMarkup.trim();
		
		//GET ROOT SVG
		const icon = template.content.firstElementChild;
		
		//VALIDATE SVG
		if (!icon || icon.tagName.toLowerCase() !== "svg") {
			throw new Error("generateIcon() expected valid SVG markup.");
		}
		
		//SET VARIANT
		icon.setAttribute("data-variant", variant);
		
		//RETURN SVG MARKUP STRING
		return icon.outerHTML;
	}

//ICON STYLE
	function iconList(icon) {
		return `<span class="only-ios only-macos only-android">${generateIcon(icon, 'fill')}</span>
				<span class="only-windows">${generateIcon(icon, 'stroke')}</span>` //->
	}
	
	function iconTab(icon) {
		return `<span class="only-ios only-macos">${generateIcon(icon, 'fill')}</span>
				<span class="only-android only-windows">${generateIcon(icon, 'stroke')}</span>` //->
	}
	
	function iconGripper() {
		return `<span class="only-ios">${generateIcon(iconShapes.chevronOutwardsVertical, 'fill')}</span> 
				<span class="only-macos outsideToolbar">${generateIcon(iconShapes.chevronOutwardsVertical, 'fill')}</span> 
				<span class="only-macos insideToolbar">${generateIcon(iconShapes.chevronDownwards, 'fill')}</span> 
				<span class="only-android">${generateIcon(iconShapes.chevronDownwards, 'fill')}</span> 
				<span class="only-windows">${generateIcon(iconShapes.chevronDownwards, 'stroke')}</span>`
	}
	
//SHARE BUTTON
	function shareURL() {
		//GUARD
		if (!navigator.share) return;
		
		//GET URL DATA
		const url = grabURLParameter();
		const hasQuery = url.query && url.source;
		const shareTarget = hasQuery ? `${appDomain}?${url.query}=${url.source}` : appDomain;
		
		//SHARE
		navigator.share({
			title: appName,
			url: shareTarget,
		}).catch(function(error) {
			console.log(`Share failed: ${error.message}`);
		});
	}
	
	function insertShareButton(tooltip) {
		//GUARD
		if (!navigator.share) return ``;
		
		//SETUP
		const buttonTooltip = tooltip || `Share`;
		
		//GENERATE SHARE BUTTON
		function generateShareButton(deviceClass, icon) {
			return `
				<span class="${deviceClass}">
					<button data-button="action-transparent" class="toolbarItem" title="${buttonTooltip}" onclick="shareURL()">${icon}</button>
				</span>
			`; //->
		}
		
		return `
			${generateShareButton("only-ios only-macos", generateIcon(iconInterfaceElements.shareAppleUp, 'stroke'))}
			${generateShareButton("only-android", generateIcon(iconInterfaceElements.shareAndroid, 'stroke'))}
			${generateShareButton("only-windows", generateIcon(iconInterfaceElements.shareWindows, 'stroke'))}
		`; //->
	}
	
//BACK BUTTON
	function insertBackButton() {
		const buttonMarkup = {
			apple: {
				wrapperClass: "only-ios only-macos",
				icon: generateIcon(iconShapes.chevronBackwards, 'stroke'),
			},
			other: {
				wrapperClass: "only-android only-windows",
				icon: generateIcon(iconShapes.arrowSingleLeft, 'stroke'),
			},
		};
		
		return Object.values(buttonMarkup).map(function(button) {
			return `
				<span class="${button.wrapperClass}">
					<button data-button="action-transparent" class="toolbarItem back" title="Navigate Back">${button.icon}</button>
				</span>
			`;
		}).join(""); //->
	}
	
//CONFIRMATION BUTTON
	function insertConfirmationButton() {
		const buttonMarkup = {
			apple: {
				wrapperClass: "only-ios only-macos",
				style: "primary material-liquidglass-tinted",
				type: "action-fill"
			},
			other: {
				wrapperClass: "only-android only-windows",
				style: false,
				type: "action-transparent"
			},
		};
		
		return Object.values(buttonMarkup).map(function(button) {
			return `
				<span class="${button.wrapperClass}">
					<button data-button="${button.type}" class="toolbarItem ${button.style}" title="Done">${generateIcon(iconShapes.checkmark, 'stroke')}</button>
				</span>
			`;
		}).join(""); //->
	}

//CANCEL BUTTON
	function insertCancelButton() {
		const buttonMarkup = {
			apple: {
				wrapperClass: "only-ios only-macos",
				icon: generateIcon(iconShapes.timesSmall, 'stroke'),
			},
			android: {
				wrapperClass: "only-android",
				icon: generateIcon(iconShapes.arrowSingleLeft, 'stroke'),
			},
			windows: {
				wrapperClass: "only-windows",
				icon: generateIcon(iconShapes.times, 'stroke'),
			},
		};
		
		return Object.values(buttonMarkup).map(function(button) {
			return `
				<span class="${button.wrapperClass}">
					<button data-button="action-transparent" class="toolbarItem" title="Cancel">${button.icon}</button>
				</span>
			`;
		}).join("");
	}
	
//ACCENTS
const accentsApple = {
	blue: "Blue",
	iblue: "Blue iMac 2021",
	iblue24: "Blue iMac 2024",
	teal: "Teal",
	purple: "Purple",
	ipurple: "Purple iMac 2021",
	ipurple24: "Purple iMac 2024",
	neoindigo26: "Indigo MacBook Neo 2026",
	pink: "Pink",
	ired: "Pink iMac 2021",
	ired24: "Pink iMac 2024",
	neoblush26: "Blush MacBook Neo 2026",
	red: "Red",
	orange: "Orange",
	iorange: "Orange iMac 2021",
	iorange24: "Orange iMac 2024",
	yellow: "Yellow",
	iyellow: "Yellow iMac 2021",
	iyellow24: "Yellow iMac 2024",
	neocitrus26: "Citrus MacBook Neo 2026",
	green: "Green",
	igreen: "Green iMac 2021",
	igreen24: "Green iMac 2024",
	graphite: "Graphite",
	aquagraphite: "Graphite (Aqua)",
}

const accentsAndroid = {
	"android-red": "Red",
	"android-orange": "Orange",
	"android-sun": "Sun",
	"android-yellow": "Yellow",
	"android-green": "Green",
	"android-carbon": "Carbon",
	"android-blue": "Blue",
	"android-classic": "Classic",
	"android-indigo": "Indigo",
	"android-paper": "Paper",
	"android-violet": "Violet"
}

const accentsWindows = {
	"windows-yellow-gold": "Yellow Gold",
	"windows-gold": "Gold",
	"windows-orange-bright": "Orange Bright",
	"windows-orange-dark": "Orange Dark",
	"windows-rust": "Rust",
	"windows-pale-rust": "Pale Rust",
	"windows-brick-red": "Brick Red",
	"windows-mod-red": "Mod Red",
	"windows-pale-red": "Pale Red",
	"windows-red": "Red",
	"windows-rose-bright": "Rose Bright",
	"windows-rose": "Rose",
	"windows-plum-light": "Plum Light",
	"windows-plum": "Plum",
	"windows-orchid-light": "Orchid Light",
	"windows-orchid": "Orchid",
	"windows-blue": "Blue",
	"windows-navy-blue": "Navy Blue",
	"windows-purple-shadow": "Purple Shadow",
	"windows-purple-shadow-dark": "Purple Shadow Dark",
	"windows-iris-pastel": "Iris Pastel",
	"windows-iris-spring": "Iris Spring",
	"windows-violet-red-light": "Violet Red Light",
	"windows-violet-red": "Violet Red",
	"windows-cool-blue-bright": "Cool Blue Bright",
	"windows-cool-blue": "Cool Blue",
	"windows-seafoam": "Seafoam",
	"windows-seafoam-teal": "Seafoam Teal",
	"windows-mint-light": "Mint Light",
	"windows-mint-dark": "Mint Dark",
	"windows-turf-green": "Turf Green",
	"windows-sport-green": "Sport Green",
	"windows-gray": "Gray",
	"windows-gray-brown": "Gray Brown",
	"windows-steel-blue": "Steel Blue",
	"windows-metal-blue": "Metal Blue",
	"windows-pale-moss": "Pale Moss",
	"windows-moss": "Moss",
	"windows-meadow-green": "Meadow Green",
	"windows-green": "Green",
	"windows-overcast": "Overcast",
	"windows-storm": "Storm",
	"windows-blue-gray": "Blue Gray",
	"windows-gray-dark": "Gray Dark",
	"windows-liddy-green": "Liddy Green",
	"windows-sage": "Sage",
	"windows-camouflage-desert": "Camouflage Desert",
	"windows-camouflage": "Camouflage"
}
	
//DISPLAY OPTIONS
	function getFreshAppSettings() {
		//GET SAVED SETTINGS DIRECTLY FROM LOCAL STORAGE
		const rawSettings = localStorage.getItem("rebar.appSettings");
		
		//FALL BACK TO CURRENT PREFERENCE HELPER
		if (!rawSettings) return getPreferenceGroup("rebar.appSettings"); //->
		
		//PARSE SAVED SETTINGS
		try {
			return JSON.parse(rawSettings);
		} catch(error) {
			console.warn("Could not parse rebar.appSettings", error);
			return getPreferenceGroup("rebar.appSettings"); //->
		}
	}
	
	function syncDisplayOptionsState() {
		//GET CURRENT SETTINGS
		const settings = getFreshAppSettings();
		
		//STOP IF DISPLAY OPTIONS ARE NOT CURRENTLY ON THE PAGE
		if (!document.querySelector("#containerVisuals, #containerText")) return; //->
		
		//SYNC THEME
		$("#displayTheme button").removeClass("picked");
		$(`#displayTheme button[data-value="${settings.os}"]`).addClass("picked");
		
		//SYNC APPEARANCE
		$("#displayAppearance button").removeClass("picked");
		$(`#displayAppearance button[data-value="${settings.appearance}"]`).addClass("picked");
		
		//SYNC ACCENT
		$("#displayAccent button").removeClass("picked");
		$(`#displayAccent button[data-value="${settings.accent}"]`).addClass("picked");
		
		//SYNC INCREASE CONTRAST
		const increaseContrast = settings.increaseContrast === "more" || queryIncreasedContrast === true;
		$("#increaseContrast").prop("checked", increaseContrast);
		
		//SYNC REDUCE MOTION
		const reduceMotion = settings.reduceMotion === true || settings.reduceMotion === "on" || queryReducedMotion === true;
		$("#reduceMotion").prop("checked", reduceMotion);
		
		//SYNC TEXT SIZE
		const textSize = settings.dynamicTypeSize?.value;
		
		$("#displayTextSize button").removeClass("picked");
		$(`#displayTextSize button[data-value="${textSize}"]`).addClass("picked");
		
		//SYNC BOLD TEXT
		const boldText = settings.textWeight === "bold";
		$("#boldText").prop("checked", boldText);
		
		//SYNC FONT
		$("#displayFont button").removeClass("picked");
		$(`#displayFont button[data-value="${settings.textFont}"]`).addClass("picked");
	}

	//GENERATE DISPLAY OPTIONS
		//SECTIONS
		function sectionTheme() {
			const selectedTheme = getFreshAppSettings().os;
		
			const themeOptions = [
				{
					value: "ios",
					label: "iOS",
					icon: generateIcon(iconHardware.tabletphoneLandscape, 'stroke'),
				},
				{
					value: "macos",
					label: "macOS",
					icon: generateIcon(iconHardware.imac, 'stroke'),
				},
				{
					value: "android",
					label: "Android",
					icon: generateIcon(iconLogos.android, 'fill'),
				},
				{
					value: "windows",
					label: "Windows",
					icon: generateIcon(iconLogos.windows, 'fill'),
				},
			];
			
			return `
				<div class="containerDisplayRow containerSection" id="displayTheme">
					<div>
						<h3 class="h5 excludePadding">Theme</h3>
						<p class="excludeMargin">Style ${appName} with one of the OS themes</p>
					</div>
					<div class="options">
						${themeOptions.map(function(option) {
							return `
								<button
									data-button="display-tile"
									class="primary ${option.value === selectedTheme ? `picked` : ``}"
									data-value="${option.value}"
									onclick="setTheme(event)"
								>
									${option.icon}
									${option.label}
								</button>
							`;
						}).join("")}
					</div>
				</div>
			`; //->
		}
		
		function sectionAppearance() {
			const selectedAppearance = getFreshAppSettings().appearance;
			
			return `
				<div class="containerDisplayRow containerSection" id="displayAppearance">
					<div>
						<h3 class="h5 excludePadding">Appearance</h3>
						<p class="excludeMargin">Set ${appName} to light or dark mode</p>
					</div>
					<div class="options">
						${Object.entries(appThemes).map(function([key, option]) {
							return `
								<button 
									data-button="display-tile" 
									class="primary ${key === selectedAppearance ? `picked` : ``}" 
									data-value="${key}" 
									data-label="${option.name}"
									onclick="setAppearance(event)"
								>
									${option.icon}
									${option.name}
								</button>
							`;
						}).join("")}
					</div>
				</div>
			` //->
		}
		
		function sectionAccent() {
			const selectedAccent = getFreshAppSettings().accent;
			
			const accentGroups = [
				{
					title: "App",
					id: "appAccents",
					accents: appAccents,
				},
				{
					title: "iOS and macOS",
					accents: accentsApple,
				},
				{
					title: "Android",
					accents: accentsAndroid,
				},
				{
					title: "Windows",
					accents: accentsWindows,
				},
			];
			
			return `
				<div class="containerDisplayRow containerSection" id="displayAccent">
					<div>
						<h3 class="h5 excludePadding">Accent</h3>
						<p class="excludeMargin">Set the colour of ${appName}</p>
					</div>
					<div class="options">
						${accentGroups.map(function(group, index) {
							const spacerClass = index < accentGroups.length - 1 ? "spacerSingle" : "";
							const idAttribute = group.id ? ` id="${group.id}"` : "";
							
							return `
								<div class="${spacerClass}"${idAttribute}>
									<h4 class="h6">${group.title}</h4>
									${Object.entries(group.accents).map(function([key, label]) {
										return `
											<button 
												data-button="action-circular" 
												class="primary ${key === selectedAccent ? `picked` : ``}" 
												onclick="setAccent(event)" 
												data-value="${key}" 
												data-accent="${key}" 
												title="${label}"
											>
												${generateIcon(iconShapes.circle, 'fill')}
											</button>
										`;
									}).join("")}
								</div>
							`;
						}).join("")}
					</div>
				</div>
			`; //->
		}
		
		function sectionIncreaseContrast() {
			const selectedIncreaseContrast = getFreshAppSettings().increaseContrast;
			
			return `
				<div class="containerDisplayRow containerSection" id="displayContrast" style="--layout: grid; align-items: center;">
					<div>
						<h3 class="h5 excludePadding">Increase Contrast</h3>
						<p class="excludeMargin">Makes elements more distinct</p>
						${queryIncreasedContrast == true ? `<small>Using device settings</small>` : ``}
					</div>
					<label for="increaseContrast">
						<input 
							type="checkbox" 
							switch 
							id="increaseContrast" 
							name="increaseContrast" 
							value="" 
							${selectedIncreaseContrast === "more" || queryIncreasedContrast == true ? `checked` : ``}
							${queryIncreasedContrast == true ? `disabled` : ``}
							onclick="setIncreaseContrast(event)"
						>
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			` //->
		}
		
		function sectionReduceMotion() {
			const selectedReduceMotion = getFreshAppSettings().reduceMotion;
			
			return `
				<div class="containerDisplayRow containerSection" id="displayMotion" style="--layout: grid; align-items: center;">
					<div>
						<h3 class="h5 excludePadding">Reduce Motion</h3>
						<p class="excludeMargin">Disables animations across ${appName}</p>
						${queryReducedMotion == true ? `<small>Using device settings</small>` : ``}
					</div>
					<label for="reduceMotion">
						<input 
							type="checkbox" 
							switch 
							id="reduceMotion" 
							name="reduceMotion" 
							value="" 
							${selectedReduceMotion === true || selectedReduceMotion === "on" || queryReducedMotion == true ? `checked` : ``}
							${queryReducedMotion == true ? `disabled` : ``}
							onclick="setReduceMotion(event)"
						>
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			` //->
		}
		
		function sectionTextSize() {
			const selectedTextSize = getFreshAppSettings().dynamicTypeSize.value;
			
			const textSizeOptions = [
				{
					value: "small",
					label: "Small",
					icon: generateIcon(iconInterfaceElements.textSmall, 'stroke')
				},
				{
					value: "medium",
					label: "Medium",
					icon: generateIcon(iconInterfaceElements.textMedium, 'stroke')
				},
				{
					value: "large",
					label: "Large",
					icon: generateIcon(iconInterfaceElements.textLarge, 'stroke')
				}
			]
			
			return `
				<div class="containerDisplayRow containerSection" id="displayTextSize">
					<div>
						<h3 class="h5 excludePadding">Text Size</h3>
						<p class="excludeMargin">Set ${appName} to a comfortable reading size</p>
					</div>
					<div class="options">
						${textSizeOptions.map(function(option) {
							return `
								<button 
									data-button="display-tile" 
									class="primary ${option.value === selectedTextSize ? `picked` : ``}" 
									data-value="${option.value}" 
									data-label="${option.label}" 
									onclick="setTextSize(event)"
								>
									${option.icon}
									${option.label}
								</button>
							`;
						}).join("")}
					</div>
				</div>
			` //->
		}
		
		function sectionBoldText() {
			const selectedBoldText = getFreshAppSettings().textWeight;
			
			return `
				<div class="containerDisplayRow containerSection" id="displayBoldText" style="--layout: grid; align-items: center;">
					<div>
						<h3 class="h5 excludePadding">Bold Text</h3>
						<p class="excludeMargin">Increase the weight of text for a stronger appearance</p>
					</div>
					<label for="boldText">
						<input 
							type="checkbox" 
							switch id="boldText" 
							name="boldText" 
							value="" 
							${selectedBoldText === "bold" ? `checked` : ``}
							onclick="setBoldText(event)"
						>
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			` //->
		}
		
		function sectionFont() {
			const selectedFont =getFreshAppSettings().textFont;
			
			const fontGroups = [
				{
					title: "System",
					buttons: [
						{
							value: "system",
							label: "Sans Serif",
						},
						{
							value: "serif",
							label: "Serif",
							fontFamily: "serif",
						},
						{
							value: "mono",
							label: "Monospace",
							fontFamily: "monospace",
							spacer: true,
						},
					],
				},
				{
					title: "OS Fonts",
					buttons: [
						{
							value: "sfpro",
							label: "Apple",
							fontFamily: "sfpro",
						},
						{
							value: "productsans",
							label: "Android",
							fontFamily: "productsans",
						},
						{
							value: "segoeui",
							label: "Windows",
							fontFamily: "segoeui",
							spacer: true,
						},
					],
				},
				{
					title: "Accessible",
					buttons: [
						{
							value: "opendyslexic",
							label: "OpenDyslexic",
							fontFamily: "dyslexic",
						},
						{
							value: "atkinson",
							label: "Atkinson Hyperlegible",
							fontFamily: "atkinson",
						},
						{
							value: "shantell",
							label: "Shantell Sans",
							fontFamily: "shantell",
						},
						{
							value: "lexend",
							label: "Lexend",
							fontFamily: "lexend",
						},
					],
				},
			];
			
			return `
				<div class="containerDisplayRow containerSection" id="displayFont">
					<div>
						<h3 class="h5 excludePadding">Font</h3>
						<p class="excludeMargin">Select from a variety of fonts to help with readability</p>
					</div>
					<div class="options-row" id="pickerFonts">
						${fontGroups.map(function(group) {
							return `
								<h4 class="h6 excludePadding">${group.title}</h4>
								${group.buttons.map(function(button) {
									const spacerClass = button.spacer ? "spacerSingle" : "";
									const previewStyle = button.fontFamily ? ` style="font-family: ${button.fontFamily};"` : "";
									
									return `
										<button 
											data-button="display-row" 
											class="primary ignoreFontOverride ${spacerClass} ${button.value === selectedFont ? `picked` : ``}" 
											data-value="${button.value}" 
											onclick="setFont(event)"
										>
											<span>${button.label}</span>
											<span class="ignoreFontOverride" style="font-family: var(--font-${button.fontFamily})">iIl1 oO0 Gg</span>
										</button>
									`;
								}).join("")}
							`;
						}).join("")}
					</div>
				</div>
			`; //->
		}
		
		//INSERT DISPLAY OPTIONS
		function generateDisplayOptions(options) {
			return `
				<h2 class="h4">Visuals</h2>
				<section class="spacerDouble" id="containerVisuals">
					${sectionTheme()}
					${sectionAppearance()}
					${sectionAccent()}
					${sectionIncreaseContrast()}
					${sectionReduceMotion()}
				</section>
				
				<h2 class="h4">Text</h2>
				<section id="containerText">
					${sectionTextSize()}
					${sectionBoldText()}
					${sectionFont()}
				</section>
			`;
		}
	
	//SET DISPLAY OPTIONS
		function setTheme(input) {
			//NORMALISE INPUT
			let button = null;
			let newValue = null;
			
			if (typeof input === "string") {
				newValue = input;
			} else if (input?.currentTarget) {
				button = input.currentTarget;
				newValue = button.dataset.value;
			} else if (input?.nodeType === 1) {
				button = input;
				newValue = button.dataset.value;
			}
			
			//STOP IF THERE IS NO VALUE
			if (!newValue) return; //->
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "os",
				value: newValue,
			});
			
			$("body").attr("data-os", newValue);
			
			//SET PICKED
			$(button).siblings().removeClass("picked");
			$(button).addClass("picked");
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setAppearance(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = button.dataset.value
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "appearance",
				value: newValue,
			})
			
			$("body").attr("data-theme", newValue);
			setMetaTheme();
			
			//SET PICKED
			$(button).siblings().removeClass("picked");
			$(button).addClass(`picked`)
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setAccent(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = button.dataset.value
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "accent",
				value: newValue,
			})
			
			$("body").attr("data-accent", newValue);
			
			//SET PICKED
			$(button).closest(`#displayAccent`).find(`button`).removeClass(`picked`);
			$(button).addClass(`picked`)
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setIncreaseContrast(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = clickSwitch(button)
			const newState = newValue ? `more` : `less`
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "increaseContrast",
				value: newState,
			})
			
			//SET STATE
			$("body").attr("data-contrast", newState);
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setReduceMotion(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = clickSwitch(button)
			const timeLength = newValue ? `0s` : baseTimeLength
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "reduceMotion",
				value: newValue,
			})
			
			//SET STATE
			document.documentElement.style.setProperty('--base-time-length', timeLength);
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setTextSize(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = button.dataset.value
			const newLabel = button.dataset.label
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "dynamicTypeSize",
				value: {
					value: newValue,
					label: newLabel
				},
			})
			
			$("body").attr("data-textsize", newValue);
			document.documentElement.style.setProperty('--base-font-size', dynamicTypeSizes[newValue]);
			
			//SET PICKED
			$(button).siblings().removeClass("picked");
			$(button).addClass(`picked`)
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setBoldText(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = clickSwitch(button)
			const newState = newValue ? `bold` : `regular`
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textWeight",
				value: newState,
			})
			
			//SET STATE
			$("body").attr("data-textweight", newState);
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
		
		function setFont(event) {
			//CONSTANTS
			const button = event.currentTarget
			const newValue = button.dataset.value
			
			//SET NEW VALUE
			modifyPreference({
				group: "rebar.appSettings",
				mode: "update",
				preference: "textFont",
				value: newValue,
			})
			
			$("body").attr("data-font", newValue);
			
			//SET PICKED
			$(button).siblings().removeClass("picked");
			$(button).addClass(`picked`)
			
			//SYNC DISPLAY OPTIONS
			syncDisplayOptionsState();
		}
	

//UPDATE BANNER
	$(document).on('click', '#buttonUpdateApp', function() {
		location.reload();
	});
	
//SET THEME META TAG
	function setMetaTheme() {
		//GET THE META TAG
		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		
		//EXIT IF THE META TAG DOES NOT EXIST
		if (!themeColorMeta) return; //->
		
		//CREATE A TEMPORARY COLOR RESOLVER
		const resolver = document.createElement("div");
		resolver.style.color = "var(--theme-color, var(--foreground))";
		resolver.hidden = true;
		
		document.body.appendChild(resolver);
		
		//GET THE RESOLVED COLOR
		const resolvedColor = getComputedStyle(resolver).color;
		
		//REMOVE THE RESOLVER
		resolver.remove();
		
		//SET THE META TAG
		themeColorMeta.setAttribute("content", resolvedColor);
	}
	
	//SYSTEM APPEARANCE CHANGE
	const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
	colorSchemeQuery.addEventListener("change", setMetaTheme);	
	
//TIP JAR
	function generateTipJar(options) {
		//MINI TIP JAR
		if (options.mini) {
			return `
				<div id="miniTipJar">
					<button data-button="close" class="translucent" id="dismiss" title="Dismiss Tips Panel" onclick="stopTipsPrompts()">${generateIcon(iconShapes.times, 'fill')}</button>
					<div class="containerTipJar mini">
						<div class="containerTipImages">
							<img src="https://cdn.toast-studio.com/avatars/chris.jpg" width="100" alt="" />
							<img src="https://cdn.toast-studio.com/avatars/trevor.jpg" width="100" alt="" />
						</div>
						
						<p class="textAlignCenter">${tipsMessage}</p>
						
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
			`; //->
		}
		
		//FULL TIP JAR
		return `
			<div class="containerTipJar">
				<div class="containerTipImages">
					<img src="https://cdn.toast-studio.com/avatars/chris.jpg" width="200" alt="" />
					<img src="https://cdn.toast-studio.com/avatars/trevor.jpg" width="200" alt="" />
				</div>
				
				<p class="textAlignCenter spacerSingle">${appName} is developed by <a href="https://www.trevorkay.me/connect/" target="_blank">Trevor</a> and <a href="https://christophermuller.net" target="_blank">Chris</a>. If you'd like to show your support you can leave us a tip. It's much appreciated!</p>
				<p class="customMessage spacerSingle">${tipsMessage}</p>
				
				<div class="containerButtons spacerSingle">
					<a href="${tipsLinks.default}" target="_blank" class="noDecoration">
						<button data-button="action-fill" class="primary" onclick="stopTipsPrompts()">Donate $2</button>
					</a>
					<a href="${tipsLinks.custom}" target="_blank" class="noDecoration">
						<button data-button="action-fill" class="secondary" onclick="stopTipsPrompts()">Any Amount</button>
					</a>
				</div>
				
				<small class="textAlignCenter">Prices are set in USD and payment is handled by Stripe. ${appName} does not require payment to use. If you have any issues, please contact <a href="mailto:${appEmail}?subject=Help%20with%20${appName}%20tip%20jar">Support</a>. For more information on how your data is handled please refer to the <a href="${appPrivacyPolicy}" target="_blank">Toast Studio Privacy Policy</a> and the <a href="https://stripe.com/privacy" target="_blank">Stripe Privacy Policy</a>.</small>
			</div>
		`; //->
	}
	
	function stopTipsPrompts() {
		modifyPreference({
			group: "rebar.appSettings",
			mode: "update",
			preference: "clickedDonationLink",
			value: true,
		});
		
		$("#miniTipJar").remove();
	}
	
//HOW TO INSTALL SHEET
	function generateInstallPanel() {
		return `
			<div class="containerInstallPanel" onclick="summonHowToInstallSheet()">
				<div id="containerIcon">
					<img src="icon.png" width="120" alt="">
					<div class="icon">${generateIcon(iconShapes.arrowSingleDown, 'fill')}</div>
				</div>
				<div>
					<p class="excludeMargin">Learn how to install ${appName}</p>
				</div>
			</div>
		`
	}
	
//CAPITALIZE WORD
	function capitalize(word) {
		//GUARD
		if (word == null) return ""; //->
		word = String(word);
		if (!word.length) return ""; //->
		
		//CONVERT
		return word[0].toUpperCase() + word.slice(1).toLowerCase(); //->
	}

//COPY TO CLIPBOARD
	function copyToClipboard(input) {
		//GUARD
		var output = input == null ? "" : String(input);
	
		//COPY CONTENT
		navigator.clipboard.writeText(output);
	
		//DISPLAY TOAST
		summonToast({
			backing: "gradient",
			id: false,
			icon: iconShapes.checkmarkCircleMulti,
			message: "Copied to Clipboard",
			closeButton: false,
		});
	
		//DESTROY TOAST
		setTimeout(function () { dismissDialog(); }, 1800);
	}
	
//SCROLL ITEM TO TOP
	function scrollToTop(value) {
		//GUARD
		if (!value) return;
	
		//GET TARGET ELEMENT
		var element = document.getElementById(value);
		if (!element) return;
	
		//CHECK OS
		var os = document.body?.dataset?.os;
		var offset = (os === "ios" || os === "macos") ? 60 : 0;
	
		//FIND NEAREST SCROLLABLE PARENT (NO PAGE FALLBACK)
		var scrollParent = (function getScrollParent(node) {
			//WALK UP DOM UNTIL WE FIND AN ELEMENT THAT CAN SCROLL
			var parent = node.parentElement;
	
			while (parent) {
				var style = getComputedStyle(parent);
				var overflowY = style.overflowY;
	
				var canScroll = (overflowY === "auto" || overflowY === "scroll") && parent.scrollHeight > parent.clientHeight;
				if (canScroll) return parent;
	
				parent = parent.parentElement;
			}
	
			return null;
		})(element);
	
		if (!scrollParent) return;
	
		//CALCULATE TARGET TOP INSIDE THE SCROLL CONTAINER
		var parentRect = scrollParent.getBoundingClientRect();
		var elemRect = element.getBoundingClientRect();
		var topInParent = (elemRect.top - parentRect.top) + scrollParent.scrollTop;
	
		//SCROLL (OFFSET MOVES ELEMENT DOWN ~60PX IN VIEW)
		scrollParent.scrollTo({
			top: topInParent - offset,
			behavior: "smooth",
		});
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
		//OPTIONS
		//options.group = the name of the preference group
		//options.mode = whether this change will save a modified entry or delete an existing entry
		//options.preference = the name of the child item to be modified or deleted
		//options.value = the content to save in to the selected preference
		
		//GET STORED PREFERENCES DIRECTLY FROM LOCAL STORAGE
		const storedPrefs = localStorage.getItem(options.group);
		
		//PARSE STORED PREFERENCES OR FALL BACK TO DEFAULTS
		let prefs = storedPrefs
			? JSON.parse(storedPrefs)
			: structuredClone(appPreferencesDefault[options.group] ?? {});
		
		//UPDATE THE PREFERENCE GROUP
		switch (options.mode) {
			case "update":
				prefs[options.preference] = options.value;
				break;
				
			case "delete":
				delete prefs[options.preference];
				break;
				
			case "append":
				//GET DEFAULT SETTINGS
				const defaultSettings = appPreferencesDefault[options.group] ?? {};
				
				//MERGE DEFAULT SETTINGS WITH STORED SETTINGS
				prefs = {
					...structuredClone(defaultSettings),
					...prefs,
				};
				
				break;
		}
		
		//SAVE THE UPDATED PREFERENCE GROUP
		localStorage.setItem(options.group, JSON.stringify(prefs));
		
		//BROADCAST THE PREFERENCE CHANGE
		window.dispatchEvent(new CustomEvent("rebarPreferenceChange", {
			detail: {
				group: options.group,
				preference: options.preference,
				value: options.value,
				prefs: prefs,
			},
		}));
		
		//RETURN UPDATED PREFERENCES
		return prefs;
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
		//SETUP
		const bannerSize = options.size || ``;
		
		let bannerTypeClass;
		let bannerIcon;
		
		//SET BANNER TYPE
		switch (options.type) {
			case "info":
				bannerClass = "info";
				bannerIcon = generateIcon(iconInterfaceElements.infoCircle, 'multi');
				break;
			
			case "warning":
				bannerClass = "warning";
				bannerIcon = generateIcon(iconInterfaceElements.exclamationTriangle, 'multi');
				break;
			
			case "error":
				bannerClass = "error";
				bannerIcon = generateIcon(iconShapes.timesCircle, 'multi');
				break;
			
			case "success":
				bannerClass = "success";
				bannerIcon = generateIcon(iconShapes.checkmarkCircle, 'multi');
				break;
			
			case "accent":
				bannerClass = "accent";
				bannerIcon = options.icon || ``;
				break;
			
			default:
				bannerClass = "info";
				bannerIcon = generateIcon(iconInterfaceElements.infoCircle, 'multi');
				break;
		}
		
		//RETURN BANNER
		return `
			<section class="containerSection banner withIcon ${bannerClass} ${bannerSize}">
				${bannerIcon}
				<p class="excludeMargin">${options.content}</p>
			</section>
		`; //->
	}
	
//CHARTS
	//PIE CHART
		function generateChartPie(options) {
			//PIE SETUP
				//CALCULATE COUNT OF ALL PIECES
				const totalCount = options.data.reduce(function(total, item) {
					return total + item[1];
				}, 0);
				
				//TRACK RUNNING TOTAL
				let previousPiece = 0;
				let countPie = 1;
				
				//CREATE PIECES
				const piePieces = options.data.map(function(item) {
					const percentageValue = totalCount > 0
						? Math.round(((item[1] + previousPiece) / totalCount) * 100)
						: 0;
					
					const segment = `
						<div class="pie" style="--p:${percentageValue}; --b:${options.donutSize}px;" data-segment="seg${countPie}"></div>
					`;
					
					previousPiece += item[1];
					countPie++;
					
					return segment;
				}).reverse().join("");
			
			//LEGEND SETUP
				//CREATE ROWS
				const legendRows = options.legend ? options.data.map(function(item, index) {
					const countMarkup = options.includeCount
						? `<td>${item[1]} ${options.countLabel}</td>`
						: ``;
					
					const percentageValue = totalCount > 0
						? Math.round((item[1] / totalCount) * 100)
						: 0;
					
					return `
						<tr>
							<td class="containerColorKey"><div class="colorKey" data-segment="seg${index + 1}"></div> <span>${item[0]}</span></td>
							<td>${percentageValue} %</td>
							${countMarkup}
						</tr>
					`;
				}).join("") : ``;
				
				//CREATE TABLE
				const legend = options.legend ? `
					<div class="containerChartLegend">
						${options.title ? `<h4>${options.title}</h4>` : ``}
						<table>
							<tbody>
								${legendRows}
							</tbody>
						</table>
					</div>
				` : ``;
			
			//RETURN CHART
			return `
				<div class="containerPie">
					${piePieces}
				</div>
				${legend}
			`; //->
		}
	
	//GANTT CHART
		//GENERATE GANTT CHART
		function generateChartGantt(options) {
			//SETUP
			const gridColumns = `280px repeat(${options.columnTitles.length}, 100px)`;
			
			//CREATE THE COLUMN TITLES
			const columnTitles = options.columnTitles.map(function(column) {
				return `<th>${column.label}</th>`; //->
			}).join("");
			
			//CREATE THE ROWS
			const rows = options.data.map(function(item, index) {
				const rowCells = options.columnTitles.map(function(column) {
					return generateChartGanttCell({
						columnValue: column.value,
						start: item.start,
						end: item.end,
						direction: options.direction,
					});
				}).join("");
				
				return `
					<tr class="row ${item.class || ''}" data-row="${index}" data-rowid="${item.key}" style="grid-template-columns: ${gridColumns};">
						<td data-id="${item.key}">
							${options.images ? `<img src="${item.image}" width="50" height="50" />` : ``}
							<div>
								${item.name}
								${options.subtext ? `<small class="excludeMargin">${item.subtext}</small>` : ``}
								${options.badge ? `${item.badge}` : ``}
							</div>
						</td>
						${rowCells}
					</tr>
				`; //->
			}).join("");
			
			//RETURN TABLE
			return `
				<table class="chartGantt">
					<thead>
						<tr style="grid-template-columns: ${gridColumns};">
							<th>${options.primaryLabel}</th>
							${columnTitles}
						</tr>
					</thead>
					<tbody>
						${rows}
					</tbody>
				</table>
			`; //->
		}
		
		//GENERATE GANTT CELL
		function generateChartGanttCell(options) {
			const cellType = getChartGanttCellType(options);
			
			if (!cellType) {
				return `<td class="cellSupport" data-cell="${options.columnValue}"></td>`; //->
			}
			
			return `
				<td class="${cellType} cellSupport" data-cell="${options.columnValue}">
					<div class="bar"></div>
				</td>
			`; //->
		}
		
		//GET GANTT CELL TYPE
		function getChartGanttCellType(options) {
			const isAscending = options.direction === "ascending";
			const isDescending = options.direction === "descending";
			
			if (isAscending) {
				if (options.columnValue === options.start && options.columnValue === options.end) return "single";
				if (options.columnValue === options.start) return "start";
				if (options.columnValue === options.end) return "end";
				if (options.columnValue > options.start && options.columnValue < options.end) return "middle";
			}
			
			if (isDescending) {
				if (options.columnValue === options.end && options.columnValue === options.start) return "single";
				if (options.columnValue === options.end) return "start";
				if (options.columnValue === options.start) return "end";
				if (options.columnValue < options.end && options.columnValue > options.start) return "middle";
			}
			
			return false;
		}
	
	//STATS CHART
		function generateChartStats(options) {
			return `
				<div class="chartStats" data-orientation="${options.orientation}">
					${options.data.map(function(item) {
						const percentageValue = options.max > 0
							? Math.round((item[1] / options.max) * 100)
							: 0;
						
						return `
							<div class="stat" data-value="${item[0]}">
								<div class="label">
									<div class="textBold">${item[0]}</div>
									<div>${item[1]}</div>
								</div>
								<div class="track">
									<div class="bar" style="--stat-bar-length: ${percentageValue}%;"></div>
								</div>
							</div>
						`; //->
					}).join("")}
				</div>
			`; //->
		}
	
//SHORTCUT KEYS
	$(document).keyup(function(e) {
		//CHECK WHETHER THE USER IS TYPING IN A FIELD
		const activeElement = document.activeElement;
		const isTypingField =
			activeElement.matches("input, textarea, select") ||
			activeElement.isContentEditable;
		
		//EXIT IF THE USER IS ENTERING TEXT
		if (isTypingField) return; //->
		
		//RUN SHORTCUT KEY
		switch (e.key) {
			case 'Control':
				//TOGGLE SHORTCUTS PANEL
				if ($(`#sheetShortcuts`).length == 0) {
					summonShortcutsPanel();
				} else {
					dismissDialog();
				}
				break;
			case 'Escape':
				//DISMISS DIALOG
				dismissDialog();
				break;
			case 'D':
				//TOGGLE DEBUG MODE
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
	});