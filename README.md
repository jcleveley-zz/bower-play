# Manage external static dependencies

## Use cases

1. Non BBC libs such (jQuery)
2. BBC libs in other GIT repos (RUM)
3. BBC libs in SVN (Locator)

## Needs to

- Support SemVer
- Fetch via Git, Tar and maybe SVN
- Fetch only files we need not the whole repo
- Move files around to suite our project structure

Install modules:

```sh
npm install
```

Run bower with grunt
```sh
runt bower:install
```

Produces:
```
vendor
├── js
│   ├── imager.js
│   │   └── Imager.min.js
│   └── rum-event-client
│       └── analytics_client.js
└── lodash
    └── lodash.compat.js

4 directories, 3 files
```
