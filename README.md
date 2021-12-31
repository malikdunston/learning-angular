## Learning Angular

### [From Angular Crash Course 2021 by Traversy Media](https://www.youtube.com/watch?v=3dHNOWTI7H8)
### [Another tutorial by Programming with Mosh](https://www.youtube.com/watch?v=k5E2AVpwsko)

## Tools
-	angular
-	fortawesome-angular
-	json-server

## Starting a Peoject
-	install cli
	npm i -g @angular/cli
-	create new app...
	ng new [name of app]
	-- you can optionally add router... or add it manually later.
-	move to directory, start dev server...
	ng serve
	-- runs on localhost:4200... opens up the default landing page...

## Files/Folders
-	config files:
	-	package.json (larger than react/vue)
		-	dependencies: core, forms, router, compiler, anims, etc...
		-	rxjs: observables/promises
		-	dev dep: jasmine, karma, etc... not as imp for now. learn later
		-	scripts
			-	build, test, lint, etc...
	-	ts.config (check to see how it watches...)
	-	angularj.son
		-	build.options.outputPath: dist/foldername by default...
			-	may want to change if making full-stack app...
		-	can add styles, cdns...
	-	src/app...
		-	all comps, etc go here.
-	src
	-	index like react
	-	main.ts == entry point to angular...
		-	import app modules. app is a module itself.
		-	can create own modules...
	-	/app

## Component Structure
-	generally a comp will have four files...
	-	ts file.. main class with props/methods, specifies template, stylesheet
	-	template: html file
	-	css files for specific comps...
	-	test files

## Making Components (Header Comp)
-	ng generate component components/header
	-	creates folders components, with header inside
	-	four files inside: css, html, ts, and .spec file...
	-	no need to import into parents like react...
	-	nesting:
		-	css: different structure than what I'm used to.
			-	ex (index.html): app-root -> app-header -> childelem
				-	you define styles on the child, inside app-header's stylesheet, not on the app-header inside app-root....
				-	probably has to do with rendering of the comps/timint...
		-	props/attrs:
			-	So... in the comp's class props...
				-	add the prop's name after @input()
				-	@input() is what "grabs" the props...
					-	@input() [propName]: [dataType]
					-	benefit over react is using the super(props) def...
				-	Have to import "Input" from @angular/core...
					-	similar to useEffect
					-	having to type @angular/thisthat... is example of how angular is powerful, yet bloated. starting to see this as I move along...
			-	"property has no initializer" error in ts...
				-	set "strictPropertyInitialization" to false in tsconfig...
					-	[from stackoverflow](https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc)
		-	Inline Styles
			-	format (inside html tag as attr): [ngStyle]="{'propName': value}"
				-	more complicated than react.
	-	events:
		-	syntax for event (use as attr..)
			(eventName)="functionName()"
	-	event emitters using Output
		-	syntax in Comp Class...
			@Output
		-	because we want the click function for button to do different things on different buttons, we want to use this.... ?

## Importing Modules...
-	how to import fontawesome...
	-	ng add [pkgname]
		app.modules automatically imports for you.

## Creating Services
-	use cli:
	ng generate service [directory]
-	import and add service into constructor of component using that service
	constructor(serviceName: ServiceNameFromImport)

## Observables...
-	in the service itself...
	Import Observable and of..
	serviceFunction(): Observable<type def>{
		const observable = of(thing observing);
		return observable...
	}
-	in comp using Observable...
	service.serviceFunction().subscribe(
		// function using the object passed as arg...
	)
	good for handling promises

## Mocking API Responses using json server
-	in cli...
	npm install json-server
-	in rootdir, add db.json
	each top-level key is a "collection"... basically its own db.
-	in cli (or in pkg.json scripts...) add command
	json-server --watch [filename from root dir] --port [whichever port you like...]
-	in browser... got to localhost:[portnumber]
	you should see welcome page, but using /[collection name] extension, you should see the json for that specific root-level collection...

## Http and data fetching...
-	must import into comp or service you're using...
	HttpClient, and HttpHeaders
-	Then define in ap.modules... 
	import HttpClientModule
	in imports, include HttpClientModule
-	in comp or service using this, add url to the db resource as a private prop
	private [varname] = [url]
-	in constructor, define http as HttpClient, then use wherever you need...
-	how to fetch the data for return...
	return this.[varname for HttpClient].get <ObservableName[]> (
		this.[varname]
	)
-	don't need to inject of anymore...

## Args in eventlisteners..
-	Remember, have to define any if noimplicitany is on...
	onWhatever(arg: any){...}

## ngClass
-	syntax:
	[ngClass]="{className: condition}"

## Http Headers
-	import HttpHeaders from angular/common/http...
-	set const obj at top of service:
	const httpOptions = {
		headers: new HttpHeaders({
			...set headers here...
		})
	}

