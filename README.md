# LESS Theme Generator

This script will need to point at a directory of LESS files.  Inside that directory, there will need to be a themes.json file that lists all the various themes to be used to generate the CSS.  

The json file should look like this:

```json
{
	"themes": [
		"simple",
		"bright",
		"holiday",
		"summer"
	]
}
```

This script will pass a global "theme" variable into your less files that can then be used to import theme specific LESS.

Then, the CSS will be output into seperate directories for each theme inside your CSS directory.

To install, run:

npm install -g less-theme-generator

Then to use:

lesstheme LESSDIR
