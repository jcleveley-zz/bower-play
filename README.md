# Manage external static dependencies

## Use cases

1. Non BBC libs such (jQuery)
2. BBC libs in other GIT repos (RUM)
3. BBC libs in SVN (Locator)

## Needs to

- Support SemVer
- Fetch via Git, Tar and maybe SVN
- Fetch only files we need not the whole repo
- Move files around to suit our project structure

## Option 1: Bower and Grunt

Install modules:

```sh
npm install
```

Run bower with grunt
```sh
grunt bower:install
```

Produces:
```
.
├── Gruntfile.js
├── README.md
├── bower.json
├── js
│   └── vendor
│       ├── imager.js
│       │   ├── Imager.js
│       │   └── Imager.min.js
│       ├── lodash
│       │   └── lodash.compat.js
│       └── rum-event-client
│           └── analytics_client.js
└── package.json

5 directories, 8 files

```
