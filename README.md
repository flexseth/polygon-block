### Todo 
### Release 1.0
- [ ] WordPress InputControl working on back-end, data persistance
- [ ] Basic return of API call with SWR, from Polygon
- [ ] Adding Debounce to wait to call API
- [ ] Showcase getting system date via data store calls `wp.select`
- [ ] Reuse code from React app to calculate date for API call
- [ ] Simple block display in editor
- [ ] Send off for review

### Release 1.2
- [ ] Create front-end widget to display data? - Edit create/block template
- [ ] Dynamic variant (rendered server side with php) - not SSR!
- [ ] Add in variant with Interactivity API
- [ ] Add API key settings field (in lieu of hard coded)
- [ ] Toggle Polygon views (daily, all time, monthly/etc) - Interactivity API
- [ ] Send off for review

### Todo: Enhancements
- [ ] *MUSTACHE*    API template, include a flag for API key on scaffolding
- [ ] *MUSTACHE*    Improve API template  


### Installation
- Register for Polygon/API key
- Clone repository
  `git clone https://github.com/flexseth/polygon-block`
- Add your key to the file API_KEY, - "REPLACE_WITH_YOUR_API_KEY"
- Scaffold block with SWR 
- Activate plugin
- Add Polygon block to your post or page to see it work
- 
### Changelog
- 1.2.3 Scaffolded using Ryan Welcher's SWR/API-template create-block package