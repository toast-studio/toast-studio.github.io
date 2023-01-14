const gettingstarted = {
	welcome: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar"></h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<div id="containerWelcome" class="spacerTriple">
				<div class="alwaysAccent spacerSingle" id="logo">
					${iconLogos.rebarThinDuo}
				</div>
				<h1>Welcome to Rebar</h1>
				<p>Rebar is a layout framework designed to give PWAs a native-feeling experience.</p>
			</div>
			<div id="gridWelcome">
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="red">${iconShapes.heartFill}</div>
					<h3 class="h4">Native Feel</h3>
					<p class="excludeMargin">Rebar is designed to feel like a native app but not look 100% like one. This is because a Rebar app can be run on any platform with a web browser. You should strive to include what feels best from various platforms while maintaining your own uniqueness.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="spacerHalf">${iconShapes.checkmarkCircleMulti}</div>
					<h3 class="h4">Consistent Intent</h3>
					<p class="excludeMargin">Components in Rebar are always designed to keep the same intent across all breakpoints and responsive modes. This leads to a cleaner implementation. An example of this is Sheets always stay modal, they do not turn in to columns on larger screens.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="teal">${iconObjects.legoDuo}</div>
					<h3 class="h4">Building Blocks</h3>
					<p class="excludeMargin">Rebar packs in many functions you will need to build a PWA. Whether it be something large like view management to something little like copying to the clipboard.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="yellow">${iconShapes.starFivePointFill}</div>
					<h3 class="h4">Icon Set</h3>
					<p class="excludeMargin">Rebar includes an ever growing icon set to cover all your iconography needs. Each icon comes in multiple styles to suite any type of app.</p>
				</section>
			</div>
			
			<div id="toastCrafted">${iconLogos.toastCrafted}</div>
		</div>
	`,
	filestructure: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">File Structure</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<ul id="filestructure">
				<li>${iconObjects.folderHorizontalFill} app</li>
				<ul class="excludeMargin">
					<li>${iconObjects.folderHorizontalFill} images</li>
					<li>${iconObjects.fileFill} app.css</li>
					<li>${iconObjects.fileFill} app.js</li>
					<li>${iconObjects.fileFill} config.js</li>
					<li>${iconObjects.fileFill} partials.js</li>
					<li>${iconObjects.fileFill} renderers.js</li>
					<li>${iconObjects.fileFill} routes.js</li>
				</ul>
				
				<li>${iconObjects.folderHorizontalFill} rebar</li>
				<ul class="excludeMargin">
					<li>${iconObjects.folderHorizontalFill} fonts</li>
					<ul class="excludeMargin">
						<li>${iconInterfaceElements.textCapital} OpenDyslexic3-bold.ttf</li>
						<li>${iconInterfaceElements.textCapital} OpenDyslexic3-Regular.ttf</li>
						<li>${iconInterfaceElements.textCapital} product-sans-bold.ttf</li>
						<li>${iconInterfaceElements.textCapital} product-sans-Regular.ttf</li>
					</ul>
					<li>${iconObjects.folderHorizontalFill} icons</li>
					<ul class="excludeMargin">
						<li>${iconObjects.fileFill} charts.js</li>
						<li>${iconObjects.fileFill} hardware.js</li>
						<li>${iconObjects.fileFill} human.js</li>
						<li>${iconObjects.fileFill} indicies.js</li>
						<li>${iconObjects.fileFill} interface.js</li>
						<li>${iconObjects.fileFill} logos.js</li>
						<li>${iconObjects.fileFill} nature.js</li>
						<li>${iconObjects.fileFill} objects.js</li>
						<li>${iconObjects.fileFill} shapes.js</li>
						<li>${iconObjects.fileFill} transport.js</li>
					</ul>
					<li>${iconObjects.folderHorizontalFill} images</li>
					<ul class="excludeMargin">
						<li>${iconObjects.photoLandscapeStroke} arrow-back-dark.svg</li>
						<li>${iconObjects.photoLandscapeStroke} arrow-back-light.svg</li>
						<li>${iconObjects.photoLandscapeStroke} arrow-forward-dark.svg</li>
						<li>${iconObjects.photoLandscapeStroke} arrow-forward-light.svg</li>
						<li>${iconObjects.photoLandscapeStroke} tick-dark.svg</li>
						<li>${iconObjects.photoLandscapeStroke} tick-light.svg</li>
						<li>${iconObjects.photoLandscapeStroke} tips.png</li>
						<li>${iconObjects.photoLandscapeStroke} tips@2x.png</li>
					</ul>
					<li>${iconObjects.fileFill} jquery.tablesorter.js</li>
					<li>${iconObjects.fileFill} rebar.css</li>
					<li>${iconObjects.fileFill} rebar.js</li>
				</ul>
				<li>${iconObjects.photoLandscapeStroke} apple-touch-icon.png</li>
				<li>${iconObjects.photoLandscapeStroke} favicon.ico</li>
				<li>${iconObjects.photoLandscapeStroke} favicon.svg</li>
				<li>${iconObjects.photoLandscapeStroke} icon-maskable.png</li>
				<li>${iconObjects.photoLandscapeStroke} icon-monochrome.png</li>
				<li>${iconObjects.photoLandscapeStroke} icon.png</li>
				<li>${iconObjects.fileFill} index.html</li>
				<li>${iconObjects.fileFill} main.css</li>
				<li>${iconObjects.fileFill} manifest.json</li>
				<li>${iconObjects.photoLandscapeStroke} ogimage.png</li>
				<li>${iconObjects.fileFill} sw.js</li>
			</ul>
		</div>
	`,
	appstructure: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">App Structure</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>Setting up a three column Rebar app requires this stucture:</p>
<pre>
&lt;div class="containerApp columnsThree"&gt;
	&lt;aside class="containerAside double"&gt;
		&lt;div class="columnPrimary containerSidebar" id=""&gt;&lt;/div&gt;
		&lt;div class="columnSecondary" id=""&gt;&lt;/div&gt;
	&lt;/aside>
	&lt;main class="columTertiary">&lt;/main&gt;
	&lt;div id="appGlyph"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>
			<p>The content of a Rebar app must always live in a <code>containerApp</code> container. <code>containerApp</code> manages a lot of the transitions for the app frame.</p>
			<p>Any sidebars (here I mean the concept of a sidebar, not the <code>Sidebar</code> component included with Rebar) should always live inside a <code>containerAside</code> container, which manages the transitions for these columns.</p>
			<p><code>#appGlyph</code> is not mandatory but is used to fill in a background image for the main content column when it is empty. If you include this it has to be an SVG and the raw code inserted directly in to the HTML.</p>
		</div>
	`,
	config: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Config</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>Config in the context of Rebar is a JS file named <code>config.js</code> that holds important properties for managing how your app looks, works, and is filled with content. It is mandatory to include this file and nothing should be left out. Below is an explanation of what each property is used for:</p>			
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>appVersion</code></td>
						<td>The version number of your app. This is used to show new release notes to users.</td>
					</tr>
					<tr>
						<td><code>appName</code></td>
						<td>The name of your app. This is used in the Install Banner and How to Install Sheet.</td>
					</tr>
					<tr>
						<td><code>appDomain</code></td>
						<td>The URL for your app. This is used when calling the Sharing function.</td>
					</tr>
					<tr>
						<td><code>appPrivacyPolicy</code></td>
						<td>The URL for your Privacy Policy. This is used in the Tip Jar disclaimer text.</td>
					</tr>
					<tr>
						<td><code>appEmail</code></td>
						<td>The email you would like users to contact you at. This is used in the How to Install Sheet, specifically in the "Contact Support" link.</td>
					</tr>
					<tr>
						<td><code>appReleaseNotes</code></td>
						<td>The release note for the current version of your app. This is used in the What's New Sheet.</td>
					</tr>
					<tr>
						<td><code>appThemes</code></td>
						<td>The list of themes you are including in your app. These should be the same names as you use in your CSS. You also need to include what you would like the themes to be named in the tooltips in the Theme Picker.</td>
					</tr>
					<tr>
						<td><code>appAccents</code></td>
						<td>The list of accents you are including in your app. These should be the same names as you use in your CSS. You also need to include what you would like the accents to be named in the Accent Picker.</td>
					</tr>
					<tr>
						<td><code>appTextSizes</code></td>
						<td>The list of Dynamic Type text sizes you are including in your app. These should be set so that the <code>key</code> is the name you would use in CSS and the <code>value</code> is the label.</td>
					</tr>
					<tr>
						<td><code>appPreferencesVersion</code></td>
						<td>The version number for the internal app preferences (this does not need to match <code>appVersion</code>).</td>
					</tr>
					<tr>
						<td><code>appPreferencesDefault</code></td>
						<td>The default settings for your app. The starter project will include settings needed for Rebar to function but you can also include other app-specific default preferences here.</td>
					</tr>
					<tr>
						<td><code>topLevelRoute</code></td>
						<td>The name of the unique route you'll be using for the top level of the navigation stack.</td>
					</tr>
					<tr>
						<td><code>topLevelModifier</code></td>
						<td>If your Top Level Route needs a modifier you can set it here, otherwise set this to <code>false</code></td>
					</tr>
					<tr>
						<td><code>baseTimeLength</code></td>
						<td>The global CSS transition timing value.</td>
					</tr>
					<tr>
						<td><code>dynamicTypeSizes</code></td>
						<td>The list of Dynamic Type text size values you are including in your app. These should be set so that the <code>key</code> is the CSS name and the <code>value</code> is the value you would like to set.</td>
					</tr>
					<tr>
						<td><code>promptForTips</code></td>
						<td>This takes a <code>true</code> or <code>false</code> value. If <code>true</code> Rebar will automatically display a Sheet containing the Tip Jar.</td>
					</tr>
					<tr>
						<td><code>tipsLinks</code></td>
						<td>The URLS used in the Tips Prompt providing the <code>default</code>, and <code>custom</code> links.</td>
					</tr>
					<tr>
						<td><code>shortcutKeys</code></td>
						<td>The structure for the Shortcut Keys Panel.</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	versionhistory: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Version</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0.2</h3>
						<p class="subtext excludeMargin">14 January 2023</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Fixed the borders of sections with headers on Windows</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0.1</h3>
						<p class="subtext excludeMargin">8 January 2023</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Accordions, Tip Jar, and Service Worker cache',
									icon: false,
									size: "large",
								})
							}
						
							<ul class="excludeMargin">
								<li>Back Buttons now have a function to insert an arrow icon that matches the OS being used</li>
								<li>Many components have styling that makes them match Material 3 and Fluent for Windows 11</li>
								<li>The Product Sans font is bundled in to Rebar for Android</li>
								<li>Search Bars now include a magnifying glass icon that requires updated HTML</li>
								<li>Removed <code>background-color</code> from Item List Containers</li>
								<li>Added a debug mode which can be toggled on/off by pressing <code>Shift + D</code>. Currently this will enable OS Theme override in Display Options. This also requires updating the config.js with a new <code>debug</code> value in <code>rebar.appSettings</code>.</li>
								<li>Tokens have been updated with a more rounded style</li>
								<li>Accordions have been updated to use animatable <code>grid</code> instead of <code>min-height</code>. This requires an update to HTML structure for Accordions</li>
								<li>Updated the Tip Jar generator to be a function that returns HTML instead of appending it</li>
								<li>Added a new Mini Tip Jar that can be displayed inline in Item Lists</li>
								<li>Added the Product Sans font. This requires an update to the Service Worker cache</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow large spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0</h3>
						<p class="subtext excludeMargin">4 November 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Routing, Tabs, Dialogs, Context Menus, Vanishing Toolbars, File Structure, Themes, Accents, Config, CSS colour definitions, and Service Worker cache',
									icon: false,
									size: "large",
								})
							}
							
							<h4>Added</h4>
							<ul>
								<li>You can now have more than one modal on-screen at the same time</li>
								<li>Added support for CSS Layers</li>
								<li>Added <code>tempAnimationStop()</code> function</li>
								<li>Added Small style for Banners</li>
								<li>Added Display style for Segmented Controls</li>
								<li>Alerts can now include a leading icon</li>
								<li>Context Menus can now include leading icons and colour chips in the button label</li>
								<li>Picker Menus can now have icons</li>
								<li>Added <code>grabOS()</code> helper which will tell you what OS Rebar is being run on (which is also inserted in to the <code>body</code> tag as a <code>data-os</code> attribute for styling purposes)</li>
								<li>Added Clock Pause, Filled File, Android Share, and Windows Share icons</li>
							</ul>
							
							<h4>Changes</h4>
							<ul>
								<li>The Routing system has been completely redesigned retiring <code>routes()</code> and replacing it with <code>controllerRoute()</code></li>
								<li>Tabs now use their own routing controller called <code>controllerTab()</code></li>
								<li>The <code>summonPanel()</code> function has been completely replaced with a new <code>showDialog()</code> function that uses the native HTML <code>dialog</code> element</li>
								<li>Slim Sheets have been renamed to Small Sheets</li>
								<li>When using a mouse the Buttons on Alerts will use an inline layout</li>
								<li>Animations on Dialogs and Context Menus are now more springy</li>
								<li>The <code>.secondary</code> Button class has been remaned to <code>.translucent</code> to be more semantic</li>
								<li>The <code>.tertiary</code> Button class has been remaned to <code>.secondary</code> to be more semantic and has been restyled</li>
								<li>Updated the styling of Form Elements to be less loud</li>
								<li><code>styles.css</code> has been renamed to <code>app.css</code> for consistency</li>
								<li><code>rebar.css</code> and <code>app.css</code> are now an <code>import</code> inside of <code>main.css</code> to work with CSS Layers</li>
								<li>The icons file has been broken apart in to separate files to be more managable</li>
								<li>Restructured the way Context Menus are tagged so center menus can be positioned correctly</li>
								<li>Items inside a Context Menu can now be grouped with a container so menus can be dynamically generated</li>
								<li>Context Menus now have overflow scrolling</li>
								<li>Context Menus now have specific styling when using a mouse</li>
								<li>Context Menus, Alerts, and Toasts now use a translucent background for the menu panel</li>
								<li>Popovers now have a larger corner radius to differentiate them from Menus</li>
								<li><code>.paddingContent</code> now has <code>scrollbar-gutter</code> applied to it to accomodate accordions</li>
								<li><code>metadata.js</code> has been renamed to <code>config.js</code> for clarity</li>
								<li>The Theme and Accent Pickers have been redesigned to have a more compact appearance</li>
								<li>Buttons have a more compact appearance when using a mouse</li>
								<li>Large Buttons are now more differentiated in size compared to standard size Buttons</li>
								<li>Updated the styling of the buttons in Blank States</li>
								<li>Switches no longer need the <code>.knob</code> DOM element, it has been replaced with a <code>::before</code> on the <code>.switch</code> class</li>
								<li>Switches and Search Bars now have OS specific styling</li>
								<li>Refined the sizing of Switches on touchscreen devices</li>
								<li>The Tips panel has been redesigned</li>
								<li><code>insertShareButton()</code> is now an inline function and changes icon based on the OS</li>
								<li>In the CSS <code>rgba(*, *, *, *)</code> has been replaced with <code>rgb(* * * / *)</code></li>
								<li>Updated the Inwards and Outwards Chevron icons</li>
							</ul>
							
							<h4>Fixes</h4>
							<ul>
								<li>Added new <code>.vanishing</code> class to stop Toolbars from having a transition when they don't need it</li>
								<li>Added <code>.hideOverflow</code> and <code>.large</code> classes to Accordions to handle different Accordion types</li>
								<li>Banners inserted inside Accordions no longer have incorrect styling applied</li>
							</ul>
							
							<h4>Removed</h4>
							<ul>
								<li>The <code>clickSegment()</code> function has been retired in favour of <code>controllerTab()</code></li>
								<li>Some margin options for Half Sheets have been retired and now Half Sheets will always be inset from the viewport</li>
								<li>The Outline Button style has been retired</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.4.1</h3>
						<p class="subtext excludeMargin">4 October 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>The <code>.hidden</code> class now has extra specificity applied to it</li>
								<li>Added <code>.noDecoration</code> utility class</li>
								<li>Added non-Always On version of the Dynamic Island iPhone icons</li>
								<li>Added Display Radius, Blueprint, and CarPlay icons</li>
								<li><code>.alwaysBackgroundColor</code> and <code>.alwaysForegroundColor</code> can now apply to SVG fills</li>
								<li>Added a new <code>append</code> mode to the Preferences system which will leave existing preferences alone but add a new one if it isn't present in local storage</li>
								<li>Switches now have a smaller appearance when using a mouse</li>
								<li>Added a narrow content padding class called <code>.paddingContentTight</code></li>
								<li>Fixed an issue where the toolbar border in the sidebar would disappear on an <code>expandSecondary</code> state</li>
								<li>Added new Tertiary style for buttons which has a reduced look but retains the accent colour</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.4</h3>
						<p class="subtext excludeMargin">12 September 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for the Tips Jar',
									icon: false,
									size: "large",
								})
							}
						
							<ul class="excludeMargin">
								<li>The Tips Jar links are now included in the app metadata</li>
								<li>The Tips prompt that generates on load is no longer hardcoded to the TypeDex tips links</li>
								<li>Images in the Gantt Chart now have a fixed height value</li>
								<li>Added rowid key to Gantt chart rows for targeting purposes</li>
								<li>Updated the Apple Watch icons to be focused solely on the display shape</li>
								<li>Added icons for the iPhone 14 series</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.3.1</h3>
						<p class="subtext excludeMargin">2 August 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Fixed an issue with the inline search bar positioning when saved to the iPad Home Screen</li>
								<li>Added support for displaying context menus in a center position</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.3</h3>
						<p class="subtext excludeMargin">15 June 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Added Pie Charts, Donut Charts, Gantt, and Stats Charts</li>
								<li>Added Banners</li>
								<li>Fixed the size of sorting carets on tables</li>
								<li>Added more targeted styling hooks for the Search function</li>
								<li>Added Exclamation Triangle, Info Circle Multi, Stage Manager, Reference Monitor, Checkmark Circle Multi, Times Circle Multi, Shrink Square, Steering Wheel, Fuel Pump icons</li>
								<li>Fixed the zoomSquareDuo icon so it gets properly tinted</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.2.1</h3>
						<p class="subtext excludeMargin">19 March 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Set the prompt for tips counter to activate at 4, 8, and 14 openings</li>
								<li>Added Brightness icon</li>
								<li>Fixed the layout of Context Menu Buttons with trailing icons</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow spacerSingle large">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.2</h3>
						<p class="subtext excludeMargin">27 February 2022</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<h3>Framework</h3>
							<h4>Added</h4>
							<ul>
								<li>You can now apply <code>.cropAccessoryBar</code> to a <code>.containerItemList</code> to have the Item List avoid an Accessory Bar</li>
								<li>Tables</li>
								<li><code>.hidden</code> helper class</li>
								<li><code>scrollToTop()</code> function</li>
								<li>In three column layouts you can now have routes that only use two columns</li>
								<li>Popovers</li>
								<li><code>--systempanel-lift</code> colour variable</li>
								<li>Teal as a default accent colour</li>
								<li><code>searchTable()</code> function specifically for searching tables</li>
								<li><code>insertShareButton()</code> function to handle insert Share buttons only when the browser supports Share functionality</li>
							</ul>
							
							<h4>Changes</h4>
							<ul>
								<li>The icon size on Content Menu Item buttons now matches the base font size</li>
								<li><code>changeView()</code> can now take a modifier value which can be used to set the subdued state of sidebar items in cases that are using Route Categories</li>
								<li>Sidebar icons can now use their initial fill</li>
								<li>Buttons now have a default gap applied to allow for spacing when an icon is included</li>
								<li><code>setMetaTheme()</code> now uses the <code>foreground</code> colour variable</li>
								<li>Made the Dyslexic Font display setting more clearly labelled</li>
								<li>Increased the background opacity of the Segmented Control track</li>
								<li>Set <code>.containerApp</code> to <code>position: fixed</code> in an attempt to stop Mobile Safari from positioning it incorrectly</li>
							</ul>
							
							<h4>Fixes</h4>
							<ul>
								<li><code>.pinLeft</code> and <code>.pinRight</code> now vertically centre their child items</li>
								<li>The grippers for Context Menu buttons now use the correct colour when set to <code>.toolbarItem</code></li>
								<li>The height of Accessory Bars are now sized to fix components when Open Dyslexic is used</li>
								<li>Toolbar layouts respect the notch better</li>
								<li>Open Dyslexic is now part of the default Service Worker cache</li>
							</ul>
							
							<h3>Icons</h3>
							<h4>Added</h4>
							<ul>
								<li>iPhone Touch ID</li>
								<li>iPhone Wide Face ID</li>
								<li>iPhone Narrow Face ID</li>
								<li>iPhone Liquid Retina</li>
								<li>iPhone Face View</li>
								<li>iPad Original</li>
								<li>iPad Home Button</li>
								<li>iPad Touch ID</li>
								<li>iPad Liquid Retina</li>
								<li>iPad Face View</li>
								<li>iPod touch Original</li>
								<li>iPod touch Retina</li>
								<li>iPod touch Face View</li>
								<li>Apple Watch Original</li>
								<li>Apple Watch Series 4</li>
								<li>Apple Watch Series 5</li>
								<li>Apple Watch Series 7</li>
								<li>Apple Watch Side View</li>
								<li>AppleTV</li>
								<li>SD Badge</li>
								<li>HD Badge</li>
								<li>2K Badge</li>
								<li>4K Badge</li>
								<li>8K Badge</li>
								<li>16K Badge</li>
								<li>Camera</li>
								<li>Screenshot</li>
								<li>Icon Grid</li>
								<li>Complication</li>
								<li>Car</li>
								<li>Group List</li>
								<li>Calendar</li>
								<li>Small Pixels</li>
								<li>Large Pixels</li>
								<li>Single Arrow Up</li>
								<li>Single Arrow Right</li>
								<li>Single Arrow Down</li>
								<li>Single Arrow Left</li>
								<li>Double Arrow Vertical</li>
								<li>Double Arrow Horizontal</li>
								<li>Double Arrow Diagonal Leading</li>
								<li>Double Arrow Diagonal Trailing</li>
								<li>Sun with Haze</li>
								<li>Watchface</li>
								<li>Closed Lock</li>
								<li>Open Lock</li>
								<li>Target</li>
								<li>Circle in Circle</li>
								<li>Pointing Hand</li>
								<li>Pressing Pointer Hand</li>
								<li>Horizontal Ruler</li>
								<li>Vertical Ruler</li>
								<li>Viewfinder</li>
								<li>Figma</li>
								<li>Sketch</li>
								<li>Zoom Square</li>
								<li>Face ID</li>
								<li>Touch ID</li>
								<li>Fingerprint</li>
								<li>LiDAR</li>
								<li>ProMotion</li>
								<li>iMac</li>
								<li>Tablet and Phone</li>
								<li>Chat Bubble</li>
								<li>EV Charging Plug</li>
								<li>Parking Sign</li>
								<li>Single Music Note</li>
								<li>Double Music Note</li>
								<li>Handset Leading</li>
								<li>Handset Trailing</li>
								<li>Handset Down</li>
								<li>Fork</li>
								<li>Knife</li>
								<li>Fork and Knife</li>
								<li>NFC</li>
								<li>Table</li>
								<li>Thumbs Up</li>
								<li>Thumbs Down</li>
								<li>Rounded Square</li>
								<li>Squircle</li>
								<li>Teardrop</li>
							</ul>
							
							<h4>Updated</h4>
							<ul>
								<li>Shortcuts</li>
								<li>TV</li>
								<li>Monitor</li>
								<li>Compare Rectangles</li>
								<li>Screen Sizes Stroke</li>
								<li>Screen Sizes Fill</li>
							</ul>
							
							<h4>Removed</h4>
							<ul class="excludeMargin">
								<li>Screen Sizes Duo</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion hideOverflow large spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.1</h3>
						<p class="subtext excludeMargin">3 December 2021</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes',
									icon: false,
									size: "large",
								})
							}
						
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
								<li>Added <code>--warning</code>, <code>--info</code>, <code>--font-serif</code>, and <code>--font-dyslexic</code> CSS variables</li>
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
								<li>Text Capital</li>
								<li>Text Dyslexia</li>
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
								<li>Cube</li>
								<li>Box</li>
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
							<ul class="spacerTriple">
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
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.0</h3>
						<p class="subtext excludeMargin">10 October 2021</p>
					</span>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Initial release of Rebar</li>
								<li>Initial release of the Rebar Icon Set</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		</div>
	`,
	requirements: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routegettingstarted({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Getting&hellip;")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Requirements</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>These requirements are based on needing to support <code>min()</code>, <code>max()</code>, <code>minmax()</code>, <code>clamp()</code>, <code>env()</code>, <code>aspect-ratio</code>, <code>dialog</code>, <code>@layer</code>, and <code>scrollbar-gutter</code>.</p>
			<p>For this reason (among many others) no version of Internet Explorer is supported. The minimum requirements for any Rebar app are:</p>
			
			<table class="definitions">
				<thead>
					<tr>
						<th>Version</th>
						<th>Requirements</th>
					</tr>
				</thead>
					<tr>
						<td class="textBold">2.0.1</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">2.0</td>
						<td>
							<p class="subtext">Increased because of <code>dialog</code>, <code>@layer</code>, and <code>scrollbar-gutter</code>.</p>
							<ul class="excludeMargin">
								<li>jQuery 3.6.1</li>
								<li>Edge 99</li>
								<li>Firefox 98</li>
								<li>Chrome 99</li>
								<li>Safari 15.4</li>
								<li>Opera 86</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">1.2 - 1.5</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">1.1</td>
						<td>
							<p class="subtext">Increased because of <code>aspect-ratio</code>.</p>
							<ul class="excludeMargin">
								<li>jQuery 3.6.0</li>
								<li>Edge 88</li>
								<li>Firefox 89</li>
								<li>Chrome 88</li>
								<li>Safari 15</li>
								<li>Opera 74</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">1.0</td>
						<td>
							<ul class="excludeMargin">
								<li>jQuery 3.6.0</li>
								<li>Edge 79</li>
								<li>Firefox 75</li>
								<li>Chrome 79</li>
								<li>Safari 13</li>
								<li>Opera 66</li>
							</ul>
						</td>
					</tr>
				<tbody>
				</tbody>
			</table>
		</div>
	`,
}

const controls = {
	buttons: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Buttons</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Buttons have different styling based on the <code>pointer</code> used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th></th>
						<th>Primary</th>
						<th>Secondary</th>
						<th>Translucent</th>
						<th>Positive</th>
						<th>Destructive</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Standard</td>
						<td><button>Label</button></td>
						<td><button class="secondary">Label</button></td>
						<td><button class="translucent">Label</button></td>
						<td><button class="positive">Label</button></td>
						<td><button class="destructive">Label</button></td>
					</tr>
					<tr>
						<td>Confirm</td>
						<td><button class="confirm">Label</button></td>
						<td><button class="secondary confirm">Label</button></td>
						<td><button class="translucent confirm">Label</button></td>
						<td><button class="positive confirm">Label</button></td>
						<td><button class="destructive confirm">Label</button></td>
					</tr>
					<tr>
						<td>Transparent</td>
						<td><button class="transparent">Label</button></td>
						<td><button class="secondary transparent">Label</button></td>
						<td><button class="translucent transparent">Label</button></td>
						<td><button class="positive transparent">Label</button></td>
						<td><button class="destructive transparent">Label</button></td>
					</tr>
					<tr>
						<td>Transparent Confirm</td>
						<td><button class="transparent confirm">Label</button></td>
						<td><button class="secondary transparent confirm">Label</button></td>
						<td><button class="translucent transparent confirm">Label</button></td>
						<td><button class="positive transparent confirm">Label</button></td>
						<td><button class="destructive transparent confirm">Label</button></td>
					</tr>
					<tr>
						<td>Large</td>
						<td><button class="large">Label</button></td>
						<td><button class="secondary large">Label</button></td>
						<td><button class="translucent large">Label</button></td>
						<td><button class="positive large">Label</button></td>
						<td><button class="destructive large">Label</button></td>
					</tr>
					<tr>
						<td>Disabled</td>
						<td><button class="disabled">Label</button></td>
						<td><button class="secondary disabled">Label</button></td>
						<td><button class="translucent disabled">Label</button></td>
						<td><button class="positive disabled">Label</button></td>
						<td><button class="destructive disabled">Label</button></td>
					</tr>
					<tr>
						<td>Standard Icon</td>
						<td><button>${iconShapes.starFivePointFill}</button></td>
						<td><button class="secondary">${iconShapes.starFivePointFill}</button></td>
						<td><button class="translucent">${iconShapes.starFivePointFill}</button></td>
						<td><button class="positive">${iconShapes.starFivePointFill}</button></td>
						<td><button class="destructive">${iconShapes.starFivePointFill}</button></td>
					</tr>
					<tr>
						<td>Multi Icon</td>
						<td><button class="useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="secondary useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="translucent useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="positive useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="destructive useInitialFill">${iconObjects.compassMulti}</button></td>
					</tr>
					<tr>
						<td>Transparent Icon</td>
						<td><button class="transparent">${iconShapes.starFivePointFill}</button></td>
						<td><button class="secondary transparent">${iconShapes.starFivePointFill}</button></td>
						<td><button class="translucent transparent">${iconShapes.starFivePointFill}</button></td>
						<td><button class="positive transparent">${iconShapes.starFivePointFill}</button></td>
						<td><button class="destructive transparent">${iconShapes.starFivePointFill}</button></td>
					</tr>
					<tr>
						<td>Transparent Multi Icon</td>
						<td><button class="transparent useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="secondary transparent useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="translucent transparent useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="positive transparent useInitialFill">${iconObjects.compassMulti}</button></td>
						<td><button class="destructive transparent useInitialFill">${iconObjects.compassMulti}</button></td>
					</tr>
					<tr>
						<td>Circular</td>
						<td><button class="circular">${iconShapes.starFivePointFill}</button></td>
						<td><button class="secondary circular">${iconShapes.starFivePointFill}</button></td>
						<td><button class="translucent circular">${iconShapes.starFivePointFill}</button></td>
						<td><button class="positive circular">${iconShapes.starFivePointFill}</button></td>
						<td><button class="destructive circular">${iconShapes.starFivePointFill}</button></td>
					</tr>
				</tbody>
			</table>
				
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Buttons are the backbone of many components in Rebar. They are the base layer that enables a lot of styles to be applied. A Button can contain text, SVGs, and images.</p>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Buttons have no functions in of themselves but can have many other functions applied to them since most clickable components will be based off of Buttons.</p>
			
			<h3>CSS</h3>
			<p>Buttons have many base styling classes that can be mixed with modified classes.</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Base Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Primary</td>
						<td>There is no class for the Primary style, just including a <code>button</code> element will have it look like the Primary style.</td>
					</tr>
					<tr>
						<td><code>secondary</code></td>
						<td>Sets the backing to less prominent appearance.</td>
					</tr>
					<tr>
						<td><code>translucent</code></td>
						<td>Sets the backing to a translucent material.</td>
					</tr>
					<tr>
						<td><code>destructive</code></td>
						<td>Sets the backing to a red colour.</td>
					</tr>
					<tr>
						<td><code>positive</code></td>
						<td>Sets the backing to a green colour.</td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Modifier Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>transparent</code></td>
						<td>Removes the backing and sets the label to the colour of the base class.</td>
					</tr>
					<tr>
						<td><code>confirm</code></td>
						<td>Sets the label to bold text.</td>
					</tr>
					<tr>
						<td><code>disabled</code></td>
						<td>Reduces the opacity and disables pointer events.</td>
					</tr>
					<tr>
						<td><code>large</code></td>
						<td>Increases the font size of the label.</td>
					</tr>
					<tr>
						<td><code>circular</code></td>
						<td>Sets the button to a fixed <code>width</code>, fixed <code>height</code>, and increases the <code>border-radius</code>. It's recommended to only use this style with an icon.</td>
					</tr>
					<tr>
						<td><code>useInitialFill</code></td>
						<td>Uses the <code>fill</code> set inside the SVG instead of what comes from the Button class (this should be used for Multi style icons).</td>
					</tr>
				</tbody>
			</table>
			
			<p>There are many other styles but they are specific to different components. What is listed here can be used with any button but primarily intended for form buttons.</p>
		</div>
	`,
	sidebaritems: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Sidebar Items</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Sidebar Items have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
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
				<br><br>
				<button class="sidebar useInitialFill">
					<div class="labelSidebar">
						${iconObjects.compassMulti}
						Use Initial Fill
					</div>
					<div class="containerBadge">14</div>
				</button>
				<br><br>
				<button class="sidebar picked useInitialFill">
					<div class="labelSidebar">
						${iconObjects.compassMulti}
						Use Initial Fill
					</div>
					<div class="containerBadge">14</div>
				</button>
			</section>
			
			<h2>Documentation</h2>
			<p>Sidebar Items are buttons with the <code>sidebar</code> class. They come with default, <code>picked</code>, and <code>subdued</code> (this is used when an item in a secondary column is picked) states. An icon is not mandatory but highly recommended. You can include a Badge if need.</p>
			<p>The <code>.useInitialFill</code> class will allow an SVG used as the icon to keep the <code>fill</code> colours that are baked in to it's code.</p>
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
	listitems: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">List Items</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'List Items have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
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
	badges: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Badges</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
	segmenteditems: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Segmented Items</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Segmented Items have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
			
			<h2>Examples</h2>
			<h3 class="h6">Default Style</h3>
			<section class="containerSection">
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
				<button class="segment picked">Picked</button>
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
			</section>
			<h3 class="h6">Split Style</h3>
			<section class="containerSection split">
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
				<button class="segment picked">Picked</button>
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
			</section>
			<h3 class="h6">Display Style</h3>
			<section class="containerSection display">
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
				<button class="segment picked">Picked</button>
				<button class="segment">Standard</button>
				<button class="segment">Standard</button>
			</section>
			
			<h2>Documentation</h2>
			<p>Segmented Items are buttons with the <code>segment</code> class. They come with default and <code>picked</code> states.</p>
			<p>By default the picked segment will have a raised look. If you add the <code>split</code> class to the parent container the picked style will be a more flat look which is good for toolbars. Alternatively the <code>display</code> class is well suited for image backgrounds.</p>
			<h3 class="h6">Template</h3>
<pre>
&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
</pre>
		</div>
	`,
	toolbaritems: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Toolbar Items</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Toolbar Items have different styling based on the <code>pointer</code> used',
					icon: false,
					size: 'large',
				})
			}
			<h2>Examples</h2>
			<section class="containerSection">
				<button class="toolbarItem" title="Example Button">${iconShapes.plusCircleStroke}</button>
			</section>
			<h2>Documentation</h2>
			<p>This button style is intended to give a more native look to toolbar buttons when viewed on a device using a mouse by using the <code>toolbarItem</code> class. If this isn't required please use the other transparent button styles.</p>
		</div>
	`,
	tabbaritems: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Tab Bar Items</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Tab Bars Items have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
			<h2>Examples</h2>
			<section class="containerSection">
				<button class="tab">
					<div class="wrapper">
						${iconNature.sunFill}
					</div>
					Standard
				</button>
				<button class="tab picked">
					<div class="wrapper">
						${iconNature.sunFill}
					</div>
					Picked
				</button>
			</section>
			
			<h2>Documentation</h2>
			<p>Tab Bar Items are buttons with the <code>tab</code> class. They come with default and <code>picked</code> styles. Tab Bar Items should always include both an icon and a label.</p>
			<h3 class="h6">Template</h3>
<pre>
&lt;button class="tab picked" data-name="" onclick="routename('modifier')"&gt;
	&#36;{icon}
	Label
&lt;/button&gt;
</pre>
		</div>
	`,
	backbutton: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Back Button</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'The Back Button will use a different icon based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td>
							<button class="back transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.chevronBackwardsStroke}
								Label
							</button>
						</td>
					</tr>
					<tr>
						<td>Android or Windows</td>
						<td>
							<button class="back transparent" style="display: inline-flex;" title="Navigate Back">
								${iconShapes.arrowSingleLeft}
							</button>
						</td>
					</tr>
				</tbody>
			</table>			
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>The Back button is the single way in Rebar to navigate backwards between views. It should always be included in Secondary and Main columns. Including a label is recommended but not mandatory</p>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;button class="back slim transparent" onclick='routename({modifier: false, navtype: "backwards"})' title="Navigate Back"&gt;
	&#36;{insertBackButton("label")}
&lt;/button&gt;
</pre>
			
			<h3>Functions</h3>
			<p>Back Buttons make use of the <code>controllerRoute()</code> function (View Routing for more details). The click function should always be the route this button will navigate to. It should usuall have a <code>modifier</code> of <code>false</code> and always a <code>navtype</code> of <code>backwards</code>.</p>
			<p class="spacerTriple">For rendering the contents you should use the <code>insertBackButton()</code> function which will handle displaying the correct arrow for you based on the OS.</p>
			
			<h3>CSS</h3>
			<p>On larger screens the Back Button will hide itself as it's not necessary since all columns are always visible (The examples on this page are being forced to be always visible so they can be seen). At it's core the Back Button is a standard Button which means it can inherit all the styling classes as needed. While not mandatory, it's strongly recommended to include the <code>transparent</code> class.</p>
			<p>For Back Buttons with the chevron not in a circle you need to add the <code>slim</code> class to the button to adjust the size of the SVG to avoid excess whitespace.</p>
			<p>The back button lacks a background when <code>:hover</code>. This was done to pull in the padding to give as much space as possible for text within the bounds of the <code>.pinLeft</code> width.</p>
		</div>
	`,
	contextmenus: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Context Menus</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Context Menus have different styling based on the <code>pointer</code> and OS used',
					icon: false,
					size: 'large',
				})
			}
			<h2>Examples</h2>
			<table class="definitions spacerTriple">
				<tbody>
					<tr>
						<td>Primary Button Style</td>
						<td>
							<div class="containerContextButton" data-setting="context1" data-position="left">
								<button class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Transparent Button Style</td>
						<td>
							<div class="containerContextButton" data-setting="context2" data-position="left">
								<button class="buttonContext transparent">
									<span class="contextLabel">${iconObjects.trashStroke} Label</span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Secondary Button Style</td>
						<td>
							<div class="containerContextButton" data-setting="context3" data-position="left">
								<button class="buttonContext secondary">
									<div class="contextContainerLabel">
										<span class="contextLabel">Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Primary Icon Button</td>
						<td>
							<div class="containerContextButton" data-setting="context4" data-position="left">
								<button class="buttonContext" title="Example with icon and no label">
									<span class="contextLabel">
										${iconShapes.triangleRightCircleStroke}
									</span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Transparent Icon Button</td>
						<td>
							<div class="containerContextButton" data-setting="context5" data-position="left">
								<button class="buttonContext transparent" title="Example with icon and no label">
									<span class="contextLabel">
										${iconShapes.triangleRightCircleStroke}
									</span>
									<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Left Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="left">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel">Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Center Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="center">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel">Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Right Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="right">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel">Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>With Icons</td>
						<td>
							<div class="containerContextButton" data-setting="context7" data-type="icons" data-position="left">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel">${iconObjects.trashStroke} Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="love">
										<span>Save to Playlist&hellip;</span>
										${iconShapes.plusCircleStroke}
									</button>
									<button data-value="second">
										<span>Love</span>
										${iconShapes.heartStroke}
									</button>
									<button data-value="second">
										<span>View Album</span>
										${iconShapes.musicnoteDouble}
									</button>
									<button data-value="second">
										<span>Add to Up Next&hellip;</span>
										${iconInterfaceElements.listStroke}
									</button>
									<div class="divider"></div>
									<button data-value="third">
										<span>Profile</span>
										<img src="app/images/ui/sidebar1.png" />
									</button>
									<div class="divider"></div>
									<button data-value="fourth" class="destructive">
										<span>Delete</span>
										${iconObjects.trashStroke}
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Non-Button</td>
						<td>
							<div class="containerContextButton" data-setting="context8" data-position="center">
								<img class="buttonContext" src="app/images/ui/sidebar1.png" width="32"  title="Example with image" />
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Specific Width Button</td>
						<td>
							<div class="containerContextButton" data-setting="context9" data-position="left">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel">Label</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first">First</button>
									<button data-value="second">Second</button>
									<button data-value="third">Third</button>
									<button data-value="fourth">Fourth</button>
									<button data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Colour Chips</td>
						<td>
							<div class="containerContextButton" data-setting="context" data-type="pickericons" data-position="left" data-accent="red">
								<button class="buttonContext transparent excludePadding">
									<div class="contextContainerLabel">
										<span class="contextLabel"><div class="colorChip" data-accent="red"></div> Red</span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button class="picked" data-value="first">
										Red
										<div class="colorChip" data-accent="red"></div>
									</button>
									<button data-value="second">
										Blue
										<div class="colorChip" data-accent="blue"></div>
									</button>
									<button data-value="third">
										Green
										<div class="colorChip" data-accent="green"></div>
									</button>
									<button data-value="fourth">
										Yellow
										<div class="colorChip" data-accent="yellow"></div>
									</button>
									<button data-value="fifth">
										Purple
										<div class="colorChip" data-accent="purple"></div>
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Picker</td>
						<td>
							<div class="containerContextButton" data-setting="picker1" data-position="left" data-type="picker">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel"></span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first" data-label="First">First</button>
									<button data-value="second" data-label="Second">Second</button>
									<button data-value="third" data-label="Third">Third</button>
									<button data-value="fourth" data-label="Fourth">Fourth</button>
									<button data-value="fifth" data-label="Fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Picker with Icons</td>
						<td>
							<div class="containerContextButton" data-setting="picker1" data-position="left" data-type="pickericons">
								<button class="buttonContext">
									<div class="contextContainerLabel">
										<span class="contextLabel"></span>
										<span class="contextGripper">${iconShapes.chevronOutwardsVerticalFill}</span>
									</div>
								</button>
								<div class="contextContainerMenu">
									<button data-value="first" data-label="First">
										<span>Paintbrush</span>
										${iconObjects.paintbrushFill}
									</button>
									<button data-value="second" data-label="Second">
										<span>Highlighter</span>
										${iconObjects.highlighterFill}
									</button>
									<button data-value="third" data-label="Third">
										<span>Pencil</span>
										${iconObjects.pencilFill}
									</button>
									<button data-value="fourth" data-label="Fourth">
										<span>Pen</span>
										${iconObjects.penFill}
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Popover</td>
						<td>
							<div class="containerContextButton" data-setting="examplePopover" data-position="center" data-type="popover">
								<button class="buttonContext">
									<span class="contextLabel">Label</span>
								</button>
								<div class="contextContainerMenu">
									<div class="containerPopoverContent">
										<h1 class="textAlignCenter excludePadding">This is an example Popover</h1>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Context Menus come in two parts, an element with the <code>buttonContext</code> class and a container of buttons with the <code>contextContainerMenu</code>. Both of these sit inside a <code>.containerContextButton</code> container.</p>
			<p>They also come in two varities, a Standard Menu and a Picker Menu. Both will display a list of options when clicked but only the Picker Menu will update the label of the button. Picker Menus will also save their selected value to local storage while Standard Menus will not.</p>
			<p>When setting up a Context Menu it's important to add the appropriate data attributes. These will help with styling and functionality.</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>data-setting</code></td>
						<td>Used on <code>.containerContextButton</code> and acts as the ID for the Context Menu.</td>
					<tr>
					<tr>
						<td><code>data-position</code></td>
						<td>Accepts a value of <code>left</code>, <code>center</code>, or <code>right</code> and determines which way the menu will open.</td>
					<tr>
					<tr>
						<td><code>data-type</code></td>
						<td>Accepts a value of <code>picker</code> (which sets your Context Menu as a Picker Menu and displays the checkmark of the picked item), <code>icons</code> (allows you to set icons to the right of each item), <code>pickericons</code> (which allows you to have an Icons style menu with a picked checkmark), and <code>popover</code> (which gives you an empty container and slightly different styling).</td>
					<tr>
					<tr>
						<td><code>data-value</code></td>
						<td>The value of the selected item.</td>
					<tr>
					<tr>
						<td><code>data-label</code></td>
						<td>The label of the selected item (this is here so you can set labels for the button with whatever case you want.</td>
					<tr>
					<tr>
						<td><code>data-icongroup</code></td>
						<td>The name of the Rebar Icon group that you would like to use.</td>
					<tr>
					<tr>
						<td><code>data-iconname</code></td>
						<td>The name of the Rebar Icon that you would like to use.</td>
					<tr>
				</tbody>
			</table>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="containerContextButton" data-setting="" data-position="" data-type="" data-icongroup="" data-iconname=""&gt;
	&lt;button class="buttonContext"&gt;
		&lt;div class="contextContainerLabel"&gt;
			&lt;span class="contextLabel"&gt;&lt;/span&gt;
			&lt;span class="contextGripper"&gt;&#36;{iconShapes.chevronOutwardsVerticalFill}&lt;/span&gt;
		&lt;/div&gt;
	&lt;/button&gt;
	&lt;div class="contextContainerMenu"&gt;
		&lt;button data-value="" data-label=""&gt;&lt;/button&gt;
		&lt;button data-value="" data-label=""&gt;&lt;/button&gt;
	&lt;/div&gt;
&lt;/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p>There are three functions related to Context Menus:</p>
			<ol>
				<li>A click function on all <code>.buttonContext</code> that simply opens the menu.</li>
				<li><code>clickContextMenuItem()</code> which handles picking the item and returning values. You will need to set this manually for every Context Menu you include.</li>
				<li>A click function that will allow you to click outside the menu to dismiss it (when you click on a Context Menu Button to open the menu a class is added to the <code>body</code> which this click function will remove).</li>
			</ol>
			<p class="spacerTriple">No value is saved to local storage by default. Instead use the Preferences system with the returned value and label.</p>
			
			<h3>CSS</h3>
			<p>Most of the styling is handled for you. If you use a standard Button all of the Button styling classes will apply. On top of this you don't have to use a Button, any element with the <code>buttonContext</code> class will make the element clickable.</p>
			<p>Menu items must be Buttons. They will infer styling from the <code>.contextContainerMenu</code> class. You can add the <code>destructive</code> class to a menu item Button to change the text and icon to red.</p>
			<p>Menu items can be grouped in a container with the <code>.group</code> class to help with dynamic menu generation</p>
		</div>
	`,
	popovers: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Popovers</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Popovers have different styling based on the <code>pointer</code> and OS used',
					icon: false,
					size: 'large',
				})
			}
			<h2>Examples</h2>
			<div class="containerContextButton spacerTriple" data-setting="examplePopover" data-position="left" data-type="popover">
				<button class="buttonContext">
					<span class="contextLabel">Show</span>
				</button>
				<div class="contextContainerMenu">
					<div class="containerPopoverContent">
						<h1 class="textAlignCenter excludePadding">This is an example Popover</h1>
					</div>
				</div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Popovers are an extension of Context Menus to the point they are the exact same structure except <code>data-type</code> on <code>contextContainerMenu</code> is set to <code>popover</code>.</p>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Popovers have no functions of their own. All functionality is inherited from Context Menus.</p>
			
			<h3>CSS</h3>
			<p>It is important to note that <code>contextContainerMenu</code> can not have any padding added to it because Chrome will display this when the menu is collapsed. Instead add a container inside and add the padding to that.</p>
			<p>You will need to manually set the <code>min-width</code>, <code>max-width</code>, <code>min-height</code>, and <code>max-height</code> for <code>.contextContainerMenu</code>. Rebar does not want to make any assumptions about how you want to size each Popover.</p>
			<p>All other styling considerations are inherited from Context Menus.</code>
		</div>
	`,
	segmentedcontrols: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Segmented Controls</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Segmented Controls have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<h3 class="h6">Default</h3>
			<section class="containerSection">
				<div class="controlSegmented" data-setting="segment1">
					<button class="segment" data-name="defaultsegment1" onclick="routesegmentexampledefault('defaultsegment1')">Watch Now</button>
					<button class="segment picked" data-name="defaultsegment2" onclick="routesegmentexampledefault('defaultsegment2')">${iconTransport.rocketStroke}</button>
					<button class="segment" data-name="defaultsegment3" onclick="routesegmentexampledefault('defaultsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
				</div>
			</section>
			
			<h3 class="h6">Split</h3>
			<section class="containerSection">
				<div class="controlSegmented split" data-setting="segment2">
					<button class="segment" data-name="splitsegment1" onclick="routesegmentexamplesplit('splitsegment1')">Watch Now</button>
					<button class="segment picked" data-name="splitsegment2" onclick="routesegmentexamplesplit('splitsegment2')">${iconTransport.rocketStroke}</button>
					<button class="segment" data-name="splitsegment3" onclick="routesegmentexamplesplit('splitsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
				</div>
			</section>
			
			<h3 class="h6">Display</h3>
			<section class="containerSection">
				<div class="controlSegmented display" data-setting="segment4">
					<button class="segment" data-name="displaysegment1" onclick="routesegmentexampledisplay('displaysegment1')">Watch Now</button>
					<button class="segment picked" data-name="displaysegment2" onclick="routesegmentexampledisplay('displaysegment2')">${iconTransport.rocketStroke}</button>
					<button class="segment" data-name="displaysegment3" onclick="routesegmentexampledisplay('displaysegment3')"><img src="app/images/ui/sidebar1.png" /></button>
				</div>
			</section>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Segmented Controls are just a set of Buttons that sit in a <code>controlSegmented</code> container. The selected Button will gain a <code>picked</code> class.</p>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="controlSegmented" data-setting="">
	&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button class="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
&lt;/div>
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Segmented Controls use the <code>controllerTab()</code> function (Refer to Tab Bars documentation on how this works).</p>
			
			<h3>CSS</h3>
			<p>By default picked segments will use a raised style with the segments sitting in a track.</p>
			<p>To make Segmented Controls feel more at home in a Toolbar you can add the <code>split</code> class and the track will no longer be visible and the picked segment will have a more flat look.</p>
			<p>For use on backgrouds with images you can use the <code>display</code> class which adds a dark container and white picked style with rounded buttons.</p>
		</div>
	`,
	switches: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Switches</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Switches have different styling based on the <code>pointer</code> and OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default Off</td>
						<td>
							<button class="switch positive off" data-setting="switch1" title="Off" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
					<tr>
						<td>Default On</td>
						<td>
							<button class="switch" data-setting="switch2" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
					<tr>
						<td>Styled</td>
						<td>
							<button class="switch destructive" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>OS Specific</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td>
							<button class="switch" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button><br>
							<button class="switch off" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
					<tr>
						<td>iOS</td>
						<td data-os="ios">
							<button class="switch" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button><br>
							<button class="switch off" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
					<tr>
						<td>Android</td>
						<td data-os="android">
							<button class="switch" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button><br>
							<button class="switch off" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
					<tr>
						<td>Windows</td>
						<td data-os="windows">
							<button class="switch" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button><br>
							<button class="switch off" data-setting="switch3" title="On" onclick="exampleSwitches(this)"></button>
						</td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Switches are buttons that have the <code>switch</code> class added to them. Being buttons they can inherit any of the standard button styling classes to change the colour of the track. Adding an <code>off</code> class will set the Switch to the Off state.</p>
			<p><code>data-setting</code> is used as the selector for the <code>clickSwitch()</code> function.</p>
			<h4 class="h6">Code</h4>
<pre class="spacerTriple">
&lt;button class="switch positive" data-setting=""&gt;&lt;/button&gt;
</pre>
			<h3>Functions</h3>
			<p>This click function runs the function to toggle the Switch and can include any other functionality you need. No value is saved to local storage by default. Instead use the Preferences system with the returned value.</p>
<pre class="spacerTriple">
$(document).on('click', '.switch[data-setting=""]', function() {
	let state = clickSwitch(this);
});
</pre>
			
			<h3>CSS</h3>
			<p>All sizes use <code>--base-font-size</code> so will scale accordingly when using a Dynamic Type setting. The colour of the <code>knob</code> is set to always be white but this can be overwritten via appearance themes.</p>
		</div>
	`,
	forminputs: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Form Inputs</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Form Inputs have different styling based on the OS used',
					icon: false,
					size: 'large',
				})
			}
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
	searchbars: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Search Bars</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Search Bars have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<header class="containerToolbar singleItem withAccessory">
					<h1 class="headerToolbar">National Dex</h1>
				</header>
				<div class="containerAccessoryBar">
					<div class="containerSearch">
						<input type="search" placeholder="Search Pok&eacute;mon" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
						<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
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
	&lt;div class="buttonClearSearch"&gt;&#36;{iconShapes.timesCircleFill}&lt;/div&gt;
	&lt;div class="iconSearch"&gt;&#36;{iconInterfaceElements.searchStroke}&lt;/div&gt;
&lt;/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p>There are two functions that are needed for Search, <code>search()</code> and <code>searchClear()</code>. <code>searchClear()</code> should be wrapped in a click function.</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>inputID</code></td>
						<td>The ID of the search input.</td>
					</tr>
					<tr>
						<td><code>parentID</code></td>
						<td>The ID of the items container.</td>
					</tr>
					<tr>
						<td><code>itemClass</code></td>
						<td>The class of the items to be searched.</td>
					</tr>
					<tr>
						<td><code>valueClass</code></td>
						<td>The class of the container that contains the text you would like to be searched.</td>
					</tr>
					<tr>
						<td><code>searchScope</code></td>
						<td>The item that should be filtered. It should be set something like this <code>#parentContainer button</code>.</td>
					</tr>
					<tr>
						<td><code>clearButton</td>
						<td>This is for the Clear Search button and should only ever be set to <code>this</code>.</td>
					</tr>
				</tbody>
			</table>
			
<pre class="spacerTriple">
search({
	inputID: "",
	parentID: "",
	itemClass: "",
	valueClass: ""
})

$(document).on('click', '.buttonClearSearch', function() {
	searchClear({
		inputID: "",
		searchScope: "",
		clearButton: this,
		parentID: "",
	})
});
</pre>
			
			<h3>CSS</h3>
			<p>The search function gives you a few styling hooks incase you need to modify the list while a search is active. The <code>.activeSearch</code> class will get added to the <code>parentID</code> container as a general styling hook. Visible items will get the <code>.itemDisplayed</code> class and hidden items will get the <code>.itemHidden</code> class which can be used for more specific styling hooks.</p>
		</div>
	`,
	selectiongrids: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Selection Grids</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<h3 class="h6">Single Selection</h3>
			<div class="spacerDouble containerTokens" id="exampleTokenField" data-max="1" data-setting="critters">
				<div class="token" data-value="all" onclick="selectionGrid(this)">All</div>
				<div class="token" data-value="fish" onclick="selectionGrid(this)">Fish</div>
				<div class="token" data-value="insects" onclick="selectionGrid(this)">Insects</div>
				<div class="token" data-value="seacreatures" onclick="selectionGrid(this)">Sea Creatures</div>
			</div>
			<h3 class="h6">Multiple Selection</h3>
			<div class="spacerTriple containerTokens" id="exampleTokenField" data-max="2" data-setting="type">
				<div class="token" data-value="normal" onclick="selectionGrid(this)">Normal</div>
				<div class="token" data-value="fighting" onclick="selectionGrid(this)">Fighting</div>
				<div class="token" data-value="flying" onclick="selectionGrid(this)">Flying</div>
				<div class="token" data-value="poison" onclick="selectionGrid(this)">Poison</div>
				<div class="token" data-value="ground" onclick="selectionGrid(this)">Ground</div>
				<div class="token" data-value="rock" onclick="selectionGrid(this)">Rock</div>
				<div class="token" data-value="bug" onclick="selectionGrid(this)">Bug</div>
				<div class="token" data-value="ghost" onclick="selectionGrid(this)">Ghost</div>
				<div class="token" data-value="steel" onclick="selectionGrid(this)">Steel</div>
				<div class="token" data-value="fire" onclick="selectionGrid(this)">Fire</div>
				<div class="token" data-value="grass" onclick="selectionGrid(this)">Grass</div>
				<div class="token" data-value="water" onclick="selectionGrid(this)">Water</div>
				<div class="token" data-value="electric" onclick="selectionGrid(this)">Electric</div>
				<div class="token" data-value="psychic" onclick="selectionGrid(this)">Psychic</div>
				<div class="token" data-value="ice" onclick="selectionGrid(this)">Ice</div>
				<div class="token" data-value="dragon" onclick="selectionGrid(this)">Dragon</div>
				<div class="token" data-value="dark" onclick="selectionGrid(this)">Dark</div>
				<div class="token" data-value="fairy" onclick="selectionGrid(this)">Fairy</div>
			</div>
			
			<button id="displaySelections" class="spacerTriple" onclick="showSelectionResults()">Display Selected Values</button>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Selection Grids do not require much specific structure, any container filled with clickable children items will do. This makes Selection Grids incredibly flexible in what they can be used for (Token Fields and Collection Views instantly come to mind).</p>
			<p>It is important to include <code>data-max</code> and <code>data-setting</code> on the container and <code>data-value</code> on the items. <code>data-max</code> can take a value of any number or <code>any</code> if you wish to not limit the selection.</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>data-max</code></td>
						<td>The max number of selected items the Selection Grid should allow.</td>
					<tr>
					<tr>
						<td><code>data-setting</code></td>
						<td>The name of the Selection Grid and can be used for setting local storage if required (unlike other functions, <code>selectionGrid()</code> will not store to local storage automatically).</td>
					<tr>
					<tr>
						<td><code>data-value</code></td>
						<td>The value of the item.</td>
					<tr>
				</tbody>
			</table>
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
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Functions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>selectionGrid()</code></td>
						<td>Sits within a click function and allows you to apply a <code>picked</code> class to the items you click. Importantly, this will not return any values for you to use (if you do need to get a returned valuw with each click chain the <code>getSelectionGridGroups()</code> function in the same click function).</td>
					<tr>
					<tr>
						<td><code>getSelectionGridValues()</code></td>
						<td>This is a helper function and should not be called manually.</td>
					<tr>
					<tr>
						<td><code>getSelectionGridGroups()</code></td>
						<td>You must provide an array of group names (which are the <code>data-setting</code> you have applied to each group) as input for this function. This will return the picked items as an object broken up by the groups you input.</td>
					<tr>
				</tbody>
			</table>
			<h3>CSS</h3>
			<p>Selection Grids have no styling on their own since their job is to handle setting the picked state of items in the grid and returning their values. For whatever items you use inside a Selection Grid you need to have a <code>.picked</code> class for those items (you can set this on load for items that need to be picked by default and the <code>selectionGrid()</code> function will still work as expected.</p>
		</div>
	`,
	tokens: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Tokens</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Tokens have different styling based on the OS used',
					icon: false,
					size: 'large',
				})
			}
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
	sharebutton: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecontrols({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Controls")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Share Button</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'The Share Button will use a different icon based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<p class="subtext">Note: If you are using a browser that do not support <code>navigator.share</code> then a non-functional button will be displayed for illustrative purposes.</p>
			
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td>
							<button class="transparent" id="dummyShareButton" title="Share Content">
								${iconInterfaceElements.shareAppleUpStroke}
							</button>
						</td>
					</tr>
					<tr>
						<td>Android</td>
						<td>
							<button class="transparent" id="dummyShareButton" title="Share Content">
								${iconInterfaceElements.shareAndroidStroke}
							</button>
						</td>
					</tr>
					<tr>
						<td>Windows</td>
						<td>
							<button class="transparent" id="dummyShareButton" title="Share Content">
								${iconInterfaceElements.shareWindows}
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">There is no HTML, the <code>insertShareButton()</code> function will handle it for you.</p>
			
			<h3>Function</h3>
			<p>The <code>insertShareButton()</code> function is designed to only share the URL of the current page (if you wish to do share other content a different function will need to be written). At this time the title of the share will default to the <code>appName</code> constant.</p>
			<p class="spacerTriple">This is designed to work inline so it must be include in an <code>append()</code>. You must provide <code>style</code> (a button class name) and a <code>title</code> for the hover text.</p>
			
			<h3>CSS</h3>
			<p>The <code>share</code> class has no styles of it's own. You may apply it to anything you wish to use as a Share Button.</p>
		</div>
	`,
}

const layout = {
	routing: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Routing</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Documentation</h2>
			<p>Routing is the primary way to generate and navigate through views in Rebar. It will handle forwards navigation, backwards navigation, and loading a deeplink.
			<p>There is minimal setup required:</p>
			<ul class="spacerTriple">
				<li>Creating a set of route functions for each individual route</li>
				<li>Adding an onclick function to each button that will navigate to a view</li>
				<li>Adding a <code>data-name</code> to each button that will navigate to a view</li>
				<li>Setting up the default routes that should be load</li>
				<li>Handling deeplink URLs</li>
			</ul>
			
			<h3><code>controllerRoute()</code> Function</h3>
			<p>This is the primary navigation driver that handles column setup and generation. It should be present in each unique route function.</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>columns</code></td>
						<td>Handles the number of columns that should be visible when this view is loaded. Takes a value of <code>2</code> or <code>3</code>.</td>
					</tr>
					<tr>
						<td><code>level</code></td>
						<td>Lets the controller know what level this view will be. Takes a value of <code>primary</code>, <code>secondary</code>, <code>secondaryExpanded</code>, or <code>tertiary</code>.</td>
					</tr>
					<tr>
						<td><code>route</code></td>
						<td>The name of the route which is automatically derived from the unique route function that called <code>controllerRoute()</code>. This is used for setting the <code>picked</code> class on buttons.</td>
					</tr>
					<tr>
						<td><code>modifier</code></td>
						<td>Passed in from the unique route function that called <code>controllerRoute()</code>. This allows a value to modify the contents to be generated in the view. This value is also appended to the URL.</td>
					</tr>
					<tr>
						<td><code>type</code></td>
						<td>Passed in from the unique route function that called <code>controllerRoute()</code>. Takes a value of <code>forwards</code>, <code>backwards</code>, <code>deeplink</code>, or <code>stack</code>. This tells which mode the view should be loaded in.</td>
					</tr>
					<tr>
						<td><code>highlight</code></td>
						<td>Lets the controller know what value to use to highlight list items. Takes a value of <code>route</code> or <code>modifier</code>.</td>
					</tr>
				</tbody>
			</table>
			
			<h3><code>controllerTab()</code> Function</h3>
			<p>This is the navigation driver for Tab Bars and Segmented Controls. It should be present in each unique route function related to Tabs and Segmented Items.</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>route</code></td>
						<td>The name of the route which is automatically derived from the unique route function that called <code>controllerTab()</code>. This is used for URL construction.</td>
					</tr>
					<tr>
						<td><code>modifier</code></td>
						<td>Passed in from the unique route function that called <code>controllerTab()</code>. This is the name of the tab/segment and will be used to add the <code>.picked</code> class. This value is used for URL construction.</td>
					</tr>
					<tr>
						<td><code>updateURL</code></td>
						<td>Takes a value of <code>true</code> or <code>false</code>. If set to <code>true</code> the current URL will be updated and pushed to the browser's history stack.</td>
					</tr>
				</tbody>
			</table>
			
			
			<h3>Unique Route Functions</h3>
			<p>In Rebar each view is it's own unique function that will end up calling <code>controllerRoute()</code> or <code>controllerTab()</code>. This allows us to scope everything that the view will need in a more browsable fashion.</p>
			<p>A Unique Route function should <b>always</b> be prefixed with <code>route</code> and everything should be in lowercase (no hyphens are permitted).</p>
			<p>When calling this function you will need to always pass it a <code>modifier</code> (can be set to <code>false</code>) and a <code>navtype</code> (mandatory for routes with <code>forwards</code> or <code>backwards</code>).</p>
			<p>The default way to set this up is:</p>
<pre>
function routenavigation(options) {
	routeprevious({
		modifier: false, 
		navtype: options.navtype == "deeplink" ? "deeplink" : "stack",
	});
	
	controllerRoute({
		columns: 3,
		level: "tertiary",
		route: grabFunctionName().replace('route',''),
		modifier: options.modifier,
		type: options.navtype
	})
	
	if (options.navtype == "forwards" || options.navtype == "deeplink") {
		//CONTENT GENERATION GOES HERE
	}
}
</pre>

<pre class="spacerTriple">
function routetab(modifier) {
	controllerTab({
		route: grabFunctionName().replace('route',''),
		modifier: modifier,
		updateURL: true OR false,
	})
	
	//CONTENT GENERATION GOES HERE
}
</pre>
			 
			<h3>Top Level Route</h3>
			<p>The top level route is special. It is mandatory and your way of getting back to the start of the stack. It should be set up as:</p> 
<pre class="spacerTriple">
function routetop(options) {
	controllerRoute({
		columns: 3,
		level: "primary",
		route: false,
		modifier: options.modifier,
		type: options.navtype
	})
	
	if (options.navtype == "forwards" || options.navtype == "deeplink") {
		//CONTENT GENERATION GOES HERE
	}
}
</pre>			
			
			<h3>Handling Deeplinks</h3>
			<p>This is a generic setup that will handle the basics of loading deeplink URLs and your base URL for different size screens:</p>
			<h4 class="h6">controllerRoute()</h4>
<pre class="spacerDouble">
let url = grabURLParameter()
	
if (url.query == "") {
	//SMALL SCREENS
	if (window.matchMedia("(max-width: 1099px)").matches) {
		routesidebar({modifier: false, navtype: "deeplink"})
	}
	
	//LARGE SCREENS
	if (window.matchMedia("(min-width: 1100px)").matches) {
		routepreferred({modifier: "name", navtype: "deeplink"})
	}
} else {
	//LOAD ROUTE FROM URL
	window["route" + url.query]({modifier: url.source, navtype: "deeplink"})
}
</pre>	
		
		<h4 class="h6">controllerTab()</h4>
<pre class="spacerTriple">
let url = grabURLParameter()

if (url.query == "") {
	//LOAD PREDEFINED TAB
	routepreferred("modifier")
} else {
	//LOAD TAB FROM URL
	window["route" + url.query](url.source)
}
</pre>	
		</div>
	`,
	columns: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Columns</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h3>HTML</h3>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Screen Size</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<span>Small</span>
							<span class="subtext">0 px &#8211; 639 px</span>
						</td>
						<td>Columns sit off-screen and will slide in to view when an <code>active</code> class is added. The column that is generating the view transition will gain a <code>slightSlide</code> class that will cause it to slightly slide underneath the column that has just been set to <code>active</code>.</td>
					</tr>
					<tr>
						<td>
							<span>Medium</span>
							<span class="subtext">640 px &#8211; 1099 px</span>
						</td>
						<td>With a three column layout the <code>.columnPrimary</code> and <code>.columnSecondary</code> columns will transition but the <code>.columnTertiary</code> column will always remain in view.</td>
					</tr>
					<tr>
						<td>
							<span>Large</span>
							<span class="subtext">1100 px onwards</span>
						</td>
						<td>All columns will always be present on screen and no transitions happen.</td>
					</tr>
				</tbody>
			</table>
			
			<p><code>aside</code> can be collapsed so the main column takes up the entire viewport on medium and larger screens. This is done with a button that has the <code>collapseAside</code> class. If your layout uses three columns and you would like to collapse the first two you will need to add the <code>columnsThree</code> class to the <code>containerApp</code> container.</p>
			<h4 class="h6">Templates</h4>
<pre>
//THREE COLUMN LAYOUT
&lt;aside class="containerAside double" id=""&gt;
	&lt;div class="columnPrimary" id=""&gt;&lt;/div&gt;
	&lt;div class="columnSecondary" id=""&gt;&lt;/div&gt;
&lt;/aside&gt;
&lt;main class="columnTertiary"&gt;&lt;/main&gt;

//TWO COLUMN LAYOUT
&lt;aside class="containerAside single" id=""&gt;
	&lt;div class="columnPrimary" id=""&gt;&lt;/div&gt;
&lt;/aside&gt;
&lt;main class="columnTertiary"&gt;&lt;/main&gt;
</pre>
			<p class="subtext spacerTriple"><code>controllerRoute()</code> will set the right classes based on the number of columns for the route.</p>
			
			<h3>Functions</h3>
			<p>The columns themselves do not have any functions attached to them. Navigation is handled through <code>controllerRoute()</code> on the list items in a column (See Routing for more info). Backwards navigation is also handled through <code>controllerRoute()</code>.</p>
			<h4>Two Column Layouts in a Three Column App</h4>
			<p class="spacerTriple">You might want your app to have a three column for the majority of views but need a two column layout in a few instances. <code>controllerRoute()</code> can accomodate this by setting the number of columns for the route being navigated to.</p>
			
			<h3>CSS</h3>
			<p>Both <code>.columnPrimary</code> and <code>.columnSecondary</code> have a fixed size based on <code>--aside-width</code>. On larger screens <code>.containerAside</code> and <code>.columnTertiary</code> will adjust accordingly depending on how many columns are in <code>containerAside</code>.</p>
		</div>
	`,
	sidebars: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Sidebars</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Sidebars have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<p class="subtext">Note: Examples provided here are for illustrative purposes only and are non-functional. To view functional examples the Sample app itself uses Sidebars and the Columns section also has working examples.</p>
			<h4 class="h6">Standard layout</h4>
			<div class="containerGeneric excludePadding spacerTriple" id="exampleSidebar1">
				<aside class="containerAside single">
					<div class="containerSidebar" id="sidebarWithHeader" data-target="contentArea1">
						<h1>Header</h1>
						<div class="containerSearch">
							<input type="search" placeholder="Search Pok&eacute;mon" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
							<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
						</div>
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
							<div class="wrapper">
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
							</div>
						</section>
						<h2 class="headerList">Images</h2>
						<section>
							<button class="sidebar" data-value="image1">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar1.png" alt="" />
									Image Item 1
								</div>
							</button>
							<button class="sidebar" data-value="image2">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar2.png" alt="" />
									Image Item 2
								</div>
							</button>
							<button class="sidebar" data-value="image3">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar3.png" alt="" />
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
						<div class="containerSearch">
							<input type="search" placeholder="Search Pok&eacute;mon" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
							<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
						</div>
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
							<div class="wrapper">
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
							</div>
						</section>
						<h2 class="headerList">Images</h2>
						<section>
							<button class="sidebar" data-value="image1">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar1.png" alt="" />
									Image Item 1
								</div>
							</button>
							<button class="sidebar" data-value="image2">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar2.png" alt="" />
									Image Item 2
								</div>
							</button>
							<button class="sidebar" data-value="image3">
								<div class="labelSidebar">
									<img src="app/images/ui/sidebar3.png" alt="" />
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
			<p>Sidebars require two containers for their buttons, <code>.containerAside</code> and <code>containerSidebar</code>. <code>.containerAside</code> defines the position of the Sidebar and <code>.containerSidebar</code> enables all of the styling to make an Item List in to a Sidebar. The <code>.containerAside</code> class does not need to be applied to an aside element.</p>
			<h4 class="h6">Templates</h4>
<pre class="spacerTriple">
&lt;aside class="containerAside"&gt;
	&lt;div class="containerSidebar" id=""&gt;&lt;/div&gt;
&lt;/aside"&gt;
</pre>
			
			<h3>Functions</h3>
			<p>At their core Sidebars are just Source Lists with a particular set of styles applied which means they use the <code>controllerRoute()</code> function. Refer to the Routing section for more information.</p>
			
			<h3>CSS</h3>
			<p>Sections can be grouped using the <code>section</code> element, margin will automatically be applied to space out each section. They can also be made collapsible by turning them in to Accordions, refer to the Accordions section on how to do this.</p>
			<p>The <code>controllerRoute()</code> function will handle setting the correct styling to picked items depending at what level the currently selected navigation item is at.</p>
			<p>If you wish to have a tiled layout for your Sidebar on smaller screens you can add the <code>.grid</code> class to the <code>containerSidebar</code> container. This style is great for Sidebars with a short list of items.</p>
		</div>
	`,
	itemlists: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Item Lists</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Item Lists have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h3>
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
							${iconShapes.heartStroke}
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
							${iconShapes.heartStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconShapes.plusSquareRoundedStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconInterfaceElements.questionCircleStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconHuman.handRaisedRightStroke}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="containerSection excludePadding">
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar1.png" width="30" />
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar2.png" width="30" />
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar3.png" width="30" />
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar4.png" width="30" />
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="containerSection excludePadding">
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
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
							${iconShapes.heartStroke}
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
							${iconShapes.heartStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconShapes.plusSquareRoundedStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconInterfaceElements.questionCircleStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							${iconHuman.handRaisedRightStroke}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="containerSection excludePadding">
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar1.png" width="30" />
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar2.png" width="30" />
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar3.png" width="30" />
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList fixedIconSize">
							<img src="app/images/ui/sidebar4.png" width="30" />
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="containerSection excludePadding">
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList">
							${iconTransport.rocketStroke}
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
							${iconShapes.heartStroke}
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
							${iconShapes.heartStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							${iconShapes.plusSquareRoundedStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							${iconInterfaceElements.questionCircleStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							${iconHuman.handRaisedRightStroke}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="spacerDouble">
						<button class="itemList rounded fixedIconSize">
							<img src="app/images/ui/sidebar1.png" width="30" />
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							<img src="app/images/ui/sidebar2.png" width="30" />
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							<img src="app/images/ui/sidebar3.png" width="30" />
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList rounded fixedIconSize">
							<img src="app/images/ui/sidebar4.png" width="30" />
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="spacerDouble">
						<button class="itemList rounded">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 1</span>
								<span class="subtext">Sub-Label</span>
							</div>
						</button>
						<button class="itemList rounded">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button class="itemList rounded">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button class="itemList rounded">
							${iconTransport.rocketStroke}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
				</div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Item Lists are the core component for making lists of things within Rebar. They offer a flexible set of styles to fit all types of lists. The basis of an Item List is a container with the <code>.containerItemList</code> class. By default an Item List will take up 100% of it's parent container's width and height.</p>
			<p>Any row that is solely clickable needs to be a <code>button</code> with the <code>.itemList</code> class. If the row itself is to not be clickable, maybe because it contains controls within itself, then it should be set as a <code>div</code> instead of a button.</p>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="containerItemList" id=""&gt;&lt/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">At their core Item Lists are just Source Lists with a particular set of styles applied which means they use the <code>controllerRoute()</code> function. Refer to the Routing section for more information.</p>
			
			<h3>CSS</h3>
			<p>Several styling classes can be applied to the <code>.containerItemList</code> container to give it different appearances:</p>
			<table class="definitions spacerSingle" id="config">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>inset</code></td>
						<td>Adds a consistent padding to the container to inset the row items. This should always be used when you have buttons using the <code>rounded</code> class. This class will also set rounded corners to the <code>section</code> elements inside the container.</td>
					</tr>
					<tr>
						<td><code>alwaysBackgroundColor</code></td>
						<td>Forces the container to always use the <code>--background</code> colour.</td>
					</tr>
					<tr>
						<td><code>inline</code></td>
						<td>Makes Item Lists work in the middle of a content column. If you want rounded corners for your sections you can use the <code>inset</code> class but <code>inline</code> will forcefully remove the padding.</td>
					</tr>
					<tr>
						<td><code>rounded</code></td>
						<td>While not a property of the container itself, it's important to note the third style is the Rounded List and this requires setting the <code>rounded</code> class on the buttons.</td>
					</tr>
					<tr>
						<td><code>fixedIconSize</code></td>
						<td>The icon you add to the left of each button can be any size you want but if you want to set it to a Rebar defined size of 24px you can add the <code>fixedIconSize</code> class on the buttons.</td>
					</tr>
				</tbody>
			</table>
			
			<p>Rebar does not support picked List Items with a checkmark style. If you need to select from a group of options please use a Picker Menu instead.</p>
		</div>
	`,
	toolbars: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Toolbars</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Toolbars Items have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			
			<h3 class="h6">Toolbar Layouts</h3>
			<div class="containerGeneric excludePadding" id="exampleToolbar1">
				<header class="containerToolbar">
					<div class="pinLeft">
						<button class="transparent">${iconInterfaceElements.filterCircleStroke}</button>
					</div>
					<h1 class="headerToolbar">Standard Items</h1>
					<div class="pinRight">
						<button class="transparent">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="transparent">${iconObjects.trashStroke}</button>
					</div>
				</header>
			</div>
			
			<div class="containerGeneric excludePadding" id="exampleToolbar1">
				<header class="containerToolbar">
					<div class="pinLeft">
						<button class="toolbarItem">${iconInterfaceElements.filterCircleStroke}</button>
					</div>
					<h1 class="headerToolbar">Native Items</h1>
					<div class="pinRight">
						<button class="toolbarItem">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="toolbarItem">${iconObjects.trashStroke}</button>
						</button>
					</div>
				</header>
			</div>
			
			<div class="containerGeneric excludePadding" id="exampleToolbar1">
				<header class="containerToolbar alwaysLeft">
					<div class="pinLeft">
						<button class="transparent">
							${iconInterfaceElements.filterCircleStroke}
						</button>
					</div>
					<h1 class="headerToolbar">Keep Left</h1>
					<div class="pinRight">
						<button class="transparent">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="transparent">${iconObjects.trashStroke}</button>
					</div>
				</header>
			</div>
			
			<div class="containerGeneric excludePadding spacerDouble" id="exampleToolbar1">
				<header class="containerToolbar singleItem">
					<div class="containerSearch">
						<input type="search" placeholder="Single item" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
						<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
					</div>
				</header>
			</div>
			
			<h3 class="h6">Accessory Bars</h3>
			<div class="containerGeneric excludePadding spacerDouble" id="exampleToolbar2">
				<header class="containerToolbar withAccessory" id="accessoryParent1">
					<div class="pinLeft">
						<button class="transparent">${iconInterfaceElements.filterCircleStroke}</button>
					</div>
					<h1 class="headerToolbar">Header</h1>
					<div class="pinRight">
						<button class="transparent">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="transparent">${iconObjects.trashStroke}</button>
					</div>
				</header>
				<div class="scrollview" id="headerContent2">
					<div class="containerAccessoryBar">
						<div class="containerSearch">
							<input type="search" placeholder="Search text" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
							<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
						</div>
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
						<button class="transparent">${iconInterfaceElements.filterCircleStroke}</button>
					</div>
					<h1 class="headerToolbar">Header</h1>
					<div class="pinRight">
						<button class="transparent">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="transparent">${iconObjects.trashStroke}</button>
					</div>
				</header>
				<div class="containerInlineAccessory" id="headerContent4Parent">
					<div class="containerAccessoryBar">
						<div class="containerSearch">
							<input type="search" placeholder="Search text" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${iconShapes.timesCircleFill}</div>
							<div class="iconSearch">${iconInterfaceElements.searchStroke}</div>
						</div>
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
				<header class="containerToolbar vanishing noBackground" id="disappearingToolbar">
					<div class="pinLeft">
						<button class="transparent">${iconInterfaceElements.filterCircleStroke}</button>
					</div>
					<h1 class="headerToolbar">Header</h1>
					<div class="pinRight">
						<button class="transparent">${iconShapes.rectangleOverlapHorizontalStroke}</button>
						<button class="transparent">${iconObjects.trashStroke}</button>
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
&lt;header class="containerToolbar vanishing noBackground"&gt;
	&lt;div class="pinLeft"&gt;&lt;/div&gt;
	&lt;h1 class="headerToolbar"&gt;&lt;/h1&gt;
	&lt;div class="pinRight"&gt;&lt;/div&gt;
&lt;/header&gt;
</pre>
			
			<h3>Functions</h3>
			<p>There are two functions related to Toolbars, <code>toolbarDivider()</code> and <code>toolbarVisibility()</code>. They each handle visibility of styles when the corresponding Scrollview is scrolled. Both functions take the same options:</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>scrollview</code></td>
						<td>The ID of the container to be watched for a changing scroll position.</td>
					</tr>
					<tr>
						<td><code>toolbar</code></td>
						<td>The ID of the target <code>.headerToolbar</code> to have styling classes toggled.</td>
					</tr>
					<tr>
						<td><code>height</code></td>
						<td>The value you wish for the styling classes to be toggled at.</td>
					</tr>
				</tbody>
			</table>
			
			
<pre class="spacerTriple">
toolbarDivider({
	scrollview: "#name",
	toolbar: "#name",
	height: XXX
});

toolbarVisibility({
	scrollview: "#name",
	toolbar: "#name",
	height: XXX
});
</pre>
			
			<h3>CSS</h3>
			<p>There are a number of clases associated with Toolbars that make everything work:</p>
			
			<table class="definitions spacerSingle" id="config">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>containerToolbar</code></td>
						<td>Sets a container as a Toolbar.</td>
					</tr>
					<tr>
						<td><code>withAccessory</code></td>
						<td>Removes the bottom border so that Accessory Bars sit flush underneath the Toolbar.</td>
					</tr>
					<tr>
						<td><code>withInlineAccessory</code></td>
						<td>Adds back the bottom border on larger screens due to the Accessory Bar no longer being flush.</td>
					</tr>
					<tr>
						<td><code>containerInlineAccessory</code></td>
						<td>Shuffles around an Accessory Bar and Scrollview so that on smaller screens the Accessory Bar can scroll away but on larger screens will be fixed to the right of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>containerAccessoryBar</code></td>
						<td>Sets a container as an Accessory Bar.</td>
					</tr>
					<tr>
						<td><code>pinLeft</code></td>
						<td>Holds content to the leading edge of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>pinRight</code></td>
						<td>Holds content to the trailing edge of the Toolabr.</td>
					</tr>
					<tr>
						<td><code>headerToolbar</code></td>
						<td>Holds the title of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>dividerBottom</code></td>
						<td>Adds back the bottom border that <code>.withAccessory</code> removes. This is used with the <code>toolbarDivider()</code> function.</td>
					</tr>
					<tr>
						<td><code>vanishing</code></td>
						<td>Used in conjuction with <code>noBackground</code> to set the transition for the background of Vanishing Toolbars.</td>
					</tr>
					<tr>
						<td><code>noBackground</code></td>
						<td>Hides the background, border, and title of a Toolbar. This is used with the <code>toolbarVisibility()</code> function.</td>
					</tr>
					<tr>
						<td><code>singleItem</code></td>
						<td>Used with Toolbars that only contain one child item (this is primarily intended for Toolbars that contain a single Search Input).</td>
					</tr>
					<tr>
						<td><code>translucent</code></td>
						<td>Changes the background to the Translucent Material.</td>
					</tr>
					<tr>
						<td><code>alwaysLeft</code></td>
						<td>Sets <code>.pinLeft</code> to always sit on the leading edge regardless of screen size.</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	tabbars: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Tab Bars</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Tab Bars have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<h3 class="h6">Standard</h3>
			<div class="containerGeneric excludePadding" id="exampleTabBar1">
				<footer class="containerTabBar" id="tabBar1">
					<button class="tab" data-name="tabfirst" onclick="routetabs('tabfirst')">
						<div class="wrapper">
							${iconObjects.handsetLeadingFill}
						</div>
						First
					</button>
					<button class="tab" data-name="tabsecond" onclick="routetabs('tabsecond')">
						<div class="wrapper">
							${iconHuman.userCircleFill}
						</div>
						Second
					</button>
					<button class="tab" data-name="tabthird" onclick="routetabs('tabthird')">
						<div class="wrapper">
							${iconObjects.bagFill}
						</div>
						Third
					</button>
					<button class="tab" data-name="tabfourth" onclick="routetabs('tabfourth')">
						<div class="wrapper">
							${iconObjects.loupeFill}
						</div>
						Fourth
					</button>
					<button class="tab" data-name="tabfifth" onclick="routetabs('tabfifth')">
						<div class="wrapper">
							<img src="app/images/ui/sidebar1.png" />
						</div>
						Fifth
					</button>
				</footer>
				<div class="paddingContentTight" id="contentAreaTabs1">
					
				</div>
			</div>
			
			<h3 class="h6">Always Vertical</h3>
			<div class="containerGeneric excludePadding" id="exampleTabBar1">
				<footer class="containerTabBar alwaysVertical" id="tabBar1">
					<button class="tab" data-name="tabfirst" onclick="routetabs('tabfirst')">
						<div class="wrapper">
							${iconObjects.handsetLeadingFill}
						</div>
						First
					</button>
					<button class="tab" data-name="tabsecond" onclick="routetabs('tabsecond')">
						<div class="wrapper">
							${iconHuman.userCircleFill}
						</div>
						Second
					</button>
					<button class="tab" data-name="tabthird" onclick="routetabs('tabthird')">
						<div class="wrapper">
							${iconObjects.bagFill}
						</div>
						Third
					</button>
					<button class="tab" data-name="tabfourth" onclick="routetabs('tabfourth')">
						<div class="wrapper">
							${iconObjects.loupeFill}
						</div>
						Fourth
					</button>
					<button class="tab" data-name="tabfifth" onclick="routetabs('tabfifth')">
						<div class="wrapper">
							<img src="app/images/ui/sidebar1.png" />
						</div>
						Fifth
					</button>
				</footer>
				<div class="paddingContentTight" id="contentAreaTabs1">
					
				</div>
			</div>

			<h3 class="h6">Using Segmented Control</h3>
			<div class="containerGeneric" id="exampleTabBar2">
				<div class="controlSegmented display" id="tabBar2">
					<button class="segment" data-name="segmentfirst" onclick="routesegment('segmentfirst')">First</button>
					<button class="segment" data-name="segmentsecond" onclick="routesegment('segmentsecond')">Second</button>
					<button class="segment" data-name="segmentthird" onclick="routesegment('segmentthird')">Third</button>
					<button class="segment" data-name="segmentfourth" onclick="routesegment('segmentfourth')">Fourth</button>
					<button class="segment" data-name="segmentfifth" onclick="routesegment('segmentfifth')">Fifth</button>
				</div>
				<div id="contentAreaTabs2"></div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Tab Bars present up to 5 options to pick from (more can be added but they will be cramped on small screens). The Standard style is used for app-level view changing but Segmented Controls can also be used for in-view tabs. It's preferrable to use Rebar Icons for the icons but images can be used too. It is not required to use a <code>footer</code> element for Tab Bars.</p>
			${
				insertBanner({
					type: 'warning',
					content: 'The content container should always come after the tab container',
					icon: false,
					size: "large",
				})
			}
			
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;footer class="containerTabBar" id=""&gt;
	&lt;button class="tab" data-name="" onclick="routename('modifier')"&gt;
		&lt;div class="wrapper"&gt;
			&lt;svg&gt;&lt;/svg&gt;
		&lt;/div&gt;
		Label
	&lt;/button&gt;
	&lt;button class="tab" data-name="" onclick="routename('modifier')"&gt;
		&lt;div class="wrapper"&gt;
			&lt;svg&gt;&lt;/svg&gt;
		&lt;/div&gt;
		Label
	&lt;/button&gt;
	&lt;button class="tab" data-name="" onclick="routename('modifier')"&gt;
		&lt;div class="wrapper"&gt;
			&lt;svg&gt;&lt;/svg&gt;
		&lt;/div&gt;
		Label
	&lt;/button&gt;
&lt;/footer&gt;
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Tab Bars make use of <code>controllerTab()</code> and more information can be found in the Routing section.</p>
			
			<h3>CSS</h3>
			<p>Tab Bars can use the <code>translucent</code> class to make the background of the bar translucent if required. The other styling class available to you is the <code>picked</code> class which sets the style of the picked tab.</p>
			<p>If you need for the layout of the Tab Bar Items to stay vertical on larger screens you can add the <code>alwaysVertical</code> class to the <code>containerTabBar</code> container.</p>
		</div>
	`,
	scrollviews: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Scrollviews</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
						${iconShapes.starFivePointFill}
						First
					</button>
					<button class="tab" data-value="tab2">
						${iconObjects.loupeFill}
						Second
					</button>
					<button class="tab" data-value="tab3">
						${iconObjects.bagFill}
						Third
					</button>
					<button class="tab" data-value="tab4">
						${iconObjects.folderHorizontalFill}
						Fourth
					</button>
					<button class="tab" data-value="tab5">
						${iconObjects.bellFill}
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
						${iconShapes.starFivePointFill}
						First
					</button>
					<button class="tab" data-value="tab2">
						${iconObjects.loupeFill}
						Second
					</button>
					<button class="tab" data-value="tab3">
						${iconObjects.bagFill}
						Third
					</button>
					<button class="tab" data-value="tab4">
						${iconObjects.folderHorizontalFill}
						Fourth
					</button>
					<button class="tab" data-value="tab5">
						${iconObjects.bellFill}
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
						${iconShapes.starFivePointFill}
						First
					</button>
					<button class="tab" data-value="tab2">
						${iconObjects.loupeFill}
						Second
					</button>
					<button class="tab" data-value="tab3">
						${iconObjects.bagFill}
						Third
					</button>
					<button class="tab" data-value="tab4">
						${iconObjects.folderHorizontalFill}
						Fourth
					</button>
					<button class="tab" data-value="tab5">
						${iconObjects.bellFill}
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
						${iconShapes.starFivePointFill}
						First
					</button>
					<button class="tab" data-value="tab2">
						${iconObjects.loupeFill}
						Second
					</button>
					<button class="tab" data-value="tab3">
						${iconObjects.bagFill}
						Third
					</button>
					<button class="tab" data-value="tab4">
						${iconObjects.folderHorizontalFill}
						Fourth
					</button>
					<button class="tab" data-value="tab5">
						${iconObjects.bellFill}
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
						<img src="app/images/ui/image.jpg" width="400" style="min-width: 100%" class="spacerSingle" />
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
				<footer class="containerTabBar translucent" id="tabBar1" data-target="contentAreaTabs1">
					<button class="tab" data-value="tab1">
						${iconShapes.starFivePointFill}
						First
					</button>
					<button class="tab" data-value="tab2">
						${iconObjects.loupeFill}
						Second
					</button>
					<button class="tab" data-value="tab3">
						${iconObjects.bagFill}
						Third
					</button>
					<button class="tab" data-value="tab4">
						${iconObjects.folderHorizontalFill}
						Fourth
					</button>
					<button class="tab" data-value="tab5">
						${iconObjects.bellFill}
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
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>.cropToolbar</code></td>
						<td>Insets the Scrollview from the top by the height of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>.cropAccessoryBar</code></td>
						<td>Insets the Scrollview from the top by the height of the Accessory Bar.</td>
					</tr>
					<tr>
						<td><code>.cropTabBar</code></td>
						<td>Insets the Scrollview from the bottom by the height of the Tab Bar.</td>
					</tr>
					<tr>
						<td><code>.insetToolbar</code></td>
						<td>Adds top padding to the Scrollview that is the height of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>.insetTabBar</code></td>
						<td>Adds bottom padding to the Scrollview that is the height of the Tab Bar.</td>
					</tr>
				</tbody>
			</table>
			
			<p>It is intended to combine the different <code>.crop</code> classes together to get a Scrollview that fits within the bars of your view. The <code>.inset</code> classes should be combined if you want Translucent Bars. It is not recommended to combine the <code>.crop</code> and <code>.inset</code> classes on a single Scrollview.</p>
			<p>If the Scrollview is a content container you should add the <code>paddingContent</code> class.</p>
			<p>In the future most of these classes will be deprecated for <code>:has()</code> when that is supported by browsers.</p>
		</div>
	`,
	sections: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Sections</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Sections have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
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
			<p>Sections use the <code>.containerSection</code> class to turn any element in to a Rebar section (it is not required to use the <code>section</code> element). You can also include a joined header with the <code>.headerSection</code> class, which can include an icon.</p>
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
	accordions: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Accordions</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div class="containerAccordion spacerSingle noBorder">
				<div class="headerAccordion">
					<h3>Header</h3>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p class="excludeMargin">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
				</section>
			</div>
			<div class="containerAccordion spacerTriple" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Header</h3>
					<div class="containerChevron">${iconShapes.chevronSingleRightStroke}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
							<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
							<p class="excludeMargin">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						</div>
					</div>
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
	&lt;section class="containerAccordionContents"&gt;
		&lt;div class="wrapper"&gt;&lt;/div&gt;
	&lt;/section&gt;
&lt;/div>

//REPLICATING A SECTION CONTAINER
&lt;div class="containerAccordion"&gt;
	&lt;div class="headerAccordion headerSection"&gt;
		&lt;h3&gt;&lt;/h3&gt;
		&lt;div class="containerChevron"&gt;&#36;{iconShapes.chevronSingleRightStroke}&lt;/div&gt;
	&lt;/div&gt;
	&lt;section class="containerAccordionContents"&gt;
		&lt;div class="wrapper"&gt;
			&lt;div class="containerSection"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/section&gt;
&lt;/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Accordions have an automatic click function associated with them. As long as your header has the <code>headerAccordion</code> class then the click function will fire.</p>
			
			<h3>CSS</h3>
			<p>Accordions don't carry much in the way of inherent styles. You are pretty free to style the contents as you see fit. The only styling requirement is if you want it to look like a Section Container then you need to follow the structure above for that to work.</p>
			<p>When placed in a Sidebar some styling will be applied to make sure the header fits in with the other headers.</p>
			<p>If you wish to have the accordion open on load, add the <code>active</code> class to the <code>.headerAccordion</code> and <code>.containerAccordionContents</code> containers.</p>
			<p>It's important to know that accordions do not carry an <code>overflow: hidden;</code> and if you need rounded corners you will need to use the <code>.hideOverflow</code> class.</p>
			<p>Accordions have a <code>max-height</code> of 1000px. If this is not enough you can addd the <code>.large</code> class to increase it.</li>
		</div>
	`,
	iframes: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">iframes</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
	tables: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Tables</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Tables have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<h3 class="h6">Information Table</h3>
			<table class="spacerDouble tableGuideIcons">
				<thead>
					<tr>
						<th>Purpose <span>${iconShapes.caretDown}</span></th>
						<th>Dimensions <span>${iconShapes.caretDown}</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Notifications</td>
						<td>
							<span>40 &times; 40 px</span>
							<span>60 &times; 60 px</span>
						</td>
					</tr>
					<tr>
						<td>Settings</td>
						<td>
							<span>58 &times; 58 px</span>
							<span>87 &times; 87 px</span>
						</td>
					</tr>
					<tr>
						<td>Spotlight</td>
						<td>
							<span>80 &times; 80 px</span>
							<span>120 &times; 120 px</span>
						</td>
					</tr>
					<tr>
						<td>Home Screen</td>
						<td>
							<span>120 &times; 120 px</span>
							<span>180 &times; 180 px</span>
						</td>
					</tr>
					<tr>
						<td>App Store</td>
						<td>1024 &times; 1024 px</td>
					</tr>
				</tbody>
			</table>
			
			<h3 class="h6">Data Table</h3>
			<table class="spacerTriple data withBorder tableGuideIcons" id="tableData">
				<thead>
					<tr>
						<th>Purpose <span>${iconShapes.caretDown}</span></th>
						<th>Dimensions <span>${iconShapes.caretDown}</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Notifications</td>
						<td>
							<span>40 &times; 40 px</span>
							<span>60 &times; 60 px</span>
						</td>
					</tr>
					<tr>
						<td>Settings</td>
						<td>
							<span>58 &times; 58 px</span>
							<span>87 &times; 87 px</span>
						</td>
					</tr>
					<tr>
						<td>Spotlight</td>
						<td>
							<span>80 &times; 80 px</span>
							<span>120 &times; 120 px</span>
						</td>
					</tr>
					<tr>
						<td>Home Screen</td>
						<td>
							<span>120 &times; 120 px</span>
							<span>180 &times; 180 px</span>
						</td>
					</tr>
					<tr>
						<td>App Store</td>
						<td>1024 &times; 1024 px</td>
					</tr>
				</tbody>
			</table>
			
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Tables in Rebar are designed to be semantic while offering modern layout techniques. You should structure your table with the standard <code>table</code> element set.</p>
			
			<h3>Functions</h3>
			<h4>Sorting</h4>
			<p>Columns can be sorted but this is not on by default due to requiring a 3rd party plugin, Table Sorter, to accomplish this. If you do include this plugin you will need to acknowledge its inclusion. The plugin is included by default with the Starter app and should be removed if not used.</p>
			<p>To use Table Sorter you need to call this function <code>$("table").tablesorter({ sortList: [[2,1]] });</code>. The sortList property will determine which column is used by default for sorting and in which direction.</p>
			<p>If you wish to include a sorting caret in your column headers you can use an image, SVG, or Rebar Icon wrapped in a <code>span</code>.</p>
			
			<h4>Search</h4>
			<p>Table search requires a different function compared to List search. You will need to use <code>searchTable()</code> which handles hiding the rows (the <code>search()</code> was not able to work with tables).</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>enteredText</code></td>
						<td>This should always be set to <code>this</code></td>
					</tr>
					<tr>
						<td><code>parentID</code></td>
						<td>The ID of the table container</td>
					</tr>
					<tr>
						<td><code>inputID</code></td>
						<td>The ID of the search field</td>
					</tr>
				</tbody>
			</table>
<pre class="spacerTriple">
searchTable({
	enteredText: this,
	parentID: "containerCompareTable",
	inputID: "searchCompare",
})
</pre>
			
			<h3>CSS</h3>
			<p>The bulk of styling for tables are handled on the <code>table</code> element itself but there are some classes that will give you the Information and Data styles. Information is the default and Data builds on top so no class is required for the Information style but you will need to include the <code>.data</code> class to transform it in to a Data table. On top of that if you want a border you will need to add the <code>.withBorder</code> class.</p>
			<p class="spacerTriple">All of the default styling and layout that a browser will apply to a standard <code>table</code> element has been overrided. Rebar Tables are based on CSS Grid which gives you the most flexibility to handle responsiveness (whether you want the table to scroll or reflow is up to you). This means there is no default column sizing and you will have to define that yourself.</p>
		</div>
	`,
	banners: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routelayout({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Layout")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Banners</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			${insertBanner({
				type: 'warning', 
				content: 'This is a large warning banner',
				icon: false,
				size: "large",
			})}
			${insertBanner({
				type: 'warning', 
				content: 'This is a small warning banner',
				icon: false,
				size: "small",
			})}
			
			${insertBanner({
				type: 'info',
				content: 'This is a large info banner',
				icon: false,
				size: "large",
			})}
			${insertBanner({
				type: 'info',
				content: 'This is a small info banner',
				icon: false,
				size: "small",
			})}
			
			${insertBanner({
				type: 'success', 
				content: 'This is a large success banner',
				icon: false,
				size: "large",
			})}
			${insertBanner({
				type: 'success', 
				content: 'This is a small success banner',
				icon: false,
				size: "small",
			})}
			
			${insertBanner({
				type: 'error', 
				content: 'This is a large error banner',
				icon: false,
				size: "large",
			})}
			${insertBanner({
				type: 'error', 
				content: 'This is a small error banner',
				icon: false,
				size: "small",
			})}
			
			${insertBanner({
				type: 'accent', 
				content: 'This is a large accent banner', 
				icon: iconTransport.rocketFill,
				size: "large",
			})}
			${insertBanner({
				type: 'accent', 
				content: 'This is a small accent banner', 
				icon: iconTransport.rocketFill,
				size: "small",
			})}
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Effectively Banners are just Sections with styling classes applied to them. You should not write out the HTML manually, instead use the <code>insertBanner</code> function.</p>
			
			<h3>Functions</h3>
			<p>Banner creation is handled by the <code>insertBanner()</code>. It is intended that this function is used inline as part of an append and is a convenience instead of manually writing out the Banner HTML. The <code>icon</code> property is only required for the <code>accent</code> Banner type.</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>type</code></td>
						<td>Takes a value of <code>warning</code>, <code>info</code>, <code>success</code>, <code>error</code>, or <code>accent</code>.</td>
					</tr>
					<tr>
						<td><code>content</code></td>
						<td>The message text of the Banner.</td>
					</tr>
					<tr>
						<td><code>icon</code></td>
						<td>Used for the <code>accent</code> style. Takes a Rebar Icon name (for any other style this should be <code>false</code>).</td>
					</tr>
					<tr>
						<td><code>size</code></td>
						<td>Takes a value of <code>large</code> or <code>small</code>.</td>
					</tr>
				</tbody>
			</table>


<pre class="spacerTriple">
insertBanner({
	type: '',
	content: '',
	icon: ,
	size: '',
})
</pre>
			
			<h3>CSS</h3>
			<p class="spacerTriple">No styling is required, the banners will handle everything for you. Currently there is no way to override the default <code>margin</code> that Sections come with. The icon of the Banner type must always be displayed.</p>
		</div>
	`,
}

const modals = {
	dialogs: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Dialogs</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>HTML</h2>
			<p class="spacerTriple">Dialogs power all of the modals within Rebar and are the basis of Sheets, Lightboxes, Alerts, Toasts, the Shortcuts Panel, and the Install Banner. Dialogs are simple containers that use the <code>dialog</code> element and can be filled with type specific content. HTML examples for controls powered by Panels can be found in their own sections.</p>
			
			<h2>Functions</h2>
			<p class="spacerTriple">Summon a Dialog with the <code>showDialog("type")</code>. Dismissing is handled by the <code>dismissDialog()</code> function. There are no properties for the <code>showDialog()</code> function itself, it solely handles displaying the dialogs. For generating different dialogs view the Modal Types sections.</p>
			
			<h2>CSS</h2>
			<p>All styling is handled through the properties dialog types.</p>
		</div>
	`,
	sheets: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Sheets</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Sheets will have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<table class="examples spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Full Sheet</td>
						<td><button onclick="exampleSheetFull()">View</button></td>
					</tr>
					<tr>
						<td>Half Sheet</td>
						<td><button onclick="exampleSheetHalf()">View</button></td>
					</tr>
					<tr>
						<td>Small Sheet</td>
						<td><button onclick="exampleSheetSmall()">View</button></td>
					</tr>
					<tr>
						<td>Themed Sheet</td>
						<td><button onclick="exampleSheetThemed()">View</button></td>
					</tr>
					<tr>
						<td>Toolbar Hidden Sheet</td>
						<td><button onclick="exampleSheetNoToolbar()">View</button></td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Sheets are the primary way of displaying modals within Rebar. They use the <code>dialog</code> element to be displayed on screen and act as a container to display whatever is required.</p>
			
			<h4 class="h6">Autofocus</h4>
			<p class="spacerDouble">To enable the <code>return</code> key to close a sheet you need to include the <code>autofocus</code> attribute on a button.</p>
			
			<table class="definitions spacerDouble">
				<thead>
					<tr>
						<th>Styles</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>fullsheet</code></td>
						<td>Takes up the entire screen on smaller screens and as a centre panel on larger screens.</td>
					</tr>
					<tr>
						<td><code>halfsheet</code></td>
						<td>Takes up half the screen on smaller screens and appear as a panel that slides out from the right on larger screens.</td>
					</tr>
					<tr>
						<td><code>smallsheet</code></td>
						<td>Acts like a Full Sheet on mobile but will act as small centre panel on larger screens.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>Functions</h3>
			<p>The <code>summonSheet()</code> function will handle generating a Sheet for you and invoking the dialog.</p>
<pre class="spacerTriple">
summonSheet({
	type: "",
	backing: "",
	theme: "" OR false,
	id: "",
	content: "",
})
</pre>
							
			<h3>CSS</h3>
			<p class="spacerTriple">At their core Sheets are just Dialogs with a particular set of styles applied which means they use <code>showDialog()</code>. Refer to the Dialogs section for more information.</p>
		</div>
	`,
	lightboxes: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Lightboxes</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<button class="spacerDouble" onclick="exampleLightbox()">Show Lightbox</button>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Lightboxes are a great way to zoom in on content within a view. Primarily intended for viewing images, a Lightbox can contain anything you want.</p>
			
			<h3>Functions</h3>
			<p>The <code>summonLightbox()</code> function will handle generating a Lightbox for you and invoking the dialog.</p>
<pre class="spacerTriple">
summonLightbox({
	backing: "",
	id: "",
	content: "",
})
</pre>
			
			<h3>CSS</h3>
			<p>By default <code>img</code> has a <code>max-width</code> and <code>max-height</code> of 100% applied so images don't fall outside the viewport.</p>
		</div>
	`,
	alerts: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Alerts</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Alerts will have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<table class="examples spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Standard Action</td>
						<td><button onclick="exampleAlertStandard()">View</button></td>
					</tr>
					<tr>
						<td>Destructive Action</td>
						<td><button onclick="exampleAlertDestructive()">View</button></td>
					</tr>
					<tr>
						<td>Custom Content</td>
						<td><button onclick="exampleAlertCustom()">View</button></td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Alerts are Sheets that have a different purpose and differnt styling but function the same. They both bring up a modal to display content, Alerts however are intended to be disruptive a force the choice of an option which means they can not be dismissed by clicking on the backdrop.</p>
			
			<h3>Functions</h3>
			<p>The <code>summonAlert()</code> function will handle generating an Alert for you and invoking the dialog.</p>
			<p>An icon can be included at the top of the Alert. This can be a Rebar Icon or an image. You must specify what styling class you want with the <code>iconType</code> property if you are using a Rebar icon.</p>

<pre class="spacerTriple">
summonAlert({
	backing: "",
	id: "",
	icon: "",
	iconType: "",
	title: "",
	message: true OR false,
	customContent: "",
	buttonPrimary: "" OR false,
	buttonSecondary: "" OR false,
	buttonTertiary: "" OR false,
})
</pre>
							
			<h3>CSS</h3>
			${
				insertBanner({
					type: 'info',
					content: 'The Buttons inside Alerts have a different layout based on the <code>pointer</code> used',
					icon: false,
					size: 'large',
				})
			}
			
			<p class="spacerTriple">At their core Alerts are just Dialogs with a particular set of styles applied which means they use <code>showDialog()</code>. Refer to the Dialogs section for more information.</p>
		</div>
	`,
	toasts: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Toasts</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<table class="examples spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Standard</td>
						<td><button onclick="exampleToast1()">View</button></td>
					</tr>
					<tr>
						<td>Rebar Icon</td>
						<td><button onclick="exampleToast2()">View</button></td>
					</tr>
					<tr>
						<td>Image</td>
						<td><button onclick="exampleToast3()">View</button></td>
					</tr>
				</tbody>
			</table>
				
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Toasts are small, discreet notifications that appear from the top of the screen. They should be used when needing to notify a user the result of an action they took (for example adding a song to a playlist). Toasts can include an image but this is not mandatory. It is only possible to have a single line of text.</p>
			
			<h3>Functions</h3>
			<p>The <code>summonToast()</code> function will handle generating a Toast for you and invoking the dialog.</p>
<pre class="spacerTriple">
summonToast({
	backing: "gradient",
	id: "",
	icon: "",
	message: "",
	closeButton: true OR false,
})
</pre>
			
			<h3>CSS</h3>
			<p class="spacerTriple">It's recommended to use the <code>gradient</code> backing for Toasts to help lift them above the content but you can use any backing style that suits your needs.</p>
		</div>
	`,
	shortcutspanel: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Shortcuts Panel</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<p>Press <code>Control</code> to bring up the Shortcuts Panel.</p>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>If you support Shortcuts within your app you can bring up a standard Shortcuts Panel to list out all of your supported shortcut keys. No HTML is required, the <code>summonShortcutsPanel()</code> function will generate it for you. It is required the <code>shortcutKeys</code> constant in the <code>config.js</code> file to be filled out. Shortcuts must be grouped in to sections.</p>
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
			<p class="spacerTriple">The <code>summonShortcutsPanel()</code> function sets up an inset Half Sheet for you and then iterates through the <code>shortcutKeys</code> constant to insert all of the shortcut keys. By default this function is bound to the <code>Control</code> key (pressing it will both summon and dismiss the Sheet). You can bind this function elsewhere to invoke the Shortcuts Panel in any way you want.</p>
			
			<h3>CSS</h3>
			<p>While there are no direct styling classes for the Shortcuts Panel, being a Sheet means it can have it's inherit display properties modified. This however requires modifying the <code>summonShortcutsPanel()</code> function and is not recommended.</p>
		</div>
	`,
	installbanner: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Install Banner</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<table class="examples spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Show Install Banner</td>
						<td><button onclick="summonInstallBanner()">View</button></td>
					</tr>
					<tr>
						<td>Reset Local Storage</td>
						<td><button class="secondary" onclick="resetInstallBanner()">Reset</button></td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<p>The Install Banner is a Toast that will automatically show on first run in Mobile Safari while not running in <code>Standalone</code> mode. When tapped it will bring up a Half Sheet explaining how to install your app. The reason the Install Banner only shows in this narrow context is Mobile Safari has the capability to install PWAs but does not offer any UI to prompt the user to install whereas other browsers do.</p>
			<p>You do not need to do anything to invoke the Install Banner, it will automatically show as part of including Rebar. You do however need to provide it some info:</p>
			<ul>
				<li>You need to fill out the <code>appName</code> and <code>appEmail</code> constants in the <code>config.js</code> file.</li>
				<li>You need to supply an <code>icon.png</code> file in the root directory of your app.</li>
			</ul>
			<p>It's important to note the Install Banner is designed to only show once as to not frustrate users. If you wish to show the Install Banner or it's How to Install Sheet again you can invoke them with the <code>summonInstallBanner()</code> and <code>summonHowToInstallSheet()</code> functions respectively.</p>
		</div>
	`,
	whatsnewpanel: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routemodals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Modals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">What's New Panel</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<table class="examples spacerTriple">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Show Panel</td>
						<td><button onclick="summonWhatsNewSheet()">View</button></td>
					</tr>
					<tr>
						<td>Reset Local Storage</td>
						<td><button class="secondary" onclick="resetWhatsNew()">Reset</button></td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<p>The What's New Panel is a Sheet that will automatically show on launch/reload if the <code>appVersion</code> stored in local storage does not match the version you've stored in the <code>config.js</code> file.</p>
			<p>To give the What's New Panel content you need to fill out the <code>appReleaseNotes</code> constant. Each item will be inserted as a list item in the Sheet.</p>
			<p>If you wish to show the What's New Panel outside of the launch/reload context you can do so by invoking the <code>summonWhatsNewSheet()</code> function.</p>
		</div>
	`,
}

const visuals = {
	iconsguide: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Icons</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Documentation</h2>
			<p>Rebar comes with a built-in icon set. The icons in this set are geared towards common interface elements. Where appropriate icons will come in 4 styles:</p>
			<table class="definitions spacerSingle" id="icons">
				<thead>
					<tr>
						<th>Types</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="alwaysMain">${iconInterfaceElements.exclamationCircleStroke}</td>
						<td>Stroke</td>
						<td>A hollow style</td>
					</tr>
					<tr>
						<td class="alwaysMain">${iconInterfaceElements.exclamationCircleFill}</td>
						<td>Fill</td>
						<td>A solid style</td>
					</tr>
					<tr>
						<td class="alwaysMain">${iconInterfaceElements.exclamationCircleDuo}</td>
						<td>Duo</td>
						<td>A dual tone style designed to highlight parts of the glyph</td>
					</tr>
					<tr>
						<td>${iconObjects.compassMulti}</td>
						<td>Multi (Predefined)</td>
						<td>A multicolour icon set where colours are built-in to the SVG</td>
					</tr>
					<tr>
						<td>${iconObjects.highlighterMulti}</td>
						<td>Multi (Accent)</td>
						<td>A multicolour icon set where some parts of the icon will use their parent's <code>accent</code> colour (and the <code>main</code> colour for parts that aren't highlighted)</td>
					</tr>
					<tr>
						<td>${iconInterfaceElements.switchDoubleTopOnMulti}</td>
						<td>Multi (Semantic)</td>
						<td>A multicolour icon set where some parts of the icon will use semantically named colours (<code>main</code>, <code>postive</code>, <code>destructive</code>, <code>warning</code>, and <code>info</code>)</td>
					</tr>
				</tbody>
			</table>
			
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
				<li>All strokes and lines should have a width of 4 px (this results in a 2 px stroke when scaled down to 24 px).</li>
				<li>Outer corner radius should be 6 px and inner corner radius should be 3 px.</li>
				<li>For Duo icons, elements that sit in the background should have a 20% opacity and overlapping elements should have a 40% opacity.</li>
				<li>For inner objects they should have a corner radius of 2px.</li>
				<li>The raw SVGs should use #000000 fill for every element. Multi icons should ignore this and bake their colours in to the SVG</li>
				<li>All objects within the SVG need to be a <code>path</code>. This leads to a simpler CSS implementation.</li>
			</ul>
		</div>
	`,
	typography: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Typography</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
			
			<h2 class="headerSection">Fonts</h2>
			<section class="containerSection">
				<h2>This is some --font-regular text.</h2>
				<h2 id="exampleTextRounded">This is some --font-rounded text.</h2>
				<h2 id="exampleTextMonospace">This is some --font-monospace text.</h2>
				<h2 id="exampleTextSerif">This is some --font-serif text.</h2>
				<h2 id="exampleTextDyslexic">This is some --font-dyslexic text.</h2>
			</section>
		</div>
	`,
	dynamictype: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Dynamic Type</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div id="pickerText"></div>
			<h2>Documentation</h2>
			<h3>Text Size</h3>
			<p>Dynamic Type is the text size engine of Rebar. Components are designed to scale with <code>--base-font-size</code> and Dynamic Type can override this with a new value. By default Rebar has 3 text sizes: <code>small</code> (12px), <code>medium</code> (16px), and <code>large</code> (24px). The default size is <code>medium</code>.</p>
			<p>If required you can include any amount of extra sizes that you need. To do this add more sizes to the <code>dynamicTypeSizes</code> constant in the <code>config.js</code> file. The Dynamic Type Picker will need to be modified accordingly. It is worth noting that on first run when no size is set Rebar will default to <code>medium</code>, if this is missing it will fallback to whatever value is set for <code>--base-font-size</code>.
			<p class="spacerTriple">Rebar comes with a Text Size Picker in the form of Display Options. You can set up your own custom picker but it is not recommended.</p>

			<h3>Bold Text</h3>
			<p>The <code>font-weight</code> of all components can be overriden with Dynamic Type as well. There are 2 included font weights and these are not changable: Regular and Bold (Extra options for Light and Extra Bold exist in the Rebar CSS but are not presented in the Display Options component but can be used in a custom picker if you need). Each options corresponds to the same values for the <code>font-weight</code> CSS property.</p>
			<p class="spacerTriple">Rebar comes with a Bold Text Picker in the form of Display Options. You can set up your own custom picker but it is not recommended.</p>

			<h3>Open Dyslexic Font</h3>
			<p>Rebar comes with Open Dyslexic 3, a font specifically designed to make it easier for Dyslexic users to read. A picker for this font is included in the Display Options and when set it will override ALL fonts of every component. You can set up your own custom picker but it is not recommended.</p>
		</div>
	`,
	images: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Images</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>These images are provided as part of Rebar to be displayed within it's components. They all have a colour baked in so will need to be edited to match your theme.</p>
			<img src="rebar/images/tick-light.svg" />
			<img src="rebar/images/tick-dark.svg" />
			<img src="rebar/images/arrow-back-dark.svg" />
			<img src="rebar/images/arrow-back-light.svg" />
			<img src="rebar/images/arrow-forward-dark.svg" />
			<img src="rebar/images/arrow-forward-light.svg" />
			<img src="rebar/images/tips.png" srcset="rebar/images/tips@2x.png 2x" />
		</div>
	`,
	displayoptions: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Display Options</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
	target: "",
	themeOptions: true OR false,
	accentOptions: true OR false,
	textSizeOptions: true OR false,
	textWeightOptions: true OR false,
	contrastOptions: true OR false,
	motionOptions: true OR false,
	textDyslexicOptions: true OR false,
});
</pre>
			<p>The various pickers will only generate if you tell them to by adding a <code>true</code> value to each. You will also need to know:</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>target</code></td>
						<td>The ID of the container you wish to generate in to.</td>
					</tr>
					<tr>
						<td><code>appThemes</code></td>
						<td>An array of theme names in the <code>config.js</code> file.</td>
					</tr>
					<tr>
						<td><code>appAccents</code></td>
						<td>An array of accent names in the <code>config.js</code> file.</td>
					</tr>
					<tr>
						<td><code>appTextSizes</code></td>
						<td>An array of text size names with their labels in the <code>config.js</code> file.</td>
					</tr>
					<tr>
						<td><code>appTextWeights</code></td>
						<td>An array of font weight names with their labels in the <code>config.js</code> file.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>CSS</h3>
			<p>There are no styling classes for the Display Options component.</p>
		</div>
	`,
	appearance: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Appearance</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div id="pickerTheme"></div>
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
	accent: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Accent</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div id="exampleAccents"></div>

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
	reducemotion: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Reduce Motion</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div id="pickerMotion"></div>
			
			<h2>Documentation</h2>
			<p>Reduced Motion is a setting which when turned on will set all CSS transitions in your app to have a timing of 0 seconds. The device setting is respected and if set to on the user will be locked out of setting your app's version of the setting independantly.</p>
			<p>Rebar comes with a Reduced Motion Picker as part of Display Options. You can set up your own custom picker you need but it is not recommended.</p>
		</div>
	`,
	blankstates: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Blank States</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div class="containerGeneric excludePadding alwaysForegroundColor" id="exampleBlankState"></div>
			
			<h2>Documentation</h2>
			<p>Blank States allow you to provide an explanation to users when do data is found. There is no HTML for you to set up as it's all handled with the <code>generateBlankState()</code> function. There are properties you need to provide the function for it to generate a Blank State:</p>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>target</code></td>
						<td>The ID of the container you would like the Blank State to be displayed in. This is mandatory.</td>
					</tr>
					<tr>
						<td><code>icon</code></td>
						<td>The Rebar Icon you would like to be displayed.</td>
					</tr>
					<tr>
						<td><code>title</code></td>
						<td>The heading of the Blank State. This is mandatory.</td>
					</tr>
					<tr>
						<td><code>message</code></td>
						<td>The copy of the Blank State.</td>
					</tr>
					<tr>
						<td><code>actionFirst</code></td>
						<td>The label of the primary action Button. This button will always have the primary style.</td>
					</tr>
					<tr>
						<td><code>actionIDFirst</code></td>
						<td>The ID you would like for the primary action Button.</td>
					</tr>
					<tr>
						<td><code>actionSecond</code></td>
						<td>The label of the secondary action Button. This button will always have the secondary style. If you do not include a primary action Button than this button will not appear.</td>
					</tr>
					<tr>
						<td><code>actionIDSecond</code></td>
						<td>The ID you would like for the secondary action Button.</td>
					</tr>
				</tbody>
			</table>
			
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
	cssvariables: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">CSS Variables</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>Rebar uses CSS Variables to set predefined values. All of them are fully overridable both at the <code>:root</code> level and at any selector level to allow for theming. These are the included set of variables and their default values:</p>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Colours</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>--main</code></td>
						<td>The primary colour predominately found in body copy.</td>
					</tr>
					<tr>
						<td><code>--accent</code></td>
						<td>The app tint colour.</td>
					</tr>
					<tr>
						<td><code>--destructive</code></td>
						<td>Destructive or negative actions and messages.</td>
					</tr>
					<tr>
						<td><code>--positive</code></td>
						<td>Positive or confirmation actions and messages.</td>
					</tr>
					<tr>
						<td><code>--warning</code></td>
						<td>Warning messages.</td>
					</tr>
					<tr>
						<td><code>--info</code></td>
						<td>Informational messages.</td>
					</tr>
					<tr>
						<td><code>--background</code></td>
						<td>The base background colour.</td>
					</tr>
					<tr>
						<td><code>--foreground</code></td>
						<td>A colour that contrasts against <code>--background</code>.</td>
					</tr>
					<tr>
						<td><code>--divider</code></td>
						<td>Dividers and borders.</td>
					</tr>
					<tr>
						<td><code>--systempanel</code></td>
						<td>Elements that overlay the app.</td>
					</tr>
					<tr>
						<td><code>--systempanel-lift</code></td>
						<td>Elements that sit on top of a <code>--systempanel</code> background.</td>
					</tr>
					<tr>
						<td><code>--systemBlue</code></td>
						<td>Represents objects that come from the system itself.</td>
					</tr>
				</tbody>
			</table>
			<p class="subtext spacerTriple">Colours are stored as raw RGB values so that they can be wrapped in rgb() or rgba() for independantly setting alpha values.</p>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Fonts</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>--font-regular</code></td>
						<td>Sans-Serif font stack.</td>
					</tr>
					<tr>
						<td><code>--font-regular-bold</code></td>
						<td>Sans-Serif font stack specifically for Android.</td>
					</tr>
					<tr>
						<td><code>--font-rounded</code></td>
						<td>Rounded font stack.</td>
					</tr>
					<tr>
						<td><code>--font-monospace</code></td>
						<td>Monospaced font stack.</td>
					</tr>
					<tr>
						<td><code>--font-serif</code></td>
						<td>Serif font stack.</td>
					</tr>
					<tr>
						<td><code>--font-dyslexic</code></td>
						<td>A font stack for Dyslexic users.</td>
					</tr>
					<tr>
						<td><code>--base-font-size</code></td>
						<td>Used for fonts as well as anything that should scale with the size of text, to enable Dynamic Type like text scaling.</td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Images</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>--image-tick</code></td>
						<td>Used in Context Menus and Checkboxes, it responds to appearance.</td>
					</tr>
					<tr>
						<td><code>--image-arrow-back</code></td>
						<td>Responds to appearance.</td>
					</tr>
					<tr>
						<td><code>--image-arrow-forward</code></td>
						<td>Used in Item List rows, it responds to appearance.</td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="effects">
				<thead>
					<tr>
						<th>Effects</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>--shadow-wide</code></td>
						<td>Large box shadows.</td>
					</tr>
					<tr>
						<td><code>--shadow-tight</code></td>
						<td>Small box shadows.</td>
					</tr>
					<tr>
						<td><code>--base-time-length</code></td>
						<td>A standard time value for animations.</td>
					</tr>
					<tr>
						<td><code>--material-translucent-small</code></td>
						<td>A subtle background blur.</td>
					</tr>
					<tr>
						<td><code>--material-translucent-large</code></td>
						<td>A larger background blur.</td>
					</tr>
					<tr>
						<td><code>--input-border</code></td>
						<td>The border <code>box-shadow</code> for input elements.</td>
					</tr>
					<tr>
						<td><code>--input-border-hover</code></td>
						<td>The hover style of the border <code>box-shadow</code> for input elements.</td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Layout</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>--base-gap-size</code></td>
						<td>Spacing between elements.</td>
					</tr>
					<tr>
						<td><code>--base-radius-size</code></td>
						<td>The size of border radii.</td>
					</tr>
					<tr>
						<td><code>--tabbar-height</code></td>
						<td>The height of Tab Bars.</td>
					</tr>
					<tr>
						<td><code>--toolbar-height</code></td>
						<td>The height of Toolbars.</td>
					</tr>
					<tr>
						<td><code>--accessorybar-height</code></td>
						<td>The height of Accessory Bars.</td>
					</tr>
					<tr>
						<td><code>--aside-width</code></td>
						<td>The width of Sidebars and Item Lists.</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	utilityclasses: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Utility Classes</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>Utility classes are styling classes that have a more global context (Rebar tries to scope most component classes with some specificity to avoid conflicts).</p>
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>excludeMargin</code></td>
						<td>Removes <code>margin</code>.</td>
					</tr>
					<tr>
						<td><code>excludePadding</code></td>
						<td>Removes <code>padding</code>.</td>
					</tr>
					<tr>
						<td><code>spacerSingle</code></td>
						<td>Adds margin that's set to <code>--base-gap-size</code>.</td>
					</tr>
					<tr>
						<td><code>spacerDouble</code></td>
						<td>Adds margin that's set to double the <code>--base-gap-size</code>.</td>
					</tr>
					<tr>
						<td><code>spacerTriple</code></td>
						<td>Adds margin that's set to triple the <code>--base-gap-size</code>.</td>
					</tr>
					<tr>
						<td><span><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and <code>h6</code></span></td>
						<td>Sets the font size to match the respective heading size.</td>
					</tr>
					<tr>
						<td><code>subtext</code></td>
						<td>Sets text to a small size and half opacity.</td>
					</tr>
					<tr>
						<td><span><code>textAlignLeft</code>, <code>textAlignCenter</code>, and <code>textAlignRight</code></span></td>
						<td>Sets the alignment of text.</td>
					</tr>
					<tr>
						<td><code>textBold</code></td>
						<td>Sets the <code>font-weight</code> to <code>bold.</td>
					</tr>
					<tr>
						<td><code>alwaysAccent</code></td>
						<td>Sets the text and fill colours to the <code>--accent</code> colour.</td>
					</tr>
					<tr>
						<td><code>alwaysMain</code></td>
						<td>Overrides any text and fill colours to the <code>--main</code> colour.</td>
					</tr>
					<tr>
						<td><code>alwaysBackgroundColor</code></td>
						<td>Sets a container to always use <code>--background</code> for it's <code>background-color</code></td>
					</tr>
					<tr>
						<td><code>alwaysForegroundColor</code></td>
						<td>Sets a container to always use <code>--foreground</code> for it's <code>background-color</code></td>
					</tr>
					<tr>
						<td><code>noBackgroundColor</code></td>
						<td>Removes the <code>background-color</code> of a container.</td>
					</tr>
					<tr>
						<td><code>paddingContent</code></td>
						<td>Sets up the padding for a main content container</td>
					</tr>
					<tr>
						<td><code>paddingContentTight</code></td>
						<td>A narrower version of <code>paddingContent</code></td>
					</tr>
					<tr>
						<td><code>shapeCircle</code></td>
						<td>Sets a <code>border-radius</code> that will make a square element in to a circle</td>
					</tr>
					<tr>
						<td><code>keepInitialWidth</code></td>
						<td>Resets the width of an element back to <code>auto</code></td>
					</tr>
					<tr>
						<td><code>disablePointer</code></td>
						<td>Removes pointer events from an element</td>
					</tr>
					<tr>
						<td><code>useInitialFill</code></td>
						<td>Stops fill and color being applied to an element</td>
					</tr>
					<tr>
						<td><code>noDecoration</code></td>
						<td>Sets the element to <code>text-decoration: none;</code></td>
					</tr>
					<tr>
						<td><code>noBorder</code></td>
						<td>Sets the element to <code>border: none;</code></td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	breakpoints: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Breakpoints</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>Rebar follows these standard breakpoints (you can use any that you require):</p>
			<table class="definitions spacerTriple" id="breakpoints">
				<thead>
					<tr>
						<th>Sizes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="textBold">0 px</td>
						<td>Narrow Small Screens</td>
					</tr>
					<tr>
						<td class="textBold">414 px</td>
						<td>Wide Small Screens</td>
					</tr>
					<tr>
						<td class="textBold">640 px</td>
						<td>Medium Screens</td>
					</tr>
					<tr>
						<td class="textBold">1100 px</td>
						<td>Narrow Large Screens</td>
					</tr>
					<tr>
						<td class="textBold">1800 px</td>
						<td>Wide Large Screens</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	increasedcontrast: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Increased Contrast</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
	spinners: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Spinners</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
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
	appglyph: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">App Glyph</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Documentation</h2>
			<p>The App Glyph is a place to display an image in blank content columns. It is not required but does help fill out blank views.</p>
			<p>You will need to manually insert an SVG in to <code>index.html</code>, an image should not be used here. Rebar Icons are unable to be used for this.</p>
			<p>It's recommended to make an SVG of 240 &times; 240 px with 10 px strokes. All objects should be converted in to paths and transparency is not allowed.</p>
		</div>
	`,
	thememetatag: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Theme Meta Tag</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>setMetaTheme()</code> is a function that is used to update the value in the <code>theme</code> meta tag. This is done to make sure the UI of Safari 15 and Android Chrome blends in with your app. It will set the theme value to your <code>--foreground</code> CSS variable's current value.</p>
			<p>Rebar is already set up to invoke this function when needed. So only call this when changing the current app theme in a custom way.</p>
		</div>
	`,
	colours: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routevisuals({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Visuals")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Semantic Colours</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
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
}

const charts = {
	pie: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecharts({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Charts")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Pie and Donut Charts</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple" id="exampleChartPie">
				<div class="containerSection" id="containerFruit"></div>
				<div class="containerSection" id="containerVotes"></div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">The only HTML necessary is a container with an ID tag. <code>generateChartPie()</code> will do the rest for you.</p>
			
			<h3>generateChartPie()</h3>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>target</code></td>
						<td>The ID of the container you want the chart and legend to fill in to. In your HTML this must be an container with an id attribute.</td>
					</tr>
					<tr>
						<td><code>title</code></td>
						<td>The name of the chart which will feature in the legend. A value of false will hide the title.</td>
					</tr>
					<tr>
						<td><code>donutSize</code></td>
						<td>A numerical value for turning a pie chart in to a donut chart. This value must be included.</td>
					</tr>
					<tr>
						<td><code>legend</code></td>
						<td>Accepts a true or false value. If set to true it will render a legend table.</td>
					</tr>
					<tr>
						<td><code>includeCount</code></td>
						<td>Accepts a true or false value. If set to true the raw value for each item will be displayed in the legend table.</td>
					</tr>
					<tr>
						<td><code>countLabel</code></td>
						<td>Appends a label to the raw value in the legend table. A value of false will hide this.</td>
					</tr>
					<tr>
						<td><code>data</code></td>
						<td>The data that will create the chart. It must be supplied in the format of [['label', value], ['label', value], ['label', value]] where value is a number. This function provides no sorting capabilities which means the data must be sorted before being used here.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>CSS</h3>
			<p>Most styles are already predefined for you. Rebar gives you 15 segment colours by default (using the <code>[data-segment="seg*"]</code> target). You can add more as you need and the colours can be overriden with your own CSS.</p>
			<p class="spacerTriple">The size of the donut hole is set via the function but can be overriden with CSS and must be set like this <code>--b: 10px !important;</code> on the chart container to override the inline specificity.</p>
		</div>
	`,
	gantt: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecharts({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Charts")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Gantt Chart</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Gantt Charts have different styling based on the OS being used',
					icon: false,
					size: 'large',
				})
			}
		
			<h2>Examples</h2>
			<div class="spacerTriple" id="exampleChartGantt"></div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">The only HTML necessary is a container with an ID tag. <code>generateChartGantt()</code> will do the rest for you.</p>
			
			<h3>generateChartGantt()</h3>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>target</code></td>
						<td>The ID of the container you want the chart to fill in to. In your HTML this must be an container with an id attribute.</td>
					</tr>
					<tr>
						<td><code>primaryLabel</code></td>
						<td>This string will be used to label the initial column.</td>
					</tr>
					<tr>
						<td><code>images</code></td>
						<td>A true or false toggle for display images in the initial column.</td>
					</tr>
					<tr>
						<td><code>direction</code></td>
						<td>Takes a value of ascending or descending. This determines which direction the values are in and helps with rendering the bars correctly.</td>
					</tr>
					<tr>
						<td><code>columnTitles</code></td>
						<td>An array of objects where each object contains a title and a value. The title will be inserted in to the table header cells and the value will be used to match the chart bars to the columns.</td>
					</tr>
					<tr>
						<td><code>data</code></td>
						<td>An array of objects where each object contains a name string, a key string, a start value, and an end value. A string for an image URL can also be included. The name, key, and image will be used in the initial cell of the row. The start and end values will be used to generate the bar for the row.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>CSS</h3>
			<p class="spacerTriple">There are no specific styling requirements for Gantt Charts but there are enough hooks to override styles if needed. By default the bars in the Gantt Chart will use the currently selected <code>--accent</code>.</p>
		</div>
	`,
	stats: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routecharts({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Charts")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Stats Chart</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple" id="exampleChartStats"></div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">The only HTML necessary is a container with an ID tag. <code>generateChartStats()</code> will do the rest for you.</p>
			
			<h3>generateChartStats()</h3>
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>target</code></td>
						<td>
						The ID of the container you want the chart to fill in to. In your HTML this must be an container with an id attribute.</td>
					</tr>
					<tr>
						<td><code>max</code></td>
						<td>The max number value for your bars.</td>
					</tr>
					<tr>
						<td><code>data</code></td>
						<td>The data that will create the chart. It must be supplied in the format of [['label', value], ['label', value], ['label', value]] where value is a number. This function provides no sorting capabilities which means the data must be sorted before being used here.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>CSS</h3>
			<p class="spacerTriple">There are no specific styling requirements for Stats Charts but there are enough hooks to override styles if needed. By default the bars in the Stats Chart will use the currently selected <code>--accent</code>.</p>
		</div>
	`,
}

const helpers = {
	preferences: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Preferences System</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p>The Preferences System in Rebar is designed to be a robust way to store, modify, and delete records in local storage. Preferences can be saved in to groups to keep the local storage clean.</p>
			<p>It offers the ability to bake-in default preferences that are saved to local storage on first run guaranteeing that you have access to those values from the get go.</p>
			<p>Lastly there is the concept of a preference version number where if you have to make large breaking changes you can change the version number and Rebar will completely reset what is stored in local storage back to your new default set of preferences.</p>
			
			<h2>Default Preferences</h2>
			<p>Your default preferences are stored in your Config file under the <code>appPreferencesDefault</code> constant (it's important to note you will also need the <code>appPreferencesVersion</code> constant filled out). Preferences should be stored as objects and you can include as many preference groups as you want here. Here is what the default Rebar preferences look like:</p>
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
		textDyslexia: "off",
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
		<table class="definitions spacerSingle">
			<thead>
				<tr>
					<th>Modes</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><code>update</code></td>
					<td>Changes the value of nominated preference from local storage (if no value nominated it will save all default preferences from <code>config.js</code> to local storage).</td>
				</tr>
				<tr>
					<td><code>delete</code></td>
					<td>Removes the nominated preference from local storage.</td>
				</tr>
				<tr>
					<td><code>append</code></td>
					<td>Takes what is in <code>config.js</code> and compare it to what is in local storage. It will them append any values that are not present in local storage while leaving any existing values along (if nothing is found in local storage it will save all default values to local storage).</td>
				</tr>
			</tbody>
		</table>
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
				<p class="excludeMargin">To append preferences:</p>
<pre>
modifyPreference({
	group: "",
	mode: "append",
})
</pre>
		</div>
	`,
	tipjar: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Tip jar</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<h2>Generate Tip Jar</h2>
			<p><code>generateTipJar()</code> is a function for creating a standard Tip Jar which can be displayed in whatever view you need. It is intended to be used inline and returns the HTML. The messaging is standard but will pick up <code>appName</code>, <code>appEmail</code>, <code>appPrivacyPolicy</code>, and <code>tipsLinks</code> from your config file to customise it.</p>
<pre>
generateTipJar({
	mini: true OR false,
});
</pre>
		
			<h2>Prompt for Tips</h2>
			<button class="spacerSingle" onclick="exampleTipsPrompt()">Show Modal</button>
			<p>You also have the option to automatically prompt users for tips. Whether the prompt appears is determined by <code>promptForTips</code> being set to <code>true</code> in the Config file. When set to <code>true</code> Rebar will keep track of how many times the app has been loaded and when the counter hits <code>4</code>, <code>8</code>, and <code>14</code> the prompt will be shown.</p>
			<p>If a user clicks on one of the links in the prompt this will cause the prompt to not be shown again (this is a way to not bother users who have already donated).</p>
		
			<h2>Mini Tip Jar</h2>
			${
				generateTipJar({
					mini: true,
				})
			}
			<p>The Mini Tip Jar is intended to be inserted inline in Item Lists. It is reduced in size to take up less vertical space. The Mini Tip Jar will be hidden if the user has clicked the Donate buttons or the X button.</p>
		</div>
	`,
	capitalizeword: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Capitalize Word</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>capitalize()</code> is a function to help you capitalize a single word that you might automatically get as lowercase from some JSON. To make it work you need to pass text in to the function. It currently only supports single words. It will return the capitalized word.</p>
		</div>
	`,
	copytoclipboard: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Copy to Clipboard</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>copyToClipboard()</code> is a function to help you copy provided text to the clipboard. To make it work you need to pass text in to the function. It currently only supports text and will not copy images or other content to the clipboard.</p>
			<p>The function will also generate a Toast notifying users that the copy was successful (which will auto-dismiss after a short period of time).</p>
		</div>
	`,
	settimelength:  `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Set Time Length</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>setTimeLength()</code> is a function that is used to set the <code>--base-time-length</code> variable. It will look to both the device and app settings to determine which is the appropriate value to set. When not setting the variable to 0 it will use the value in the <code>baseTimeLength</code> constant.</p>
		</div>
	`,
	temporaryanimationpause:  `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Temporary Animation pause</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>tempAnimationStop()</code> is a function that termporarily disables animations by setting <code>--base-time-length</code> to <code>0</code> and then resets <code>--base-time-length</code> to the default value.</p>
		</div>
	`,
	graburlparameters: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Grab URL Parameters</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>grabURLParameter()</code> is a function to retrieve the current URL query string for you. If the URL is set up as <code>?leading=trailing</code> it will return both <code>leading</code> and <code>trailing</code>. It will also return a <code>type</code> of </code>deeplink</code> which is used for the routing system.</p>
		</div>
	`,
	grabos: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Grab OS</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>grabOS()</code> is a function to retrieve the OS Rebar is currently loaded in for you. It will return a string of text with the OS name.</p>
			<p>For styling purposes Rebar automatically inserts the OS as a data attribute on the <code>body</code> tag.</p>
			<p>Example: The current OS is <code>${grabOS()}</code></p>
		</div>
	`,
	scrolltotop: `
		<header class="containerToolbar alwaysLeft">
			<div class="pinLeft">
				<button class="back toolbarItem" onclick='routehelpers({modifier: false, navtype: "backwards"})' title="Navigate Back">
					${insertBackButton("Helpers")}
				</button>
				<button class="toolbarItem collapseAside">
					${iconInterfaceElements.sidebarLeftStroke}
				</button>
			</div>
			<h1 class="headerToolbar">Scroll to Top</h1>
			<div class="pinRight">
				<button class="toolbarItem" onclick="miniThemePicker()">${iconObjects.paintbrushStroke}</button>
			</div>
		</header>
		<div class="scrollview cropToolbar paddingContent">
			<p><code>scrollToTop()</code> is a function to scroll an element to the top of a list. It takes an ID as the single parameter (it must be an ID as other elements did not work well).</p>
		</div>
	`,
}

//EXAMPLES
const sheetExamples = {
	full: `
		<header class="containerToolbar">
			<div class="pinLeft"></div>
			<h1 class="headerToolbar">Full Sheet</h1>
			<div class="pinRight">
				<button class="transparent confirm" data-function="closedialog" autofocus>Done</button>
			</div>
		</header>
		<div class="scrollview cropToolbar">
			<button class="spacerSingle" onclick="exampleSheetHalf()">View Half Sheet</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	half: `
		<header class="containerToolbar">
			<div class="pinLeft"></div>
			<h1 class="headerToolbar">Half Sheet</h1>
			<div class="pinRight">
				<button class="transparent confirm" data-function="closedialog" autofocus>Done</button>
			</div>
		</header>
		<div class="scrollview cropToolbar">
			<button class="spacerSingle" onclick="exampleSheetSmall()">View Small Sheet</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	small: `
		<header class="containerToolbar">
			<div class="pinLeft"></div>
			<h1 class="headerToolbar">Small Sheet</h1>
			<div class="pinRight">
				<button class="transparent confirm" data-function="closedialog" autofocus>Done</button>
			</div>
		</header>
		<div class="scrollview cropToolbar">
			<button class="spacerSingle" onclick="exampleToast2()">View Toast</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	themed: `
		<header class="containerToolbar">
			<div class="pinLeft"></div>
			<h1 class="headerToolbar">Themed Sheet</h1>
			<div class="pinRight">
				<button class="transparent confirm" data-function="closedialog" autofocus>Done</button>
			</div>
		</header>
		<div class="scrollview cropToolbar">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	notoolbar: `
		<button class="translucent xclose" data-function="closedialog" title="Dismiss" autofocus>${iconShapes.timesFill}</button>
		<div class="scrollview excludePadding">
			<div class="spacerSingle">
				<h1>Sheet Title</h1>
				<button class="translucent">Add to Guides</button>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
}