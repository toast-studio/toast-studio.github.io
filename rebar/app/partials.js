const gettingstarted = {
	welcome: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin"">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar"></h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<div id="containerWelcome" class="spacerTriple">
				<div class="alwaysAccent spacerSingle" id="logo">
					${generateIcon(iconLogos.rebarThin, 'duo')}
				</div>
				<h1>Welcome to Rebar</h1>
				<p>Rebar is a layout framework designed to give PWAs a native-feeling experience.</p>
			</div>
			<div id="gridWelcome">
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="red">${generateIcon(iconShapes.heart, 'fill')}</div>
					<h3 class="h4">Native Feel</h3>
					<p class="excludeMargin">Rebar is designed to feel like a native app that works on any platform. You should strive to include what feels best from various platforms while maintaining your own uniqueness.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="spacerHalf">${generateIcon(iconShapes.checkmarkCircle, 'multi')}</div>
					<h3 class="h4">Consistent Intent</h3>
					<p class="excludeMargin">Components in Rebar are always designed to keep the same intent across all breakpoints and responsive modes. This leads to a cleaner implementation. An example of this is Sheets always stay modal, they do not turn in to columns on larger screens.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="teal">${generateIcon(iconObjects.lego, 'duo')}</div>
					<h3 class="h4">Building Blocks</h3>
					<p class="excludeMargin">Rebar packs in many functions you will need to build a PWA. Whether it be something large like view management to something little like copying to the clipboard.</p>
				</section>
				
				<section class="containerSection excludeMargin">
					<div class="alwaysAccent spacerHalf" data-accent="yellow">${generateIcon(iconShapes.starFivePoint, 'fill')}</div>
					<h3 class="h4">Icon Set</h3>
					<p class="excludeMargin">Rebar includes an ever growing icon set to cover all your iconography needs. Each icon comes in multiple styles to suite any type of app.</p>
				</section>
			</div>
			
			<div id="toastCrafted">${iconLogos.toastCrafted}</div>
		</div>
	`,
	principles: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Princples</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Let these principles guide you as you work with Rebar:</p>
			
			<h2 class="headerSection withIcon">
				<span class="alwaysAccent containerIcon">${generateIcon(iconObjects.blueprint, 'stroke')}</span>
				<span>HTML</span>
			</h2>
			<div class="containerSection">
				<ul class="excludeMargin">
					<li>Make use of semantic tags</li>
					<li>Inside tags it's preferred to put classes before identifiers as it makes the identifiers easier to find at the end of the tag</li>
					<li>Keep div soup to a minimum</li>
					<li>Use IDs for named objects that need to be hooked in to JS</li>
				</ul>
			</div>
			
			<h2 class="headerSection withIcon">
				<span class="alwaysAccent containerIcon">${generateIcon(iconObjects.paintbrush, 'fill')}</span>
				<span>CSS</span>
			</h2>
			<div class="containerSection">
				<ul class="excludeMargin">
					<li>When a feature is considered Newely Baseline it is available for use in Rebar since browsers are now evergreen</li>
					<li>Use Camel Case for class names</li>
					<li>Use CSS Nesting to keep component code together, including nesting Media Queries and Container Queries</li>
					<li>Clear separation of theme styles, there should be minimal setting and then unsetting. Make use of <code>:not()</code> if necessary</li>
					<li>This is a monolithic file, so make use of the defined sections</li>
					<li>Always consider the accessibility modes and style accordingly</li>
					<li>Make use of the base variables and do <code>calc()</code> for scaling</li>
					<li>If a component lives inside of a column it should probably be using a Container Query for responsiveness</li>
					<li>Use Range Syntax for queries, it allows for more precise control</li>
					<li>If two or more properties share a value, use a meta variable to show they are intrinsicly linked</li>
					<li>Try to keep to this nesting pattern:
						<ol class="excludeMargin">
							<li>Local variables</li>
							<li>Parent element styles</li>
							<li>Psuedo selectors</li>
							<li>Theme selectors</li>
							<li>Child elements based on HTML ordering</li>
						</ol>
					</li>
					<li>You should make minimal use of <code>!important</code>, if you need to use it leave a comment</li>
					<li>You should not use <code>position: relative</code> to set a new layout context, instead use <code>contain: layout</code> to make it clear a new layout context is being set. If you need to use it leave a comment</li>
					<li>When completely rounding an element with <code>border-radius</code> use <code>100vw</code> as a consistent signifier</li>
				</ul>
			</div>
			
			<h2 class="headerSection withIcon">
				<span class="alwaysAccent containerIcon">${generateIcon(iconObjects.hammer, 'fill')}</span>
				<span>JS</span>
			</h2>
			<div class="containerSection">
				<ul class="excludeMargin">
					<li>Keep functions small</li>
					<li>Use Camel Case for function names</li>
					<li>Make use of <code>return</code> instead of appending to an ID or Class</li>
					<li>Always include comments for each block of code to help understand the flow of code, they should act as headers in the style of <code>//COMMENT</code></li>
					<li>Avoid thrashing the DOM</li>
					<li>Avoid repeated lookups of data</li>
				</ul>
			</div>
		</div>
	`,
	filestructure: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">File Structure</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<ul id="filestructure">
				<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} app</li>
				<ul class="excludeMargin">
					<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} images</li>
					<li>${generateIcon(iconObjects.file, 'fill')} app.css</li>
					<li>${generateIcon(iconObjects.file, 'fill')} app.js</li>
					<li>${generateIcon(iconObjects.file, 'fill')} config.js</li>
					<li>${generateIcon(iconObjects.file, 'fill')} partials.js</li>
					<li>${generateIcon(iconObjects.file, 'fill')} renderers.js</li>
					<li>${generateIcon(iconObjects.file, 'fill')} routes.js</li>
				</ul>
				
				<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} rebar</li>
				<ul class="excludeMargin">
					<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} fonts</li>
					<ul class="excludeMargin">
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} atkinson-bold.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} atkinson-regular.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} lexend.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} OpenDyslexic3-Bold.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} OpenDyslexic3-Regular.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} product-sans-bold.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} product-sans-Regular.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} SegoeUI-VF.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} SF-Pro.ttf</li>
						<li>${generateIcon(iconInterfaceElements.textCapital, 'stroke')} ShantellSans.ttf</li>
					</ul>
					<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} icons</li>
					<ul class="excludeMargin">
						<li>${generateIcon(iconObjects.file, 'fill')} charts.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} hardware.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} human.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} indicies.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} interface.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} logos.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} nature.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} objects.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} shapes.js</li>
						<li>${generateIcon(iconObjects.file, 'fill')} transport.js</li>
					</ul>
					<li>${generateIcon(iconObjects.folderHorizontal, 'fill')} images</li>
					<ul class="excludeMargin">
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} arrow-back-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} arrow-back-light.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} arrow-forward-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} arrow-forward-light.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tick-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tick-light.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-brave-dark.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-brave-dark@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-brave.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-brave@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-chrome-dark.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-chrome-dark@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-chrome.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-chrome@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-edge-edge.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-edge-edge@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-edge.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-edge@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-firefox-dark.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-firefox-dark@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-firefox.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-firefox@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-opera-dark.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-opera-dark@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-opera.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-opera@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-safari-dark.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-safari-dark@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-safari.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-safari@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-samsunginternet.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} browser-samsunginternet@2x.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tick-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tick-light.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} times-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} times-dark.svg</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tips.webp</li>
						<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} tips@2x.webp</li>
					</ul>
					<li>${generateIcon(iconObjects.file, 'fill')} jquery.tablesorter.js</li>
					<li>${generateIcon(iconObjects.file, 'fill')} rebar.css</li>
					<li>${generateIcon(iconObjects.file, 'fill')} rebar.js</li>
				</ul>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} apple-touch-icon.png</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} favicon.ico</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} favicon.svg</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} icon-maskable.png</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} icon-monochrome.png</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} icon.png</li>
				<li>${generateIcon(iconObjects.file, 'fill')} index.html</li>
				<li>${generateIcon(iconObjects.file, 'fill')} main.css</li>
				<li>${generateIcon(iconObjects.file, 'fill')} manifest.json</li>
				<li>${generateIcon(iconObjects.photoLandscape, 'stroke')} ogimage.png</li>
				<li>${generateIcon(iconObjects.file, 'fill')} sw.js</li>
			</ul>
		</div>
	`,
	appstructure: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">App Frame</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Config</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><code>tipsMessage</code></td>
						<td>A custom string to be displayed in the Tips Panel to give a reason for users to donate</td>
					</tr>
					<tr>
						<td><code>shortcutKeys</code></td>
						<td>The structure for the Shortcut Keys Panel.</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	version3: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Rebar 3</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Rebar 3 is focuses on refining Rebar through refactoring to make Rebar cleaner, easier to read, and to be simpler to work with.</p>
		
			<div class="containerAccordion hideOverflow spacerSingle active" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>3.1</h3>
						<small class="excludeMargin">19 Mar 2026</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<h4>${generateIcon(iconInterfaceElements.exclamationTriangle, 'multi')} Breaking Changes</h4>
							<ul>
								<li><code>grabFunctionName()</code> was removed as it's only used in Routing and that can be replaced by just typing out the string itself</li>
								<li><code>.layoutAlwaysGrid</code> has been replaced with <code>.layoutGrid.always</code> in Sidebars</li>
								<li><code>.subtext</code> has been replaced with the <code>small</code> tag</li>
								<li>Completely refactored the styling for Segmented Controls to make them a lot cleaner</li>
								<li>Search bars now use the <code>search</code> element instead of a div with the class <code>.containerSearch</code></li>
								<li>Replaced <code>.disabled</code> with the <code>disabled</code> attribute. This is more semantic and helps with keyboard navigation</li>
								<li>Spinners, Blank States, Pie Charts, Gantt Charts, Stats Charts, and Display Options are now an inline return instead of an append</li>
								<li>You can no longer insert individual Display Options, all will be shown</li>
								<li>Updated the <code>viewport</code> meta tag to use the correct initial scale of <code>1.0</code></li>
								<li>The default <code>accent</code> and <code>appearance</code> in <code>config.js</code> are now strings instead of an array with a single value</li>
								<li>The Tip Jar now accepts a custom line of text to help show what giving a tip gets you, this requires a new <code>tipsMessage</code> variable in <code>config.js</code></li>
								<li>Updated the cache list in <code>sw.js</code></li>
								<li>Added <code>helper.css</code> to <code>main.css</code></li>
								<li>Updated Icons to a new format that combines each style variant in to a single SVG</li>
								<li>To insert icons you need to use the new <code>generateIcon()</code> function</li>
								<li>Removed the Twitter icon</li>
								<li><code>roundedrectangleHorizontalFull</code>, <code>roundedrectangleHorizontalHalf</code>, <code>roundedrectangleVerticalFull</code>, and <code>roundedrectangleVerticalHalf</code> were renamed for consistency</li>
								<li>The <code>iconList()</code> function now works with the <code>generateIcon()</code> function and only needs a single icon as the parameter</li>
								<li>The structure for <code>appThemes</code> in <code>config.js</code> has changed to support the changes made to Rebar Icons</li>
							</ul>
						
							<h4>Added</h4>
							<ul>
								<li><code>.headerSidebar</code> for headers in Sidebars</li>
								<li>Lexend font</li>
								<li><code>helpers.css</code> to move utility overrides to a higher CSS layer</li>
								<li><code>hr</code> elements now have default styling to act as dividers</li>
								<li>Action Link Buttons replacing Action Transparent Buttons with an <code>.excludePadding</code> class</li>
								<li>Chip and Fluid styles for Segmented Controls</li>
								<li>Styles for disabled Textfields</li>
								<li><code>--base-hover-length</code> variable</li>
								<li>2026 MacBook Neo and Graphite (Aqua) accent colours</li>
								<li><code>h*</code>, <code>p</code>, and <code>li</code> can now include inline SVGs and images that will be scaled to match the text size</li>
								<li><code>--vertical-align</code> variable</li>
								<li><code>iconTab()</code> for Tab Bar icons</li>
							</ul>
						
							<h4>Changes</h4>
							<ul>
								<li>Refactored a lot of <code>rebar.css</code> to be cleaner and to separate out the OS styles</li>
								<li>Refactored a lof of <code>rebar.js</code> to be cleaner and easier to read</li>
								<li>Removed the black background on the <code>html</code> tag</li>
								<li>Renamed the OS fonts from their font names to their OS names for better clarity</li>
								<li>Refactored <code>scrollToTop()</code> to account for iOS and macOS toolbar styles and brought back smooth scrolling</li>
								<li>Improved the How to Install sheet with updated browser icons, platform icons, and exclusive accordions</li>
								<li>Updated the styling of Accordion chevrons on iOS to match iOS 26</li>
								<li>Updated <code>positon: relative</code> to <code>contain: layout</code> in most cases to make it more clear that a new layout context is being created</li>
								<li>Removed <code>!important</code> from the CSS</li>
								<li>The <code>.alwaysColor</code> classes now respond to <code>.useInitialFill</code></li>
								<li>Always Layout Grid Sidebar Items will now render with coloured tile style</li>
								<li>All <code>border-radius</code> that's intended to completely round an object now uses <code>100vw</code> as a consistent unit</li>
								<li>Improved the hover styles of all elements with transitions</li>
								<li>Combined the Apple accent colours in to one block in Display Options</li>
								<li>The <code>reduceMotion</code> Config setting is now set to <code>false</code> instead of <code>"off"</code></li>
							</ul>
							
							<h4>Fixes</h4>
							<ul>
								<li>Icons in List Items are no longer misaligned when OpenDyslexic is selected</li>
								<li>Removed the border that shouldn't have been visible on accordions that auto-open on larger screens</li>
								<li>Corrected the colour of the ring around the download arrow on the How to Install sheet header on Android</li>
								<li>Removed the double border that was displaying on Context Menus on Windows</li>
								<li>Removed the padding from Action Circular Buttons on iOS</li>
								<li>Header fonts on Windows now render correctly</li>
								<li>The <code>theme-color</code> meta tag is now being set correctly with a colour again instead of the raw value of the <code>--foreground</code> variable</li>
							</ul>
							
							<h4>Removed</h4>
							<ul class="excludeMargin">
								<li><code>.shapeCircle</code> utility class because it wasn't used</li>
								<li><code>.containerGeneric</code> was removed because it was only used in the Sample app</li>
								<li>Styles for an <code>h1</code> that would sit at the top of a Sidebar because it was only used in the Sample app</li>
								<li><code>.inline</code> Item List class because Item Lists shouldn't feature within a content view</li>
								<li><code>-webkit</code> prefixes on <code>backdrop-filter</code>, <code>mask</code>, and <code>appearance</code></li>
								<li><code>.alwaysBackgroundColor</code> on <code>.containerItemList</code> as it was unused</li>
								<li>Accent Chips were removed from <code>rebar.css</code> as they were unused</li>
								<li>Selection Rings were removed from <code>rebar.css</code> as they were unused</li>
								<li>Variables were removed from <code>rebar.css</code> as they were unused</li>
								<li>The Light and Extra Bold font options were removed as they have been unavailable for selection since Rebar 1</li>
								<li>The <code>.noBorder</code> helper class is no longer available, it is only a modifier on Accordions</li>
								<li><code>.keepInitialWidth</code> was removed, if needed you can set this in <code>app.css</code> on an specific element</li>
								<li>The iOS and macOS specific styles for iframes were removed as these styles were effectively the same as the default styles</li>
								<li><code>.textDyslexic</code> and <code>.textAtkinson</code> helper classes are no longer available as they were unused</li>
								<li>The click function for the <code>.share</code> class since <code>insertShareButton()</code> standardised Share Buttons</li>
								<li><code>showDialog()</code> had a <code>"type"</code> parameter that wasn't being used</li>
								<li><code>appTextSizes</code> was removed as text sizes have been fixed inside of Rebar CSS for a long time</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>3.0</h3>
						<small class="excludeMargin">14 Oct 2025</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<h4>${generateIcon(iconInterfaceElements.exclamationTriangle, 'multi')} Breaking Changes</h4>
							<ul>
								<li>Updated the cache list in <code>sw.js</code></li>
								<li>Sidebars now require a <code>.wrapperSidebar</code> parent with the <code>.material-liquidglass-thin</code> Material class</li>
								<li>Refactored toolbars with new content containers to make layout easier and cleaner</li>
								<li>Refactored the crop classes on Scrollviews and iframes to avoid cascade issues</li>
								<li>Accordions can now be opened by default on larger screens, appear as plain sections on larger screens, and work as exclusive accordions in groups</li>
								<li>When accordions are open the <code>.active</code> class is applied to the accordion container instead of the individual accordion pieces. It is now mandatory for accordions to be wrapped in <code>.containerAccordion</code>.</li>
								<li>The <code>clickSwitch()</code> function will now return <code>true/false</code> instead of <code>"on"/"off"</code> as a cleaner way to save preferences</li>
								<li>Renamed icon <code>tabletphoneStroke</code> to <code>tabletPhonePortraitStroke</code></li>
								<li>Renamed icon <code>iphoneFace*</code> to <code>iphoneFacePortrait*</code></li>
								<li>Renamed icon <code>ipodtouchFace*</code> to <code>ipodtouchFacePortrait*</code></li>
								<li>Renamed icon <code>roundedrectangle*Stroke</code> to <code>roundedrectangle*StrokeFull</code></li>
							</ul>
							
							<h4>Added</h4>
							<ul>
								<li>Materials which allow you to render material styles from different OSes to any element</li>
								<li>Rounded Square with Sparkle, Times Small, Tablet with Phone Landscape, iPhone Face Landscape, iPod Face landscape, iPhone with Cog Landscape, iPad with Cog Landscape, iPod touch with Cog Landscape, Apple Vision Cog, Rotate Sphere, List Item, Rounded Rectangle Half, Optic ID, Overlap Windows, Triangle icons</li>
								<li><code>insertConfirmationButton()</code> and <code>insertCancelButton()</code> functions for displaying the correct toolbar buttons on different OSes</li>
								<li>Action Bars</li>
								<li><code>times-light</code> and <code>times-dark</code> system images</li>
								<li>Accordion headers can now contain a leading image</li>
								<li><code>saveRecent()</code> function to have a consistent way for apps to save recents to localstorage</li>
								<li><code>togglePrefItem()</code> function to have a consistent way for apps to toggle the state of items in localstorage</li>
								<li>New Large size for Segmented Controls</li>
								<li>New Platter style for List Items</li>
								<li><code>dataFilter()</code>, <code>dataSort()</code>, <code>dataGroup()</code> helper functions for working with data</li>
							</ul>
							
							<h4>Changes</h4>
							<ul>
								<li>Updated components to their Material 3 Expressive appearance on Android</li>
								<li>Updated components to their Liquid Glass appearance on iOS and macOS</li>
								<li>Updated Device with Cog Portrait icons</li>
								<li>Inputs no longer have built-in margins</li>
								<li><code>insertBackButton()</code> now inserts the whole button instead of just the glyph. The button must be wrapped in a span that holds the navigation function</li>
								<li>Updated the stop animations function when resizing to ensure it works every time</li>
							</ul>
							
							<h4>Fixes</h4>
							<ul>
								<li>Grid layout for Sidebar Items</li>
								<li>Styling of buttons in Alerts on Android when you hover on them</li>
							</ul>
							
							<h4>Removed</h4>
							<ul class="excludeMargin">
								<li>Desaturation from dialog <code>::backdrop</code> and reduced the opacity of the dark variant</li>
								<li><code>toolbarDivider()</code> function</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		</div>
	`,
	version2: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Rebar 2</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Rebar 2 focuses on improving the routing system and updating to modern CSS features.</p>
		
			<div class="containerAccordion hideOverflow spacerSingle active" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.3.1</h3>
						<small class="excludeMargin">11 March 2025</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Fixed the spacing and hover styles of Back Buttons so they don't overflow titles</li>
								<li>Updated Container Queries to use Range Syntax</li>
								<li>Context Menus can break out of List Item containers on small screens</li>
								<li>Improved contrast issues for Segmented Controls on iOS</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.3</h3>
						<small class="excludeMargin">21 Feb 2025</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Service Worker Cache list, Config, colour variables, Buttons, Switches, Tokens, and iMacMulti icon',
									icon: false,
									size: "large",
								})
							}
							
							<h5>Added</h5>
							<ul>
								<li>Added <code>text-wrap: balance;</code> to headings</li>
								<li>New <code>--accentPrime</code>, <code>--backgroundPrime</code>, <code>--foregroundPrime</code>, and <code>--systempanelPrime</code> variables to support the removal of excess <code>color-mix()</code> for Android and Windows</li>
								<li>Display Tile button for use in Display Options</li>
								<li>Android, Windows, Small Text, Medium Text, Large Text, Chevron Downwards, and Chevron Upwards icons</li>
								<li>Shantell Sans, System Mono, Segoe UI, and SF Pro as a font options</li>
								<li>iMac 2024, Android, and Windows accents</li>
								<li><code>storedOS()</code> function to grab the users' selected OS</li>
								<li>A new <code>data-device</code> attribute is added to the <code>body</code> onload</li>
								<li><code>iconList()</code> and <code>iconGripper()</code> functions for rendering icons based on the selected theme</li>
							</ul>
							
							<h5>Updated</h5>
							<ul>
								<li>Colour variables now use OKLCH in Display P3 and <code>light-dark()</code></li>
								<li>Improved the visibility of Banners on Android</li>
								<li>Made improvements when increase contrast is active</li>
								<li>Made improvements when large text is selected</li>
								<li>Reworked the styling of Buttons to make them more clearer to work with</li>
								<li>Buttons are now called Action Buttons</li>
								<li>Context Menu buttons no longer use the Action Button styles, instead they have a specific <code>dropdown</code> style</li>
								<li>There is now a <code>primary</code> style for Action Buttons</li>
								<li>Switches are now checkboxes instead of buttons</li>
								<li>Updated styling of components to match iOS 18, iPadOS 18, and Android 15</li>
								<li>Tokens now require the <code>button</code> element</li>
								<li>Tokens now handle styling SVGs if they contain one</li>
								<li>Updated the styling of Display Options to be a more visual experience</li>
								<li>Renamed "iMacMulti" to "imacMulti" for consistency</li>
								<li>You only now need to list the custom accents in the Config file</li>
								<li>Media queries now use Range Syntax</li>
								<li><code>insertShareButton()</code> and <code>insertBackButton()</code> updated to match <code>iconList()</code> and <code>iconGripper()</code></li>
								<li>Tip Jar image and links are now current</li>
								<li>Context Menus when in an List Item while large text is selected will always default to left position</li>
								<li>The <code>.always</code> set of classes will now apply to child <code>span</code></li>
							</ul>
							
							<h5>Fixed</h5>
							<ul>
								<li>Stopped Sheets overflowing on Android</li>
								<li>Stopped Segments jumping width on Android when hovering</li>
							</ul>
							
							<h5>Removed</h5>
							<ul class="excludeMargin">
								<li><code>--systemBlue</code> variable</li>
								<li><code>positive</code> Action Button style</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2.5</h3>
						<small class="excludeMargin">19 October 2024</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Added Camera Control icon</li>
								<li>Updated Action Button icon</li>
								<li>Stopped the Shortcut Keys panel from being generated more than once</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2.4</h3>
						<small class="excludeMargin">11 June 2024</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Added Apple Intelligence icon</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2.3</h3>
						<small class="excludeMargin">2 March 2024</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Reverted How to Install content to remove message about web apps not able to be installed on iOS 17.4 in the EU</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2.2</h3>
						<small class="excludeMargin">24 February 2024</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Updated How to Install content to cover web apps not able to be installed on iOS 17.4 in the EU</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2.1</h3>
						<small class="excludeMargin">18 December 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Added <code>--mainInvert</code> colour variable</li>
								<li>Updated the Stats Chart to use a <code>div</code> element instead of a <code>progress</code> element due to rendering issues in Safari 17</li>
								<li>Added portrait orientation to Stats Chart</li>
								<li>Updated Tip Jar image</li>
								<li>Removed logging from the shortcut keys function</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.2</h3>
						<small class="excludeMargin">13 September 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Rebar Icons',
									icon: false,
									size: "large",
								})
							}
						
							<ul class="excludeMargin">
								<li>The main Rebar CSS file now uses CSS Nesting</li>
								<li>Scrollbars will now be dark in Dark Mode</li>
								<li>The chevrons for Accordions on Android and Windows now match their respective directions</li>
								<li>Accordions on Android no longer crop content</li>
								<li>Updated Processor Duo, Lock Open, and Lock Closed icons</li>
								<li>Added Badge, User Badge, Standby Mode, Action Button, Double Arrows with Divider, Split Rectangle, Video, Sun with Moon, and Hand Pinch icons</li>
								<li>Renamed the iPhone icons to match the Apple Watch naming for more clarity</li>
								<li>The grid style for Sidebars now applies per section for mixed section styling</li>
								<li>The Tokens container will now display the Tokens with the correct width if there aren't enough to fill a row</li>
								<li>Added utility classes for the font families</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.1</h3>
						<small class="excludeMargin">19 June 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Tab Bars, the Inital Route Loader, Service Worker Cache list, and the Search function',
									icon: false,
									size: "large",
								})
							}
							
							<ul class="excludeMargin">
								<li>Tab Bars now use Container Queries to define their responsive layout</li>
								<li>Tab Bars must now be wrapped in a <code>.wrapperTabBar</code> div</li>
								<li>The <code>.alwaysVertical</code> class has been deprecated</li>
								<li>The backdrop on modals now desaturates the background</li>
								<li>The buttons on the Tip Jar no longer break on small screens</li>
								<li>Updated the How to Install Sheet with the changes in iOS and iPadOS 16.4</li>
								<li>Fixed the Inital Route Loader so it wont break when it encounters a URL with no matching function</li>
								<li><code>pre</code> tags now have a more appropriate size for <code>tab</code> characters</li>
								<li>Larger iPads now use the correct styles</li>
								<li>Updated the Android and Windows styles to use <code>color-mix()</code>
								<li>Expanded the styles for Badges so they can be used in more places</li>
								<li>Updated Gantt charts so the primary column can include subtext and badges</li>
								<li>Added Large Horizontal Rectangle, Clock with Notification Badge, Corner Complication, Widget, L/M/S/XL Square Indicies, Apple Vision Pro, Chrome Desktop Install, Chrome Mobile Install, Edge Mobile Install, Firefox Mobile Install, Brave Mobile Install, Single Down Arrow Fill, and Horizontal Rounded Rectangle Ellipses icons</li>
								<li>Corrected a spelling error with the rectangle icons</li>
								<li>Updated the Tips image to WebP (this requires updating the default Service Worker cache list)</li>
								<li>The toast for installing a Rebar app is no longer constricted to Mobile Safari and will run on all browsers</li>
								<li>Search now displays a blank state when no results are found</li>
								<li>Blank States are now scoped so multiple can be on the one page without affecting each other</li>
								<li>Corrected the colour of toolbars in the primary column on Android</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0.3</h3>
						<small class="excludeMargin">30 January 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							${
								insertBanner({
									type: 'warning',
									content: 'This version includes breaking changes for Display Options Picker, Config, File Structure, and Service Worker cache',
									icon: false,
									size: "large",
								})
							}
							
							<ul class="excludeMargin">
								<li>Rebar settings are now appended at first run which allows for the addition of new settings post install</li>
								<li>Added support for the <a href="https://brailleinstitute.org/freefont" target="_blank">Atkinson Hyperlegible</a> font</li>
								<li>The <code>textDyslexicOptions</code> preference has been replaced with <code>textFont</code></li>
								<li>Added <code>--font-dyslexic-bold</code>, <code>--font-atkinson</code>, and <code>--font-atkinson-bold</code> CSS variables</li>
								<li>A fix for Android font rendering when Bold Text is turned on</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0.2</h3>
						<small class="excludeMargin">26 January 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<section class="containerSection">
							<ul class="excludeMargin">
								<li>Added Open and Closed Book icons</li>
								<li>Fixed the borders of sections with headers on Windows</li>
							</ul>
						</section>
					</div>
				</section>
			</div>
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0.1</h3>
						<small class="excludeMargin">8 January 2023</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
		
			<div class="containerAccordion hideOverflow large spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>2.0</h3>
						<small class="excludeMargin">4 November 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
		</div>
	`,
	version1: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Rebar 1</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Rebar 1 focuses on creating a reusable and flexible component system.</p>
		
			<div class="containerAccordion hideOverflow spacerSingle active" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.4.1</h3>
						<small class="excludeMargin">4 October 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.4</h3>
						<small class="excludeMargin">12 September 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.3.1</h3>
						<small class="excludeMargin">2 August 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.3</h3>
						<small class="excludeMargin">15 June 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.2.1</h3>
						<small class="excludeMargin">19 March 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow spacerSingle large" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.2</h3>
						<small class="excludeMargin">27 February 2022</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion hideOverflow large spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.1</h3>
						<small class="excludeMargin">3 December 2021</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
		
			<div class="containerAccordion hideOverflow spacerSingle" data-accordiongroup="history">
				<div class="headerAccordion headerSection">
					<span>
						<h3>1.0</h3>
						<small class="excludeMargin">10 October 2021</small>
					</span>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routegettingstarted({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Requirements</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>These requirements are based on needing to support modern CSS features. For this reason (among many others) no version of Internet Explorer is supported. The minimum requirements for any Rebar app are:</p>
			
			<table class="definitions">
				<thead>
					<tr>
						<th>Version</th>
						<th>Requirements</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="textBold">3.1</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">3.0</td>
						<td>
							<ul class="excludeMargin">
								<li class="textBold">jQuery 3.7.1</li>
								<li>Chrome 123</li>
								<li>Edge 123</li>
								<li>Firefox 128</li>
								<li>Safari 18</li>
								<li>Opera 109</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">2.3.1</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">2.3</td>
						<td>
							<small>Added <code>oklch()</code>, <code>light-dark()</code>, Relative Color Syntax, <code>text-wrap: balance</code>, and Range Syntax</small>
							<ul class="excludeMargin">
								<li>jQuery 3.6.4</li>
								<li class="textBold">Chrome 123</li>
								<li class="textBold">Edge 123</li>
								<li class="textBold">Firefox 128</li>
								<li class="textBold">Safari 18</li>
								<li class="textBold">Opera 109</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">2.2.1 - 2.2.5</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">2.2</td>
						<td>
							<small>Added CSS Nesting</small>
							<ul class="excludeMargin">
								<li>jQuery 3.6.4</li>
								<li class="textBold">Chrome 112</li>
								<li class="textBold">Edge 112</li>
								<li class="textBold">Firefox 117</li>
								<li class="textBold">Safari 16.5</li>
								<li class="textBold">Opera 98</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">2.1</td>
						<td>
							<small>Added <code>@container</code> and <code>color-mix()</code></small>
							<ul class="excludeMargin">
								<li class="textBold">jQuery 3.6.4</li>
								<li class="textBold">Chrome 106</li>
								<li class="textBold">Edge 106</li>
								<li class="textBold">Firefox 113</li>
								<li class="textBold">Safari 16</li>
								<li class="textBold">Opera 94</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">2.0.1 - 2.0.3</td>
						<td>No changes</td>
					</tr>
					<tr>
						<td class="textBold">2.0</td>
						<td>
							<small>Added <code>dialog</code>, <code>@layer</code>, and <code>scrollbar-gutter</code>.</small>
							<ul class="excludeMargin">
								<li class="textBold">jQuery 3.6.1</li>
								<li class="textBold">Chrome 99</li>
								<li class="textBold">Edge 99</li>
								<li class="textBold">Firefox 98</li>
								<li class="textBold">Safari 15.4</li>
								<li class="textBold">Opera 86</li>
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
							<small>Added <code>aspect-ratio</code>.</small>
							<ul class="excludeMargin">
								<li>jQuery 3.6.0</li>
								<li class="textBold">Chrome 88</li>
								<li class="textBold">Edge 88</li>
								<li class="textBold">Firefox 89</li>
								<li class="textBold">Safari 15</li>
								<li class="textBold">Opera 74</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="textBold">1.0</td>
						<td>
							<ul class="excludeMargin">
								<li>jQuery 3.6.0</li>
								<li>Chrome 79</li>
								<li>Edge 79</li>
								<li>Firefox 75</li>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Action Buttons</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th>Fill</th>
						<th>Primary</th>
						<th>Secondary</th>
						<th>Translucent</th>
						<th>Destructive</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td><button data-button="action-fill" class="primary" tabindex="0">Label</button></td>
						<td><button data-button="action-fill" class="secondary" tabindex="0">Label</button></td>
						<td><button data-button="action-fill" class="translucent" tabindex="0">Label</button></td>
						<td><button data-button="action-fill" class="destructive" tabindex="0">Label</button></td>
					</tr>
					<tr>
						<td>Confirm</td>
						<td><button data-button="action-fill" class="primary confirm">Label</button></td>
						<td><button data-button="action-fill" class="secondary confirm">Label</button></td>
						<td><button data-button="action-fill" class="translucent confirm">Label</button></td>
						<td><button data-button="action-fill" class="destructive confirm">Label</button></td>
					</tr>
					<tr>
						<td>Disabled</td>
						<td><button data-button="action-fill" class="primary" disabled>Label</button></td>
						<td><button data-button="action-fill" class="secondary" disabled>Label</button></td>
						<td><button data-button="action-fill" class="translucent" disabled>Label</button></td>
						<td><button data-button="action-fill" class="destructive" disabled>Label</button></td>
					</tr>
					<tr>
						<td>Icon</td>
						<td><button data-button="action-fill" class="primary">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-fill" class="secondary">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-fill" class="translucent">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-fill" class="destructive">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
					</tr>
					<tr>
						<td>Multi Icon</td>
						<td><button data-button="action-fill" class="primary useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-fill" class="secondary useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-fill" class="translucent useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-fill" class="destructive useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
					</tr>
					<tr>
						<td>Close</td>
						<td><button data-button="close" class="translucent" style="position: relative; top: 0px; right: 0px;">${generateIcon(iconShapes.times, 'fill')}</button></td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th>Transparent</th>
						<th>Primary</th>
						<th>Secondary</th>
						<th>Translucent</th>
						<th>Destructive</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td><button data-button="action-transparent" class="primary transparent">Label</button></td>
						<td><button data-button="action-transparent" class="secondary transparent">Label</button></td>
						<td><button data-button="action-transparent" class="translucent transparent">Label</button></td>
						<td><button data-button="action-transparent" class="destructive transparent">Label</button></td>
					</tr>
					<tr>
						<td>Confirm</td>
						<td><button data-button="action-transparent" class="primary transparent confirm">Label</button></td>
						<td><button data-button="action-transparent" class="secondary transparent confirm">Label</button></td>
						<td><button data-button="action-transparent" class="translucent transparent confirm">Label</button></td>
						<td><button data-button="action-transparent" class="destructive transparent confirm">Label</button></td>
					</tr>
					<tr>
						<td>Disabled</td>
						<td><button data-button="action-transparent" class="primary" disabled>Label</button></td>
						<td><button data-button="action-transparent" class="secondary" disabled>Label</button></td>
						<td><button data-button="action-transparent" class="translucent" disabled>Label</button></td>
						<td><button data-button="action-transparent" class="destructive" disabled>Label</button></td>
					</tr>
					<tr>
						<td>Icon</td>
						<td><button data-button="action-transparent" class="primary transparent">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-transparent" class="secondary transparent">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-transparent" class="translucent transparent">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
						<td><button data-button="action-transparent" class="destructive transparent">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
					</tr>
					<tr>
						<td>Multi Icon</td>
						<td><button data-button="action-transparent" class="primary transparent useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-transparent" class="secondary transparent useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-transparent" class="translucent transparent useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
						<td><button data-button="action-transparent" class="destructive transparent useInitialFill">${generateIcon(iconObjects.compass, 'multi')} Label</button></td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th>Link</th>
						<th>Primary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td><button data-button="action-link">Label</button></td>
					</tr>
					<tr>
						<td>Disabled</td>
						<td><button data-button="action-link" disabled>Label</button></td>
					</tr>
					<tr>
						<td>Icon</td>
						<td><button data-button="action-link">${generateIcon(iconShapes.starFivePoint, 'fill')} Label</button></td>
					</tr>
					<tr>
						<td>Multi Icon</td>
						<td><button data-button="action-link" class="useInitialFill">${generateIcon(iconObjects.compass, 'multi')}</button></td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th>Circular</th>
						<th>Primary</th>
						<th>Secondary</th>
						<th>Translucent</th>
						<th>Destructive</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Default</td>
						<td><button data-button="action-circular" class="primary">${generateIcon(iconShapes.starFivePoint, 'fill')}</button></td>
						<td><button data-button="action-circular" class="secondary">${generateIcon(iconShapes.starFivePoint, 'fill')}</button></td>
						<td><button data-button="action-circular" class="translucent">${generateIcon(iconShapes.starFivePoint, 'fill')}</button></td>
						<td><button data-button="action-circular" class="destructive">${generateIcon(iconShapes.starFivePoint, 'fill')}</button></td>
					</tr>
				</tbody>
			</table>
			
			<table class="definitions spacerTriple" id="buttons">
				<thead>
					<tr>
						<th>Materials</th>
						<th>Primary</th>
						<th>Secondary</th>
						<th>Translucent</th>
						<th>Destructive</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Liquid Glass Thin</td>
						<td><button data-button="action-fill" class="primary material-liquidglass-tinted">Label</button></td>
						<td><button data-button="action-fill" class="secondary material-liquidglass-thin">Label</button></td>
						<td><button data-button="action-fill" class="translucent">Label</button></td>
						<td><button data-button="action-fill" class="destructive material-liquidglass-tinted">Label</button></td>
					</tr>
				</tbody>
			</table>
				
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Buttons are the backbone of many components in Rebar. They are the base layer that enables a lot of styles to be applied. A Button can contain text, SVGs, and images.</p>
			<p class="spacerTriple">Buttons need a <code>[data-button]</code> attribute to denote their styling. For Action Buttons that is <code>action-fill</code>, <code>action-transparent</code>, <code>action-link</code>, or <code>action-circular</code>.</p>
			
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
						<td><code>primary</code></td>
						<td>Sets the backing to the accent.</td>
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
				</tbody>
			</table>
			
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Modifiers</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>.confirm</code></td>
						<td>Sets the label to bold text.</td>
					</tr>
					<tr>
						<td><code>.useInitialFill</code></td>
						<td>Uses the <code>fill</code> set inside the SVG instead of what comes from the Button class (this should be used for Multi style icons).</td>
					</tr>
					<tr>
						<td><code>[disabled]</code></td>
						<td>Reduces the opacity and disables pointer events.</td>
					</tr>
				</tbody>
			</table>
			
			<p>There are many other styles but they are specific to different components. What is listed here can be used with any button but primarily intended for form buttons.</p>
			<h4>Materials</h4>
			<p>Materials can be applied to a button if the platform requires it. All buttons are already setup with their <code>--material-tint</code>.</p>
		</div>
	`,
	sidebaritems: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Sidebar Items</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'stroke')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<section class="containerSection">
				<button data-button="sidebar">
					<div class="labelSidebar">
						${generateIcon(iconNature.sun, 'stroke')}
						Standard
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
				<br><br>
				<button data-button="sidebar" class="picked">
					<div class="labelSidebar">
						${generateIcon(iconNature.sun, 'stroke')}
						Picked
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
				<br><br>
				<button data-button="sidebar" class="picked subdued">
					<div class="labelSidebar">
						${generateIcon(iconNature.sun, 'stroke')}
						Subdued
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
				<br><br>
				<button data-button="sidebar" class="useInitialFill">
					<div class="labelSidebar">
						${generateIcon(iconObjects.compass, 'multi')}
						Use Initial Fill
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
				<br><br>
				<button data-button="sidebar" class="picked useInitialFill">
					<div class="labelSidebar">
						${generateIcon(iconObjects.compass, 'multi')}
						Use Initial Fill (Picked)
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
				<br><br>
				<button data-button="sidebar" class="picked subdued useInitialFill">
					<div class="labelSidebar">
						${generateIcon(iconObjects.compass, 'multi')}
						Use Initial Fill (Subdued)
					</div>
					<p class="containerBadge excludeMargin" data-type="sidebar">14</p>
				</button>
			</section>
			
			<h2>Documentation</h2>
			<p>Sidebar Items are buttons with the <code>sidebar</code> class. They come with default, <code>picked</code>, and <code>subdued</code> (this is used when an item in a secondary column is picked) states. An icon is not mandatory but highly recommended. You can include a Badge if need.</p>
			<p>The <code>.useInitialFill</code> class will allow an SVG used as the icon to keep the <code>fill</code> colours that are baked in to it's code.</p>
			<h3 class="h6">Template</h3>
<pre>
&lt;button data-button="sidebar"&gt;
	&lt;div class="labelSidebar"&gt;
		&#36;{icon}
		Standard
	&lt;/div&gt;
	&lt;p class="containerBadge excludeMargin" data-type="sidebar"&gt;XXX&lt;/p&gt;
&lt;/button&gt;
</pre>
		</div>
	`,
	listitems: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">List Items</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent" id="containerListItems">
			<h2>Examples</h2>
			<h3 class="h6">Default Any Size</h3>
			<section class="containerSection">
				<button data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHuman.userCircle, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconTransport.rocket, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconObjects.paintbrush, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="auto" class="picked">
					<div class="containerLeading">
						${generateIcon(iconShapes.rectangleStackHorizontal, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.location, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHardware.applewatchSide, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconShapes.starSixPoint, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<button data-button="action-fill" class="primary">Test with a Long Label</button>
				</div>
				<div data-button="item-flat" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.screenshot, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			</section>
			
			
			<h3 class="h6">Default Fixed Size</h3>
			<section class="containerSection">
				<button data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconHuman.userCircle, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconTransport.rocket, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconObjects.paintbrush, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="fixed" class="picked">
					<div class="containerLeading">
						${generateIcon(iconShapes.rectangleStackHorizontal, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.location, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconHardware.applewatchSide, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconShapes.starSixPoint, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<button data-button="action-fill" class="primary">Hello</button>
				</div>
				<div data-button="item-flat" data-icon-size="fixed">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.screenshot, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			</section>
			
			
			<h3 class="h6">Rounded Any Size</h3>
			<section class="containerSection">
				<button data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHuman.userCircle, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconTransport.rocket, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconObjects.paintbrush, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="auto" class="picked">
					<div class="containerLeading">
						${generateIcon(iconShapes.rectangleStackHorizontal, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.location, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHardware.applewatchSide, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconShapes.starSixPoint, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<div class="containerContextButton" data-setting="" data-position="right" data-type="" data-icongroup="" data-iconname="">
						<button data-button="dropdown" class="buttonContext primary">
							<span class="contextLabel">Test Context Menu</span>
							<span class="gripper">${iconGripper()}</span>
						</button>
						<div class="contextContainerMenu material-liquidglass-thin">
							<button data-button="menu-item" data-value="" data-label="">Item 1</button>
							<button data-button="menu-item" data-value="" data-label="">Item 2</button>
						</div>
					</div>
				</div>
				<div data-button="item-rounded" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.screenshot, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			</section>
			
			
			<h3 class="h6">Rounded Fixed Size</h3>
			<section class="containerSection">
				<button data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: red;">${generateIcon(iconHuman.userCircle, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: gold;">${generateIcon(iconObjects.paintbrush, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="fixed" class="picked">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: limegreen;">${generateIcon(iconShapes.rectangleStackHorizontal, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: deepskyblue;">${generateIcon(iconInterfaceElements.location, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: darkblue;">${generateIcon(iconHardware.applewatchSide, 'stroke')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: darkorchid;">${generateIcon(iconShapes.starSixPoint, 'fill')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<div class="containerContextButton" data-setting="" data-position="right" data-type="" data-icongroup="" data-iconname="">
						<button data-button="dropdown" class="buttonContext primary">
							<span class="contextLabel">Test Context Menu</span>
							<span class="gripper">${iconGripper()}</span>
						</button>
						<div class="contextContainerMenu material-liquidglass-thin">
							<button data-button="menu-item" data-value="" data-label="">Item 1</button>
							<button data-button="menu-item" data-value="" data-label="">Item 2</button>
						</div>
					</div>
				</div>
				<div data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: hotpink;">${generateIcon(iconInterfaceElements.screenshot, 'stroke')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
				<button data-button="item-rounded" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: deepskyblue;">${generateIcon(iconInterfaceElements.location, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
			</section>
			
			
			<h3 class="h6">Platter Any Size</h3>
			<section class="containerSection">
				<button data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHuman.userCircle, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconTransport.rocket, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconObjects.paintbrush, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="auto" class="picked">
					<div class="containerLeading">
						${generateIcon(iconShapes.rectangleStackHorizontal, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.location, 'stroke')}
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconHardware.applewatchSide, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconShapes.starSixPoint, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<div class="containerContextButton" data-setting="" data-position="right" data-type="" data-icongroup="" data-iconname="">
						<button data-button="dropdown" class="buttonContext primary">
							<span class="contextLabel">Test Context Menu</span>
							<span class="gripper">${iconGripper()}</span>
						</button>
						<div class="contextContainerMenu material-liquidglass-thin">
							<button data-button="menu-item" data-value="" data-label="">Item 1</button>
							<button data-button="menu-item" data-value="" data-label="">Item 2</button>
						</div>
					</div>
				</div>
				<div data-button="item-platter" data-icon-size="auto">
					<div class="containerLeading">
						${generateIcon(iconInterfaceElements.screenshot, 'stroke')}
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
			</section>
			
			
			<h3 class="h6">Platter Fixed Size</h3>
			<section class="containerSection">
				<button data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: red;">${generateIcon(iconHuman.userCircle, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: gold;">${generateIcon(iconObjects.paintbrush, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="fixed" class="picked">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: limegreen;">${generateIcon(iconShapes.rectangleStackHorizontal, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<button data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: deepskyblue;">${generateIcon(iconInterfaceElements.location, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
				<div data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: darkblue;">${generateIcon(iconHardware.applewatchSide, 'stroke')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</div>
				<div data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: darkorchid;">${generateIcon(iconShapes.starSixPoint, 'fill')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<div class="containerContextButton" data-setting="" data-position="right" data-type="" data-icongroup="" data-iconname="">
						<button data-button="dropdown" class="buttonContext primary">
							<span class="contextLabel">Test Context Menu</span>
							<span class="gripper">${iconGripper()}</span>
						</button>
						<div class="contextContainerMenu material-liquidglass-thin">
							<button data-button="menu-item" data-value="" data-label="">Item 1</button>
							<button data-button="menu-item" data-value="" data-label="">Item 2</button>
						</div>
					</div>
				</div>
				<div data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: hotpink;">${generateIcon(iconInterfaceElements.screenshot, 'stroke')}</span>
						<div class="label">
							<span>DIV</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
					<label for="switch2">
						<input type="checkbox" switch="" checked="" id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
						<div class="fakeCheckbox"></div>
					</label>
				</div>
				<button data-button="item-platter" data-icon-size="fixed">
					<div class="containerLeading">
						<span class="containerIcon" style="--icon-container: deepskyblue;">${generateIcon(iconInterfaceElements.location, 'fill')}</span>
						<div class="label">
							<span>Button</span>
							<small class="excludeMargin">Sub Label</small>
						</div>
					</div>
				</button>
			</section>
			
			<h2>Documentation</h2>
			<p>List Items are buttons with the <code>data-button="item-flat"</code>, <code>data-button="item-rounded"</code>, or <code>data-button="item-platter"</code> attributes. They come with default and <code>.picked</code> states.</p>
			<p>An icon is not mandatory, if you do include one it can be any size but you can fix it to a Rebar defined size with the <code>data-icon-size="fixed"</code> attribute. If you don't wish to set a size for the icons you can use the <code>data-button="auto"</code> attribute.</p>
			<p>If you need to include a sublabel that's possible with the <code>small</code> tag.</p>
			<p>The icons can be wrapped in a span with the <code>containerIcon</code> class which will give them the correct appearance on iOS and macOS. It is required to include <code>style="--icon-container: color;"</code> to fill in the background.</p>
			<p>You always need to wrap the leading contents in a div with the <code>containerLeading</code> class. This helps when you have a control on the right and when large text is selected.</p>
			<h3 class="h6">Template</h3>
<pre>
//FLAT
&lt;button data-button="item-flat" data-icon-size="fixed"&gt;
	&lt;div class="containerLeading"&gt;
		&lt;span class="containerIcon" style="--icon-container: color;"&gt;&#36;{iconList()}&lt;/span&gt;
		&lt;div class="label"&gt;
			&lt;span&gt;&lt;/span&gt;
			&lt;small class="excludeMargin"&gt;&lt;/small&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	//Place any controls here
&lt;/button&gt;

//ROUNDED
&lt;button data-button="item-rounded" data-icon-size="fixed"&gt;
	&lt;div class="containerLeading"&gt;
		&lt;span class="containerIcon" style="--icon-container: color;"&gt;&#36;{iconList()}&lt;/span&gt;
		&lt;div class="label"&gt;
			&lt;span&gt;&lt;/span&gt;
			&lt;small class="excludeMargin"&gt;&lt;/small&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	//Place any controls here
&lt;/button&gt;

//PLATTER
&lt;button data-button="item-platter" data-icon-size="fixed"&gt;
	&lt;div class="containerLeading"&gt;
		&lt;span class="containerIcon" style="--icon-container: color;"&gt;&#36;{iconList()}&lt;/span&gt;
		&lt;div class="label"&gt;
			&lt;span&gt;&lt;/span&gt;
			&lt;small class="excludeMargin"&gt;&lt;/small&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	//Place any controls here
&lt;/button&gt;
</pre>

			<h3>CSS</h3>
			<p>The <code>fixed</code> icon size is customisable from the default by setting the <code>--icon-size</code> variable.</p>
		</div>
	`,
	badges: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Badges</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<table class="definitions spacerTriple">
			<tbody>
				<tr>
					<td>Accent</td>
					<td>
						<p class="containerBadge excludeMargin">Large</p>
						<p class="containerBadge excludeMargin mini">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Positive</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="positive">Large</p>
						<p class="containerBadge excludeMargin mini" data-type="positive">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Destructive</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="destructive">Large</p>
						<p class="containerBadge excludeMargin mini" data-type="destructive">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Warning</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="warning">Large</p>
						<p class="containerBadge excludeMargin mini" data-type="warning">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Info</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="info">Large</p>
						<p class="containerBadge excludeMargin mini" data-type="info">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Grey</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="grey">Large</p>
						<p class="containerBadge excludeMargin mini" data-type="grey">Mini</p>
					</td>
				</tr>
				<tr>
					<td>Sidebar</td>
					<td>
						<p class="containerBadge excludeMargin" data-type="sidebar">24</p>
					</td>
				</tr>
				<tr>
					<td>Sidebar Picked</td>
					<td class="picked">
						<p class="containerBadge excludeMargin" data-type="sidebar">24</p>
					</td>
				</tr>
			</table>
			
			<h2>Documentation</h2>
			<p>Badges are used to denote the status of an element or with Sidebar Items and List Items to denote a numerical value for that item. It's not recommended to include text when badges are used in Sidebars or Lists.</p>
		</div>
	`,
	segmenteditems: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Segmented Items</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			
			<h3 class="headerSection">Unified</h3>
			<section class="containerSection">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle" data-segments="unified" data-size="small" data-setting="segment1A">
						<button data-button="segment" data-name="defaultsegment1" onclick="routesegmentexampledefault('defaultsegment1')">Up Next</button>
						<button data-button="segment" data-name="defaultsegment4" onclick="routesegmentexampledefault('defaultsegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="defaultsegment2" onclick="routesegmentexampledefault('defaultsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="defaultsegment3" onclick="routesegmentexampledefault('defaultsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented" data-segments="unified" data-size="large" data-setting="segment1B">
						<button data-button="segment" data-name="defaultsegment1" onclick="routesegmentexampledefault('defaultsegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="defaultsegment4" onclick="routesegmentexampledefault('defaultsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="defaultsegment2" onclick="routesegmentexampledefault('defaultsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="defaultsegment3" onclick="routesegmentexampledefault('defaultsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Floating</h3>
			<section class="containerSection">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle" data-segments="floating" data-size="small" data-setting="segment2A">
						<button data-button="segment" data-name="splitsegment1" onclick="routesegmentexamplesplit('splitsegment1')">Up Next</button>
						<button data-button="segment" data-name="splitsegment4" onclick="routesegmentexamplesplit('splitsegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="splitsegment2" onclick="routesegmentexamplesplit('splitsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="splitsegment3" onclick="routesegmentexamplesplit('splitsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented" data-segments="floating" data-size="large" data-setting="segment2B">
						<button data-button="segment" data-name="splitsegment1" onclick="routesegmentexamplesplit('splitsegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="splitsegment4" onclick="routesegmentexamplesplit('splitsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="splitsegment2" onclick="routesegmentexamplesplit('splitsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="splitsegment3" onclick="routesegmentexamplesplit('splitsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Display</h3>
			<section class="containerSection containerWallpaper">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle material-liquidglass-thick" data-segments="display" data-size="small" data-setting="segment3A">
						<button data-button="segment" data-name="displaysegment1" onclick="routesegmentexampledisplay('displaysegment1')">Up Next</button>
						<button data-button="segment" data-name="displaysegment4" onclick="routesegmentexampledisplay('displaysegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="displaysegment2" onclick="routesegmentexampledisplay('displaysegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="displaysegment3" onclick="routesegmentexampledisplay('displaysegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented material-liquidglass-thick" data-segments="display" data-size="large" data-setting="segment3B">
						<button data-button="segment" data-name="displaysegment1" onclick="routesegmentexampledisplay('displaysegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="displaysegment4" onclick="routesegmentexampledisplay('displaysegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="displaysegment2" onclick="routesegmentexampledisplay('displaysegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="displaysegment3" onclick="routesegmentexampledisplay('displaysegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Chip</h3>
			<section class="containerSection containerWallpaper">
				<div class="controlSegmented" data-segments="chip" data-setting="segment2B">
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment1" onclick="routesegmentexamplesplit('chipsegment1')">Up Next</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment4" onclick="routesegmentexamplesplit('chipsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')}</button>
					<button class="material-liquidglass-thick picked" data-button="segment" data-name="chipsegment2" onclick="routesegmentexamplesplit('chipsegment2')">${generateIcon(iconObjects.bag, 'fill')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment3" onclick="routesegmentexamplesplit('chipsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment5" onclick="routesegmentexamplesplit('chipsegment5')">${generateIcon(iconObjects.compass, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment6" onclick="routesegmentexamplesplit('chipsegment6')">${generateIcon(iconObjects.paintbrush, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment7" onclick="routesegmentexamplesplit('chipsegment7')">${generateIcon(iconObjects.highlighter, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment8" onclick="routesegmentexamplesplit('chipsegment8')">${generateIcon(iconObjects.hammer, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment9" onclick="routesegmentexamplesplit('chipsegment9')">${generateIcon(iconObjects.cog, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment10" onclick="routesegmentexamplesplit('chipsegment10')">${generateIcon(iconObjects.mapMarkerHole, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment11" onclick="routesegmentexamplesplit('chipsegment11')">${generateIcon(iconObjects.dialOff, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment12" onclick="routesegmentexamplesplit('chipsegment12')">${generateIcon(iconObjects.badgeUser, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment13" onclick="routesegmentexamplesplit('chipsegment13')">${generateIcon(iconObjects.trash, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment14" onclick="routesegmentexamplesplit('chipsegment14')">${generateIcon(iconObjects.loupe, 'stroke')}</button>
				</div>
			</section>
			
			<h3 class="headerSection">Fluid</h3>
			<section class="containerSection">
				<div class="controlSegmented" data-segments="fluid" data-setting="segment2B">
					<button data-button="segment" data-name="fluidsegment1" onclick="routesegmentexamplesplit('fluidsegment1')" style="--fill: var(--destructive);">${generateIcon(iconHardware.tv, 'stroke')} <span class="label">Up Next</span></button>
					<button data-button="segment" data-name="fluidsegment4" onclick="routesegmentexamplesplit('fluidsegment4')" style="--fill: orange;">${generateIcon(iconObjects.bookOpen, 'stroke')} <span class="label">Library</span></button>
					<button data-button="segment" class="picked" data-name="fluidsegment2" onclick="routesegmentexamplesplit('fluidsegment2')" style="--fill: var(--positive);">${generateIcon(iconObjects.bag, 'stroke')} <span class="label">Store</span></button>
					<button data-button="segment" data-name="fluidsegment3" onclick="routesegmentexamplesplit('fluidsegment3')" style="--fill: var(--info);"><img src="app/images/ui/sidebar1.png" /> <span class="label">Profile</span></button>
				</div>
			</section>
			
			<h2>Documentation</h2>
			<p>Segmented Items are buttons with the <code>segment</code> attribute. They come with default and <code>picked</code> states.</p>
			<p>They have five styles: Unified, Floating, Inline, Chip, and Fluid. These allow you to use Segmented Controls in different locations.</p>
			<p>It is a requirement of the Chip style that you use an icon that has both the <code>stroke</code> and <code>fill</code> styles.</p>
			<h3 class="h6">Template</h3>
<pre>
&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
</pre>
		</div>
	`,
	toolbaritems: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Toolbar Items</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<section class="containerSection">
				<button data-button="action-transparent" class="toolbarItem" title="Example Button">${generateIcon(iconShapes.plusCircle, 'stroke')}</button>
				<button data-button="action-fill" class="primary toolbarItem material-liquidglass-tinted" title="Done">${generateIcon(iconShapes.checkmark, 'stroke')}</button>
				<button data-button="action-transparent" class="toolbarItem material-liquidglass-thin" title="Cancel">${generateIcon(iconShapes.timesSmall, 'stroke')}</button>
			</section>
			<h2>Documentation</h2>
			<p>This button style is intended to give a more native look to toolbar buttons when viewed on different devices by the <code>toolbarItem</code> class with the <code>data-button="transparent"</code> attribute.</p>
			<p>You should not add Liquid Glass directly to this button. It should be done to a parent container for grouping purposes.</p>
		</div>
	`,
	tabbaritems: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Tab Bar Items</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<section class="containerSection">
				<button data-button="tab">
					<div class="wrapper">
						${iconTab(iconNature.sun)}
					</div>
					Standard
				</button>
				<button data-button="tab" class="picked">
					<div class="wrapper">
						${iconTab(iconNature.sun)}
					</div>
					Picked
				</button>
			</section>
			
			<h2>Documentation</h2>
			<p>Tab Bar Items are buttons with the <code>tab</code> class. They come with default and <code>picked</code> styles. Tab Bar Items should always include both an icon and a label.</p>
			<p>The <code>iconTab()</code> function expects an icon with both <code>stroke</code> and <code>fill</code> variants. If you need something outside of this just insert the icon directly with <code>generateIcon()</code>.</p>
			<h3 class="h6">Template</h3>
<pre>
&lt;button data-button="tab" class="picked" data-name="" onclick="routename('modifier')"&gt;
	&#36;{iconTab(icon)}
	Label
&lt;/button&gt;
</pre>
		</div>
	`,
	backbutton: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Back Button</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>The Back button is the single way in Rebar to navigate backwards between views. It should always be included in Secondary and Main columns. Do not include a label.</p>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;span onclick='routename({modifier: false, navtype: "backwards"})'&gt;
	&#36;{insertBackButton()}
&lt;/span&gt;
</pre>
			
			<h3>Functions</h3>
			<p>Back Buttons make use of the <code>controllerRoute()</code> function (View Routing for more details). The click function should always be the route this button will navigate to. It should usuall have a <code>modifier</code> of <code>false</code> and always a <code>navtype</code> of <code>backwards</code>.</p>
			<p class="spacerTriple">For rendering the contents you should use the <code>insertBackButton()</code> function which will handle displaying the correct arrow for you based on the OS.</p>
			
			<h3>CSS</h3>
			<p>On larger screens the Back Button will hide itself as it's not necessary since all columns are always visible.</p>
		</div>
	`,
	contextmenus: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Context Menus</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<table class="definitions spacerTriple">
				<tbody>
					<tr>
						<td>Default</td>
						<td>
							<div class="containerContextButton" data-setting="context1" data-position="left">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>List Item</td>
						<td>
							<div data-button="item-rounded" data-icon-size="fixed">
								<div class="containerLeading">
									<span class="containerIcon" style="--icon-container: var(--accent);">${generateIcon(iconObjects.badgeUser, 'fill')}</span>
									<div class="label">List Item</div>
								</div>
								<div class="containerContextButton" data-setting="context1" data-position="right">
									<button data-button="dropdown" class="buttonContext">
										<span class="contextLabel">Label</span>
										<span class="gripper">${iconGripper()}</span>
									</button>
									<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
										<button data-button="menu-item" data-value="first">First</button>
										<button data-button="menu-item" data-value="second">Second</button>
										<button data-button="menu-item" data-value="third">Third</button>
										<button data-button="menu-item" data-value="fourth">Fourth</button>
										<button data-button="menu-item" data-value="fifth">Fifth</button>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Toolbar</td>
						<td>
							<div class="containerToolbar" style="position: relative;">
								<div class="containerContextButton" data-setting="context1" data-position="left">
									<button data-button="dropdown" class="buttonContext">
										<span class="contextLabel">Label</span>
										<span class="gripper">${iconGripper()}</span>
									</button>
									<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
										<button data-button="menu-item" data-value="first">First</button>
										<button data-button="menu-item" data-value="second">Second</button>
										<button data-button="menu-item" data-value="third">Third</button>
										<button data-button="menu-item" data-value="fourth">Fourth</button>
										<button data-button="menu-item" data-value="fifth">Fifth</button>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Primary Icon Button</td>
						<td>
							<div class="containerContextButton" data-setting="context4" data-position="left">
								<button data-button="dropdown" class="buttonContext" title="Example with icon and no label">
									${generateIcon(iconShapes.triangleRightCircle, 'stroke')}
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Left Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="left">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Center Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="center">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Right Menu</td>
						<td>
							<div class="containerContextButton" data-setting="context6" data-position="right">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>With Icons</td>
						<td>
							<div class="containerContextButton" data-setting="context7" data-type="icons" data-position="left">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">${generateIcon(iconObjects.trash, 'stroke')} Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="love">
										${generateIcon(iconShapes.plusCircle, 'stroke')}
										<span class="label">Save to Playlist&hellip;</span>
									</button>
									<button data-button="menu-item" data-value="second">
										${generateIcon(iconShapes.heart, 'stroke')}
										<span class="label">Love</span>
									</button>
									<button data-button="menu-item" data-value="second">
										${generateIcon(iconShapes.musicnoteDouble, 'stroke')}
										<span class="label">View Album</span>
									</button>
									<button data-button="menu-item" data-value="second">
										${generateIcon(iconInterfaceElements.list, 'stroke')}
										<span class="label">Add to Up Next&hellip;</span>
									</button>
									<div class="divider"></div>
									<button data-button="menu-item" data-value="third">
										<img src="app/images/ui/sidebar1.png" />
										<span class="label">Profile</span>
									</button>
									<div class="divider"></div>
									<button data-button="menu-item" data-value="fourth" class="destructive">
										${generateIcon(iconObjects.trash, 'stroke')}
										<span class="label">Delete</span>
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
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Specific Width Button</td>
						<td>
							<div class="containerContextButton" data-setting="context9" data-position="left">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel">Label</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first">First</button>
									<button data-button="menu-item" data-value="second">Second</button>
									<button data-button="menu-item" data-value="third">Third</button>
									<button data-button="menu-item" data-value="fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Colour Chips</td>
						<td>
							<div class="containerContextButton" data-setting="context" data-type="pickericons" data-position="left" data-accent="red">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel"><div class="colorChip" data-accent="red"></div> Red</span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" class="picked" data-value="first">
										<div class="colorChip" data-accent="red"></div>
										<span class="label">Red</span>
									</button>
									<button data-button="menu-item" data-value="second">
										<div class="colorChip" data-accent="blue"></div>
										<span class="label">Blue</span>
									</button>
									<button data-button="menu-item" data-value="third">
										<div class="colorChip" data-accent="green"></div>
										<span class="label">Green</span>
									</button>
									<button data-button="menu-item" data-value="fourth">
										<div class="colorChip" data-accent="yellow"></div>
										<span class="label">Yellow</span>
									</button>
									<button data-button="menu-item" data-value="fifth">
										<div class="colorChip" data-accent="purple"></div>
										<span class="label">Purple</span>
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Picker</td>
						<td>
							<div class="containerContextButton" data-setting="picker1" data-position="left" data-type="picker">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel"></span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first" data-label="First">First</button>
									<button data-button="menu-item" data-value="second" data-label="Second">Second</button>
									<button data-button="menu-item" data-value="third" data-label="Third">Third</button>
									<button data-button="menu-item" data-value="fourth" data-label="Fourth">Fourth</button>
									<button data-button="menu-item" data-value="fifth" data-label="Fifth">Fifth</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Picker with Icons</td>
						<td>
							<div class="containerContextButton" data-setting="picker1" data-position="left" data-type="pickericons">
								<button data-button="dropdown" class="buttonContext">
									<span class="contextLabel"></span>
									<span class="gripper">${iconGripper()}</span>
								</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
									<button data-button="menu-item" data-value="first" data-label="First">
										${generateIcon(iconObjects.paintbrush, 'fill')}
										<span class="label">Paintbrush</span>
									</button>
									<button data-button="menu-item" data-value="second" data-label="Second">
										${generateIcon(iconObjects.highlighter, 'fill')}
										<span class="label">Highlighter</span>
									</button>
									<button data-button="menu-item" data-value="third" data-label="Third">
										${generateIcon(iconObjects.pencil, 'fill')}
										<span class="label">Pencil</span>
									</button>
									<button data-button="menu-item" data-value="fourth" data-label="Fourth">
										${generateIcon(iconObjects.pen, 'fill')}
										<span class="label">Pen</span>
									</button>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>Popover</td>
						<td>
							<div class="containerContextButton" data-setting="examplePopover" data-position="center" data-type="popover">
								<button data-button="action-fill" class="buttonContext">Label</button>
								<div class="contextContainerMenu material-liquidglass-thick material-acrylic">
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
			<p>Context Menus come in two parts, an element with the <code>buttonContext</code> class and a container of buttons with the <code>data-button="dropdown"</code> attribute. Both of these sit inside a <code>.containerContextButton</code> container.</p>
			<p>They also come in two varities, a Standard Menu and a Picker Menu. Both will display a list of options when clicked but only the Picker Menu will update the label of the button. Picker Menus will also save their selected value to local storage while Standard Menus will not.</p>
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
&lt;div class="containerContextButton" data-setting="" data-position="right" data-type="" data-icongroup="" data-iconname=""&gt;
	&lt;button data-button="dropdown" class="buttonContext"&gt;
		&lt;span class="contextLabel"&gt;&lt;/span&gt;
		&lt;span class="gripper"&gt;&#36;{iconGripper()}&lt;/span&gt;
	&lt;/button&gt;
	&lt;div class="contextContainerMenu material-liquidglass-thick material-acrylic"&gt;
		&lt;button data-button="menu-item" data-value="" data-label=""&gt;&lt;/button&gt;
		&lt;button data-button="menu-item" data-value="" data-label=""&gt;&lt;/button&gt;
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
			<p>No value is saved to local storage by default. Instead use the Preferences system with the returned value and label.</p>
			
			<p class="spacerTriple"><code>iconGripper()</code> is also associated with Context Menus as it will render the correct chevron based on the OS theme.</p>
			
			<h3>CSS</h3>
			<p>Styling is handled for you and will adjust according to the element a Dropdown button is contained in. On top of this you don't have to use a Button, any element with the <code>buttonContext</code> class will make the element clickable.</p>
			<p>Menu items must be Buttons. They will infer styling from the <code>.contextContainerMenu</code> class. You can add the <code>destructive</code> class to a menu item Button to change the text and icon to red.</p>
			<p>Menu items can be grouped in a container with the <code>.group</code> class to help with dynamic menu generation</p>
			<p>The menu container should use Thick Liquid Glass material.</p>
		</div>
	`,
	popovers: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Popovers</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="containerContextButton spacerTriple" data-setting="examplePopover" data-position="left" data-type="popover">
				<button data-button="action-fill" class="buttonContext primary">Show</button>
				<div class="contextContainerMenu material-liquidglass-thin material-acrylic">
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
			<p>Popovers can use Thick or Think Liquid Glass.</p>
		</div>
	`,
	segmentedcontrols: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Segmented Controls</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			
			<h3 class="headerSection">Unified</h3>
			<section class="containerSection">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle" data-segments="unified" data-size="small" data-setting="segment1A">
						<button data-button="segment" data-name="defaultsegment1" onclick="routesegmentexampledefault('defaultsegment1')">Up Next</button>
						<button data-button="segment" data-name="defaultsegment4" onclick="routesegmentexampledefault('defaultsegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="defaultsegment2" onclick="routesegmentexampledefault('defaultsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="defaultsegment3" onclick="routesegmentexampledefault('defaultsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented" data-segments="unified" data-size="large" data-setting="segment1B">
						<button data-button="segment" data-name="defaultsegment1" onclick="routesegmentexampledefault('defaultsegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="defaultsegment4" onclick="routesegmentexampledefault('defaultsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="defaultsegment2" onclick="routesegmentexampledefault('defaultsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="defaultsegment3" onclick="routesegmentexampledefault('defaultsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Floating</h3>
			<section class="containerSection">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle" data-segments="floating" data-size="small" data-setting="segment2A">
						<button data-button="segment" data-name="splitsegment1" onclick="routesegmentexamplesplit('splitsegment1')">Up Next</button>
						<button data-button="segment" data-name="splitsegment4" onclick="routesegmentexamplesplit('splitsegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="splitsegment2" onclick="routesegmentexamplesplit('splitsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="splitsegment3" onclick="routesegmentexamplesplit('splitsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented" data-segments="floating" data-size="large" data-setting="segment2B">
						<button data-button="segment" data-name="splitsegment1" onclick="routesegmentexamplesplit('splitsegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="splitsegment4" onclick="routesegmentexamplesplit('splitsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="splitsegment2" onclick="routesegmentexamplesplit('splitsegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="splitsegment3" onclick="routesegmentexamplesplit('splitsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Display</h3>
			<section class="containerSection containerWallpaper">
				<h4 class="h6">Small</h4>
				<section>
					<div class="controlSegmented spacerSingle material-liquidglass-thick" data-segments="display" data-size="small" data-setting="segment3A">
						<button data-button="segment" data-name="displaysegment1" onclick="routesegmentexampledisplay('displaysegment1')">Up Next</button>
						<button data-button="segment" data-name="displaysegment4" onclick="routesegmentexampledisplay('displaysegment4')">Library</button>
						<button data-button="segment" class="picked" data-name="displaysegment2" onclick="routesegmentexampledisplay('displaysegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="displaysegment3" onclick="routesegmentexampledisplay('displaysegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
				
				<h4 class="h6">Large</h4>
				<section>
					<div class="controlSegmented material-liquidglass-thick" data-segments="display" data-size="large" data-setting="segment3B">
						<button data-button="segment" data-name="displaysegment1" onclick="routesegmentexampledisplay('displaysegment1')">${generateIcon(iconHardware.tv, 'stroke')} Up Next</button>
						<button data-button="segment" data-name="displaysegment4" onclick="routesegmentexampledisplay('displaysegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')} Library</button>
						<button data-button="segment" class="picked" data-name="displaysegment2" onclick="routesegmentexampledisplay('displaysegment2')">${generateIcon(iconObjects.bag, 'stroke')}</button>
						<button data-button="segment" data-name="displaysegment3" onclick="routesegmentexampledisplay('displaysegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					</div>
				</section>
			</section>
			
			<h3 class="headerSection">Chip</h3>
			<section class="containerSection containerWallpaper">
				<div class="controlSegmented" data-segments="chip" data-setting="segment2B">
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment1" onclick="routesegmentexamplesplit('chipsegment1')">Up Next</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment4" onclick="routesegmentexamplesplit('chipsegment4')">${generateIcon(iconObjects.bookOpen, 'stroke')}</button>
					<button class="material-liquidglass-thick picked" data-button="segment" data-name="chipsegment2" onclick="routesegmentexamplesplit('chipsegment2')">${generateIcon(iconObjects.bag, 'fill')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment3" onclick="routesegmentexamplesplit('chipsegment3')"><img src="app/images/ui/sidebar1.png" /></button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment5" onclick="routesegmentexamplesplit('chipsegment5')">${generateIcon(iconObjects.compass, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment6" onclick="routesegmentexamplesplit('chipsegment6')">${generateIcon(iconObjects.paintbrush, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment7" onclick="routesegmentexamplesplit('chipsegment7')">${generateIcon(iconObjects.highlighter, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment8" onclick="routesegmentexamplesplit('chipsegment8')">${generateIcon(iconObjects.hammer, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment9" onclick="routesegmentexamplesplit('chipsegment9')">${generateIcon(iconObjects.cog, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment10" onclick="routesegmentexamplesplit('chipsegment10')">${generateIcon(iconObjects.mapMarkerHole, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment11" onclick="routesegmentexamplesplit('chipsegment11')">${generateIcon(iconObjects.dialOff, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment12" onclick="routesegmentexamplesplit('chipsegment12')">${generateIcon(iconObjects.badgeUser, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment13" onclick="routesegmentexamplesplit('chipsegment13')">${generateIcon(iconObjects.trash, 'stroke')}</button>
					<button class="material-liquidglass-thick" data-button="segment" data-name="chipsegment14" onclick="routesegmentexamplesplit('chipsegment14')">${generateIcon(iconObjects.loupe, 'stroke')}</button>
				</div>
			</section>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Segmented Controls are just a set of Buttons that sit in a <code>controlSegmented</code> container. The selected Button will gain a <code>picked</code> class.</p>
			<p>There are 5 styles: <code>unified</code>, <code>floating</code>, <code>display</code>, <code>chip</code>, and <code>fluid</code>. These work with the <code>data-segments</code> attribute.</p>
			<p>There are 2 sizes: <code>small</code> and <code>large</code>. These work with the <code>data-size</code> attribute. The <code>chip</code> and <code>fluid</code> styles only comes in one size.</p>
			<p>The <code>fluid</code> style requires a local <code>style="--fill: color;"</code> to apply a tint colour to the picked segment.</p>
			<p>The <code>chip</code> style requires the <code>material-liquidglass-thick</code> class on the segments.</p>
			<p>The <code>display</code> style requires the <code>material-liquidglass-thick</code> class on the <code>controlSegmented</code> container.</p>
			<h4 class="h6">Template</h4>
<pre class="spacerTriple">
&lt;div class="controlSegmented" data-segments="" data-size="" data-setting="">
	&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
	&lt;button data-button="segment" data-name="" onclick="routename('modifier')"&gt;&lt;/button&gt;
&lt;/div>
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Segmented Controls use the <code>controllerTab()</code> function (Refer to Tab Bars documentation on how this works).</p>
			
			<h3>CSS</h3>
			<p>Segmented Controls use Grid for layout (except <code>chip</code> and <code>fluid</code> which uses Flexbox). If you need to display it as a group with multiple rows you can redefine the Grid definition.</p>
		</div>
	`,
	switches: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Switches</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<table class="definitions spacerSingle">
				<tbody>
					<tr>
						<td>Default Off</td>
						<td>
							<label for="switch1">
								<input type="checkbox" switch id="switch1" name="switch1" value="" onclick="exampleSwitches(this)">
								<div class="fakeCheckbox"></div>
							</label>
						</td>
					</tr>
					<tr>
						<td>Default On</td>
						<td>
							<label for="switch2">
								<input type="checkbox" switch checked id="switch2" name="switch2" value="" onclick="exampleSwitches(this)">
								<div class="fakeCheckbox"></div>
							</label>
						</td>
					</tr>
					<tr>
						<td>Styled</td>
						<td>
							<label for="switch3">
								<input type="checkbox" switch checked id="switch3" name="switch3" value="" onclick="exampleSwitches(this)">
								<div class="fakeCheckbox"></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
			
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Switches are checkboxes that have the <code>switch</code> attribute added to them. Currently they use the fake checkbox code but in the future will be updated to remove this when there is wider support for the Switch element.</p>
			
			<h3>Functions</h3>
			<p>The <code>clickSwitch()</code> function checks what state the Switch has changed to when you click it and returns <code>true</code> and <code>false</code>. No value is saved to local storage by default. Instead use the Preferences system with the returned value.</p>
			
			${
				insertBanner({
					type: 'warning',
					content: '<code>clickSwitch()</code> returned <code>"on"</code> and <code>"off"</code> in Rebar 1 and 2',
					icon: false,
					size: 'large',
				})
			}
			
<pre class="spacerTriple">
$(document).on('click', '#switch', function() {
	let state = clickSwitch(this);
});
</pre>
			
			<h3>CSS</h3>
			<p>All sizes use <code>--base-font-size</code> so will scale accordingly when using a Dynamic Type setting.</p>
			<p>To set the ON colour of a Switch to something other than default you can override this with <code>--switch-background</code>.</p>
		</div>
	`,
	forminputs: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Form Inputs</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
					<div class="containerInput">
						<label for="radio3">
							<input type="radio" id="radio3" name="radio_buttons" value="radio1" disabled>
							<div class="fakeRadio"></div>
							<span class="inputLabel">Third</span>
						</label>
					</div>
					<div class="containerInput excludeMargin">
						<label for="radio4">
							<input type="radio" id="radio4" name="radio_buttons" value="radio3">
							<div class="fakeRadio"></div>
							<span class="inputLabel">Fourth</span>
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
							<input type="checkbox" id="checkbox3" name="checkboxes" value="checkbox3" disabled>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Third</span>
						</label>
					</div>
					<div class="containerInput excludeMargin">
						<label for="checkbox4">
							<input type="checkbox" id="checkbox4" name="checkboxes" value="checkbox3" disabled checked>
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Fourth</span>
						</label>
					</div>
					<div class="containerInput excludeMargin">
						<label for="checkbox5">
							<input type="checkbox" id="checkbox5" name="checkboxes" value="checkbox3">
							<div class="fakeCheckbox"></div>
							<span class="inputLabel">Fifth</span>
						</label>
					</div>
				</form>
			</section>
			<h3 class="h6">Fields</h3>
			<small><code>font-size</code> on these fields is clamped to a minimum of 16px to avoid Mobile Safari's page zoom when the field has <code>:focus</code>.</small>
			<section class="containerSection">
				<form class="excludeMargin">
					<div class="containerInput spacerSingle">
						<label for="textfield1">Textfield</label>
						<br>
						<input type="text" id="textfield1" name="textfield1" placeholder="This is a placeholder">
					</div>
					<div class="containerInput spacerSingle">
						<label for="textfield1b">Textfield (Disabled)</label>
						<br>
						<input type="text" id="textfield1b" name="textfield1b" placeholder="This is a placeholder" disabled>
					</div>
					
					<div class="containerInput spacerSingle">
						<label for="textfield2">Stepper</label>
						<br>
						<input type="number" id="textfield2" name="textfield2">
					</div>
					<div class="containerInput spacerSingle">
						<label for="textfield2b">Stepper (Disabled)</label>
						<br>
						<input type="number" id="textfield2b" name="textfield2b" disabled>
					</div>
					
					
					<div class="containerInput spacerSingle">
						<label for="textfield3">Textarea</label>
						<br>
						<textarea id="textfield3" name="textfield3" rows="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui.</textarea>
					</div>
					<div class="containerInput spacerSingle">
						<label for="textfield3b">Textarea (Disabled)</label>
						<br>
						<textarea id="textfield3b" name="textfield3b" rows="4" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui.</textarea>
					</div>
					
					
					<search>
						<input type="search" placeholder="Search" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
						<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
					</search>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Search Bars</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">National Dex</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="containerAccessoryBar layoutFixed">
					<search>
						<input type="search" placeholder="Search Pok&eacute;mon" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
						<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
					</search>
				</div>
				<div class="scrollview inset-TA alwaysForegroundColor">
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
&lt;search class="material-liquidglass-thin"&gt;
	&lt;input type="search" placeholder="" id="" /&gt;
	&lt;div class="buttonClearSearch"&gt;&#36;{iconShapes.timesCircleFill}&lt;/div&gt;
	&lt;div class="iconSearch"&gt;&#36;{iconInterfaceElements.searchStroke}&lt;/div&gt;
&lt;/search&gt;
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
					<tr>
						<td><code>emptyIcon</td>
						<td>The icon to display in the Blank State when no results are found. It should be a Rebar icon.</td>
					</tr>
					<tr>
						<td><code>emptyMessage</td>
						<td>The text to display in the Blank State when no results are found.</td>
					</tr>
				</tbody>
			</table>
			
<pre class="spacerTriple">
search({
	inputID: "",
	parentID: "",
	itemClass: "",
	valueClass: "",
	emptyIcon: ,
	emptyMessage: "",
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Selection Grids</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<h3 class="h6">Single Selection</h3>
			<div class="spacerDouble containerTokens" id="exampleTokenField" data-max="1" data-setting="critters">
				<button data-button="token" data-value="all" onclick="selectionGrid(this)">All</button>
				<button data-button="token" data-value="fish" onclick="selectionGrid(this)">Fish</button>
				<button data-button="token" data-value="insects" onclick="selectionGrid(this)">Insects</button>
				<button data-button="token" data-value="seacreatures" onclick="selectionGrid(this)">Sea Creatures</button>
			</div>
			<h3 class="h6">Multiple Selection</h3>
			<div class="spacerTriple containerTokens" id="exampleTokenField" data-max="2" data-setting="type">
				<button data-button="token" data-value="normal" onclick="selectionGrid(this)">Normal</button>
				<button data-button="token" data-value="fighting" onclick="selectionGrid(this)">Fighting</button>
				<button data-button="token" data-value="flying" onclick="selectionGrid(this)">Flying</button>
				<button data-button="token" data-value="poison" onclick="selectionGrid(this)">Poison</button>
				<button data-button="token" data-value="ground" onclick="selectionGrid(this)">Ground</button>
				<button data-button="token" data-value="rock" onclick="selectionGrid(this)">Rock</button>
				<button data-button="token" data-value="bug" onclick="selectionGrid(this)">Bug</button>
				<button data-button="token" data-value="ghost" onclick="selectionGrid(this)">Ghost</button>
				<button data-button="token" data-value="steel" onclick="selectionGrid(this)">Steel</button>
				<button data-button="token" data-value="fire" onclick="selectionGrid(this)">Fire</button>
				<button data-button="token" data-value="grass" onclick="selectionGrid(this)">Grass</button>
				<button data-button="token" data-value="water" onclick="selectionGrid(this)">Water</button>
				<button data-button="token" data-value="electric" onclick="selectionGrid(this)">Electric</button>
				<button data-button="token" data-value="psychic" onclick="selectionGrid(this)">Psychic</button>
				<button data-button="token" data-value="ice" onclick="selectionGrid(this)">Ice</button>
				<button data-button="token" data-value="dragon" onclick="selectionGrid(this)">Dragon</button>
				<button data-button="token" data-value="dark" onclick="selectionGrid(this)">Dark</button>
				<button data-button="token" data-value="fairy" onclick="selectionGrid(this)">Fairy</button>
			</div>
			
			<button id="displaySelections" data-button="action-fill" class="primary spacerTriple" onclick="showSelectionResults()">Display Selected Values</button>
			
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
	&lt;button data-value=""&gt;&lt;/button&gt;
	&lt;button data-value=""&gt;&lt;/button&gt;
	&lt;button data-value=""&gt;&lt;/button&gt;
	&lt;button data-value=""&gt;&lt;/button&gt;
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Tokens</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple containerTokens" id="exampleTokenField" data-max="2" data-setting="type">
				<button data-button="token" data-value="normal">Normal</button>
				<button data-button="token" data-value="fighting">Fighting</button>
				<button data-button="token" class="picked" data-value="flying">Flying</button>
				<button data-button="token" data-value="poison">Poison</button>
				<button data-button="token" data-value="ground">Ground</button>
				<button data-button="token" data-value="rock">Rock</button>
				<button data-button="token" data-value="bug">Bug</button>
				<button data-button="token" data-value="ghost">Ghost</button>
				<button data-button="token"picked" data-value="steel">Steel</button>
				<button data-button="token" data-value="fire">Fire</button>
				<button data-button="token" data-value="grass">Grass</button>
				<button data-button="token" data-value="water">Water</button>
				<button data-button="token" data-value="electric">Electric</button>
				<button data-button="token" data-value="psychic">Psychic</button>
				<button data-button="token" data-value="ice">Ice</button>
				<button data-button="token" data-value="dragon">Dragon</button>
				<button data-button="token" data-value="dark">Dark</button>
				<button data-button="token" data-value="fairy">Fairy</button>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Tokens are buttons with the <code>data-button="token"</code> attribute applied to them. To align them to a grid they should be in a container with the  <code>containerTokens</code> class.</p>
<pre class="spacerTriple">
&lt;div class="containerTokens" id="" data-max="" data-setting=""&gt;
	&lt;button data-button="token" data-value=""&gt;&lt;/button&gt;
	&lt;button data-button="token" data-value=""&gt;&lt;/button&gt;
	&lt;button data-button="token" data-value=""&gt;&lt;/button&gt;
	&lt;button data-button="token" data-value=""&gt;&lt;/button&gt;
&lt;/div&gt;
</pre>
			<h3>Function</h3>
			<p class="spacerTriple">Tokens themselves have no function but the <code>.containerTokens</code> container will use the <code>selectionGrid()</code> function to grant functionality to the Tokens.</p>
			
			<h3>CSS</h3>
			<p>The only styling class for Tokens is their <code>.picked</code> state.</p>
		</div>
	`,
	sharebutton: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecontrols({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Share Button</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<small>Note: If you are using a browser that does not support <code>navigator.share</code> then only the static examples will be displayed.</small>
			
			${insertShareButton(`Share this content`)}
			
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Static Examples</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>iOS and macOS</td>
						<td>
							<button data-button="action-transparent" class="primary" id="dummyShareButton" title="Share Content">
								${generateIcon(iconInterfaceElements.shareAppleUp, 'stroke')}
							</button>
						</td>
					</tr>
					<tr>
						<td>Android</td>
						<td>
							<button data-button="action-transparent" class="primary" id="dummyShareButton" title="Share Content">
								${generateIcon(iconInterfaceElements.shareAndroid, 'stroke')}
							</button>
						</td>
					</tr>
					<tr>
						<td>Windows</td>
						<td>
							<button data-button="action-transparent" class="primary" id="dummyShareButton" title="Share Content">
								${generateIcon(iconInterfaceElements.shareWindows, 'stroke')}
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">There is no HTML, the <code>insertShareButton()</code> function will handle it for you making sure each OS has the correct icon.</p>
			
			<h3>Function</h3>
			<p>The <code>insertShareButton()</code> function is designed to only share the URL of the current page (if you wish to do share other content a different function will need to be written). At this time the title of the share will default to the <code>appName</code> constant.</p>
			<p class="spacerTriple">This is designed to work inline so it must be include in an <code>.append()</code>. The appended button includes the click functionality to invoke the Share Sheet.</p>
		</div>
	`,
}

const layout = {
	routing: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Routing</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td>The name of the route which should be the function name excluding the "route" part. This is used for setting the <code>picked</code> class on buttons.</td>
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
						<td>The name of the route which should be the function name excluding the "route" part. This is used for URL construction.</td>
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
		route: "routename",
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
		route: "routename",
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
const routeFunction = window["route" + url.query];
	
if (typeof routeFunction === "function") {
	//LOAD ROUTE IN URL
	routeFunction({modifier: url.source, navtype: "deeplink"});
} else {
	//LOAD DEFAULT ROUTES
	//SMALL SCREENS
	if (window.matchMedia("(max-width: 1099px)").matches) {
		//LEVEL 1
		routesidebar({modifier: false, navtype: "deeplink"})
	}
	
	//LARGE SCREENS
	if (window.matchMedia("(min-width: 1100px)").matches) {
		//LEVEL 3
		routegettingstarted({modifier: "welcome", navtype: "deeplink"})
	}
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Columns</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
							<small>0 px &#8211; 639 px</small>
						</td>
						<td>Columns sit off-screen and will slide in to view when an <code>active</code> class is added. The column that is generating the view transition will gain a <code>slightSlide</code> class that will cause it to slightly slide underneath the column that has just been set to <code>active</code>.</td>
					</tr>
					<tr>
						<td>
							<span>Medium</span>
							<small>640 px &#8211; 1099 px</small>
						</td>
						<td>With a three column layout the <code>.columnPrimary</code> and <code>.columnSecondary</code> columns will transition but the <code>.columnTertiary</code> column will always remain in view.</td>
					</tr>
					<tr>
						<td>
							<span>Large</span>
							<small>1100 px onwards</small>
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
			<small class="spacerTriple"><code>controllerRoute()</code> will set the right classes based on the number of columns for the route.</small>
			
			<h3>Functions</h3>
			<p>The columns themselves do not have any functions attached to them. Navigation is handled through <code>controllerRoute()</code> on the list items in a column (See Routing for more info). Backwards navigation is also handled through <code>controllerRoute()</code>.</p>
			<h4>Two Column Layouts in a Three Column App</h4>
			<p class="spacerTriple">You might want your app to have a three column for the majority of views but need a two column layout in a few instances. <code>controllerRoute()</code> can accomodate this by setting the number of columns for the route being navigated to.</p>
			
			<h3>CSS</h3>
			<p>Both <code>.columnPrimary</code> and <code>.columnSecondary</code> have a fixed size based on <code>--aside-width</code>. On larger screens <code>.containerAside</code> and <code>.columnTertiary</code> will adjust accordingly depending on how many columns are in <code>containerAside</code>.</p>
		</div>
	`,
	sidebars: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Sidebars</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Sidebars require these containers for their buttons:</p>
			<ul>
				<li><code>.containerAside</code> defines the position of the Sidebar (this does not need to be applied to an aside element)</li>
				<li><code>.containerSidebar</code> enables all of the styling to make an Item List in to a Sidebar</li>
				<li><code>.wrapperSidebar</code> enables the inset that Liqid Glass requires</li>
			</ul>
			
			<p>It is important that all of the buttons sit inside a <code>.scrollview</code>.</p>
			
			<h3>Functions</h3>
			<p>At their core Sidebars are just Source Lists with a particular set of styles applied which means they use the <code>controllerRoute()</code> function. Refer to the Routing section for more information.</p>
			
			<h3>CSS</h3>
			<p>Sections can be grouped using the <code>section</code> element, margin will automatically be applied to space out each section. They can also be made collapsible by turning them in to Accordions, refer to the Accordions section on how to do this.</p>
			<p>The <code>controllerRoute()</code> function will handle setting the correct styling to picked items depending at what level the currently selected navigation item is at.</p>
			<p>If you wish to have a tiled layout for your Sidebar on smaller screens you can add the <code>.layoutGrid</code> class to a wrapper container. This style is great for Sidebars with a short list of items.</p>
			<p>To always have a tiled layout for a section use the <code>.always</code> class on the <code>.layoutGrid</code> container.</p>
		</div>
	`,
	itemlists: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Item Lists</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h3>
			<h3 class="h6">Standard buttons with inset</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
				<div class="containerItemList inset" id="tableview1" data-target="testTarget" data-parent="testParent">
					<h2 class="headerList">Text Only</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat">
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">DIVS instead of Buttons</h2>
					<section class="containerSection excludePadding">
						<div data-button="item-flat">
							<div class="containerLeading">
								${generateIcon(iconShapes.heart, 'stroke')}
								<div class="label">
									<span>Item 1</span>
									<small class="excludeMargin">Sub-Label</small>
								</div>
							</div>
							<button data-button="action-fill" class="primary">Test with a long label</button>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 2</span>
							</div>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 3</span>
							</div>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 4</span>
							</div>
						</div>
					</section>
					
					<h2 class="headerList">SVG Icons</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconShapes.heart, 'stroke')}
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconShapes.plusSquareRounded, 'stroke')}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconInterfaceElements.questionCircle, 'stroke')}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconHuman.handRaisedRight, 'stroke')}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar1.png" width="30" />
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar2.png" width="30" />
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar3.png" width="30" />
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar4.png" width="30" />
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
				</div>
			</div>
			
			<h3 class="h6">Standard buttons with no inset</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
				<div class="containerItemList" id="tableview1" data-target="testTarget" data-parent="testParent">
					<h2 class="headerList">Text Only</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat">
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat">
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">DIVS instead of Buttons</h2>
					<section class="containerSection excludePadding">
						<div data-button="item-flat">
							<div class="containerLeading">
								${generateIcon(iconShapes.heart, 'stroke')}
								<div class="label">
									<span>Item 1</span>
									<small class="excludeMargin">Sub-Label</small>
								</div>
							</div>
							<button data-button="action-fill" class="primary">Test with a long label</button>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 2</span>
							</div>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 3</span>
							</div>
						</div>
						<div data-button="item-flat">
							<div class="label">
								<span>Item 4</span>
							</div>
						</div>
					</section>
					
					<h2 class="headerList">SVG Icons</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconShapes.heart, 'stroke')}
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconShapes.plusSquareRounded, 'stroke')}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconInterfaceElements.questionCircle, 'stroke')}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							${generateIcon(iconHuman.handRaisedRight, 'stroke')}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar1.png" width="30" />
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar2.png" width="30" />
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar3.png" width="30" />
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="fixed">
							<img src="app/images/ui/sidebar4.png" width="30" />
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="containerSection excludePadding">
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-flat" data-icon-size="auto">
							${generateIcon(iconTransport.rocket, 'stroke')}
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
				</div>
			</div>
			
			<h3 class="h6">Rounded Buttons</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="exampleTableview1">
				<div class="containerItemList inset" id="tableview1" data-target="testTarget" data-parent="testParent">
					<h2 class="headerList">Text Only</h2>
					<section class="spacerDouble">
						<button data-button="item-rounded">
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-rounded">
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-rounded">
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-rounded">
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">DIVS instead of Buttons</h2>
					<section class="spacerDouble">
						<div data-button="item-rounded">
							<div class="containerLeading">
								${generateIcon(iconShapes.heart, 'stroke')}
								<div class="label">
									<span>Item 1</span>
									<small class="excludeMargin">Sub-Label</small>
								</div>
							</div>
							<button data-button="action-fill" class="primary">Test with a long label</button>
						</div>
						<div data-button="item-rounded">
							<div class="label">
								<span>Item 2</span>
							</div>
						</div>
						<div data-button="item-rounded">
							<div class="label">
								<span>Item 3</span>
							</div>
						</div>
						<div data-button="item-rounded">
							<div class="label">
								<span>Item 4</span>
							</div>
						</div>
					</section>
					
					<h2 class="headerList">SVG Icons</h2>
					<section class="spacerDouble">
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: tomato;">${generateIcon(iconShapes.heart, 'stroke')}</span>
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: limegreen;">${generateIcon(iconShapes.plusSquareRounded, 'stroke')}</span>
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: skyblue;">${generateIcon(iconInterfaceElements.questionCircle, 'stroke')}</span>
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: purple;">${generateIcon(iconHuman.handRaisedRight, 'stroke')}</span>
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Image Icons</h2>
					<section class="spacerDouble">
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: white;"><img src="app/images/ui/sidebar1.png" /></span>
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: white;"><img src="app/images/ui/sidebar2.png" /></span>
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: white;"><img src="app/images/ui/sidebar3.png" /></span>
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="fixed">
							<span class="containerIcon" style="--icon-container: white;"><img src="app/images/ui/sidebar4.png" /></span>
							<div class="label">
								<span>Item 4</span>
							</div>
						</button>
					</section>
					
					<h2 class="headerList">Icons of any size</h2>
					<section class="spacerDouble">
						<button data-button="item-rounded" data-icon-size="auto">
							<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'stroke')}</span>
							<div class="label">
								<span>Item 1</span>
								<small class="excludeMargin">Sub-Label</small>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="auto">
							<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'stroke')}</span>
							<div class="label">
								<span>Item 2</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="auto">
							<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'stroke')}</span>
							<div class="label">
								<span>Item 3</span>
							</div>
						</button>
						<button data-button="item-rounded" data-icon-size="auto">
							<span class="containerIcon" style="--icon-container: orange;">${generateIcon(iconTransport.rocket, 'stroke')}</span>
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
			<p>Any row that is solely clickable needs to be a <code>button</code> with the <code>data-button="item-*"</code> attribute. If the row itself is to not be clickable, maybe because it contains controls within itself, then it should be set as a <code>div</code> instead of a button.</p>
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
						<td><code>rounded</code></td>
						<td>While not a property of the container itself, it's important to note the third style is the Rounded List and this requires setting the <code>rounded</code> class on the buttons.</td>
					</tr>
				</tbody>
			</table>
			
			<p>Rebar does not support picked List Items with a checkmark style. If you need to select from a group of options please use a Picker Menu instead.</p>
		</div>
	`,
	toolbars: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Toolbars</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent" id="exampleToolbars">
			<h2>Examples</h2>
			
			<ul id="legendToolbars">
				<li><div class="colorChip" style="--accent: red;"></div> wrapperToolbarStart</li>
				<li><div class="colorChip" style="--accent: orange;"></div> wrapperToolbarMiddle</li>
				<li><div class="colorChip" style="--accent: violet;"></div> wrapperToolbarEnd</li>
				<li><div class="colorChip" style="--accent: aquamarine;"></div> containerAccessoryBar</li>
			</ul>
			
			<h3 class="h6">Toolbar Layouts</h3>
			<!-- DEFAULT LAYOUT -->
			<div class="containerGeneric excludePadding exampleToolbar">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconInterfaceElements.filter, 'stroke')}</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Default Layout</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconShapes.rectangleOverlapHorizontal, 'stroke')}</button>
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconObjects.trash, 'stroke')}</button>
							</button>
						</div>
					</div>
				</header>
				
				<div class="scrollview inset-T">
					<p style="padding: var(--base-gap-size);">The <code>.layoutDefault</code> modifier will set the layout of the toolbar to match each respective OS. This is the layout you should use for the majority of your toolbars.</p>
				</div>
			</div>
			
			<!-- TRAILING LAYOUT -->
			<div class="containerGeneric excludePadding exampleToolbar">
				<header class="containerToolbar layoutTrailing">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconInterfaceElements.filter, 'stroke')}</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Trailing Layout</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconShapes.rectangleOverlapHorizontal, 'stroke')}</button>
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconObjects.trash, 'stroke')}</button>
							</button>
						</div>
					</div>
				</header>
				
				<div class="scrollview inset-T">
					<p style="padding: var(--base-gap-size);">The <code>.layoutTrailing</code> modifier will set both left and right pins to be on the trailing edge.</p>
				</div>
			</div>
			
			<!-- SHEET LAYOUT -->
			<div class="containerGeneric excludePadding exampleToolbar">
				<header class="containerToolbar layoutSheet">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Sheet Layout</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							${insertCancelButton()}
						</div>
					</div>
				</header>
				
				<div class="scrollview inset-T">
					<p style="padding: var(--base-gap-size);">The <code>.layoutSheet</code> modifier is intended for Toolbars that contain a single Cancel button. If you have both Cancel and Done buttons OR a single Done button please use the Default Layout.</p>
				</div>
			</div>
			
			<!-- NO LAYOUT MODIFIER -->
			<div class="containerGeneric excludePadding exampleToolbar">
				<header class="containerToolbar">
					<search class="material-liquidglass-thin">
						<input type="search" placeholder="No layout modifier" />
						<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
						<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
					</search>
				</header>
				
				<div class="scrollview inset-T">
					<p style="padding: var(--base-gap-size);">A Toolbar with no layout modifer will act like a standard DIV that has some padding.</p>
				</div>
			</div>
			
			<!-- ACCESSORY BAR -->
			<div class="containerGeneric excludePadding spacerDouble exampleToolbar" id="exampleToolbar2">
				<header class="containerToolbar layoutDefault" id="accessoryParent1">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconInterfaceElements.filter, 'stroke')}</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Accessory Bar</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconShapes.rectangleOverlapHorizontal, 'stroke')}</button>
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconObjects.trash, 'stroke')}</button>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerAccessoryBar">
						<search>
							<input type="search" placeholder="Search text" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
					<div class="groupText">
						<p>For this setup the Toolbar itself can use the Default or Trailing layout modifiers. To have the Accessory Bar sit in a fixed position add the <code>.layoutFixed</code> modifier.</p>
						<br />
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
			
			<!-- "INLINE" ACCESSORY BAR -->
			<div class="containerGeneric excludePadding spacerDouble exampleToolbar" id="exampleToolbar2">
				<header class="containerToolbar layoutInlineAccessory">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconInterfaceElements.filter, 'stroke')}</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Inline Accessory Layout</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconShapes.rectangleOverlapHorizontal, 'stroke')}</button>
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconObjects.trash, 'stroke')}</button>
						</div>
						<search class="material-liquidglass-thin itemAccessory">
							<input type="search" placeholder="Search B" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerAccessoryBar">
						<search class="material-liquidglass-thin">
							<input type="search" placeholder="Search A" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
					<div class="groupText">
						<p>The <code>.layoutInlineAccessory</code> modifier is intended to hide and show the duplicated Accessory bar that sits inside the main toolbar. Duplicated content is required here so that everything layers correctly. Any duplicated items in the main toolbar should have the <code>.itemAccessory</code> class.</p>
						<br />
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
			
			<!-- VANISHING TITLE -->
			<div class="containerGeneric excludePadding spacerTriple exampleToolbar" id="exampleToolbar2">
				<header class="containerToolbar layoutDefault vanishing" id="disappearingToolbar">
					<div class="wrapperToolbarStart">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconInterfaceElements.filter, 'stroke')}</button>
						</div>
					</div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Vanishing Title</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<div class="pinToolbar material-liquidglass-thin">
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconShapes.rectangleOverlapHorizontal, 'stroke')}</button>
							<button data-button="action-transparent" class="toolbarItem">${generateIcon(iconObjects.trash, 'stroke')}</button>
						</div>
					</div>
				</header>
				<div class="scrollview inset-T" id="disappearingScrollview">
					<div class="groupText">
						<h1>Vanishing Title</h1>
						<p>The <code>.vanishing</code> modifier when combined with the toolbarVisibility() function will cause the title to hide by default and show after the set scroll height.</p>
						<br />
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
			<p>Toolbars are the primary way of adding a header to a view. They are designed to contain a title and buttons on each side. They can also contain navigation controls in the form of a Back Button and Aside Collapse Button.</p>
			<p>Accessory Bars sit inside the scrollview underneath the scrollview's Toolbar and will scroll with the content.</p>
			<p>Inline Accessory Bars will sit to the right of the Toolbar on larger screens. They require a different setup to standard Accessory Bars to work.</p>
			<p>Vanishing Toolbars hide the title until the Scrollview has scrolled past a defined point. You must include the <code>.vanishing</code> class on <code>.containerToolbar</code> and use the <code>toolbarVisibility()</code> function to make the standard state appear.</p>
			
			<h3>Functions</h3>
			<p>The <code>toolbarVisibility()</code> function is intended for hiding and showing the title on scroll. This function takes the options:</p>
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
toolbarVisibility({
	scrollview: "#name",
	toolbar: "#name",
	height: XXX
});
</pre>
			
			<h3>CSS</h3>
			<p>Refer to above examples for layout modifier classes.</p>
		</div>
	`,
	tabbars: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Tab Bars</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<h3 class="h6">Tab Bar</h3>
			<div class="containerGeneric excludePadding" id="exampleTabBar1">
				<div class="wrapperTabBar">
					<footer class="containerTabBar material-liquidglass-thin" id="tabBar1">
						<button data-button="tab" data-name="tabfirst" onclick="routetabs('tabfirst')">
							<div class="wrapper">
								${iconTab(iconObjects.handsetLeading)}
							</div>
							First
						</button>
						<button data-button="tab" data-name="tabsecond" onclick="routetabs('tabsecond')">
							<div class="wrapper">
								${iconTab(iconHuman.userCircle)}
							</div>
							Second
						</button>
						<button data-button="tab" data-name="tabthird" onclick="routetabs('tabthird')">
							<div class="wrapper">
								${iconTab(iconObjects.bag)}
							</div>
							Third
						</button>
						<button data-button="tab" data-name="tabfourth" onclick="routetabs('tabfourth')">
							<div class="wrapper">
								${iconTab(iconObjects.loupe)}
							</div>
							Fourth
						</button>
						<button data-button="tab" data-name="tabfifth" onclick="routetabs('tabfifth')">
							<div class="wrapper">
								<img src="app/images/ui/sidebar1.png" />
							</div>
							Fifth
						</button>
					</footer>
				</div>
				<div class="paddingContentTight" id="contentAreaTabs1">
					
				</div>
			</div>

			<h3 class="h6">Segmented Control</h3>
			<div class="containerGeneric" id="exampleTabBar2">
				<div class="controlSegmented material-liquidglass-thin" data-segments="display" data-size="small" id="tabBar2">
					<button data-button="segment" data-name="segmentfirst" onclick="routesegment('segmentfirst')">First</button>
					<button data-button="segment" data-name="segmentsecond" onclick="routesegment('segmentsecond')">Second</button>
					<button data-button="segment" data-name="segmentthird" onclick="routesegment('segmentthird')">Third</button>
					<button data-button="segment" data-name="segmentfourth" onclick="routesegment('segmentfourth')">Fourth</button>
					<button data-button="segment" data-name="segmentfifth" onclick="routesegment('segmentfifth')">Fifth</button>
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
&lt;div class="wrapperTabBar"&gt;
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
&lt;/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Tab Bars make use of <code>controllerTab()</code> and more information can be found in the Routing section.</p>
			
			<h3>CSS</h3>
			<p>The Tab Bar container should use Thin Liquid Glass material.</p>
		</div>
	`,
	scrollviews: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Scrollviews</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			
			<!-- SCROLLVIEW ONLY -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<div class="scrollview">
					<div class="groupText">
						<h1>Scrollview Only</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
			</div>
			
			<!-- TOOLBAR ONLY -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar Only</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="scrollview inset-T">
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
			</div>
			
			<!-- TOOLBAR AND SCROLLING ACCESSORY BAR -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar and scrolling Accessory Bar</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerAccessoryBar">
						<search>
							<input type="search" placeholder="Search" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
			</div>
			
			<!-- TOOLBAR AND FIXED ACCESSORY BAR -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar and fixed Accessory Bar</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="containerAccessoryBar layoutFixed">
					<search>
						<input type="search" placeholder="Search" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
						<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
					</search>
				</div>
				<div class="scrollview inset-TA">
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
			</div>
			
			<!-- TOOLBAR AND INLINE ACCESSSORY BAR -->
			<div class="containerGeneric excludePadding" id="scrollview1">
				<header class="containerToolbar layoutInlineAccessory">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar and Inline Accessory Bar</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<search class="material-liquidglass-thin itemAccessory">
							<input type="search" placeholder="Search" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
				</header>
				<div class="scrollview inset-T">
					<div class="containerAccessoryBar">
						<search>
							<input type="search" placeholder="Search" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
				</div>
			</div>
			
			<!-- TAB BAR ONLY -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<div class="scrollview inset-B">
					<div class="groupText">
						<h1>Tab Bar Only</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
				<div class="wrapperTabBar">
					<footer class="containerTabBar material-liquidglass-thin" id="tabBar1" data-target="contentAreaTabs1">
						<button data-button="tab" data-value="tab1" class="picked">
							<div class="wrapper">
								${generateIcon(iconShapes.starFivePoint, 'fill')}
							</div>
							First
						</button>
						<button data-button="tab" data-value="tab2">
							<div class="wrapper">
								${generateIcon(iconObjects.loupe, 'fill')}
							</div>
							Second
						</button>
						<button data-button="tab" data-value="tab3">
							<div class="wrapper">
								${generateIcon(iconObjects.bag, 'fill')}
							</div>
							Third
						</button>
						<button data-button="tab" data-value="tab4">
							<div class="wrapper">
								${generateIcon(iconObjects.folderHorizontal, 'fill')}
							</div>
							Fourth
						</button>
						<button data-button="tab" data-value="tab5">
							<div class="wrapper">
								${generateIcon(iconObjects.bell, 'fill')}
							</div>
							Fifth
						</button>
					</footer>
				</div>
			</div>
			
			<!-- TOOLBAR AND TAB BAR -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar and Tab Bar</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="scrollview inset-TB">
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
				<div class="wrapperTabBar">
					<footer class="containerTabBar material-liquidglass-thin" id="tabBar1" data-target="contentAreaTabs1">
						<button data-button="tab" data-value="tab1" class="picked">
							<div class="wrapper">
								${generateIcon(iconShapes.starFivePoint, 'fill')}
							</div>
							First
						</button>
						<button data-button="tab" data-value="tab2">
							<div class="wrapper">
								${generateIcon(iconObjects.loupe, 'fill')}
							</div>
							Second
						</button>
						<button data-button="tab" data-value="tab3">
							<div class="wrapper">
								${generateIcon(iconObjects.bag, 'fill')}
							</div>
							Third
						</button>
					</footer>
				</div>
			</div>
			
			<!-- TOOLBAR, FIXED ACCESSORY BAR, AND TAB BAR -->
			<div class="containerGeneric excludePadding spacerDouble" id="scrollview1">
				<header class="containerToolbar layoutDefault">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar, Fixed Accessory Bar, and Tab Bar</h1>
					</div>
					<div class="wrapperToolbarEnd"></div>
				</header>
				<div class="containerAccessoryBar layoutFixed">
					<search>
						<input type="search" placeholder="Search" id="pokemonSearch" />
						<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
						<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
					</search>
				</div>
				<div class="scrollview inset-TAB">
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
						<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
						<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
						<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
					</div>
				</div>
				<div class="wrapperTabBar">
					<footer class="containerTabBar material-liquidglass-thin" id="tabBar1" data-target="contentAreaTabs1">
						<button data-button="tab" data-value="tab1" class="picked">
							<div class="wrapper">
								${generateIcon(iconShapes.starFivePoint, 'fill')}
							</div>
							First
						</button>
						<button data-button="tab" data-value="tab2">
							<div class="wrapper">
								${generateIcon(iconObjects.loupe, 'fill')}
							</div>
							Second
						</button>
						<button data-button="tab" data-value="tab3">
							<div class="wrapper">
								${generateIcon(iconObjects.bag, 'fill')}
							</div>
							Third
						</button>
						<button data-button="tab" data-value="tab4">
							<div class="wrapper">
								${generateIcon(iconObjects.folderHorizontal, 'fill')}
							</div>
							Fourth
						</button>
						<button data-button="tab" data-value="tab5">
							<div class="wrapper">
								${generateIcon(iconObjects.bell, 'fill')}
							</div>
							Fifth
						</button>
					</footer>
				</div>
			</div>
			
			<!-- TOOLBAR, INLINE ACCESSORY BAR, AND TAB BAR -->
			<div class="containerGeneric excludePadding" id="scrollview1">
				<header class="containerToolbar layoutInlineAccessory">
					<div class="wrapperToolbarStart"></div>
					<div class="wrapperToolbarMiddle">
						<h1 class="headerToolbar">Toolbar, Inline Accessory Bar, and Tab Bar</h1>
					</div>
					<div class="wrapperToolbarEnd">
						<search class="mataerial-liquidglass-thin itemAccessory">
							<input type="search" placeholder="Search" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
				</header>
				<div class="scrollview inset-TB">
					<div class="containerAccessoryBar">
						<search>
							<input type="search" placeholder="Search" id="pokemonSearch" />
							<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
							<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
						</search>
					</div>
					<div class="groupText">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<img src="app/images/ui/materials-background.jpg" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p>Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
				</div>
				<div class="wrapperTabBar">
					<footer class="containerTabBar material-liquidglass-thin" id="tabBar1" data-target="contentAreaTabs1">
						<button data-button="tab" data-value="tab1" class="picked">
							<div class="wrapper">
								${generateIcon(iconShapes.starFivePoint, 'fill')}
							</div>
							First
						</button>
						<button data-button="tab" data-value="tab2">
							<div class="wrapper">
								${generateIcon(iconObjects.loupe, 'fill')}
							</div>
							Second
						</button>
						<button data-button="tab" data-value="tab3">
							<div class="wrapper">
								${generateIcon(iconObjects.bag, 'fill')}
							</div>
							Third
						</button>
						<button data-button="tab" data-value="tab4">
							<div class="wrapper">
								${generateIcon(iconObjects.folderHorizontal, 'fill')}
							</div>
							Fourth
						</button>
						<button data-button="tab" data-value="tab5">
							<div class="wrapper">
								${generateIcon(iconObjects.bell, 'fill')}
							</div>
							Fifth
						</button>
					</footer>
				</div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Scrollviews are designed to manage most scrollable regions within Rebar. To make a Scrollview you wrap the content you want to scroll in a <code>.scrollview</code> container and apply different classes to tell the container how much to inset itself.</p>
			
			<h3>Functions</h3>
			<p class="spacerTriple">There are no related functions.</p>
			
			<h3>CSS</h3>
			<table class="definitions spacerSingle">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>.inset-T</code></td>
						<td>Insets the Scrollview from the top by the height of the Toolbar.</td>
					</tr>
					<tr>
						<td><code>.inset-A</code></td>
						<td>Insets the Scrollview from the top by the height of the Accessory Bar.</td>
					</tr>
					<tr>
						<td><code>.inset-B</code></td>
						<td>Insets the Scrollview from the bottom by the height of the Tab Bar.</td>
					</tr>
					<tr>
						<td><code>.inset-X</code></td>
						<td>Insets the Scrollview from the bottom by the height of the Accessory Bar.</td>
					</tr>
				</tbody>
			</table>
			
			<p>It is intended to combine the different <code>.inset</code> classes together to get a Scrollview that fits within the bars of your view. For example if you have a Scrollview with a Toolbar and Tab Bar you would use the class <code>.inset-TB</code>.</p>
			${
				insertBanner({
					type: 'warning',
					content: 'It is important that the order of the letters in the class follows T A B X',
					icon: false,
					size: "large",
				})
			}
			<p>Due to the styling of the different OSes some will shrink the height of the Scrollview whereas others will add additional padding.</p>
			<p>If the Scrollview is a content container you should add the <code>paddingContent</code> class.</p>
		</div>
	`,
	sections: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Sections</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<section class="containerSection">
				<p class="excludeMargin">This is a standard section.</p>
			</section>
			<h2 class="headerSection">Header</h2>
			<section class="containerSection">
				<p class="excludeMargin">This is a section with a section header.</p>
			</section>
			<h2 class="headerSection withIcon">
				<span class="alwaysAccent containerIcon">${generateIcon(iconInterfaceElements.location, 'fill')}</span>
				<span>Header with Icon</span>
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
&lt;h1 class="headerSection withIcon"&gt;
	&lt;span class="alwaysAccent containerIcon"&gt;&lt;/span&gt;
	&lt;span&gt;Your header goes here&lt;/span&gt;
&lt;/h1&gt;
&lt;section class="containerSection"&gt;&lt;/section&gt;
</pre>
		</div>
	`,
	accordions: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Accordions</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="containerAccordion spacerSingle noBorder">
				<div class="headerAccordion">
					<h4>Default Style</h4>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p class="excludeMargin">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerSingle" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Section Style</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
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
			
			<div class="containerAccordion largeOpen spacerSingle" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Open on Larger Screens</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion largeSection spacerTriple" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Section on Larger Screens</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<h3>Section on Larger Screens</h3>
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			
			<div class="containerAccordion spacerHalf" data-accordiongroup="group1" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 1</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerHalf" data-accordiongroup="group1" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 1</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerHalf" data-accordiongroup="group1" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<div class="containerContent">
						<span id="accordionicon">${generateIcon(iconObjects.bell, 'fill')}</span>
						<h3>Accordion Group 1</h3>
					</div>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerTriple" data-accordiongroup="group1" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 1</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			
			<div class="containerAccordion spacerHalf" data-accordiongroup="group2" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 2</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerHalf active" data-accordiongroup="group2" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 2</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerHalf" data-accordiongroup="group2" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 2</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<div class="containerAccordion spacerTriple" data-accordiongroup="group2" id="exampleAccordion2">
				<div class="headerAccordion headerSection">
					<h3>Accordion Group 2</h3>
					<div class="containerChevron">${generateIcon(iconShapes.chevronSingleRight, 'fill')}</div>
				</div>
				<section class="containerAccordionContents">
					<div class="wrapper">
						<div class="containerSection">
							<p class="excludeMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						</div>
					</div>
				</section>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>Accordions are designed to hide content by default leaving only a header to click on to show that content. Accordions in Rebar are comprised of two pieces, <code>.headerAccordion</code> and <code>.containerAccordionContents</code> containers. You are required wrap these two containers in a <code>.containerAccordion</code> container.</p>
			<p>For Accordions that are supposed to look like a <code>.containerSection</code> with a <code>.headerSection</code> this requires a little more setup.</p>
			<p>It is not required to include the chevron SVG but it's recommended so that users can identify that this is an Accordion. You can include any style of chevron you want as long as it's wrapped in a <code>.containerChevron</code> container, the default preference is <code>iconShapes.chevronSingleRightFill</code>. By default Rebar points chevrons in the direction the respective OSes expect them to be in.</p>
			<p>If you wish to include a leading image wrap the image and the heading in a <code>.containerContent</code> wrapper. You must set the size of the image as Rebar does not enforce sizing here.</p>
<pre class="spacerTriple">
//STANDARD
&lt;div class="containerAccordion"&gt;
	&lt;div class="headerAccordion"&gt;
		&lt;h3&gt;&lt;/h3&gt;
		&lt;div class="containerChevron"&gt;&#36;{iconShapes.chevronSingleRightFill}&lt;/div&gt;
	&lt;/div&gt;
	&lt;section class="containerAccordionContents"&gt;
		&lt;div class="wrapper"&gt;&lt;/div&gt;
	&lt;/section&gt;
&lt;/div>

//REPLICATING A SECTION CONTAINER
&lt;div class="containerAccordion"&gt;
	&lt;div class="headerAccordion headerSection"&gt;
		&lt;h3&gt;&lt;/h3&gt;
		&lt;div class="containerChevron"&gt;&#36;{iconShapes.chevronSingleRightFille}&lt;/div&gt;
	&lt;/div&gt;
	&lt;section class="containerAccordionContents"&gt;
		&lt;div class="wrapper"&gt;
			&lt;div class="containerSection"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/section&gt;
&lt;/div&gt;
</pre>
			
			<h3>Functions</h3>
			<p class="spacerTriple">Accordions have an automatic click function associated with them. As long as your header has the <code>.headerAccordion</code> class then the click function will fire.</p>
			
			<h3>Styles</h3>
			<h4>Open on Larger Screens</h4>
			<p>If you need an accordion to be open by default on larger screens you can add the <code>.largeOpen</code> modifier along with the <code>$(window).on('resize', () => openAccordionsLargeScreens(1100)).trigger('resize');</code> function in the route with the accordion. You can set whatever value you want for the accordion to open but it is bound to the viewport, not the container.</p>
			
			<h4>Section on Larger Screens</h4>
			<p>If you need an accordion to appear as a section with no accordion functionality on larger screens you can add the <code>.largeSection</code> modifier. This is currently set to 700 px bound to the container within Rebar itself. If you need a different size you will need to manually overwrite this in <code>app.css</code>.</p>
			
			<h4>Exclusive Accordions</h4>
			<p class="spacerTriple">If you have a group of accordions where you want only one to be open at a time you can add the <code>data-accordiongroup=""</code> attribute to <code>.containerAccordion</code> to group them together. The click function is automatically handled on <code>.headerAccordion</code></p>
			
			<h3>CSS</h3>
			<p>Accordions don't carry much in the way of inherent styles. You are pretty free to style the contents as you see fit. The only styling requirement is if you want it to look like a Section Container then you need to follow the structure above for that to work.</p>
			<p>When placed in a Sidebar some styling will be applied to make sure the header fits in with the other headers.</p>
			<p>If you wish to have the accordion open on load, add the <code>active</code> class to the <code>.headerAccordion</code> and <code>.containerAccordionContents</code> containers.</p>
			<p>It's important to know that accordions do not carry an <code>overflow: hidden;</code> and if you need rounded corners you will need to use the <code>.hideOverflow</code> class.</p>
		</div>
	`,
	iframes: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">iframes</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<h3 class="h6">Default iframe</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-T"></iframe>
			</div>
			
			<h3 class="h6">With Accessory Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-A"></iframe>
			</div>
			
			<h3 class="h6">With Tab Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-B"></iframe>
			</div>
			
			<h3 class="h6">With Action Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-X"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar and Accessory Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-TA"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar and Tab Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-TB"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar and Action Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-TX"></iframe>
			</div>
			
			<h3 class="h6">With Accessory Bar and Tab Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-AB"></iframe>
			</div>
			
			<h3 class="h6">With Accessory Bar and Action Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-AX"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar, Accessory Bar, and Tab Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-TAB"></iframe>
			</div>
			
			<h3 class="h6">With Toolbar, Accessory Bar, and Action Bar</h3>
			<div class="containerGeneric excludePadding spacerTriple" id="scrollview1">
				<iframe src="https://www.toast-studio.com/link-badges/version-history/" class="inset-TAX"></iframe>
			</div>
			
			<h2>Documentation</h2>
			<p>The only thing Rebar does for iframes is remove their border and set them to 100% width and height of their parent container.</p>
		</div>
	`,
	tables: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Tables</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			
			<search class="spacerDouble">
				<input type="search" placeholder="Search" id="searchtablefield" />
				<div class="buttonClearSearch" title="Clear Search">${generateIcon(iconShapes.timesCircle, 'fill')}</div>
				<div class="iconSearch">${generateIcon(iconInterfaceElements.search, 'stroke')}</div>
			</search>
			
			<h3 class="h6">Information Table</h3>
			<table class="spacerTriple tableGuideIcons">
				<thead>
					<tr>
						<th>Purpose <span>${generateIcon(iconShapes.caretDown, 'fill')}</span></th>
						<th>Dimensions <span>${generateIcon(iconShapes.caretDown, 'fill')}</span></th>
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
			<div id="containerExampleTableData">
				<table class="spacerTriple data withBorder tableGuideIcons" id="tableData">
					<thead>
						<tr>
							<th>Purpose <span>${generateIcon(iconShapes.caretDown, 'fill')}</span></th>
							<th>Dimensions <span>${generateIcon(iconShapes.caretDown, 'fill')}</span></th>
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
			</div>
			
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
					<tr>
						<td><code>emptyIcon</td>
						<td>The icon to display in the Blank State when no results are found. It should be a Rebar icon.</td>
					</tr>
					<tr>
						<td><code>emptyMessage</td>
						<td>The text to display in the Blank State when no results are found.</td>
					</tr>
				</tbody>
			</table>
<pre class="spacerTriple">
$("#searchCompare").on("keyup", function() {
	searchTable({
		enteredText: this,
		parentID: "containerCompareTable",
		inputID: "searchCompare",
		emptyIcon: ,
		emptyMessage: "",
	})
})
</pre>
			
			<h3>CSS</h3>
			<p>The bulk of styling for tables are handled on the <code>table</code> element itself but there are some classes that will give you the Information and Data styles. Information is the default and Data builds on top so no class is required for the Information style but you will need to include the <code>.data</code> class to transform it in to a Data table. On top of that if you want a border you will need to add the <code>.withBorder</code> class.</p>
			<p class="spacerTriple">All of the default styling and layout that a browser will apply to a standard <code>table</code> element has been overrided. Rebar Tables are based on CSS Grid which gives you the most flexibility to handle responsiveness (whether you want the table to scroll or reflow is up to you). This means there is no default column sizing and you will have to define that yourself.</p>
		</div>
	`,
	banners: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
						${insertBackButton("Layout")}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Banners</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
	actionbars: `
			<header class="containerToolbar layoutDefault">
				<div class="wrapperToolbarStart">
					<div class="pinToolbar material-liquidglass-thin">
						<span onclick='routelayout({modifier: false, navtype: "backwards"})'>
							${insertBackButton("Layout")}
						</span>
						<button data-button="action-transparent" class="toolbarItem collapseAside">
							${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
						</button>
					</div>
				</div>
				<div class="wrapperToolbarMiddle">
					<h1 class="headerToolbar">Action Bars</h1>
				</div>
				<div class="wrapperToolbarEnd">
					<div class="pinToolbar material-liquidglass-thin">
						<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
					</div>
				</div>
			</header>
			<div class="scrollview inset-T paddingContent">
				<h2>Examples</h2>
				
				<!-- TRAILING LAYOUT -->
				<div class="containerGeneric excludePadding exampleToolbar">
					<div class="scrollview inset-X">
						<p style="padding: var(--base-gap-size);">The <code>.layoutTrailing</code> modifier will set the content to the end of the Action Bar. This is the default layout.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
					<footer class="containerActionBar layoutTrailing">
						<button data-button="action-transparent" class="primary">Don't Save</button>
						<button data-button="action-fill" class="primary material-liquidglass-tinted">Save</button>
					</footer>
				</div>
				
				<!-- SPLIT LAYOUT -->
				<div class="containerGeneric excludePadding exampleToolbar">
					<div class="scrollview inset-X">
						<p style="padding: var(--base-gap-size);">The <code>.layoutSplit</code> modifier will set the content with a <code>space-between</code> spacing.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
					<footer class="containerActionBar layoutSplit">
						<div class="pinActionBar">
							<button data-button="action-transparent" class="destructive">${generateIcon(iconObjects.trash, 'stroke')} Delete</button>
						</div>
						<div class="pinActionBar">
							<button data-button="action-transparent" class="primary">Don't Update</button>
							<button data-button="action-fill" class="primary material-liquidglass-tinted">Update</button>
						</div>
					</footer>
				</div>
				
				<!-- CENTER LAYOUT -->
				<div class="containerGeneric excludePadding exampleToolbar">
					<div class="scrollview inset-X">
						<p style="padding: var(--base-gap-size);">The <code>.layoutCenter</code> modifier will set the content to the center of the Action Bar.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
						<p style="padding-inline: var(--base-gap-size);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
						<p style="padding-inline: var(--base-gap-size);">Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
						<p style="padding-inline: var(--base-gap-size);">Phasellus a blandit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer placerat lectus nec lorem porta, sit amet auctor sapien dapibus. Nulla tincidunt enim tincidunt neque ultricies posuere. Nulla nibh lorem, condimentum ac fringilla quis, consectetur non sem. Nullam imperdiet lorem a odio eleifend pellentesque. Curabitur bibendum ex neque, et elementum elit ornare sed. Mauris tempor nisl elit, id vulputate metus scelerisque quis. Pellentesque consectetur feugiat sem id ornare. Sed rhoncus pellentesque placerat.</p>
					</div>
					<footer class="containerActionBar layoutCenter">
						<button data-button="action-fill" class="primary material-liquidglass-tinted">Install App</button>
					</footer>
				</div>
				
				<h2>Documentation</h2>
				<h3>HTML</h3>
				<p class="spacerTriple">Action Bars are a container for the primary action buttons of a view. You are free to place whatever content you need inside them.</p>
				
				<h3>Functions</h3>
				<p class="spacerTriple">Action Bars have no functions associated with them.</p>
				
				<h3>CSS</h3>
				<p class="spacerTriple">Action Bars come with several layout modifiers to help you place buttons correctly.</p>
			</div>
		`,
}

const modals = {
	dialogs: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Dialogs</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>HTML</h2>
			<p class="spacerTriple">Dialogs power all of the modals within Rebar and are the basis of Sheets, Lightboxes, Alerts, Toasts, the Shortcuts Panel, and the Install Banner. Dialogs are simple containers that use the <code>dialog</code> element and can be filled with type specific content. HTML examples for controls powered by Panels can be found in their own sections.</p>
			
			<h2>Functions</h2>
			<p class="spacerTriple">Summon a Dialog with the <code>showDialog()</code>. Dismissing is handled by the <code>dismissDialog()</code> function. There are no properties for the <code>showDialog()</code> function itself, it solely handles displaying the dialogs. For generating different dialogs view the Modal Types sections.</p>
			
			<h2>CSS</h2>
			<p>All styling is handled through the properties dialog types.</p>
		</div>
	`,
	sheets: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Sheets</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><button data-button="action-fill" class="primary" onclick="exampleSheetFull()">View</button></td>
					</tr>
					<tr>
						<td>Half Sheet</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleSheetHalf()">View</button></td>
					</tr>
					<tr>
						<td>Small Sheet</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleSheetSmall()">View</button></td>
					</tr>
					<tr>
						<td>Themed Sheet</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleSheetThemed()">View</button></td>
					</tr>
					<tr>
						<td>Toolbar Hidden Sheet</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleSheetNoToolbar()">View</button></td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Lightboxes</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<button data-button="action-fill" class="primary spacerDouble" onclick="exampleLightbox()">Show Lightbox</button>
			
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Alerts</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><button data-button="action-fill" class="primary" onclick="exampleAlertStandard()">View</button></td>
					</tr>
					<tr>
						<td>Destructive Action</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleAlertDestructive()">View</button></td>
					</tr>
					<tr>
						<td>Custom Content</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleAlertCustom()">View</button></td>
					</tr>
				</tbody>
			</table>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">Alerts are Dialogs that have a different purpose and different styling but function the same to Sheets. They both bring up a modal to display content, Alerts however are intended to be disruptive and force the choice of an option which means they can not be dismissed by clicking on the backdrop.</p>
			
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Toasts</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><button data-button="action-fill" class="primary" onclick="exampleToast1()">View</button></td>
					</tr>
					<tr>
						<td>Rebar Icon</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleToast2()">View</button></td>
					</tr>
					<tr>
						<td>Image</td>
						<td><button data-button="action-fill" class="primary" onclick="exampleToast3()">View</button></td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Shortcuts Panel</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Install Banner</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			${generateInstallPanel()}
			
			<button data-button="action-fill" class="secondary spacerTriple" onclick="resetInstallBanner()">Reset Local Storage</button>
			
			<h2>Documentation</h2>
			<h3>Banner and Sheet</h3>
			<p>The Install Banner is a Toast that will automatically show on first run in Mobile Safari while not running in <code>Standalone</code> mode. When tapped it will bring up a Half Sheet explaining how to install your app. The reason the Install Banner only shows in this narrow context is Mobile Safari has the capability to install PWAs but does not offer any UI to prompt the user to install whereas other browsers do.</p>
			<p>You do not need to do anything to invoke the Install Banner, it will automatically show as part of including Rebar. You do however need to provide it some info:</p>
			<ul>
				<li>You need to fill out the <code>appName</code> and <code>appEmail</code> constants in the <code>config.js</code> file.</li>
				<li>You need to supply an <code>icon.png</code> file in the root directory of your app.</li>
			</ul>
			<p>It's important to note the Install Banner is designed to only show once as to not frustrate users. If you wish to show the Install Banner or it's How to Install Sheet again you can invoke them with the <code>summonInstallBanner()</code> and <code>summonHowToInstallSheet()</code> functions respectively.</p>
			
			<h3>Panel</h3>
			<p>You can display an inline panel which will invoke the Install Sheet by including <code>generateInstallPanel()</code> inline in a view.</p>
		
		</div>
	`,
	whatsnewpanel: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routemodals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">What's New Panel</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><button data-button="action-fill" class="primary" onclick="summonWhatsNewSheet()">View</button></td>
					</tr>
					<tr>
						<td>Reset Local Storage</td>
						<td><button data-button="action-fill" class="secondary" onclick="resetWhatsNew()">Reset</button></td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Icons</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td class="alwaysMain">${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}</td>
						<td>Stroke</td>
						<td>A hollow style</td>
					</tr>
					<tr>
						<td class="alwaysMain">${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}</td>
						<td>Fill</td>
						<td>A solid style</td>
					</tr>
					<tr>
						<td class="alwaysMain">${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}</td>
						<td>Duo</td>
						<td>A dual tone style designed to highlight parts of the glyph</td>
					</tr>
					<tr>
						<td>${generateIcon(iconObjects.compass, 'multi')}</td>
						<td>Multi (Predefined)</td>
						<td>A multicolour icon set where colours are built-in to the SVG</td>
					</tr>
					<tr>
						<td>${generateIcon(iconObjects.highlighter, 'multi')}</td>
						<td>Multi (Accent)</td>
						<td>A multicolour icon set where some parts of the icon will use their parent's <code>accent</code> colour (and the <code>main</code> colour for parts that aren't highlighted)</td>
					</tr>
					<tr>
						<td>${generateIcon(iconInterfaceElements.switchDoubleTopOn, 'multi')}</td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Typography</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>This properties typography library are based on the CSS variables provided. Changing the <code>--base-font-size</code> will cause all typography to scale accordingly.</p>
			<h2 class="headerSection">Headings</h2>
			<section class="containerSection">
				<h1>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H1</h1>
				<h2>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H2</h2>
				<h3>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H3</h3>
				<h4>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H4</h4>
				<h5>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H5</h5>
				<h6 class="spacerDouble">${generateIcon(iconInterfaceElements.infoCircle, 'multi')} This is an H6</h6>
				
				<small class="excludeMargin">Headings have <code>text-wrap: balance;</code> applied to them resulting in a more pleasing look across multiple lines. An example with it applied:</small>
				<h3 class="spacerDouble textAlignCenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum neque a odio mattis suscipit. In tempor velit orci, ut ultrices orci pretium in. Nunc vitae elit ultricies, aliquet risus vitae, varius eros.</h3>
				
				<small class="excludeMargin">And an example without it applied:</small>
				<h3 class="textAlignCenter" style="text-wrap: wrap;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum neque a odio mattis suscipit. In tempor velit orci, ut ultrices orci pretium in. Nunc vitae elit ultricies, aliquet risus vitae, varius eros.</h3>
			</section>
			
			<h2 class="headerSection">Body</h2>
			<section class="containerSection">
				<p>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pretium justo. Ut nec finibus lacus, a elementum nulla. Ut consequat, turpis eget tempor pretium, ligula augue auctor urna, ac ultrices leo libero sed dui. Suspendisse potenti. Etiam a tempor ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus nisl vel mauris dignissim gravida. Etiam ac hendrerit elit, id condimentum mauris. Sed nec congue justo, eu gravida mi. Maecenas faucibus, purus sit amet tincidunt sodales, felis eros placerat ligula, accumsan consectetur tellus erat vitae nulla.</p>
				<p>Sed sit amet accumsan nibh, a vehicula magna. Nunc hendrerit massa vel magna faucibus luctus. Nunc eu malesuada dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ultricies sit amet mauris eget elementum. Duis finibus sapien at elit commodo, aliquet tincidunt augue mollis. Pellentesque malesuada ex at mollis feugiat. Mauris non consectetur sem. Ut non ultrices purus. Proin a ligula eu felis dapibus ultricies. Curabitur nec fringilla tellus.</p>
				<p class="textBold">This is bold text</p>
				<ul>
					<li>${generateIcon(iconInterfaceElements.infoCircle, 'multi')} First</li>
					<li>Second</li>
					<li>Third</li>
				</ul>
				<ol>
					<li>First</li>
					<li>Second</li>
					<li>Third</li>
				</ol>
				<p><a href="https://toast-studio.com/">This is a link</a></p>
				<small>This is small with a <a href="https://toast-studio.com/">link</a></small>
				<code>Text wrapped in a code tag</code>
				<br /><br />
				<pre>Text wrapped in a pre tag</pre>
				<kbd>Text wrapped in a kbd tag</kbd>
			</section>
			
			<h2 class="headerSection">Fonts</h2>
			<section class="containerSection">
				<p>This is some --font-regular text.</p>
				<p class="textRounded">This is some --font-rounded text.</p>
				<p class="textMonospace">This is some --font-monospace text.</p>
				<p class="textSerif">This is some --font-serif text.</p>
			</section>
		</div>
	`,
	dynamictype: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Dynamic Type</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Click on the Display Options button to see a preview',
					icon: false,
					size: 'large',
				})
			}
			<h2>Documentation</h2>
			<h3>Text Size</h3>
			<p>Dynamic Type is the text size engine of Rebar. Components are designed to scale with <code>--base-font-size</code> and Dynamic Type can override this with a new value. By default Rebar has 3 text sizes: <code>small</code> (12px), <code>medium</code> (16px), and <code>large</code> (24px). The default size is <code>medium</code>.</p>
			<p class="spacerTriple">Rebar comes with a Text Size Picker in the form of Display Options. You can set up your own custom picker but it is not recommended.</p>

			<h3>Bold Text</h3>
			<p>The <code>font-weight</code> of all components can be overriden with Dynamic Type as well. There are 2 included font weights and these are not changable: Regular and Bold. Each option corresponds to the same values for the <code>font-weight</code> CSS property.</p>
			<p class="spacerTriple">Rebar comes with a Bold Text Picker in the form of Display Options.</p>

			<h3>Fonts</h3>
			<p class="spacerTriple">Rebar comes with a range of fonts that match the different OSes and ones that support accessibility. A picker for this font is included in the Display Options and when set it will override ALL fonts of every component that do not have the <code>.ignoreFontOverride</code> class. You can set up your own custom picker but it is not recommended.</p>
		</div>
	`,
	images: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Images</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>These images are provided as part of Rebar to be displayed within it's components. They all have a colour baked in so will need to be edited to match your theme.</p>
			<img src="rebar/images/tick-light.svg" />
			<img src="rebar/images/tick-dark.svg" />
			<img src="rebar/images/times-light.svg" />
			<img src="rebar/images/times-dark.svg" />
			<img src="rebar/images/arrow-back-dark.svg" />
			<img src="rebar/images/arrow-back-light.svg" />
			<img src="rebar/images/arrow-forward-dark.svg" />
			<img src="rebar/images/arrow-forward-light.svg" />
			<img src="rebar/images/browser-brave.webp" srcset="rebar/images/browser-brave@2x.webp 2x" />
			<img src="rebar/images/browser-brave-dark.webp" srcset="rebar/images/browser-brave-dark@2x.webp 2x" />
			<img src="rebar/images/browser-chrome.webp" srcset="rebar/images/browser-chrome@2x.webp 2x" />
			<img src="rebar/images/browser-chrome-dark.webp" srcset="rebar/images/browser-chrome-dark@2x.webp 2x" />
			<img src="rebar/images/browser-edge.webp" srcset="rebar/images/browser-edge@2x.webp 2x" />
			<img src="rebar/images/browser-edge-dark.webp" srcset="rebar/images/browser-edge-dark@2x.webp 2x" />
			<img src="rebar/images/browser-firefox.webp" srcset="rebar/images/browser-firefox@2x.webp 2x" />
			<img src="rebar/images/browser-firefox-dark.webp" srcset="rebar/images/browser-firefox-dark@2x.webp 2x" />
			<img src="rebar/images/browser-opera.webp" srcset="rebar/images/browser-opera@2x.webp 2x" />
			<img src="rebar/images/browser-opera-dark.webp" srcset="rebar/images/browser-opera-dark@2x.webp 2x" />
			<img src="rebar/images/browser-safari.webp" srcset="rebar/images/browser-safari@2x.webp 2x" />
			<img src="rebar/images/browser-safari-dark.webp" srcset="rebar/images/browser-safari-dark@2x.webp 2x" />
			<img src="rebar/images/browser-samsunginternet.webp" srcset="rebar/images/browser-samsunginternet@2x.webp 2x" />
		</div>
	`,
	displayoptions: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Display Options</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="excludePadding" id="exampleDisplayOptions"></div>
			${
				generateDisplayOptions()
			}
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerDouble">There is no HTML setup required, the <code>generateDisplayOptions()</code> function will handle all of it for you.</p>
			
			<h3>Function</h3>
			<p>The <code>generateDisplayOptions()</code> function will generate all pickers for you (You can not pick and choose which pickers to show and hide). If any other display options are added in the future they will automatically be added to this function.</p>
			<p>This function sits inline in your appended HTML and will profive the Display Options as a return.</p>
			<p>You will also need to know:</p>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Appearance</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Click on the Display Options button to see a preview',
					icon: false,
					size: 'large',
				})
			}
			<h2>Documentation</h2>
			<p>Appearance is the theming engine of Rebar. By default Rebar has three themes: <code>system</code>, <code>light</code>, and <code>dark</code>. System will respond to the device Light and Dark modes but you can override this to stay locked to the Light or Dark theme.</p>
			<p>This system can be extended to offer other themes. A theme can be applied at the <code>body</code> level or targeted to any child container.</p>
			<p>Rebar comes with an Appearance Picker in the form of Display Options.</p>
		</div>
	`,
	accent: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Accent</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Click on the Display Options button to see a preview',
					icon: false,
					size: 'large',
				})
			}

			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p style="spacerTriple">Accent acts as the primary tint colour of Rebar. Rebar comes with the default accents for iOS, macOS, Android, and Windows built-in. Your own custom accent is called <code>default</code>. The Accent Picker will expose all built-in accent colours in your app if you enable the Accent Picker.</p>
			
			<h3>Functions</h3>
			<p>Rebar comes with an Accent Picker in the form of Display Options.</p>
			
			<h3>CSS</h3>
			<p>Accent is applied via the <code>data-accent</code> attribute on the <code>body</code> tag. If you need to apply an accent locally you can use the same data attribute on a container at any level. Here is an example to setup a custom accent:</p>
<pre>
[data-accent="custom"] { 
	--accentPrime: light-dark(
				oklch(51.7% 0.281 300.6),
				oklch(from oklch(51.7% 0.281 300.6) calc(l + 0.1) c h)
	);
	--accent: var(--accentPrime);
	
	&[data-contrast="more"] {
		--accent: light-dark(
					oklch(from var(--accentPrime) calc(l - 0.2) c h),
					oklch(from var(--accentPrime) calc(l + 0.2) c h)
		);
	}
}
</pre>
		<p>For custom accents it is important to include the Increased Contrast definition alongside the base definition.</p>
		<p>It is required that you have a default accent that is specified in your own <code>styles.css</code> stylesheet (It will need to use the same style rules as above).</p>
		</div>
	`,
	reducemotion: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Reduce Motion</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Click on the Display Options button to see a preview',
					icon: false,
					size: 'large',
				})
			}
			
			<h2>Documentation</h2>
			<p>Reduced Motion is a setting which when turned on will set all CSS transitions in your app to have a timing of 0 seconds. The device setting is respected and if set to on the user will be locked out of setting your app's version of the setting independantly.</p>
			<p>Rebar comes with a Reduced Motion Picker as part of Display Options.</p>
		</div>
	`,
	blankstates: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Blank States</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="containerGeneric excludePadding alwaysForegroundColor" id="exampleBlankState">
				${
					generateBlankState({
						icon: generateIcon(iconLogos.rebarThin, 'duo'), 
						title: 'No Data Found', 
						message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem tellus, luctus eu lacus ultricies, finibus molestie sapien.',
						actionFirst: 'Try Again', 
						actionIDFirst: 'tryAgain',
						actionSecond: 'Clear Filters', 
						actionIDSecond: 'clearFilters', 
					})
				}
			</div>
			
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
			<p>This function sits inline in your appended HTML and will provide the blank state code as a return.</p>
<pre>
generateBlankState({
	icon: '', 
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">CSS Variables</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
						<td><code>--backgroundPrime</code></td>
						<td>The base background colour.</td>
					</tr>
					<tr>
						<td><code>--background</code></td>
						<td>Based on the <code>--backgroundPrime</code> variable and has <code>color-mix()</code> applied for Android and Windows.</td>
					</tr>
					<tr>
						<td><code>--foregroundPrime</code></td>
						<td>A colour that contrasts against <code>--background</code>.</td>
					</tr>
					<tr>
						<td><code>--foreground</code></td>
						<td>Based on the <code>--foregroundPrime</code> variable and has <code>color-mix()</code> applied for Android and Windows.</td>
					</tr>
					<tr>
						<td><code>--divider</code></td>
						<td>Dividers and borders.</td>
					</tr>
					<tr>
						<td><code>--systempanelPrime</code></td>
						<td>Elements that overlay the app.</td>
					</tr>
					<tr>
						<td><code>--systempanel</code></td>
						<td>Based on the <code>--systempanelPrime</code> variable and has <code>color-mix()</code> applied for Android and Windows.</td>
					</tr>
					<tr>
						<td><code>--systempanel-lift</code></td>
						<td>Elements that sit on top of a <code>--systempanel</code> background.</td>
					</tr>
				</tbody>
			</table>
			${
				insertBanner({
					type: 'warning',
					content: 'Only use the <code>--*Prime</code> variables if necessary',
					size: 'small',
				})
			}
			
			<table class="definitions spacerTriple" id="effects">
				<thead>
					<tr>
						<th>Text</th>
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
						<td><code>--font-dyslexic-bold</code></td>
						<td>A bold font stack for Dyslexic users.</td>
					</tr>
					<tr>
						<td><code>--font-atkinson</code></td>
						<td>A font stack for users with low visibility.</td>
					</tr>
					<tr>
						<td><code>--font-atkinson-bold</code></td>
						<td>A bold font stack for users with low visibility.</td>
					</tr>
					<tr>
						<td><code>--font-shantell</code></td>
						<td>A font stack with a handwritten appearance.</td>
					</tr>
					<tr>
						<td><code>--font-productsans</code></td>
						<td>A font stack for the default Android font.</td>
					</tr>
					<tr>
						<td><code>--font-segoeui</code></td>
						<td>A font stack for the default Windows font.</td>
					</tr>
					<tr>
						<td><code>--font-sfpro</code></td>
						<td>A font stack for the default Apple font.</td>
					</tr>
					<tr>
						<td><code>--font-lexend</code></td>
						<td>A font stack for Dyslexic users.</td>
					</tr>
					<tr>
						<td><code>--base-font-size</code></td>
						<td>Used for fonts as well as anything that should scale with the size of text, to enable Dynamic Type like text scaling.</td>
					</tr>
					<tr>
						<td><code>--vertical-align</code></td>
						<td>Sets the alignment for SVGs and images included inside text tags</td>
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
						<td>Large box-shadows.</td>
					</tr>
					<tr>
						<td><code>--shadow-tight</code></td>
						<td>Small box-shadows.</td>
					</tr>
					<tr>
						<td><code>--base-time-length</code></td>
						<td>A standard time value for animations.</td>
					</tr>
					<tr>
						<td><code>--base-hover-length</code></td>
						<td>A standard time value for hover transitions.</td>
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
						<td><code>--toolbar-height</code></td>
						<td>The height of Toolbars.</td>
					</tr>
					<tr>
						<td><code>--accessorybar-height</code></td>
						<td>The height of Accessory Bars.</td>
					</tr>
					<tr>
						<td><code>--tabbar-height</code></td>
						<td>The height of Tab Bars.</td>
					</tr>
					<tr>
						<td><code>--actionbar-height</code></td>
						<td>The height of Action Bars.</td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Utility Classes</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Utility classes are styling classes that live in <code>helpers.css</code>. This CSS file is placed in the top layer to avoid styling conflicts.</p>
			
			<table class="definitions spacerTriple" id="config">
				<thead>
					<tr>
						<th>Classes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>excludeMargin</code></td>
						<td>
							<p>Removes <code>margin</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperExcludeMargin spacerSingle">
									<div></div>
									<div></div>
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperExcludeMargin">
									<div class="excludeMargin"></div>
									<div class="excludeMargin"></div>
									<div class="excludeMargin"></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>excludePadding</code></td>
						<td>
							<p>Removes <code>padding</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperExcludePadding spacerSingle">
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperExcludePadding excludePadding">
									<div></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>spacerHalf</code></td>
						<td>
							<p>Adds margin that's set to half the <code>--base-gap-size</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperSpacerHalf spacerSingle">
									<div></div>
									<div></div>
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperSpacerHalf">
									<div class="spacerHalf"></div>
									<div class="spacerHalf"></div>
									<div class="spacerHalf"></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>spacerSingle</code></td>
						<td>
							<p>Adds margin that's set to <code>--base-gap-size</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperSpacerSingle spacerSingle">
									<div></div>
									<div></div>
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperSpacerSingle">
									<div class="spacerSingle"></div>
									<div class="spacerSingle"></div>
									<div class="spacerSingle"></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>spacerDouble</code></td>
						<td>
							<p>Adds margin that's set to double the <code>--base-gap-size</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperSpacerDouble spacerSingle">
									<div></div>
									<div></div>
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperSpacerDouble">
									<div class="spacerDouble"></div>
									<div class="spacerDouble"></div>
									<div class="spacerDouble"></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>spacerTriple</code></td>
						<td>
							<p>Adds margin that's set to triple the <code>--base-gap-size</code>.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<div class="helperSpacerTriple spacerSingle">
									<div></div>
									<div></div>
									<div></div>
								</div>
								
								<h6>Applied</h6>
								<div class="helperSpacerTriple">
									<div class="spacerTriple"></div>
									<div class="spacerTriple"></div>
									<div class="spacerTriple"></div>
								</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><span><code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and <code>h6</code></span></td>
						<td>
							<p>Sets the font size to match the respective heading size.</p>
							<section class="containerSection excludeMargin">
								<h6>H1 Not Applied</h6>
								<h6 class="h1">H1 Applied</h6>
								<hr>
								<h6>H2 Not Applied</h6>
								<h6 class="h2">H2 Applied</h6>
								<hr>
								<h6>H3 Not Applied</h6>
								<h6 class="h3">H3 Applied</h6>
								<hr>
								<h6>H4 Not Applied</h6>
								<h6 class="h4">H4 Applied</h6>
								<hr>
								<h1>H5 Not Applied</h1>
								<h1 class="h5">H5 Applied</h1>
								<hr>
								<h1>H6 Not Applied</h1>
								<h1 class="h6 excludeMargin">H6 Applied</h1>
							</section>
						</td>
					</tr>
					<tr>
						<td><span><code>textAlignLeft</code>, <code>textAlignCenter</code>, and <code>textAlignRight</code></span></td>
						<td>
							<p>Sets the alignment of text.</p>
							<section class="containerSection excludeMargin">
								<p class="helperTextAlignLeft">Align Left not Applied</p>
								<p class="helperTextAlignLeft textAlignLeft">Align Left Applied</p>
								<hr>
								<p class="helperTextAlignCenter">Align Center not Applied</p>
								<p class="helperTextAlignCenter textAlignCenter">Align Center Applied</p>
								<hr>
								<p class="helperTextAlignRight">Align Right not Applied</p>
								<p class="helperTextAlignRight textAlignRight excludeMargin">Align Right Applied</p>
							</section>
						</td>
					</tr>
					<tr>
						<td><span><code>textRegular</code>, <code>textRounded</code>, <code>textMonospace</code>, and <code>textSerif</code></span></td>
						<td>
							<p>Sets the font-family of text.</p>
							<section class="containerSection excludeMargin">
								<p class="helperTextRegular">Regular not Applied</p>
								<p class="helperTextRegular textRegular">Regular Applied</p>
								<hr>
								<p class="helperTextRounded">Rounded not Applied</p>
								<p class="helperTextRounded textRounded">Rounded Applied</p>
								<hr>
								<p class="helperTextMonospace">Monospace not Applied</p>
								<p class="helperTextMonospace textMonospace">Monospace Applied</p>
								<hr>
								<p class="helperTextSerif">Serif not Applied</p>
								<p class="helperTextSerif textSerif excludeMargin">Serif Applied</p>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>textBold</code></td>
						<td>
							<p>Sets the <code>font-weight</code> to <code>bold</code>.</p>
							<section class="containerSection excludeMargin">
								<ul class="excludeMargin">
									<li class="helperTextBold">Not Applied</li>
									<li class="helperTextBold textBold">Applied</li>
								</ul>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysAccent</code></td>
						<td>
							<p>Sets the text and fill colours to the <code>--accent</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysAccent">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysMain</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--main</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysMain">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysMainInvert</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--mainInvert</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysMainInvert">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysDestructive</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--destructive</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysDestructive">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysPositive</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--positive</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysPositive">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysWarning</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--warning</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysWarning">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysInfo</code></td>
						<td>
							<p>Overrides any text and fill colours to the <code>--info</code> colour.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<span class="helperAlwaysColor">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
								
								<h6>Applied</h6>
								<span class="helperAlwaysColor alwaysInfo">
									${generateIcon(iconInterfaceElements.exclamationCircle, 'stroke')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'fill')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'duo')}
									${generateIcon(iconInterfaceElements.exclamationCircle, 'multi')}
									${generateIcon(iconObjects.paintbrush, 'multi')}
									${generateIcon(iconObjects.compass, 'multi')}
									Some text
								</span>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysBackgroundColor</code></td>
						<td>
							<p>Sets a container to always use <code>--background</code> for it's <code>background-color</code>.</p>
							<section class="containerSection excludeMargin containerGradient">
								<div class="helperAlwaysBackgroundColor spacerSingle">Not Applied</div>
								<div class="helperAlwaysBackgroundColor alwaysBackgroundColor">Applied</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>alwaysForegroundColor</code></td>
						<td>
							<p>Sets a container to always use <code>--foreground</code> for it's <code>background-color</code>.</p>
							<section class="containerSection excludeMargin containerGradient">
								<div class="helperAlwaysForegroundColor spacerSingle">Not Applied</div>
								<div class="helperAlwaysForegroundColor alwaysForegroundColor">Applied</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>noBackgroundColor</code></td>
						<td>
							<p>Removes the <code>background-color</code> of a container.</p>
							<section class="containerSection excludeMargin containerGradient">
								<div class="helperNoBackgroundColor spacerSingle">Not Applied</div>
								<div class="helperNoBackgroundColor noBackgroundColor">Applied</div>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>paddingContent</code></td>
						<td>Sets up the padding for a main content container.</td>
					</tr>
					<tr>
						<td><code>paddingContentTight</code></td>
						<td>A narrower version of <code>paddingContent</code>.</td>
					</tr>
					<tr>
						<td><code>disablePointer</code></td>
						<td>
							<p>Removes pointer events from an element.</p>
							<section class="containerSection excludeMargin">
								<button data-button="action-fill" class="primary">Not Applied</button>
								<button data-button="action-fill" class="primary disablePointer">Applied</button>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>hidden</code></td>
						<td>
							<p>Visually hides an element by applying <code>display: none;</code>.</p>
							<section class="containerSection spacerHalf">
								<button data-button="action-fill" class="primary">Not Applied</button>
								<button data-button="action-fill" class="primary hidden">Applied</button>
							</section>
							<small class="excludeMargin">Check the DOM to see the second button.</small>
						</td>
					</tr>
					<tr>
						<td><code>useInitialFill</code></td>
						<td>
							<p>Stops fill and color being applied to an element. If you have a custom class you must use <code>:not(.useInitialFill)</code> to stop that fill being applied.</p>
							<section class="containerSection excludeMargin">
								<h6>Not Applied</h6>
								<section class="spacerSingle">
									<span class="helperAlwaysColor">${generateIcon(iconHardware.standbyMode, 'multi')}</span>
									<span class="alwaysDestructive">${generateIcon(iconHardware.standbyMode, 'multi')}</span>
								</section>
								
								<h6>Applied</h6>
								<section>
									<span class="helperAlwaysColor useInitialFill">${generateIcon(iconHardware.standbyMode, 'multi')}</span>
									<span class="alwaysDestructive useInitialFill">${generateIcon(iconHardware.standbyMode, 'multi')}</span>
								</section>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>noDecoration</code></td>
						<td>
							<p>Sets the element to <code>text-decoration: none;</code>.</p>
							<section class="containerSection excludeMargin">
								<ul class="excludeMargin">
									<li><a href="https://toast-studio.com/">Not Applied</a></li>
									<li><a href="https://toast-studio.com/" class="noDecoration">Applied</a></li>
								</ul>
							</section>
						</td>
					</tr>
					<tr>
						<td><code>only-ios</code> <code>only-macos</code> <code>only-android</code> <code>only-windows</code></td>
						<td>
							<p>Makes an element only display on the respective OS. This is based on the OS theme the user sets, NOT the actual device OS. These can be combined to make an element show on more than one OS theme.</p>
							<section class="containerSection spacerHalf">
								<span class="only-ios alwaysAccent">${generateIcon(iconHardware.tabletphoneLandscape, 'stroke')}</span>
								<span class="only-macos alwaysAccent">${generateIcon(iconHardware.imac, 'stroke')}</span>
								<span class="only-android alwaysAccent">${generateIcon(iconLogos.android, 'fill')}</span>
								<span class="only-windows alwaysAccent">${generateIcon(iconLogos.windows, 'fill')}</span>
							</section>
							<small class="excludeMargin">To see the other icons change the OS theme.</small>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	breakpoints: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Breakpoints</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Rebar follows these standard breakpoints (you can use any that you require):</p>
			<table class="definitions spacerSingle" id="breakpoints">
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
			<p>It is prefered to use Range Syntax <code>@media (width >= 640px)</code> compared to classic syntax <code>@media (min-width: 640px)</code>. This results in cleaner queries that don't overlap when needing to do max-width breakpoints.</p>
		</div>
	`,
	increasedcontrast: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Increased Contrast</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			${
				insertBanner({
					type: 'info',
					content: 'Click on the Display Options button to see a preview',
					icon: false,
					size: 'large',
				})
			}
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p>There is no HTML setup required to support Increased Contrast.</p>
			
			<h3>Functions</h3>
			<p>Rebar comes with an Increased Contrast Picker in the form of Display Options.</p>
			<p>The device setting is respected and if set to on the user will be locked out of setting your app's version of the setting independantly.</p>
			
			<h3>CSS</h3>
			<p>Rebar uses Relative Colors to adjust the accent and automatically create an Increased Contrast verison. This uses the <code>--accentPrime</code> variable.</p>
		</div>
	`,
	spinners: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Spinners</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Example</h2>
			<div id="containerExampleSpinners">
				<div class="exampleSpinner">${generateSpinner(generateIcon(iconInterfaceElements.spinner, 'duo'))}</div>
				<div class="exampleSpinner">${generateSpinner(generateIcon(iconShapes.circleHalfVerticalRight, 'fill'))}</div>
				<div class="exampleSpinner">${generateSpinner(generateIcon(iconHuman.user, 'fill'))}</div>
				<div class="exampleSpinner">${generateSpinner(generateIcon(iconTransport.rocket, 'fill'))}</div>
			</div>
			
			<h2>Documentation</h2>
			<p>Spinners are generated with the <code>generateSpinner()</code> function which takes <code>icon</code> which is the icon you would like to have spin (it's recommended you use the Rebar icon set but any element could be used here).</p>
			<p>This function sits inline in your appended HTML and will provide the spinner code as a return.</p>
			
<pre>
generateSpinner(icon);
</pre>
			<p>It should be noted here that the element you set as the spinner will have a <code>z-index</code> of <code>-1</code> so that it automatically sits underneath any content that gets inserted in to the view that the spinner is in.</p>
			<p>Icons will always be filled with <code>main</code> and accented or multi icons will be overwritten.</p>
		</div>
	`,
	appglyph: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">App Glyph</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Documentation</h2>
			<p>The App Glyph is a place to display an image in blank content columns. It is not required but does help fill out blank views.</p>
			<p>You will need to manually insert an SVG in to <code>index.html</code>, an image should not be used here. Rebar Icons are unable to be used for this.</p>
			<p>It's recommended to make an SVG of 240 &times; 240 px with 10 px strokes. All objects should be converted in to paths and transparency is not allowed.</p>
		</div>
	`,
	thememetatag: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Theme Meta Tag</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>setMetaTheme()</code> is a function that is used to update the value in the <code>theme</code> meta tag. This is done to make sure the UI of Safari 15 and Android Chrome blends in with your app. It will set the theme value to your <code>--foreground</code> CSS variable's current value.</p>
			<p>Rebar is already set up to invoke this function when needed. So only call this when changing the current app theme in a custom way.</p>
		</div>
	`,
	colours: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Semantic Colours</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple" id="gridColours">
				<div class="tile">
					<div class="alwaysMain">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Main</span>
				</div>
				<div class="tile">
					<div class="alwaysMainInvert">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Main Inverted</span>
				</div>
				<div class="tile">
					<div class="alwaysAccent">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Accent</span>
				</div>
				<div class="tile">
					<div class="alwaysDestructive">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Destructive</span>
				</div>
				<div class="tile">
					<div class="alwaysPositive">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Positive</span>
				</div>
				<div class="tile">
					<div class="alwaysWarning">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Warning</span>
				</div>
				<div class="tile">
					<div class="alwaysInfo">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Info</span>
				</div>
				<div class="tile">
					<div class="alwaysAccent" style="--accent: var(--divider);">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">Divider</span>
				</div>
				<div class="tile">
					<div class="alwaysAccent" style="--accent: var(--systempanel);">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">System Panel</span>
				</div>
				<div class="tile">
					<div class="alwaysAccent" style="--accent: var(--systempanel-lift);">${generateIcon(iconShapes.circle, 'fill')}</div>
					<span class="label">System Panel Lift</span>
				</div>
			</div>
			
			<h2>Documentation</h2>
			<p>Rebar comes with a variety of semantic colours that are used in components and available to use within your app. Each colour is already set to work with Increased Contrast. It should be noted there are Multi style icons that make use of Semantic Colours.</p>
		</div>
	`,
	materials: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routevisuals({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Materials</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Rebar includes various materials to help your app feel more integrated with the different OSes. Each material is for a specific OS and will only show up there, if you wish to override this you can set the <code>data-os</code> attribute on a parent container.</p>
			<h2>Liquid Glass</h2>
			<p>Liquid Glass is the primary material for iOS, iPadOS, and macOS. It features a molten glass appearance that refracts light. The Liquid Glass that is included with Rebar is an approximation of this and is limited by the capabilities of CSS.</li>
			<p>Classes: <code>material-liquidglass-thin</code>, <code>material-liquidglass-thick</code>, and <code>material-liquidglass-tinted</code></p>
			<table class="tableMaterials spacerSingle">
				<thead>
					<tr>
						<th>iOS</th>
						<th>macOS</th>
						<th>Android</th>
						<th>Windows</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div class="containerMaterialExamples spacerTriple" data-os="ios">
				<div class="materialStandard material-liquidglass-thin"></div>
				<div class="materialStandard material-liquidglass-thick"></div>
				<div class="materialTinted material-liquidglass-tinted"></div>
			</div>
			
			<h2>Acrylic</h2>
			<p>Acrylic is one of the materials for Windows. It is made out of sheets of thick acrylic and allows some of the content underneath to filter through it.</p>
			<p>Attributes: <code>material-acrylic</code></p>
			<table class="tableMaterials spacerSingle">
				<thead>
					<tr>
						<th>iOS</th>
						<th>macOS</th>
						<th>Android</th>
						<th>Windows</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
					</tr>
				</tbody>
			</table>
			<div class="containerMaterialExamples spacerTriple" data-os="windows">
				<div class="materialStandard material-acrylic"></div>
				<div class="materialTinted material-acrylic"></div>
				<div class="materialStandard material-acrylic"></div>
			</div>
			
			<h2>Translucent</h2>
			<p>Translucent is a generic material for any OS. It is a blur with a saturation boost that comes in two different blur amounts.</p>
			<p>Attributes: <code>material-translucent-thick</code> and <code>material-translucent-thin</code></p>
			<table class="tableMaterials spacerSingle">
				<thead>
					<tr>
						<th>iOS</th>
						<th>macOS</th>
						<th>Android</th>
						<th>Windows</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
						<td>${generateIcon(iconShapes.checkmarkCircle, 'multi')}</td>
					</tr>
				</tbody>
			</table>
			<h3>Thick</h3>
			<div class="containerMaterialExamples spacerTriple">
				<div class="materialStandard material-translucent-thick"></div>
				<div class="materialTinted material-translucent-thick"></div>
				<div class="materialStandard material-translucent-thick"></div>
			</div>
			<h3>Thin</h3>
			<div class="containerMaterialExamples spacerTriple">
				<div class="materialStandard material-translucent-thin"></div>
				<div class="materialTinted material-translucent-thin"></div>
				<div class="materialStandard material-translucent-thin"></div>
			</div>
			
			<h2>Combining Materials</h2>
			<p>Materials can be combined to provide different looks for different OSes. In the example below we are using Liquid Glass and Acrylic (Android will not show anything).</li>
			<div class="containerMaterialExamples">
				<div class="materialStandard material-liquidglass-thin material-acrylic"></div>
			</div>
		</div>
	`,
}

const charts = {
	pie: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecharts({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Pie and Donut Charts</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple" id="exampleChartPie">
				<div class="containerSection" id="containerFruit">
					${
						generateChartPie({
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
					}
				</div>
				<div class="containerSection" id="containerVotes">
					${
						generateChartPie({
							title: 'Votes',
							donutSize: 50,
							legend: true,
							includeCount: false,
							data: [
								['For', 32],
								['Against', 18],
							]
						})
					}
				</div>
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">The only HTML necessary is a container with an ID tag. <code>generateChartPie()</code> will do the rest for you.</p>
			
			<h3>generateChartPie()</h3>
			<p>This is designed to work inline so it must be included in an <code>.append()</code>.</p>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
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
			<p>The CSS for these charts was originally found at <a href="https://www.freecodecamp.org/news/css-only-pie-chart/" target="_blank">this blog</a>.</p>
			<p>Most styles are already predefined for you. Rebar gives you 15 segment colours by default (using the <code>[data-segment="seg*"]</code> target). You can add more as you need and the colours can be overriden with your own CSS.</p>
			<p class="spacerTriple">The size of the donut hole is set via the function but can be overriden with CSS setting <code>--b: 10px !important;</code> on the chart container to override the inline specificity.</p>
		</div>
	`,
	gantt: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecharts({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Gantt Chart</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerTriple" id="exampleChartGantt">
				${
					generateChartGantt({
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
				}
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">The only HTML necessary is a container with an ID tag. <code>generateChartGantt()</code> will do the rest for you.</p>
			
			<h3>generateChartGantt()</h3>
			<p>This is designed to work inline so it must be included in an <code>.append()</code>.</p>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>primaryLabel</code></td>
						<td>This string will be used to label the primary column.</td>
					</tr>
					<tr>
						<td><code>images</code></td>
						<td>A <code>true</code> or <code>false</code> toggle for displaying images in the primary column.</td>
					</tr>
					<tr>
						<td><code>subtext</code></td>
						<td>A <code>true</code> or <code>false</code> toggle for displaying subtext in the primary column.</td>
					</tr>
					<tr>
						<td><code>badge</code></td>
						<td>A <code>true</code> or <code>false</code> toggle for displaying a badge in the primary column.</td>
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
						<td>An array of objects where each object contains a name string, a key string, a start value, and an end value. A string for an image URL can also be included. The name, key, and image will be used in the primary cell of the row. The start and end values will be used to generate the bar for the row.</td>
					</tr>
				</tbody>
			</table>
			
			<h3>CSS</h3>
			<p class="spacerTriple">There are no specific styling requirements for Gantt Charts but there are enough hooks to override styles if needed. By default the bars in the Gantt Chart will use the currently selected <code>--accent</code>.</p>
		</div>
	`,
	stats: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routecharts({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Stats Chart</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<h3>Landscape</h3>
			<div class="spacerTriple" id="exampleChartStatsLandscape">
				${
					generateChartStats({
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
				}
			</div>
			
			<h3>Portrait</h3>
			<div class="spacerTriple" id="exampleChartStatsPortrait">
				${
					generateChartStats({
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
				}
			</div>
			
			<h2>Documentation</h2>
			<h3>HTML</h3>
			<p class="spacerTriple">There is no HTML necessary. <code>generateChartStats()</code> will everything for you.</p>
			
			<h3>generateChartStats()</h3>
			<p>This is designed to work inline so it must be included in an <code>.append()</code>.</p>
			
			<table class="definitions spacerTriple">
				<thead>
					<tr>
						<th>Properties</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>orientation</code></td>
						<td>Set to <code>landscape</code> or <code>portrait</code>.</td>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Preferences System</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
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
		debug: false,
		openings: 0,
		firstRun: null,
		accent: ["default"],
		appearance: ["system"],
		dynamicTypeSize: {
			value: "medium",
			label: "Medium",
		},
		textWeight: "regular",
		textFont: "system",
		increaseContrast: "less",
		reduceMotion: "off",
		clickedDonationLink: false,
		os: "default",
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
					<td>Takes what is in <code>config.js</code> and compares it to what is in local storage. It will then append any values that are not present in local storage while leaving any existing values alone (if nothing is found in local storage it will save all default values to local storage).</td>
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
	saverecents: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Save Recents</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>This function gives you a consistent way to save recents to the Rebar preferences system. It's flexible in allowing you to define a max limit for how many items can be in the recents list. It's important to note this function will save new items to the <b>start</b> of the array.</p>
			<p>It is a requirement you have a preference group already set up and it contains a key named <code>recent</code> with a value of an empty array.</p>
			<pre>
saveRecent({
	group: string of the preference group name,
	id: string you want to save in to the array,
	max: number of limit of items,
})</pre>
		</div>
	`,
	toggleprefitems: `
			<header class="containerToolbar layoutDefault">
				<div class="wrapperToolbarStart">
					<div class="pinToolbar material-liquidglass-thin">
						<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
							${insertBackButton()}
						</span>
						<button data-button="action-transparent" class="toolbarItem collapseAside">
							${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
						</button>
					</div>
				</div>
				<div class="wrapperToolbarMiddle">
					<h1 class="headerToolbar">Toggle Pref Items</h1>
				</div>
				<div class="wrapperToolbarEnd">
					<div class="pinToolbar material-liquidglass-thin">
						<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
					</div>
				</div>
			</header>
			<div class="scrollview inset-T paddingContent">
				<p>This function gives you a consistent way to toggle the state of an item in the Rebar preferences system. It's important to note this function will save new items to the <b>start</b> of the array.</p>
				<p>It is a requirement you have a preference group already set up and it contains a key named <code>favourite</code> with a value of an empty array.</p>
				<pre>
	togglePrefItem({
		group: string of the preference group name,
		id: string you want to save in to the array,
	})</pre>
			</div>
		`,
	tipjar: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Tip jar</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Generate Tip Jar</h2>
			<p><code>generateTipJar()</code> is a function for creating a standard Tip Jar which can be displayed in whatever view you need. It is intended to be used inline and returns the HTML. The messaging is standard but will pick up <code>appName</code>, <code>appEmail</code>, <code>appPrivacyPolicy</code>, and <code>tipsLinks</code> from your config file to customise it.</p>
<pre>
generateTipJar({
	mini: true OR false,
});
</pre>
		
			<h2>Prompt for Tips</h2>
			<button data-button="action-fill" class="primary spacerSingle" onclick="exampleTipsPrompt()">Show Modal</button>
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
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Capitalize Word</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>capitalize()</code> is a function to help you capitalize a single word that you might automatically get as lowercase from some JSON. To make it work you need to pass text in to the function.</p>
			<p>It currently only supports single words. It will return the capitalized word.</p>
			<p>Example: ${capitalize(`this is a lowercase string`)}</p>
		</div>
	`,
	copytoclipboard: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Copy to Clipboard</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>copyToClipboard()</code> is a function to help you copy provided text to the clipboard. To make it work you need to pass text in to the function. It currently only supports text and will not copy images or other content to the clipboard.</p>
			<p>The function will also generate a Toast notifying users that the copy was successful (which will auto-dismiss after a short period of time).</p>
			<h3>Example</h3>
			<div class="containerSection" id="exampleCopy">
				<button onclick="copyToClipboard(new Date().getFullYear())" data-button="action-fill" class="primary">Copy Year</button>
				<input type="text"></input>
			</div>
		</div>
	`,
	settimelength:  `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Set Time Length</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>setTimeLength()</code> is a function that is used to set the <code>--base-time-length</code> variable. It will look to both the device and app settings to determine which is the appropriate value to set. When not setting the variable to 0 it will use the value in the <code>baseTimeLength</code> constant.</p>
		</div>
	`,
	temporaryanimationpause: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Temporary Animation pause</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>tempAnimationStop()</code> is a function that termporarily disables animations by setting <code>--base-time-length</code> to <code>0</code> and then resets <code>--base-time-length</code> to the default value.</p>
		</div>
	`,
	graburlparameters: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Grab URL Parameters</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>grabURLParameter()</code> is a function to retrieve the current URL query string for you. If the URL is set up as <code>?leading=trailing</code> it will return both <code>leading (query)</code> and <code>trailing (source)</code>. It will also return a <code>type</code> of </code>deeplink</code> which is used for the routing system.</p>
			<p><b>Example:</b> <code>${grabURLParameter().query}</code> and <code>${grabURLParameter().source}</code></p>
		</div>
	`,
	grabos: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Grab OS</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p><code>grabOS()</code> is a function to retrieve the OS of the device Rebar is currently loaded in for you. It will return a string of text with the OS name.</p>
			<p>Meanwhile <code>storedOS()</code> is a function to retrieve the OS the user has set in localstorage.<p>
			<p>For styling purposes Rebar automatically inserts two data attributes on the <code>body</code> tag. <code>data-os</code> is the OS theme stored in preferences and <code>data-device</code> is device's actual OS.</p>
			<ul>
				<li>Example: The device OS is <code>${grabOS()}</code></li>
				<li>Example: The stored OS is <code>${storedOS()}</code></li>
			</ul>
		</div>
	`,
	scrolltotop: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Scroll to Top</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-TX paddingContent">
			<p><code>scrollToTop()</code> is a function to scroll an element to the top of a list. It takes an ID as the single parameter (it must be an ID as other elements did not work well).</p>
			<h3>Examples</h3>
			<h4 id="header1">Header 1</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			
			<h4 id="header2">Header 2</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex id nulla finibus mollis nec id lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dictum, mi a dignissim maximus, risus ex ullamcorper erat, consectetur hendrerit nulla nisl ut urna. Cras nec purus diam. Phasellus tincidunt scelerisque purus, sollicitudin faucibus ex molestie in. Duis venenatis dui et est efficitur, vel euismod turpis feugiat. Duis hendrerit placerat porttitor.</p>
		</div>
		<footer class="containerActionBar">
			<div class="pinActionBar">
				<button data-button="action-fill" class="primary material-liquidglass-tinted" onclick="scrollToTop('header1')">${generateIcon(iconShapes.arrowSingleUp, 'stroke')} Header 1</button>
				<button data-button="action-fill" class="primary material-liquidglass-tinted" onclick="scrollToTop('header2')">${generateIcon(iconShapes.arrowSingleUp, 'stroke')} Header 2</button>
			</div>
		</footer>
	`,
	iconstyle: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Icon Style</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<p>Below is a set of functions that insert different icons based on the selected OS:</p>
		
			<h1 class="headerSection">
				<span class="h6">iconList()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct icon style for Item List buttons. It should be inserted as <code>iconList(icongroup.iconname)</code> (do not use <code>generateIcon()</code> here).</p>
				<ul>
					<li>iOS, macOS, and Android will use the fill style</li>
					<li>Windows will use the stroke style.</li>
				</ul>
				<h4>Example</h4>
				<span class="alwaysMain">${iconList(iconObjects.bookClosed)}</span>
			</div>
			
			<h1 class="headerSection">
				<span class="h6">iconTab()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct icon style for Tab Bar buttons. It should be inserted as <code>iconTab(icongroup.iconname)</code> (do not use <code>generateIcon()</code> here).</p>
				<ul>
					<li>iOS and macOS will use the fill style</li>
					<li>Android and Windows will use the stroke style.</li>
				</ul>
				<h4>Example</h4>
				<span class="alwaysMain">${iconTab(iconObjects.bookClosed)}</span>
			</div>
			
			<h1 class="headerSection">
				<span class="h6">iconGripper()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct icon style for Context Menu buttons. It should be inserted as <code>iconGripper()</code>.</p>
				<ul>
					<li>iOS and macOS will insert double chevrons</li>
					<li>macOS will display a single downwards chevron in toolbars<li>
					<li>Android will insert a single downwards thick chevron</li>
					<li>Windows will insert a single downwards thin chevron</li>
				</ul>
				<h4>Example</h4>
				<span class="alwaysMain">${iconGripper()}</span>
			</div>
			
			<h1 class="headerSection">
				<span class="h6">insertShareButton()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct icon style for Share buttons. It should be inserted as <code>insertShareButton("Label")</code>.</p>
				<h4>Example</h4>
				<span class="alwaysMain">${insertShareButton("Test")}</span>
			</div>
			
			<h1 class="headerSection">
				<span class="h6">insertBackButton()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct icon style for Back buttons. It should be inserted as <code>insertBackButton("label")</code>.</p>
				<h4>Example</h4>
				<span class="alwaysMain">${insertBackButton("Label")}</span>
			</div>
			
			<h1 class="headerSection">
				<span class="h6">insertConfirmationButton()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct Confirmation button. It should be inserted as <code>insertConfirmationButton()</code>.</p>
				<h4>Example</h4>
				${insertConfirmationButton()}
			</div>
			
			<h1 class="headerSection">
				<span class="h6">insertCancelButton()</span>
			</h1>
			<div class="containerSection">
				<p>A function that inserts the correct Cancel button. It should be inserted as <code>insertCancelButton()</code>.</p>
				<h4>Example</h4>
				${insertCancelButton()}
			</div>
		</div>
	`,
	filters: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Filters</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerSingle" id="exampleFilterControls">
				<button data-button="action-fill" class="primary" onclick="filterPeople('name')">Last Name (Smith)</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('nameMulti')">Last Name (Smith OR Patel)</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('weight')">60&#8211;70 kg</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('weightLow')">Below 60 kg</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('height')">Male and 178 cm</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('type')">Water Type</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('notwater')">Not Water Type</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('food')">Toast</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('key')">Key (Jane OR Alex)</button>
				<button data-button="action-fill" class="primary" onclick="filterPeople('all')">All</button>
			</div>
			
			<section class="containerSection excludePadding spacerTriple" id="exampleFilter"></section>
			
			<h2>Documentation</h2>
			<p>The <code>dataFilter()</code> function allows you to filter objects on multiple keys. You can filter these data types:</p>
			<ul>
				<li>Text Strings</li>
				<li>Numbers</li>
				<li>Booleans</li>
				<li>Arrays</li>
				<li>Objects</li>
			</ul>
			<p>The function is constructed as <code>dataFilter(dataObject, {command})</code>. You can chain multiple paramters together:</p>
			<table class="data withBorder" id="tableFilterSpecs">
				<thead>
					<tr>
						<th>Command</th>
						<th>Definition</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>''</td>
						<td>Returns all values in the original data set</td>
					</tr>
					<tr>
						<td>{property: 'string'}</td>
						<td>Filter a single Text String for an exact match</td>
					</tr>
					<tr>
						<td>{property: ['string1', 'string2', 'string3']}</td>
						<td>Filter multiple Text Strings (works as an OR filter)</td>
					</tr>
					<tr>
						<td>s => /x/i.test(s) && !/^x$/i.test(s)</td>
						<td>Filter a single Text String for a partial match (replace x for your string)</td>
					</tr>
					<tr>
						<td>{property: number}</td>
						<td>Filter Numbers</td>
					</tr>
					<tr>
						<td>{property: { $min: lowestNumber, $max: highestNumber }}</td>
						<td>Filter a range of Numbers</td>
					</tr>
					<tr>
						<td>{property: v => v * number}</td>
						<td>Filter Numbers based on an inequality statement where * can be >=, >, <=, or <</td>
					</tr>
					<tr>
						<td>{property: boolean}</td>
						<td>Filters Booleans with TRUE or FALSE</td>
					</tr>
					<tr>
						<td>{property: ['string1', 'string2']}</td>
						<td>Filters an Array (works as an OR filter when you include multiple strings)</td>
					</tr>
					<tr>
						<td>{property: {$all: ['string1', 'string2']}}</td>
						<td>Filters an Array (works as an AND filter)</td>
					</tr>
					<tr>
						<td>{property: {$none: ['string1', 'string2']}}</td>
						<td>Filters an Array (works as a NOR filter)</td>
					</tr>
					<tr>
						<td>{'level1.level2': *}</td>
						<td>Filters an Object using dot notation for the key and then any of the other commands can be used for the value</td>
					</tr>
					<tr>
						<td>{$key: ['string1', 'string2']}</td>
						<td>Filters the keys of the data structure you provide (works as an OR filter)</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	sorting: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Sorting</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerSingle" id="exampleFilterControls">
				<button data-button="action-fill" class="primary" onclick="sortPeople('nameAsc')">Last Name ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('nameDesc')">Last Name ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('heightAsc')">Height ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('heightDesc')">Height ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('typeAsc')">Type ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('typeDesc')">Type ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('glassesAsc')">Glasses ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('glassesDesc')">Glasses ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('foodAsc')">Breakfast ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('foodDesc')">Breakfast ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="sortPeople('none')">None</button>
			</div>
			
			<section class="containerSection excludePadding spacerTriple" id="exampleFilter"></section>
			
			<h2>Documentation</h2>
			<p>The <code>dataSort()</code> function allows you to sort objects on a single key in ascending or descending order. If you need sort on a second point, do a second pass. You can filter on these data types:</p>
			<ul>
				<li>Text Strings</li>
				<li>Numbers</li>
				<li>Booleans</li>
				<li>Arrays</li>
				<li>Objects</li>
			</ul>
			<p>Please note that booleans are <code>TRUE or FALSE</code> and this is what is sorted on so the order returned may be opposite to what you expect. Also Arrays are sorted by the first item in the Array.</p>
			<p>The function is constructed as <code>dataSort(dataObject, 'key', 'order')</code>. To sort by an Object use dot notation such as <code>'food.breakfast'</code>.</p>
		</div>
	`,
	grouping: `
		<header class="containerToolbar layoutDefault">
			<div class="wrapperToolbarStart">
				<div class="pinToolbar material-liquidglass-thin">
					<span onclick='routehelpers({modifier: false, navtype: "backwards"})'>
						${insertBackButton()}
					</span>
					<button data-button="action-transparent" class="toolbarItem collapseAside">
						${generateIcon(iconInterfaceElements.sidebarLeft, 'stroke')}
					</button>
				</div>
			</div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Grouping</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<button data-button="action-transparent" class="toolbarItem" onclick="miniThemePicker()">${generateIcon(iconObjects.paintbrush, 'multi')}</button>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T paddingContent">
			<h2>Examples</h2>
			<div class="spacerSingle" id="exampleFilterControls">
				<button data-button="action-fill" class="primary" onclick="groupPeople('nameAsc')">Last Name ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('nameDesc')">Last Name ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('weightAsc')">Weight ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('weightDesc')">Weight ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('glassesAsc')">Glasses ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('glassesDesc')">Glasses ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('typeAsc')">Type ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('typeDesc')">Type ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('genderAsc')">Gender ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('genderDesc')">Gender ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('foodAsc')">Breakfast ${generateIcon(iconShapes.caretUp, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('foodDesc')">Breakfast ${generateIcon(iconShapes.caretDown, 'fill')}</button>
				<button data-button="action-fill" class="primary" onclick="groupPeople('none')">None</button>
			</div>
			
			<section id="exampleFilter"></section>
			
			<h2>Documentation</h2>
			<p>The <code>dataGroup()</code> function allows you to group objects on a single key. You can filter on these data types:</p>
			<ul>
				<li>Text Strings</li>
				<li>Numbers</li>
				<li>Booleans</li>
				<li>Arrays</li>
				<li>Objects</li>
			</ul>
			<p>The function is constructed as <code>dataGroup(dataObject, 'key', 'direction')</code>. To group by an Object use dot notation such as <code>'food.breakfast'</code>. The function will sort the groups based on <code>asc</code> or <code>desc</code> direction you give it.</p>
			<p>To append content you will need to use a specific structure:</p>
<pre>
let groups = dataGroup(filterExample, parameter, direction)

$(PARENT ID).empty()
const $container = $(#ID);
	
groups.forEach((val, key) => {
	$container.append(HEADER APPEAND HERE);
	const $containerGroup = $(#KEY ID);
	
	val.forEach((item, id) => {
		$containerGroup.append(ROW APPEND HERE);
	});
});
</pre>
		</div>
	`,
}

//SHEET EXAMPLES
const sheetExamples = {
	full: `
		<header class="containerToolbar layoutSheet">
			<div class="wrapperToolbarStart"></div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Full Sheet</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<span data-function="closedialog" autofocus>${insertCancelButton()}</span>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T">
			<button data-button="action-fill" class="primary material-liquidglass-tinted spacerSingle" onclick="exampleSheetHalf()">View Half Sheet</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<img src="app/images/ui/materials-background.jpg" class="scrollviewexampleimage" />
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	half: `
		<header class="containerToolbar layoutSheet">
			<div class="wrapperToolbarStart"></div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Half Sheet</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<span data-function="closedialog" autofocus>${insertCancelButton()}</span>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T">
			<button data-button="action-fill" class="primary material-liquidglass-tinted spacerSingle" onclick="exampleSheetSmall()">View Small Sheet</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<img src="app/images/ui/materials-background.jpg" class="scrollviewexampleimage" />
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	small: `
		<header class="containerToolbar layoutSheet">
			<div class="wrapperToolbarStart"></div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Small Sheet</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<span data-function="closedialog" autofocus>${insertCancelButton()}</span>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T">
			<button data-button="action-fill" class="primary spacerSingle material-liquidglass-tinted" onclick="exampleToast2()">View Toast</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<img src="app/images/ui/materials-background.jpg" class="scrollviewexampleimage" />
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	themed: `
		<header class="containerToolbar layoutSheet">
			<div class="wrapperToolbarStart"></div>
			<div class="wrapperToolbarMiddle">
				<h1 class="headerToolbar">Themed Sheet</h1>
			</div>
			<div class="wrapperToolbarEnd">
				<div class="pinToolbar material-liquidglass-thin">
					<span data-function="closedialog" autofocus>${insertCancelButton()}</span>
				</div>
			</div>
		</header>
		<div class="scrollview inset-T">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<img src="app/images/ui/materials-background.jpg" class="scrollviewexampleimage" />
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
	notoolbar: `
		<button data-button="close" class="translucent" data-function="closedialog" title="Dismiss" autofocus>${generateIcon(iconShapes.times, 'fill')}</button>
		<div class="scrollview excludePadding">
			<div class="spacerSingle">
				<h1>Sheet Title</h1>
				<button data-button="action-fill" class="translucent">Add to Guides</button>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vitae dui eu congue. Ut pharetra iaculis urna eget varius. Mauris augue libero, fringilla id dui at, eleifend luctus quam. Sed scelerisque massa quis ultricies porta. Integer euismod, nisl eget auctor dapibus, enim ipsum sollicitudin urna, volutpat sollicitudin nunc nulla vitae odio. Duis pharetra euismod hendrerit. Phasellus dignissim, purus ut iaculis tempor, urna est porttitor ex, non venenatis justo nulla vel mi. Nulla eu ante vitae sapien suscipit convallis.</p>
			<img src="app/images/ui/materials-background.jpg" class="scrollviewexampleimage" />
			<p>Ut tristique, diam feugiat tempus pretium, quam neque aliquet risus, sed viverra ante arcu at arcu. Integer eget cursus tortor. Ut quam ante, cursus nec neque scelerisque, placerat gravida leo. Donec sit amet auctor orci. Aliquam aliquet in lectus vel ultrices. Fusce porta lacus neque, ac vestibulum risus blandit nec. Pellentesque semper mollis sapien in bibendum. Vestibulum consequat convallis cursus. Sed vel eros eget nisi lacinia fringilla. Curabitur ullamcorper malesuada magna, vel bibendum purus congue quis. Nulla finibus mauris magna, in mattis massa mattis vitae. In efficitur nisi ac arcu eleifend, in eleifend tellus ultricies. In blandit tincidunt turpis, ut hendrerit ante gravida in. Donec cursus elit varius facilisis bibendum. Mauris tincidunt tristique eros, ut ultrices ligula dictum id.</p>
			<p>Suspendisse rutrum quis leo vitae ullamcorper. Vivamus accumsan hendrerit nunc consectetur efficitur. Etiam ante nunc, suscipit vitae sem et, lacinia vehicula eros. Nulla facilisi. Donec eu congue nisi. Suspendisse potenti. Pellentesque at lacus nec purus aliquet varius. Sed nec est quis neque ornare vestibulum eu ut magna. Vivamus vitae rhoncus tortor. Donec efficitur pretium volutpat. Ut sed justo eu libero maximus placerat non eu nunc. Suspendisse non nisi porta, luctus dui non, tempor felis. Mauris gravida mi id turpis hendrerit, vitae pellentesque velit consectetur. Vestibulum sit amet nunc ut odio posuere scelerisque. Ut purus nisl, pretium ut cursus quis, elementum in elit.</p>
			<p>Praesent ut mi purus. Fusce fermentum leo sit amet felis pulvinar blandit. Cras cursus venenatis varius. Phasellus egestas hendrerit libero. Integer arcu dui, laoreet quis augue non, suscipit fermentum libero. Sed id egestas urna, quis aliquam magna. Mauris sagittis elit quis eleifend imperdiet. Nullam massa augue, hendrerit a fermentum at, tristique et odio.</p>
			<p>Vestibulum purus urna, efficitur consectetur venenatis non, efficitur et erat. Fusce bibendum orci sed sapien vehicula hendrerit. Suspendisse ac metus et urna commodo dignissim vitae id velit. Aliquam pretium urna eleifend metus vehicula egestas. Quisque fringilla felis mi, nec hendrerit lectus pharetra vitae. Etiam eleifend risus vitae mauris tincidunt consequat. Proin quis quam mattis, posuere erat vitae, tincidunt lorem. Aliquam viverra risus at sem euismod, in fermentum velit venenatis. Curabitur ante mauris, commodo in varius id, ornare in augue. Donec condimentum turpis non diam sagittis ultrices. Mauris in iaculis enim. Praesent volutpat vulputate iaculis.</p>
		</div>
	`,
}

//FILTER EXAMPLE
const filterExample = {
  jane:   { firstname: `jane`,   lastname: `smith`,  gender: `female`, height: 186, weight: 62, glasses: true,  type: [`fire`],               food: { breakfast: `oats`,        lunch: `grilled chicken salad`,     dinner: `salmon with greens` } },
  alex:   { firstname: `alex`,   lastname: `smith`,  gender: `male`,   height: 186, weight: 78, glasses: true,  type: [`water`, `psychic`],   food: { breakfast: `yogurt`,     lunch: `sushi rolls`,               dinner: `thai green curry` } },
  maria:  { firstname: `maria`,  lastname: `garcia`, gender: `female`, height: 171, weight: 58, glasses: false, type: [`steel`, `dark`],      food: { breakfast: `toast`,            lunch: `lentil soup`,               dinner: `paella` } },
  lee:    { firstname: `lee`,    lastname: `nguyen`, gender: `mixed`,  height: 175, weight: 68, glasses: true,  type: [`steel`, `fire`],      food: { breakfast: `toast`,   lunch: `banh mi`,                   dinner: `bulgogi + rice` } },
  taylor: { firstname: `taylor`, lastname: `smith`,  gender: `mixed`,  height: 162, weight: 52, glasses: false, type: [`dark`],               food: { breakfast: `yogurt`,             lunch: `quinoa bowl`,               dinner: `mushroom risotto` } },
  chris:  { firstname: `chris`,  lastname: `owen`,   gender: `male`,   height: 186, weight: 85, glasses: true,  type: [`grass`],              food: { breakfast: `smoothie`,           lunch: `falafel wrap`,              dinner: `pesto pasta` } },
  pat:    { firstname: `pat`,    lastname: `lee`,    gender: `female`, height: 168, weight: 60, glasses: false, type: [`electric`, `water`],  food: { breakfast: `toast`,    lunch: `poké bowl`,                 dinner: `lemon garlic prawn pasta` } },
  sam:    { firstname: `sam`,    lastname: `smith`,  gender: `male`,   height: 182, weight: 90, glasses: false, type: [`water`],              food: { breakfast: `oats`,        lunch: `chicken caesar wrap`,       dinner: `butter chicken + rice` } },
  jordan: { firstname: `jordan`, lastname: `patel`,  gender: `female`, height: 174, weight: 90, glasses: true,  type: [`normal`],             food: { breakfast: `porridge`,        lunch: `paneer tikka salad`,        dinner: `roast veg + couscous` } },
  casey:  { firstname: `casey`,  lastname: `martin`, gender: `mixed`,  height: 160, weight: 52, glasses: false, type: [`ghost`],              food: { breakfast: `granola`,           lunch: `pho`,                       dinner: `black bean tacos` } },
  riley:  { firstname: `riley`,  lastname: `garcia`, gender: `female`, height: 178, weight: 70, glasses: true,  type: [`normal`, `ghost`],    food: { breakfast: `bagel`,     lunch: `soba noodle salad`,         dinner: `grilled barramundi` } },
  toni:   { firstname: `toni`,   lastname: `nguyen`, gender: `female`, height: 171, weight: 59, glasses: false, type: [`fairy`],              food: { breakfast: `bagel`,   lunch: `caprese sandwich`,          dinner: `gnocchi + tomato basil` } },
  devon:  { firstname: `devon`,  lastname: `smith`,  gender: `male`,   height: 186, weight: 90, glasses: true,  type: [`fairy`],              food: { breakfast: `oats`,     lunch: `ramen`,                     dinner: `steak + salad` } },
  quinn:  { firstname: `quinn`,  lastname: `patel`,  gender: `mixed`,  height: 165, weight: 57, glasses: false, type: [`fairy`, `electric`],  food: { breakfast: `smoothie`,         lunch: `sourdough toastie`,         dinner: `stir-fry tofu + veg` } },
  morgan: { firstname: `morgan`, lastname: `smith`,  gender: `female`, height: 186, weight: 62, glasses: true,  type: [`rock`],               food: { breakfast: `muesli`,          lunch: `grilled halloumi salad`,    dinner: `lamb chops + beans` } },
  asha:   { firstname: `asha`,   lastname: `owen`,   gender: `female`, height: 168, weight: 61, glasses: false, type: [`ground`],             food: { breakfast: `yogurt`,            lunch: `butter dosa`,               dinner: `dal + jeera rice` } },
  blake:  { firstname: `blake`,  lastname: `garcia`, gender: `male`,   height: 178, weight: 73, glasses: true,  type: [`fire`],               food: { breakfast: `bagel`,                lunch: `peri-peri chicken bowl`,    dinner: `charred veg + couscous` } },
  nila:   { firstname: `nila`,   lastname: `lee`,    gender: `mixed`,  height: 168, weight: 56, glasses: false, type: [`fire`, `fairy`],      food: { breakfast: `pancakes`,         lunch: `sushi sashimi set`,         dinner: `pumpkin ravioli` } }
};
